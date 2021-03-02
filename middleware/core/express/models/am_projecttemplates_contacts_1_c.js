/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:03 GMT-0400 (Bolivia Time)
 * Time: 14:0:3
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:03 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:3
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const amProjecttemplatesContacts1C = sequelize.define('amProjecttemplatesContacts1C', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      am_projecttemplates_ida: DataTypes.STRING,
      
      contacts_idb: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'am_projecttemplates_contacts_1_c',
      timestamps: false,
    });
    amProjecttemplatesContacts1C.associate = (models) => {
      
    };
    return amProjecttemplatesContacts1C;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("amProjecttemplatesContacts1C", new Schema({
    
    
    
    am_projecttemplates_ida: {type: String},
    
    contacts_idb: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'am_projecttemplates_contacts_1_c');
  //</es-section>
