'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('opportunities', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.CHAR'
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      "amount": {
        type: 'Sequelize.DOUBLE',
      },
      
      "amount_usdollar": {
        type: 'Sequelize.DOUBLE',
      },
      
      "probability": {
        type: 'Sequelize.DOUBLE',
      },
      
      
      
      "name": {
        type: 'Sequelize.STRING',
        length: 50
      },
      
      "opportunity_type": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "lead_source": {
        type: 'Sequelize.STRING',
        length: 50
      },
      
      "next_step": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "sales_stage": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      
      "description": {
        type: 'Sequelize.TEXT',
      },
      
      
      
      "date_entered": {
        type: 'Sequelize.DATE'
      },
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      "date_closed": {
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
      
      "campaign_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      
      "currency_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('opportunities');
  }
};
