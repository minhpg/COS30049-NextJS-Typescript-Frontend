# COS30049 - Computing Technology Innovation Project - Blockchain Transaction Information Visualization System 

[Vercel + AuraDB Demo](https://cos-30049-next-js-typescript-frontend.vercel.app/)

## Universal Requirements
### Database Design and Implementation
Design and implement the necessary database structure that aligns with the project's requirements. This involves creating tables, defining relationships, and ensuring efficient data storage and retrieval.

### Server-Side Logic
Implement the backend logic necessary for handling user interactions, data processing, and responding to frontend requests. This includes creating APIs for data submission and retrieval.

### Integration with Front-End
Ensure smooth integration between the user interface and the backend functionalities. Test and debug interactions to guarantee proper data flow and real-time updates.

### User-Friendly Design  
Implement mechanisms for dynamically generating content based on user actions or data changes (e.g., real-time content update). 

Well-crafted messages for ensuring a positive user experience in various scenarios, including but not limited to the following:
1. Upload Successfully: "Your file has been received and is currently undergoing processing."
2. Unsupported File Type: "Invalid file type. Please upload a 'sol' file for auditing."
3. File or Item Not Found: “The address/product could not be found.”
4. Server Connection Error: "We're currently facing connectivity issues. Please try again later."

## Data Analysis Specific Requirements
### Transaction Data 
The transaction data for the completion of this assignment can be found in this linkLinks to an external site.. Students are required to import the entire set of provided transaction data into a designated graph database. It is also important to thoroughly verify the accuracy and integrity of the data, ensuring the absence of any data corruption or omissions.
### Data Storage 
All transaction data must be stored in a graph database for efficient retrieval and visualization. As an example, students are encouraged to consider employing the Neo4j graph database for this purpose. Furthermore, students are also welcome to explore and implement alternative graph database solutions that align with the project's goals.
### Optimized Data Retrieval and Display  
Given real-world practicality, the entire graph data should notbe loaded into the frontend all at once. When users search for an address, the backend API(s) will return only one-hop connected addresses. Users can further investigate the connected addresses by checking neighboring addresses to explore the next/previous hop (one hop at a time) of connections.

## Deploying
Easiest way to deploy the application is via `docker-compose`. 

Run `npm run docker:up` to build and run containers with the required services.

### Deploying manually
#### Using Neo4J
A Neo4J instance is required to host the necessary transaction data for the application.

Initialize a Neo4J instance and provide credentials as shown in `.env.local.example` in your local environment. Create `.env.local` for Next.js environment as well.

#### Seeding Neo4J
The provided data can be parsed and seeded to Neo4J using the Python install script at `/setup`.

Install Python 3 and run these commands:

```shell
cd ./setup
pip install -r requirements.txt
python setup.py
```

#### Building Next.js
Due to some dependencies using older version of react, we will need to include `--legacy-peer-deps` flag to allow dependency installation
``` shell
npm install --legacy-peer-deps
```
Start development server with
```shell
npm run dev
```
or build and start server
```shell
npm run build
npm run start
```

## Implementation
This project was implemented entirely in Typescript and React with [Next.js](https://nextjs.org/), GraphQL ([Apollo Server & Client](https://www.apollographql.com/)) and [Neo4J](https://neo4j.com/).

## Design
Using [tremor UI Library](https://github.com/tremorlabs/tremor) by [TremorLabs](https://github.com/tremorlabs).

## API
Using [Apollo Server & Client](https://www.apollographql.com/) with [Neo4J GraphQL Library](https://github.com/neo4j/graphql).

See `docs/schema.md` for GraphQL Schema Definition (Generated by [Neo4J GraphQL Library](https://github.com/neo4j/graphql) & [graphql-markdown](https://github.com/exogen/graphql-markdown))




