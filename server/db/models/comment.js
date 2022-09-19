"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.Project, {
        foreignKey: "project_id",
        as: "project",
      })
    }
  }
  Comment.init(
    {
      text: DataTypes.STRING,
      creationDate: DataTypes.DATE,
      photoUrl: DataTypes.STRING,
      project_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Comment",
    }
  )
  return Comment
}
