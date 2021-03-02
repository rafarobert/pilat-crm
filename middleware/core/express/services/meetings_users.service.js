/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:10 GMT-0400 (Bolivia Time)
 * Time: 14:1:10
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:10 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:10
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

class MeetingUserService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllMeetingsUsers(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.meetingsUsers.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.meetingsUsers.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllMeetingsUsers(select = []) {
		try {
			if(sql) {
				return await models.sequelize.meetingsUsers.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.meetingsUsers.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addMeetingUser(newMeetingUser) {
		try {
			let objMeetingUser;
			if(util.PrimaryKeyTypeIsString(models.sequelize.meetingsUsers.primaryKeys.id.type.toString())) {
			    newMeetingUser.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objMeetingUser = await models.sequelize.meetingsUsers.create(newMeetingUser);
			} else {
				objMeetingUser = new models.mongoose.meetingsUsers(newMeetingUser);
				await objMeetingUser.save();
			}
			return objMeetingUser;
		} catch (error) {
			throw error;
		}
	}

	static async updateMeetingUser(id, updateMeetingUser) {
		try {
			let objMeetingUser;
			if(sql) {
				objMeetingUser = await models.sequelize.meetingsUsers.findOne({where: { id: util.String(id) }});
				if (objMeetingUser) {
					await models.sequelize.meetingsUsers.update(updateMeetingUser, { where: { id: util.String(id) } });
					objMeetingUser = await models.sequelize.meetingsUsers.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateMeetingUser._id;
				objMeetingUser = await models.mongoose.meetingsUsers.findOneAndUpdate({id:id}, {$set: updateMeetingUser}, {new: true});
			}
			return objMeetingUser;
		} catch (error) {
			throw error;
		}
	}

	static async getAMeetingUser(id, query) {
		try {
			let objMeetingUser;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objMeetingUser = await models.sequelize.meetingsUsers.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objMeetingUser = await models.mongoose.meetingsUsers.find({id:util.String(id)}).select(query.select);
			}
			return objMeetingUser;
		} catch (error) {
			throw error;
		}
	}

	static async deleteMeetingUser(id) {
		try {
			let objMeetingUser;
			if(sql) {
				objMeetingUser = await models.sequelize.meetingsUsers.findOne({ where: { id: util.String(id) } });
				if (objMeetingUser) {
					await models.sequelize.meetingsUsers.destroy({where: { id: util.String(id) }});
				}
			} else {
				objMeetingUser = await models.mongoose.meetingsUsers.deleteOne({id:util.String(id)});
			}
			return objMeetingUser;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objMeetingUser;
    		if(sql) {
    			objMeetingUser = await models.sequelize.meetingsUsers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objMeetingUser = await models.mongoose.meetingsUsers.findOne({id: id});
    		}
    		return objMeetingUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objMeetingUser;
    		if(sql) {
    			objMeetingUser = await models.sequelize.meetingsUsers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objMeetingUser = await models.mongoose.meetingsUsers.findOne({deleted: deleted});
    		}
    		return objMeetingUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMeetingId(meetingId, query = {}) {
    	try {
    		let objMeetingUser;
    		if(sql) {
    			objMeetingUser = await models.sequelize.meetingsUsers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { meeting_id: meetingId },
    			});
    		} else {
    			objMeetingUser = await models.mongoose.meetingsUsers.findOne({meeting_id: meetingId});
    		}
    		return objMeetingUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUserId(userId, query = {}) {
    	try {
    		let objMeetingUser;
    		if(sql) {
    			objMeetingUser = await models.sequelize.meetingsUsers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { user_id: userId },
    			});
    		} else {
    			objMeetingUser = await models.mongoose.meetingsUsers.findOne({user_id: userId});
    		}
    		return objMeetingUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRequired(required, query = {}) {
    	try {
    		let objMeetingUser;
    		if(sql) {
    			objMeetingUser = await models.sequelize.meetingsUsers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { required: required },
    			});
    		} else {
    			objMeetingUser = await models.mongoose.meetingsUsers.findOne({required: required});
    		}
    		return objMeetingUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAcceptStatus(acceptStatus, query = {}) {
    	try {
    		let objMeetingUser;
    		if(sql) {
    			objMeetingUser = await models.sequelize.meetingsUsers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { accept_status: acceptStatus },
    			});
    		} else {
    			objMeetingUser = await models.mongoose.meetingsUsers.findOne({accept_status: acceptStatus});
    		}
    		return objMeetingUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objMeetingUser;
    		if(sql) {
    			objMeetingUser = await models.sequelize.meetingsUsers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objMeetingUser = await models.mongoose.meetingsUsers.findOne({date_modified: dateModified});
    		}
    		return objMeetingUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateMeetingUserById(id, updateMeetingUser) {
    	try {
    		let objMeetingUser;
    		if(sql) {
    			objMeetingUser = await models.sequelize.meetingsUsers.findOne({where: { id: id }});
    			if (objMeetingUser) {
    				objMeetingUser = await models.sequelize.meetingsUsers.update(updateMeetingUser, { where: { id: id } });
    			}
    		} else {
    			objMeetingUser = await models.mongoose.meetingsUsers.findOneAndUpdate({id: id}, {$set: updateMeetingUser}, {new: true});
    		}
    		return objMeetingUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingUserByDeleted(deleted, updateMeetingUser) {
    	try {
    		let objMeetingUser;
    		if(sql) {
    			objMeetingUser = await models.sequelize.meetingsUsers.findOne({where: { deleted: deleted }});
    			if (objMeetingUser) {
    				objMeetingUser = await models.sequelize.meetingsUsers.update(updateMeetingUser, { where: { deleted: deleted } });
    			}
    		} else {
    			objMeetingUser = await models.mongoose.meetingsUsers.findOneAndUpdate({deleted: deleted}, {$set: updateMeetingUser}, {new: true});
    		}
    		return objMeetingUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingUserByMeetingId(meetingId, updateMeetingUser) {
    	try {
    		let objMeetingUser;
    		if(sql) {
    			objMeetingUser = await models.sequelize.meetingsUsers.findOne({where: { meeting_id: meetingId }});
    			if (objMeetingUser) {
    				objMeetingUser = await models.sequelize.meetingsUsers.update(updateMeetingUser, { where: { meeting_id: meetingId } });
    			}
    		} else {
    			objMeetingUser = await models.mongoose.meetingsUsers.findOneAndUpdate({meeting_id: meetingId}, {$set: updateMeetingUser}, {new: true});
    		}
    		return objMeetingUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingUserByUserId(userId, updateMeetingUser) {
    	try {
    		let objMeetingUser;
    		if(sql) {
    			objMeetingUser = await models.sequelize.meetingsUsers.findOne({where: { user_id: userId }});
    			if (objMeetingUser) {
    				objMeetingUser = await models.sequelize.meetingsUsers.update(updateMeetingUser, { where: { user_id: userId } });
    			}
    		} else {
    			objMeetingUser = await models.mongoose.meetingsUsers.findOneAndUpdate({user_id: userId}, {$set: updateMeetingUser}, {new: true});
    		}
    		return objMeetingUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingUserByRequired(required, updateMeetingUser) {
    	try {
    		let objMeetingUser;
    		if(sql) {
    			objMeetingUser = await models.sequelize.meetingsUsers.findOne({where: { required: required }});
    			if (objMeetingUser) {
    				objMeetingUser = await models.sequelize.meetingsUsers.update(updateMeetingUser, { where: { required: required } });
    			}
    		} else {
    			objMeetingUser = await models.mongoose.meetingsUsers.findOneAndUpdate({required: required}, {$set: updateMeetingUser}, {new: true});
    		}
    		return objMeetingUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingUserByAcceptStatus(acceptStatus, updateMeetingUser) {
    	try {
    		let objMeetingUser;
    		if(sql) {
    			objMeetingUser = await models.sequelize.meetingsUsers.findOne({where: { accept_status: acceptStatus }});
    			if (objMeetingUser) {
    				objMeetingUser = await models.sequelize.meetingsUsers.update(updateMeetingUser, { where: { accept_status: acceptStatus } });
    			}
    		} else {
    			objMeetingUser = await models.mongoose.meetingsUsers.findOneAndUpdate({accept_status: acceptStatus}, {$set: updateMeetingUser}, {new: true});
    		}
    		return objMeetingUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingUserByDateModified(dateModified, updateMeetingUser) {
    	try {
    		let objMeetingUser;
    		if(sql) {
    			objMeetingUser = await models.sequelize.meetingsUsers.findOne({where: { date_modified: dateModified }});
    			if (objMeetingUser) {
    				objMeetingUser = await models.sequelize.meetingsUsers.update(updateMeetingUser, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objMeetingUser = await models.mongoose.meetingsUsers.findOneAndUpdate({date_modified: dateModified}, {$set: updateMeetingUser}, {new: true});
    		}
    		return objMeetingUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = MeetingUserService;
//</es-section>
