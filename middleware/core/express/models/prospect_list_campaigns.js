/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:25 GMT-0400 (Bolivia Time)
 * Time: 14:1:25
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:25 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:25
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const prospectListCampaigns = sequelize.define('prospectListCampaigns', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      prospect_list_id: DataTypes.STRING,
      
      campaign_id: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'prospect_list_campaigns',
      timestamps: false,
    });
    prospectListCampaigns.associate = (models) => {
      
    };
    return prospectListCampaigns;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("prospectListCampaigns", new Schema({
    
    
    
    prospect_list_id: {type: String},
    
    campaign_id: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'prospect_list_campaigns');
  //</es-section>
