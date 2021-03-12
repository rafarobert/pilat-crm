/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:56 GMT-0400 (Bolivia Time)
 * Time: 14:56:56
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:56 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:56
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

class FpEventFpEventDelegate1CService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllFpEventsFpEventDelegates1C(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.fpEventsFpEventDelegates1C.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.fpEventsFpEventDelegates1C.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllFpEventsFpEventDelegates1C(select = []) {
		try {
			if(sql) {
				return await models.sequelize.fpEventsFpEventDelegates1C.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.fpEventsFpEventDelegates1C.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addFpEventFpEventDelegate1C(newFpEventFpEventDelegate1C) {
		try {
			let objFpEventFpEventDelegate1C;
			if(util.PrimaryKeyTypeIsString(models.sequelize.fpEventsFpEventDelegates1C.primaryKeys.id.type.toString())) {
			    newFpEventFpEventDelegate1C.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objFpEventFpEventDelegate1C = await models.sequelize.fpEventsFpEventDelegates1C.create(newFpEventFpEventDelegate1C);
			} else {
				objFpEventFpEventDelegate1C = new models.mongoose.fpEventsFpEventDelegates1C(newFpEventFpEventDelegate1C);
				await objFpEventFpEventDelegate1C.save();
			}
			return objFpEventFpEventDelegate1C;
		} catch (error) {
			throw error;
		}
	}

	static async updateFpEventFpEventDelegate1C(id, updateFpEventFpEventDelegate1C) {
		try {
			let objFpEventFpEventDelegate1C;
			if(sql) {
				objFpEventFpEventDelegate1C = await models.sequelize.fpEventsFpEventDelegates1C.findOne({where: { id: util.String(id) }});
				if (objFpEventFpEventDelegate1C) {
					await models.sequelize.fpEventsFpEventDelegates1C.update(updateFpEventFpEventDelegate1C, { where: { id: util.String(id) } });
					objFpEventFpEventDelegate1C = await models.sequelize.fpEventsFpEventDelegates1C.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateFpEventFpEventDelegate1C._id;
				objFpEventFpEventDelegate1C = await models.mongoose.fpEventsFpEventDelegates1C.findOneAndUpdate({id:id}, {$set: updateFpEventFpEventDelegate1C}, {new: true});
			}
			return objFpEventFpEventDelegate1C;
		} catch (error) {
			throw error;
		}
	}

	static async getAFpEventFpEventDelegate1C(id, query) {
		try {
			let objFpEventFpEventDelegate1C;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objFpEventFpEventDelegate1C = await models.sequelize.fpEventsFpEventDelegates1C.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objFpEventFpEventDelegate1C = await models.mongoose.fpEventsFpEventDelegates1C.find({id:util.String(id)}).select(query.select);
			}
			return objFpEventFpEventDelegate1C;
		} catch (error) {
			throw error;
		}
	}

	static async deleteFpEventFpEventDelegate1C(id) {
		try {
			let objFpEventFpEventDelegate1C;
			if(sql) {
				objFpEventFpEventDelegate1C = await models.sequelize.fpEventsFpEventDelegates1C.findOne({ where: { id: util.String(id) } });
				if (objFpEventFpEventDelegate1C) {
					await models.sequelize.fpEventsFpEventDelegates1C.destroy({where: { id: util.String(id) }});
				}
			} else {
				objFpEventFpEventDelegate1C = await models.mongoose.fpEventsFpEventDelegates1C.deleteOne({id:util.String(id)});
			}
			return objFpEventFpEventDelegate1C;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objFpEventFpEventDelegate1C;
    		if(sql) {
    			objFpEventFpEventDelegate1C = await models.sequelize.fpEventsFpEventDelegates1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objFpEventFpEventDelegate1C = await models.mongoose.fpEventsFpEventDelegates1C.findOne({id: id});
    		}
    		return objFpEventFpEventDelegate1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objFpEventFpEventDelegate1C;
    		if(sql) {
    			objFpEventFpEventDelegate1C = await models.sequelize.fpEventsFpEventDelegates1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objFpEventFpEventDelegate1C = await models.mongoose.fpEventsFpEventDelegates1C.findOne({deleted: deleted});
    		}
    		return objFpEventFpEventDelegate1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFpEventsFpEventDelegates1fpEventsIda(fpEventsFpEventDelegates1fpEventsIda, query = {}) {
    	try {
    		let objFpEventFpEventDelegate1C;
    		if(sql) {
    			objFpEventFpEventDelegate1C = await models.sequelize.fpEventsFpEventDelegates1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { fp_events_fp_event_delegates_1fp_events_ida: fpEventsFpEventDelegates1fpEventsIda },
    			});
    		} else {
    			objFpEventFpEventDelegate1C = await models.mongoose.fpEventsFpEventDelegates1C.findOne({fp_events_fp_event_delegates_1fp_events_ida: fpEventsFpEventDelegates1fpEventsIda});
    		}
    		return objFpEventFpEventDelegate1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFpEventsFpEventDelegates1fpEventDelegatesIdb(fpEventsFpEventDelegates1fpEventDelegatesIdb, query = {}) {
    	try {
    		let objFpEventFpEventDelegate1C;
    		if(sql) {
    			objFpEventFpEventDelegate1C = await models.sequelize.fpEventsFpEventDelegates1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { fp_events_fp_event_delegates_1fp_event_delegates_idb: fpEventsFpEventDelegates1fpEventDelegatesIdb },
    			});
    		} else {
    			objFpEventFpEventDelegate1C = await models.mongoose.fpEventsFpEventDelegates1C.findOne({fp_events_fp_event_delegates_1fp_event_delegates_idb: fpEventsFpEventDelegates1fpEventDelegatesIdb});
    		}
    		return objFpEventFpEventDelegate1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objFpEventFpEventDelegate1C;
    		if(sql) {
    			objFpEventFpEventDelegate1C = await models.sequelize.fpEventsFpEventDelegates1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objFpEventFpEventDelegate1C = await models.mongoose.fpEventsFpEventDelegates1C.findOne({date_modified: dateModified});
    		}
    		return objFpEventFpEventDelegate1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateFpEventFpEventDelegate1CById(id, updateFpEventFpEventDelegate1C) {
    	try {
    		let objFpEventFpEventDelegate1C;
    		if(sql) {
    			objFpEventFpEventDelegate1C = await models.sequelize.fpEventsFpEventDelegates1C.findOne({where: { id: id }});
    			if (objFpEventFpEventDelegate1C) {
    				objFpEventFpEventDelegate1C = await models.sequelize.fpEventsFpEventDelegates1C.update(updateFpEventFpEventDelegate1C, { where: { id: id } });
    			}
    		} else {
    			objFpEventFpEventDelegate1C = await models.mongoose.fpEventsFpEventDelegates1C.findOneAndUpdate({id: id}, {$set: updateFpEventFpEventDelegate1C}, {new: true});
    		}
    		return objFpEventFpEventDelegate1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventFpEventDelegate1CByDeleted(deleted, updateFpEventFpEventDelegate1C) {
    	try {
    		let objFpEventFpEventDelegate1C;
    		if(sql) {
    			objFpEventFpEventDelegate1C = await models.sequelize.fpEventsFpEventDelegates1C.findOne({where: { deleted: deleted }});
    			if (objFpEventFpEventDelegate1C) {
    				objFpEventFpEventDelegate1C = await models.sequelize.fpEventsFpEventDelegates1C.update(updateFpEventFpEventDelegate1C, { where: { deleted: deleted } });
    			}
    		} else {
    			objFpEventFpEventDelegate1C = await models.mongoose.fpEventsFpEventDelegates1C.findOneAndUpdate({deleted: deleted}, {$set: updateFpEventFpEventDelegate1C}, {new: true});
    		}
    		return objFpEventFpEventDelegate1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventFpEventDelegate1CByFpEventsFpEventDelegates1fpEventsIda(fpEventsFpEventDelegates1fpEventsIda, updateFpEventFpEventDelegate1C) {
    	try {
    		let objFpEventFpEventDelegate1C;
    		if(sql) {
    			objFpEventFpEventDelegate1C = await models.sequelize.fpEventsFpEventDelegates1C.findOne({where: { fp_events_fp_event_delegates_1fp_events_ida: fpEventsFpEventDelegates1fpEventsIda }});
    			if (objFpEventFpEventDelegate1C) {
    				objFpEventFpEventDelegate1C = await models.sequelize.fpEventsFpEventDelegates1C.update(updateFpEventFpEventDelegate1C, { where: { fp_events_fp_event_delegates_1fp_events_ida: fpEventsFpEventDelegates1fpEventsIda } });
    			}
    		} else {
    			objFpEventFpEventDelegate1C = await models.mongoose.fpEventsFpEventDelegates1C.findOneAndUpdate({fp_events_fp_event_delegates_1fp_events_ida: fpEventsFpEventDelegates1fpEventsIda}, {$set: updateFpEventFpEventDelegate1C}, {new: true});
    		}
    		return objFpEventFpEventDelegate1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventFpEventDelegate1CByFpEventsFpEventDelegates1fpEventDelegatesIdb(fpEventsFpEventDelegates1fpEventDelegatesIdb, updateFpEventFpEventDelegate1C) {
    	try {
    		let objFpEventFpEventDelegate1C;
    		if(sql) {
    			objFpEventFpEventDelegate1C = await models.sequelize.fpEventsFpEventDelegates1C.findOne({where: { fp_events_fp_event_delegates_1fp_event_delegates_idb: fpEventsFpEventDelegates1fpEventDelegatesIdb }});
    			if (objFpEventFpEventDelegate1C) {
    				objFpEventFpEventDelegate1C = await models.sequelize.fpEventsFpEventDelegates1C.update(updateFpEventFpEventDelegate1C, { where: { fp_events_fp_event_delegates_1fp_event_delegates_idb: fpEventsFpEventDelegates1fpEventDelegatesIdb } });
    			}
    		} else {
    			objFpEventFpEventDelegate1C = await models.mongoose.fpEventsFpEventDelegates1C.findOneAndUpdate({fp_events_fp_event_delegates_1fp_event_delegates_idb: fpEventsFpEventDelegates1fpEventDelegatesIdb}, {$set: updateFpEventFpEventDelegate1C}, {new: true});
    		}
    		return objFpEventFpEventDelegate1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventFpEventDelegate1CByDateModified(dateModified, updateFpEventFpEventDelegate1C) {
    	try {
    		let objFpEventFpEventDelegate1C;
    		if(sql) {
    			objFpEventFpEventDelegate1C = await models.sequelize.fpEventsFpEventDelegates1C.findOne({where: { date_modified: dateModified }});
    			if (objFpEventFpEventDelegate1C) {
    				objFpEventFpEventDelegate1C = await models.sequelize.fpEventsFpEventDelegates1C.update(updateFpEventFpEventDelegate1C, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objFpEventFpEventDelegate1C = await models.mongoose.fpEventsFpEventDelegates1C.findOneAndUpdate({date_modified: dateModified}, {$set: updateFpEventFpEventDelegate1C}, {new: true});
    		}
    		return objFpEventFpEventDelegate1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = FpEventFpEventDelegate1CService;
//</es-section>
