'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('users', {
      fields: ['roles'],
      type: 'foreign key',
      name: 'custom_fkey_constraint_name',
      references: { //Required field
        table: 'roles',
        field: 'id',
        allowNull: false,
        defaultValue:1
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
}
