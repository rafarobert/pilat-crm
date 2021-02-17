/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:48 GMT-0400 (Bolivia Time)
 * Time: 4:43:48
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:48 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:48
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const pilatParams = sequelize.define('pilatParams', {
      
      _id: { type: DataTypes.STRING, primaryKey: true },
      
      
      id: DataTypes.INTEGER,
      
      par_order: DataTypes.INTEGER,
      
      
      
      
      par_cod: DataTypes.STRING,
      
      par_description: DataTypes.STRING,
      
      par_abbr: DataTypes.STRING,
      
      par_group: DataTypes.STRING,
      
      createdBy: DataTypes.STRING,
      
      updatedBy: DataTypes.STRING,
      
      
      
      par_dictionary_id: DataTypes.STRING,
      
      par_status_id: DataTypes.STRING,
      
      par_parent_id: DataTypes.STRING,
      
      
      duaAt: DataTypes.DATE,
      
      createdAt: DataTypes.DATE,
      
      updatedAt: DataTypes.DATE,
      
      
      
      
      
      
      
    }, {
      tableName:'pilat_params',
      timestamps: false,
    });
    pilatParams.associate = (models) => {
      
      models.pilatParams.belongsTo(models.pilatDictionaries,{foreignKey:'par_dictionary_id', targetKey: '_id',  as:'pilatParamParDictionary'});
      models.pilatDictionaries.hasMany(models.pilatParams,{foreignKey:'par_dictionary_id', sourceKey: '_id', as:'pilatParamParDictionary'});
      
      models.pilatParams.belongsTo(models.pilatParams,{foreignKey:'par_status_id', targetKey: '_id',  as:'pilatParamParStatus'});

      models.pilatParams.belongsTo(models.pilatParams,{foreignKey:'par_parent_id', targetKey: '_id',  as:'pilatParamParParent'});

    };
    return pilatParams;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("pilatParams", new Schema({
    
    
    id: {type: Number},
    
    par_order: {type: Number},
    
    
    par_cod: {type: String},
    
    par_description: {type: String},
    
    par_abbr: {type: String},
    
    par_group: {type: String},
    
    createdBy: {type: String},
    
    updatedBy: {type: String},
    
    
    
    
    par_dictionary_id: {type: mongoose.Types.ObjectId},
    
    par_status_id: {type: mongoose.Types.ObjectId},
    
    par_parent_id: {type: mongoose.Types.ObjectId},
    
    
    duaAt: {type: Date},
    
    createdAt: {type: Date},
    
    updatedAt: {type: Date},
    
    
    
    
    
    
    
  }),'pilat_params');
  //</es-section>
