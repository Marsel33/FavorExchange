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
        await queryInterface.bulkInsert("Categories", [
            {title: 'Репетиторы', createdAt: new Date(), updatedAt: new Date()},
            {title: 'Мастера по ремонту', createdAt: new Date(), updatedAt: new Date()},
            {title: 'Мастера красоты', createdAt: new Date(), updatedAt: new Date()},
            {title: 'Фрилансеры', createdAt: new Date(), updatedAt: new Date()},
            {title: 'Бухгалтеры и юристы', createdAt: new Date(), updatedAt: new Date()},
            {title: 'Спортивные тренеры', createdAt: new Date(), updatedAt: new Date()},
            {title: 'Артисты', createdAt: new Date(), updatedAt: new Date()},
            {title: 'Домашний персонал', createdAt: new Date(), updatedAt: new Date()},
            {title: 'Ветеринары', createdAt: new Date(), updatedAt: new Date()},
            {title: 'Автоинструкторы', createdAt: new Date(), updatedAt: new Date()},
            {title: 'IT-специалисты', createdAt: new Date(), updatedAt: new Date()},
            {title: 'Исскуство', createdAt: new Date(), updatedAt: new Date()},
            {title: 'Аренда', createdAt: new Date(), updatedAt: new Date()},
            {title: 'Разное', createdAt: new Date(), updatedAt: new Date()},
        ])
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
