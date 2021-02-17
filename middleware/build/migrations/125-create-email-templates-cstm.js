'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('email_templates_cstm', {


      
      "id_c": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.CHAR',
         
      },
      
      
      
      
      
      
      
      "sms_module_c": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "sms_module_c": {
        type: 'Sequelize.STRING',
        length: 120
      },
      
      
      
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('email_templates_cstm');
  }
};
