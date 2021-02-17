'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('am_tasktemplates_am_projecttemplates_c', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.STRING'
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      
      
      "am_tasktemplates_am_projecttemplatesam_projecttemplates_ida": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "am_tasktemplates_am_projecttemplatesam_tasktemplates_idb": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      
      
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('am_tasktemplates_am_projecttemplates_c');
  }
};
