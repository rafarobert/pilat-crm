/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:28 GMT-0400 (Bolivia Time)
 * Time: 14:57:28
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:28 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:28
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const pilatViews = sequelize.define('pilatViews', {
      
      _id: { type: DataTypes.STRING, primaryKey: true },
      
      
      id: DataTypes.INTEGER,
      
      
      
      
      vie_code: DataTypes.STRING,
      
      vie_description: DataTypes.STRING,
      
      vie_route: DataTypes.STRING,
      
      vie_params: DataTypes.STRING,
      
      vie_icon: DataTypes.STRING,
      
      vie_group: DataTypes.STRING,
      
      createdBy: DataTypes.STRING,
      
      updatedBy: DataTypes.STRING,
      
      
      
      vie_module_id: DataTypes.STRING,
      
      vie_return_id: DataTypes.STRING,
      
      vie_par_status_id: DataTypes.STRING,
      
      
      dueAt: DataTypes.DATE,
      
      createdAt: DataTypes.DATE,
      
      updatedAt: DataTypes.DATE,
      
      
      
      
      
      
      
    }, {
      tableName:'pilat_views',
      timestamps: false,
    });
    pilatViews.associate = (models) => {
      
      models.pilatViews.belongsTo(models.pilatModules,{foreignKey:'vie_module_id', targetKey: '_id',  as:'pilatViewVieModule'});
      models.pilatModules.hasMany(models.pilatViews,{foreignKey:'vie_module_id', sourceKey: '_id', as:'pilatViewVieModule'});
      
      models.pilatViews.belongsTo(models.pilatViews,{foreignKey:'vie_return_id', targetKey: '_id',  as:'pilatViewVieReturn'});

      models.pilatViews.belongsTo(models.pilatParams,{foreignKey:'vie_par_status_id', targetKey: '_id',  as:'pilatViewVieParStatus'});
      models.pilatParams.hasMany(models.pilatViews,{foreignKey:'vie_par_status_id', sourceKey: '_id', as:'pilatViewVieParStatus'});
      
    };
    return pilatViews;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("pilatViews", new Schema({
    
    
    id: {type: Number},
    
    
    vie_code: {type: String},
    
    vie_description: {type: String},
    
    vie_route: {type: String},
    
    vie_params: {type: String},
    
    vie_icon: {type: String},
    
    vie_group: {type: String},
    
    createdBy: {type: String},
    
    updatedBy: {type: String},
    
    
    
    
    vie_module_id: {type: mongoose.Types.ObjectId},
    
    vie_return_id: {type: mongoose.Types.ObjectId},
    
    vie_par_status_id: {type: mongoose.Types.ObjectId},
    
    
    dueAt: {type: Date},
    
    createdAt: {type: Date},
    
    updatedAt: {type: Date},
    
    
    
    
    
    
    
  }),'pilat_views');
  //</es-section>
