// --- DATA ---

let {
  classes,
  students
} = require('./schoolData');

// --- READ FUNCTIONS ---

function getClass (classId) {
  return classes.find(c => c.id === classId);
}

function getStudent (studentId) {
  return students.find(s => s.id === studentId);
}

function getStudents () {
  return students;
}

function getStudentsForClass() {
  return students;
}

// --- MUTATION FUNCTIONS

function addStudent (studentInput) {
  // Create Student from StudentInput
  const student = Object.assign({}, studentInput);
  students.push(student);
  return student;
}

function removeStudent (studentId) {
  const removedStudent = getStudent(studentId);
  students = students.filter(s => s.id !== studentId);
  return removedStudent;
}

// --- EXPORTS

module.exports = {
  getClass,
  getStudent,
  getStudents,
  getStudentsForClass,
  addStudent,
  removeStudent
};









