/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:37 GMT-0400 (Bolivia Time)
 * Time: 14:0:37
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:37 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:37
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const contacts = sequelize.define('contacts', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      salutation: DataTypes.STRING,
      
      first_name: DataTypes.STRING,
      
      last_name: DataTypes.STRING,
      
      title: DataTypes.STRING,
      
      photo: DataTypes.STRING,
      
      department: DataTypes.STRING,
      
      phone_home: DataTypes.STRING,
      
      phone_mobile: DataTypes.STRING,
      
      phone_work: DataTypes.STRING,
      
      phone_other: DataTypes.STRING,
      
      phone_fax: DataTypes.STRING,
      
      lawful_basis_source: DataTypes.STRING,
      
      primary_address_street: DataTypes.STRING,
      
      primary_address_city: DataTypes.STRING,
      
      primary_address_state: DataTypes.STRING,
      
      primary_address_postalcode: DataTypes.STRING,
      
      primary_address_country: DataTypes.STRING,
      
      alt_address_street: DataTypes.STRING,
      
      alt_address_city: DataTypes.STRING,
      
      alt_address_state: DataTypes.STRING,
      
      alt_address_postalcode: DataTypes.STRING,
      
      alt_address_country: DataTypes.STRING,
      
      assistant: DataTypes.STRING,
      
      assistant_phone: DataTypes.STRING,
      
      lead_source: DataTypes.STRING,
      
      joomla_account_id: DataTypes.STRING,
      
      portal_user_type: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      lawful_basis: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      date_reviewed: DataTypes.DATE,
      
      birthdate: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      reports_to_id: DataTypes.CHAR,
      
      campaign_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      do_not_call: DataTypes.TINYINT,
      
      portal_account_disabled: DataTypes.TINYINT,
      
      
    }, {
      tableName:'contacts',
      timestamps: false,
    });
    contacts.associate = (models) => {
      
    };
    return contacts;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("contacts", new Schema({
    
    
    
    salutation: {type: String},
    
    first_name: {type: String},
    
    last_name: {type: String},
    
    title: {type: String},
    
    photo: {type: String},
    
    department: {type: String},
    
    phone_home: {type: String},
    
    phone_mobile: {type: String},
    
    phone_work: {type: String},
    
    phone_other: {type: String},
    
    phone_fax: {type: String},
    
    lawful_basis_source: {type: String},
    
    primary_address_street: {type: String},
    
    primary_address_city: {type: String},
    
    primary_address_state: {type: String},
    
    primary_address_postalcode: {type: String},
    
    primary_address_country: {type: String},
    
    alt_address_street: {type: String},
    
    alt_address_city: {type: String},
    
    alt_address_state: {type: String},
    
    alt_address_postalcode: {type: String},
    
    alt_address_country: {type: String},
    
    assistant: {type: String},
    
    assistant_phone: {type: String},
    
    lead_source: {type: String},
    
    joomla_account_id: {type: String},
    
    portal_user_type: {type: String},
    
    
    description: {type: String},
    
    lawful_basis: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    date_reviewed: {type: Date},
    
    birthdate: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    reports_to_id: {type: String},
    
    campaign_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    do_not_call: {type: Number},
    
    portal_account_disabled: {type: Number},
    
    
  }),'contacts');
  //</es-section>
