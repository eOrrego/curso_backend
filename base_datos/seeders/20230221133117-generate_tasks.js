'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('tasks', [
      {
        description: 'Tarea 1',
        id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'Tarea 2',
        id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'Tarea 3',
        id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('tasks', null, {});

  }
};
