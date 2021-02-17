/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:53 GMT-0400 (Bolivia Time)
 * Time: 4:42:53
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:53 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:53
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const documentsOpportunities = sequelize.define('documentsOpportunities', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      document_id: DataTypes.STRING,
      
      opportunity_id: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'documents_opportunities',
      timestamps: false,
    });
    documentsOpportunities.associate = (models) => {
      
    };
    return documentsOpportunities;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("documentsOpportunities", new Schema({
    
    
    
    document_id: {type: String},
    
    opportunity_id: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'documents_opportunities');
  //</es-section>