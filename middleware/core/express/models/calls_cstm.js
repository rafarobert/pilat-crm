/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:34 GMT-0400 (Bolivia Time)
 * Time: 4:42:34
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:34 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:34
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const callsCstm = sequelize.define('callsCstm', {
      
      id_c: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      message_id_c: DataTypes.STRING,
      
      
      
      
      llamada_fecha_c: DataTypes.DATE,
      
      
      
      
      
      
      llamada_realizada_c: DataTypes.TINYINT,
      
      
    }, {
      tableName:'calls_cstm',
      timestamps: false,
    });
    callsCstm.associate = (models) => {
      
    };
    return callsCstm;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("callsCstm", new Schema({
    
    
    
    message_id_c: {type: String},
    
    
    
    
    
    llamada_fecha_c: {type: Date},
    
    
    
    
    
    
    llamada_realizada_c: {type: Number},
    
    
  }),'calls_cstm');
  //</es-section>
