"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("todoLists", [
      {
        name: "Johann",
        userId: 1,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Carolina",
        userId: 2,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mae",
        userId: 3,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pai",
        userId: 4,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoLists");
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
