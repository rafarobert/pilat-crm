/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:29 GMT-0400 (Bolivia Time)
 * Time: 14:1:29
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:29 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:29
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

class SecuritygroupService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllSecuritygroups(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.securitygroups.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.securitygroups.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllSecuritygroups(select = []) {
		try {
			if(sql) {
				return await models.sequelize.securitygroups.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.securitygroups.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addSecuritygroup(newSecuritygroup) {
		try {
			let objSecuritygroup;
			if(util.PrimaryKeyTypeIsString(models.sequelize.securitygroups.primaryKeys.id.type.toString())) {
			    newSecuritygroup.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objSecuritygroup = await models.sequelize.securitygroups.create(newSecuritygroup);
			} else {
				objSecuritygroup = new models.mongoose.securitygroups(newSecuritygroup);
				await objSecuritygroup.save();
			}
			return objSecuritygroup;
		} catch (error) {
			throw error;
		}
	}

	static async updateSecuritygroup(id, updateSecuritygroup) {
		try {
			let objSecuritygroup;
			if(sql) {
				objSecuritygroup = await models.sequelize.securitygroups.findOne({where: { id: util.Char(id) }});
				if (objSecuritygroup) {
					await models.sequelize.securitygroups.update(updateSecuritygroup, { where: { id: util.Char(id) } });
					objSecuritygroup = await models.sequelize.securitygroups.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateSecuritygroup._id;
				objSecuritygroup = await models.mongoose.securitygroups.findOneAndUpdate({id:id}, {$set: updateSecuritygroup}, {new: true});
			}
			return objSecuritygroup;
		} catch (error) {
			throw error;
		}
	}

	static async getASecuritygroup(id, query) {
		try {
			let objSecuritygroup;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objSecuritygroup = await models.sequelize.securitygroups.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objSecuritygroup = await models.mongoose.securitygroups.find({id:util.Char(id)}).select(query.select);
			}
			return objSecuritygroup;
		} catch (error) {
			throw error;
		}
	}

	static async deleteSecuritygroup(id) {
		try {
			let objSecuritygroup;
			if(sql) {
				objSecuritygroup = await models.sequelize.securitygroups.findOne({ where: { id: util.Char(id) } });
				if (objSecuritygroup) {
					await models.sequelize.securitygroups.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objSecuritygroup = await models.mongoose.securitygroups.deleteOne({id:util.Char(id)});
			}
			return objSecuritygroup;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objSecuritygroup;
    		if(sql) {
    			objSecuritygroup = await models.sequelize.securitygroups.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objSecuritygroup = await models.mongoose.securitygroups.findOne({id: id});
    		}
    		return objSecuritygroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objSecuritygroup;
    		if(sql) {
    			objSecuritygroup = await models.sequelize.securitygroups.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objSecuritygroup = await models.mongoose.securitygroups.findOne({deleted: deleted});
    		}
    		return objSecuritygroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByNoninheritable(noninheritable, query = {}) {
    	try {
    		let objSecuritygroup;
    		if(sql) {
    			objSecuritygroup = await models.sequelize.securitygroups.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { noninheritable: noninheritable },
    			});
    		} else {
    			objSecuritygroup = await models.mongoose.securitygroups.findOne({noninheritable: noninheritable});
    		}
    		return objSecuritygroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objSecuritygroup;
    		if(sql) {
    			objSecuritygroup = await models.sequelize.securitygroups.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objSecuritygroup = await models.mongoose.securitygroups.findOne({name: name});
    		}
    		return objSecuritygroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objSecuritygroup;
    		if(sql) {
    			objSecuritygroup = await models.sequelize.securitygroups.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objSecuritygroup = await models.mongoose.securitygroups.findOne({description: description});
    		}
    		return objSecuritygroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objSecuritygroup;
    		if(sql) {
    			objSecuritygroup = await models.sequelize.securitygroups.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objSecuritygroup = await models.mongoose.securitygroups.findOne({date_entered: dateEntered});
    		}
    		return objSecuritygroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objSecuritygroup;
    		if(sql) {
    			objSecuritygroup = await models.sequelize.securitygroups.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objSecuritygroup = await models.mongoose.securitygroups.findOne({date_modified: dateModified});
    		}
    		return objSecuritygroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objSecuritygroup;
    		if(sql) {
    			objSecuritygroup = await models.sequelize.securitygroups.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objSecuritygroup = await models.mongoose.securitygroups.findOne({modified_user_id: modifiedUserId});
    		}
    		return objSecuritygroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objSecuritygroup;
    		if(sql) {
    			objSecuritygroup = await models.sequelize.securitygroups.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objSecuritygroup = await models.mongoose.securitygroups.findOne({created_by: createdBy});
    		}
    		return objSecuritygroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objSecuritygroup;
    		if(sql) {
    			objSecuritygroup = await models.sequelize.securitygroups.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objSecuritygroup = await models.mongoose.securitygroups.findOne({assigned_user_id: assignedUserId});
    		}
    		return objSecuritygroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateSecuritygroupById(id, updateSecuritygroup) {
    	try {
    		let objSecuritygroup;
    		if(sql) {
    			objSecuritygroup = await models.sequelize.securitygroups.findOne({where: { id: id }});
    			if (objSecuritygroup) {
    				objSecuritygroup = await models.sequelize.securitygroups.update(updateSecuritygroup, { where: { id: id } });
    			}
    		} else {
    			objSecuritygroup = await models.mongoose.securitygroups.findOneAndUpdate({id: id}, {$set: updateSecuritygroup}, {new: true});
    		}
    		return objSecuritygroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSecuritygroupByDeleted(deleted, updateSecuritygroup) {
    	try {
    		let objSecuritygroup;
    		if(sql) {
    			objSecuritygroup = await models.sequelize.securitygroups.findOne({where: { deleted: deleted }});
    			if (objSecuritygroup) {
    				objSecuritygroup = await models.sequelize.securitygroups.update(updateSecuritygroup, { where: { deleted: deleted } });
    			}
    		} else {
    			objSecuritygroup = await models.mongoose.securitygroups.findOneAndUpdate({deleted: deleted}, {$set: updateSecuritygroup}, {new: true});
    		}
    		return objSecuritygroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSecuritygroupByNoninheritable(noninheritable, updateSecuritygroup) {
    	try {
    		let objSecuritygroup;
    		if(sql) {
    			objSecuritygroup = await models.sequelize.securitygroups.findOne({where: { noninheritable: noninheritable }});
    			if (objSecuritygroup) {
    				objSecuritygroup = await models.sequelize.securitygroups.update(updateSecuritygroup, { where: { noninheritable: noninheritable } });
    			}
    		} else {
    			objSecuritygroup = await models.mongoose.securitygroups.findOneAndUpdate({noninheritable: noninheritable}, {$set: updateSecuritygroup}, {new: true});
    		}
    		return objSecuritygroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSecuritygroupByName(name, updateSecuritygroup) {
    	try {
    		let objSecuritygroup;
    		if(sql) {
    			objSecuritygroup = await models.sequelize.securitygroups.findOne({where: { name: name }});
    			if (objSecuritygroup) {
    				objSecuritygroup = await models.sequelize.securitygroups.update(updateSecuritygroup, { where: { name: name } });
    			}
    		} else {
    			objSecuritygroup = await models.mongoose.securitygroups.findOneAndUpdate({name: name}, {$set: updateSecuritygroup}, {new: true});
    		}
    		return objSecuritygroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSecuritygroupByDescription(description, updateSecuritygroup) {
    	try {
    		let objSecuritygroup;
    		if(sql) {
    			objSecuritygroup = await models.sequelize.securitygroups.findOne({where: { description: description }});
    			if (objSecuritygroup) {
    				objSecuritygroup = await models.sequelize.securitygroups.update(updateSecuritygroup, { where: { description: description } });
    			}
    		} else {
    			objSecuritygroup = await models.mongoose.securitygroups.findOneAndUpdate({description: description}, {$set: updateSecuritygroup}, {new: true});
    		}
    		return objSecuritygroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSecuritygroupByDateEntered(dateEntered, updateSecuritygroup) {
    	try {
    		let objSecuritygroup;
    		if(sql) {
    			objSecuritygroup = await models.sequelize.securitygroups.findOne({where: { date_entered: dateEntered }});
    			if (objSecuritygroup) {
    				objSecuritygroup = await models.sequelize.securitygroups.update(updateSecuritygroup, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objSecuritygroup = await models.mongoose.securitygroups.findOneAndUpdate({date_entered: dateEntered}, {$set: updateSecuritygroup}, {new: true});
    		}
    		return objSecuritygroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSecuritygroupByDateModified(dateModified, updateSecuritygroup) {
    	try {
    		let objSecuritygroup;
    		if(sql) {
    			objSecuritygroup = await models.sequelize.securitygroups.findOne({where: { date_modified: dateModified }});
    			if (objSecuritygroup) {
    				objSecuritygroup = await models.sequelize.securitygroups.update(updateSecuritygroup, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objSecuritygroup = await models.mongoose.securitygroups.findOneAndUpdate({date_modified: dateModified}, {$set: updateSecuritygroup}, {new: true});
    		}
    		return objSecuritygroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSecuritygroupByModifiedUserId(modifiedUserId, updateSecuritygroup) {
    	try {
    		let objSecuritygroup;
    		if(sql) {
    			objSecuritygroup = await models.sequelize.securitygroups.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objSecuritygroup) {
    				objSecuritygroup = await models.sequelize.securitygroups.update(updateSecuritygroup, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objSecuritygroup = await models.mongoose.securitygroups.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateSecuritygroup}, {new: true});
    		}
    		return objSecuritygroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSecuritygroupByCreatedBy(createdBy, updateSecuritygroup) {
    	try {
    		let objSecuritygroup;
    		if(sql) {
    			objSecuritygroup = await models.sequelize.securitygroups.findOne({where: { created_by: createdBy }});
    			if (objSecuritygroup) {
    				objSecuritygroup = await models.sequelize.securitygroups.update(updateSecuritygroup, { where: { created_by: createdBy } });
    			}
    		} else {
    			objSecuritygroup = await models.mongoose.securitygroups.findOneAndUpdate({created_by: createdBy}, {$set: updateSecuritygroup}, {new: true});
    		}
    		return objSecuritygroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSecuritygroupByAssignedUserId(assignedUserId, updateSecuritygroup) {
    	try {
    		let objSecuritygroup;
    		if(sql) {
    			objSecuritygroup = await models.sequelize.securitygroups.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objSecuritygroup) {
    				objSecuritygroup = await models.sequelize.securitygroups.update(updateSecuritygroup, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objSecuritygroup = await models.mongoose.securitygroups.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateSecuritygroup}, {new: true});
    		}
    		return objSecuritygroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = SecuritygroupService;
//</es-section>
