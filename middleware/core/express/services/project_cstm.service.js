/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:32 GMT-0400 (Bolivia Time)
 * Time: 14:57:32
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:32 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:32
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

class ProjectCstmService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllProjectCstm(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.projectCstm.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['id_c','ASC']],
                });
			} else {
				return await models.mongoose.projectCstm.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllProjectCstm(select = []) {
		try {
			if(sql) {
				return await models.sequelize.projectCstm.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.projectCstm.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addProjectCstm(newProjectCstm) {
		try {
			let objProjectCstm;
			if(util.PrimaryKeyTypeIsString(models.sequelize.projectCstm.primaryKeys.id_c.type.toString())) {
			    newProjectCstm.id_c = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objProjectCstm = await models.sequelize.projectCstm.create(newProjectCstm);
			} else {
				objProjectCstm = new models.mongoose.projectCstm(newProjectCstm);
				await objProjectCstm.save();
			}
			return objProjectCstm;
		} catch (error) {
			throw error;
		}
	}

	static async updateProjectCstm(id_c, updateProjectCstm) {
		try {
			let objProjectCstm;
			if(sql) {
				objProjectCstm = await models.sequelize.projectCstm.findOne({where: { id_c: util.Char(id_c) }});
				if (objProjectCstm) {
					await models.sequelize.projectCstm.update(updateProjectCstm, { where: { id_c: util.Char(id_c) } });
					objProjectCstm = await models.sequelize.projectCstm.findOne({where: { id_c: util.Char(id_c) }});
				}
			} else {
				delete updateProjectCstm._id;
				objProjectCstm = await models.mongoose.projectCstm.findOneAndUpdate({id_c:id_c}, {$set: updateProjectCstm}, {new: true});
			}
			return objProjectCstm;
		} catch (error) {
			throw error;
		}
	}

	static async getAProjectCstm(id_c, query) {
		try {
			let objProjectCstm;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objProjectCstm = await models.sequelize.projectCstm.findOne({
					    where: where && !where.where ? where : { id_c: util.Char(id_c) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objProjectCstm = await models.mongoose.projectCstm.find({id_c:util.Char(id_c)}).select(query.select);
			}
			return objProjectCstm;
		} catch (error) {
			throw error;
		}
	}

	static async deleteProjectCstm(id_c) {
		try {
			let objProjectCstm;
			if(sql) {
				objProjectCstm = await models.sequelize.projectCstm.findOne({ where: { id_c: util.Char(id_c) } });
				if (objProjectCstm) {
					await models.sequelize.projectCstm.destroy({where: { id_c: util.Char(id_c) }});
				}
			} else {
				objProjectCstm = await models.mongoose.projectCstm.deleteOne({id_c:util.Char(id_c)});
			}
			return objProjectCstm;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneByIdC(idC, query = {}) {
    	try {
    		let objProjectCstm;
    		if(sql) {
    			objProjectCstm = await models.sequelize.projectCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id_c: idC },
    			});
    		} else {
    			objProjectCstm = await models.mongoose.projectCstm.findOne({id_c: idC});
    		}
    		return objProjectCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJjwgMapsLngC(jjwgMapsLngC, query = {}) {
    	try {
    		let objProjectCstm;
    		if(sql) {
    			objProjectCstm = await models.sequelize.projectCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { jjwg_maps_lng_c: jjwgMapsLngC },
    			});
    		} else {
    			objProjectCstm = await models.mongoose.projectCstm.findOne({jjwg_maps_lng_c: jjwgMapsLngC});
    		}
    		return objProjectCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJjwgMapsLatC(jjwgMapsLatC, query = {}) {
    	try {
    		let objProjectCstm;
    		if(sql) {
    			objProjectCstm = await models.sequelize.projectCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { jjwg_maps_lat_c: jjwgMapsLatC },
    			});
    		} else {
    			objProjectCstm = await models.mongoose.projectCstm.findOne({jjwg_maps_lat_c: jjwgMapsLatC});
    		}
    		return objProjectCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC, query = {}) {
    	try {
    		let objProjectCstm;
    		if(sql) {
    			objProjectCstm = await models.sequelize.projectCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { jjwg_maps_geocode_status_c: jjwgMapsGeocodeStatusC },
    			});
    		} else {
    			objProjectCstm = await models.mongoose.projectCstm.findOne({jjwg_maps_geocode_status_c: jjwgMapsGeocodeStatusC});
    		}
    		return objProjectCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJjwgMapsAddressC(jjwgMapsAddressC, query = {}) {
    	try {
    		let objProjectCstm;
    		if(sql) {
    			objProjectCstm = await models.sequelize.projectCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { jjwg_maps_address_c: jjwgMapsAddressC },
    			});
    		} else {
    			objProjectCstm = await models.mongoose.projectCstm.findOne({jjwg_maps_address_c: jjwgMapsAddressC});
    		}
    		return objProjectCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateProjectCstmByIdC(idC, updateProjectCstm) {
    	try {
    		let objProjectCstm;
    		if(sql) {
    			objProjectCstm = await models.sequelize.projectCstm.findOne({where: { id_c: idC }});
    			if (objProjectCstm) {
    				objProjectCstm = await models.sequelize.projectCstm.update(updateProjectCstm, { where: { id_c: idC } });
    			}
    		} else {
    			objProjectCstm = await models.mongoose.projectCstm.findOneAndUpdate({id_c: idC}, {$set: updateProjectCstm}, {new: true});
    		}
    		return objProjectCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectCstmByJjwgMapsLngC(jjwgMapsLngC, updateProjectCstm) {
    	try {
    		let objProjectCstm;
    		if(sql) {
    			objProjectCstm = await models.sequelize.projectCstm.findOne({where: { jjwg_maps_lng_c: jjwgMapsLngC }});
    			if (objProjectCstm) {
    				objProjectCstm = await models.sequelize.projectCstm.update(updateProjectCstm, { where: { jjwg_maps_lng_c: jjwgMapsLngC } });
    			}
    		} else {
    			objProjectCstm = await models.mongoose.projectCstm.findOneAndUpdate({jjwg_maps_lng_c: jjwgMapsLngC}, {$set: updateProjectCstm}, {new: true});
    		}
    		return objProjectCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectCstmByJjwgMapsLatC(jjwgMapsLatC, updateProjectCstm) {
    	try {
    		let objProjectCstm;
    		if(sql) {
    			objProjectCstm = await models.sequelize.projectCstm.findOne({where: { jjwg_maps_lat_c: jjwgMapsLatC }});
    			if (objProjectCstm) {
    				objProjectCstm = await models.sequelize.projectCstm.update(updateProjectCstm, { where: { jjwg_maps_lat_c: jjwgMapsLatC } });
    			}
    		} else {
    			objProjectCstm = await models.mongoose.projectCstm.findOneAndUpdate({jjwg_maps_lat_c: jjwgMapsLatC}, {$set: updateProjectCstm}, {new: true});
    		}
    		return objProjectCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectCstmByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC, updateProjectCstm) {
    	try {
    		let objProjectCstm;
    		if(sql) {
    			objProjectCstm = await models.sequelize.projectCstm.findOne({where: { jjwg_maps_geocode_status_c: jjwgMapsGeocodeStatusC }});
    			if (objProjectCstm) {
    				objProjectCstm = await models.sequelize.projectCstm.update(updateProjectCstm, { where: { jjwg_maps_geocode_status_c: jjwgMapsGeocodeStatusC } });
    			}
    		} else {
    			objProjectCstm = await models.mongoose.projectCstm.findOneAndUpdate({jjwg_maps_geocode_status_c: jjwgMapsGeocodeStatusC}, {$set: updateProjectCstm}, {new: true});
    		}
    		return objProjectCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectCstmByJjwgMapsAddressC(jjwgMapsAddressC, updateProjectCstm) {
    	try {
    		let objProjectCstm;
    		if(sql) {
    			objProjectCstm = await models.sequelize.projectCstm.findOne({where: { jjwg_maps_address_c: jjwgMapsAddressC }});
    			if (objProjectCstm) {
    				objProjectCstm = await models.sequelize.projectCstm.update(updateProjectCstm, { where: { jjwg_maps_address_c: jjwgMapsAddressC } });
    			}
    		} else {
    			objProjectCstm = await models.mongoose.projectCstm.findOneAndUpdate({jjwg_maps_address_c: jjwgMapsAddressC}, {$set: updateProjectCstm}, {new: true});
    		}
    		return objProjectCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = ProjectCstmService;
//</es-section>
