'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.UUID
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      }
      // teamId: {
      //   type: Sequelize.UUID,
      //   allowNull: false,
      //   references: {
      //     model: 'teams',
      //     key: 'id'
      //   }
      // }
    });

    // await queryInterface.addIndex('users', {
    //   fields: ['teamId', 'email'],
    //   unique: true
    // });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};