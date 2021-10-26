"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("todoLists", [
      {
        name: "Johann",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Carolina",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mae",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pai",

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
