/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:40 GMT-0400 (Bolivia Time)
 * Time: 0:22:40
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:40 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:40
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const contactsBugs = sequelize.define('contactsBugs', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      contact_id: DataTypes.STRING,
      
      bug_id: DataTypes.STRING,
      
      contact_role: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'contacts_bugs',
      timestamps: false,
    });
    contactsBugs.associate = (models) => {
      
    };
    return contactsBugs;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("contactsBugs", new Schema({
    
    
    
    contact_id: {type: String},
    
    bug_id: {type: String},
    
    contact_role: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'contacts_bugs');
  //</es-section>
