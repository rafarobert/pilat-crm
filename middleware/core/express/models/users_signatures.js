/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:56 GMT-0400 (Bolivia Time)
 * Time: 14:57:56
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:56 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:56
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const usersSignatures = sequelize.define('usersSignatures', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      user_id: DataTypes.STRING,
      
      name: DataTypes.STRING,
      
      
      signature: DataTypes.TEXT,
      
      signature_html: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'users_signatures',
      timestamps: false,
    });
    usersSignatures.associate = (models) => {
      
    };
    return usersSignatures;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("usersSignatures", new Schema({
    
    
    
    user_id: {type: String},
    
    name: {type: String},
    
    
    signature: {type: String},
    
    signature_html: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'users_signatures');
  //</es-section>
