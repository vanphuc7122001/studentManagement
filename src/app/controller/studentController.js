let studentList = require("../../utils/studentList");
const {
  getInfoStudent,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../../services/studentServices");

class studentController {
  index(req, res) {
    res.status(200).send(studentList);
  }

  async show(req, res) {
    let id = req.params.id;
    const student = await getInfoStudent(id, studentList);
    console.log(student);
    if (!student) {
      res.status(404).send("Not Found !");
    } else {
      res.status(200).send(student);
    }
  }

  create(req, res) {
    let student = req.body;
    const newStudent = createStudent(student);
    if (newStudent) {
      // res.status(201).send(`Thêm thành công sinh viên ${respone.fullName}`);
      studentList = [...studentList, newStudent];
      return res
        .status(201)
        .send(`Thêm thành công sinh viên ${newStudent.fullName}`);
    } else {
      res.send("Có lổi khi thêm");
    }
  }

  update(req, res) {
    const { id } = req.params;
    let { age, fullName, numberClass } = req.body;
    const updatedStudent = updateStudent(
      id,
      age,
      fullName,
      numberClass,
      studentList
    );
    if (updatedStudent) {
      res.send(`Sửa Thông tin của student có id là ${id}`);
    } else {
      res.send("Not found !");
    }
  }

  delete(req, res) {
    const { id } = req.params;
    const deletedStudent = deleteStudent(id, studentList);
    if (deletedStudent) {
      res.send(`Delete student ${deletedStudent.fullName} have id : ${id}`);
    } else {
      res.send("Not found!");
    }
  }
}

module.exports = new studentController();
