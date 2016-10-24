// Require dependencies
const express = require('express');
const graphqlHTTP = require('express-graphql');

// Require our schema
const schema = require('./schema');

// Create our Express server
const app = express();

// Define the /graphql route
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));
/*
 * ‘graphiql: true’ will activate an online explorer with API documentation.
 * This feature is highly recommended in development, and can optionally be deactivated in production.
 */

// Finally start the server
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
