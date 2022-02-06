'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Profils', [
      {
        name: 'John Doe',
        user_id: '1',
        img: 'https://www.meme-arsenal.com/memes/4ca42a81e46ee5a79e1d8678ee038122.jpg',
        description: 'люблю читать книги и чинить телефоны',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Bob Doe',
        user_id: '2',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5d0AF9dVfaQzMAVSOSY3Ww-MvHBCINV5DuepQj-LzwaWydmq8YUCFSb_E_yQH5SZoPYg&usqp=CAU',
        description: 'люблю играть на гитаре',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
