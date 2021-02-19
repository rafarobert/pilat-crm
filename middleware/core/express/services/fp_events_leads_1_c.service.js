/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:37:22 GMT-0400 (Bolivia Time)
 * Time: 18:37:22
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:37:22 GMT-0400 (Bolivia Time)
 * Last time updated: 18:37:22
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

class FpEventLead1CService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllFpEventsLeads1C(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.fpEventsLeads1C.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.fpEventsLeads1C.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllFpEventsLeads1C(select = []) {
		try {
			if(sql) {
				return await models.sequelize.fpEventsLeads1C.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.fpEventsLeads1C.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addFpEventLead1C(newFpEventLead1C) {
		try {
			let objFpEventLead1C;
			if(util.PrimaryKeyTypeIsString(models.sequelize.fpEventsLeads1C.primaryKeys.id.type.toString())) {
			    newFpEventLead1C.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objFpEventLead1C = await models.sequelize.fpEventsLeads1C.create(newFpEventLead1C);
			} else {
				objFpEventLead1C = new models.mongoose.fpEventsLeads1C(newFpEventLead1C);
				await objFpEventLead1C.save();
			}
			return objFpEventLead1C;
		} catch (error) {
			throw error;
		}
	}

	static async updateFpEventLead1C(id, updateFpEventLead1C) {
		try {
			let objFpEventLead1C;
			if(sql) {
				objFpEventLead1C = await models.sequelize.fpEventsLeads1C.findOne({where: { id: util.String(id) }});
				if (objFpEventLead1C) {
					await models.sequelize.fpEventsLeads1C.update(updateFpEventLead1C, { where: { id: util.String(id) } });
					objFpEventLead1C = await models.sequelize.fpEventsLeads1C.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateFpEventLead1C._id;
				objFpEventLead1C = await models.mongoose.fpEventsLeads1C.findOneAndUpdate({id:id}, {$set: updateFpEventLead1C}, {new: true});
			}
			return objFpEventLead1C;
		} catch (error) {
			throw error;
		}
	}

	static async getAFpEventLead1C(id, query) {
		try {
			let objFpEventLead1C;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objFpEventLead1C = await models.sequelize.fpEventsLeads1C.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objFpEventLead1C = await models.mongoose.fpEventsLeads1C.find({id:util.String(id)}).select(query.select);
			}
			return objFpEventLead1C;
		} catch (error) {
			throw error;
		}
	}

	static async deleteFpEventLead1C(id) {
		try {
			let objFpEventLead1C;
			if(sql) {
				objFpEventLead1C = await models.sequelize.fpEventsLeads1C.findOne({ where: { id: util.String(id) } });
				if (objFpEventLead1C) {
					await models.sequelize.fpEventsLeads1C.destroy({where: { id: util.String(id) }});
				}
			} else {
				objFpEventLead1C = await models.mongoose.fpEventsLeads1C.deleteOne({id:util.String(id)});
			}
			return objFpEventLead1C;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objFpEventLead1C;
    		if(sql) {
    			objFpEventLead1C = await models.sequelize.fpEventsLeads1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objFpEventLead1C = await models.mongoose.fpEventsLeads1C.findOne({id: id});
    		}
    		return objFpEventLead1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objFpEventLead1C;
    		if(sql) {
    			objFpEventLead1C = await models.sequelize.fpEventsLeads1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objFpEventLead1C = await models.mongoose.fpEventsLeads1C.findOne({deleted: deleted});
    		}
    		return objFpEventLead1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByEmailResponded(emailResponded, query = {}) {
    	try {
    		let objFpEventLead1C;
    		if(sql) {
    			objFpEventLead1C = await models.sequelize.fpEventsLeads1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { email_responded: emailResponded },
    			});
    		} else {
    			objFpEventLead1C = await models.mongoose.fpEventsLeads1C.findOne({email_responded: emailResponded});
    		}
    		return objFpEventLead1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFpEventsLeads1fpEventsIda(fpEventsLeads1fpEventsIda, query = {}) {
    	try {
    		let objFpEventLead1C;
    		if(sql) {
    			objFpEventLead1C = await models.sequelize.fpEventsLeads1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { fp_events_leads_1fp_events_ida: fpEventsLeads1fpEventsIda },
    			});
    		} else {
    			objFpEventLead1C = await models.mongoose.fpEventsLeads1C.findOne({fp_events_leads_1fp_events_ida: fpEventsLeads1fpEventsIda});
    		}
    		return objFpEventLead1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFpEventsLeads1leadsIdb(fpEventsLeads1leadsIdb, query = {}) {
    	try {
    		let objFpEventLead1C;
    		if(sql) {
    			objFpEventLead1C = await models.sequelize.fpEventsLeads1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { fp_events_leads_1leads_idb: fpEventsLeads1leadsIdb },
    			});
    		} else {
    			objFpEventLead1C = await models.mongoose.fpEventsLeads1C.findOne({fp_events_leads_1leads_idb: fpEventsLeads1leadsIdb});
    		}
    		return objFpEventLead1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByInviteStatus(inviteStatus, query = {}) {
    	try {
    		let objFpEventLead1C;
    		if(sql) {
    			objFpEventLead1C = await models.sequelize.fpEventsLeads1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { invite_status: inviteStatus },
    			});
    		} else {
    			objFpEventLead1C = await models.mongoose.fpEventsLeads1C.findOne({invite_status: inviteStatus});
    		}
    		return objFpEventLead1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAcceptStatus(acceptStatus, query = {}) {
    	try {
    		let objFpEventLead1C;
    		if(sql) {
    			objFpEventLead1C = await models.sequelize.fpEventsLeads1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { accept_status: acceptStatus },
    			});
    		} else {
    			objFpEventLead1C = await models.mongoose.fpEventsLeads1C.findOne({accept_status: acceptStatus});
    		}
    		return objFpEventLead1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objFpEventLead1C;
    		if(sql) {
    			objFpEventLead1C = await models.sequelize.fpEventsLeads1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objFpEventLead1C = await models.mongoose.fpEventsLeads1C.findOne({date_modified: dateModified});
    		}
    		return objFpEventLead1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateFpEventLead1CById(id, updateFpEventLead1C) {
    	try {
    		let objFpEventLead1C;
    		if(sql) {
    			objFpEventLead1C = await models.sequelize.fpEventsLeads1C.findOne({where: { id: id }});
    			if (objFpEventLead1C) {
    				objFpEventLead1C = await models.sequelize.fpEventsLeads1C.update(updateFpEventLead1C, { where: { id: id } });
    			}
    		} else {
    			objFpEventLead1C = await models.mongoose.fpEventsLeads1C.findOneAndUpdate({id: id}, {$set: updateFpEventLead1C}, {new: true});
    		}
    		return objFpEventLead1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventLead1CByDeleted(deleted, updateFpEventLead1C) {
    	try {
    		let objFpEventLead1C;
    		if(sql) {
    			objFpEventLead1C = await models.sequelize.fpEventsLeads1C.findOne({where: { deleted: deleted }});
    			if (objFpEventLead1C) {
    				objFpEventLead1C = await models.sequelize.fpEventsLeads1C.update(updateFpEventLead1C, { where: { deleted: deleted } });
    			}
    		} else {
    			objFpEventLead1C = await models.mongoose.fpEventsLeads1C.findOneAndUpdate({deleted: deleted}, {$set: updateFpEventLead1C}, {new: true});
    		}
    		return objFpEventLead1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventLead1CByEmailResponded(emailResponded, updateFpEventLead1C) {
    	try {
    		let objFpEventLead1C;
    		if(sql) {
    			objFpEventLead1C = await models.sequelize.fpEventsLeads1C.findOne({where: { email_responded: emailResponded }});
    			if (objFpEventLead1C) {
    				objFpEventLead1C = await models.sequelize.fpEventsLeads1C.update(updateFpEventLead1C, { where: { email_responded: emailResponded } });
    			}
    		} else {
    			objFpEventLead1C = await models.mongoose.fpEventsLeads1C.findOneAndUpdate({email_responded: emailResponded}, {$set: updateFpEventLead1C}, {new: true});
    		}
    		return objFpEventLead1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventLead1CByFpEventsLeads1fpEventsIda(fpEventsLeads1fpEventsIda, updateFpEventLead1C) {
    	try {
    		let objFpEventLead1C;
    		if(sql) {
    			objFpEventLead1C = await models.sequelize.fpEventsLeads1C.findOne({where: { fp_events_leads_1fp_events_ida: fpEventsLeads1fpEventsIda }});
    			if (objFpEventLead1C) {
    				objFpEventLead1C = await models.sequelize.fpEventsLeads1C.update(updateFpEventLead1C, { where: { fp_events_leads_1fp_events_ida: fpEventsLeads1fpEventsIda } });
    			}
    		} else {
    			objFpEventLead1C = await models.mongoose.fpEventsLeads1C.findOneAndUpdate({fp_events_leads_1fp_events_ida: fpEventsLeads1fpEventsIda}, {$set: updateFpEventLead1C}, {new: true});
    		}
    		return objFpEventLead1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventLead1CByFpEventsLeads1leadsIdb(fpEventsLeads1leadsIdb, updateFpEventLead1C) {
    	try {
    		let objFpEventLead1C;
    		if(sql) {
    			objFpEventLead1C = await models.sequelize.fpEventsLeads1C.findOne({where: { fp_events_leads_1leads_idb: fpEventsLeads1leadsIdb }});
    			if (objFpEventLead1C) {
    				objFpEventLead1C = await models.sequelize.fpEventsLeads1C.update(updateFpEventLead1C, { where: { fp_events_leads_1leads_idb: fpEventsLeads1leadsIdb } });
    			}
    		} else {
    			objFpEventLead1C = await models.mongoose.fpEventsLeads1C.findOneAndUpdate({fp_events_leads_1leads_idb: fpEventsLeads1leadsIdb}, {$set: updateFpEventLead1C}, {new: true});
    		}
    		return objFpEventLead1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventLead1CByInviteStatus(inviteStatus, updateFpEventLead1C) {
    	try {
    		let objFpEventLead1C;
    		if(sql) {
    			objFpEventLead1C = await models.sequelize.fpEventsLeads1C.findOne({where: { invite_status: inviteStatus }});
    			if (objFpEventLead1C) {
    				objFpEventLead1C = await models.sequelize.fpEventsLeads1C.update(updateFpEventLead1C, { where: { invite_status: inviteStatus } });
    			}
    		} else {
    			objFpEventLead1C = await models.mongoose.fpEventsLeads1C.findOneAndUpdate({invite_status: inviteStatus}, {$set: updateFpEventLead1C}, {new: true});
    		}
    		return objFpEventLead1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventLead1CByAcceptStatus(acceptStatus, updateFpEventLead1C) {
    	try {
    		let objFpEventLead1C;
    		if(sql) {
    			objFpEventLead1C = await models.sequelize.fpEventsLeads1C.findOne({where: { accept_status: acceptStatus }});
    			if (objFpEventLead1C) {
    				objFpEventLead1C = await models.sequelize.fpEventsLeads1C.update(updateFpEventLead1C, { where: { accept_status: acceptStatus } });
    			}
    		} else {
    			objFpEventLead1C = await models.mongoose.fpEventsLeads1C.findOneAndUpdate({accept_status: acceptStatus}, {$set: updateFpEventLead1C}, {new: true});
    		}
    		return objFpEventLead1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventLead1CByDateModified(dateModified, updateFpEventLead1C) {
    	try {
    		let objFpEventLead1C;
    		if(sql) {
    			objFpEventLead1C = await models.sequelize.fpEventsLeads1C.findOne({where: { date_modified: dateModified }});
    			if (objFpEventLead1C) {
    				objFpEventLead1C = await models.sequelize.fpEventsLeads1C.update(updateFpEventLead1C, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objFpEventLead1C = await models.mongoose.fpEventsLeads1C.findOneAndUpdate({date_modified: dateModified}, {$set: updateFpEventLead1C}, {new: true});
    		}
    		return objFpEventLead1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = FpEventLead1CService;
//</es-section>
