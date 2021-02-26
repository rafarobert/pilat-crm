/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:21:48 GMT-0400 (Bolivia Time)
 * Time: 0:21:48
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:21:48 GMT-0400 (Bolivia Time)
 * Last time updated: 0:21:48
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const accounts = sequelize.define('accounts', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      account_type: DataTypes.STRING,
      
      industry: DataTypes.STRING,
      
      annual_revenue: DataTypes.STRING,
      
      phone_fax: DataTypes.STRING,
      
      billing_address_street: DataTypes.STRING,
      
      billing_address_city: DataTypes.STRING,
      
      billing_address_state: DataTypes.STRING,
      
      billing_address_postalcode: DataTypes.STRING,
      
      billing_address_country: DataTypes.STRING,
      
      rating: DataTypes.STRING,
      
      phone_office: DataTypes.STRING,
      
      phone_alternate: DataTypes.STRING,
      
      website: DataTypes.STRING,
      
      ownership: DataTypes.STRING,
      
      employees: DataTypes.STRING,
      
      ticker_symbol: DataTypes.STRING,
      
      shipping_address_street: DataTypes.STRING,
      
      shipping_address_city: DataTypes.STRING,
      
      shipping_address_state: DataTypes.STRING,
      
      shipping_address_postalcode: DataTypes.STRING,
      
      shipping_address_country: DataTypes.STRING,
      
      sic_code: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      parent_id: DataTypes.CHAR,
      
      campaign_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'accounts',
      timestamps: false,
    });
    accounts.associate = (models) => {
      
    };
    return accounts;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("accounts", new Schema({
    
    
    
    name: {type: String},
    
    account_type: {type: String},
    
    industry: {type: String},
    
    annual_revenue: {type: String},
    
    phone_fax: {type: String},
    
    billing_address_street: {type: String},
    
    billing_address_city: {type: String},
    
    billing_address_state: {type: String},
    
    billing_address_postalcode: {type: String},
    
    billing_address_country: {type: String},
    
    rating: {type: String},
    
    phone_office: {type: String},
    
    phone_alternate: {type: String},
    
    website: {type: String},
    
    ownership: {type: String},
    
    employees: {type: String},
    
    ticker_symbol: {type: String},
    
    shipping_address_street: {type: String},
    
    shipping_address_city: {type: String},
    
    shipping_address_state: {type: String},
    
    shipping_address_postalcode: {type: String},
    
    shipping_address_country: {type: String},
    
    sic_code: {type: String},
    
    
    description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    parent_id: {type: String},
    
    campaign_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
  }),'accounts');
  //</es-section>
