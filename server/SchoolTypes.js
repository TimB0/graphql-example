// GraphQL types
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} = require('graphql');

// Functions to access data
const {
  getClass,
  getStudentsForClass
} = require('./schoolData.js');

/**
 * Define our own classType
 */
const ClassType = new GraphQLObjectType({
  name: 'Class',
  description: 'A class in the school',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The id of the class'
    },
    students: {
      type: new GraphQLList(StudentType),
      description: 'The students registered in the class, or an empty list if none',
      resolve: schoolClass => getStudentsForClass(schoolClass)
    }
  })
});

/**
 * Define our own studentType
 */
const StudentType = new GraphQLObjectType({
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
      type: ClassType,
      description: 'The class of the student',
      resolve: student => getClass(student.class_id)
    },
    class_id: {
      type: GraphQLString,
      description: 'The class_id of the student'
    }
  })
});

module.exports = {
  ClassType,
  StudentType
};
