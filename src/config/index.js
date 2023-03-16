const express = require("express");

const setBodyParser = (app) => {
  // use file json
  app.use(express.urlencoded({ extended: false }));
  // parse application/json
  app.use(express.json());
};

module.exports = {
  setBodyParser,
};
