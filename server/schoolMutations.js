// GraphQL types
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
} = require('graphql');

const {
  StudentType
} = require('./SchoolTypes');

const StudentInputType = require('./StudentInputType');

// Functions to access data
const {
  addStudent,
  removeStudent
} = require('./schoolServices.js');

/**
 * Top-level element: MUTATIONS
 */
module.exports = new GraphQLObjectType({
  name: 'Mutation',
  description: 'These are the things we can change about our school',
  fields: () => ({
    createStudent: {
      type: StudentType,
      description: 'Create a student',
      args: {
        student: {
          description: 'Student to create',
          type: new GraphQLNonNull(StudentInputType)
        }
      },
      resolve: (value, { student }) => {
        return addStudent(student);
      }
    },
    removeStudent: {
      type: StudentType,
      description: 'Remove a student',
      args: {
        id: {
          description: 'ID of the student to remove',
          type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: (value, { id }) => {
        return removeStudent(id);
      }
    }
  })
});
