/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:37:17 GMT-0400 (Bolivia Time)
 * Time: 18:37:17
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:37:17 GMT-0400 (Bolivia Time)
 * Last time updated: 18:37:17
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const foldersSubscriptions = sequelize.define('foldersSubscriptions', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      
      
      
      
      
      folder_id: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      
      
      
      
    }, {
      tableName:'folders_subscriptions',
      timestamps: false,
    });
    foldersSubscriptions.associate = (models) => {
      
    };
    return foldersSubscriptions;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("foldersSubscriptions", new Schema({
    
    
    
    
    
    
    
    
    
    folder_id: {type: String},
    
    assigned_user_id: {type: String},
    
    
    
    
    
  }),'folders_subscriptions');
  //</es-section>
