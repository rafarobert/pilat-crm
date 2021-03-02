/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:55 GMT-0400 (Bolivia Time)
 * Time: 14:0:55
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:55 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:55
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const g3lGelEmail = sequelize.define('g3lGelEmail', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      parent_type: DataTypes.STRING,
      
      estado_envio: DataTypes.STRING,
      
      correo_electronico: DataTypes.STRING,
      
      
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
      tableName:'g3l_gel_email',
      timestamps: false,
    });
    g3lGelEmail.associate = (models) => {
      
    };
    return g3lGelEmail;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("g3lGelEmail", new Schema({
    
    
    
    name: {type: String},
    
    parent_type: {type: String},
    
    estado_envio: {type: String},
    
    correo_electronico: {type: String},
    
    
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
    
    
  }),'g3l_gel_email');
  //</es-section>
