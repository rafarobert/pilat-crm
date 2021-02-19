/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:37:20 GMT-0400 (Bolivia Time)
 * Time: 18:37:20
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:37:20 GMT-0400 (Bolivia Time)
 * Last time updated: 18:37:20
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

class FpEventContactCService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllFpEventsContactsC(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.fpEventsContactsC.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.fpEventsContactsC.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllFpEventsContactsC(select = []) {
		try {
			if(sql) {
				return await models.sequelize.fpEventsContactsC.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.fpEventsContactsC.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addFpEventContactC(newFpEventContactC) {
		try {
			let objFpEventContactC;
			if(util.PrimaryKeyTypeIsString(models.sequelize.fpEventsContactsC.primaryKeys.id.type.toString())) {
			    newFpEventContactC.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objFpEventContactC = await models.sequelize.fpEventsContactsC.create(newFpEventContactC);
			} else {
				objFpEventContactC = new models.mongoose.fpEventsContactsC(newFpEventContactC);
				await objFpEventContactC.save();
			}
			return objFpEventContactC;
		} catch (error) {
			throw error;
		}
	}

	static async updateFpEventContactC(id, updateFpEventContactC) {
		try {
			let objFpEventContactC;
			if(sql) {
				objFpEventContactC = await models.sequelize.fpEventsContactsC.findOne({where: { id: util.String(id) }});
				if (objFpEventContactC) {
					await models.sequelize.fpEventsContactsC.update(updateFpEventContactC, { where: { id: util.String(id) } });
					objFpEventContactC = await models.sequelize.fpEventsContactsC.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateFpEventContactC._id;
				objFpEventContactC = await models.mongoose.fpEventsContactsC.findOneAndUpdate({id:id}, {$set: updateFpEventContactC}, {new: true});
			}
			return objFpEventContactC;
		} catch (error) {
			throw error;
		}
	}

	static async getAFpEventContactC(id, query) {
		try {
			let objFpEventContactC;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objFpEventContactC = await models.sequelize.fpEventsContactsC.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objFpEventContactC = await models.mongoose.fpEventsContactsC.find({id:util.String(id)}).select(query.select);
			}
			return objFpEventContactC;
		} catch (error) {
			throw error;
		}
	}

	static async deleteFpEventContactC(id) {
		try {
			let objFpEventContactC;
			if(sql) {
				objFpEventContactC = await models.sequelize.fpEventsContactsC.findOne({ where: { id: util.String(id) } });
				if (objFpEventContactC) {
					await models.sequelize.fpEventsContactsC.destroy({where: { id: util.String(id) }});
				}
			} else {
				objFpEventContactC = await models.mongoose.fpEventsContactsC.deleteOne({id:util.String(id)});
			}
			return objFpEventContactC;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objFpEventContactC;
    		if(sql) {
    			objFpEventContactC = await models.sequelize.fpEventsContactsC.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objFpEventContactC = await models.mongoose.fpEventsContactsC.findOne({id: id});
    		}
    		return objFpEventContactC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objFpEventContactC;
    		if(sql) {
    			objFpEventContactC = await models.sequelize.fpEventsContactsC.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objFpEventContactC = await models.mongoose.fpEventsContactsC.findOne({deleted: deleted});
    		}
    		return objFpEventContactC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByEmailResponded(emailResponded, query = {}) {
    	try {
    		let objFpEventContactC;
    		if(sql) {
    			objFpEventContactC = await models.sequelize.fpEventsContactsC.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { email_responded: emailResponded },
    			});
    		} else {
    			objFpEventContactC = await models.mongoose.fpEventsContactsC.findOne({email_responded: emailResponded});
    		}
    		return objFpEventContactC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFpEventsContactsfpEventsIda(fpEventsContactsfpEventsIda, query = {}) {
    	try {
    		let objFpEventContactC;
    		if(sql) {
    			objFpEventContactC = await models.sequelize.fpEventsContactsC.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { fp_events_contactsfp_events_ida: fpEventsContactsfpEventsIda },
    			});
    		} else {
    			objFpEventContactC = await models.mongoose.fpEventsContactsC.findOne({fp_events_contactsfp_events_ida: fpEventsContactsfpEventsIda});
    		}
    		return objFpEventContactC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFpEventsContactscontactsIdb(fpEventsContactscontactsIdb, query = {}) {
    	try {
    		let objFpEventContactC;
    		if(sql) {
    			objFpEventContactC = await models.sequelize.fpEventsContactsC.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { fp_events_contactscontacts_idb: fpEventsContactscontactsIdb },
    			});
    		} else {
    			objFpEventContactC = await models.mongoose.fpEventsContactsC.findOne({fp_events_contactscontacts_idb: fpEventsContactscontactsIdb});
    		}
    		return objFpEventContactC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByInviteStatus(inviteStatus, query = {}) {
    	try {
    		let objFpEventContactC;
    		if(sql) {
    			objFpEventContactC = await models.sequelize.fpEventsContactsC.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { invite_status: inviteStatus },
    			});
    		} else {
    			objFpEventContactC = await models.mongoose.fpEventsContactsC.findOne({invite_status: inviteStatus});
    		}
    		return objFpEventContactC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAcceptStatus(acceptStatus, query = {}) {
    	try {
    		let objFpEventContactC;
    		if(sql) {
    			objFpEventContactC = await models.sequelize.fpEventsContactsC.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { accept_status: acceptStatus },
    			});
    		} else {
    			objFpEventContactC = await models.mongoose.fpEventsContactsC.findOne({accept_status: acceptStatus});
    		}
    		return objFpEventContactC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objFpEventContactC;
    		if(sql) {
    			objFpEventContactC = await models.sequelize.fpEventsContactsC.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objFpEventContactC = await models.mongoose.fpEventsContactsC.findOne({date_modified: dateModified});
    		}
    		return objFpEventContactC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateFpEventContactCById(id, updateFpEventContactC) {
    	try {
    		let objFpEventContactC;
    		if(sql) {
    			objFpEventContactC = await models.sequelize.fpEventsContactsC.findOne({where: { id: id }});
    			if (objFpEventContactC) {
    				objFpEventContactC = await models.sequelize.fpEventsContactsC.update(updateFpEventContactC, { where: { id: id } });
    			}
    		} else {
    			objFpEventContactC = await models.mongoose.fpEventsContactsC.findOneAndUpdate({id: id}, {$set: updateFpEventContactC}, {new: true});
    		}
    		return objFpEventContactC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventContactCByDeleted(deleted, updateFpEventContactC) {
    	try {
    		let objFpEventContactC;
    		if(sql) {
    			objFpEventContactC = await models.sequelize.fpEventsContactsC.findOne({where: { deleted: deleted }});
    			if (objFpEventContactC) {
    				objFpEventContactC = await models.sequelize.fpEventsContactsC.update(updateFpEventContactC, { where: { deleted: deleted } });
    			}
    		} else {
    			objFpEventContactC = await models.mongoose.fpEventsContactsC.findOneAndUpdate({deleted: deleted}, {$set: updateFpEventContactC}, {new: true});
    		}
    		return objFpEventContactC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventContactCByEmailResponded(emailResponded, updateFpEventContactC) {
    	try {
    		let objFpEventContactC;
    		if(sql) {
    			objFpEventContactC = await models.sequelize.fpEventsContactsC.findOne({where: { email_responded: emailResponded }});
    			if (objFpEventContactC) {
    				objFpEventContactC = await models.sequelize.fpEventsContactsC.update(updateFpEventContactC, { where: { email_responded: emailResponded } });
    			}
    		} else {
    			objFpEventContactC = await models.mongoose.fpEventsContactsC.findOneAndUpdate({email_responded: emailResponded}, {$set: updateFpEventContactC}, {new: true});
    		}
    		return objFpEventContactC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventContactCByFpEventsContactsfpEventsIda(fpEventsContactsfpEventsIda, updateFpEventContactC) {
    	try {
    		let objFpEventContactC;
    		if(sql) {
    			objFpEventContactC = await models.sequelize.fpEventsContactsC.findOne({where: { fp_events_contactsfp_events_ida: fpEventsContactsfpEventsIda }});
    			if (objFpEventContactC) {
    				objFpEventContactC = await models.sequelize.fpEventsContactsC.update(updateFpEventContactC, { where: { fp_events_contactsfp_events_ida: fpEventsContactsfpEventsIda } });
    			}
    		} else {
    			objFpEventContactC = await models.mongoose.fpEventsContactsC.findOneAndUpdate({fp_events_contactsfp_events_ida: fpEventsContactsfpEventsIda}, {$set: updateFpEventContactC}, {new: true});
    		}
    		return objFpEventContactC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventContactCByFpEventsContactscontactsIdb(fpEventsContactscontactsIdb, updateFpEventContactC) {
    	try {
    		let objFpEventContactC;
    		if(sql) {
    			objFpEventContactC = await models.sequelize.fpEventsContactsC.findOne({where: { fp_events_contactscontacts_idb: fpEventsContactscontactsIdb }});
    			if (objFpEventContactC) {
    				objFpEventContactC = await models.sequelize.fpEventsContactsC.update(updateFpEventContactC, { where: { fp_events_contactscontacts_idb: fpEventsContactscontactsIdb } });
    			}
    		} else {
    			objFpEventContactC = await models.mongoose.fpEventsContactsC.findOneAndUpdate({fp_events_contactscontacts_idb: fpEventsContactscontactsIdb}, {$set: updateFpEventContactC}, {new: true});
    		}
    		return objFpEventContactC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventContactCByInviteStatus(inviteStatus, updateFpEventContactC) {
    	try {
    		let objFpEventContactC;
    		if(sql) {
    			objFpEventContactC = await models.sequelize.fpEventsContactsC.findOne({where: { invite_status: inviteStatus }});
    			if (objFpEventContactC) {
    				objFpEventContactC = await models.sequelize.fpEventsContactsC.update(updateFpEventContactC, { where: { invite_status: inviteStatus } });
    			}
    		} else {
    			objFpEventContactC = await models.mongoose.fpEventsContactsC.findOneAndUpdate({invite_status: inviteStatus}, {$set: updateFpEventContactC}, {new: true});
    		}
    		return objFpEventContactC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventContactCByAcceptStatus(acceptStatus, updateFpEventContactC) {
    	try {
    		let objFpEventContactC;
    		if(sql) {
    			objFpEventContactC = await models.sequelize.fpEventsContactsC.findOne({where: { accept_status: acceptStatus }});
    			if (objFpEventContactC) {
    				objFpEventContactC = await models.sequelize.fpEventsContactsC.update(updateFpEventContactC, { where: { accept_status: acceptStatus } });
    			}
    		} else {
    			objFpEventContactC = await models.mongoose.fpEventsContactsC.findOneAndUpdate({accept_status: acceptStatus}, {$set: updateFpEventContactC}, {new: true});
    		}
    		return objFpEventContactC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventContactCByDateModified(dateModified, updateFpEventContactC) {
    	try {
    		let objFpEventContactC;
    		if(sql) {
    			objFpEventContactC = await models.sequelize.fpEventsContactsC.findOne({where: { date_modified: dateModified }});
    			if (objFpEventContactC) {
    				objFpEventContactC = await models.sequelize.fpEventsContactsC.update(updateFpEventContactC, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objFpEventContactC = await models.mongoose.fpEventsContactsC.findOneAndUpdate({date_modified: dateModified}, {$set: updateFpEventContactC}, {new: true});
    		}
    		return objFpEventContactC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = FpEventContactCService;
//</es-section>
