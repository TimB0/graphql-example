/**
 * Schema entry point
 */

const {
  GraphQLSchema,
} = require('graphql');

// Top-level objects
const schoolQueries = require('./schoolQueries');
const schoolMutations = require('./schoolMutations');

// Our schema describes this simple graph of objects:
//
//   |-------| 1      n |---------|
//   | Class | -------- | Student |
//   |-------|          |---------|
//

// Export GraphQL schema
module.exports = new GraphQLSchema({
  query: schoolQueries,
  mutation: schoolMutations
});
