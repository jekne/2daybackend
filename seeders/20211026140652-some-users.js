"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        name: "Johann",
        email: "jk@hotmail",
        phone: 111111,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Carolina",
        email: "carolina@carolina",
        phone: 22222,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mae",
        email: "mae@mae",
        phone: 33333,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pai",
        email: "pai@pai",
        phone: 444444,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users");
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
