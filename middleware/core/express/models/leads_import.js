/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:14 GMT-0400 (Bolivia Time)
 * Time: 14:57:14
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:14 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:14
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const leadsImport = sequelize.define('leadsImport', {
      
      
      
      
      
      PROSPECCION: DataTypes.STRING,
      
      OFICIAL: DataTypes.STRING,
      
      MES: DataTypes.STRING,
      
      CLIENTE: DataTypes.STRING,
      
      LUGARORUBRODETRABAJO: DataTypes.STRING,
      
      TELÉFONO: DataTypes.STRING,
      
      
      
      
      FECHA: DataTypes.DATE,
      
      
      
      
      
      
      
    }, {
      tableName:'leads_import',
      timestamps: false,
    });
    leadsImport.associate = (models) => {
      
    };
    return leadsImport;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("leadsImport", new Schema({
    
    
    
    PROSPECCION: {type: String},
    
    OFICIAL: {type: String},
    
    MES: {type: String},
    
    CLIENTE: {type: String},
    
    LUGARORUBRODETRABAJO: {type: String},
    
    TELÉFONO: {type: String},
    
    
    
    
    
    FECHA: {type: Date},
    
    
    
    
    
    
    
  }),'leads_import');
  //</es-section>
