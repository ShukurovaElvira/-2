const { sequelize } = require("..");
const { Sequelize } = require("sequelize");

class Mark extends Sequelize.Model {}

Mark.init(
  {
    id: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.DataTypes.UUIDV4,
      primaryKey: true,
    },
    subjectId: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    mark: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { sequelize: sequelize, modelName: "mark" }
);

module.exports = Mark;
