'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('aos_pdf_templates', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.CHAR'
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      "active": {
        type: 'Sequelize.TINYINT'
      },
      
      
      "margin_left": {
        type: 'Sequelize.INTEGER',
        length: 255,
      },
      
      "margin_right": {
        type: 'Sequelize.INTEGER',
        length: 255,
      },
      
      "margin_top": {
        type: 'Sequelize.INTEGER',
        length: 255,
      },
      
      "margin_bottom": {
        type: 'Sequelize.INTEGER',
        length: 255,
      },
      
      "margin_header": {
        type: 'Sequelize.INTEGER',
        length: 255,
      },
      
      "margin_footer": {
        type: 'Sequelize.INTEGER',
        length: 255,
      },
      
      
      
      
      
      
      "name": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "type": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "page_size": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "orientation": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      
      "description": {
        type: 'Sequelize.TEXT',
      },
      
      "pdfheader": {
        type: 'Sequelize.TEXT',
      },
      
      "pdffooter": {
        type: 'Sequelize.TEXT',
      },
      
      
      
      "date_entered": {
        type: 'Sequelize.DATE'
      },
      
      "date_modified": {
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
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('aos_pdf_templates');
  }
};
