/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:35 GMT-0400 (Bolivia Time)
 * Time: 4:43:35
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:35 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:35
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const meetingsUsers = sequelize.define('meetingsUsers', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      meeting_id: DataTypes.STRING,
      
      user_id: DataTypes.STRING,
      
      required: DataTypes.STRING,
      
      accept_status: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'meetings_users',
      timestamps: false,
    });
    meetingsUsers.associate = (models) => {
      
    };
    return meetingsUsers;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("meetingsUsers", new Schema({
    
    
    
    meeting_id: {type: String},
    
    user_id: {type: String},
    
    required: {type: String},
    
    accept_status: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'meetings_users');
  //</es-section>