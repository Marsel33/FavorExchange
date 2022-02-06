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
        await queryInterface.bulkInsert('Users', [{
            name: 'John Doe',
            email: '1@1',
            password: '$2a$10$9mEpp4RJ0mBUEjhY/0AunezhqXvs0UVRDAfJ9xr73FtFAgASLqUKa',
            createdAt: new Date(),
            updatedAt: new Date()
        },
            {
                name: 'John ',
                email: '2@2',
                password: '$2a$10$9mEpp4RJ0mBUEjhY/0AunezhqXvs0UVRDAfJ9xr73FtFAgASLqUKa',
                createdAt: new Date(),
                updatedAt: new Date()
            }], {});


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
