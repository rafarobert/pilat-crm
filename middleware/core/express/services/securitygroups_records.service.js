/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:43 GMT-0400 (Bolivia Time)
 * Time: 14:57:43
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:43 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:43
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

class SecuritygroupRecordService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllSecuritygroupsRecords(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.securitygroupsRecords.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.securitygroupsRecords.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllSecuritygroupsRecords(select = []) {
		try {
			if(sql) {
				return await models.sequelize.securitygroupsRecords.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.securitygroupsRecords.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addSecuritygroupRecord(newSecuritygroupRecord) {
		try {
			let objSecuritygroupRecord;
			if(util.PrimaryKeyTypeIsString(models.sequelize.securitygroupsRecords.primaryKeys.id.type.toString())) {
			    newSecuritygroupRecord.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objSecuritygroupRecord = await models.sequelize.securitygroupsRecords.create(newSecuritygroupRecord);
			} else {
				objSecuritygroupRecord = new models.mongoose.securitygroupsRecords(newSecuritygroupRecord);
				await objSecuritygroupRecord.save();
			}
			return objSecuritygroupRecord;
		} catch (error) {
			throw error;
		}
	}

	static async updateSecuritygroupRecord(id, updateSecuritygroupRecord) {
		try {
			let objSecuritygroupRecord;
			if(sql) {
				objSecuritygroupRecord = await models.sequelize.securitygroupsRecords.findOne({where: { id: util.Char(id) }});
				if (objSecuritygroupRecord) {
					await models.sequelize.securitygroupsRecords.update(updateSecuritygroupRecord, { where: { id: util.Char(id) } });
					objSecuritygroupRecord = await models.sequelize.securitygroupsRecords.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateSecuritygroupRecord._id;
				objSecuritygroupRecord = await models.mongoose.securitygroupsRecords.findOneAndUpdate({id:id}, {$set: updateSecuritygroupRecord}, {new: true});
			}
			return objSecuritygroupRecord;
		} catch (error) {
			throw error;
		}
	}

	static async getASecuritygroupRecord(id, query) {
		try {
			let objSecuritygroupRecord;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objSecuritygroupRecord = await models.sequelize.securitygroupsRecords.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objSecuritygroupRecord = await models.mongoose.securitygroupsRecords.find({id:util.Char(id)}).select(query.select);
			}
			return objSecuritygroupRecord;
		} catch (error) {
			throw error;
		}
	}

	static async deleteSecuritygroupRecord(id) {
		try {
			let objSecuritygroupRecord;
			if(sql) {
				objSecuritygroupRecord = await models.sequelize.securitygroupsRecords.findOne({ where: { id: util.Char(id) } });
				if (objSecuritygroupRecord) {
					await models.sequelize.securitygroupsRecords.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objSecuritygroupRecord = await models.mongoose.securitygroupsRecords.deleteOne({id:util.Char(id)});
			}
			return objSecuritygroupRecord;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objSecuritygroupRecord;
    		if(sql) {
    			objSecuritygroupRecord = await models.sequelize.securitygroupsRecords.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objSecuritygroupRecord = await models.mongoose.securitygroupsRecords.findOne({id: id});
    		}
    		return objSecuritygroupRecord;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objSecuritygroupRecord;
    		if(sql) {
    			objSecuritygroupRecord = await models.sequelize.securitygroupsRecords.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objSecuritygroupRecord = await models.mongoose.securitygroupsRecords.findOne({deleted: deleted});
    		}
    		return objSecuritygroupRecord;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objSecuritygroupRecord;
    		if(sql) {
    			objSecuritygroupRecord = await models.sequelize.securitygroupsRecords.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objSecuritygroupRecord = await models.mongoose.securitygroupsRecords.findOne({date_modified: dateModified});
    		}
    		return objSecuritygroupRecord;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySecuritygroupId(securitygroupId, query = {}) {
    	try {
    		let objSecuritygroupRecord;
    		if(sql) {
    			objSecuritygroupRecord = await models.sequelize.securitygroupsRecords.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { securitygroup_id: securitygroupId },
    			});
    		} else {
    			objSecuritygroupRecord = await models.mongoose.securitygroupsRecords.findOne({securitygroup_id: securitygroupId});
    		}
    		return objSecuritygroupRecord;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRecordId(recordId, query = {}) {
    	try {
    		let objSecuritygroupRecord;
    		if(sql) {
    			objSecuritygroupRecord = await models.sequelize.securitygroupsRecords.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { record_id: recordId },
    			});
    		} else {
    			objSecuritygroupRecord = await models.mongoose.securitygroupsRecords.findOne({record_id: recordId});
    		}
    		return objSecuritygroupRecord;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModule(module, query = {}) {
    	try {
    		let objSecuritygroupRecord;
    		if(sql) {
    			objSecuritygroupRecord = await models.sequelize.securitygroupsRecords.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { module: module },
    			});
    		} else {
    			objSecuritygroupRecord = await models.mongoose.securitygroupsRecords.findOne({module: module});
    		}
    		return objSecuritygroupRecord;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objSecuritygroupRecord;
    		if(sql) {
    			objSecuritygroupRecord = await models.sequelize.securitygroupsRecords.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objSecuritygroupRecord = await models.mongoose.securitygroupsRecords.findOne({modified_user_id: modifiedUserId});
    		}
    		return objSecuritygroupRecord;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objSecuritygroupRecord;
    		if(sql) {
    			objSecuritygroupRecord = await models.sequelize.securitygroupsRecords.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objSecuritygroupRecord = await models.mongoose.securitygroupsRecords.findOne({created_by: createdBy});
    		}
    		return objSecuritygroupRecord;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateSecuritygroupRecordById(id, updateSecuritygroupRecord) {
    	try {
    		let objSecuritygroupRecord;
    		if(sql) {
    			objSecuritygroupRecord = await models.sequelize.securitygroupsRecords.findOne({where: { id: id }});
    			if (objSecuritygroupRecord) {
    				objSecuritygroupRecord = await models.sequelize.securitygroupsRecords.update(updateSecuritygroupRecord, { where: { id: id } });
    			}
    		} else {
    			objSecuritygroupRecord = await models.mongoose.securitygroupsRecords.findOneAndUpdate({id: id}, {$set: updateSecuritygroupRecord}, {new: true});
    		}
    		return objSecuritygroupRecord;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSecuritygroupRecordByDeleted(deleted, updateSecuritygroupRecord) {
    	try {
    		let objSecuritygroupRecord;
    		if(sql) {
    			objSecuritygroupRecord = await models.sequelize.securitygroupsRecords.findOne({where: { deleted: deleted }});
    			if (objSecuritygroupRecord) {
    				objSecuritygroupRecord = await models.sequelize.securitygroupsRecords.update(updateSecuritygroupRecord, { where: { deleted: deleted } });
    			}
    		} else {
    			objSecuritygroupRecord = await models.mongoose.securitygroupsRecords.findOneAndUpdate({deleted: deleted}, {$set: updateSecuritygroupRecord}, {new: true});
    		}
    		return objSecuritygroupRecord;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSecuritygroupRecordByDateModified(dateModified, updateSecuritygroupRecord) {
    	try {
    		let objSecuritygroupRecord;
    		if(sql) {
    			objSecuritygroupRecord = await models.sequelize.securitygroupsRecords.findOne({where: { date_modified: dateModified }});
    			if (objSecuritygroupRecord) {
    				objSecuritygroupRecord = await models.sequelize.securitygroupsRecords.update(updateSecuritygroupRecord, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objSecuritygroupRecord = await models.mongoose.securitygroupsRecords.findOneAndUpdate({date_modified: dateModified}, {$set: updateSecuritygroupRecord}, {new: true});
    		}
    		return objSecuritygroupRecord;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSecuritygroupRecordBySecuritygroupId(securitygroupId, updateSecuritygroupRecord) {
    	try {
    		let objSecuritygroupRecord;
    		if(sql) {
    			objSecuritygroupRecord = await models.sequelize.securitygroupsRecords.findOne({where: { securitygroup_id: securitygroupId }});
    			if (objSecuritygroupRecord) {
    				objSecuritygroupRecord = await models.sequelize.securitygroupsRecords.update(updateSecuritygroupRecord, { where: { securitygroup_id: securitygroupId } });
    			}
    		} else {
    			objSecuritygroupRecord = await models.mongoose.securitygroupsRecords.findOneAndUpdate({securitygroup_id: securitygroupId}, {$set: updateSecuritygroupRecord}, {new: true});
    		}
    		return objSecuritygroupRecord;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSecuritygroupRecordByRecordId(recordId, updateSecuritygroupRecord) {
    	try {
    		let objSecuritygroupRecord;
    		if(sql) {
    			objSecuritygroupRecord = await models.sequelize.securitygroupsRecords.findOne({where: { record_id: recordId }});
    			if (objSecuritygroupRecord) {
    				objSecuritygroupRecord = await models.sequelize.securitygroupsRecords.update(updateSecuritygroupRecord, { where: { record_id: recordId } });
    			}
    		} else {
    			objSecuritygroupRecord = await models.mongoose.securitygroupsRecords.findOneAndUpdate({record_id: recordId}, {$set: updateSecuritygroupRecord}, {new: true});
    		}
    		return objSecuritygroupRecord;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSecuritygroupRecordByModule(module, updateSecuritygroupRecord) {
    	try {
    		let objSecuritygroupRecord;
    		if(sql) {
    			objSecuritygroupRecord = await models.sequelize.securitygroupsRecords.findOne({where: { module: module }});
    			if (objSecuritygroupRecord) {
    				objSecuritygroupRecord = await models.sequelize.securitygroupsRecords.update(updateSecuritygroupRecord, { where: { module: module } });
    			}
    		} else {
    			objSecuritygroupRecord = await models.mongoose.securitygroupsRecords.findOneAndUpdate({module: module}, {$set: updateSecuritygroupRecord}, {new: true});
    		}
    		return objSecuritygroupRecord;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSecuritygroupRecordByModifiedUserId(modifiedUserId, updateSecuritygroupRecord) {
    	try {
    		let objSecuritygroupRecord;
    		if(sql) {
    			objSecuritygroupRecord = await models.sequelize.securitygroupsRecords.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objSecuritygroupRecord) {
    				objSecuritygroupRecord = await models.sequelize.securitygroupsRecords.update(updateSecuritygroupRecord, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objSecuritygroupRecord = await models.mongoose.securitygroupsRecords.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateSecuritygroupRecord}, {new: true});
    		}
    		return objSecuritygroupRecord;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSecuritygroupRecordByCreatedBy(createdBy, updateSecuritygroupRecord) {
    	try {
    		let objSecuritygroupRecord;
    		if(sql) {
    			objSecuritygroupRecord = await models.sequelize.securitygroupsRecords.findOne({where: { created_by: createdBy }});
    			if (objSecuritygroupRecord) {
    				objSecuritygroupRecord = await models.sequelize.securitygroupsRecords.update(updateSecuritygroupRecord, { where: { created_by: createdBy } });
    			}
    		} else {
    			objSecuritygroupRecord = await models.mongoose.securitygroupsRecords.findOneAndUpdate({created_by: createdBy}, {$set: updateSecuritygroupRecord}, {new: true});
    		}
    		return objSecuritygroupRecord;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = SecuritygroupRecordService;
//</es-section>
