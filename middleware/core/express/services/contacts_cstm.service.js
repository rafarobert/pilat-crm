/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:38 GMT-0400 (Bolivia Time)
 * Time: 14:56:38
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:38 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:38
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

class ContactCstmService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllContactsCstm(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.contactsCstm.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['_id','ASC']],
                });
			} else {
				return await models.mongoose.contactsCstm.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllContactsCstm(select = []) {
		try {
			if(sql) {
				return await models.sequelize.contactsCstm.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.contactsCstm.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addContactCstm(newContactCstm) {
		try {
			let objContactCstm;
			if(util.PrimaryKeyTypeIsString(models.sequelize.contactsCstm.primaryKeys.id_c.type.toString())) {
			    newContactCstm.id_c = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objContactCstm = await models.sequelize.contactsCstm.create(newContactCstm);
			} else {
				objContactCstm = new models.mongoose.contactsCstm(newContactCstm);
				await objContactCstm.save();
			}
			return objContactCstm;
		} catch (error) {
			throw error;
		}
	}

	static async updateContactCstm(id_c, updateContactCstm) {
		try {
			let objContactCstm;
			if(sql) {
				objContactCstm = await models.sequelize.contactsCstm.findOne({where: { id_c: util.Char(id_c) }});
				if (objContactCstm) {
					await models.sequelize.contactsCstm.update(updateContactCstm, { where: { id_c: util.Char(id_c) } });
					objContactCstm = await models.sequelize.contactsCstm.findOne({where: { id_c: util.Char(id_c) }});
				}
			} else {
				delete updateContactCstm._id;
				objContactCstm = await models.mongoose.contactsCstm.findOneAndUpdate({id_c:id_c}, {$set: updateContactCstm}, {new: true});
			}
			return objContactCstm;
		} catch (error) {
			throw error;
		}
	}

	static async getAContactCstm(id_c, query) {
		try {
			let objContactCstm;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objContactCstm = await models.sequelize.contactsCstm.findOne({
					    where: where && !where.where ? where : { id_c: util.Char(id_c) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objContactCstm = await models.mongoose.contactsCstm.find({id_c:util.Char(id_c)}).select(query.select);
			}
			return objContactCstm;
		} catch (error) {
			throw error;
		}
	}

	static async deleteContactCstm(id_c) {
		try {
			let objContactCstm;
			if(sql) {
				objContactCstm = await models.sequelize.contactsCstm.findOne({ where: { id_c: util.Char(id_c) } });
				if (objContactCstm) {
					await models.sequelize.contactsCstm.destroy({where: { id_c: util.Char(id_c) }});
				}
			} else {
				objContactCstm = await models.mongoose.contactsCstm.deleteOne({id_c:util.Char(id_c)});
			}
			return objContactCstm;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneByIdC(idC, query = {}) {
    	try {
    		let objContactCstm;
    		if(sql) {
    			objContactCstm = await models.sequelize.contactsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id_c: idC },
    			});
    		} else {
    			objContactCstm = await models.mongoose.contactsCstm.findOne({id_c: idC});
    		}
    		return objContactCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJjwgMapsLngC(jjwgMapsLngC, query = {}) {
    	try {
    		let objContactCstm;
    		if(sql) {
    			objContactCstm = await models.sequelize.contactsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { jjwg_maps_lng_c: jjwgMapsLngC },
    			});
    		} else {
    			objContactCstm = await models.mongoose.contactsCstm.findOne({jjwg_maps_lng_c: jjwgMapsLngC});
    		}
    		return objContactCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJjwgMapsLatC(jjwgMapsLatC, query = {}) {
    	try {
    		let objContactCstm;
    		if(sql) {
    			objContactCstm = await models.sequelize.contactsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { jjwg_maps_lat_c: jjwgMapsLatC },
    			});
    		} else {
    			objContactCstm = await models.mongoose.contactsCstm.findOne({jjwg_maps_lat_c: jjwgMapsLatC});
    		}
    		return objContactCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC, query = {}) {
    	try {
    		let objContactCstm;
    		if(sql) {
    			objContactCstm = await models.sequelize.contactsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { jjwg_maps_geocode_status_c: jjwgMapsGeocodeStatusC },
    			});
    		} else {
    			objContactCstm = await models.mongoose.contactsCstm.findOne({jjwg_maps_geocode_status_c: jjwgMapsGeocodeStatusC});
    		}
    		return objContactCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJjwgMapsAddressC(jjwgMapsAddressC, query = {}) {
    	try {
    		let objContactCstm;
    		if(sql) {
    			objContactCstm = await models.sequelize.contactsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { jjwg_maps_address_c: jjwgMapsAddressC },
    			});
    		} else {
    			objContactCstm = await models.mongoose.contactsCstm.findOne({jjwg_maps_address_c: jjwgMapsAddressC});
    		}
    		return objContactCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateContactCstmByIdC(idC, updateContactCstm) {
    	try {
    		let objContactCstm;
    		if(sql) {
    			objContactCstm = await models.sequelize.contactsCstm.findOne({where: { id_c: idC }});
    			if (objContactCstm) {
    				objContactCstm = await models.sequelize.contactsCstm.update(updateContactCstm, { where: { id_c: idC } });
    			}
    		} else {
    			objContactCstm = await models.mongoose.contactsCstm.findOneAndUpdate({id_c: idC}, {$set: updateContactCstm}, {new: true});
    		}
    		return objContactCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactCstmByJjwgMapsLngC(jjwgMapsLngC, updateContactCstm) {
    	try {
    		let objContactCstm;
    		if(sql) {
    			objContactCstm = await models.sequelize.contactsCstm.findOne({where: { jjwg_maps_lng_c: jjwgMapsLngC }});
    			if (objContactCstm) {
    				objContactCstm = await models.sequelize.contactsCstm.update(updateContactCstm, { where: { jjwg_maps_lng_c: jjwgMapsLngC } });
    			}
    		} else {
    			objContactCstm = await models.mongoose.contactsCstm.findOneAndUpdate({jjwg_maps_lng_c: jjwgMapsLngC}, {$set: updateContactCstm}, {new: true});
    		}
    		return objContactCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactCstmByJjwgMapsLatC(jjwgMapsLatC, updateContactCstm) {
    	try {
    		let objContactCstm;
    		if(sql) {
    			objContactCstm = await models.sequelize.contactsCstm.findOne({where: { jjwg_maps_lat_c: jjwgMapsLatC }});
    			if (objContactCstm) {
    				objContactCstm = await models.sequelize.contactsCstm.update(updateContactCstm, { where: { jjwg_maps_lat_c: jjwgMapsLatC } });
    			}
    		} else {
    			objContactCstm = await models.mongoose.contactsCstm.findOneAndUpdate({jjwg_maps_lat_c: jjwgMapsLatC}, {$set: updateContactCstm}, {new: true});
    		}
    		return objContactCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactCstmByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC, updateContactCstm) {
    	try {
    		let objContactCstm;
    		if(sql) {
    			objContactCstm = await models.sequelize.contactsCstm.findOne({where: { jjwg_maps_geocode_status_c: jjwgMapsGeocodeStatusC }});
    			if (objContactCstm) {
    				objContactCstm = await models.sequelize.contactsCstm.update(updateContactCstm, { where: { jjwg_maps_geocode_status_c: jjwgMapsGeocodeStatusC } });
    			}
    		} else {
    			objContactCstm = await models.mongoose.contactsCstm.findOneAndUpdate({jjwg_maps_geocode_status_c: jjwgMapsGeocodeStatusC}, {$set: updateContactCstm}, {new: true});
    		}
    		return objContactCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactCstmByJjwgMapsAddressC(jjwgMapsAddressC, updateContactCstm) {
    	try {
    		let objContactCstm;
    		if(sql) {
    			objContactCstm = await models.sequelize.contactsCstm.findOne({where: { jjwg_maps_address_c: jjwgMapsAddressC }});
    			if (objContactCstm) {
    				objContactCstm = await models.sequelize.contactsCstm.update(updateContactCstm, { where: { jjwg_maps_address_c: jjwgMapsAddressC } });
    			}
    		} else {
    			objContactCstm = await models.mongoose.contactsCstm.findOneAndUpdate({jjwg_maps_address_c: jjwgMapsAddressC}, {$set: updateContactCstm}, {new: true});
    		}
    		return objContactCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = ContactCstmService;
//</es-section>
