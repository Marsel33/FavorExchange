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
        await queryInterface.bulkInsert("Tags", [
            {title: "учу английскому", profil_id: 1, catId:1, createdAt: new Date(), updatedAt: new Date()},
            {title: "клею обои", profil_id: 1, catId:2, createdAt: new Date(), updatedAt: new Date()},
            {title: "делаю маникюр", profil_id: 1, catId: 3, createdAt: new Date(), updatedAt: new Date()},
            {title: "зд-моделирование", profil_id: 2, catId: 4, createdAt: new Date(), updatedAt: new Date()},
            {title: "знаю 1с", profil_id: 2, catId: 5, createdAt: new Date(), updatedAt: new Date()},
            {title: "учу танцевать", profil_id: 2, catId:6, createdAt: new Date(), updatedAt: new Date()},
            {title: "мою окна", profil_id: 3, catId: 7, createdAt: new Date(), updatedAt: new Date()},
            {title: "помогаю животным", profil_id: 3, catId: 8, createdAt: new Date(), updatedAt: new Date()},
            {title: "обучу пдд", profil_id: 3, catId: 9, createdAt: new Date(), updatedAt: new Date()}
          {title: "сделаю САЙТ", profil_id: 4, catId: 10, createdAt: new Date(), updatedAt: new Date()},
          {title: "провожу мероприятия", profil_id: 4, catId: 11, createdAt: new Date(), updatedAt: new Date()},
          {title: "научу китайскому", profil_id: 4, catId: 1, createdAt: new Date(), updatedAt: new Date()}
          {title: "кладу плитку", profil_id: 5, catId: 2, createdAt: new Date(), updatedAt: new Date()},
          {title: "стригу", profil_id: 5, catId: 3, createdAt: new Date(), updatedAt: new Date()},
          {title: "все могу", profil_id: 5, catId:4, createdAt: new Date(), updatedAt: new Date()}
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
