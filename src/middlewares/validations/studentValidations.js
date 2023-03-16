const checkEmpty = (req, res, next) => {
  const { fullName, age, numberClass } = req.body;
  if (fullName && age && numberClass) {
    next();
  } else {
    res
      .status(500)
      .send("Không được để chống các trường age, fullName, numberClass");
  }
};

const checkNumberClass = (req, res, next) => {
  const { fullName, age, numberClass } = req.body;
  if (numberClass >= 1 && numberClass <= 12) {
    next();
  } else {
    res.status(500).send("numberClass phải nằm trong khoảng 1 => 12");
  }
};

module.exports = {
  checkEmpty,
  checkNumberClass,
};
