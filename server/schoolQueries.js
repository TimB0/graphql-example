// GraphQL types
const {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');

const {
  ClassType,
  StudentType
} = require('./SchoolTypes');

// Functions to access data
const {
  getClass,
  getStudent,
  getStudents
} = require('./schoolServices.js');

/**
 * Top-level element: QUERIES
 */
module.exports = new GraphQLObjectType({
  name: 'Query',
  description: 'Queries regarding classes',

  // A list of root elements from our schema
  fields: () => ({
    class: {
      type: ClassType,
      description: 'Get a class',
      args: {
        id: {
          description: 'id of the class',
          type: GraphQLString
        }
      },
      resolve: (root, { id }) => getClass(id),
    },
    student: {
      type: StudentType,
      description: 'Get a student',
      args: {
        id: {
          description: 'id of the student',
          type: GraphQLString
        }
      },
      resolve: (root, { id }) => getStudent(id)
    },
    students: {
      type: new GraphQLList(StudentType),
      description: 'Get all students',
      resolve: (root, { id }) => getStudents()
    }
  })
});