/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:39 GMT-0400 (Bolivia Time)
 * Time: 14:1:39
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:39 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:39
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const usersCstm = sequelize.define('usersCstm', {
      
      id_c: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      codigo_agenda_c: DataTypes.INTEGER,
      
      
      
      numero_documento_c: DataTypes.STRING,
      
      extension_documento_c: DataTypes.STRING,
      
      
      
      
      
      
      
      
      
      
    }, {
      tableName:'users_cstm',
      timestamps: false,
    });
    usersCstm.associate = (models) => {
      
    };
    return usersCstm;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("usersCstm", new Schema({
    
    codigo_agenda_c: {type: Number},
    
    
    
    numero_documento_c: {type: String},
    
    extension_documento_c: {type: String},
    
    
    
    
    
    
    
    
    
    
    
  }),'users_cstm');
  //</es-section>
