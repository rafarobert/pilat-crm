/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:51 GMT-0400 (Bolivia Time)
 * Time: 14:0:51
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:51 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:51
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
