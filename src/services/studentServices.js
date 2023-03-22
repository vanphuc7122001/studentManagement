// import mmodel
const { Student } = require("../app/models");
//import Error

const getAllStudent = () => {
  return new Promise(async (resolve, reject) => {
    const students = await Student.findAll();
    resolve(students);
  });
};

const getInfoStudent = (id) => {
  return new Promise(async (resolve, reject) => {
    const student = await Student.findOne({
      where: {
        id,
      },
    });
    resolve(student);
  });
};

const createStudent = async (student) => {
  const newStudent = await Student.create(student);
  return newStudent;
};

const updateStudent = (id, student) => {
  return new Promise(async (resolve, reject) => {
    const updatedStudent = await Student.update(
      { ...student },
      {
        where: {
          id,
        },
      }
    );
    resolve(updatedStudent.toString());
  });
};

const deleteStudent = (id) => {
  return new Promise(async (resolve, reject) => {
    const statusDelete = await Student.destroy({
      where: {
        id,
      },
    });
    resolve(statusDelete);
  });
};

module.exports = {
  getInfoStudent,
  createStudent,
  updateStudent,
  deleteStudent,
  getAllStudent,
};
