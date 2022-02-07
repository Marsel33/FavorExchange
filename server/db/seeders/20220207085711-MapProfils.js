'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("Products", [
            {adress: 'Тверская 22', profil_id: 1, createdAt: new Date(), updatedAt: new Date()},
            {adress: 'Орджоникидзе 11 стр10', profil_id: 2, createdAt: new Date(), updatedAt: new Date()},
            {adress: 'Болотная наб., 9/1', profil_id: 3, createdAt: new Date(), updatedAt: new Date()},
            {adress: 'Пятницкий пер., 2,', profil_id: 4, createdAt: new Date(), updatedAt: new Date()},
            {adress: 'Таганская пл., 88', profil_id: 5, createdAt: new Date(), updatedAt: new Date()}
        ]), {}
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
