const { Sequelize } = require("sequelize");
const {
  HOST,
  USER,
  PASSWORD,
  DB,
  dialect,
  PORT,
} = require("../../config/dbConfig");
const { createStudentModel } = require("./studentModel");
const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: dialect,
  port: PORT,
});

const Student = createStudentModel(sequelize);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

const syncModel = async () => {
  await sequelize.sync({ alter: true });
  console.log("Successfully synced");
};

module.exports = {
  connectDB,
  syncModel,
  Student,
};
