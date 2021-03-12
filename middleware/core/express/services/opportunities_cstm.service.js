/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:22 GMT-0400 (Bolivia Time)
 * Time: 14:57:22
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:22 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:22
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

class OpportunityCstmService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllOpportunitiesCstm(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.opportunitiesCstm.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.opportunitiesCstm.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllOpportunitiesCstm(select = []) {
		try {
			if(sql) {
				return await models.sequelize.opportunitiesCstm.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.opportunitiesCstm.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addOpportunityCstm(newOpportunityCstm) {
		try {
			let objOpportunityCstm;
			if(util.PrimaryKeyTypeIsString(models.sequelize.opportunitiesCstm.primaryKeys.id_c.type.toString())) {
			    newOpportunityCstm.id_c = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objOpportunityCstm = await models.sequelize.opportunitiesCstm.create(newOpportunityCstm);
			} else {
				objOpportunityCstm = new models.mongoose.opportunitiesCstm(newOpportunityCstm);
				await objOpportunityCstm.save();
			}
			return objOpportunityCstm;
		} catch (error) {
			throw error;
		}
	}

	static async updateOpportunityCstm(id_c, updateOpportunityCstm) {
		try {
			let objOpportunityCstm;
			if(sql) {
				objOpportunityCstm = await models.sequelize.opportunitiesCstm.findOne({where: { id_c: util.Char(id_c) }});
				if (objOpportunityCstm) {
					await models.sequelize.opportunitiesCstm.update(updateOpportunityCstm, { where: { id_c: util.Char(id_c) } });
					objOpportunityCstm = await models.sequelize.opportunitiesCstm.findOne({where: { id_c: util.Char(id_c) }});
				}
			} else {
				delete updateOpportunityCstm._id;
				objOpportunityCstm = await models.mongoose.opportunitiesCstm.findOneAndUpdate({id_c:id_c}, {$set: updateOpportunityCstm}, {new: true});
			}
			return objOpportunityCstm;
		} catch (error) {
			throw error;
		}
	}

	static async getAOpportunityCstm(id_c, query) {
		try {
			let objOpportunityCstm;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objOpportunityCstm = await models.sequelize.opportunitiesCstm.findOne({
					    where: where && !where.where ? where : { id_c: util.Char(id_c) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objOpportunityCstm = await models.mongoose.opportunitiesCstm.find({id_c:util.Char(id_c)}).select(query.select);
			}
			return objOpportunityCstm;
		} catch (error) {
			throw error;
		}
	}

	static async deleteOpportunityCstm(id_c) {
		try {
			let objOpportunityCstm;
			if(sql) {
				objOpportunityCstm = await models.sequelize.opportunitiesCstm.findOne({ where: { id_c: util.Char(id_c) } });
				if (objOpportunityCstm) {
					await models.sequelize.opportunitiesCstm.destroy({where: { id_c: util.Char(id_c) }});
				}
			} else {
				objOpportunityCstm = await models.mongoose.opportunitiesCstm.deleteOne({id_c:util.Char(id_c)});
			}
			return objOpportunityCstm;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneByIdC(idC, query = {}) {
    	try {
    		let objOpportunityCstm;
    		if(sql) {
    			objOpportunityCstm = await models.sequelize.opportunitiesCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id_c: idC },
    			});
    		} else {
    			objOpportunityCstm = await models.mongoose.opportunitiesCstm.findOne({id_c: idC});
    		}
    		return objOpportunityCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUnidadIndustrialC(unidadIndustrialC, query = {}) {
    	try {
    		let objOpportunityCstm;
    		if(sql) {
    			objOpportunityCstm = await models.sequelize.opportunitiesCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { unidad_industrial_c: unidadIndustrialC },
    			});
    		} else {
    			objOpportunityCstm = await models.mongoose.opportunitiesCstm.findOne({unidad_industrial_c: unidadIndustrialC});
    		}
    		return objOpportunityCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByManzanoC(manzanoC, query = {}) {
    	try {
    		let objOpportunityCstm;
    		if(sql) {
    			objOpportunityCstm = await models.sequelize.opportunitiesCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { manzano_c: manzanoC },
    			});
    		} else {
    			objOpportunityCstm = await models.mongoose.opportunitiesCstm.findOne({manzano_c: manzanoC});
    		}
    		return objOpportunityCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySuperficieC(superficieC, query = {}) {
    	try {
    		let objOpportunityCstm;
    		if(sql) {
    			objOpportunityCstm = await models.sequelize.opportunitiesCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { superficie_c: superficieC },
    			});
    		} else {
    			objOpportunityCstm = await models.mongoose.opportunitiesCstm.findOne({superficie_c: superficieC});
    		}
    		return objOpportunityCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJjwgMapsLngC(jjwgMapsLngC, query = {}) {
    	try {
    		let objOpportunityCstm;
    		if(sql) {
    			objOpportunityCstm = await models.sequelize.opportunitiesCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { jjwg_maps_lng_c: jjwgMapsLngC },
    			});
    		} else {
    			objOpportunityCstm = await models.mongoose.opportunitiesCstm.findOne({jjwg_maps_lng_c: jjwgMapsLngC});
    		}
    		return objOpportunityCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJjwgMapsLatC(jjwgMapsLatC, query = {}) {
    	try {
    		let objOpportunityCstm;
    		if(sql) {
    			objOpportunityCstm = await models.sequelize.opportunitiesCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { jjwg_maps_lat_c: jjwgMapsLatC },
    			});
    		} else {
    			objOpportunityCstm = await models.mongoose.opportunitiesCstm.findOne({jjwg_maps_lat_c: jjwgMapsLatC});
    		}
    		return objOpportunityCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC, query = {}) {
    	try {
    		let objOpportunityCstm;
    		if(sql) {
    			objOpportunityCstm = await models.sequelize.opportunitiesCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { jjwg_maps_geocode_status_c: jjwgMapsGeocodeStatusC },
    			});
    		} else {
    			objOpportunityCstm = await models.mongoose.opportunitiesCstm.findOne({jjwg_maps_geocode_status_c: jjwgMapsGeocodeStatusC});
    		}
    		return objOpportunityCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJjwgMapsAddressC(jjwgMapsAddressC, query = {}) {
    	try {
    		let objOpportunityCstm;
    		if(sql) {
    			objOpportunityCstm = await models.sequelize.opportunitiesCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { jjwg_maps_address_c: jjwgMapsAddressC },
    			});
    		} else {
    			objOpportunityCstm = await models.mongoose.opportunitiesCstm.findOne({jjwg_maps_address_c: jjwgMapsAddressC});
    		}
    		return objOpportunityCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLblTipoPagoC(lblTipoPagoC, query = {}) {
    	try {
    		let objOpportunityCstm;
    		if(sql) {
    			objOpportunityCstm = await models.sequelize.opportunitiesCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { lbl_tipo_pago_c: lblTipoPagoC },
    			});
    		} else {
    			objOpportunityCstm = await models.mongoose.opportunitiesCstm.findOne({lbl_tipo_pago_c: lblTipoPagoC});
    		}
    		return objOpportunityCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUbicacionC(ubicacionC, query = {}) {
    	try {
    		let objOpportunityCstm;
    		if(sql) {
    			objOpportunityCstm = await models.sequelize.opportunitiesCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { ubicacion_c: ubicacionC },
    			});
    		} else {
    			objOpportunityCstm = await models.mongoose.opportunitiesCstm.findOne({ubicacion_c: ubicacionC});
    		}
    		return objOpportunityCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTipoVentaC(tipoVentaC, query = {}) {
    	try {
    		let objOpportunityCstm;
    		if(sql) {
    			objOpportunityCstm = await models.sequelize.opportunitiesCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { tipo_venta_c: tipoVentaC },
    			});
    		} else {
    			objOpportunityCstm = await models.mongoose.opportunitiesCstm.findOne({tipo_venta_c: tipoVentaC});
    		}
    		return objOpportunityCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMonedaC(monedaC, query = {}) {
    	try {
    		let objOpportunityCstm;
    		if(sql) {
    			objOpportunityCstm = await models.sequelize.opportunitiesCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { moneda_c: monedaC },
    			});
    		} else {
    			objOpportunityCstm = await models.mongoose.opportunitiesCstm.findOne({moneda_c: monedaC});
    		}
    		return objOpportunityCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateOpportunityCstmByIdC(idC, updateOpportunityCstm) {
    	try {
    		let objOpportunityCstm;
    		if(sql) {
    			objOpportunityCstm = await models.sequelize.opportunitiesCstm.findOne({where: { id_c: idC }});
    			if (objOpportunityCstm) {
    				objOpportunityCstm = await models.sequelize.opportunitiesCstm.update(updateOpportunityCstm, { where: { id_c: idC } });
    			}
    		} else {
    			objOpportunityCstm = await models.mongoose.opportunitiesCstm.findOneAndUpdate({id_c: idC}, {$set: updateOpportunityCstm}, {new: true});
    		}
    		return objOpportunityCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityCstmByUnidadIndustrialC(unidadIndustrialC, updateOpportunityCstm) {
    	try {
    		let objOpportunityCstm;
    		if(sql) {
    			objOpportunityCstm = await models.sequelize.opportunitiesCstm.findOne({where: { unidad_industrial_c: unidadIndustrialC }});
    			if (objOpportunityCstm) {
    				objOpportunityCstm = await models.sequelize.opportunitiesCstm.update(updateOpportunityCstm, { where: { unidad_industrial_c: unidadIndustrialC } });
    			}
    		} else {
    			objOpportunityCstm = await models.mongoose.opportunitiesCstm.findOneAndUpdate({unidad_industrial_c: unidadIndustrialC}, {$set: updateOpportunityCstm}, {new: true});
    		}
    		return objOpportunityCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityCstmByManzanoC(manzanoC, updateOpportunityCstm) {
    	try {
    		let objOpportunityCstm;
    		if(sql) {
    			objOpportunityCstm = await models.sequelize.opportunitiesCstm.findOne({where: { manzano_c: manzanoC }});
    			if (objOpportunityCstm) {
    				objOpportunityCstm = await models.sequelize.opportunitiesCstm.update(updateOpportunityCstm, { where: { manzano_c: manzanoC } });
    			}
    		} else {
    			objOpportunityCstm = await models.mongoose.opportunitiesCstm.findOneAndUpdate({manzano_c: manzanoC}, {$set: updateOpportunityCstm}, {new: true});
    		}
    		return objOpportunityCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityCstmBySuperficieC(superficieC, updateOpportunityCstm) {
    	try {
    		let objOpportunityCstm;
    		if(sql) {
    			objOpportunityCstm = await models.sequelize.opportunitiesCstm.findOne({where: { superficie_c: superficieC }});
    			if (objOpportunityCstm) {
    				objOpportunityCstm = await models.sequelize.opportunitiesCstm.update(updateOpportunityCstm, { where: { superficie_c: superficieC } });
    			}
    		} else {
    			objOpportunityCstm = await models.mongoose.opportunitiesCstm.findOneAndUpdate({superficie_c: superficieC}, {$set: updateOpportunityCstm}, {new: true});
    		}
    		return objOpportunityCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityCstmByJjwgMapsLngC(jjwgMapsLngC, updateOpportunityCstm) {
    	try {
    		let objOpportunityCstm;
    		if(sql) {
    			objOpportunityCstm = await models.sequelize.opportunitiesCstm.findOne({where: { jjwg_maps_lng_c: jjwgMapsLngC }});
    			if (objOpportunityCstm) {
    				objOpportunityCstm = await models.sequelize.opportunitiesCstm.update(updateOpportunityCstm, { where: { jjwg_maps_lng_c: jjwgMapsLngC } });
    			}
    		} else {
    			objOpportunityCstm = await models.mongoose.opportunitiesCstm.findOneAndUpdate({jjwg_maps_lng_c: jjwgMapsLngC}, {$set: updateOpportunityCstm}, {new: true});
    		}
    		return objOpportunityCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityCstmByJjwgMapsLatC(jjwgMapsLatC, updateOpportunityCstm) {
    	try {
    		let objOpportunityCstm;
    		if(sql) {
    			objOpportunityCstm = await models.sequelize.opportunitiesCstm.findOne({where: { jjwg_maps_lat_c: jjwgMapsLatC }});
    			if (objOpportunityCstm) {
    				objOpportunityCstm = await models.sequelize.opportunitiesCstm.update(updateOpportunityCstm, { where: { jjwg_maps_lat_c: jjwgMapsLatC } });
    			}
    		} else {
    			objOpportunityCstm = await models.mongoose.opportunitiesCstm.findOneAndUpdate({jjwg_maps_lat_c: jjwgMapsLatC}, {$set: updateOpportunityCstm}, {new: true});
    		}
    		return objOpportunityCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityCstmByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC, updateOpportunityCstm) {
    	try {
    		let objOpportunityCstm;
    		if(sql) {
    			objOpportunityCstm = await models.sequelize.opportunitiesCstm.findOne({where: { jjwg_maps_geocode_status_c: jjwgMapsGeocodeStatusC }});
    			if (objOpportunityCstm) {
    				objOpportunityCstm = await models.sequelize.opportunitiesCstm.update(updateOpportunityCstm, { where: { jjwg_maps_geocode_status_c: jjwgMapsGeocodeStatusC } });
    			}
    		} else {
    			objOpportunityCstm = await models.mongoose.opportunitiesCstm.findOneAndUpdate({jjwg_maps_geocode_status_c: jjwgMapsGeocodeStatusC}, {$set: updateOpportunityCstm}, {new: true});
    		}
    		return objOpportunityCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityCstmByJjwgMapsAddressC(jjwgMapsAddressC, updateOpportunityCstm) {
    	try {
    		let objOpportunityCstm;
    		if(sql) {
    			objOpportunityCstm = await models.sequelize.opportunitiesCstm.findOne({where: { jjwg_maps_address_c: jjwgMapsAddressC }});
    			if (objOpportunityCstm) {
    				objOpportunityCstm = await models.sequelize.opportunitiesCstm.update(updateOpportunityCstm, { where: { jjwg_maps_address_c: jjwgMapsAddressC } });
    			}
    		} else {
    			objOpportunityCstm = await models.mongoose.opportunitiesCstm.findOneAndUpdate({jjwg_maps_address_c: jjwgMapsAddressC}, {$set: updateOpportunityCstm}, {new: true});
    		}
    		return objOpportunityCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityCstmByLblTipoPagoC(lblTipoPagoC, updateOpportunityCstm) {
    	try {
    		let objOpportunityCstm;
    		if(sql) {
    			objOpportunityCstm = await models.sequelize.opportunitiesCstm.findOne({where: { lbl_tipo_pago_c: lblTipoPagoC }});
    			if (objOpportunityCstm) {
    				objOpportunityCstm = await models.sequelize.opportunitiesCstm.update(updateOpportunityCstm, { where: { lbl_tipo_pago_c: lblTipoPagoC } });
    			}
    		} else {
    			objOpportunityCstm = await models.mongoose.opportunitiesCstm.findOneAndUpdate({lbl_tipo_pago_c: lblTipoPagoC}, {$set: updateOpportunityCstm}, {new: true});
    		}
    		return objOpportunityCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityCstmByUbicacionC(ubicacionC, updateOpportunityCstm) {
    	try {
    		let objOpportunityCstm;
    		if(sql) {
    			objOpportunityCstm = await models.sequelize.opportunitiesCstm.findOne({where: { ubicacion_c: ubicacionC }});
    			if (objOpportunityCstm) {
    				objOpportunityCstm = await models.sequelize.opportunitiesCstm.update(updateOpportunityCstm, { where: { ubicacion_c: ubicacionC } });
    			}
    		} else {
    			objOpportunityCstm = await models.mongoose.opportunitiesCstm.findOneAndUpdate({ubicacion_c: ubicacionC}, {$set: updateOpportunityCstm}, {new: true});
    		}
    		return objOpportunityCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityCstmByTipoVentaC(tipoVentaC, updateOpportunityCstm) {
    	try {
    		let objOpportunityCstm;
    		if(sql) {
    			objOpportunityCstm = await models.sequelize.opportunitiesCstm.findOne({where: { tipo_venta_c: tipoVentaC }});
    			if (objOpportunityCstm) {
    				objOpportunityCstm = await models.sequelize.opportunitiesCstm.update(updateOpportunityCstm, { where: { tipo_venta_c: tipoVentaC } });
    			}
    		} else {
    			objOpportunityCstm = await models.mongoose.opportunitiesCstm.findOneAndUpdate({tipo_venta_c: tipoVentaC}, {$set: updateOpportunityCstm}, {new: true});
    		}
    		return objOpportunityCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityCstmByMonedaC(monedaC, updateOpportunityCstm) {
    	try {
    		let objOpportunityCstm;
    		if(sql) {
    			objOpportunityCstm = await models.sequelize.opportunitiesCstm.findOne({where: { moneda_c: monedaC }});
    			if (objOpportunityCstm) {
    				objOpportunityCstm = await models.sequelize.opportunitiesCstm.update(updateOpportunityCstm, { where: { moneda_c: monedaC } });
    			}
    		} else {
    			objOpportunityCstm = await models.mongoose.opportunitiesCstm.findOneAndUpdate({moneda_c: monedaC}, {$set: updateOpportunityCstm}, {new: true});
    		}
    		return objOpportunityCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = OpportunityCstmService;
//</es-section>
