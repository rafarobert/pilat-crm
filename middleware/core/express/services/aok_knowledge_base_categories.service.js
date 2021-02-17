/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:41:58 GMT-0400 (Bolivia Time)
 * Time: 4:41:58
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:41:58 GMT-0400 (Bolivia Time)
 * Last time updated: 4:41:58
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

class AokKnowledgeBaseCategoryService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAokKnowledgeBaseCategories(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aokKnowledgeBaseCategories.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aokKnowledgeBaseCategories.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAokKnowledgeBaseCategories(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aokKnowledgeBaseCategories.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aokKnowledgeBaseCategories.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAokKnowledgeBaseCategory(newAokKnowledgeBaseCategory) {
		try {
			let objAokKnowledgeBaseCategory;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aokKnowledgeBaseCategories.primaryKeys.id.type.toString())) {
			    newAokKnowledgeBaseCategory.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAokKnowledgeBaseCategory = await models.sequelize.aokKnowledgeBaseCategories.create(newAokKnowledgeBaseCategory);
			} else {
				objAokKnowledgeBaseCategory = new models.mongoose.aokKnowledgeBaseCategories(newAokKnowledgeBaseCategory);
				await objAokKnowledgeBaseCategory.save();
			}
			return objAokKnowledgeBaseCategory;
		} catch (error) {
			throw error;
		}
	}

	static async updateAokKnowledgeBaseCategory(id, updateAokKnowledgeBaseCategory) {
		try {
			let objAokKnowledgeBaseCategory;
			if(sql) {
				objAokKnowledgeBaseCategory = await models.sequelize.aokKnowledgeBaseCategories.findOne({where: { id: util.Char(id) }});
				if (objAokKnowledgeBaseCategory) {
					await models.sequelize.aokKnowledgeBaseCategories.update(updateAokKnowledgeBaseCategory, { where: { id: util.Char(id) } });
					objAokKnowledgeBaseCategory = await models.sequelize.aokKnowledgeBaseCategories.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAokKnowledgeBaseCategory._id;
				objAokKnowledgeBaseCategory = await models.mongoose.aokKnowledgeBaseCategories.findOneAndUpdate({id:id}, {$set: updateAokKnowledgeBaseCategory}, {new: true});
			}
			return objAokKnowledgeBaseCategory;
		} catch (error) {
			throw error;
		}
	}

	static async getAAokKnowledgeBaseCategory(id, query) {
		try {
			let objAokKnowledgeBaseCategory;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAokKnowledgeBaseCategory = await models.sequelize.aokKnowledgeBaseCategories.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAokKnowledgeBaseCategory = await models.mongoose.aokKnowledgeBaseCategories.find({id:util.Char(id)}).select(query.select);
			}
			return objAokKnowledgeBaseCategory;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAokKnowledgeBaseCategory(id) {
		try {
			let objAokKnowledgeBaseCategory;
			if(sql) {
				objAokKnowledgeBaseCategory = await models.sequelize.aokKnowledgeBaseCategories.findOne({ where: { id: util.Char(id) } });
				if (objAokKnowledgeBaseCategory) {
					await models.sequelize.aokKnowledgeBaseCategories.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAokKnowledgeBaseCategory = await models.mongoose.aokKnowledgeBaseCategories.deleteOne({id:util.Char(id)});
			}
			return objAokKnowledgeBaseCategory;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAokKnowledgeBaseCategory;
    		if(sql) {
    			objAokKnowledgeBaseCategory = await models.sequelize.aokKnowledgeBaseCategories.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAokKnowledgeBaseCategory = await models.mongoose.aokKnowledgeBaseCategories.findOne({id: id});
    		}
    		return objAokKnowledgeBaseCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAokKnowledgeBaseCategory;
    		if(sql) {
    			objAokKnowledgeBaseCategory = await models.sequelize.aokKnowledgeBaseCategories.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAokKnowledgeBaseCategory = await models.mongoose.aokKnowledgeBaseCategories.findOne({deleted: deleted});
    		}
    		return objAokKnowledgeBaseCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objAokKnowledgeBaseCategory;
    		if(sql) {
    			objAokKnowledgeBaseCategory = await models.sequelize.aokKnowledgeBaseCategories.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objAokKnowledgeBaseCategory = await models.mongoose.aokKnowledgeBaseCategories.findOne({name: name});
    		}
    		return objAokKnowledgeBaseCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objAokKnowledgeBaseCategory;
    		if(sql) {
    			objAokKnowledgeBaseCategory = await models.sequelize.aokKnowledgeBaseCategories.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objAokKnowledgeBaseCategory = await models.mongoose.aokKnowledgeBaseCategories.findOne({description: description});
    		}
    		return objAokKnowledgeBaseCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objAokKnowledgeBaseCategory;
    		if(sql) {
    			objAokKnowledgeBaseCategory = await models.sequelize.aokKnowledgeBaseCategories.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objAokKnowledgeBaseCategory = await models.mongoose.aokKnowledgeBaseCategories.findOne({date_entered: dateEntered});
    		}
    		return objAokKnowledgeBaseCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAokKnowledgeBaseCategory;
    		if(sql) {
    			objAokKnowledgeBaseCategory = await models.sequelize.aokKnowledgeBaseCategories.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAokKnowledgeBaseCategory = await models.mongoose.aokKnowledgeBaseCategories.findOne({date_modified: dateModified});
    		}
    		return objAokKnowledgeBaseCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objAokKnowledgeBaseCategory;
    		if(sql) {
    			objAokKnowledgeBaseCategory = await models.sequelize.aokKnowledgeBaseCategories.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objAokKnowledgeBaseCategory = await models.mongoose.aokKnowledgeBaseCategories.findOne({modified_user_id: modifiedUserId});
    		}
    		return objAokKnowledgeBaseCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAokKnowledgeBaseCategory;
    		if(sql) {
    			objAokKnowledgeBaseCategory = await models.sequelize.aokKnowledgeBaseCategories.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAokKnowledgeBaseCategory = await models.mongoose.aokKnowledgeBaseCategories.findOne({created_by: createdBy});
    		}
    		return objAokKnowledgeBaseCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objAokKnowledgeBaseCategory;
    		if(sql) {
    			objAokKnowledgeBaseCategory = await models.sequelize.aokKnowledgeBaseCategories.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objAokKnowledgeBaseCategory = await models.mongoose.aokKnowledgeBaseCategories.findOne({assigned_user_id: assignedUserId});
    		}
    		return objAokKnowledgeBaseCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAokKnowledgeBaseCategoryById(id, updateAokKnowledgeBaseCategory) {
    	try {
    		let objAokKnowledgeBaseCategory;
    		if(sql) {
    			objAokKnowledgeBaseCategory = await models.sequelize.aokKnowledgeBaseCategories.findOne({where: { id: id }});
    			if (objAokKnowledgeBaseCategory) {
    				objAokKnowledgeBaseCategory = await models.sequelize.aokKnowledgeBaseCategories.update(updateAokKnowledgeBaseCategory, { where: { id: id } });
    			}
    		} else {
    			objAokKnowledgeBaseCategory = await models.mongoose.aokKnowledgeBaseCategories.findOneAndUpdate({id: id}, {$set: updateAokKnowledgeBaseCategory}, {new: true});
    		}
    		return objAokKnowledgeBaseCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgeBaseCategoryByDeleted(deleted, updateAokKnowledgeBaseCategory) {
    	try {
    		let objAokKnowledgeBaseCategory;
    		if(sql) {
    			objAokKnowledgeBaseCategory = await models.sequelize.aokKnowledgeBaseCategories.findOne({where: { deleted: deleted }});
    			if (objAokKnowledgeBaseCategory) {
    				objAokKnowledgeBaseCategory = await models.sequelize.aokKnowledgeBaseCategories.update(updateAokKnowledgeBaseCategory, { where: { deleted: deleted } });
    			}
    		} else {
    			objAokKnowledgeBaseCategory = await models.mongoose.aokKnowledgeBaseCategories.findOneAndUpdate({deleted: deleted}, {$set: updateAokKnowledgeBaseCategory}, {new: true});
    		}
    		return objAokKnowledgeBaseCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgeBaseCategoryByName(name, updateAokKnowledgeBaseCategory) {
    	try {
    		let objAokKnowledgeBaseCategory;
    		if(sql) {
    			objAokKnowledgeBaseCategory = await models.sequelize.aokKnowledgeBaseCategories.findOne({where: { name: name }});
    			if (objAokKnowledgeBaseCategory) {
    				objAokKnowledgeBaseCategory = await models.sequelize.aokKnowledgeBaseCategories.update(updateAokKnowledgeBaseCategory, { where: { name: name } });
    			}
    		} else {
    			objAokKnowledgeBaseCategory = await models.mongoose.aokKnowledgeBaseCategories.findOneAndUpdate({name: name}, {$set: updateAokKnowledgeBaseCategory}, {new: true});
    		}
    		return objAokKnowledgeBaseCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgeBaseCategoryByDescription(description, updateAokKnowledgeBaseCategory) {
    	try {
    		let objAokKnowledgeBaseCategory;
    		if(sql) {
    			objAokKnowledgeBaseCategory = await models.sequelize.aokKnowledgeBaseCategories.findOne({where: { description: description }});
    			if (objAokKnowledgeBaseCategory) {
    				objAokKnowledgeBaseCategory = await models.sequelize.aokKnowledgeBaseCategories.update(updateAokKnowledgeBaseCategory, { where: { description: description } });
    			}
    		} else {
    			objAokKnowledgeBaseCategory = await models.mongoose.aokKnowledgeBaseCategories.findOneAndUpdate({description: description}, {$set: updateAokKnowledgeBaseCategory}, {new: true});
    		}
    		return objAokKnowledgeBaseCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgeBaseCategoryByDateEntered(dateEntered, updateAokKnowledgeBaseCategory) {
    	try {
    		let objAokKnowledgeBaseCategory;
    		if(sql) {
    			objAokKnowledgeBaseCategory = await models.sequelize.aokKnowledgeBaseCategories.findOne({where: { date_entered: dateEntered }});
    			if (objAokKnowledgeBaseCategory) {
    				objAokKnowledgeBaseCategory = await models.sequelize.aokKnowledgeBaseCategories.update(updateAokKnowledgeBaseCategory, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objAokKnowledgeBaseCategory = await models.mongoose.aokKnowledgeBaseCategories.findOneAndUpdate({date_entered: dateEntered}, {$set: updateAokKnowledgeBaseCategory}, {new: true});
    		}
    		return objAokKnowledgeBaseCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgeBaseCategoryByDateModified(dateModified, updateAokKnowledgeBaseCategory) {
    	try {
    		let objAokKnowledgeBaseCategory;
    		if(sql) {
    			objAokKnowledgeBaseCategory = await models.sequelize.aokKnowledgeBaseCategories.findOne({where: { date_modified: dateModified }});
    			if (objAokKnowledgeBaseCategory) {
    				objAokKnowledgeBaseCategory = await models.sequelize.aokKnowledgeBaseCategories.update(updateAokKnowledgeBaseCategory, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAokKnowledgeBaseCategory = await models.mongoose.aokKnowledgeBaseCategories.findOneAndUpdate({date_modified: dateModified}, {$set: updateAokKnowledgeBaseCategory}, {new: true});
    		}
    		return objAokKnowledgeBaseCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgeBaseCategoryByModifiedUserId(modifiedUserId, updateAokKnowledgeBaseCategory) {
    	try {
    		let objAokKnowledgeBaseCategory;
    		if(sql) {
    			objAokKnowledgeBaseCategory = await models.sequelize.aokKnowledgeBaseCategories.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objAokKnowledgeBaseCategory) {
    				objAokKnowledgeBaseCategory = await models.sequelize.aokKnowledgeBaseCategories.update(updateAokKnowledgeBaseCategory, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objAokKnowledgeBaseCategory = await models.mongoose.aokKnowledgeBaseCategories.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateAokKnowledgeBaseCategory}, {new: true});
    		}
    		return objAokKnowledgeBaseCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgeBaseCategoryByCreatedBy(createdBy, updateAokKnowledgeBaseCategory) {
    	try {
    		let objAokKnowledgeBaseCategory;
    		if(sql) {
    			objAokKnowledgeBaseCategory = await models.sequelize.aokKnowledgeBaseCategories.findOne({where: { created_by: createdBy }});
    			if (objAokKnowledgeBaseCategory) {
    				objAokKnowledgeBaseCategory = await models.sequelize.aokKnowledgeBaseCategories.update(updateAokKnowledgeBaseCategory, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAokKnowledgeBaseCategory = await models.mongoose.aokKnowledgeBaseCategories.findOneAndUpdate({created_by: createdBy}, {$set: updateAokKnowledgeBaseCategory}, {new: true});
    		}
    		return objAokKnowledgeBaseCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgeBaseCategoryByAssignedUserId(assignedUserId, updateAokKnowledgeBaseCategory) {
    	try {
    		let objAokKnowledgeBaseCategory;
    		if(sql) {
    			objAokKnowledgeBaseCategory = await models.sequelize.aokKnowledgeBaseCategories.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objAokKnowledgeBaseCategory) {
    				objAokKnowledgeBaseCategory = await models.sequelize.aokKnowledgeBaseCategories.update(updateAokKnowledgeBaseCategory, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objAokKnowledgeBaseCategory = await models.mongoose.aokKnowledgeBaseCategories.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateAokKnowledgeBaseCategory}, {new: true});
    		}
    		return objAokKnowledgeBaseCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AokKnowledgeBaseCategoryService;
//</es-section>
