/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:07 GMT-0400 (Bolivia Time)
 * Time: 18:38:7
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:07 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:7
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const pilatDictionaries = sequelize.define('pilatDictionaries', {
      
      _id: { type: DataTypes.STRING, primaryKey: true },
      
      
      id: DataTypes.INTEGER,
      
      
      
      
      dic_code: DataTypes.STRING,
      
      dic_description: DataTypes.STRING,
      
      dic_group: DataTypes.STRING,
      
      createdBy: DataTypes.STRING,
      
      updatedBy: DataTypes.STRING,
      
      
      
      dic_par_status_id: DataTypes.STRING,
      
      
      dueAt: DataTypes.DATE,
      
      createdAt: DataTypes.DATE,
      
      updatedAt: DataTypes.DATE,
      
      
      
      
      
      
      
    }, {
      tableName:'pilat_dictionaries',
      timestamps: false,
    });
    pilatDictionaries.associate = (models) => {
      
      models.pilatDictionaries.belongsTo(models.pilatParams,{foreignKey:'dic_par_status_id', targetKey: '_id',  as:'pilatDictionaryDicParStatus'});
      models.pilatParams.hasMany(models.pilatDictionaries,{foreignKey:'dic_par_status_id', sourceKey: '_id', as:'pilatDictionaryDicParStatus'});
      
    };
    return pilatDictionaries;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("pilatDictionaries", new Schema({
    
    
    id: {type: Number},
    
    
    dic_code: {type: String},
    
    dic_description: {type: String},
    
    dic_group: {type: String},
    
    createdBy: {type: String},
    
    updatedBy: {type: String},
    
    
    
    
    dic_par_status_id: {type: mongoose.Types.ObjectId},
    
    
    dueAt: {type: Date},
    
    createdAt: {type: Date},
    
    updatedAt: {type: Date},
    
    
    
    
    
    
    
  }),'pilat_dictionaries');
  //</es-section>
