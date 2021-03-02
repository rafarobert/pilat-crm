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
    const contactsCases = sequelize.define('contactsCases', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      contact_id: DataTypes.STRING,
      
      case_id: DataTypes.STRING,
      
      contact_role: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'contacts_cases',
      timestamps: false,
    });
    contactsCases.associate = (models) => {
      
    };
    return contactsCases;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("contactsCases", new Schema({
    
    
    
    contact_id: {type: String},
    
    case_id: {type: String},
    
    contact_role: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'contacts_cases');
  //</es-section>
