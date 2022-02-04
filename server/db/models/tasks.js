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
    static associate({Profils,Barters}) {
      // define association here
      this.belongsToMany(Profils,({through:'Barters',foreignKey:'task_id'}))

    }
  }
  Tasks.init({
    title: DataTypes.STRING,
    service: DataTypes.TEXT,
    offer: DataTypes.TEXT,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Tasks',
  });
  return Tasks;
};
