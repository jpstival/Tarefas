"use strict"
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("atividade", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      descricao: {
        type: Sequelize.TEXT,
      },
      concluido: {
        type: Sequelize.BOOLEAN,
      },
      dataCriacao: {
        type: Sequelize.DATE,
      },
      dataConclusao: {
        type: Sequelize.DATE,
      },
    })
  },
  async down(queryInterface) {
    await queryInterface.dropTable("atividade")
  },
}
