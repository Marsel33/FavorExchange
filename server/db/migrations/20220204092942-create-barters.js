'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Barters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      task_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'Tasks',
          key:'id'
        }
      },
      initiator: {
        type: Sequelize.INTEGER,
        references:{
          model:'Profils',
          key:'id'
        }

      },
      opponent:{
        type: Sequelize.INTEGER,
      },
      status:{
        type:Sequelize.STRING,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Barters');
  }
};
