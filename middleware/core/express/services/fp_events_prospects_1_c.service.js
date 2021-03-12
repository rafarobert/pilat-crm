/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:57 GMT-0400 (Bolivia Time)
 * Time: 14:56:57
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:57 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:57
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

class FpEventProspect1CService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllFpEventsProspects1C(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.fpEventsProspects1C.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.fpEventsProspects1C.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllFpEventsProspects1C(select = []) {
		try {
			if(sql) {
				return await models.sequelize.fpEventsProspects1C.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.fpEventsProspects1C.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addFpEventProspect1C(newFpEventProspect1C) {
		try {
			let objFpEventProspect1C;
			if(util.PrimaryKeyTypeIsString(models.sequelize.fpEventsProspects1C.primaryKeys.id.type.toString())) {
			    newFpEventProspect1C.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objFpEventProspect1C = await models.sequelize.fpEventsProspects1C.create(newFpEventProspect1C);
			} else {
				objFpEventProspect1C = new models.mongoose.fpEventsProspects1C(newFpEventProspect1C);
				await objFpEventProspect1C.save();
			}
			return objFpEventProspect1C;
		} catch (error) {
			throw error;
		}
	}

	static async updateFpEventProspect1C(id, updateFpEventProspect1C) {
		try {
			let objFpEventProspect1C;
			if(sql) {
				objFpEventProspect1C = await models.sequelize.fpEventsProspects1C.findOne({where: { id: util.String(id) }});
				if (objFpEventProspect1C) {
					await models.sequelize.fpEventsProspects1C.update(updateFpEventProspect1C, { where: { id: util.String(id) } });
					objFpEventProspect1C = await models.sequelize.fpEventsProspects1C.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateFpEventProspect1C._id;
				objFpEventProspect1C = await models.mongoose.fpEventsProspects1C.findOneAndUpdate({id:id}, {$set: updateFpEventProspect1C}, {new: true});
			}
			return objFpEventProspect1C;
		} catch (error) {
			throw error;
		}
	}

	static async getAFpEventProspect1C(id, query) {
		try {
			let objFpEventProspect1C;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objFpEventProspect1C = await models.sequelize.fpEventsProspects1C.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objFpEventProspect1C = await models.mongoose.fpEventsProspects1C.find({id:util.String(id)}).select(query.select);
			}
			return objFpEventProspect1C;
		} catch (error) {
			throw error;
		}
	}

	static async deleteFpEventProspect1C(id) {
		try {
			let objFpEventProspect1C;
			if(sql) {
				objFpEventProspect1C = await models.sequelize.fpEventsProspects1C.findOne({ where: { id: util.String(id) } });
				if (objFpEventProspect1C) {
					await models.sequelize.fpEventsProspects1C.destroy({where: { id: util.String(id) }});
				}
			} else {
				objFpEventProspect1C = await models.mongoose.fpEventsProspects1C.deleteOne({id:util.String(id)});
			}
			return objFpEventProspect1C;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objFpEventProspect1C;
    		if(sql) {
    			objFpEventProspect1C = await models.sequelize.fpEventsProspects1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objFpEventProspect1C = await models.mongoose.fpEventsProspects1C.findOne({id: id});
    		}
    		return objFpEventProspect1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objFpEventProspect1C;
    		if(sql) {
    			objFpEventProspect1C = await models.sequelize.fpEventsProspects1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objFpEventProspect1C = await models.mongoose.fpEventsProspects1C.findOne({deleted: deleted});
    		}
    		return objFpEventProspect1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByEmailResponded(emailResponded, query = {}) {
    	try {
    		let objFpEventProspect1C;
    		if(sql) {
    			objFpEventProspect1C = await models.sequelize.fpEventsProspects1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { email_responded: emailResponded },
    			});
    		} else {
    			objFpEventProspect1C = await models.mongoose.fpEventsProspects1C.findOne({email_responded: emailResponded});
    		}
    		return objFpEventProspect1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFpEventsProspects1fpEventsIda(fpEventsProspects1fpEventsIda, query = {}) {
    	try {
    		let objFpEventProspect1C;
    		if(sql) {
    			objFpEventProspect1C = await models.sequelize.fpEventsProspects1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { fp_events_prospects_1fp_events_ida: fpEventsProspects1fpEventsIda },
    			});
    		} else {
    			objFpEventProspect1C = await models.mongoose.fpEventsProspects1C.findOne({fp_events_prospects_1fp_events_ida: fpEventsProspects1fpEventsIda});
    		}
    		return objFpEventProspect1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFpEventsProspects1prospectsIdb(fpEventsProspects1prospectsIdb, query = {}) {
    	try {
    		let objFpEventProspect1C;
    		if(sql) {
    			objFpEventProspect1C = await models.sequelize.fpEventsProspects1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { fp_events_prospects_1prospects_idb: fpEventsProspects1prospectsIdb },
    			});
    		} else {
    			objFpEventProspect1C = await models.mongoose.fpEventsProspects1C.findOne({fp_events_prospects_1prospects_idb: fpEventsProspects1prospectsIdb});
    		}
    		return objFpEventProspect1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByInviteStatus(inviteStatus, query = {}) {
    	try {
    		let objFpEventProspect1C;
    		if(sql) {
    			objFpEventProspect1C = await models.sequelize.fpEventsProspects1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { invite_status: inviteStatus },
    			});
    		} else {
    			objFpEventProspect1C = await models.mongoose.fpEventsProspects1C.findOne({invite_status: inviteStatus});
    		}
    		return objFpEventProspect1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAcceptStatus(acceptStatus, query = {}) {
    	try {
    		let objFpEventProspect1C;
    		if(sql) {
    			objFpEventProspect1C = await models.sequelize.fpEventsProspects1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { accept_status: acceptStatus },
    			});
    		} else {
    			objFpEventProspect1C = await models.mongoose.fpEventsProspects1C.findOne({accept_status: acceptStatus});
    		}
    		return objFpEventProspect1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objFpEventProspect1C;
    		if(sql) {
    			objFpEventProspect1C = await models.sequelize.fpEventsProspects1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objFpEventProspect1C = await models.mongoose.fpEventsProspects1C.findOne({date_modified: dateModified});
    		}
    		return objFpEventProspect1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateFpEventProspect1CById(id, updateFpEventProspect1C) {
    	try {
    		let objFpEventProspect1C;
    		if(sql) {
    			objFpEventProspect1C = await models.sequelize.fpEventsProspects1C.findOne({where: { id: id }});
    			if (objFpEventProspect1C) {
    				objFpEventProspect1C = await models.sequelize.fpEventsProspects1C.update(updateFpEventProspect1C, { where: { id: id } });
    			}
    		} else {
    			objFpEventProspect1C = await models.mongoose.fpEventsProspects1C.findOneAndUpdate({id: id}, {$set: updateFpEventProspect1C}, {new: true});
    		}
    		return objFpEventProspect1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventProspect1CByDeleted(deleted, updateFpEventProspect1C) {
    	try {
    		let objFpEventProspect1C;
    		if(sql) {
    			objFpEventProspect1C = await models.sequelize.fpEventsProspects1C.findOne({where: { deleted: deleted }});
    			if (objFpEventProspect1C) {
    				objFpEventProspect1C = await models.sequelize.fpEventsProspects1C.update(updateFpEventProspect1C, { where: { deleted: deleted } });
    			}
    		} else {
    			objFpEventProspect1C = await models.mongoose.fpEventsProspects1C.findOneAndUpdate({deleted: deleted}, {$set: updateFpEventProspect1C}, {new: true});
    		}
    		return objFpEventProspect1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventProspect1CByEmailResponded(emailResponded, updateFpEventProspect1C) {
    	try {
    		let objFpEventProspect1C;
    		if(sql) {
    			objFpEventProspect1C = await models.sequelize.fpEventsProspects1C.findOne({where: { email_responded: emailResponded }});
    			if (objFpEventProspect1C) {
    				objFpEventProspect1C = await models.sequelize.fpEventsProspects1C.update(updateFpEventProspect1C, { where: { email_responded: emailResponded } });
    			}
    		} else {
    			objFpEventProspect1C = await models.mongoose.fpEventsProspects1C.findOneAndUpdate({email_responded: emailResponded}, {$set: updateFpEventProspect1C}, {new: true});
    		}
    		return objFpEventProspect1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventProspect1CByFpEventsProspects1fpEventsIda(fpEventsProspects1fpEventsIda, updateFpEventProspect1C) {
    	try {
    		let objFpEventProspect1C;
    		if(sql) {
    			objFpEventProspect1C = await models.sequelize.fpEventsProspects1C.findOne({where: { fp_events_prospects_1fp_events_ida: fpEventsProspects1fpEventsIda }});
    			if (objFpEventProspect1C) {
    				objFpEventProspect1C = await models.sequelize.fpEventsProspects1C.update(updateFpEventProspect1C, { where: { fp_events_prospects_1fp_events_ida: fpEventsProspects1fpEventsIda } });
    			}
    		} else {
    			objFpEventProspect1C = await models.mongoose.fpEventsProspects1C.findOneAndUpdate({fp_events_prospects_1fp_events_ida: fpEventsProspects1fpEventsIda}, {$set: updateFpEventProspect1C}, {new: true});
    		}
    		return objFpEventProspect1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventProspect1CByFpEventsProspects1prospectsIdb(fpEventsProspects1prospectsIdb, updateFpEventProspect1C) {
    	try {
    		let objFpEventProspect1C;
    		if(sql) {
    			objFpEventProspect1C = await models.sequelize.fpEventsProspects1C.findOne({where: { fp_events_prospects_1prospects_idb: fpEventsProspects1prospectsIdb }});
    			if (objFpEventProspect1C) {
    				objFpEventProspect1C = await models.sequelize.fpEventsProspects1C.update(updateFpEventProspect1C, { where: { fp_events_prospects_1prospects_idb: fpEventsProspects1prospectsIdb } });
    			}
    		} else {
    			objFpEventProspect1C = await models.mongoose.fpEventsProspects1C.findOneAndUpdate({fp_events_prospects_1prospects_idb: fpEventsProspects1prospectsIdb}, {$set: updateFpEventProspect1C}, {new: true});
    		}
    		return objFpEventProspect1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventProspect1CByInviteStatus(inviteStatus, updateFpEventProspect1C) {
    	try {
    		let objFpEventProspect1C;
    		if(sql) {
    			objFpEventProspect1C = await models.sequelize.fpEventsProspects1C.findOne({where: { invite_status: inviteStatus }});
    			if (objFpEventProspect1C) {
    				objFpEventProspect1C = await models.sequelize.fpEventsProspects1C.update(updateFpEventProspect1C, { where: { invite_status: inviteStatus } });
    			}
    		} else {
    			objFpEventProspect1C = await models.mongoose.fpEventsProspects1C.findOneAndUpdate({invite_status: inviteStatus}, {$set: updateFpEventProspect1C}, {new: true});
    		}
    		return objFpEventProspect1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventProspect1CByAcceptStatus(acceptStatus, updateFpEventProspect1C) {
    	try {
    		let objFpEventProspect1C;
    		if(sql) {
    			objFpEventProspect1C = await models.sequelize.fpEventsProspects1C.findOne({where: { accept_status: acceptStatus }});
    			if (objFpEventProspect1C) {
    				objFpEventProspect1C = await models.sequelize.fpEventsProspects1C.update(updateFpEventProspect1C, { where: { accept_status: acceptStatus } });
    			}
    		} else {
    			objFpEventProspect1C = await models.mongoose.fpEventsProspects1C.findOneAndUpdate({accept_status: acceptStatus}, {$set: updateFpEventProspect1C}, {new: true});
    		}
    		return objFpEventProspect1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventProspect1CByDateModified(dateModified, updateFpEventProspect1C) {
    	try {
    		let objFpEventProspect1C;
    		if(sql) {
    			objFpEventProspect1C = await models.sequelize.fpEventsProspects1C.findOne({where: { date_modified: dateModified }});
    			if (objFpEventProspect1C) {
    				objFpEventProspect1C = await models.sequelize.fpEventsProspects1C.update(updateFpEventProspect1C, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objFpEventProspect1C = await models.mongoose.fpEventsProspects1C.findOneAndUpdate({date_modified: dateModified}, {$set: updateFpEventProspect1C}, {new: true});
    		}
    		return objFpEventProspect1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = FpEventProspect1CService;
//</es-section>
