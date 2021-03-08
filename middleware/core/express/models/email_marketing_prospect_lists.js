/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:04 GMT-0400 (Bolivia Time)
 * Time: 15:36:4
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:04 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:4
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const emailMarketingProspectLists = sequelize.define('emailMarketingProspectLists', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      prospect_list_id: DataTypes.STRING,
      
      email_marketing_id: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'email_marketing_prospect_lists',
      timestamps: false,
    });
    emailMarketingProspectLists.associate = (models) => {
      
    };
    return emailMarketingProspectLists;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("emailMarketingProspectLists", new Schema({
    
    
    
    prospect_list_id: {type: String},
    
    email_marketing_id: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'email_marketing_prospect_lists');
  //</es-section>
