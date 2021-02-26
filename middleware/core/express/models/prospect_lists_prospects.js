/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:39 GMT-0400 (Bolivia Time)
 * Time: 0:23:39
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:39 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:39
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const prospectListsProspects = sequelize.define('prospectListsProspects', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      prospect_list_id: DataTypes.STRING,
      
      related_id: DataTypes.STRING,
      
      related_type: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'prospect_lists_prospects',
      timestamps: false,
    });
    prospectListsProspects.associate = (models) => {
      
    };
    return prospectListsProspects;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("prospectListsProspects", new Schema({
    
    
    
    prospect_list_id: {type: String},
    
    related_id: {type: String},
    
    related_type: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'prospect_lists_prospects');
  //</es-section>
