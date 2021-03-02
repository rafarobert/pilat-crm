/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:00 GMT-0400 (Bolivia Time)
 * Time: 14:0:0
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:00 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:0
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

class AclActionService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAclActions(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aclActions.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aclActions.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAclActions(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aclActions.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aclActions.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAclAction(newAclAction) {
		try {
			let objAclAction;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aclActions.primaryKeys.id.type.toString())) {
			    newAclAction.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAclAction = await models.sequelize.aclActions.create(newAclAction);
			} else {
				objAclAction = new models.mongoose.aclActions(newAclAction);
				await objAclAction.save();
			}
			return objAclAction;
		} catch (error) {
			throw error;
		}
	}

	static async updateAclAction(id, updateAclAction) {
		try {
			let objAclAction;
			if(sql) {
				objAclAction = await models.sequelize.aclActions.findOne({where: { id: util.Char(id) }});
				if (objAclAction) {
					await models.sequelize.aclActions.update(updateAclAction, { where: { id: util.Char(id) } });
					objAclAction = await models.sequelize.aclActions.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAclAction._id;
				objAclAction = await models.mongoose.aclActions.findOneAndUpdate({id:id}, {$set: updateAclAction}, {new: true});
			}
			return objAclAction;
		} catch (error) {
			throw error;
		}
	}

	static async getAAclAction(id, query) {
		try {
			let objAclAction;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAclAction = await models.sequelize.aclActions.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAclAction = await models.mongoose.aclActions.find({id:util.Char(id)}).select(query.select);
			}
			return objAclAction;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAclAction(id) {
		try {
			let objAclAction;
			if(sql) {
				objAclAction = await models.sequelize.aclActions.findOne({ where: { id: util.Char(id) } });
				if (objAclAction) {
					await models.sequelize.aclActions.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAclAction = await models.mongoose.aclActions.deleteOne({id:util.Char(id)});
			}
			return objAclAction;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAclAction;
    		if(sql) {
    			objAclAction = await models.sequelize.aclActions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAclAction = await models.mongoose.aclActions.findOne({id: id});
    		}
    		return objAclAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAclAction;
    		if(sql) {
    			objAclAction = await models.sequelize.aclActions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAclAction = await models.mongoose.aclActions.findOne({deleted: deleted});
    		}
    		return objAclAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAclaccess(aclaccess, query = {}) {
    	try {
    		let objAclAction;
    		if(sql) {
    			objAclAction = await models.sequelize.aclActions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { aclaccess: aclaccess },
    			});
    		} else {
    			objAclAction = await models.mongoose.aclActions.findOne({aclaccess: aclaccess});
    		}
    		return objAclAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objAclAction;
    		if(sql) {
    			objAclAction = await models.sequelize.aclActions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objAclAction = await models.mongoose.aclActions.findOne({name: name});
    		}
    		return objAclAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCategory(category, query = {}) {
    	try {
    		let objAclAction;
    		if(sql) {
    			objAclAction = await models.sequelize.aclActions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { category: category },
    			});
    		} else {
    			objAclAction = await models.mongoose.aclActions.findOne({category: category});
    		}
    		return objAclAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAcltype(acltype, query = {}) {
    	try {
    		let objAclAction;
    		if(sql) {
    			objAclAction = await models.sequelize.aclActions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { acltype: acltype },
    			});
    		} else {
    			objAclAction = await models.mongoose.aclActions.findOne({acltype: acltype});
    		}
    		return objAclAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objAclAction;
    		if(sql) {
    			objAclAction = await models.sequelize.aclActions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objAclAction = await models.mongoose.aclActions.findOne({date_entered: dateEntered});
    		}
    		return objAclAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAclAction;
    		if(sql) {
    			objAclAction = await models.sequelize.aclActions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAclAction = await models.mongoose.aclActions.findOne({date_modified: dateModified});
    		}
    		return objAclAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objAclAction;
    		if(sql) {
    			objAclAction = await models.sequelize.aclActions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objAclAction = await models.mongoose.aclActions.findOne({modified_user_id: modifiedUserId});
    		}
    		return objAclAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAclAction;
    		if(sql) {
    			objAclAction = await models.sequelize.aclActions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAclAction = await models.mongoose.aclActions.findOne({created_by: createdBy});
    		}
    		return objAclAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAclActionById(id, updateAclAction) {
    	try {
    		let objAclAction;
    		if(sql) {
    			objAclAction = await models.sequelize.aclActions.findOne({where: { id: id }});
    			if (objAclAction) {
    				objAclAction = await models.sequelize.aclActions.update(updateAclAction, { where: { id: id } });
    			}
    		} else {
    			objAclAction = await models.mongoose.aclActions.findOneAndUpdate({id: id}, {$set: updateAclAction}, {new: true});
    		}
    		return objAclAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAclActionByDeleted(deleted, updateAclAction) {
    	try {
    		let objAclAction;
    		if(sql) {
    			objAclAction = await models.sequelize.aclActions.findOne({where: { deleted: deleted }});
    			if (objAclAction) {
    				objAclAction = await models.sequelize.aclActions.update(updateAclAction, { where: { deleted: deleted } });
    			}
    		} else {
    			objAclAction = await models.mongoose.aclActions.findOneAndUpdate({deleted: deleted}, {$set: updateAclAction}, {new: true});
    		}
    		return objAclAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAclActionByAclaccess(aclaccess, updateAclAction) {
    	try {
    		let objAclAction;
    		if(sql) {
    			objAclAction = await models.sequelize.aclActions.findOne({where: { aclaccess: aclaccess }});
    			if (objAclAction) {
    				objAclAction = await models.sequelize.aclActions.update(updateAclAction, { where: { aclaccess: aclaccess } });
    			}
    		} else {
    			objAclAction = await models.mongoose.aclActions.findOneAndUpdate({aclaccess: aclaccess}, {$set: updateAclAction}, {new: true});
    		}
    		return objAclAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAclActionByName(name, updateAclAction) {
    	try {
    		let objAclAction;
    		if(sql) {
    			objAclAction = await models.sequelize.aclActions.findOne({where: { name: name }});
    			if (objAclAction) {
    				objAclAction = await models.sequelize.aclActions.update(updateAclAction, { where: { name: name } });
    			}
    		} else {
    			objAclAction = await models.mongoose.aclActions.findOneAndUpdate({name: name}, {$set: updateAclAction}, {new: true});
    		}
    		return objAclAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAclActionByCategory(category, updateAclAction) {
    	try {
    		let objAclAction;
    		if(sql) {
    			objAclAction = await models.sequelize.aclActions.findOne({where: { category: category }});
    			if (objAclAction) {
    				objAclAction = await models.sequelize.aclActions.update(updateAclAction, { where: { category: category } });
    			}
    		} else {
    			objAclAction = await models.mongoose.aclActions.findOneAndUpdate({category: category}, {$set: updateAclAction}, {new: true});
    		}
    		return objAclAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAclActionByAcltype(acltype, updateAclAction) {
    	try {
    		let objAclAction;
    		if(sql) {
    			objAclAction = await models.sequelize.aclActions.findOne({where: { acltype: acltype }});
    			if (objAclAction) {
    				objAclAction = await models.sequelize.aclActions.update(updateAclAction, { where: { acltype: acltype } });
    			}
    		} else {
    			objAclAction = await models.mongoose.aclActions.findOneAndUpdate({acltype: acltype}, {$set: updateAclAction}, {new: true});
    		}
    		return objAclAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAclActionByDateEntered(dateEntered, updateAclAction) {
    	try {
    		let objAclAction;
    		if(sql) {
    			objAclAction = await models.sequelize.aclActions.findOne({where: { date_entered: dateEntered }});
    			if (objAclAction) {
    				objAclAction = await models.sequelize.aclActions.update(updateAclAction, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objAclAction = await models.mongoose.aclActions.findOneAndUpdate({date_entered: dateEntered}, {$set: updateAclAction}, {new: true});
    		}
    		return objAclAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAclActionByDateModified(dateModified, updateAclAction) {
    	try {
    		let objAclAction;
    		if(sql) {
    			objAclAction = await models.sequelize.aclActions.findOne({where: { date_modified: dateModified }});
    			if (objAclAction) {
    				objAclAction = await models.sequelize.aclActions.update(updateAclAction, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAclAction = await models.mongoose.aclActions.findOneAndUpdate({date_modified: dateModified}, {$set: updateAclAction}, {new: true});
    		}
    		return objAclAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAclActionByModifiedUserId(modifiedUserId, updateAclAction) {
    	try {
    		let objAclAction;
    		if(sql) {
    			objAclAction = await models.sequelize.aclActions.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objAclAction) {
    				objAclAction = await models.sequelize.aclActions.update(updateAclAction, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objAclAction = await models.mongoose.aclActions.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateAclAction}, {new: true});
    		}
    		return objAclAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAclActionByCreatedBy(createdBy, updateAclAction) {
    	try {
    		let objAclAction;
    		if(sql) {
    			objAclAction = await models.sequelize.aclActions.findOne({where: { created_by: createdBy }});
    			if (objAclAction) {
    				objAclAction = await models.sequelize.aclActions.update(updateAclAction, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAclAction = await models.mongoose.aclActions.findOneAndUpdate({created_by: createdBy}, {$set: updateAclAction}, {new: true});
    		}
    		return objAclAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AclActionService;
//</es-section>
