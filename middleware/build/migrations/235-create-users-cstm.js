'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users_cstm', {


      
      "id_c": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.CHAR',
         
      },
      
      
      
      
      "codigo_agenda_c": {
        type: 'Sequelize.INTEGER',
        length: 4,
      },
      
      "codigo_agenda_c": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      
      
      
      "numero_documento_c": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "numero_documento_c": {
        type: 'Sequelize.STRING',
        length: 15
      },
      
      "extension_documento_c": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      
      
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users_cstm');
  }
};
