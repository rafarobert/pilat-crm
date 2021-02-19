/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:35 GMT-0400 (Bolivia Time)
 * Time: 4:42:35
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:35 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:35
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

class CallLeadService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllCallsLeads(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.callsLeads.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.callsLeads.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllCallsLeads(select = []) {
		try {
			if(sql) {
				return await models.sequelize.callsLeads.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.callsLeads.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addCallLead(newCallLead) {
		try {
			let objCallLead;
			if(util.PrimaryKeyTypeIsString(models.sequelize.callsLeads.primaryKeys.id.type.toString())) {
			    newCallLead.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objCallLead = await models.sequelize.callsLeads.create(newCallLead);
			} else {
				objCallLead = new models.mongoose.callsLeads(newCallLead);
				await objCallLead.save();
			}
			return objCallLead;
		} catch (error) {
			throw error;
		}
	}

	static async updateCallLead(id, updateCallLead) {
		try {
			let objCallLead;
			if(sql) {
				objCallLead = await models.sequelize.callsLeads.findOne({where: { id: util.String(id) }});
				if (objCallLead) {
					await models.sequelize.callsLeads.update(updateCallLead, { where: { id: util.String(id) } });
					objCallLead = await models.sequelize.callsLeads.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateCallLead._id;
				objCallLead = await models.mongoose.callsLeads.findOneAndUpdate({id:id}, {$set: updateCallLead}, {new: true});
			}
			return objCallLead;
		} catch (error) {
			throw error;
		}
	}

	static async getACallLead(id, query) {
		try {
			let objCallLead;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objCallLead = await models.sequelize.callsLeads.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objCallLead = await models.mongoose.callsLeads.find({id:util.String(id)}).select(query.select);
			}
			return objCallLead;
		} catch (error) {
			throw error;
		}
	}

	static async deleteCallLead(id) {
		try {
			let objCallLead;
			if(sql) {
				objCallLead = await models.sequelize.callsLeads.findOne({ where: { id: util.String(id) } });
				if (objCallLead) {
					await models.sequelize.callsLeads.destroy({where: { id: util.String(id) }});
				}
			} else {
				objCallLead = await models.mongoose.callsLeads.deleteOne({id:util.String(id)});
			}
			return objCallLead;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objCallLead;
    		if(sql) {
    			objCallLead = await models.sequelize.callsLeads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objCallLead = await models.mongoose.callsLeads.findOne({id: id});
    		}
    		return objCallLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objCallLead;
    		if(sql) {
    			objCallLead = await models.sequelize.callsLeads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objCallLead = await models.mongoose.callsLeads.findOne({deleted: deleted});
    		}
    		return objCallLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCallId(callId, query = {}) {
    	try {
    		let objCallLead;
    		if(sql) {
    			objCallLead = await models.sequelize.callsLeads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { call_id: callId },
    			});
    		} else {
    			objCallLead = await models.mongoose.callsLeads.findOne({call_id: callId});
    		}
    		return objCallLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLeadId(leadId, query = {}) {
    	try {
    		let objCallLead;
    		if(sql) {
    			objCallLead = await models.sequelize.callsLeads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { lead_id: leadId },
    			});
    		} else {
    			objCallLead = await models.mongoose.callsLeads.findOne({lead_id: leadId});
    		}
    		return objCallLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRequired(required, query = {}) {
    	try {
    		let objCallLead;
    		if(sql) {
    			objCallLead = await models.sequelize.callsLeads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { required: required },
    			});
    		} else {
    			objCallLead = await models.mongoose.callsLeads.findOne({required: required});
    		}
    		return objCallLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAcceptStatus(acceptStatus, query = {}) {
    	try {
    		let objCallLead;
    		if(sql) {
    			objCallLead = await models.sequelize.callsLeads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { accept_status: acceptStatus },
    			});
    		} else {
    			objCallLead = await models.mongoose.callsLeads.findOne({accept_status: acceptStatus});
    		}
    		return objCallLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objCallLead;
    		if(sql) {
    			objCallLead = await models.sequelize.callsLeads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objCallLead = await models.mongoose.callsLeads.findOne({date_modified: dateModified});
    		}
    		return objCallLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateCallLeadById(id, updateCallLead) {
    	try {
    		let objCallLead;
    		if(sql) {
    			objCallLead = await models.sequelize.callsLeads.findOne({where: { id: id }});
    			if (objCallLead) {
    				objCallLead = await models.sequelize.callsLeads.update(updateCallLead, { where: { id: id } });
    			}
    		} else {
    			objCallLead = await models.mongoose.callsLeads.findOneAndUpdate({id: id}, {$set: updateCallLead}, {new: true});
    		}
    		return objCallLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallLeadByDeleted(deleted, updateCallLead) {
    	try {
    		let objCallLead;
    		if(sql) {
    			objCallLead = await models.sequelize.callsLeads.findOne({where: { deleted: deleted }});
    			if (objCallLead) {
    				objCallLead = await models.sequelize.callsLeads.update(updateCallLead, { where: { deleted: deleted } });
    			}
    		} else {
    			objCallLead = await models.mongoose.callsLeads.findOneAndUpdate({deleted: deleted}, {$set: updateCallLead}, {new: true});
    		}
    		return objCallLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallLeadByCallId(callId, updateCallLead) {
    	try {
    		let objCallLead;
    		if(sql) {
    			objCallLead = await models.sequelize.callsLeads.findOne({where: { call_id: callId }});
    			if (objCallLead) {
    				objCallLead = await models.sequelize.callsLeads.update(updateCallLead, { where: { call_id: callId } });
    			}
    		} else {
    			objCallLead = await models.mongoose.callsLeads.findOneAndUpdate({call_id: callId}, {$set: updateCallLead}, {new: true});
    		}
    		return objCallLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallLeadByLeadId(leadId, updateCallLead) {
    	try {
    		let objCallLead;
    		if(sql) {
    			objCallLead = await models.sequelize.callsLeads.findOne({where: { lead_id: leadId }});
    			if (objCallLead) {
    				objCallLead = await models.sequelize.callsLeads.update(updateCallLead, { where: { lead_id: leadId } });
    			}
    		} else {
    			objCallLead = await models.mongoose.callsLeads.findOneAndUpdate({lead_id: leadId}, {$set: updateCallLead}, {new: true});
    		}
    		return objCallLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallLeadByRequired(required, updateCallLead) {
    	try {
    		let objCallLead;
    		if(sql) {
    			objCallLead = await models.sequelize.callsLeads.findOne({where: { required: required }});
    			if (objCallLead) {
    				objCallLead = await models.sequelize.callsLeads.update(updateCallLead, { where: { required: required } });
    			}
    		} else {
    			objCallLead = await models.mongoose.callsLeads.findOneAndUpdate({required: required}, {$set: updateCallLead}, {new: true});
    		}
    		return objCallLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallLeadByAcceptStatus(acceptStatus, updateCallLead) {
    	try {
    		let objCallLead;
    		if(sql) {
    			objCallLead = await models.sequelize.callsLeads.findOne({where: { accept_status: acceptStatus }});
    			if (objCallLead) {
    				objCallLead = await models.sequelize.callsLeads.update(updateCallLead, { where: { accept_status: acceptStatus } });
    			}
    		} else {
    			objCallLead = await models.mongoose.callsLeads.findOneAndUpdate({accept_status: acceptStatus}, {$set: updateCallLead}, {new: true});
    		}
    		return objCallLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallLeadByDateModified(dateModified, updateCallLead) {
    	try {
    		let objCallLead;
    		if(sql) {
    			objCallLead = await models.sequelize.callsLeads.findOne({where: { date_modified: dateModified }});
    			if (objCallLead) {
    				objCallLead = await models.sequelize.callsLeads.update(updateCallLead, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objCallLead = await models.mongoose.callsLeads.findOneAndUpdate({date_modified: dateModified}, {$set: updateCallLead}, {new: true});
    		}
    		return objCallLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = CallLeadService;
//</es-section>
