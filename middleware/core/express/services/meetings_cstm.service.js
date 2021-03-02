/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:09 GMT-0400 (Bolivia Time)
 * Time: 14:1:9
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:09 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:9
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

class MeetingCstmService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllMeetingsCstm(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.meetingsCstm.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id_c','ASC']],
                });
			} else {
				return await models.mongoose.meetingsCstm.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllMeetingsCstm(select = []) {
		try {
			if(sql) {
				return await models.sequelize.meetingsCstm.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.meetingsCstm.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addMeetingCstm(newMeetingCstm) {
		try {
			let objMeetingCstm;
			if(util.PrimaryKeyTypeIsString(models.sequelize.meetingsCstm.primaryKeys.id_c.type.toString())) {
			    newMeetingCstm.id_c = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objMeetingCstm = await models.sequelize.meetingsCstm.create(newMeetingCstm);
			} else {
				objMeetingCstm = new models.mongoose.meetingsCstm(newMeetingCstm);
				await objMeetingCstm.save();
			}
			return objMeetingCstm;
		} catch (error) {
			throw error;
		}
	}

	static async updateMeetingCstm(id_c, updateMeetingCstm) {
		try {
			let objMeetingCstm;
			if(sql) {
				objMeetingCstm = await models.sequelize.meetingsCstm.findOne({where: { id_c: util.Char(id_c) }});
				if (objMeetingCstm) {
					await models.sequelize.meetingsCstm.update(updateMeetingCstm, { where: { id_c: util.Char(id_c) } });
					objMeetingCstm = await models.sequelize.meetingsCstm.findOne({where: { id_c: util.Char(id_c) }});
				}
			} else {
				delete updateMeetingCstm._id;
				objMeetingCstm = await models.mongoose.meetingsCstm.findOneAndUpdate({id_c:id_c}, {$set: updateMeetingCstm}, {new: true});
			}
			return objMeetingCstm;
		} catch (error) {
			throw error;
		}
	}

	static async getAMeetingCstm(id_c, query) {
		try {
			let objMeetingCstm;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objMeetingCstm = await models.sequelize.meetingsCstm.findOne({
					    where: where && !where.where ? where : { id_c: util.Char(id_c) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objMeetingCstm = await models.mongoose.meetingsCstm.find({id_c:util.Char(id_c)}).select(query.select);
			}
			return objMeetingCstm;
		} catch (error) {
			throw error;
		}
	}

	static async deleteMeetingCstm(id_c) {
		try {
			let objMeetingCstm;
			if(sql) {
				objMeetingCstm = await models.sequelize.meetingsCstm.findOne({ where: { id_c: util.Char(id_c) } });
				if (objMeetingCstm) {
					await models.sequelize.meetingsCstm.destroy({where: { id_c: util.Char(id_c) }});
				}
			} else {
				objMeetingCstm = await models.mongoose.meetingsCstm.deleteOne({id_c:util.Char(id_c)});
			}
			return objMeetingCstm;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneByIdC(idC, query = {}) {
    	try {
    		let objMeetingCstm;
    		if(sql) {
    			objMeetingCstm = await models.sequelize.meetingsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id_c: idC },
    			});
    		} else {
    			objMeetingCstm = await models.mongoose.meetingsCstm.findOne({id_c: idC});
    		}
    		return objMeetingCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJjwgMapsLngC(jjwgMapsLngC, query = {}) {
    	try {
    		let objMeetingCstm;
    		if(sql) {
    			objMeetingCstm = await models.sequelize.meetingsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { jjwg_maps_lng_c: jjwgMapsLngC },
    			});
    		} else {
    			objMeetingCstm = await models.mongoose.meetingsCstm.findOne({jjwg_maps_lng_c: jjwgMapsLngC});
    		}
    		return objMeetingCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJjwgMapsLatC(jjwgMapsLatC, query = {}) {
    	try {
    		let objMeetingCstm;
    		if(sql) {
    			objMeetingCstm = await models.sequelize.meetingsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { jjwg_maps_lat_c: jjwgMapsLatC },
    			});
    		} else {
    			objMeetingCstm = await models.mongoose.meetingsCstm.findOne({jjwg_maps_lat_c: jjwgMapsLatC});
    		}
    		return objMeetingCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC, query = {}) {
    	try {
    		let objMeetingCstm;
    		if(sql) {
    			objMeetingCstm = await models.sequelize.meetingsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { jjwg_maps_geocode_status_c: jjwgMapsGeocodeStatusC },
    			});
    		} else {
    			objMeetingCstm = await models.mongoose.meetingsCstm.findOne({jjwg_maps_geocode_status_c: jjwgMapsGeocodeStatusC});
    		}
    		return objMeetingCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJjwgMapsAddressC(jjwgMapsAddressC, query = {}) {
    	try {
    		let objMeetingCstm;
    		if(sql) {
    			objMeetingCstm = await models.sequelize.meetingsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { jjwg_maps_address_c: jjwgMapsAddressC },
    			});
    		} else {
    			objMeetingCstm = await models.mongoose.meetingsCstm.findOne({jjwg_maps_address_c: jjwgMapsAddressC});
    		}
    		return objMeetingCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateMeetingCstmByIdC(idC, updateMeetingCstm) {
    	try {
    		let objMeetingCstm;
    		if(sql) {
    			objMeetingCstm = await models.sequelize.meetingsCstm.findOne({where: { id_c: idC }});
    			if (objMeetingCstm) {
    				objMeetingCstm = await models.sequelize.meetingsCstm.update(updateMeetingCstm, { where: { id_c: idC } });
    			}
    		} else {
    			objMeetingCstm = await models.mongoose.meetingsCstm.findOneAndUpdate({id_c: idC}, {$set: updateMeetingCstm}, {new: true});
    		}
    		return objMeetingCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingCstmByJjwgMapsLngC(jjwgMapsLngC, updateMeetingCstm) {
    	try {
    		let objMeetingCstm;
    		if(sql) {
    			objMeetingCstm = await models.sequelize.meetingsCstm.findOne({where: { jjwg_maps_lng_c: jjwgMapsLngC }});
    			if (objMeetingCstm) {
    				objMeetingCstm = await models.sequelize.meetingsCstm.update(updateMeetingCstm, { where: { jjwg_maps_lng_c: jjwgMapsLngC } });
    			}
    		} else {
    			objMeetingCstm = await models.mongoose.meetingsCstm.findOneAndUpdate({jjwg_maps_lng_c: jjwgMapsLngC}, {$set: updateMeetingCstm}, {new: true});
    		}
    		return objMeetingCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingCstmByJjwgMapsLatC(jjwgMapsLatC, updateMeetingCstm) {
    	try {
    		let objMeetingCstm;
    		if(sql) {
    			objMeetingCstm = await models.sequelize.meetingsCstm.findOne({where: { jjwg_maps_lat_c: jjwgMapsLatC }});
    			if (objMeetingCstm) {
    				objMeetingCstm = await models.sequelize.meetingsCstm.update(updateMeetingCstm, { where: { jjwg_maps_lat_c: jjwgMapsLatC } });
    			}
    		} else {
    			objMeetingCstm = await models.mongoose.meetingsCstm.findOneAndUpdate({jjwg_maps_lat_c: jjwgMapsLatC}, {$set: updateMeetingCstm}, {new: true});
    		}
    		return objMeetingCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingCstmByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC, updateMeetingCstm) {
    	try {
    		let objMeetingCstm;
    		if(sql) {
    			objMeetingCstm = await models.sequelize.meetingsCstm.findOne({where: { jjwg_maps_geocode_status_c: jjwgMapsGeocodeStatusC }});
    			if (objMeetingCstm) {
    				objMeetingCstm = await models.sequelize.meetingsCstm.update(updateMeetingCstm, { where: { jjwg_maps_geocode_status_c: jjwgMapsGeocodeStatusC } });
    			}
    		} else {
    			objMeetingCstm = await models.mongoose.meetingsCstm.findOneAndUpdate({jjwg_maps_geocode_status_c: jjwgMapsGeocodeStatusC}, {$set: updateMeetingCstm}, {new: true});
    		}
    		return objMeetingCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingCstmByJjwgMapsAddressC(jjwgMapsAddressC, updateMeetingCstm) {
    	try {
    		let objMeetingCstm;
    		if(sql) {
    			objMeetingCstm = await models.sequelize.meetingsCstm.findOne({where: { jjwg_maps_address_c: jjwgMapsAddressC }});
    			if (objMeetingCstm) {
    				objMeetingCstm = await models.sequelize.meetingsCstm.update(updateMeetingCstm, { where: { jjwg_maps_address_c: jjwgMapsAddressC } });
    			}
    		} else {
    			objMeetingCstm = await models.mongoose.meetingsCstm.findOneAndUpdate({jjwg_maps_address_c: jjwgMapsAddressC}, {$set: updateMeetingCstm}, {new: true});
    		}
    		return objMeetingCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = MeetingCstmService;
//</es-section>
