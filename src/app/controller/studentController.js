const {
  getInfoStudent,
  createStudent,
  updateStudent,
  deleteStudent,
  getAllStudent,
} = require("../../services/studentServices");
const ApiError = require("../../utils/handleError");
class studentController {
  async index(req, res, next) {
    const students = await getAllStudent();
    console.log(JSON.stringify(students));
    if (students.length >= 1) {
      res.status(200).json(students);
    } else {
      res.status(404).json({ msg: "Not Found !" });
    }
  }

  async show(req, res, next) {
    let id = req.params.id;
    const student = await getInfoStudent(id);
    console.log(student);
    if (!student) {
      res.status(404).json({ msg: "Not Found !" });
    } else {
      res.status(200).send(student);
    }
  }

  async create(req, res, next) {
    let student = req.body;
    const newStudent = await createStudent(student);
    if (newStudent) {
      return res
        .status(201)
        .send(`Thêm thành công sinh viên ${newStudent.fullName}`);
    } else {
      res.status(500).json({ msg: "An Error hap}pend while create student !" });
    }
  }

  async update(req, res, next) {
    const { id } = req.params;
    let student = req.body;
    const updatedStudent = await updateStudent(id, student);
    if (updatedStudent == 1) {
      res.send(`Sửa Thông tin của student có id là ${id}`);
    } else {
      res.status(404).json({ msg: "Not Found !" });
    }
  }

  async delete(req, res, next) {
    const { id } = req.params;
    const statusDelete = await deleteStudent(id);
    if (statusDelete) {
      res.send(`Delete student  have id : ${id}`);
    } else {
      res.status(404).json({ msg: "Not Found !" });
    }
  }
}

module.exports = new studentController();
