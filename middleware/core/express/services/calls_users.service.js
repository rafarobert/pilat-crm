/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:33 GMT-0400 (Bolivia Time)
 * Time: 14:0:33
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:33 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:33
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

class CallUserService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllCallsUsers(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.callsUsers.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.callsUsers.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllCallsUsers(select = []) {
		try {
			if(sql) {
				return await models.sequelize.callsUsers.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.callsUsers.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addCallUser(newCallUser) {
		try {
			let objCallUser;
			if(util.PrimaryKeyTypeIsString(models.sequelize.callsUsers.primaryKeys.id.type.toString())) {
			    newCallUser.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objCallUser = await models.sequelize.callsUsers.create(newCallUser);
			} else {
				objCallUser = new models.mongoose.callsUsers(newCallUser);
				await objCallUser.save();
			}
			return objCallUser;
		} catch (error) {
			throw error;
		}
	}

	static async updateCallUser(id, updateCallUser) {
		try {
			let objCallUser;
			if(sql) {
				objCallUser = await models.sequelize.callsUsers.findOne({where: { id: util.String(id) }});
				if (objCallUser) {
					await models.sequelize.callsUsers.update(updateCallUser, { where: { id: util.String(id) } });
					objCallUser = await models.sequelize.callsUsers.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateCallUser._id;
				objCallUser = await models.mongoose.callsUsers.findOneAndUpdate({id:id}, {$set: updateCallUser}, {new: true});
			}
			return objCallUser;
		} catch (error) {
			throw error;
		}
	}

	static async getACallUser(id, query) {
		try {
			let objCallUser;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objCallUser = await models.sequelize.callsUsers.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objCallUser = await models.mongoose.callsUsers.find({id:util.String(id)}).select(query.select);
			}
			return objCallUser;
		} catch (error) {
			throw error;
		}
	}

	static async deleteCallUser(id) {
		try {
			let objCallUser;
			if(sql) {
				objCallUser = await models.sequelize.callsUsers.findOne({ where: { id: util.String(id) } });
				if (objCallUser) {
					await models.sequelize.callsUsers.destroy({where: { id: util.String(id) }});
				}
			} else {
				objCallUser = await models.mongoose.callsUsers.deleteOne({id:util.String(id)});
			}
			return objCallUser;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objCallUser;
    		if(sql) {
    			objCallUser = await models.sequelize.callsUsers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objCallUser = await models.mongoose.callsUsers.findOne({id: id});
    		}
    		return objCallUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objCallUser;
    		if(sql) {
    			objCallUser = await models.sequelize.callsUsers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objCallUser = await models.mongoose.callsUsers.findOne({deleted: deleted});
    		}
    		return objCallUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCallId(callId, query = {}) {
    	try {
    		let objCallUser;
    		if(sql) {
    			objCallUser = await models.sequelize.callsUsers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { call_id: callId },
    			});
    		} else {
    			objCallUser = await models.mongoose.callsUsers.findOne({call_id: callId});
    		}
    		return objCallUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUserId(userId, query = {}) {
    	try {
    		let objCallUser;
    		if(sql) {
    			objCallUser = await models.sequelize.callsUsers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { user_id: userId },
    			});
    		} else {
    			objCallUser = await models.mongoose.callsUsers.findOne({user_id: userId});
    		}
    		return objCallUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRequired(required, query = {}) {
    	try {
    		let objCallUser;
    		if(sql) {
    			objCallUser = await models.sequelize.callsUsers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { required: required },
    			});
    		} else {
    			objCallUser = await models.mongoose.callsUsers.findOne({required: required});
    		}
    		return objCallUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAcceptStatus(acceptStatus, query = {}) {
    	try {
    		let objCallUser;
    		if(sql) {
    			objCallUser = await models.sequelize.callsUsers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { accept_status: acceptStatus },
    			});
    		} else {
    			objCallUser = await models.mongoose.callsUsers.findOne({accept_status: acceptStatus});
    		}
    		return objCallUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objCallUser;
    		if(sql) {
    			objCallUser = await models.sequelize.callsUsers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objCallUser = await models.mongoose.callsUsers.findOne({date_modified: dateModified});
    		}
    		return objCallUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateCallUserById(id, updateCallUser) {
    	try {
    		let objCallUser;
    		if(sql) {
    			objCallUser = await models.sequelize.callsUsers.findOne({where: { id: id }});
    			if (objCallUser) {
    				objCallUser = await models.sequelize.callsUsers.update(updateCallUser, { where: { id: id } });
    			}
    		} else {
    			objCallUser = await models.mongoose.callsUsers.findOneAndUpdate({id: id}, {$set: updateCallUser}, {new: true});
    		}
    		return objCallUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallUserByDeleted(deleted, updateCallUser) {
    	try {
    		let objCallUser;
    		if(sql) {
    			objCallUser = await models.sequelize.callsUsers.findOne({where: { deleted: deleted }});
    			if (objCallUser) {
    				objCallUser = await models.sequelize.callsUsers.update(updateCallUser, { where: { deleted: deleted } });
    			}
    		} else {
    			objCallUser = await models.mongoose.callsUsers.findOneAndUpdate({deleted: deleted}, {$set: updateCallUser}, {new: true});
    		}
    		return objCallUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallUserByCallId(callId, updateCallUser) {
    	try {
    		let objCallUser;
    		if(sql) {
    			objCallUser = await models.sequelize.callsUsers.findOne({where: { call_id: callId }});
    			if (objCallUser) {
    				objCallUser = await models.sequelize.callsUsers.update(updateCallUser, { where: { call_id: callId } });
    			}
    		} else {
    			objCallUser = await models.mongoose.callsUsers.findOneAndUpdate({call_id: callId}, {$set: updateCallUser}, {new: true});
    		}
    		return objCallUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallUserByUserId(userId, updateCallUser) {
    	try {
    		let objCallUser;
    		if(sql) {
    			objCallUser = await models.sequelize.callsUsers.findOne({where: { user_id: userId }});
    			if (objCallUser) {
    				objCallUser = await models.sequelize.callsUsers.update(updateCallUser, { where: { user_id: userId } });
    			}
    		} else {
    			objCallUser = await models.mongoose.callsUsers.findOneAndUpdate({user_id: userId}, {$set: updateCallUser}, {new: true});
    		}
    		return objCallUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallUserByRequired(required, updateCallUser) {
    	try {
    		let objCallUser;
    		if(sql) {
    			objCallUser = await models.sequelize.callsUsers.findOne({where: { required: required }});
    			if (objCallUser) {
    				objCallUser = await models.sequelize.callsUsers.update(updateCallUser, { where: { required: required } });
    			}
    		} else {
    			objCallUser = await models.mongoose.callsUsers.findOneAndUpdate({required: required}, {$set: updateCallUser}, {new: true});
    		}
    		return objCallUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallUserByAcceptStatus(acceptStatus, updateCallUser) {
    	try {
    		let objCallUser;
    		if(sql) {
    			objCallUser = await models.sequelize.callsUsers.findOne({where: { accept_status: acceptStatus }});
    			if (objCallUser) {
    				objCallUser = await models.sequelize.callsUsers.update(updateCallUser, { where: { accept_status: acceptStatus } });
    			}
    		} else {
    			objCallUser = await models.mongoose.callsUsers.findOneAndUpdate({accept_status: acceptStatus}, {$set: updateCallUser}, {new: true});
    		}
    		return objCallUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallUserByDateModified(dateModified, updateCallUser) {
    	try {
    		let objCallUser;
    		if(sql) {
    			objCallUser = await models.sequelize.callsUsers.findOne({where: { date_modified: dateModified }});
    			if (objCallUser) {
    				objCallUser = await models.sequelize.callsUsers.update(updateCallUser, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objCallUser = await models.mongoose.callsUsers.findOneAndUpdate({date_modified: dateModified}, {$set: updateCallUser}, {new: true});
    		}
    		return objCallUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = CallUserService;
//</es-section>
