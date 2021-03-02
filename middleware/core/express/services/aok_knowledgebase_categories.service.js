/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:08 GMT-0400 (Bolivia Time)
 * Time: 14:0:8
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:08 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:8
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

class AokKnowledgebaseCategoryService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAokKnowledgebaseCategories(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aokKnowledgebaseCategories.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aokKnowledgebaseCategories.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAokKnowledgebaseCategories(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aokKnowledgebaseCategories.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aokKnowledgebaseCategories.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAokKnowledgebaseCategory(newAokKnowledgebaseCategory) {
		try {
			let objAokKnowledgebaseCategory;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aokKnowledgebaseCategories.primaryKeys.id.type.toString())) {
			    newAokKnowledgebaseCategory.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAokKnowledgebaseCategory = await models.sequelize.aokKnowledgebaseCategories.create(newAokKnowledgebaseCategory);
			} else {
				objAokKnowledgebaseCategory = new models.mongoose.aokKnowledgebaseCategories(newAokKnowledgebaseCategory);
				await objAokKnowledgebaseCategory.save();
			}
			return objAokKnowledgebaseCategory;
		} catch (error) {
			throw error;
		}
	}

	static async updateAokKnowledgebaseCategory(id, updateAokKnowledgebaseCategory) {
		try {
			let objAokKnowledgebaseCategory;
			if(sql) {
				objAokKnowledgebaseCategory = await models.sequelize.aokKnowledgebaseCategories.findOne({where: { id: util.String(id) }});
				if (objAokKnowledgebaseCategory) {
					await models.sequelize.aokKnowledgebaseCategories.update(updateAokKnowledgebaseCategory, { where: { id: util.String(id) } });
					objAokKnowledgebaseCategory = await models.sequelize.aokKnowledgebaseCategories.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateAokKnowledgebaseCategory._id;
				objAokKnowledgebaseCategory = await models.mongoose.aokKnowledgebaseCategories.findOneAndUpdate({id:id}, {$set: updateAokKnowledgebaseCategory}, {new: true});
			}
			return objAokKnowledgebaseCategory;
		} catch (error) {
			throw error;
		}
	}

	static async getAAokKnowledgebaseCategory(id, query) {
		try {
			let objAokKnowledgebaseCategory;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAokKnowledgebaseCategory = await models.sequelize.aokKnowledgebaseCategories.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAokKnowledgebaseCategory = await models.mongoose.aokKnowledgebaseCategories.find({id:util.String(id)}).select(query.select);
			}
			return objAokKnowledgebaseCategory;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAokKnowledgebaseCategory(id) {
		try {
			let objAokKnowledgebaseCategory;
			if(sql) {
				objAokKnowledgebaseCategory = await models.sequelize.aokKnowledgebaseCategories.findOne({ where: { id: util.String(id) } });
				if (objAokKnowledgebaseCategory) {
					await models.sequelize.aokKnowledgebaseCategories.destroy({where: { id: util.String(id) }});
				}
			} else {
				objAokKnowledgebaseCategory = await models.mongoose.aokKnowledgebaseCategories.deleteOne({id:util.String(id)});
			}
			return objAokKnowledgebaseCategory;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAokKnowledgebaseCategory;
    		if(sql) {
    			objAokKnowledgebaseCategory = await models.sequelize.aokKnowledgebaseCategories.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAokKnowledgebaseCategory = await models.mongoose.aokKnowledgebaseCategories.findOne({id: id});
    		}
    		return objAokKnowledgebaseCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAokKnowledgebaseCategory;
    		if(sql) {
    			objAokKnowledgebaseCategory = await models.sequelize.aokKnowledgebaseCategories.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAokKnowledgebaseCategory = await models.mongoose.aokKnowledgebaseCategories.findOne({deleted: deleted});
    		}
    		return objAokKnowledgebaseCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAokKnowledgebaseId(aokKnowledgebaseId, query = {}) {
    	try {
    		let objAokKnowledgebaseCategory;
    		if(sql) {
    			objAokKnowledgebaseCategory = await models.sequelize.aokKnowledgebaseCategories.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { aok_knowledgebase_id: aokKnowledgebaseId },
    			});
    		} else {
    			objAokKnowledgebaseCategory = await models.mongoose.aokKnowledgebaseCategories.findOne({aok_knowledgebase_id: aokKnowledgebaseId});
    		}
    		return objAokKnowledgebaseCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAokKnowledgeBaseCategoriesId(aokKnowledgeBaseCategoriesId, query = {}) {
    	try {
    		let objAokKnowledgebaseCategory;
    		if(sql) {
    			objAokKnowledgebaseCategory = await models.sequelize.aokKnowledgebaseCategories.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { aok_knowledge_base_categories_id: aokKnowledgeBaseCategoriesId },
    			});
    		} else {
    			objAokKnowledgebaseCategory = await models.mongoose.aokKnowledgebaseCategories.findOne({aok_knowledge_base_categories_id: aokKnowledgeBaseCategoriesId});
    		}
    		return objAokKnowledgebaseCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAokKnowledgebaseCategory;
    		if(sql) {
    			objAokKnowledgebaseCategory = await models.sequelize.aokKnowledgebaseCategories.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAokKnowledgebaseCategory = await models.mongoose.aokKnowledgebaseCategories.findOne({date_modified: dateModified});
    		}
    		return objAokKnowledgebaseCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAokKnowledgebaseCategoryById(id, updateAokKnowledgebaseCategory) {
    	try {
    		let objAokKnowledgebaseCategory;
    		if(sql) {
    			objAokKnowledgebaseCategory = await models.sequelize.aokKnowledgebaseCategories.findOne({where: { id: id }});
    			if (objAokKnowledgebaseCategory) {
    				objAokKnowledgebaseCategory = await models.sequelize.aokKnowledgebaseCategories.update(updateAokKnowledgebaseCategory, { where: { id: id } });
    			}
    		} else {
    			objAokKnowledgebaseCategory = await models.mongoose.aokKnowledgebaseCategories.findOneAndUpdate({id: id}, {$set: updateAokKnowledgebaseCategory}, {new: true});
    		}
    		return objAokKnowledgebaseCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgebaseCategoryByDeleted(deleted, updateAokKnowledgebaseCategory) {
    	try {
    		let objAokKnowledgebaseCategory;
    		if(sql) {
    			objAokKnowledgebaseCategory = await models.sequelize.aokKnowledgebaseCategories.findOne({where: { deleted: deleted }});
    			if (objAokKnowledgebaseCategory) {
    				objAokKnowledgebaseCategory = await models.sequelize.aokKnowledgebaseCategories.update(updateAokKnowledgebaseCategory, { where: { deleted: deleted } });
    			}
    		} else {
    			objAokKnowledgebaseCategory = await models.mongoose.aokKnowledgebaseCategories.findOneAndUpdate({deleted: deleted}, {$set: updateAokKnowledgebaseCategory}, {new: true});
    		}
    		return objAokKnowledgebaseCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgebaseCategoryByAokKnowledgebaseId(aokKnowledgebaseId, updateAokKnowledgebaseCategory) {
    	try {
    		let objAokKnowledgebaseCategory;
    		if(sql) {
    			objAokKnowledgebaseCategory = await models.sequelize.aokKnowledgebaseCategories.findOne({where: { aok_knowledgebase_id: aokKnowledgebaseId }});
    			if (objAokKnowledgebaseCategory) {
    				objAokKnowledgebaseCategory = await models.sequelize.aokKnowledgebaseCategories.update(updateAokKnowledgebaseCategory, { where: { aok_knowledgebase_id: aokKnowledgebaseId } });
    			}
    		} else {
    			objAokKnowledgebaseCategory = await models.mongoose.aokKnowledgebaseCategories.findOneAndUpdate({aok_knowledgebase_id: aokKnowledgebaseId}, {$set: updateAokKnowledgebaseCategory}, {new: true});
    		}
    		return objAokKnowledgebaseCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgebaseCategoryByAokKnowledgeBaseCategoriesId(aokKnowledgeBaseCategoriesId, updateAokKnowledgebaseCategory) {
    	try {
    		let objAokKnowledgebaseCategory;
    		if(sql) {
    			objAokKnowledgebaseCategory = await models.sequelize.aokKnowledgebaseCategories.findOne({where: { aok_knowledge_base_categories_id: aokKnowledgeBaseCategoriesId }});
    			if (objAokKnowledgebaseCategory) {
    				objAokKnowledgebaseCategory = await models.sequelize.aokKnowledgebaseCategories.update(updateAokKnowledgebaseCategory, { where: { aok_knowledge_base_categories_id: aokKnowledgeBaseCategoriesId } });
    			}
    		} else {
    			objAokKnowledgebaseCategory = await models.mongoose.aokKnowledgebaseCategories.findOneAndUpdate({aok_knowledge_base_categories_id: aokKnowledgeBaseCategoriesId}, {$set: updateAokKnowledgebaseCategory}, {new: true});
    		}
    		return objAokKnowledgebaseCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgebaseCategoryByDateModified(dateModified, updateAokKnowledgebaseCategory) {
    	try {
    		let objAokKnowledgebaseCategory;
    		if(sql) {
    			objAokKnowledgebaseCategory = await models.sequelize.aokKnowledgebaseCategories.findOne({where: { date_modified: dateModified }});
    			if (objAokKnowledgebaseCategory) {
    				objAokKnowledgebaseCategory = await models.sequelize.aokKnowledgebaseCategories.update(updateAokKnowledgebaseCategory, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAokKnowledgebaseCategory = await models.mongoose.aokKnowledgebaseCategories.findOneAndUpdate({date_modified: dateModified}, {$set: updateAokKnowledgebaseCategory}, {new: true});
    		}
    		return objAokKnowledgebaseCategory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AokKnowledgebaseCategoryService;
//</es-section>
