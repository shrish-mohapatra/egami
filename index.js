// External modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const { graphqlHTTP } = require("express-graphql");
const graphql_schema = require("./src/api/graphql/schema");

const app = express();
const port = 5000;

// Setup middleware
app.use(cors())
app.options('*', cors())
app.use(bodyParser.json());

// Setup GraphQL
app.use('/api', graphqlHTTP((req, res) => ({
    schema: graphql_schema,
    graphiql: true
})))

app.listen(port, () => {
    console.log("The server is running on port", port);
})