const sequelize = require("sequelize");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('receitas', {
      id: {
        type: Sequelize.INTEGER,
        autoIncremente: true,
        primaryKey: true,
      },
      receita: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      user_id:{
        type: sequelize.INTEGER,
        references: {model: 'users', key: 'id'},
        onUpdate: 'Cascade',
        onDelete: 'Set Null',
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('receitas');
  },
};
