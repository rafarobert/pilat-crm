'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('campaign_log', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.CHAR',
         
      },
      
      
      
      "archived": {
        type: 'Sequelize.TINYINT'
      },
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      "hits": {
        type: 'Sequelize.INTEGER',
        length: 4,
      },
      
      "hits": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      
      
      
      "target_tracker_key": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "target_tracker_key": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "target_id": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "target_type": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "activity_type": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "related_id": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "related_type": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "more_information": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      
      
      
      "activity_date": {
        type: 'Sequelize.DATE'
      },
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      
      
      "campaign_id": {
        type: 'Sequelize.CHAR',
        length: 255,
        binary: false
      },
      
      "campaign_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      
      "list_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      
      "marketing_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('campaign_log');
  }
};
