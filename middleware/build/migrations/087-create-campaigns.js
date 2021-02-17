'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('campaigns', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.CHAR',
         
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
      
      "tracker_count": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      "impressions": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      
      
      
      "name": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "name": {
        type: 'Sequelize.STRING',
        length: 50
      },
      
      "refer_url": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "tracker_text": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "status": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "campaign_type": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "frequency": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      
      "objective": {
        type: 'Sequelize.TEXT',
      },
      
      "content": {
        type: 'Sequelize.TEXT',
      },
      
      
      
      "date_entered": {
        type: 'Sequelize.DATE'
      },
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      "start_date": {
        type: 'Sequelize.DATE'
      },
      
      "end_date": {
        type: 'Sequelize.DATE'
      },
      
      
      
      "modified_user_id": {
        type: 'Sequelize.CHAR',
        length: 255,
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
      
      "assigned_user_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      
      "currency_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      
      "survey_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('campaigns');
  }
};
