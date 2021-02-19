/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:35:24 GMT-0400 (Bolivia Time)
 * Time: 18:35:24
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:35:24 GMT-0400 (Bolivia Time)
 * Last time updated: 18:35:24
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const aclActions = sequelize.define('aclActions', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      aclaccess: DataTypes.INTEGER,
      
      
      
      name: DataTypes.STRING,
      
      category: DataTypes.STRING,
      
      acltype: DataTypes.STRING,
      
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'acl_actions',
      timestamps: false,
    });
    aclActions.associate = (models) => {
      
    };
    return aclActions;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("aclActions", new Schema({
    
    aclaccess: {type: Number},
    
    
    
    name: {type: String},
    
    category: {type: String},
    
    acltype: {type: String},
    
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
  }),'acl_actions');
  //</es-section>
