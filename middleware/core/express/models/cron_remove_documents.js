/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:39 GMT-0400 (Bolivia Time)
 * Time: 14:0:39
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:39 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:39
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const cronRemoveDocuments = sequelize.define('cronRemoveDocuments', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      bean_id: DataTypes.STRING,
      
      module: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      
    }, {
      tableName:'cron_remove_documents',
      timestamps: false,
    });
    cronRemoveDocuments.associate = (models) => {
      
    };
    return cronRemoveDocuments;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("cronRemoveDocuments", new Schema({
    
    
    
    bean_id: {type: String},
    
    module: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    
  }),'cron_remove_documents');
  //</es-section>
