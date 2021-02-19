/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:37 GMT-0400 (Bolivia Time)
 * Time: 18:36:37
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:37 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:37
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const campaignsAudit = sequelize.define('campaignsAudit', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      created_by: DataTypes.STRING,
      
      field_name: DataTypes.STRING,
      
      data_type: DataTypes.STRING,
      
      before_value_string: DataTypes.STRING,
      
      after_value_string: DataTypes.STRING,
      
      
      before_value_text: DataTypes.TEXT,
      
      after_value_text: DataTypes.TEXT,
      
      
      
      date_created: DataTypes.DATE,
      
      
      
      parent_id: DataTypes.CHAR,
      
      
      
      
      
    }, {
      tableName:'campaigns_audit',
      timestamps: false,
    });
    campaignsAudit.associate = (models) => {
      
    };
    return campaignsAudit;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("campaignsAudit", new Schema({
    
    
    
    created_by: {type: String},
    
    field_name: {type: String},
    
    data_type: {type: String},
    
    before_value_string: {type: String},
    
    after_value_string: {type: String},
    
    
    before_value_text: {type: String},
    
    after_value_text: {type: String},
    
    
    
    
    date_created: {type: Date},
    
    
    
    parent_id: {type: String},
    
    
    
    
    
  }),'campaigns_audit');
  //</es-section>
