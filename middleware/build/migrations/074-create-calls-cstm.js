'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('calls_cstm', {


      
      "id_c": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.CHAR'
      },
      
      
      
      "llamada_realizada_c": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      
      
      "message_id_c": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      
      
      
      "llamada_fecha_c": {
        type: 'Sequelize.DATE'
      },
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('calls_cstm');
  }
};
