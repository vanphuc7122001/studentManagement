const express = require("express");
const app = express();
const port = 3000;
const { initRoutes } = require("./routes");
const { setBodyParser } = require("./config");
const { connectDB, syncModel } = require("./app/models/index");
//connect DB
connectDB();

//set body parser
setBodyParser(app);

//initial Routes
initRoutes(app);

app.listen(port, () => console.log(`App listening on ${port}`));


