/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:26 GMT-0400 (Bolivia Time)
 * Time: 18:38:26
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:26 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:26
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const prospects = sequelize.define('prospects', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      tracker_key: DataTypes.INTEGER,
      
      
      
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
      
      account_name: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      lawful_basis: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      date_reviewed: DataTypes.DATE,
      
      birthdate: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      lead_id: DataTypes.CHAR,
      
      campaign_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      do_not_call: DataTypes.TINYINT,
      
      
    }, {
      tableName:'prospects',
      timestamps: false,
    });
    prospects.associate = (models) => {
      
    };
    return prospects;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("prospects", new Schema({
    
    tracker_key: {type: Number},
    
    
    
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
    
    account_name: {type: String},
    
    
    description: {type: String},
    
    lawful_basis: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    date_reviewed: {type: Date},
    
    birthdate: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    lead_id: {type: String},
    
    campaign_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    do_not_call: {type: Number},
    
    
  }),'prospects');
  //</es-section>
