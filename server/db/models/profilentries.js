'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProfilEntries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProfilEntries.init({
    cat_id: DataTypes.INTEGER,
    profil_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProfilEntries',
  });
  return ProfilEntries;
};