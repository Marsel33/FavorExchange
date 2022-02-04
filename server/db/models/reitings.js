'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reitings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Profils}) {
      // define association here
      this.belongsTo(Profils,({foreignKey:'profil_id'}))
    }
  }
  Reitings.init({
    star: DataTypes.INTEGER,
    profil_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reitings',
  });
  return Reitings;
};
