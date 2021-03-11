/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:18 GMT-0400 (Bolivia Time)
 * Time: 14:57:18
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:18 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:18
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

class Oauth2clientService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllOauth2clients(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.oauth2clients.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.oauth2clients.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllOauth2clients(select = []) {
		try {
			if(sql) {
				return await models.sequelize.oauth2clients.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.oauth2clients.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addOauth2client(newOauth2client) {
		try {
			let objOauth2client;
			if(util.PrimaryKeyTypeIsString(models.sequelize.oauth2clients.primaryKeys.id.type.toString())) {
			    newOauth2client.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objOauth2client = await models.sequelize.oauth2clients.create(newOauth2client);
			} else {
				objOauth2client = new models.mongoose.oauth2clients(newOauth2client);
				await objOauth2client.save();
			}
			return objOauth2client;
		} catch (error) {
			throw error;
		}
	}

	static async updateOauth2client(id, updateOauth2client) {
		try {
			let objOauth2client;
			if(sql) {
				objOauth2client = await models.sequelize.oauth2clients.findOne({where: { id: util.Char(id) }});
				if (objOauth2client) {
					await models.sequelize.oauth2clients.update(updateOauth2client, { where: { id: util.Char(id) } });
					objOauth2client = await models.sequelize.oauth2clients.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateOauth2client._id;
				objOauth2client = await models.mongoose.oauth2clients.findOneAndUpdate({id:id}, {$set: updateOauth2client}, {new: true});
			}
			return objOauth2client;
		} catch (error) {
			throw error;
		}
	}

	static async getAOauth2client(id, query) {
		try {
			let objOauth2client;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objOauth2client = await models.sequelize.oauth2clients.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objOauth2client = await models.mongoose.oauth2clients.find({id:util.Char(id)}).select(query.select);
			}
			return objOauth2client;
		} catch (error) {
			throw error;
		}
	}

	static async deleteOauth2client(id) {
		try {
			let objOauth2client;
			if(sql) {
				objOauth2client = await models.sequelize.oauth2clients.findOne({ where: { id: util.Char(id) } });
				if (objOauth2client) {
					await models.sequelize.oauth2clients.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objOauth2client = await models.mongoose.oauth2clients.deleteOne({id:util.Char(id)});
			}
			return objOauth2client;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objOauth2client;
    		if(sql) {
    			objOauth2client = await models.sequelize.oauth2clients.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objOauth2client = await models.mongoose.oauth2clients.findOne({id: id});
    		}
    		return objOauth2client;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objOauth2client;
    		if(sql) {
    			objOauth2client = await models.sequelize.oauth2clients.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objOauth2client = await models.mongoose.oauth2clients.findOne({deleted: deleted});
    		}
    		return objOauth2client;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByIsConfidential(isConfidential, query = {}) {
    	try {
    		let objOauth2client;
    		if(sql) {
    			objOauth2client = await models.sequelize.oauth2clients.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { is_confidential: isConfidential },
    			});
    		} else {
    			objOauth2client = await models.mongoose.oauth2clients.findOne({is_confidential: isConfidential});
    		}
    		return objOauth2client;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDurationValue(durationValue, query = {}) {
    	try {
    		let objOauth2client;
    		if(sql) {
    			objOauth2client = await models.sequelize.oauth2clients.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { duration_value: durationValue },
    			});
    		} else {
    			objOauth2client = await models.mongoose.oauth2clients.findOne({duration_value: durationValue});
    		}
    		return objOauth2client;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDurationAmount(durationAmount, query = {}) {
    	try {
    		let objOauth2client;
    		if(sql) {
    			objOauth2client = await models.sequelize.oauth2clients.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { duration_amount: durationAmount },
    			});
    		} else {
    			objOauth2client = await models.mongoose.oauth2clients.findOne({duration_amount: durationAmount});
    		}
    		return objOauth2client;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objOauth2client;
    		if(sql) {
    			objOauth2client = await models.sequelize.oauth2clients.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objOauth2client = await models.mongoose.oauth2clients.findOne({name: name});
    		}
    		return objOauth2client;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySecret(secret, query = {}) {
    	try {
    		let objOauth2client;
    		if(sql) {
    			objOauth2client = await models.sequelize.oauth2clients.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { secret: secret },
    			});
    		} else {
    			objOauth2client = await models.mongoose.oauth2clients.findOne({secret: secret});
    		}
    		return objOauth2client;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRedirectUrl(redirectUrl, query = {}) {
    	try {
    		let objOauth2client;
    		if(sql) {
    			objOauth2client = await models.sequelize.oauth2clients.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { redirect_url: redirectUrl },
    			});
    		} else {
    			objOauth2client = await models.mongoose.oauth2clients.findOne({redirect_url: redirectUrl});
    		}
    		return objOauth2client;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAllowedGrantType(allowedGrantType, query = {}) {
    	try {
    		let objOauth2client;
    		if(sql) {
    			objOauth2client = await models.sequelize.oauth2clients.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { allowed_grant_type: allowedGrantType },
    			});
    		} else {
    			objOauth2client = await models.mongoose.oauth2clients.findOne({allowed_grant_type: allowedGrantType});
    		}
    		return objOauth2client;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDurationUnit(durationUnit, query = {}) {
    	try {
    		let objOauth2client;
    		if(sql) {
    			objOauth2client = await models.sequelize.oauth2clients.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { duration_unit: durationUnit },
    			});
    		} else {
    			objOauth2client = await models.mongoose.oauth2clients.findOne({duration_unit: durationUnit});
    		}
    		return objOauth2client;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objOauth2client;
    		if(sql) {
    			objOauth2client = await models.sequelize.oauth2clients.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objOauth2client = await models.mongoose.oauth2clients.findOne({description: description});
    		}
    		return objOauth2client;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objOauth2client;
    		if(sql) {
    			objOauth2client = await models.sequelize.oauth2clients.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objOauth2client = await models.mongoose.oauth2clients.findOne({date_entered: dateEntered});
    		}
    		return objOauth2client;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objOauth2client;
    		if(sql) {
    			objOauth2client = await models.sequelize.oauth2clients.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objOauth2client = await models.mongoose.oauth2clients.findOne({date_modified: dateModified});
    		}
    		return objOauth2client;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objOauth2client;
    		if(sql) {
    			objOauth2client = await models.sequelize.oauth2clients.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objOauth2client = await models.mongoose.oauth2clients.findOne({modified_user_id: modifiedUserId});
    		}
    		return objOauth2client;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objOauth2client;
    		if(sql) {
    			objOauth2client = await models.sequelize.oauth2clients.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objOauth2client = await models.mongoose.oauth2clients.findOne({created_by: createdBy});
    		}
    		return objOauth2client;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objOauth2client;
    		if(sql) {
    			objOauth2client = await models.sequelize.oauth2clients.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objOauth2client = await models.mongoose.oauth2clients.findOne({assigned_user_id: assignedUserId});
    		}
    		return objOauth2client;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateOauth2clientById(id, updateOauth2client) {
    	try {
    		let objOauth2client;
    		if(sql) {
    			objOauth2client = await models.sequelize.oauth2clients.findOne({where: { id: id }});
    			if (objOauth2client) {
    				objOauth2client = await models.sequelize.oauth2clients.update(updateOauth2client, { where: { id: id } });
    			}
    		} else {
    			objOauth2client = await models.mongoose.oauth2clients.findOneAndUpdate({id: id}, {$set: updateOauth2client}, {new: true});
    		}
    		return objOauth2client;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauth2clientByDeleted(deleted, updateOauth2client) {
    	try {
    		let objOauth2client;
    		if(sql) {
    			objOauth2client = await models.sequelize.oauth2clients.findOne({where: { deleted: deleted }});
    			if (objOauth2client) {
    				objOauth2client = await models.sequelize.oauth2clients.update(updateOauth2client, { where: { deleted: deleted } });
    			}
    		} else {
    			objOauth2client = await models.mongoose.oauth2clients.findOneAndUpdate({deleted: deleted}, {$set: updateOauth2client}, {new: true});
    		}
    		return objOauth2client;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauth2clientByIsConfidential(isConfidential, updateOauth2client) {
    	try {
    		let objOauth2client;
    		if(sql) {
    			objOauth2client = await models.sequelize.oauth2clients.findOne({where: { is_confidential: isConfidential }});
    			if (objOauth2client) {
    				objOauth2client = await models.sequelize.oauth2clients.update(updateOauth2client, { where: { is_confidential: isConfidential } });
    			}
    		} else {
    			objOauth2client = await models.mongoose.oauth2clients.findOneAndUpdate({is_confidential: isConfidential}, {$set: updateOauth2client}, {new: true});
    		}
    		return objOauth2client;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauth2clientByDurationValue(durationValue, updateOauth2client) {
    	try {
    		let objOauth2client;
    		if(sql) {
    			objOauth2client = await models.sequelize.oauth2clients.findOne({where: { duration_value: durationValue }});
    			if (objOauth2client) {
    				objOauth2client = await models.sequelize.oauth2clients.update(updateOauth2client, { where: { duration_value: durationValue } });
    			}
    		} else {
    			objOauth2client = await models.mongoose.oauth2clients.findOneAndUpdate({duration_value: durationValue}, {$set: updateOauth2client}, {new: true});
    		}
    		return objOauth2client;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauth2clientByDurationAmount(durationAmount, updateOauth2client) {
    	try {
    		let objOauth2client;
    		if(sql) {
    			objOauth2client = await models.sequelize.oauth2clients.findOne({where: { duration_amount: durationAmount }});
    			if (objOauth2client) {
    				objOauth2client = await models.sequelize.oauth2clients.update(updateOauth2client, { where: { duration_amount: durationAmount } });
    			}
    		} else {
    			objOauth2client = await models.mongoose.oauth2clients.findOneAndUpdate({duration_amount: durationAmount}, {$set: updateOauth2client}, {new: true});
    		}
    		return objOauth2client;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauth2clientByName(name, updateOauth2client) {
    	try {
    		let objOauth2client;
    		if(sql) {
    			objOauth2client = await models.sequelize.oauth2clients.findOne({where: { name: name }});
    			if (objOauth2client) {
    				objOauth2client = await models.sequelize.oauth2clients.update(updateOauth2client, { where: { name: name } });
    			}
    		} else {
    			objOauth2client = await models.mongoose.oauth2clients.findOneAndUpdate({name: name}, {$set: updateOauth2client}, {new: true});
    		}
    		return objOauth2client;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauth2clientBySecret(secret, updateOauth2client) {
    	try {
    		let objOauth2client;
    		if(sql) {
    			objOauth2client = await models.sequelize.oauth2clients.findOne({where: { secret: secret }});
    			if (objOauth2client) {
    				objOauth2client = await models.sequelize.oauth2clients.update(updateOauth2client, { where: { secret: secret } });
    			}
    		} else {
    			objOauth2client = await models.mongoose.oauth2clients.findOneAndUpdate({secret: secret}, {$set: updateOauth2client}, {new: true});
    		}
    		return objOauth2client;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauth2clientByRedirectUrl(redirectUrl, updateOauth2client) {
    	try {
    		let objOauth2client;
    		if(sql) {
    			objOauth2client = await models.sequelize.oauth2clients.findOne({where: { redirect_url: redirectUrl }});
    			if (objOauth2client) {
    				objOauth2client = await models.sequelize.oauth2clients.update(updateOauth2client, { where: { redirect_url: redirectUrl } });
    			}
    		} else {
    			objOauth2client = await models.mongoose.oauth2clients.findOneAndUpdate({redirect_url: redirectUrl}, {$set: updateOauth2client}, {new: true});
    		}
    		return objOauth2client;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauth2clientByAllowedGrantType(allowedGrantType, updateOauth2client) {
    	try {
    		let objOauth2client;
    		if(sql) {
    			objOauth2client = await models.sequelize.oauth2clients.findOne({where: { allowed_grant_type: allowedGrantType }});
    			if (objOauth2client) {
    				objOauth2client = await models.sequelize.oauth2clients.update(updateOauth2client, { where: { allowed_grant_type: allowedGrantType } });
    			}
    		} else {
    			objOauth2client = await models.mongoose.oauth2clients.findOneAndUpdate({allowed_grant_type: allowedGrantType}, {$set: updateOauth2client}, {new: true});
    		}
    		return objOauth2client;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauth2clientByDurationUnit(durationUnit, updateOauth2client) {
    	try {
    		let objOauth2client;
    		if(sql) {
    			objOauth2client = await models.sequelize.oauth2clients.findOne({where: { duration_unit: durationUnit }});
    			if (objOauth2client) {
    				objOauth2client = await models.sequelize.oauth2clients.update(updateOauth2client, { where: { duration_unit: durationUnit } });
    			}
    		} else {
    			objOauth2client = await models.mongoose.oauth2clients.findOneAndUpdate({duration_unit: durationUnit}, {$set: updateOauth2client}, {new: true});
    		}
    		return objOauth2client;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauth2clientByDescription(description, updateOauth2client) {
    	try {
    		let objOauth2client;
    		if(sql) {
    			objOauth2client = await models.sequelize.oauth2clients.findOne({where: { description: description }});
    			if (objOauth2client) {
    				objOauth2client = await models.sequelize.oauth2clients.update(updateOauth2client, { where: { description: description } });
    			}
    		} else {
    			objOauth2client = await models.mongoose.oauth2clients.findOneAndUpdate({description: description}, {$set: updateOauth2client}, {new: true});
    		}
    		return objOauth2client;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauth2clientByDateEntered(dateEntered, updateOauth2client) {
    	try {
    		let objOauth2client;
    		if(sql) {
    			objOauth2client = await models.sequelize.oauth2clients.findOne({where: { date_entered: dateEntered }});
    			if (objOauth2client) {
    				objOauth2client = await models.sequelize.oauth2clients.update(updateOauth2client, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objOauth2client = await models.mongoose.oauth2clients.findOneAndUpdate({date_entered: dateEntered}, {$set: updateOauth2client}, {new: true});
    		}
    		return objOauth2client;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauth2clientByDateModified(dateModified, updateOauth2client) {
    	try {
    		let objOauth2client;
    		if(sql) {
    			objOauth2client = await models.sequelize.oauth2clients.findOne({where: { date_modified: dateModified }});
    			if (objOauth2client) {
    				objOauth2client = await models.sequelize.oauth2clients.update(updateOauth2client, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objOauth2client = await models.mongoose.oauth2clients.findOneAndUpdate({date_modified: dateModified}, {$set: updateOauth2client}, {new: true});
    		}
    		return objOauth2client;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauth2clientByModifiedUserId(modifiedUserId, updateOauth2client) {
    	try {
    		let objOauth2client;
    		if(sql) {
    			objOauth2client = await models.sequelize.oauth2clients.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objOauth2client) {
    				objOauth2client = await models.sequelize.oauth2clients.update(updateOauth2client, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objOauth2client = await models.mongoose.oauth2clients.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateOauth2client}, {new: true});
    		}
    		return objOauth2client;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauth2clientByCreatedBy(createdBy, updateOauth2client) {
    	try {
    		let objOauth2client;
    		if(sql) {
    			objOauth2client = await models.sequelize.oauth2clients.findOne({where: { created_by: createdBy }});
    			if (objOauth2client) {
    				objOauth2client = await models.sequelize.oauth2clients.update(updateOauth2client, { where: { created_by: createdBy } });
    			}
    		} else {
    			objOauth2client = await models.mongoose.oauth2clients.findOneAndUpdate({created_by: createdBy}, {$set: updateOauth2client}, {new: true});
    		}
    		return objOauth2client;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauth2clientByAssignedUserId(assignedUserId, updateOauth2client) {
    	try {
    		let objOauth2client;
    		if(sql) {
    			objOauth2client = await models.sequelize.oauth2clients.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objOauth2client) {
    				objOauth2client = await models.sequelize.oauth2clients.update(updateOauth2client, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objOauth2client = await models.mongoose.oauth2clients.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateOauth2client}, {new: true});
    		}
    		return objOauth2client;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = Oauth2clientService;
//</es-section>
