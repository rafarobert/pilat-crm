'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('aos_pdf_templates', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.CHAR',
         
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      "active": {
        type: 'Sequelize.TINYINT'
      },
      
      
      "margin_left": {
        type: 'Sequelize.INTEGER',
        length: 4,
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
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('aos_pdf_templates');
  }
};
