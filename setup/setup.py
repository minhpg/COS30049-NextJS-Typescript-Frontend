from dotenv import load_dotenv
from pathlib import Path 
import os
from neo4j import GraphDatabase, RoutingControl
import pandas

# Getting Neo4J authentication from environment
# load_dotenv(dotenv_path=Path('../.env.local'))
NEO4J_URI = os.getenv('NEO4J_URI')
NEO4J_USERNAME = os.getenv('NEO4J_USERNAME')
NEO4J_PASSWORD = os.getenv('NEO4J_PASSWORD')
NEO4J_DB = os.getenv('NEO4J_DB')

NEO4J_AUTH = (NEO4J_USERNAME, NEO4J_PASSWORD)

# Specify data inputs
RELS_DATA = "relationships.csv"
NODES_DATA = "nodes.csv"

class Setup:
    '''Setup class for seeding database'''
    def __init__(self) -> None:
        error = True
        while(error == True):
            try:
                self.driver = GraphDatabase.driver(NEO4J_URI, auth=NEO4J_AUTH)
                print("Connected to Neo4j!")
                print(NEO4J_URI)
                error == False
                break
            except Exception as e:
                print("Trying to connect to Neo4j...")
                print(e)
                continue

    def initDatabase(self): 
        '''Clear database and create neccessary constraints'''
        queries = ['MATCH (n) DETACH DELETE n','CREATE CONSTRAINT IF NOT EXISTS FOR (a:Address) REQUIRE a.address IS UNIQUE', 
                 'CREATE CONSTRAINT IF NOT EXISTS FOR (t:Transaction) REQUIRE t.hash IS UNIQUE']
        for query in queries:
            self.driver.execute_query(query, database_=NEO4J_DB)
        print("Initialized Neo4J")

    def createRelationships(self):
        '''Create transaction edges in database'''
        df = pandas.read_csv(RELS_DATA)
        for _, row in df.iterrows():
            fields = []
            from_address  = row.pop('from_address')
            to_address = row.pop('to_address')
            for k,v in row.items():
                if(isinstance(v, str)): # string values
                    v = f'"{v}"'
                if k == "value": # Convert large value to int
                    v = int(v.replace('"',""))
                if k == "block_timestamp": # Specify datetime type for block_timestamp
                    v = f'datetime({{epochSeconds: {v}}})'
                if(isinstance(v, float) or isinstance(v, int)): # Convert all number fields to float
                    v = float(v)
                if k in ["block_number", "transaction_index"]: # Convert block_number and transaction_index back to int
                    v = int(v)
                fields.append(f"{k}: {v}")
            fields_str = ", ".join(fields)

            # Create transactions as edges
            # query = f'MATCH (to:Address), (from:Address) WHERE to.address = "{to_address}" AND from.address = "{from_address}" CREATE (from)-[:TRANSACTION{{{ fields_str }}}]->(to)'

            # Create transactions as nodes
            query = f'MATCH (to:Address), (from:Address) WHERE to.address = "{to_address}" AND from.address = "{from_address}" CREATE (t:Transaction{{{ fields_str }}}), (from)-[:BUY]->(t), (to)-[:SELL]->(t)'
            try:
                self.driver.execute_query(query, database_=NEO4J_DB)
            except Exception as e:
                print(e)
        print("Created Relationships from "+RELS_DATA)


    def createNodes(self): 
        '''Create nodes in database'''
        df = pandas.read_csv(NODES_DATA)
        query = []
        for _, row in df.iterrows():
            query.append(f'MERGE (:Address{{address: "{row.get("addressId")}", type:"{row.get("type")}"}})')
        query = list(dict.fromkeys(query))
        self.driver.execute_query( '\n'.join(query), database_=NEO4J_DB)
        print("Created Nodes from "+NODES_DATA)


    def run(self):
        '''Run seeding script'''
        self.initDatabase()
        self.createNodes()
        self.createRelationships()

setup = Setup()
setup.run()



