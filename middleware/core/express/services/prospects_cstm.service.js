/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:24 GMT-0400 (Bolivia Time)
 * Time: 14:1:24
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:24 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:24
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

class ProspectCstmService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllProspectsCstm(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.prospectsCstm.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id_c','ASC']],
                });
			} else {
				return await models.mongoose.prospectsCstm.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllProspectsCstm(select = []) {
		try {
			if(sql) {
				return await models.sequelize.prospectsCstm.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.prospectsCstm.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addProspectCstm(newProspectCstm) {
		try {
			let objProspectCstm;
			if(util.PrimaryKeyTypeIsString(models.sequelize.prospectsCstm.primaryKeys.id_c.type.toString())) {
			    newProspectCstm.id_c = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objProspectCstm = await models.sequelize.prospectsCstm.create(newProspectCstm);
			} else {
				objProspectCstm = new models.mongoose.prospectsCstm(newProspectCstm);
				await objProspectCstm.save();
			}
			return objProspectCstm;
		} catch (error) {
			throw error;
		}
	}

	static async updateProspectCstm(id_c, updateProspectCstm) {
		try {
			let objProspectCstm;
			if(sql) {
				objProspectCstm = await models.sequelize.prospectsCstm.findOne({where: { id_c: util.Char(id_c) }});
				if (objProspectCstm) {
					await models.sequelize.prospectsCstm.update(updateProspectCstm, { where: { id_c: util.Char(id_c) } });
					objProspectCstm = await models.sequelize.prospectsCstm.findOne({where: { id_c: util.Char(id_c) }});
				}
			} else {
				delete updateProspectCstm._id;
				objProspectCstm = await models.mongoose.prospectsCstm.findOneAndUpdate({id_c:id_c}, {$set: updateProspectCstm}, {new: true});
			}
			return objProspectCstm;
		} catch (error) {
			throw error;
		}
	}

	static async getAProspectCstm(id_c, query) {
		try {
			let objProspectCstm;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objProspectCstm = await models.sequelize.prospectsCstm.findOne({
					    where: where && !where.where ? where : { id_c: util.Char(id_c) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objProspectCstm = await models.mongoose.prospectsCstm.find({id_c:util.Char(id_c)}).select(query.select);
			}
			return objProspectCstm;
		} catch (error) {
			throw error;
		}
	}

	static async deleteProspectCstm(id_c) {
		try {
			let objProspectCstm;
			if(sql) {
				objProspectCstm = await models.sequelize.prospectsCstm.findOne({ where: { id_c: util.Char(id_c) } });
				if (objProspectCstm) {
					await models.sequelize.prospectsCstm.destroy({where: { id_c: util.Char(id_c) }});
				}
			} else {
				objProspectCstm = await models.mongoose.prospectsCstm.deleteOne({id_c:util.Char(id_c)});
			}
			return objProspectCstm;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneByIdC(idC, query = {}) {
    	try {
    		let objProspectCstm;
    		if(sql) {
    			objProspectCstm = await models.sequelize.prospectsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id_c: idC },
    			});
    		} else {
    			objProspectCstm = await models.mongoose.prospectsCstm.findOne({id_c: idC});
    		}
    		return objProspectCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJjwgMapsLngC(jjwgMapsLngC, query = {}) {
    	try {
    		let objProspectCstm;
    		if(sql) {
    			objProspectCstm = await models.sequelize.prospectsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { jjwg_maps_lng_c: jjwgMapsLngC },
    			});
    		} else {
    			objProspectCstm = await models.mongoose.prospectsCstm.findOne({jjwg_maps_lng_c: jjwgMapsLngC});
    		}
    		return objProspectCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJjwgMapsLatC(jjwgMapsLatC, query = {}) {
    	try {
    		let objProspectCstm;
    		if(sql) {
    			objProspectCstm = await models.sequelize.prospectsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { jjwg_maps_lat_c: jjwgMapsLatC },
    			});
    		} else {
    			objProspectCstm = await models.mongoose.prospectsCstm.findOne({jjwg_maps_lat_c: jjwgMapsLatC});
    		}
    		return objProspectCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC, query = {}) {
    	try {
    		let objProspectCstm;
    		if(sql) {
    			objProspectCstm = await models.sequelize.prospectsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { jjwg_maps_geocode_status_c: jjwgMapsGeocodeStatusC },
    			});
    		} else {
    			objProspectCstm = await models.mongoose.prospectsCstm.findOne({jjwg_maps_geocode_status_c: jjwgMapsGeocodeStatusC});
    		}
    		return objProspectCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJjwgMapsAddressC(jjwgMapsAddressC, query = {}) {
    	try {
    		let objProspectCstm;
    		if(sql) {
    			objProspectCstm = await models.sequelize.prospectsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { jjwg_maps_address_c: jjwgMapsAddressC },
    			});
    		} else {
    			objProspectCstm = await models.mongoose.prospectsCstm.findOne({jjwg_maps_address_c: jjwgMapsAddressC});
    		}
    		return objProspectCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateProspectCstmByIdC(idC, updateProspectCstm) {
    	try {
    		let objProspectCstm;
    		if(sql) {
    			objProspectCstm = await models.sequelize.prospectsCstm.findOne({where: { id_c: idC }});
    			if (objProspectCstm) {
    				objProspectCstm = await models.sequelize.prospectsCstm.update(updateProspectCstm, { where: { id_c: idC } });
    			}
    		} else {
    			objProspectCstm = await models.mongoose.prospectsCstm.findOneAndUpdate({id_c: idC}, {$set: updateProspectCstm}, {new: true});
    		}
    		return objProspectCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectCstmByJjwgMapsLngC(jjwgMapsLngC, updateProspectCstm) {
    	try {
    		let objProspectCstm;
    		if(sql) {
    			objProspectCstm = await models.sequelize.prospectsCstm.findOne({where: { jjwg_maps_lng_c: jjwgMapsLngC }});
    			if (objProspectCstm) {
    				objProspectCstm = await models.sequelize.prospectsCstm.update(updateProspectCstm, { where: { jjwg_maps_lng_c: jjwgMapsLngC } });
    			}
    		} else {
    			objProspectCstm = await models.mongoose.prospectsCstm.findOneAndUpdate({jjwg_maps_lng_c: jjwgMapsLngC}, {$set: updateProspectCstm}, {new: true});
    		}
    		return objProspectCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectCstmByJjwgMapsLatC(jjwgMapsLatC, updateProspectCstm) {
    	try {
    		let objProspectCstm;
    		if(sql) {
    			objProspectCstm = await models.sequelize.prospectsCstm.findOne({where: { jjwg_maps_lat_c: jjwgMapsLatC }});
    			if (objProspectCstm) {
    				objProspectCstm = await models.sequelize.prospectsCstm.update(updateProspectCstm, { where: { jjwg_maps_lat_c: jjwgMapsLatC } });
    			}
    		} else {
    			objProspectCstm = await models.mongoose.prospectsCstm.findOneAndUpdate({jjwg_maps_lat_c: jjwgMapsLatC}, {$set: updateProspectCstm}, {new: true});
    		}
    		return objProspectCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectCstmByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC, updateProspectCstm) {
    	try {
    		let objProspectCstm;
    		if(sql) {
    			objProspectCstm = await models.sequelize.prospectsCstm.findOne({where: { jjwg_maps_geocode_status_c: jjwgMapsGeocodeStatusC }});
    			if (objProspectCstm) {
    				objProspectCstm = await models.sequelize.prospectsCstm.update(updateProspectCstm, { where: { jjwg_maps_geocode_status_c: jjwgMapsGeocodeStatusC } });
    			}
    		} else {
    			objProspectCstm = await models.mongoose.prospectsCstm.findOneAndUpdate({jjwg_maps_geocode_status_c: jjwgMapsGeocodeStatusC}, {$set: updateProspectCstm}, {new: true});
    		}
    		return objProspectCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectCstmByJjwgMapsAddressC(jjwgMapsAddressC, updateProspectCstm) {
    	try {
    		let objProspectCstm;
    		if(sql) {
    			objProspectCstm = await models.sequelize.prospectsCstm.findOne({where: { jjwg_maps_address_c: jjwgMapsAddressC }});
    			if (objProspectCstm) {
    				objProspectCstm = await models.sequelize.prospectsCstm.update(updateProspectCstm, { where: { jjwg_maps_address_c: jjwgMapsAddressC } });
    			}
    		} else {
    			objProspectCstm = await models.mongoose.prospectsCstm.findOneAndUpdate({jjwg_maps_address_c: jjwgMapsAddressC}, {$set: updateProspectCstm}, {new: true});
    		}
    		return objProspectCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = ProspectCstmService;
//</es-section>
