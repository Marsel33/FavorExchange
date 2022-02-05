'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profils extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Tags,Barters,MapProfil,Users,Categories,Portfolios,Reitings}) {
      // define association here
      this.belongsTo(Users,({foreignKey:'user_id'}))
      this.belongsToMany(Categories,({through:'ProfilEntries',foreignKey:'profil_id'}))
      this.hasMany(Portfolios,({foreignKey:'profil_id'}))
      this.hasOne(Reitings,({foreignKey:'profil_id'}))
      this.hasOne(MapProfil,({foreignKey:'profil_id'}))
      this.hasMany(Barters,({foreignKey:'initiator'}))
      this.hasMany(Tags,({foreignKey:'profil_id'}))
    }
  }
  Profils.init({
    img: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Profils',
  });
  return Profils;
};
