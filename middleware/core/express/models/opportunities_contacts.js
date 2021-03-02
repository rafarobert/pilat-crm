/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:13 GMT-0400 (Bolivia Time)
 * Time: 14:1:13
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:13 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:13
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const opportunitiesContacts = sequelize.define('opportunitiesContacts', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      contact_id: DataTypes.STRING,
      
      opportunity_id: DataTypes.STRING,
      
      contact_role: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'opportunities_contacts',
      timestamps: false,
    });
    opportunitiesContacts.associate = (models) => {
      
    };
    return opportunitiesContacts;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("opportunitiesContacts", new Schema({
    
    
    
    contact_id: {type: String},
    
    opportunity_id: {type: String},
    
    contact_role: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'opportunities_contacts');
  //</es-section>
