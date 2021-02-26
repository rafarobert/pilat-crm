/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:21:57 GMT-0400 (Bolivia Time)
 * Time: 0:21:57
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:21:57 GMT-0400 (Bolivia Time)
 * Last time updated: 0:21:57
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const amTasktemplatesAmProjecttemplatesC = sequelize.define('amTasktemplatesAmProjecttemplatesC', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      am_tasktemplates_am_projecttemplatesam_projecttemplates_ida: DataTypes.STRING,
      
      am_tasktemplates_am_projecttemplatesam_tasktemplates_idb: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'am_tasktemplates_am_projecttemplates_c',
      timestamps: false,
    });
    amTasktemplatesAmProjecttemplatesC.associate = (models) => {
      
    };
    return amTasktemplatesAmProjecttemplatesC;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("amTasktemplatesAmProjecttemplatesC", new Schema({
    
    
    
    am_tasktemplates_am_projecttemplatesam_projecttemplates_ida: {type: String},
    
    am_tasktemplates_am_projecttemplatesam_tasktemplates_idb: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'am_tasktemplates_am_projecttemplates_c');
  //</es-section>
