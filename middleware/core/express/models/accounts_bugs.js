/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:55:47 GMT-0400 (Bolivia Time)
 * Time: 14:55:47
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:55:47 GMT-0400 (Bolivia Time)
 * Last time updated: 14:55:47
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const accountsBugs = sequelize.define('accountsBugs', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      account_id: DataTypes.STRING,
      
      bug_id: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'accounts_bugs',
      timestamps: false,
    });
    accountsBugs.associate = (models) => {
      
    };
    return accountsBugs;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("accountsBugs", new Schema({
    
    
    
    account_id: {type: String},
    
    bug_id: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'accounts_bugs');
  //</es-section>
