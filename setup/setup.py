from dotenv import load_dotenv
from pathlib import Path 
import os
from neo4j import GraphDatabase, RoutingControl
import pandas

# Getting Neo4J authentication from environment file
load_dotenv(dotenv_path=Path('../.env.local'))

NEO4J_URI = os.getenv('NEO4J_URI')
NEO4J_USERNAME = os.getenv('NEO4J_USERNAME')
NEO4J_PASSWORD = os.getenv('NEO4J_PASSWORD')
NEO4J_DB = os.getenv('NEO4J_DB')

NEO4J_AUTH = (NEO4J_USERNAME, NEO4J_PASSWORD)

# Specify data inputs
RELS_DATA = "relationships.csv"
NODES_DATA = "nodes.csv"

class Setup:
    def __init__(self) -> None:
        self.driver = GraphDatabase.driver(NEO4J_URI, auth=NEO4J_AUTH)

    def initDatabase(self): 
        # Clear database and create constraints
        queries = ['MATCH (n) DETACH DELETE n','CREATE CONSTRAINT IF NOT EXISTS FOR (a:Address) REQUIRE a.address IS UNIQUE', 
                 'CREATE CONSTRAINT IF NOT EXISTS FOR (t:Transaction) REQUIRE t.hash IS UNIQUE']
        for query in queries:
            self.driver.execute_query(query, database_=NEO4J_DB)

    def createRelationships(self):
        # Create transactions
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

    def createNodes(self): 
        #  Create addresses
        df = pandas.read_csv(NODES_DATA)
        query = []
        for _, row in df.iterrows():
            query.append(f'MERGE (:Address{{address: "{row.get("addressId")}", type:"{row.get("type")}"}})')
        query = list(dict.fromkeys(query))
        self.driver.execute_query( '\n'.join(query), database_=NEO4J_DB)

    def run(self):
        self.initDatabase()
        self.createNodes()
        self.createRelationships()

setup = Setup()
setup.run()



