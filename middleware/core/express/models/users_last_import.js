/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:37:14 GMT-0400 (Bolivia Time)
 * Time: 15:37:14
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:37:14 GMT-0400 (Bolivia Time)
 * Last time updated: 15:37:14
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const usersLastImport = sequelize.define('usersLastImport', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      import_module: DataTypes.STRING,
      
      bean_type: DataTypes.STRING,
      
      
      
      
      
      
      assigned_user_id: DataTypes.CHAR,
      
      bean_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'users_last_import',
      timestamps: false,
    });
    usersLastImport.associate = (models) => {
      
    };
    return usersLastImport;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("usersLastImport", new Schema({
    
    
    
    import_module: {type: String},
    
    bean_type: {type: String},
    
    
    
    
    
    
    
    assigned_user_id: {type: String},
    
    bean_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
  }),'users_last_import');
  //</es-section>
