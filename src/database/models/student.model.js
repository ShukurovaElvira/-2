const { sequelize } = require("..");
const { Sequelize } = require("sequelize");
const Mark = require("./mark.model");

class Student extends Sequelize.Model {}

Student.init(
  {
    id: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    surname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    dateBirth: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
  { sequelize: sequelize, modelName: "student" }
);
Student.hasMany(Mark);

Mark.belongsTo(Student, {
  foreignKey: "studentId",
});


module.exports = Student;
