/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:37:10 GMT-0400 (Bolivia Time)
 * Time: 15:37:10
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:37:10 GMT-0400 (Bolivia Time)
 * Last time updated: 15:37:10
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const templatesectionline = sequelize.define('templatesectionline', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      ord: DataTypes.INTEGER,
      
      
      
      name: DataTypes.STRING,
      
      thumbnail: DataTypes.STRING,
      
      grp: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'templatesectionline',
      timestamps: false,
    });
    templatesectionline.associate = (models) => {
      
    };
    return templatesectionline;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("templatesectionline", new Schema({
    
    ord: {type: Number},
    
    
    
    name: {type: String},
    
    thumbnail: {type: String},
    
    grp: {type: String},
    
    
    description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
  }),'templatesectionline');
  //</es-section>
