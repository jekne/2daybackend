"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: " do the homework",
          deadline: "Until the end of the day",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: " Work in java",
          deadline: "at 7:00am",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: " go to school",
          deadline: "at eight oclock",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: " learn database",
          deadline: "during the night",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoItems", {});
  },
};
