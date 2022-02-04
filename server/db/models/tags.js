'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tags extends Model {
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
  Tags.init({
    title: DataTypes.STRING,
    profil_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tags',
  });
  return Tags;
};
