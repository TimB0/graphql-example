// GraphQL types
const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
} = require('graphql');

module.exports = new GraphQLInputObjectType({
  name: 'StudentInputType',
  fields: () => ({
    id:          { type: new GraphQLNonNull(GraphQLString) },
    name:        { type: new GraphQLNonNull(GraphQLString) },
    class_id:    { type: new GraphQLNonNull(GraphQLString) }
  })
});
