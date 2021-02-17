/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:53 GMT-0400 (Bolivia Time)
 * Time: 4:43:53
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:53 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:53
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const projectContacts1C = sequelize.define('projectContacts1C', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      project_contacts_1project_ida: DataTypes.STRING,
      
      project_contacts_1contacts_idb: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'project_contacts_1_c',
      timestamps: false,
    });
    projectContacts1C.associate = (models) => {
      
    };
    return projectContacts1C;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("projectContacts1C", new Schema({
    
    
    
    project_contacts_1project_ida: {type: String},
    
    project_contacts_1contacts_idb: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'project_contacts_1_c');
  //</es-section>
