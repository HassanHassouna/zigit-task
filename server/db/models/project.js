"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Project.hasMany(models.Comment, {
        foreignKey: "project_id",
        as: "comments",
      })
    }
  }
  Project.init(
    {
      projectName: DataTypes.STRING,
      url: DataTypes.STRING,
      photoUrl: DataTypes.STRING,
      status: DataTypes.STRING,
      endDate: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Project",
    }
  )
  return Project
}
