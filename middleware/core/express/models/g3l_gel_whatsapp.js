/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:00 GMT-0400 (Bolivia Time)
 * Time: 14:57:0
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:00 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:0
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const g3lGelWhatsapp = sequelize.define('g3lGelWhatsapp', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      parent_type: DataTypes.STRING,
      
      numero_envio: DataTypes.STRING,
      
      estado_envio: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      mensaje: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      fecha_envio: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      parent_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'g3l_gel_whatsapp',
      timestamps: false,
    });
    g3lGelWhatsapp.associate = (models) => {
      
    };
    return g3lGelWhatsapp;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("g3lGelWhatsapp", new Schema({
    
    
    
    name: {type: String},
    
    parent_type: {type: String},
    
    numero_envio: {type: String},
    
    estado_envio: {type: String},
    
    
    description: {type: String},
    
    mensaje: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    fecha_envio: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    parent_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
  }),'g3l_gel_whatsapp');
  //</es-section>
