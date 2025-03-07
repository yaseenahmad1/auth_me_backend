'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("Users", "firstName", {
      type: Sequelize.STRING,
      allowNull: true, // Adjust as needed
    });
    await queryInterface.addColumn("Users", "lastName", {
      type: Sequelize.STRING,
      allowNull: true, // Adjust as needed
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("Users", "firstName");
    await queryInterface.removeColumn("Users", "lastName");
  }
};
