'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MapProfil extends Model {
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
  MapProfil.init({
    latitude: DataTypes.TEXT,
    longitude: DataTypes.TEXT,
    profil_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MapProfil',
  });
  return MapProfil;
};
