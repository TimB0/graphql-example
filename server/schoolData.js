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
  return classes.find(c => c.id === classId);
};

module.exports.getStudent = function (studentId) {
  return students.find(s => s.id === studentId);
};

module.exports.getStudents = function () {
  return students;
};

module.exports.getStudentsForClass = function () {
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








