/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:16 GMT-0400 (Bolivia Time)
 * Time: 14:57:16
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:16 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:16
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

class MeetingLeadService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllMeetingsLeads(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.meetingsLeads.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.meetingsLeads.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllMeetingsLeads(select = []) {
		try {
			if(sql) {
				return await models.sequelize.meetingsLeads.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.meetingsLeads.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addMeetingLead(newMeetingLead) {
		try {
			let objMeetingLead;
			if(util.PrimaryKeyTypeIsString(models.sequelize.meetingsLeads.primaryKeys.id.type.toString())) {
			    newMeetingLead.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objMeetingLead = await models.sequelize.meetingsLeads.create(newMeetingLead);
			} else {
				objMeetingLead = new models.mongoose.meetingsLeads(newMeetingLead);
				await objMeetingLead.save();
			}
			return objMeetingLead;
		} catch (error) {
			throw error;
		}
	}

	static async updateMeetingLead(id, updateMeetingLead) {
		try {
			let objMeetingLead;
			if(sql) {
				objMeetingLead = await models.sequelize.meetingsLeads.findOne({where: { id: util.String(id) }});
				if (objMeetingLead) {
					await models.sequelize.meetingsLeads.update(updateMeetingLead, { where: { id: util.String(id) } });
					objMeetingLead = await models.sequelize.meetingsLeads.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateMeetingLead._id;
				objMeetingLead = await models.mongoose.meetingsLeads.findOneAndUpdate({id:id}, {$set: updateMeetingLead}, {new: true});
			}
			return objMeetingLead;
		} catch (error) {
			throw error;
		}
	}

	static async getAMeetingLead(id, query) {
		try {
			let objMeetingLead;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objMeetingLead = await models.sequelize.meetingsLeads.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objMeetingLead = await models.mongoose.meetingsLeads.find({id:util.String(id)}).select(query.select);
			}
			return objMeetingLead;
		} catch (error) {
			throw error;
		}
	}

	static async deleteMeetingLead(id) {
		try {
			let objMeetingLead;
			if(sql) {
				objMeetingLead = await models.sequelize.meetingsLeads.findOne({ where: { id: util.String(id) } });
				if (objMeetingLead) {
					await models.sequelize.meetingsLeads.destroy({where: { id: util.String(id) }});
				}
			} else {
				objMeetingLead = await models.mongoose.meetingsLeads.deleteOne({id:util.String(id)});
			}
			return objMeetingLead;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objMeetingLead;
    		if(sql) {
    			objMeetingLead = await models.sequelize.meetingsLeads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objMeetingLead = await models.mongoose.meetingsLeads.findOne({id: id});
    		}
    		return objMeetingLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objMeetingLead;
    		if(sql) {
    			objMeetingLead = await models.sequelize.meetingsLeads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objMeetingLead = await models.mongoose.meetingsLeads.findOne({deleted: deleted});
    		}
    		return objMeetingLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMeetingId(meetingId, query = {}) {
    	try {
    		let objMeetingLead;
    		if(sql) {
    			objMeetingLead = await models.sequelize.meetingsLeads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { meeting_id: meetingId },
    			});
    		} else {
    			objMeetingLead = await models.mongoose.meetingsLeads.findOne({meeting_id: meetingId});
    		}
    		return objMeetingLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLeadId(leadId, query = {}) {
    	try {
    		let objMeetingLead;
    		if(sql) {
    			objMeetingLead = await models.sequelize.meetingsLeads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { lead_id: leadId },
    			});
    		} else {
    			objMeetingLead = await models.mongoose.meetingsLeads.findOne({lead_id: leadId});
    		}
    		return objMeetingLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRequired(required, query = {}) {
    	try {
    		let objMeetingLead;
    		if(sql) {
    			objMeetingLead = await models.sequelize.meetingsLeads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { required: required },
    			});
    		} else {
    			objMeetingLead = await models.mongoose.meetingsLeads.findOne({required: required});
    		}
    		return objMeetingLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAcceptStatus(acceptStatus, query = {}) {
    	try {
    		let objMeetingLead;
    		if(sql) {
    			objMeetingLead = await models.sequelize.meetingsLeads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { accept_status: acceptStatus },
    			});
    		} else {
    			objMeetingLead = await models.mongoose.meetingsLeads.findOne({accept_status: acceptStatus});
    		}
    		return objMeetingLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objMeetingLead;
    		if(sql) {
    			objMeetingLead = await models.sequelize.meetingsLeads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objMeetingLead = await models.mongoose.meetingsLeads.findOne({date_modified: dateModified});
    		}
    		return objMeetingLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateMeetingLeadById(id, updateMeetingLead) {
    	try {
    		let objMeetingLead;
    		if(sql) {
    			objMeetingLead = await models.sequelize.meetingsLeads.findOne({where: { id: id }});
    			if (objMeetingLead) {
    				objMeetingLead = await models.sequelize.meetingsLeads.update(updateMeetingLead, { where: { id: id } });
    			}
    		} else {
    			objMeetingLead = await models.mongoose.meetingsLeads.findOneAndUpdate({id: id}, {$set: updateMeetingLead}, {new: true});
    		}
    		return objMeetingLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingLeadByDeleted(deleted, updateMeetingLead) {
    	try {
    		let objMeetingLead;
    		if(sql) {
    			objMeetingLead = await models.sequelize.meetingsLeads.findOne({where: { deleted: deleted }});
    			if (objMeetingLead) {
    				objMeetingLead = await models.sequelize.meetingsLeads.update(updateMeetingLead, { where: { deleted: deleted } });
    			}
    		} else {
    			objMeetingLead = await models.mongoose.meetingsLeads.findOneAndUpdate({deleted: deleted}, {$set: updateMeetingLead}, {new: true});
    		}
    		return objMeetingLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingLeadByMeetingId(meetingId, updateMeetingLead) {
    	try {
    		let objMeetingLead;
    		if(sql) {
    			objMeetingLead = await models.sequelize.meetingsLeads.findOne({where: { meeting_id: meetingId }});
    			if (objMeetingLead) {
    				objMeetingLead = await models.sequelize.meetingsLeads.update(updateMeetingLead, { where: { meeting_id: meetingId } });
    			}
    		} else {
    			objMeetingLead = await models.mongoose.meetingsLeads.findOneAndUpdate({meeting_id: meetingId}, {$set: updateMeetingLead}, {new: true});
    		}
    		return objMeetingLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingLeadByLeadId(leadId, updateMeetingLead) {
    	try {
    		let objMeetingLead;
    		if(sql) {
    			objMeetingLead = await models.sequelize.meetingsLeads.findOne({where: { lead_id: leadId }});
    			if (objMeetingLead) {
    				objMeetingLead = await models.sequelize.meetingsLeads.update(updateMeetingLead, { where: { lead_id: leadId } });
    			}
    		} else {
    			objMeetingLead = await models.mongoose.meetingsLeads.findOneAndUpdate({lead_id: leadId}, {$set: updateMeetingLead}, {new: true});
    		}
    		return objMeetingLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingLeadByRequired(required, updateMeetingLead) {
    	try {
    		let objMeetingLead;
    		if(sql) {
    			objMeetingLead = await models.sequelize.meetingsLeads.findOne({where: { required: required }});
    			if (objMeetingLead) {
    				objMeetingLead = await models.sequelize.meetingsLeads.update(updateMeetingLead, { where: { required: required } });
    			}
    		} else {
    			objMeetingLead = await models.mongoose.meetingsLeads.findOneAndUpdate({required: required}, {$set: updateMeetingLead}, {new: true});
    		}
    		return objMeetingLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingLeadByAcceptStatus(acceptStatus, updateMeetingLead) {
    	try {
    		let objMeetingLead;
    		if(sql) {
    			objMeetingLead = await models.sequelize.meetingsLeads.findOne({where: { accept_status: acceptStatus }});
    			if (objMeetingLead) {
    				objMeetingLead = await models.sequelize.meetingsLeads.update(updateMeetingLead, { where: { accept_status: acceptStatus } });
    			}
    		} else {
    			objMeetingLead = await models.mongoose.meetingsLeads.findOneAndUpdate({accept_status: acceptStatus}, {$set: updateMeetingLead}, {new: true});
    		}
    		return objMeetingLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingLeadByDateModified(dateModified, updateMeetingLead) {
    	try {
    		let objMeetingLead;
    		if(sql) {
    			objMeetingLead = await models.sequelize.meetingsLeads.findOne({where: { date_modified: dateModified }});
    			if (objMeetingLead) {
    				objMeetingLead = await models.sequelize.meetingsLeads.update(updateMeetingLead, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objMeetingLead = await models.mongoose.meetingsLeads.findOneAndUpdate({date_modified: dateModified}, {$set: updateMeetingLead}, {new: true});
    		}
    		return objMeetingLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = MeetingLeadService;
//</es-section>
