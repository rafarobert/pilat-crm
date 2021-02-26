/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:27 GMT-0400 (Bolivia Time)
 * Time: 0:22:27
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:27 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:27
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const aowProcessedAowActions = sequelize.define('aowProcessedAowActions', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      aow_processed_id: DataTypes.STRING,
      
      aow_action_id: DataTypes.STRING,
      
      status: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'aow_processed_aow_actions',
      timestamps: false,
    });
    aowProcessedAowActions.associate = (models) => {
      
    };
    return aowProcessedAowActions;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("aowProcessedAowActions", new Schema({
    
    
    
    aow_processed_id: {type: String},
    
    aow_action_id: {type: String},
    
    status: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'aow_processed_aow_actions');
  //</es-section>
