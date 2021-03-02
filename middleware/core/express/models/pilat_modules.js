/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:17 GMT-0400 (Bolivia Time)
 * Time: 14:1:17
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:17 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:17
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const pilatModules = sequelize.define('pilatModules', {
      
      _id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      id: DataTypes.INTEGER,
      
      
      
      mod_code: DataTypes.STRING,
      
      mod_description: DataTypes.STRING,
      
      mod_abbr: DataTypes.STRING,
      
      mod_icon: DataTypes.STRING,
      
      mod_group: DataTypes.STRING,
      
      createdBy: DataTypes.STRING,
      
      updatedBy: DataTypes.STRING,
      
      
      
      mod_par_status_id: DataTypes.STRING,
      
      mod_parent_id: DataTypes.STRING,
      
      
      dueAt: DataTypes.DATE,
      
      createdAt: DataTypes.DATE,
      
      updatedAt: DataTypes.DATE,
      
      
      
      
      
      
      
    }, {
      tableName:'pilat_modules',
      timestamps: false,
    });
    pilatModules.associate = (models) => {
      
      models.pilatModules.belongsTo(models.pilatParams,{foreignKey:'mod_par_status_id', targetKey: '_id',  as:'pilatModuleModParStatus'});
      models.pilatParams.hasMany(models.pilatModules,{foreignKey:'mod_par_status_id', sourceKey: '_id', as:'pilatModuleModParStatus'});
      
      models.pilatModules.belongsTo(models.pilatModules,{foreignKey:'mod_parent_id', targetKey: '_id',  as:'pilatModuleModParent'});

    };
    return pilatModules;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("pilatModules", new Schema({
    
    id: {type: Number},
    
    
    
    mod_code: {type: String},
    
    mod_description: {type: String},
    
    mod_abbr: {type: String},
    
    mod_icon: {type: String},
    
    mod_group: {type: String},
    
    createdBy: {type: String},
    
    updatedBy: {type: String},
    
    
    
    
    mod_par_status_id: {type: mongoose.Types.ObjectId},
    
    mod_parent_id: {type: mongoose.Types.ObjectId},
    
    
    dueAt: {type: Date},
    
    createdAt: {type: Date},
    
    updatedAt: {type: Date},
    
    
    
    
    
    
    
  }),'pilat_modules');
  //</es-section>
