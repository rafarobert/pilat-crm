'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('fp_event_locations_fp_events_1_c', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.STRING',
         
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      "fp_event_locations_fp_events_1fp_event_locations_ida": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "fp_event_locations_fp_events_1fp_event_locations_ida": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "fp_event_locations_fp_events_1fp_events_idb": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      
      
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('fp_event_locations_fp_events_1_c');
  }
};
