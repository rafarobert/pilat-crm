/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:22 GMT-0400 (Bolivia Time)
 * Time: 14:56:22
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:22 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:22
 *
 * Caution: es-sections will be replaced by script execution
 */

require('../../../utils/Prototipes');
const helpers = require('../../../utils/helpers');
const bcrypt = require("bcrypt");
const models = require('../index');
const Util = require('../../../utils/Utils');
const util = new Util();

import configJson from '../../../config/config';
const sql = configJson.sql;

const { Op } = require("sequelize");

//<es-section>

//</es-section>

class AoQuoteCstmService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAosQuotesCstm(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aosQuotesCstm.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['_id','ASC']],
                });
			} else {
				return await models.mongoose.aosQuotesCstm.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAosQuotesCstm(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aosQuotesCstm.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aosQuotesCstm.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAoQuoteCstm(newAoQuoteCstm) {
		try {
			let objAoQuoteCstm;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aosQuotesCstm.primaryKeys.id_c.type.toString())) {
			    newAoQuoteCstm.id_c = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAoQuoteCstm = await models.sequelize.aosQuotesCstm.create(newAoQuoteCstm);
			} else {
				objAoQuoteCstm = new models.mongoose.aosQuotesCstm(newAoQuoteCstm);
				await objAoQuoteCstm.save();
			}
			return objAoQuoteCstm;
		} catch (error) {
			throw error;
		}
	}

	static async updateAoQuoteCstm(id_c, updateAoQuoteCstm) {
		try {
			let objAoQuoteCstm;
			if(sql) {
				objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({where: { id_c: util.Char(id_c) }});
				if (objAoQuoteCstm) {
					await models.sequelize.aosQuotesCstm.update(updateAoQuoteCstm, { where: { id_c: util.Char(id_c) } });
					objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({where: { id_c: util.Char(id_c) }});
				}
			} else {
				delete updateAoQuoteCstm._id;
				objAoQuoteCstm = await models.mongoose.aosQuotesCstm.findOneAndUpdate({id_c:id_c}, {$set: updateAoQuoteCstm}, {new: true});
			}
			return objAoQuoteCstm;
		} catch (error) {
			throw error;
		}
	}

	static async getAAoQuoteCstm(id_c, query) {
		try {
			let objAoQuoteCstm;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({
					    where: where && !where.where ? where : { id_c: util.Char(id_c) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAoQuoteCstm = await models.mongoose.aosQuotesCstm.find({id_c:util.Char(id_c)}).select(query.select);
			}
			return objAoQuoteCstm;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAoQuoteCstm(id_c) {
		try {
			let objAoQuoteCstm;
			if(sql) {
				objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({ where: { id_c: util.Char(id_c) } });
				if (objAoQuoteCstm) {
					await models.sequelize.aosQuotesCstm.destroy({where: { id_c: util.Char(id_c) }});
				}
			} else {
				objAoQuoteCstm = await models.mongoose.aosQuotesCstm.deleteOne({id_c:util.Char(id_c)});
			}
			return objAoQuoteCstm;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneByIdC(idC, query = {}) {
    	try {
    		let objAoQuoteCstm;
    		if(sql) {
    			objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id_c: idC },
    			});
    		} else {
    			objAoQuoteCstm = await models.mongoose.aosQuotesCstm.findOne({id_c: idC});
    		}
    		return objAoQuoteCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUnidadIndustrialC(unidadIndustrialC, query = {}) {
    	try {
    		let objAoQuoteCstm;
    		if(sql) {
    			objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { unidad_industrial_c: unidadIndustrialC },
    			});
    		} else {
    			objAoQuoteCstm = await models.mongoose.aosQuotesCstm.findOne({unidad_industrial_c: unidadIndustrialC});
    		}
    		return objAoQuoteCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByManzanoC(manzanoC, query = {}) {
    	try {
    		let objAoQuoteCstm;
    		if(sql) {
    			objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { manzano_c: manzanoC },
    			});
    		} else {
    			objAoQuoteCstm = await models.mongoose.aosQuotesCstm.findOne({manzano_c: manzanoC});
    		}
    		return objAoQuoteCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMetroCuadradoC(metroCuadradoC, query = {}) {
    	try {
    		let objAoQuoteCstm;
    		if(sql) {
    			objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { metro_cuadrado_c: metroCuadradoC },
    			});
    		} else {
    			objAoQuoteCstm = await models.mongoose.aosQuotesCstm.findOne({metro_cuadrado_c: metroCuadradoC});
    		}
    		return objAoQuoteCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFrenteMetrosC(frenteMetrosC, query = {}) {
    	try {
    		let objAoQuoteCstm;
    		if(sql) {
    			objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { frente_metros_c: frenteMetrosC },
    			});
    		} else {
    			objAoQuoteCstm = await models.mongoose.aosQuotesCstm.findOne({frente_metros_c: frenteMetrosC});
    		}
    		return objAoQuoteCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFondoMetrosC(fondoMetrosC, query = {}) {
    	try {
    		let objAoQuoteCstm;
    		if(sql) {
    			objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { fondo_metros_c: fondoMetrosC },
    			});
    		} else {
    			objAoQuoteCstm = await models.mongoose.aosQuotesCstm.findOne({fondo_metros_c: fondoMetrosC});
    		}
    		return objAoQuoteCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLblSuperficieC(lblSuperficieC, query = {}) {
    	try {
    		let objAoQuoteCstm;
    		if(sql) {
    			objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { lbl_superficie_c: lblSuperficieC },
    			});
    		} else {
    			objAoQuoteCstm = await models.mongoose.aosQuotesCstm.findOne({lbl_superficie_c: lblSuperficieC});
    		}
    		return objAoQuoteCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLblCuotainicialC(lblCuotainicialC, query = {}) {
    	try {
    		let objAoQuoteCstm;
    		if(sql) {
    			objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { lbl_cuotainicial_c: lblCuotainicialC },
    			});
    		} else {
    			objAoQuoteCstm = await models.mongoose.aosQuotesCstm.findOne({lbl_cuotainicial_c: lblCuotainicialC});
    		}
    		return objAoQuoteCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySaldoCuotaInicalC(saldoCuotaInicalC, query = {}) {
    	try {
    		let objAoQuoteCstm;
    		if(sql) {
    			objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { saldo_cuota_inical_c: saldoCuotaInicalC },
    			});
    		} else {
    			objAoQuoteCstm = await models.mongoose.aosQuotesCstm.findOne({saldo_cuota_inical_c: saldoCuotaInicalC});
    		}
    		return objAoQuoteCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPrecioMcuadradoC(precioMcuadradoC, query = {}) {
    	try {
    		let objAoQuoteCstm;
    		if(sql) {
    			objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { precio_mcuadrado_c: precioMcuadradoC },
    			});
    		} else {
    			objAoQuoteCstm = await models.mongoose.aosQuotesCstm.findOne({precio_mcuadrado_c: precioMcuadradoC});
    		}
    		return objAoQuoteCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySaldoC(saldoC, query = {}) {
    	try {
    		let objAoQuoteCstm;
    		if(sql) {
    			objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { saldo_c: saldoC },
    			});
    		} else {
    			objAoQuoteCstm = await models.mongoose.aosQuotesCstm.findOne({saldo_c: saldoC});
    		}
    		return objAoQuoteCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCuotaMensualC(cuotaMensualC, query = {}) {
    	try {
    		let objAoQuoteCstm;
    		if(sql) {
    			objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { cuota_mensual_c: cuotaMensualC },
    			});
    		} else {
    			objAoQuoteCstm = await models.mongoose.aosQuotesCstm.findOne({cuota_mensual_c: cuotaMensualC});
    		}
    		return objAoQuoteCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUbicacionC(ubicacionC, query = {}) {
    	try {
    		let objAoQuoteCstm;
    		if(sql) {
    			objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { ubicacion_c: ubicacionC },
    			});
    		} else {
    			objAoQuoteCstm = await models.mongoose.aosQuotesCstm.findOne({ubicacion_c: ubicacionC});
    		}
    		return objAoQuoteCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLblTipoventaC(lblTipoventaC, query = {}) {
    	try {
    		let objAoQuoteCstm;
    		if(sql) {
    			objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { lbl_tipoventa_c: lblTipoventaC },
    			});
    		} else {
    			objAoQuoteCstm = await models.mongoose.aosQuotesCstm.findOne({lbl_tipoventa_c: lblTipoventaC});
    		}
    		return objAoQuoteCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTermYearsC(termYearsC, query = {}) {
    	try {
    		let objAoQuoteCstm;
    		if(sql) {
    			objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { term_years_c: termYearsC },
    			});
    		} else {
    			objAoQuoteCstm = await models.mongoose.aosQuotesCstm.findOne({term_years_c: termYearsC});
    		}
    		return objAoQuoteCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTipoPagoC(tipoPagoC, query = {}) {
    	try {
    		let objAoQuoteCstm;
    		if(sql) {
    			objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { tipo_pago_c: tipoPagoC },
    			});
    		} else {
    			objAoQuoteCstm = await models.mongoose.aosQuotesCstm.findOne({tipo_pago_c: tipoPagoC});
    		}
    		return objAoQuoteCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLinkTerrenoC(linkTerrenoC, query = {}) {
    	try {
    		let objAoQuoteCstm;
    		if(sql) {
    			objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { link_terreno_c: linkTerrenoC },
    			});
    		} else {
    			objAoQuoteCstm = await models.mongoose.aosQuotesCstm.findOne({link_terreno_c: linkTerrenoC});
    		}
    		return objAoQuoteCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMonedaC(monedaC, query = {}) {
    	try {
    		let objAoQuoteCstm;
    		if(sql) {
    			objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { moneda_c: monedaC },
    			});
    		} else {
    			objAoQuoteCstm = await models.mongoose.aosQuotesCstm.findOne({moneda_c: monedaC});
    		}
    		return objAoQuoteCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFechaEnvioProgramadaC(fechaEnvioProgramadaC, query = {}) {
    	try {
    		let objAoQuoteCstm;
    		if(sql) {
    			objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { fecha_envio_programada_c: fechaEnvioProgramadaC },
    			});
    		} else {
    			objAoQuoteCstm = await models.mongoose.aosQuotesCstm.findOne({fecha_envio_programada_c: fechaEnvioProgramadaC});
    		}
    		return objAoQuoteCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAoQuoteCstmByIdC(idC, updateAoQuoteCstm) {
    	try {
    		let objAoQuoteCstm;
    		if(sql) {
    			objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({where: { id_c: idC }});
    			if (objAoQuoteCstm) {
    				objAoQuoteCstm = await models.sequelize.aosQuotesCstm.update(updateAoQuoteCstm, { where: { id_c: idC } });
    			}
    		} else {
    			objAoQuoteCstm = await models.mongoose.aosQuotesCstm.findOneAndUpdate({id_c: idC}, {$set: updateAoQuoteCstm}, {new: true});
    		}
    		return objAoQuoteCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteCstmByUnidadIndustrialC(unidadIndustrialC, updateAoQuoteCstm) {
    	try {
    		let objAoQuoteCstm;
    		if(sql) {
    			objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({where: { unidad_industrial_c: unidadIndustrialC }});
    			if (objAoQuoteCstm) {
    				objAoQuoteCstm = await models.sequelize.aosQuotesCstm.update(updateAoQuoteCstm, { where: { unidad_industrial_c: unidadIndustrialC } });
    			}
    		} else {
    			objAoQuoteCstm = await models.mongoose.aosQuotesCstm.findOneAndUpdate({unidad_industrial_c: unidadIndustrialC}, {$set: updateAoQuoteCstm}, {new: true});
    		}
    		return objAoQuoteCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteCstmByManzanoC(manzanoC, updateAoQuoteCstm) {
    	try {
    		let objAoQuoteCstm;
    		if(sql) {
    			objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({where: { manzano_c: manzanoC }});
    			if (objAoQuoteCstm) {
    				objAoQuoteCstm = await models.sequelize.aosQuotesCstm.update(updateAoQuoteCstm, { where: { manzano_c: manzanoC } });
    			}
    		} else {
    			objAoQuoteCstm = await models.mongoose.aosQuotesCstm.findOneAndUpdate({manzano_c: manzanoC}, {$set: updateAoQuoteCstm}, {new: true});
    		}
    		return objAoQuoteCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteCstmByMetroCuadradoC(metroCuadradoC, updateAoQuoteCstm) {
    	try {
    		let objAoQuoteCstm;
    		if(sql) {
    			objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({where: { metro_cuadrado_c: metroCuadradoC }});
    			if (objAoQuoteCstm) {
    				objAoQuoteCstm = await models.sequelize.aosQuotesCstm.update(updateAoQuoteCstm, { where: { metro_cuadrado_c: metroCuadradoC } });
    			}
    		} else {
    			objAoQuoteCstm = await models.mongoose.aosQuotesCstm.findOneAndUpdate({metro_cuadrado_c: metroCuadradoC}, {$set: updateAoQuoteCstm}, {new: true});
    		}
    		return objAoQuoteCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteCstmByFrenteMetrosC(frenteMetrosC, updateAoQuoteCstm) {
    	try {
    		let objAoQuoteCstm;
    		if(sql) {
    			objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({where: { frente_metros_c: frenteMetrosC }});
    			if (objAoQuoteCstm) {
    				objAoQuoteCstm = await models.sequelize.aosQuotesCstm.update(updateAoQuoteCstm, { where: { frente_metros_c: frenteMetrosC } });
    			}
    		} else {
    			objAoQuoteCstm = await models.mongoose.aosQuotesCstm.findOneAndUpdate({frente_metros_c: frenteMetrosC}, {$set: updateAoQuoteCstm}, {new: true});
    		}
    		return objAoQuoteCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteCstmByFondoMetrosC(fondoMetrosC, updateAoQuoteCstm) {
    	try {
    		let objAoQuoteCstm;
    		if(sql) {
    			objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({where: { fondo_metros_c: fondoMetrosC }});
    			if (objAoQuoteCstm) {
    				objAoQuoteCstm = await models.sequelize.aosQuotesCstm.update(updateAoQuoteCstm, { where: { fondo_metros_c: fondoMetrosC } });
    			}
    		} else {
    			objAoQuoteCstm = await models.mongoose.aosQuotesCstm.findOneAndUpdate({fondo_metros_c: fondoMetrosC}, {$set: updateAoQuoteCstm}, {new: true});
    		}
    		return objAoQuoteCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteCstmByLblSuperficieC(lblSuperficieC, updateAoQuoteCstm) {
    	try {
    		let objAoQuoteCstm;
    		if(sql) {
    			objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({where: { lbl_superficie_c: lblSuperficieC }});
    			if (objAoQuoteCstm) {
    				objAoQuoteCstm = await models.sequelize.aosQuotesCstm.update(updateAoQuoteCstm, { where: { lbl_superficie_c: lblSuperficieC } });
    			}
    		} else {
    			objAoQuoteCstm = await models.mongoose.aosQuotesCstm.findOneAndUpdate({lbl_superficie_c: lblSuperficieC}, {$set: updateAoQuoteCstm}, {new: true});
    		}
    		return objAoQuoteCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteCstmByLblCuotainicialC(lblCuotainicialC, updateAoQuoteCstm) {
    	try {
    		let objAoQuoteCstm;
    		if(sql) {
    			objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({where: { lbl_cuotainicial_c: lblCuotainicialC }});
    			if (objAoQuoteCstm) {
    				objAoQuoteCstm = await models.sequelize.aosQuotesCstm.update(updateAoQuoteCstm, { where: { lbl_cuotainicial_c: lblCuotainicialC } });
    			}
    		} else {
    			objAoQuoteCstm = await models.mongoose.aosQuotesCstm.findOneAndUpdate({lbl_cuotainicial_c: lblCuotainicialC}, {$set: updateAoQuoteCstm}, {new: true});
    		}
    		return objAoQuoteCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteCstmBySaldoCuotaInicalC(saldoCuotaInicalC, updateAoQuoteCstm) {
    	try {
    		let objAoQuoteCstm;
    		if(sql) {
    			objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({where: { saldo_cuota_inical_c: saldoCuotaInicalC }});
    			if (objAoQuoteCstm) {
    				objAoQuoteCstm = await models.sequelize.aosQuotesCstm.update(updateAoQuoteCstm, { where: { saldo_cuota_inical_c: saldoCuotaInicalC } });
    			}
    		} else {
    			objAoQuoteCstm = await models.mongoose.aosQuotesCstm.findOneAndUpdate({saldo_cuota_inical_c: saldoCuotaInicalC}, {$set: updateAoQuoteCstm}, {new: true});
    		}
    		return objAoQuoteCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteCstmByPrecioMcuadradoC(precioMcuadradoC, updateAoQuoteCstm) {
    	try {
    		let objAoQuoteCstm;
    		if(sql) {
    			objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({where: { precio_mcuadrado_c: precioMcuadradoC }});
    			if (objAoQuoteCstm) {
    				objAoQuoteCstm = await models.sequelize.aosQuotesCstm.update(updateAoQuoteCstm, { where: { precio_mcuadrado_c: precioMcuadradoC } });
    			}
    		} else {
    			objAoQuoteCstm = await models.mongoose.aosQuotesCstm.findOneAndUpdate({precio_mcuadrado_c: precioMcuadradoC}, {$set: updateAoQuoteCstm}, {new: true});
    		}
    		return objAoQuoteCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteCstmBySaldoC(saldoC, updateAoQuoteCstm) {
    	try {
    		let objAoQuoteCstm;
    		if(sql) {
    			objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({where: { saldo_c: saldoC }});
    			if (objAoQuoteCstm) {
    				objAoQuoteCstm = await models.sequelize.aosQuotesCstm.update(updateAoQuoteCstm, { where: { saldo_c: saldoC } });
    			}
    		} else {
    			objAoQuoteCstm = await models.mongoose.aosQuotesCstm.findOneAndUpdate({saldo_c: saldoC}, {$set: updateAoQuoteCstm}, {new: true});
    		}
    		return objAoQuoteCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteCstmByCuotaMensualC(cuotaMensualC, updateAoQuoteCstm) {
    	try {
    		let objAoQuoteCstm;
    		if(sql) {
    			objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({where: { cuota_mensual_c: cuotaMensualC }});
    			if (objAoQuoteCstm) {
    				objAoQuoteCstm = await models.sequelize.aosQuotesCstm.update(updateAoQuoteCstm, { where: { cuota_mensual_c: cuotaMensualC } });
    			}
    		} else {
    			objAoQuoteCstm = await models.mongoose.aosQuotesCstm.findOneAndUpdate({cuota_mensual_c: cuotaMensualC}, {$set: updateAoQuoteCstm}, {new: true});
    		}
    		return objAoQuoteCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteCstmByUbicacionC(ubicacionC, updateAoQuoteCstm) {
    	try {
    		let objAoQuoteCstm;
    		if(sql) {
    			objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({where: { ubicacion_c: ubicacionC }});
    			if (objAoQuoteCstm) {
    				objAoQuoteCstm = await models.sequelize.aosQuotesCstm.update(updateAoQuoteCstm, { where: { ubicacion_c: ubicacionC } });
    			}
    		} else {
    			objAoQuoteCstm = await models.mongoose.aosQuotesCstm.findOneAndUpdate({ubicacion_c: ubicacionC}, {$set: updateAoQuoteCstm}, {new: true});
    		}
    		return objAoQuoteCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteCstmByLblTipoventaC(lblTipoventaC, updateAoQuoteCstm) {
    	try {
    		let objAoQuoteCstm;
    		if(sql) {
    			objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({where: { lbl_tipoventa_c: lblTipoventaC }});
    			if (objAoQuoteCstm) {
    				objAoQuoteCstm = await models.sequelize.aosQuotesCstm.update(updateAoQuoteCstm, { where: { lbl_tipoventa_c: lblTipoventaC } });
    			}
    		} else {
    			objAoQuoteCstm = await models.mongoose.aosQuotesCstm.findOneAndUpdate({lbl_tipoventa_c: lblTipoventaC}, {$set: updateAoQuoteCstm}, {new: true});
    		}
    		return objAoQuoteCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteCstmByTermYearsC(termYearsC, updateAoQuoteCstm) {
    	try {
    		let objAoQuoteCstm;
    		if(sql) {
    			objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({where: { term_years_c: termYearsC }});
    			if (objAoQuoteCstm) {
    				objAoQuoteCstm = await models.sequelize.aosQuotesCstm.update(updateAoQuoteCstm, { where: { term_years_c: termYearsC } });
    			}
    		} else {
    			objAoQuoteCstm = await models.mongoose.aosQuotesCstm.findOneAndUpdate({term_years_c: termYearsC}, {$set: updateAoQuoteCstm}, {new: true});
    		}
    		return objAoQuoteCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteCstmByTipoPagoC(tipoPagoC, updateAoQuoteCstm) {
    	try {
    		let objAoQuoteCstm;
    		if(sql) {
    			objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({where: { tipo_pago_c: tipoPagoC }});
    			if (objAoQuoteCstm) {
    				objAoQuoteCstm = await models.sequelize.aosQuotesCstm.update(updateAoQuoteCstm, { where: { tipo_pago_c: tipoPagoC } });
    			}
    		} else {
    			objAoQuoteCstm = await models.mongoose.aosQuotesCstm.findOneAndUpdate({tipo_pago_c: tipoPagoC}, {$set: updateAoQuoteCstm}, {new: true});
    		}
    		return objAoQuoteCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteCstmByLinkTerrenoC(linkTerrenoC, updateAoQuoteCstm) {
    	try {
    		let objAoQuoteCstm;
    		if(sql) {
    			objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({where: { link_terreno_c: linkTerrenoC }});
    			if (objAoQuoteCstm) {
    				objAoQuoteCstm = await models.sequelize.aosQuotesCstm.update(updateAoQuoteCstm, { where: { link_terreno_c: linkTerrenoC } });
    			}
    		} else {
    			objAoQuoteCstm = await models.mongoose.aosQuotesCstm.findOneAndUpdate({link_terreno_c: linkTerrenoC}, {$set: updateAoQuoteCstm}, {new: true});
    		}
    		return objAoQuoteCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteCstmByMonedaC(monedaC, updateAoQuoteCstm) {
    	try {
    		let objAoQuoteCstm;
    		if(sql) {
    			objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({where: { moneda_c: monedaC }});
    			if (objAoQuoteCstm) {
    				objAoQuoteCstm = await models.sequelize.aosQuotesCstm.update(updateAoQuoteCstm, { where: { moneda_c: monedaC } });
    			}
    		} else {
    			objAoQuoteCstm = await models.mongoose.aosQuotesCstm.findOneAndUpdate({moneda_c: monedaC}, {$set: updateAoQuoteCstm}, {new: true});
    		}
    		return objAoQuoteCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteCstmByFechaEnvioProgramadaC(fechaEnvioProgramadaC, updateAoQuoteCstm) {
    	try {
    		let objAoQuoteCstm;
    		if(sql) {
    			objAoQuoteCstm = await models.sequelize.aosQuotesCstm.findOne({where: { fecha_envio_programada_c: fechaEnvioProgramadaC }});
    			if (objAoQuoteCstm) {
    				objAoQuoteCstm = await models.sequelize.aosQuotesCstm.update(updateAoQuoteCstm, { where: { fecha_envio_programada_c: fechaEnvioProgramadaC } });
    			}
    		} else {
    			objAoQuoteCstm = await models.mongoose.aosQuotesCstm.findOneAndUpdate({fecha_envio_programada_c: fechaEnvioProgramadaC}, {$set: updateAoQuoteCstm}, {new: true});
    		}
    		return objAoQuoteCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AoQuoteCstmService;
//</es-section>
