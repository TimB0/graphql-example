'use strict';

// --- DATA ---

const classes = [{
  id: '1'
}];

let students = [{
  id: '1',
  name: 'Tom',
  class_id: '1'
}, {
  id: '2',
  name: 'Bill',
  class_id: '1'
}, {
  id: '3',
  name: 'Bob',
  class_id: '1'
}];

// --- READ FUNCTIONS ---

module.exports.getClass = function (classId) {
  console.log('getClass');
  return classes.find(c => c.id === classId);
};

module.exports.getClassId = function (classId) {
  console.log('getClassId');
  return classId;
};

module.exports.getStudent = function (studentId) {
  console.log('getStudent');
  return students.find(s => s.id === studentId);
};

module.exports.getStudents = function () {
  console.log('getStudents');
  return students;
};

module.exports.getStudentsForClass = function () {
  console.log('getStudentsForClass');
  return students;
};

// --- MUTATION FUNCTIONS

module.exports.removeStudent = function (studentId) {
  const removedStudent = {
    id: '1'
  };
  students = students.filter(s => s.id !== studentId);
  return removedStudent;
};








