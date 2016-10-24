// GraphQL types
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
} = require('graphql');

// Functions to access data
const {
  getClass,
  getStudent,
  getStudents,
  getStudentsForClass,
  removeStudent
} = require('./schoolData.js');

// Following schema describes this simple graph of objects:
//
//   |-------| 1      n |---------|
//   | Class | -------- | Student |
//   |-------|          |---------|
//

/**
 * Define our own classType
 */
const classType = new GraphQLObjectType({
  name: 'Class',
  description: 'A class in the school',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The id of the class'
    },
    students: {
      type: new GraphQLList(studentType),
      description: 'The students registered in the class, or an empty list if none',
      resolve: schoolClass => getStudentsForClass(schoolClass)
    }
  })
});

/**
 * Define our own studentType
 */
const studentType = new GraphQLObjectType({
  name: 'Student',
  description: 'A student',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'The id of the student'
    },
    name: {
      type: GraphQLString,
      description: 'The name of the student'
    },
    class: {
      type: classType,
      description: 'The class of the student',
      resolve: student => getClass(student.class_id)
    },
    class_id: {
      type: GraphQLString,
      description: 'The class_id of the student'
    }
  })
});

/**
 * Top-level element: QUERIES
 */
const queryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Queries regarding classes',

  // A list of root elements from our schema
  fields: () => ({
    class: {
      type: classType,
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
      type: studentType,
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
      type: new GraphQLList(studentType),
      description: 'Get all students',
      resolve: (root, { id }) => getStudents()
    }
  })
});

/**
 * Top-level element: MUTATIONS
 */
const mutationType = new GraphQLObjectType({
  name: 'School_Mutations',
  description: 'These are the things we can change about our school',
  fields: () => ({
    removeStudent: {
      type: studentType,
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

// Export GraphQL schema
module.exports = new GraphQLSchema({
  query: queryType,
  mutation: mutationType
});






