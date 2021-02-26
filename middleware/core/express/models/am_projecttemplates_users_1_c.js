/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:21:56 GMT-0400 (Bolivia Time)
 * Time: 0:21:56
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:21:56 GMT-0400 (Bolivia Time)
 * Last time updated: 0:21:56
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const amProjecttemplatesUsers1C = sequelize.define('amProjecttemplatesUsers1C', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      am_projecttemplates_ida: DataTypes.STRING,
      
      users_idb: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'am_projecttemplates_users_1_c',
      timestamps: false,
    });
    amProjecttemplatesUsers1C.associate = (models) => {
      
    };
    return amProjecttemplatesUsers1C;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("amProjecttemplatesUsers1C", new Schema({
    
    
    
    am_projecttemplates_ida: {type: String},
    
    users_idb: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'am_projecttemplates_users_1_c');
  //</es-section>
