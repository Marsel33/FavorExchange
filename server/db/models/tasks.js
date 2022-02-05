'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Barters}) {
      // define association here
      this.hasOne(Barters,({foreignKey:'task_id'}))

    }
  }
  Tasks.init({
    title: DataTypes.STRING,
    service: DataTypes.TEXT,
    offer: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Tasks',
  });
  return Tasks;
};
