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
        await queryInterface.bulkInsert('Profils', [{
            img: 'https://www.youloveit.ru/uploads/posts/2016-09/1473331574_youloveit_ru_girly_m_devushki_kartinki01.jpg',
            user_id: 1,
            name: 'poly',
            description: 'strigy',
            createdAt: new Date(),
            updatedAt: new Date()
        },
            {
                img: 'https://i0.wp.com/steepmen.ru/wp-content/uploads/2021/05/erwe.jpg?resize=557%2C603&ssl=1',
                user_id: 2,
                name: 'leha',
                description: 'uchu',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {})
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
