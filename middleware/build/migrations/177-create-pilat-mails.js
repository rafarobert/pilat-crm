'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pilat_mails', {


      
      "_id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.STRING'
      },
      
      
      
      
      "id": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      "mai_port": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      
      
      
      
      
      "mai_description": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "mai_user_account": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "mai_user_password": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "mai_host": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "mai_protocol": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "mai_bus_id": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "mai_par_status_id": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "mai_group": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "mai_subject": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "mai_to": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "updatedBy": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "createdBy": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      
      "mai_bcc": {
        type: 'Sequelize.TEXT',
      },
      
      "mai_cc": {
        type: 'Sequelize.TEXT',
      },
      
      "mai_text": {
        type: 'Sequelize.TEXT',
      },
      
      "mai_html": {
        type: 'Sequelize.TEXT',
      },
      
      
      
      "dueAt": {
        type: 'Sequelize.DATE'
      },
      
      "createdAt": {
        type: 'Sequelize.DATE'
      },
      
      "updatedAt": {
        type: 'Sequelize.DATE'
      },
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pilat_mails');
  }
};
