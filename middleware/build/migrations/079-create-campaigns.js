'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('campaigns', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.CHAR'
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
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
      
      
      
      
      "budget": {
        type: 'Sequelize.DOUBLE',
      },
      
      "expected_cost": {
        type: 'Sequelize.DOUBLE',
      },
      
      "actual_cost": {
        type: 'Sequelize.DOUBLE',
      },
      
      "expected_revenue": {
        type: 'Sequelize.DOUBLE',
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
        length: 36
      },
      
      "created_by": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      
      "assigned_user_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      
      "currency_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      
      "survey_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('campaigns');
  }
};
