/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:53 GMT-0400 (Bolivia Time)
 * Time: 14:0:53
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:53 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:53
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

class FpEventFpEventLocation1CService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllFpEventsFpEventLocations1C(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.fpEventsFpEventLocations1C.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.fpEventsFpEventLocations1C.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllFpEventsFpEventLocations1C(select = []) {
		try {
			if(sql) {
				return await models.sequelize.fpEventsFpEventLocations1C.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.fpEventsFpEventLocations1C.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addFpEventFpEventLocation1C(newFpEventFpEventLocation1C) {
		try {
			let objFpEventFpEventLocation1C;
			if(util.PrimaryKeyTypeIsString(models.sequelize.fpEventsFpEventLocations1C.primaryKeys.id.type.toString())) {
			    newFpEventFpEventLocation1C.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objFpEventFpEventLocation1C = await models.sequelize.fpEventsFpEventLocations1C.create(newFpEventFpEventLocation1C);
			} else {
				objFpEventFpEventLocation1C = new models.mongoose.fpEventsFpEventLocations1C(newFpEventFpEventLocation1C);
				await objFpEventFpEventLocation1C.save();
			}
			return objFpEventFpEventLocation1C;
		} catch (error) {
			throw error;
		}
	}

	static async updateFpEventFpEventLocation1C(id, updateFpEventFpEventLocation1C) {
		try {
			let objFpEventFpEventLocation1C;
			if(sql) {
				objFpEventFpEventLocation1C = await models.sequelize.fpEventsFpEventLocations1C.findOne({where: { id: util.String(id) }});
				if (objFpEventFpEventLocation1C) {
					await models.sequelize.fpEventsFpEventLocations1C.update(updateFpEventFpEventLocation1C, { where: { id: util.String(id) } });
					objFpEventFpEventLocation1C = await models.sequelize.fpEventsFpEventLocations1C.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateFpEventFpEventLocation1C._id;
				objFpEventFpEventLocation1C = await models.mongoose.fpEventsFpEventLocations1C.findOneAndUpdate({id:id}, {$set: updateFpEventFpEventLocation1C}, {new: true});
			}
			return objFpEventFpEventLocation1C;
		} catch (error) {
			throw error;
		}
	}

	static async getAFpEventFpEventLocation1C(id, query) {
		try {
			let objFpEventFpEventLocation1C;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objFpEventFpEventLocation1C = await models.sequelize.fpEventsFpEventLocations1C.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objFpEventFpEventLocation1C = await models.mongoose.fpEventsFpEventLocations1C.find({id:util.String(id)}).select(query.select);
			}
			return objFpEventFpEventLocation1C;
		} catch (error) {
			throw error;
		}
	}

	static async deleteFpEventFpEventLocation1C(id) {
		try {
			let objFpEventFpEventLocation1C;
			if(sql) {
				objFpEventFpEventLocation1C = await models.sequelize.fpEventsFpEventLocations1C.findOne({ where: { id: util.String(id) } });
				if (objFpEventFpEventLocation1C) {
					await models.sequelize.fpEventsFpEventLocations1C.destroy({where: { id: util.String(id) }});
				}
			} else {
				objFpEventFpEventLocation1C = await models.mongoose.fpEventsFpEventLocations1C.deleteOne({id:util.String(id)});
			}
			return objFpEventFpEventLocation1C;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objFpEventFpEventLocation1C;
    		if(sql) {
    			objFpEventFpEventLocation1C = await models.sequelize.fpEventsFpEventLocations1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objFpEventFpEventLocation1C = await models.mongoose.fpEventsFpEventLocations1C.findOne({id: id});
    		}
    		return objFpEventFpEventLocation1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objFpEventFpEventLocation1C;
    		if(sql) {
    			objFpEventFpEventLocation1C = await models.sequelize.fpEventsFpEventLocations1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objFpEventFpEventLocation1C = await models.mongoose.fpEventsFpEventLocations1C.findOne({deleted: deleted});
    		}
    		return objFpEventFpEventLocation1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFpEventsFpEventLocations1fpEventsIda(fpEventsFpEventLocations1fpEventsIda, query = {}) {
    	try {
    		let objFpEventFpEventLocation1C;
    		if(sql) {
    			objFpEventFpEventLocation1C = await models.sequelize.fpEventsFpEventLocations1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { fp_events_fp_event_locations_1fp_events_ida: fpEventsFpEventLocations1fpEventsIda },
    			});
    		} else {
    			objFpEventFpEventLocation1C = await models.mongoose.fpEventsFpEventLocations1C.findOne({fp_events_fp_event_locations_1fp_events_ida: fpEventsFpEventLocations1fpEventsIda});
    		}
    		return objFpEventFpEventLocation1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFpEventsFpEventLocations1fpEventLocationsIdb(fpEventsFpEventLocations1fpEventLocationsIdb, query = {}) {
    	try {
    		let objFpEventFpEventLocation1C;
    		if(sql) {
    			objFpEventFpEventLocation1C = await models.sequelize.fpEventsFpEventLocations1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { fp_events_fp_event_locations_1fp_event_locations_idb: fpEventsFpEventLocations1fpEventLocationsIdb },
    			});
    		} else {
    			objFpEventFpEventLocation1C = await models.mongoose.fpEventsFpEventLocations1C.findOne({fp_events_fp_event_locations_1fp_event_locations_idb: fpEventsFpEventLocations1fpEventLocationsIdb});
    		}
    		return objFpEventFpEventLocation1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objFpEventFpEventLocation1C;
    		if(sql) {
    			objFpEventFpEventLocation1C = await models.sequelize.fpEventsFpEventLocations1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objFpEventFpEventLocation1C = await models.mongoose.fpEventsFpEventLocations1C.findOne({date_modified: dateModified});
    		}
    		return objFpEventFpEventLocation1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateFpEventFpEventLocation1CById(id, updateFpEventFpEventLocation1C) {
    	try {
    		let objFpEventFpEventLocation1C;
    		if(sql) {
    			objFpEventFpEventLocation1C = await models.sequelize.fpEventsFpEventLocations1C.findOne({where: { id: id }});
    			if (objFpEventFpEventLocation1C) {
    				objFpEventFpEventLocation1C = await models.sequelize.fpEventsFpEventLocations1C.update(updateFpEventFpEventLocation1C, { where: { id: id } });
    			}
    		} else {
    			objFpEventFpEventLocation1C = await models.mongoose.fpEventsFpEventLocations1C.findOneAndUpdate({id: id}, {$set: updateFpEventFpEventLocation1C}, {new: true});
    		}
    		return objFpEventFpEventLocation1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventFpEventLocation1CByDeleted(deleted, updateFpEventFpEventLocation1C) {
    	try {
    		let objFpEventFpEventLocation1C;
    		if(sql) {
    			objFpEventFpEventLocation1C = await models.sequelize.fpEventsFpEventLocations1C.findOne({where: { deleted: deleted }});
    			if (objFpEventFpEventLocation1C) {
    				objFpEventFpEventLocation1C = await models.sequelize.fpEventsFpEventLocations1C.update(updateFpEventFpEventLocation1C, { where: { deleted: deleted } });
    			}
    		} else {
    			objFpEventFpEventLocation1C = await models.mongoose.fpEventsFpEventLocations1C.findOneAndUpdate({deleted: deleted}, {$set: updateFpEventFpEventLocation1C}, {new: true});
    		}
    		return objFpEventFpEventLocation1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventFpEventLocation1CByFpEventsFpEventLocations1fpEventsIda(fpEventsFpEventLocations1fpEventsIda, updateFpEventFpEventLocation1C) {
    	try {
    		let objFpEventFpEventLocation1C;
    		if(sql) {
    			objFpEventFpEventLocation1C = await models.sequelize.fpEventsFpEventLocations1C.findOne({where: { fp_events_fp_event_locations_1fp_events_ida: fpEventsFpEventLocations1fpEventsIda }});
    			if (objFpEventFpEventLocation1C) {
    				objFpEventFpEventLocation1C = await models.sequelize.fpEventsFpEventLocations1C.update(updateFpEventFpEventLocation1C, { where: { fp_events_fp_event_locations_1fp_events_ida: fpEventsFpEventLocations1fpEventsIda } });
    			}
    		} else {
    			objFpEventFpEventLocation1C = await models.mongoose.fpEventsFpEventLocations1C.findOneAndUpdate({fp_events_fp_event_locations_1fp_events_ida: fpEventsFpEventLocations1fpEventsIda}, {$set: updateFpEventFpEventLocation1C}, {new: true});
    		}
    		return objFpEventFpEventLocation1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventFpEventLocation1CByFpEventsFpEventLocations1fpEventLocationsIdb(fpEventsFpEventLocations1fpEventLocationsIdb, updateFpEventFpEventLocation1C) {
    	try {
    		let objFpEventFpEventLocation1C;
    		if(sql) {
    			objFpEventFpEventLocation1C = await models.sequelize.fpEventsFpEventLocations1C.findOne({where: { fp_events_fp_event_locations_1fp_event_locations_idb: fpEventsFpEventLocations1fpEventLocationsIdb }});
    			if (objFpEventFpEventLocation1C) {
    				objFpEventFpEventLocation1C = await models.sequelize.fpEventsFpEventLocations1C.update(updateFpEventFpEventLocation1C, { where: { fp_events_fp_event_locations_1fp_event_locations_idb: fpEventsFpEventLocations1fpEventLocationsIdb } });
    			}
    		} else {
    			objFpEventFpEventLocation1C = await models.mongoose.fpEventsFpEventLocations1C.findOneAndUpdate({fp_events_fp_event_locations_1fp_event_locations_idb: fpEventsFpEventLocations1fpEventLocationsIdb}, {$set: updateFpEventFpEventLocation1C}, {new: true});
    		}
    		return objFpEventFpEventLocation1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventFpEventLocation1CByDateModified(dateModified, updateFpEventFpEventLocation1C) {
    	try {
    		let objFpEventFpEventLocation1C;
    		if(sql) {
    			objFpEventFpEventLocation1C = await models.sequelize.fpEventsFpEventLocations1C.findOne({where: { date_modified: dateModified }});
    			if (objFpEventFpEventLocation1C) {
    				objFpEventFpEventLocation1C = await models.sequelize.fpEventsFpEventLocations1C.update(updateFpEventFpEventLocation1C, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objFpEventFpEventLocation1C = await models.mongoose.fpEventsFpEventLocations1C.findOneAndUpdate({date_modified: dateModified}, {$set: updateFpEventFpEventLocation1C}, {new: true});
    		}
    		return objFpEventFpEventLocation1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = FpEventFpEventLocation1CService;
//</es-section>
