'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Barters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Tasks,Profils}) {
      // define association here
      this.belongsTo(Tasks,({foreignKey:'task_id'}))
      this.belongsTo(Profils,({foreignKey:'initiator'}))
    }
  }
  Barters.init({
    task_id: DataTypes.INTEGER,
    initiator: DataTypes.INTEGER,
    opponent: DataTypes.INTEGER,
    status:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Barters',
  });
  return Barters;
};