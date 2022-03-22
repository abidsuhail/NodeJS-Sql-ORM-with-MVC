'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('users', 'roles', {
      type: Sequelize.INTEGER,
      references: {
        model: 'roles',
        key: 'id',
        allowNull: false,
        defaultValue:1
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
