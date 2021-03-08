/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:46 GMT-0400 (Bolivia Time)
 * Time: 15:35:46
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:46 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:46
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const campaignTrkrs = sequelize.define('campaignTrkrs', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      tracker_key: DataTypes.INTEGER,
      
      
      
      tracker_name: DataTypes.STRING,
      
      tracker_url: DataTypes.STRING,
      
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      campaign_id: DataTypes.CHAR,
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      
      
      
      is_optout: DataTypes.TINYINT,
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'campaign_trkrs',
      timestamps: false,
    });
    campaignTrkrs.associate = (models) => {
      
    };
    return campaignTrkrs;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("campaignTrkrs", new Schema({
    
    tracker_key: {type: Number},
    
    
    
    tracker_name: {type: String},
    
    tracker_url: {type: String},
    
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    campaign_id: {type: String},
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    
    
    
    is_optout: {type: Number},
    
    deleted: {type: Number},
    
    
  }),'campaign_trkrs');
  //</es-section>
