'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('campaign_trkrs', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.CHAR',
         
      },
      
      
      
      "is_optout": {
        type: 'Sequelize.TINYINT'
      },
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      "tracker_key": {
        type: 'Sequelize.INTEGER',
        length: 4,
      },
      
      "tracker_key": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      
      
      
      "tracker_name": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "tracker_url": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      
      
      
      "date_entered": {
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
      
      "modified_user_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      
      "created_by": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('campaign_trkrs');
  }
};
