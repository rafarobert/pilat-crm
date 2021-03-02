/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:26 GMT-0400 (Bolivia Time)
 * Time: 14:0:26
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:26 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:26
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const aosQuotesCstm = sequelize.define('aosQuotesCstm', {
      
      id_c: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      unidad_industrial_c: DataTypes.INTEGER,
      
      manzano_c: DataTypes.INTEGER,
      
      metro_cuadrado_c: DataTypes.INTEGER,
      
      frente_metros_c: DataTypes.INTEGER,
      
      fondo_metros_c: DataTypes.INTEGER,
      
      
      
      ubicacion_c: DataTypes.STRING,
      
      lbl_tipoventa_c: DataTypes.STRING,
      
      term_years_c: DataTypes.STRING,
      
      tipo_pago_c: DataTypes.STRING,
      
      link_terreno_c: DataTypes.STRING,
      
      moneda_c: DataTypes.STRING,
      
      
      
      
      fecha_envio_programada_c: DataTypes.DATE,
      
      
      
      
      
      lbl_superficie_c: DataTypes.DECIMAL,
      
      lbl_cuotainicial_c: DataTypes.DECIMAL,
      
      saldo_cuota_inical_c: DataTypes.DECIMAL,
      
      precio_mcuadrado_c: DataTypes.DECIMAL,
      
      saldo_c: DataTypes.DECIMAL,
      
      cuota_mensual_c: DataTypes.DECIMAL,
      
      
      
    }, {
      tableName:'aos_quotes_cstm',
      timestamps: false,
    });
    aosQuotesCstm.associate = (models) => {
      
    };
    return aosQuotesCstm;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("aosQuotesCstm", new Schema({
    
    unidad_industrial_c: {type: Number},
    
    manzano_c: {type: Number},
    
    metro_cuadrado_c: {type: Number},
    
    frente_metros_c: {type: Number},
    
    fondo_metros_c: {type: Number},
    
    
    
    ubicacion_c: {type: String},
    
    lbl_tipoventa_c: {type: String},
    
    term_years_c: {type: String},
    
    tipo_pago_c: {type: String},
    
    link_terreno_c: {type: String},
    
    moneda_c: {type: String},
    
    
    
    
    
    fecha_envio_programada_c: {type: Date},
    
    
    
    
    
    lbl_superficie_c: {type: mongoose.Types.Decimal128},
    
    lbl_cuotainicial_c: {type: mongoose.Types.Decimal128},
    
    saldo_cuota_inical_c: {type: mongoose.Types.Decimal128},
    
    precio_mcuadrado_c: {type: mongoose.Types.Decimal128},
    
    saldo_c: {type: mongoose.Types.Decimal128},
    
    cuota_mensual_c: {type: mongoose.Types.Decimal128},
    
    
    
  }),'aos_quotes_cstm');
  //</es-section>
