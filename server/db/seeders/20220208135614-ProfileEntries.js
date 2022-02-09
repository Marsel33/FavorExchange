'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('ProfilEntries', [{
      cat_id: 1,
      profil_id: 1, createdAt: new Date(), updatedAt: new Date()
    },{
      cat_id: 2,
      profil_id: 2, createdAt: new Date(), updatedAt: new Date()
    },{
      cat_id: 3,
      profil_id: 3, createdAt: new Date(), updatedAt: new Date()
    },{
      cat_id: 4,
      profil_id: 4, createdAt: new Date(), updatedAt: new Date()
    },], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('ProfilEntries', null, {});
  }
};
