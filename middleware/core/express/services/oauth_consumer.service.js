/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:22 GMT-0400 (Bolivia Time)
 * Time: 0:23:22
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:22 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:22
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

class OauthConsumerService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllOauthConsumer(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.oauthConsumer.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.oauthConsumer.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllOauthConsumer(select = []) {
		try {
			if(sql) {
				return await models.sequelize.oauthConsumer.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.oauthConsumer.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addOauthConsumer(newOauthConsumer) {
		try {
			let objOauthConsumer;
			if(util.PrimaryKeyTypeIsString(models.sequelize.oauthConsumer.primaryKeys.id.type.toString())) {
			    newOauthConsumer.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objOauthConsumer = await models.sequelize.oauthConsumer.create(newOauthConsumer);
			} else {
				objOauthConsumer = new models.mongoose.oauthConsumer(newOauthConsumer);
				await objOauthConsumer.save();
			}
			return objOauthConsumer;
		} catch (error) {
			throw error;
		}
	}

	static async updateOauthConsumer(id, updateOauthConsumer) {
		try {
			let objOauthConsumer;
			if(sql) {
				objOauthConsumer = await models.sequelize.oauthConsumer.findOne({where: { id: util.Char(id) }});
				if (objOauthConsumer) {
					await models.sequelize.oauthConsumer.update(updateOauthConsumer, { where: { id: util.Char(id) } });
					objOauthConsumer = await models.sequelize.oauthConsumer.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateOauthConsumer._id;
				objOauthConsumer = await models.mongoose.oauthConsumer.findOneAndUpdate({id:id}, {$set: updateOauthConsumer}, {new: true});
			}
			return objOauthConsumer;
		} catch (error) {
			throw error;
		}
	}

	static async getAOauthConsumer(id, query) {
		try {
			let objOauthConsumer;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objOauthConsumer = await models.sequelize.oauthConsumer.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objOauthConsumer = await models.mongoose.oauthConsumer.find({id:util.Char(id)}).select(query.select);
			}
			return objOauthConsumer;
		} catch (error) {
			throw error;
		}
	}

	static async deleteOauthConsumer(id) {
		try {
			let objOauthConsumer;
			if(sql) {
				objOauthConsumer = await models.sequelize.oauthConsumer.findOne({ where: { id: util.Char(id) } });
				if (objOauthConsumer) {
					await models.sequelize.oauthConsumer.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objOauthConsumer = await models.mongoose.oauthConsumer.deleteOne({id:util.Char(id)});
			}
			return objOauthConsumer;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objOauthConsumer;
    		if(sql) {
    			objOauthConsumer = await models.sequelize.oauthConsumer.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objOauthConsumer = await models.mongoose.oauthConsumer.findOne({id: id});
    		}
    		return objOauthConsumer;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objOauthConsumer;
    		if(sql) {
    			objOauthConsumer = await models.sequelize.oauthConsumer.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objOauthConsumer = await models.mongoose.oauthConsumer.findOne({deleted: deleted});
    		}
    		return objOauthConsumer;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objOauthConsumer;
    		if(sql) {
    			objOauthConsumer = await models.sequelize.oauthConsumer.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objOauthConsumer = await models.mongoose.oauthConsumer.findOne({name: name});
    		}
    		return objOauthConsumer;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCKey(cKey, query = {}) {
    	try {
    		let objOauthConsumer;
    		if(sql) {
    			objOauthConsumer = await models.sequelize.oauthConsumer.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { c_key: cKey },
    			});
    		} else {
    			objOauthConsumer = await models.mongoose.oauthConsumer.findOne({c_key: cKey});
    		}
    		return objOauthConsumer;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCSecret(cSecret, query = {}) {
    	try {
    		let objOauthConsumer;
    		if(sql) {
    			objOauthConsumer = await models.sequelize.oauthConsumer.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { c_secret: cSecret },
    			});
    		} else {
    			objOauthConsumer = await models.mongoose.oauthConsumer.findOne({c_secret: cSecret});
    		}
    		return objOauthConsumer;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objOauthConsumer;
    		if(sql) {
    			objOauthConsumer = await models.sequelize.oauthConsumer.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objOauthConsumer = await models.mongoose.oauthConsumer.findOne({description: description});
    		}
    		return objOauthConsumer;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objOauthConsumer;
    		if(sql) {
    			objOauthConsumer = await models.sequelize.oauthConsumer.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objOauthConsumer = await models.mongoose.oauthConsumer.findOne({date_entered: dateEntered});
    		}
    		return objOauthConsumer;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objOauthConsumer;
    		if(sql) {
    			objOauthConsumer = await models.sequelize.oauthConsumer.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objOauthConsumer = await models.mongoose.oauthConsumer.findOne({date_modified: dateModified});
    		}
    		return objOauthConsumer;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objOauthConsumer;
    		if(sql) {
    			objOauthConsumer = await models.sequelize.oauthConsumer.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objOauthConsumer = await models.mongoose.oauthConsumer.findOne({modified_user_id: modifiedUserId});
    		}
    		return objOauthConsumer;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objOauthConsumer;
    		if(sql) {
    			objOauthConsumer = await models.sequelize.oauthConsumer.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objOauthConsumer = await models.mongoose.oauthConsumer.findOne({created_by: createdBy});
    		}
    		return objOauthConsumer;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objOauthConsumer;
    		if(sql) {
    			objOauthConsumer = await models.sequelize.oauthConsumer.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objOauthConsumer = await models.mongoose.oauthConsumer.findOne({assigned_user_id: assignedUserId});
    		}
    		return objOauthConsumer;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateOauthConsumerById(id, updateOauthConsumer) {
    	try {
    		let objOauthConsumer;
    		if(sql) {
    			objOauthConsumer = await models.sequelize.oauthConsumer.findOne({where: { id: id }});
    			if (objOauthConsumer) {
    				objOauthConsumer = await models.sequelize.oauthConsumer.update(updateOauthConsumer, { where: { id: id } });
    			}
    		} else {
    			objOauthConsumer = await models.mongoose.oauthConsumer.findOneAndUpdate({id: id}, {$set: updateOauthConsumer}, {new: true});
    		}
    		return objOauthConsumer;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauthConsumerByDeleted(deleted, updateOauthConsumer) {
    	try {
    		let objOauthConsumer;
    		if(sql) {
    			objOauthConsumer = await models.sequelize.oauthConsumer.findOne({where: { deleted: deleted }});
    			if (objOauthConsumer) {
    				objOauthConsumer = await models.sequelize.oauthConsumer.update(updateOauthConsumer, { where: { deleted: deleted } });
    			}
    		} else {
    			objOauthConsumer = await models.mongoose.oauthConsumer.findOneAndUpdate({deleted: deleted}, {$set: updateOauthConsumer}, {new: true});
    		}
    		return objOauthConsumer;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauthConsumerByName(name, updateOauthConsumer) {
    	try {
    		let objOauthConsumer;
    		if(sql) {
    			objOauthConsumer = await models.sequelize.oauthConsumer.findOne({where: { name: name }});
    			if (objOauthConsumer) {
    				objOauthConsumer = await models.sequelize.oauthConsumer.update(updateOauthConsumer, { where: { name: name } });
    			}
    		} else {
    			objOauthConsumer = await models.mongoose.oauthConsumer.findOneAndUpdate({name: name}, {$set: updateOauthConsumer}, {new: true});
    		}
    		return objOauthConsumer;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauthConsumerByCKey(cKey, updateOauthConsumer) {
    	try {
    		let objOauthConsumer;
    		if(sql) {
    			objOauthConsumer = await models.sequelize.oauthConsumer.findOne({where: { c_key: cKey }});
    			if (objOauthConsumer) {
    				objOauthConsumer = await models.sequelize.oauthConsumer.update(updateOauthConsumer, { where: { c_key: cKey } });
    			}
    		} else {
    			objOauthConsumer = await models.mongoose.oauthConsumer.findOneAndUpdate({c_key: cKey}, {$set: updateOauthConsumer}, {new: true});
    		}
    		return objOauthConsumer;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauthConsumerByCSecret(cSecret, updateOauthConsumer) {
    	try {
    		let objOauthConsumer;
    		if(sql) {
    			objOauthConsumer = await models.sequelize.oauthConsumer.findOne({where: { c_secret: cSecret }});
    			if (objOauthConsumer) {
    				objOauthConsumer = await models.sequelize.oauthConsumer.update(updateOauthConsumer, { where: { c_secret: cSecret } });
    			}
    		} else {
    			objOauthConsumer = await models.mongoose.oauthConsumer.findOneAndUpdate({c_secret: cSecret}, {$set: updateOauthConsumer}, {new: true});
    		}
    		return objOauthConsumer;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauthConsumerByDescription(description, updateOauthConsumer) {
    	try {
    		let objOauthConsumer;
    		if(sql) {
    			objOauthConsumer = await models.sequelize.oauthConsumer.findOne({where: { description: description }});
    			if (objOauthConsumer) {
    				objOauthConsumer = await models.sequelize.oauthConsumer.update(updateOauthConsumer, { where: { description: description } });
    			}
    		} else {
    			objOauthConsumer = await models.mongoose.oauthConsumer.findOneAndUpdate({description: description}, {$set: updateOauthConsumer}, {new: true});
    		}
    		return objOauthConsumer;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauthConsumerByDateEntered(dateEntered, updateOauthConsumer) {
    	try {
    		let objOauthConsumer;
    		if(sql) {
    			objOauthConsumer = await models.sequelize.oauthConsumer.findOne({where: { date_entered: dateEntered }});
    			if (objOauthConsumer) {
    				objOauthConsumer = await models.sequelize.oauthConsumer.update(updateOauthConsumer, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objOauthConsumer = await models.mongoose.oauthConsumer.findOneAndUpdate({date_entered: dateEntered}, {$set: updateOauthConsumer}, {new: true});
    		}
    		return objOauthConsumer;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauthConsumerByDateModified(dateModified, updateOauthConsumer) {
    	try {
    		let objOauthConsumer;
    		if(sql) {
    			objOauthConsumer = await models.sequelize.oauthConsumer.findOne({where: { date_modified: dateModified }});
    			if (objOauthConsumer) {
    				objOauthConsumer = await models.sequelize.oauthConsumer.update(updateOauthConsumer, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objOauthConsumer = await models.mongoose.oauthConsumer.findOneAndUpdate({date_modified: dateModified}, {$set: updateOauthConsumer}, {new: true});
    		}
    		return objOauthConsumer;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauthConsumerByModifiedUserId(modifiedUserId, updateOauthConsumer) {
    	try {
    		let objOauthConsumer;
    		if(sql) {
    			objOauthConsumer = await models.sequelize.oauthConsumer.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objOauthConsumer) {
    				objOauthConsumer = await models.sequelize.oauthConsumer.update(updateOauthConsumer, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objOauthConsumer = await models.mongoose.oauthConsumer.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateOauthConsumer}, {new: true});
    		}
    		return objOauthConsumer;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauthConsumerByCreatedBy(createdBy, updateOauthConsumer) {
    	try {
    		let objOauthConsumer;
    		if(sql) {
    			objOauthConsumer = await models.sequelize.oauthConsumer.findOne({where: { created_by: createdBy }});
    			if (objOauthConsumer) {
    				objOauthConsumer = await models.sequelize.oauthConsumer.update(updateOauthConsumer, { where: { created_by: createdBy } });
    			}
    		} else {
    			objOauthConsumer = await models.mongoose.oauthConsumer.findOneAndUpdate({created_by: createdBy}, {$set: updateOauthConsumer}, {new: true});
    		}
    		return objOauthConsumer;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauthConsumerByAssignedUserId(assignedUserId, updateOauthConsumer) {
    	try {
    		let objOauthConsumer;
    		if(sql) {
    			objOauthConsumer = await models.sequelize.oauthConsumer.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objOauthConsumer) {
    				objOauthConsumer = await models.sequelize.oauthConsumer.update(updateOauthConsumer, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objOauthConsumer = await models.mongoose.oauthConsumer.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateOauthConsumer}, {new: true});
    		}
    		return objOauthConsumer;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = OauthConsumerService;
//</es-section>
