const studentRouter = require("./student");

const initRoutes = (app) => {
  app.use("/students", studentRouter);
};

module.exports = {
  initRoutes,
};
