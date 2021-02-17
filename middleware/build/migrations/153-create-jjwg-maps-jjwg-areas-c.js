'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('jjwg_maps_jjwg_areas_c', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.STRING',
         
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      "jjwg_maps_5304wg_maps_ida": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "jjwg_maps_5304wg_maps_ida": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "jjwg_maps_41f2g_areas_idb": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      
      
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('jjwg_maps_jjwg_areas_c');
  }
};
