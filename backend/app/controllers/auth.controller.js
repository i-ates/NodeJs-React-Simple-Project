const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;

var jwt = require("jsonwebtoken");

exports.signin = (req, res) => {
  User.findOne({
    wconst db = require("../models");
const config = require("../config/auth.config");
const User = db.user;

var jwt = require("jsonwebtoken");

exports.signin = (req, res) => {
  User.findOne({
    where: {
        doctorID: req.body.doctorID
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "Kullanıcı Bulunamadı!" });
      }

      var passwordIsValid = false;

      if (user.password === req.body.password){
          passwordIsValid = true;
      }

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Hatalı Şifre!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });
        res.status(200).send({
          id: user.id,
          doctorID: user.doctorID,
          hospitalID: user.hospitalID,
          accessToken: token
        });

    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
