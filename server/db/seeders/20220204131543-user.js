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

     await queryInterface.bulkInsert('Users', [
       {
         name: 'John Doe',
         email: 'jon@jon',
         password: '123',
         createdAt: new Date(),
         updatedAt: new Date()
       },

       {
        name: 'Bob Doe',
        email: 'Bob@jon',
        password: '123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
