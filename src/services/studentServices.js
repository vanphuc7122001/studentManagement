const getInfoStudent = async (id, studentList) => {
  const indexStudent = await studentList.findIndex((student) => {
    return id == student.id;
  });
  if (indexStudent !== -1) {
    student = studentList[indexStudent];
    return student;
  } else {
    return false;
  }
};

const createStudent = (student) => {
  const newStudent = {
    id: Math.random(),
    ...student,
  };
  return newStudent;
};

const updateStudent = (id, age, fullName, numberClass, studentList) => {
  const indexStudent = studentList.findIndex((student) => student.id == id);
  if (indexStudent !== -1) {
    const oldStudent = studentList[indexStudent];
    const updatedStudent = { ...oldStudent, age, fullName, numberClass };
    studentList[indexStudent] = updatedStudent;
    return updatedStudent;
  } else {
    return false;
  }
};

const deleteStudent = (id, studentList) => {
  const indexStudent = studentList.findIndex((student) => student.id == id);
  if (indexStudent !== -1) {
    const deletedStudent = studentList[indexStudent];
    studentList.splice(indexStudent, 1);
    return deletedStudent;
  } else {
    return false;
  }
};

module.exports = {
  getInfoStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};
