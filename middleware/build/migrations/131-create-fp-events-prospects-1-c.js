'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('fp_events_prospects_1_c', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.STRING'
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      "email_responded": {
        type: 'Sequelize.INTEGER',
        length: 2,
      },
      
      
      
      
      
      
      "fp_events_prospects_1fp_events_ida": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "fp_events_prospects_1prospects_idb": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "invite_status": {
        type: 'Sequelize.STRING',
        length: 25
      },
      
      "accept_status": {
        type: 'Sequelize.STRING',
        length: 25
      },
      
      
      
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('fp_events_prospects_1_c');
  }
};
