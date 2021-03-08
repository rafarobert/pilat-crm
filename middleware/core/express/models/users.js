/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:37:12 GMT-0400 (Bolivia Time)
 * Time: 15:37:12
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:37:12 GMT-0400 (Bolivia Time)
 * Last time updated: 15:37:12
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const users = sequelize.define('users', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      user_name: DataTypes.STRING,
      
      user_hash: DataTypes.STRING,
      
      authenticate_id: DataTypes.STRING,
      
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
      
      status: DataTypes.STRING,
      
      address_street: DataTypes.STRING,
      
      address_city: DataTypes.STRING,
      
      address_state: DataTypes.STRING,
      
      address_country: DataTypes.STRING,
      
      address_postalcode: DataTypes.STRING,
      
      employee_status: DataTypes.STRING,
      
      messenger_id: DataTypes.STRING,
      
      messenger_type: DataTypes.STRING,
      
      factor_auth_interface: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      
      
      pwd_last_changed: DataTypes.DATE,
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      reports_to_id: DataTypes.CHAR,
      
      
      
      
      system_generated_password: DataTypes.TINYINT,
      
      sugar_login: DataTypes.TINYINT,
      
      is_admin: DataTypes.TINYINT,
      
      external_auth_only: DataTypes.TINYINT,
      
      receive_notifications: DataTypes.TINYINT,
      
      deleted: DataTypes.TINYINT,
      
      portal_only: DataTypes.TINYINT,
      
      show_on_employees: DataTypes.TINYINT,
      
      is_group: DataTypes.TINYINT,
      
      factor_auth: DataTypes.TINYINT,
      
      
    }, {
      tableName:'users',
      timestamps: false,
    });
    users.associate = (models) => {
      
    };
    return users;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("users", new Schema({
    
    
    
    user_name: {type: String},
    
    user_hash: {type: String},
    
    authenticate_id: {type: String},
    
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
    
    status: {type: String},
    
    address_street: {type: String},
    
    address_city: {type: String},
    
    address_state: {type: String},
    
    address_country: {type: String},
    
    address_postalcode: {type: String},
    
    employee_status: {type: String},
    
    messenger_id: {type: String},
    
    messenger_type: {type: String},
    
    factor_auth_interface: {type: String},
    
    
    description: {type: String},
    
    
    
    
    pwd_last_changed: {type: Date},
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    reports_to_id: {type: String},
    
    
    
    
    system_generated_password: {type: Number},
    
    sugar_login: {type: Number},
    
    is_admin: {type: Number},
    
    external_auth_only: {type: Number},
    
    receive_notifications: {type: Number},
    
    deleted: {type: Number},
    
    portal_only: {type: Number},
    
    show_on_employees: {type: Number},
    
    is_group: {type: Number},
    
    factor_auth: {type: Number},
    
    
  }),'users');
  //</es-section>
