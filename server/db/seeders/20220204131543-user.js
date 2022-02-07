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
        await queryInterface.bulkInsert('Users', [
            {
                name: 'Polina',
                email: '1@1',
                password: '$2a$10$9mEpp4RJ0mBUEjhY/0AunezhqXvs0UVRDAfJ9xr73FtFAgASLqUKa',//123
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Egor ',
                email: '2@2',
                password: '$2a$10$hU/xg9.FXY7W23AhpEz/TeBd1Y7yEepQAEyDFgwvE1aRE5K/fLnQW',//1234
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Marsel ',
                email: '3@3',
                password: '$2a$10$wkcr.Oqi3j4UnZVbqqyfAOANG8Nllpl6R9BMi58qwwTPMx1LmfDA2',//12345
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Yriy ',
                email: '4@4',
                password: '$2a$10$4glpY4C6ANudGbsO51sU0uOnvkPO9m63f.37hNhmboUmDgt1JW8Y6',//123456
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Anton ',
                email: '5@5',
                password: '$2a$10$p/AGiMO3gGm6iH47spePRu5lBCfBCLC/d7W1FYOaPodJxT9U0ILdi',//1234567
                createdAt: new Date(),
                updatedAt: new Date()
            }
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
