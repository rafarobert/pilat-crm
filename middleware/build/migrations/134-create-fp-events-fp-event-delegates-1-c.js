'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('fp_events_fp_event_delegates_1_c', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.STRING',
         
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      "fp_events_fp_event_delegates_1fp_events_ida": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "fp_events_fp_event_delegates_1fp_events_ida": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "fp_events_fp_event_delegates_1fp_event_delegates_idb": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      
      
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('fp_events_fp_event_delegates_1_c');
  }
};
