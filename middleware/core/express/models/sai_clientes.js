/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:43 GMT-0400 (Bolivia Time)
 * Time: 0:23:43
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:43 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:43
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const saiClientes = sequelize.define('saiClientes', {
      
      gbagecage: { type: DataTypes.BIGINT, primaryKey: true },
      
      
      ilsupcage: DataTypes.INTEGER,
      
      
      gbagetper: DataTypes.INTEGER,
      
      
      
      gbagesexo: DataTypes.STRING,
      
      gbagenruc: DataTypes.STRING,
      
      gbagendid: DataTypes.STRING,
      
      gbagecorg: DataTypes.STRING,
      
      gbageappa: DataTypes.STRING,
      
      gbageapma: DataTypes.STRING,
      
      prefijo: DataTypes.STRING,
      
      gbageapca: DataTypes.STRING,
      
      gbagenoms: DataTypes.STRING,
      
      gbagenomb: DataTypes.STRING,
      
      gbtlfntl1: DataTypes.STRING,
      
      gbtlfntl2: DataTypes.STRING,
      
      gbtlfntl3: DataTypes.STRING,
      
      gbtlfntl4: DataTypes.STRING,
      
      gbtlfntl5: DataTypes.STRING,
      
      gbtlfntl6: DataTypes.STRING,
      
      gbpaidesc: DataTypes.STRING,
      
      gbdptdesc: DataTypes.STRING,
      
      gbciudesc: DataTypes.STRING,
      
      gbdirdire: DataTypes.STRING,
      
      gbemamail: DataTypes.STRING,
      
      
      
      
      gbagefnac: DataTypes.DATE,
      
      gbagefreg: DataTypes.DATE,
      
      
      
      
      
      
      
    }, {
      tableName:'sai_clientes',
      timestamps: false,
    });
    saiClientes.associate = (models) => {
      
    };
    return saiClientes;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("saiClientes", new Schema({
    
    gbagetper: {type: Number},
    
    
    ilsupcage: {type: Number},
    
    
    gbagesexo: {type: String},
    
    gbagenruc: {type: String},
    
    gbagendid: {type: String},
    
    gbagecorg: {type: String},
    
    gbageappa: {type: String},
    
    gbageapma: {type: String},
    
    prefijo: {type: String},
    
    gbageapca: {type: String},
    
    gbagenoms: {type: String},
    
    gbagenomb: {type: String},
    
    gbtlfntl1: {type: String},
    
    gbtlfntl2: {type: String},
    
    gbtlfntl3: {type: String},
    
    gbtlfntl4: {type: String},
    
    gbtlfntl5: {type: String},
    
    gbtlfntl6: {type: String},
    
    gbpaidesc: {type: String},
    
    gbdptdesc: {type: String},
    
    gbciudesc: {type: String},
    
    gbdirdire: {type: String},
    
    gbemamail: {type: String},
    
    
    
    
    
    gbagefnac: {type: Date},
    
    gbagefreg: {type: Date},
    
    
    
    
    
    
    
  }),'sai_clientes');
  //</es-section>
