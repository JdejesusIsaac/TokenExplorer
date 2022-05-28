# Graphql-ERC20-Uniswap-pool-explorer

 A GraphQL API to source data on any ERC-20 token such as price, total supply, etc directly from the blockchain.
 
1. Setting up nodejs project: Working with Apollo-server-express, express, graphql and graphql-import NPM packages to set up server.

2.  Connecting to Alchemy web3.js @alch/alchemy-web3 to Instantiate Smart contracts using Abi and Mainnet Address. Then calling view fucntions using             alchemy/web3

3.  Define Schema for view functions in "Schema.graphql"
 
 
4. fetch data for schema or "resolve them" using Typescript.

5.  Querying our API through Apollo GraphQL Playground.

### Main Stack
 
 1.  Google's TypeScript - gts : npx gts init
 
 2.  typeScript-Node- ts-node:  npm i ts-node

 3.  Apollo-Server-Express - apollo-server-express: npm i apollo-server-express

 4. Express - express: npm i express

 5. Graphql- graphql: npm i graphql

 6.  Graphql-Import - graphql-import: npm i graphql-import
 
 7. Alch/Web3 - @alch/alchemy-web3npm: i @alch/alchemy-web3


### How to start with the Project

1. Go to the terminal

2. Clone this repo.

3. Run git clone <url> on your local terminal. ( <url> - the URL you find in your remote repo after cloning)

4. Then cd to the respective repo.

5. Run npm install.

To run Apollo server locally run $ node --exec ts-node --files src/index.ts

Your development server is up and running on localhost:4000.






 
