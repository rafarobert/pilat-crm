/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:38 GMT-0400 (Bolivia Time)
 * Time: 0:22:38
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:38 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:38
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

class CaseCstmService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllCasesCstm(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.casesCstm.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id_c','ASC']],
                });
			} else {
				return await models.mongoose.casesCstm.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllCasesCstm(select = []) {
		try {
			if(sql) {
				return await models.sequelize.casesCstm.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.casesCstm.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addCaseCstm(newCaseCstm) {
		try {
			let objCaseCstm;
			if(util.PrimaryKeyTypeIsString(models.sequelize.casesCstm.primaryKeys.id_c.type.toString())) {
			    newCaseCstm.id_c = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objCaseCstm = await models.sequelize.casesCstm.create(newCaseCstm);
			} else {
				objCaseCstm = new models.mongoose.casesCstm(newCaseCstm);
				await objCaseCstm.save();
			}
			return objCaseCstm;
		} catch (error) {
			throw error;
		}
	}

	static async updateCaseCstm(id_c, updateCaseCstm) {
		try {
			let objCaseCstm;
			if(sql) {
				objCaseCstm = await models.sequelize.casesCstm.findOne({where: { id_c: util.Char(id_c) }});
				if (objCaseCstm) {
					await models.sequelize.casesCstm.update(updateCaseCstm, { where: { id_c: util.Char(id_c) } });
					objCaseCstm = await models.sequelize.casesCstm.findOne({where: { id_c: util.Char(id_c) }});
				}
			} else {
				delete updateCaseCstm._id;
				objCaseCstm = await models.mongoose.casesCstm.findOneAndUpdate({id_c:id_c}, {$set: updateCaseCstm}, {new: true});
			}
			return objCaseCstm;
		} catch (error) {
			throw error;
		}
	}

	static async getACaseCstm(id_c, query) {
		try {
			let objCaseCstm;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objCaseCstm = await models.sequelize.casesCstm.findOne({
					    where: where && !where.where ? where : { id_c: util.Char(id_c) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objCaseCstm = await models.mongoose.casesCstm.find({id_c:util.Char(id_c)}).select(query.select);
			}
			return objCaseCstm;
		} catch (error) {
			throw error;
		}
	}

	static async deleteCaseCstm(id_c) {
		try {
			let objCaseCstm;
			if(sql) {
				objCaseCstm = await models.sequelize.casesCstm.findOne({ where: { id_c: util.Char(id_c) } });
				if (objCaseCstm) {
					await models.sequelize.casesCstm.destroy({where: { id_c: util.Char(id_c) }});
				}
			} else {
				objCaseCstm = await models.mongoose.casesCstm.deleteOne({id_c:util.Char(id_c)});
			}
			return objCaseCstm;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneByIdC(idC, query = {}) {
    	try {
    		let objCaseCstm;
    		if(sql) {
    			objCaseCstm = await models.sequelize.casesCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id_c: idC },
    			});
    		} else {
    			objCaseCstm = await models.mongoose.casesCstm.findOne({id_c: idC});
    		}
    		return objCaseCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJjwgMapsLngC(jjwgMapsLngC, query = {}) {
    	try {
    		let objCaseCstm;
    		if(sql) {
    			objCaseCstm = await models.sequelize.casesCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { jjwg_maps_lng_c: jjwgMapsLngC },
    			});
    		} else {
    			objCaseCstm = await models.mongoose.casesCstm.findOne({jjwg_maps_lng_c: jjwgMapsLngC});
    		}
    		return objCaseCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJjwgMapsLatC(jjwgMapsLatC, query = {}) {
    	try {
    		let objCaseCstm;
    		if(sql) {
    			objCaseCstm = await models.sequelize.casesCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { jjwg_maps_lat_c: jjwgMapsLatC },
    			});
    		} else {
    			objCaseCstm = await models.mongoose.casesCstm.findOne({jjwg_maps_lat_c: jjwgMapsLatC});
    		}
    		return objCaseCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC, query = {}) {
    	try {
    		let objCaseCstm;
    		if(sql) {
    			objCaseCstm = await models.sequelize.casesCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { jjwg_maps_geocode_status_c: jjwgMapsGeocodeStatusC },
    			});
    		} else {
    			objCaseCstm = await models.mongoose.casesCstm.findOne({jjwg_maps_geocode_status_c: jjwgMapsGeocodeStatusC});
    		}
    		return objCaseCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJjwgMapsAddressC(jjwgMapsAddressC, query = {}) {
    	try {
    		let objCaseCstm;
    		if(sql) {
    			objCaseCstm = await models.sequelize.casesCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { jjwg_maps_address_c: jjwgMapsAddressC },
    			});
    		} else {
    			objCaseCstm = await models.mongoose.casesCstm.findOne({jjwg_maps_address_c: jjwgMapsAddressC});
    		}
    		return objCaseCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateCaseCstmByIdC(idC, updateCaseCstm) {
    	try {
    		let objCaseCstm;
    		if(sql) {
    			objCaseCstm = await models.sequelize.casesCstm.findOne({where: { id_c: idC }});
    			if (objCaseCstm) {
    				objCaseCstm = await models.sequelize.casesCstm.update(updateCaseCstm, { where: { id_c: idC } });
    			}
    		} else {
    			objCaseCstm = await models.mongoose.casesCstm.findOneAndUpdate({id_c: idC}, {$set: updateCaseCstm}, {new: true});
    		}
    		return objCaseCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCaseCstmByJjwgMapsLngC(jjwgMapsLngC, updateCaseCstm) {
    	try {
    		let objCaseCstm;
    		if(sql) {
    			objCaseCstm = await models.sequelize.casesCstm.findOne({where: { jjwg_maps_lng_c: jjwgMapsLngC }});
    			if (objCaseCstm) {
    				objCaseCstm = await models.sequelize.casesCstm.update(updateCaseCstm, { where: { jjwg_maps_lng_c: jjwgMapsLngC } });
    			}
    		} else {
    			objCaseCstm = await models.mongoose.casesCstm.findOneAndUpdate({jjwg_maps_lng_c: jjwgMapsLngC}, {$set: updateCaseCstm}, {new: true});
    		}
    		return objCaseCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCaseCstmByJjwgMapsLatC(jjwgMapsLatC, updateCaseCstm) {
    	try {
    		let objCaseCstm;
    		if(sql) {
    			objCaseCstm = await models.sequelize.casesCstm.findOne({where: { jjwg_maps_lat_c: jjwgMapsLatC }});
    			if (objCaseCstm) {
    				objCaseCstm = await models.sequelize.casesCstm.update(updateCaseCstm, { where: { jjwg_maps_lat_c: jjwgMapsLatC } });
    			}
    		} else {
    			objCaseCstm = await models.mongoose.casesCstm.findOneAndUpdate({jjwg_maps_lat_c: jjwgMapsLatC}, {$set: updateCaseCstm}, {new: true});
    		}
    		return objCaseCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCaseCstmByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC, updateCaseCstm) {
    	try {
    		let objCaseCstm;
    		if(sql) {
    			objCaseCstm = await models.sequelize.casesCstm.findOne({where: { jjwg_maps_geocode_status_c: jjwgMapsGeocodeStatusC }});
    			if (objCaseCstm) {
    				objCaseCstm = await models.sequelize.casesCstm.update(updateCaseCstm, { where: { jjwg_maps_geocode_status_c: jjwgMapsGeocodeStatusC } });
    			}
    		} else {
    			objCaseCstm = await models.mongoose.casesCstm.findOneAndUpdate({jjwg_maps_geocode_status_c: jjwgMapsGeocodeStatusC}, {$set: updateCaseCstm}, {new: true});
    		}
    		return objCaseCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCaseCstmByJjwgMapsAddressC(jjwgMapsAddressC, updateCaseCstm) {
    	try {
    		let objCaseCstm;
    		if(sql) {
    			objCaseCstm = await models.sequelize.casesCstm.findOne({where: { jjwg_maps_address_c: jjwgMapsAddressC }});
    			if (objCaseCstm) {
    				objCaseCstm = await models.sequelize.casesCstm.update(updateCaseCstm, { where: { jjwg_maps_address_c: jjwgMapsAddressC } });
    			}
    		} else {
    			objCaseCstm = await models.mongoose.casesCstm.findOneAndUpdate({jjwg_maps_address_c: jjwgMapsAddressC}, {$set: updateCaseCstm}, {new: true});
    		}
    		return objCaseCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = CaseCstmService;
//</es-section>
