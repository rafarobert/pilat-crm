/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:21 GMT-0400 (Bolivia Time)
 * Time: 0:22:21
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:21 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:21
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

class AoProductCategoryService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAosProductCategories(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aosProductCategories.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aosProductCategories.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAosProductCategories(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aosProductCategories.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aosProductCategories.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAoProductCategory(newAoProductCategory) {
		try {
			let objAoProductCategory;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aosProductCategories.primaryKeys.id.type.toString())) {
			    newAoProductCategory.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAoProductCategory = await models.sequelize.aosProductCategories.create(newAoProductCategory);
			} else {
				objAoProductCategory = new models.mongoose.aosProductCategories(newAoProductCategory);
				await objAoProductCategory.save();
			}
			return objAoProductCategory;
		} catch (error) {
			throw error;
		}
	}

	static async updateAoProductCategory(id, updateAoProductCategory) {
		try {
			let objAoProductCategory;
			if(sql) {
				objAoProductCategory = await models.sequelize.aosProductCategories.findOne({where: { id: util.Char(id) }});
				if (objAoProductCategory) {
					await models.sequelize.aosProductCategories.update(updateAoProductCategory, { where: { id: util.Char(id) } });
					objAoProductCategory = await models.sequelize.aosProductCategories.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAoProductCategory._id;
				objAoProductCategory = await models.mongoose.aosProductCategories.findOneAndUpdate({id:id}, {$set: updateAoProductCategory}, {new: true});
			}
			return objAoProductCategory;
		} catch (error) {
			throw error;
		}
	}

	static async getAAoProductCategory(id, query) {
		try {
			let objAoProductCategory;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAoProductCategory = await models.sequelize.aosProductCategories.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAoProductCategory = await models.mongoose.aosProductCategories.find({id:util.Char(id)}).select(query.select);
			}
			return objAoProductCategory;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAoProductCategory(id) {
		try {
			let objAoProductCategory;
			if(sql) {
				objAoProductCategory = await models.sequelize.aosProductCategories.findOne({ where: { id: util.Char(id) } });
				if (objAoProductCategory) {
					await models.sequelize.aosProductCategories.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAoProductCategory = await models.mongoose.aosProductCategories.deleteOne({id:util.Char(id)});
			}
			return objAoProductCategory;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAoProductCategory;
    		if(sql) {
    			objAoProductCategory = await models.sequelize.aosProductCategories.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAoProductCategory = await models.mongoose.aosProductCategories.findOne({id: id});
    		}
    		return objAoProductCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAoProductCategory;
    		if(sql) {
    			objAoProductCategory = await models.sequelize.aosProductCategories.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAoProductCategory = await models.mongoose.aosProductCategories.findOne({deleted: deleted});
    		}
    		return objAoProductCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByIsParent(isParent, query = {}) {
    	try {
    		let objAoProductCategory;
    		if(sql) {
    			objAoProductCategory = await models.sequelize.aosProductCategories.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { is_parent: isParent },
    			});
    		} else {
    			objAoProductCategory = await models.mongoose.aosProductCategories.findOne({is_parent: isParent});
    		}
    		return objAoProductCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objAoProductCategory;
    		if(sql) {
    			objAoProductCategory = await models.sequelize.aosProductCategories.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objAoProductCategory = await models.mongoose.aosProductCategories.findOne({name: name});
    		}
    		return objAoProductCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objAoProductCategory;
    		if(sql) {
    			objAoProductCategory = await models.sequelize.aosProductCategories.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objAoProductCategory = await models.mongoose.aosProductCategories.findOne({description: description});
    		}
    		return objAoProductCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objAoProductCategory;
    		if(sql) {
    			objAoProductCategory = await models.sequelize.aosProductCategories.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objAoProductCategory = await models.mongoose.aosProductCategories.findOne({date_entered: dateEntered});
    		}
    		return objAoProductCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAoProductCategory;
    		if(sql) {
    			objAoProductCategory = await models.sequelize.aosProductCategories.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAoProductCategory = await models.mongoose.aosProductCategories.findOne({date_modified: dateModified});
    		}
    		return objAoProductCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objAoProductCategory;
    		if(sql) {
    			objAoProductCategory = await models.sequelize.aosProductCategories.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objAoProductCategory = await models.mongoose.aosProductCategories.findOne({modified_user_id: modifiedUserId});
    		}
    		return objAoProductCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAoProductCategory;
    		if(sql) {
    			objAoProductCategory = await models.sequelize.aosProductCategories.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAoProductCategory = await models.mongoose.aosProductCategories.findOne({created_by: createdBy});
    		}
    		return objAoProductCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objAoProductCategory;
    		if(sql) {
    			objAoProductCategory = await models.sequelize.aosProductCategories.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objAoProductCategory = await models.mongoose.aosProductCategories.findOne({assigned_user_id: assignedUserId});
    		}
    		return objAoProductCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentCategoryId(parentCategoryId, query = {}) {
    	try {
    		let objAoProductCategory;
    		if(sql) {
    			objAoProductCategory = await models.sequelize.aosProductCategories.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_category_id: parentCategoryId },
    			});
    		} else {
    			objAoProductCategory = await models.mongoose.aosProductCategories.findOne({parent_category_id: parentCategoryId});
    		}
    		return objAoProductCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAoProductCategoryById(id, updateAoProductCategory) {
    	try {
    		let objAoProductCategory;
    		if(sql) {
    			objAoProductCategory = await models.sequelize.aosProductCategories.findOne({where: { id: id }});
    			if (objAoProductCategory) {
    				objAoProductCategory = await models.sequelize.aosProductCategories.update(updateAoProductCategory, { where: { id: id } });
    			}
    		} else {
    			objAoProductCategory = await models.mongoose.aosProductCategories.findOneAndUpdate({id: id}, {$set: updateAoProductCategory}, {new: true});
    		}
    		return objAoProductCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductCategoryByDeleted(deleted, updateAoProductCategory) {
    	try {
    		let objAoProductCategory;
    		if(sql) {
    			objAoProductCategory = await models.sequelize.aosProductCategories.findOne({where: { deleted: deleted }});
    			if (objAoProductCategory) {
    				objAoProductCategory = await models.sequelize.aosProductCategories.update(updateAoProductCategory, { where: { deleted: deleted } });
    			}
    		} else {
    			objAoProductCategory = await models.mongoose.aosProductCategories.findOneAndUpdate({deleted: deleted}, {$set: updateAoProductCategory}, {new: true});
    		}
    		return objAoProductCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductCategoryByIsParent(isParent, updateAoProductCategory) {
    	try {
    		let objAoProductCategory;
    		if(sql) {
    			objAoProductCategory = await models.sequelize.aosProductCategories.findOne({where: { is_parent: isParent }});
    			if (objAoProductCategory) {
    				objAoProductCategory = await models.sequelize.aosProductCategories.update(updateAoProductCategory, { where: { is_parent: isParent } });
    			}
    		} else {
    			objAoProductCategory = await models.mongoose.aosProductCategories.findOneAndUpdate({is_parent: isParent}, {$set: updateAoProductCategory}, {new: true});
    		}
    		return objAoProductCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductCategoryByName(name, updateAoProductCategory) {
    	try {
    		let objAoProductCategory;
    		if(sql) {
    			objAoProductCategory = await models.sequelize.aosProductCategories.findOne({where: { name: name }});
    			if (objAoProductCategory) {
    				objAoProductCategory = await models.sequelize.aosProductCategories.update(updateAoProductCategory, { where: { name: name } });
    			}
    		} else {
    			objAoProductCategory = await models.mongoose.aosProductCategories.findOneAndUpdate({name: name}, {$set: updateAoProductCategory}, {new: true});
    		}
    		return objAoProductCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductCategoryByDescription(description, updateAoProductCategory) {
    	try {
    		let objAoProductCategory;
    		if(sql) {
    			objAoProductCategory = await models.sequelize.aosProductCategories.findOne({where: { description: description }});
    			if (objAoProductCategory) {
    				objAoProductCategory = await models.sequelize.aosProductCategories.update(updateAoProductCategory, { where: { description: description } });
    			}
    		} else {
    			objAoProductCategory = await models.mongoose.aosProductCategories.findOneAndUpdate({description: description}, {$set: updateAoProductCategory}, {new: true});
    		}
    		return objAoProductCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductCategoryByDateEntered(dateEntered, updateAoProductCategory) {
    	try {
    		let objAoProductCategory;
    		if(sql) {
    			objAoProductCategory = await models.sequelize.aosProductCategories.findOne({where: { date_entered: dateEntered }});
    			if (objAoProductCategory) {
    				objAoProductCategory = await models.sequelize.aosProductCategories.update(updateAoProductCategory, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objAoProductCategory = await models.mongoose.aosProductCategories.findOneAndUpdate({date_entered: dateEntered}, {$set: updateAoProductCategory}, {new: true});
    		}
    		return objAoProductCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductCategoryByDateModified(dateModified, updateAoProductCategory) {
    	try {
    		let objAoProductCategory;
    		if(sql) {
    			objAoProductCategory = await models.sequelize.aosProductCategories.findOne({where: { date_modified: dateModified }});
    			if (objAoProductCategory) {
    				objAoProductCategory = await models.sequelize.aosProductCategories.update(updateAoProductCategory, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAoProductCategory = await models.mongoose.aosProductCategories.findOneAndUpdate({date_modified: dateModified}, {$set: updateAoProductCategory}, {new: true});
    		}
    		return objAoProductCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductCategoryByModifiedUserId(modifiedUserId, updateAoProductCategory) {
    	try {
    		let objAoProductCategory;
    		if(sql) {
    			objAoProductCategory = await models.sequelize.aosProductCategories.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objAoProductCategory) {
    				objAoProductCategory = await models.sequelize.aosProductCategories.update(updateAoProductCategory, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objAoProductCategory = await models.mongoose.aosProductCategories.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateAoProductCategory}, {new: true});
    		}
    		return objAoProductCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductCategoryByCreatedBy(createdBy, updateAoProductCategory) {
    	try {
    		let objAoProductCategory;
    		if(sql) {
    			objAoProductCategory = await models.sequelize.aosProductCategories.findOne({where: { created_by: createdBy }});
    			if (objAoProductCategory) {
    				objAoProductCategory = await models.sequelize.aosProductCategories.update(updateAoProductCategory, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAoProductCategory = await models.mongoose.aosProductCategories.findOneAndUpdate({created_by: createdBy}, {$set: updateAoProductCategory}, {new: true});
    		}
    		return objAoProductCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductCategoryByAssignedUserId(assignedUserId, updateAoProductCategory) {
    	try {
    		let objAoProductCategory;
    		if(sql) {
    			objAoProductCategory = await models.sequelize.aosProductCategories.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objAoProductCategory) {
    				objAoProductCategory = await models.sequelize.aosProductCategories.update(updateAoProductCategory, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objAoProductCategory = await models.mongoose.aosProductCategories.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateAoProductCategory}, {new: true});
    		}
    		return objAoProductCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductCategoryByParentCategoryId(parentCategoryId, updateAoProductCategory) {
    	try {
    		let objAoProductCategory;
    		if(sql) {
    			objAoProductCategory = await models.sequelize.aosProductCategories.findOne({where: { parent_category_id: parentCategoryId }});
    			if (objAoProductCategory) {
    				objAoProductCategory = await models.sequelize.aosProductCategories.update(updateAoProductCategory, { where: { parent_category_id: parentCategoryId } });
    			}
    		} else {
    			objAoProductCategory = await models.mongoose.aosProductCategories.findOneAndUpdate({parent_category_id: parentCategoryId}, {$set: updateAoProductCategory}, {new: true});
    		}
    		return objAoProductCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AoProductCategoryService;
//</es-section>
