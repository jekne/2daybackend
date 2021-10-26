"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: " do the homework",
          deadline: "Until the end of the day",
          todoListId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: " Work in java",
          deadline: "at 7:00am",
          todoListId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: " go to school",
          deadline: "at eight oclock",
          todoListId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: " learn database",
          deadline: "during the night",
          todoListId: 4,
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
