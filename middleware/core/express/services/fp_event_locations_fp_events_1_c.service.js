/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:14 GMT-0400 (Bolivia Time)
 * Time: 4:43:14
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:14 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:14
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

class FpEventLocationFpEvent1CService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllFpEventLocationsFpEvents1C(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.fpEventLocationsFpEvents1C.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.fpEventLocationsFpEvents1C.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllFpEventLocationsFpEvents1C(select = []) {
		try {
			if(sql) {
				return await models.sequelize.fpEventLocationsFpEvents1C.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.fpEventLocationsFpEvents1C.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addFpEventLocationFpEvent1C(newFpEventLocationFpEvent1C) {
		try {
			let objFpEventLocationFpEvent1C;
			if(util.PrimaryKeyTypeIsString(models.sequelize.fpEventLocationsFpEvents1C.primaryKeys.id.type.toString())) {
			    newFpEventLocationFpEvent1C.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objFpEventLocationFpEvent1C = await models.sequelize.fpEventLocationsFpEvents1C.create(newFpEventLocationFpEvent1C);
			} else {
				objFpEventLocationFpEvent1C = new models.mongoose.fpEventLocationsFpEvents1C(newFpEventLocationFpEvent1C);
				await objFpEventLocationFpEvent1C.save();
			}
			return objFpEventLocationFpEvent1C;
		} catch (error) {
			throw error;
		}
	}

	static async updateFpEventLocationFpEvent1C(id, updateFpEventLocationFpEvent1C) {
		try {
			let objFpEventLocationFpEvent1C;
			if(sql) {
				objFpEventLocationFpEvent1C = await models.sequelize.fpEventLocationsFpEvents1C.findOne({where: { id: util.String(id) }});
				if (objFpEventLocationFpEvent1C) {
					await models.sequelize.fpEventLocationsFpEvents1C.update(updateFpEventLocationFpEvent1C, { where: { id: util.String(id) } });
					objFpEventLocationFpEvent1C = await models.sequelize.fpEventLocationsFpEvents1C.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateFpEventLocationFpEvent1C._id;
				objFpEventLocationFpEvent1C = await models.mongoose.fpEventLocationsFpEvents1C.findOneAndUpdate({id:id}, {$set: updateFpEventLocationFpEvent1C}, {new: true});
			}
			return objFpEventLocationFpEvent1C;
		} catch (error) {
			throw error;
		}
	}

	static async getAFpEventLocationFpEvent1C(id, query) {
		try {
			let objFpEventLocationFpEvent1C;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objFpEventLocationFpEvent1C = await models.sequelize.fpEventLocationsFpEvents1C.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objFpEventLocationFpEvent1C = await models.mongoose.fpEventLocationsFpEvents1C.find({id:util.String(id)}).select(query.select);
			}
			return objFpEventLocationFpEvent1C;
		} catch (error) {
			throw error;
		}
	}

	static async deleteFpEventLocationFpEvent1C(id) {
		try {
			let objFpEventLocationFpEvent1C;
			if(sql) {
				objFpEventLocationFpEvent1C = await models.sequelize.fpEventLocationsFpEvents1C.findOne({ where: { id: util.String(id) } });
				if (objFpEventLocationFpEvent1C) {
					await models.sequelize.fpEventLocationsFpEvents1C.destroy({where: { id: util.String(id) }});
				}
			} else {
				objFpEventLocationFpEvent1C = await models.mongoose.fpEventLocationsFpEvents1C.deleteOne({id:util.String(id)});
			}
			return objFpEventLocationFpEvent1C;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objFpEventLocationFpEvent1C;
    		if(sql) {
    			objFpEventLocationFpEvent1C = await models.sequelize.fpEventLocationsFpEvents1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objFpEventLocationFpEvent1C = await models.mongoose.fpEventLocationsFpEvents1C.findOne({id: id});
    		}
    		return objFpEventLocationFpEvent1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objFpEventLocationFpEvent1C;
    		if(sql) {
    			objFpEventLocationFpEvent1C = await models.sequelize.fpEventLocationsFpEvents1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objFpEventLocationFpEvent1C = await models.mongoose.fpEventLocationsFpEvents1C.findOne({deleted: deleted});
    		}
    		return objFpEventLocationFpEvent1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFpEventLocationsFpEvents1fpEventLocationsIda(fpEventLocationsFpEvents1fpEventLocationsIda, query = {}) {
    	try {
    		let objFpEventLocationFpEvent1C;
    		if(sql) {
    			objFpEventLocationFpEvent1C = await models.sequelize.fpEventLocationsFpEvents1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { fp_event_locations_fp_events_1fp_event_locations_ida: fpEventLocationsFpEvents1fpEventLocationsIda },
    			});
    		} else {
    			objFpEventLocationFpEvent1C = await models.mongoose.fpEventLocationsFpEvents1C.findOne({fp_event_locations_fp_events_1fp_event_locations_ida: fpEventLocationsFpEvents1fpEventLocationsIda});
    		}
    		return objFpEventLocationFpEvent1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFpEventLocationsFpEvents1fpEventsIdb(fpEventLocationsFpEvents1fpEventsIdb, query = {}) {
    	try {
    		let objFpEventLocationFpEvent1C;
    		if(sql) {
    			objFpEventLocationFpEvent1C = await models.sequelize.fpEventLocationsFpEvents1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { fp_event_locations_fp_events_1fp_events_idb: fpEventLocationsFpEvents1fpEventsIdb },
    			});
    		} else {
    			objFpEventLocationFpEvent1C = await models.mongoose.fpEventLocationsFpEvents1C.findOne({fp_event_locations_fp_events_1fp_events_idb: fpEventLocationsFpEvents1fpEventsIdb});
    		}
    		return objFpEventLocationFpEvent1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objFpEventLocationFpEvent1C;
    		if(sql) {
    			objFpEventLocationFpEvent1C = await models.sequelize.fpEventLocationsFpEvents1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objFpEventLocationFpEvent1C = await models.mongoose.fpEventLocationsFpEvents1C.findOne({date_modified: dateModified});
    		}
    		return objFpEventLocationFpEvent1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateFpEventLocationFpEvent1CById(id, updateFpEventLocationFpEvent1C) {
    	try {
    		let objFpEventLocationFpEvent1C;
    		if(sql) {
    			objFpEventLocationFpEvent1C = await models.sequelize.fpEventLocationsFpEvents1C.findOne({where: { id: id }});
    			if (objFpEventLocationFpEvent1C) {
    				objFpEventLocationFpEvent1C = await models.sequelize.fpEventLocationsFpEvents1C.update(updateFpEventLocationFpEvent1C, { where: { id: id } });
    			}
    		} else {
    			objFpEventLocationFpEvent1C = await models.mongoose.fpEventLocationsFpEvents1C.findOneAndUpdate({id: id}, {$set: updateFpEventLocationFpEvent1C}, {new: true});
    		}
    		return objFpEventLocationFpEvent1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventLocationFpEvent1CByDeleted(deleted, updateFpEventLocationFpEvent1C) {
    	try {
    		let objFpEventLocationFpEvent1C;
    		if(sql) {
    			objFpEventLocationFpEvent1C = await models.sequelize.fpEventLocationsFpEvents1C.findOne({where: { deleted: deleted }});
    			if (objFpEventLocationFpEvent1C) {
    				objFpEventLocationFpEvent1C = await models.sequelize.fpEventLocationsFpEvents1C.update(updateFpEventLocationFpEvent1C, { where: { deleted: deleted } });
    			}
    		} else {
    			objFpEventLocationFpEvent1C = await models.mongoose.fpEventLocationsFpEvents1C.findOneAndUpdate({deleted: deleted}, {$set: updateFpEventLocationFpEvent1C}, {new: true});
    		}
    		return objFpEventLocationFpEvent1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventLocationFpEvent1CByFpEventLocationsFpEvents1fpEventLocationsIda(fpEventLocationsFpEvents1fpEventLocationsIda, updateFpEventLocationFpEvent1C) {
    	try {
    		let objFpEventLocationFpEvent1C;
    		if(sql) {
    			objFpEventLocationFpEvent1C = await models.sequelize.fpEventLocationsFpEvents1C.findOne({where: { fp_event_locations_fp_events_1fp_event_locations_ida: fpEventLocationsFpEvents1fpEventLocationsIda }});
    			if (objFpEventLocationFpEvent1C) {
    				objFpEventLocationFpEvent1C = await models.sequelize.fpEventLocationsFpEvents1C.update(updateFpEventLocationFpEvent1C, { where: { fp_event_locations_fp_events_1fp_event_locations_ida: fpEventLocationsFpEvents1fpEventLocationsIda } });
    			}
    		} else {
    			objFpEventLocationFpEvent1C = await models.mongoose.fpEventLocationsFpEvents1C.findOneAndUpdate({fp_event_locations_fp_events_1fp_event_locations_ida: fpEventLocationsFpEvents1fpEventLocationsIda}, {$set: updateFpEventLocationFpEvent1C}, {new: true});
    		}
    		return objFpEventLocationFpEvent1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventLocationFpEvent1CByFpEventLocationsFpEvents1fpEventsIdb(fpEventLocationsFpEvents1fpEventsIdb, updateFpEventLocationFpEvent1C) {
    	try {
    		let objFpEventLocationFpEvent1C;
    		if(sql) {
    			objFpEventLocationFpEvent1C = await models.sequelize.fpEventLocationsFpEvents1C.findOne({where: { fp_event_locations_fp_events_1fp_events_idb: fpEventLocationsFpEvents1fpEventsIdb }});
    			if (objFpEventLocationFpEvent1C) {
    				objFpEventLocationFpEvent1C = await models.sequelize.fpEventLocationsFpEvents1C.update(updateFpEventLocationFpEvent1C, { where: { fp_event_locations_fp_events_1fp_events_idb: fpEventLocationsFpEvents1fpEventsIdb } });
    			}
    		} else {
    			objFpEventLocationFpEvent1C = await models.mongoose.fpEventLocationsFpEvents1C.findOneAndUpdate({fp_event_locations_fp_events_1fp_events_idb: fpEventLocationsFpEvents1fpEventsIdb}, {$set: updateFpEventLocationFpEvent1C}, {new: true});
    		}
    		return objFpEventLocationFpEvent1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventLocationFpEvent1CByDateModified(dateModified, updateFpEventLocationFpEvent1C) {
    	try {
    		let objFpEventLocationFpEvent1C;
    		if(sql) {
    			objFpEventLocationFpEvent1C = await models.sequelize.fpEventLocationsFpEvents1C.findOne({where: { date_modified: dateModified }});
    			if (objFpEventLocationFpEvent1C) {
    				objFpEventLocationFpEvent1C = await models.sequelize.fpEventLocationsFpEvents1C.update(updateFpEventLocationFpEvent1C, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objFpEventLocationFpEvent1C = await models.mongoose.fpEventLocationsFpEvents1C.findOneAndUpdate({date_modified: dateModified}, {$set: updateFpEventLocationFpEvent1C}, {new: true});
    		}
    		return objFpEventLocationFpEvent1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = FpEventLocationFpEvent1CService;
//</es-section>
