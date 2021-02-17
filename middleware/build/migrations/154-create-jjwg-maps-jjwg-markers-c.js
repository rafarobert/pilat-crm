'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('jjwg_maps_jjwg_markers_c', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.STRING',
         
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      "jjwg_maps_b229wg_maps_ida": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "jjwg_maps_b229wg_maps_ida": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "jjwg_maps_2e31markers_idb": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      
      
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('jjwg_maps_jjwg_markers_c');
  }
};
