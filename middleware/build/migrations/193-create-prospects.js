'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('prospects', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.CHAR'
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      "do_not_call": {
        type: 'Sequelize.TINYINT'
      },
      
      
      "tracker_key": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      
      
      
      
      
      "salutation": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "first_name": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "last_name": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "title": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "photo": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "department": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "phone_home": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "phone_mobile": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "phone_work": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "phone_other": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "phone_fax": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "lawful_basis_source": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "primary_address_street": {
        type: 'Sequelize.STRING',
        length: 150
      },
      
      "primary_address_city": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "primary_address_state": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "primary_address_postalcode": {
        type: 'Sequelize.STRING',
        length: 20
      },
      
      "primary_address_country": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "alt_address_street": {
        type: 'Sequelize.STRING',
        length: 150
      },
      
      "alt_address_city": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "alt_address_state": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "alt_address_postalcode": {
        type: 'Sequelize.STRING',
        length: 20
      },
      
      "alt_address_country": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "assistant": {
        type: 'Sequelize.STRING',
        length: 75
      },
      
      "assistant_phone": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "account_name": {
        type: 'Sequelize.STRING',
        length: 150
      },
      
      
      "description": {
        type: 'Sequelize.TEXT',
      },
      
      "lawful_basis": {
        type: 'Sequelize.TEXT',
      },
      
      
      
      "date_entered": {
        type: 'Sequelize.DATE'
      },
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      "date_reviewed": {
        type: 'Sequelize.DATE'
      },
      
      "birthdate": {
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
      
      "lead_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      
      "campaign_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('prospects');
  }
};
