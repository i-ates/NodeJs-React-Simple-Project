const authJwt = require("./authJwt");

module.exports = {
  authJwt,
};
const db = require("../models");
const User = db.user;

checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  User.findOne({
    where: {
      doctorID: req.body.doctorID
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Failed! Username is already in use!"
      });
    }
  });
};



const verifySignUp = {
};

module.exports = verifySignUp;
