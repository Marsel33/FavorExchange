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
                name: 'Polina',
                user_id: '1',
                description: 'люблю читать книги и чинить телефоны',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                name: 'Egor',
                user_id: '2',
                description: 'люблю играть на гитаре',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Marsel',
                user_id: '3',
                description: 'люблю петь и придумывать тосты',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                name: 'Yriy',
                user_id: '4',
                description: 'люблю показывать фокусы',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Anton',
                user_id: '5',
                description: 'люблю помогать людям бескорыстно',
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
