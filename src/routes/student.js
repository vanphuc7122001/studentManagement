const express = require("express");
const studentRouter = express.Router();
const studentController = require("../app/controller/studentController");
const {
  checkEmpty,
  checkNumberClass,
} = require("../middlewares/validations/studentValidations");

studentRouter.post("/", checkEmpty, checkNumberClass, studentController.create);
studentRouter.put("/:id", studentController.update);
studentRouter.delete("/:id", studentController.delete);
studentRouter.get("/:id", studentController.show);
studentRouter.get("/", studentController.index);
module.exports = studentRouter;
