module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    hospitalID: {
      type: Sequelize.STRING
    },
    doctorID: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  });

  return User;
};
                                                                                                                                                                                                                                                                                                                   module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    hospitalID: {
      type: Sequelize.STRING
    },
    doctorID: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  });

  return User;
};
