'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sai_clientes', {


      
      "gbagecage": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.BIGINT',
         
      },
      
      
      "ilsupcage": {
        type: 'Sequelize.BIGINT'
      },
      
      
      
      "gbagetper": {
        type: 'Sequelize.INTEGER',
        length: 4,
      },
      
      "gbagetper": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      
      
      
      "gbagesexo": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "gbagesexo": {
        type: 'Sequelize.STRING',
        length: 10
      },
      
      "gbagenruc": {
        type: 'Sequelize.STRING',
        length: 25
      },
      
      "gbagendid": {
        type: 'Sequelize.STRING',
        length: 25
      },
      
      "gbagecorg": {
        type: 'Sequelize.STRING',
        length: 10
      },
      
      "gbageappa": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "gbageapma": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "prefijo": {
        type: 'Sequelize.STRING',
        length: 25
      },
      
      "gbageapca": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "gbagenoms": {
        type: 'Sequelize.STRING',
        length: 150
      },
      
      "gbagenomb": {
        type: 'Sequelize.STRING',
        length: 250
      },
      
      "gbtlfntl1": {
        type: 'Sequelize.STRING',
        length: 25
      },
      
      "gbtlfntl2": {
        type: 'Sequelize.STRING',
        length: 25
      },
      
      "gbtlfntl3": {
        type: 'Sequelize.STRING',
        length: 25
      },
      
      "gbtlfntl4": {
        type: 'Sequelize.STRING',
        length: 25
      },
      
      "gbtlfntl5": {
        type: 'Sequelize.STRING',
        length: 25
      },
      
      "gbtlfntl6": {
        type: 'Sequelize.STRING',
        length: 25
      },
      
      "gbpaidesc": {
        type: 'Sequelize.STRING',
        length: 150
      },
      
      "gbdptdesc": {
        type: 'Sequelize.STRING',
        length: 150
      },
      
      "gbciudesc": {
        type: 'Sequelize.STRING',
        length: 150
      },
      
      "gbdirdire": {
        type: 'Sequelize.STRING',
        length: 150
      },
      
      "gbemamail": {
        type: 'Sequelize.STRING',
        length: 150
      },
      
      
      
      
      "gbagefnac": {
        type: 'Sequelize.DATE'
      },
      
      "gbagefreg": {
        type: 'Sequelize.DATE'
      },
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('sai_clientes');
  }
};
