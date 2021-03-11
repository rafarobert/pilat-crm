/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:51 GMT-0400 (Bolivia Time)
 * Time: 14:56:51
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:51 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:51
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

class FavoriteService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllFavorites(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.favorites.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['_id','ASC']],
                });
			} else {
				return await models.mongoose.favorites.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllFavorites(select = []) {
		try {
			if(sql) {
				return await models.sequelize.favorites.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.favorites.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addFavorite(newFavorite) {
		try {
			let objFavorite;
			if(util.PrimaryKeyTypeIsString(models.sequelize.favorites.primaryKeys.id.type.toString())) {
			    newFavorite.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objFavorite = await models.sequelize.favorites.create(newFavorite);
			} else {
				objFavorite = new models.mongoose.favorites(newFavorite);
				await objFavorite.save();
			}
			return objFavorite;
		} catch (error) {
			throw error;
		}
	}

	static async updateFavorite(id, updateFavorite) {
		try {
			let objFavorite;
			if(sql) {
				objFavorite = await models.sequelize.favorites.findOne({where: { id: util.Char(id) }});
				if (objFavorite) {
					await models.sequelize.favorites.update(updateFavorite, { where: { id: util.Char(id) } });
					objFavorite = await models.sequelize.favorites.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateFavorite._id;
				objFavorite = await models.mongoose.favorites.findOneAndUpdate({id:id}, {$set: updateFavorite}, {new: true});
			}
			return objFavorite;
		} catch (error) {
			throw error;
		}
	}

	static async getAFavorite(id, query) {
		try {
			let objFavorite;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objFavorite = await models.sequelize.favorites.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objFavorite = await models.mongoose.favorites.find({id:util.Char(id)}).select(query.select);
			}
			return objFavorite;
		} catch (error) {
			throw error;
		}
	}

	static async deleteFavorite(id) {
		try {
			let objFavorite;
			if(sql) {
				objFavorite = await models.sequelize.favorites.findOne({ where: { id: util.Char(id) } });
				if (objFavorite) {
					await models.sequelize.favorites.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objFavorite = await models.mongoose.favorites.deleteOne({id:util.Char(id)});
			}
			return objFavorite;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objFavorite;
    		if(sql) {
    			objFavorite = await models.sequelize.favorites.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objFavorite = await models.mongoose.favorites.findOne({id: id});
    		}
    		return objFavorite;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objFavorite;
    		if(sql) {
    			objFavorite = await models.sequelize.favorites.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objFavorite = await models.mongoose.favorites.findOne({deleted: deleted});
    		}
    		return objFavorite;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objFavorite;
    		if(sql) {
    			objFavorite = await models.sequelize.favorites.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objFavorite = await models.mongoose.favorites.findOne({name: name});
    		}
    		return objFavorite;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentType(parentType, query = {}) {
    	try {
    		let objFavorite;
    		if(sql) {
    			objFavorite = await models.sequelize.favorites.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_type: parentType },
    			});
    		} else {
    			objFavorite = await models.mongoose.favorites.findOne({parent_type: parentType});
    		}
    		return objFavorite;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objFavorite;
    		if(sql) {
    			objFavorite = await models.sequelize.favorites.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objFavorite = await models.mongoose.favorites.findOne({description: description});
    		}
    		return objFavorite;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objFavorite;
    		if(sql) {
    			objFavorite = await models.sequelize.favorites.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objFavorite = await models.mongoose.favorites.findOne({date_entered: dateEntered});
    		}
    		return objFavorite;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objFavorite;
    		if(sql) {
    			objFavorite = await models.sequelize.favorites.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objFavorite = await models.mongoose.favorites.findOne({date_modified: dateModified});
    		}
    		return objFavorite;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objFavorite;
    		if(sql) {
    			objFavorite = await models.sequelize.favorites.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objFavorite = await models.mongoose.favorites.findOne({modified_user_id: modifiedUserId});
    		}
    		return objFavorite;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objFavorite;
    		if(sql) {
    			objFavorite = await models.sequelize.favorites.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objFavorite = await models.mongoose.favorites.findOne({created_by: createdBy});
    		}
    		return objFavorite;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objFavorite;
    		if(sql) {
    			objFavorite = await models.sequelize.favorites.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objFavorite = await models.mongoose.favorites.findOne({assigned_user_id: assignedUserId});
    		}
    		return objFavorite;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objFavorite;
    		if(sql) {
    			objFavorite = await models.sequelize.favorites.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objFavorite = await models.mongoose.favorites.findOne({parent_id: parentId});
    		}
    		return objFavorite;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateFavoriteById(id, updateFavorite) {
    	try {
    		let objFavorite;
    		if(sql) {
    			objFavorite = await models.sequelize.favorites.findOne({where: { id: id }});
    			if (objFavorite) {
    				objFavorite = await models.sequelize.favorites.update(updateFavorite, { where: { id: id } });
    			}
    		} else {
    			objFavorite = await models.mongoose.favorites.findOneAndUpdate({id: id}, {$set: updateFavorite}, {new: true});
    		}
    		return objFavorite;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFavoriteByDeleted(deleted, updateFavorite) {
    	try {
    		let objFavorite;
    		if(sql) {
    			objFavorite = await models.sequelize.favorites.findOne({where: { deleted: deleted }});
    			if (objFavorite) {
    				objFavorite = await models.sequelize.favorites.update(updateFavorite, { where: { deleted: deleted } });
    			}
    		} else {
    			objFavorite = await models.mongoose.favorites.findOneAndUpdate({deleted: deleted}, {$set: updateFavorite}, {new: true});
    		}
    		return objFavorite;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFavoriteByName(name, updateFavorite) {
    	try {
    		let objFavorite;
    		if(sql) {
    			objFavorite = await models.sequelize.favorites.findOne({where: { name: name }});
    			if (objFavorite) {
    				objFavorite = await models.sequelize.favorites.update(updateFavorite, { where: { name: name } });
    			}
    		} else {
    			objFavorite = await models.mongoose.favorites.findOneAndUpdate({name: name}, {$set: updateFavorite}, {new: true});
    		}
    		return objFavorite;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFavoriteByParentType(parentType, updateFavorite) {
    	try {
    		let objFavorite;
    		if(sql) {
    			objFavorite = await models.sequelize.favorites.findOne({where: { parent_type: parentType }});
    			if (objFavorite) {
    				objFavorite = await models.sequelize.favorites.update(updateFavorite, { where: { parent_type: parentType } });
    			}
    		} else {
    			objFavorite = await models.mongoose.favorites.findOneAndUpdate({parent_type: parentType}, {$set: updateFavorite}, {new: true});
    		}
    		return objFavorite;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFavoriteByDescription(description, updateFavorite) {
    	try {
    		let objFavorite;
    		if(sql) {
    			objFavorite = await models.sequelize.favorites.findOne({where: { description: description }});
    			if (objFavorite) {
    				objFavorite = await models.sequelize.favorites.update(updateFavorite, { where: { description: description } });
    			}
    		} else {
    			objFavorite = await models.mongoose.favorites.findOneAndUpdate({description: description}, {$set: updateFavorite}, {new: true});
    		}
    		return objFavorite;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFavoriteByDateEntered(dateEntered, updateFavorite) {
    	try {
    		let objFavorite;
    		if(sql) {
    			objFavorite = await models.sequelize.favorites.findOne({where: { date_entered: dateEntered }});
    			if (objFavorite) {
    				objFavorite = await models.sequelize.favorites.update(updateFavorite, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objFavorite = await models.mongoose.favorites.findOneAndUpdate({date_entered: dateEntered}, {$set: updateFavorite}, {new: true});
    		}
    		return objFavorite;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFavoriteByDateModified(dateModified, updateFavorite) {
    	try {
    		let objFavorite;
    		if(sql) {
    			objFavorite = await models.sequelize.favorites.findOne({where: { date_modified: dateModified }});
    			if (objFavorite) {
    				objFavorite = await models.sequelize.favorites.update(updateFavorite, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objFavorite = await models.mongoose.favorites.findOneAndUpdate({date_modified: dateModified}, {$set: updateFavorite}, {new: true});
    		}
    		return objFavorite;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFavoriteByModifiedUserId(modifiedUserId, updateFavorite) {
    	try {
    		let objFavorite;
    		if(sql) {
    			objFavorite = await models.sequelize.favorites.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objFavorite) {
    				objFavorite = await models.sequelize.favorites.update(updateFavorite, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objFavorite = await models.mongoose.favorites.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateFavorite}, {new: true});
    		}
    		return objFavorite;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFavoriteByCreatedBy(createdBy, updateFavorite) {
    	try {
    		let objFavorite;
    		if(sql) {
    			objFavorite = await models.sequelize.favorites.findOne({where: { created_by: createdBy }});
    			if (objFavorite) {
    				objFavorite = await models.sequelize.favorites.update(updateFavorite, { where: { created_by: createdBy } });
    			}
    		} else {
    			objFavorite = await models.mongoose.favorites.findOneAndUpdate({created_by: createdBy}, {$set: updateFavorite}, {new: true});
    		}
    		return objFavorite;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFavoriteByAssignedUserId(assignedUserId, updateFavorite) {
    	try {
    		let objFavorite;
    		if(sql) {
    			objFavorite = await models.sequelize.favorites.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objFavorite) {
    				objFavorite = await models.sequelize.favorites.update(updateFavorite, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objFavorite = await models.mongoose.favorites.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateFavorite}, {new: true});
    		}
    		return objFavorite;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFavoriteByParentId(parentId, updateFavorite) {
    	try {
    		let objFavorite;
    		if(sql) {
    			objFavorite = await models.sequelize.favorites.findOne({where: { parent_id: parentId }});
    			if (objFavorite) {
    				objFavorite = await models.sequelize.favorites.update(updateFavorite, { where: { parent_id: parentId } });
    			}
    		} else {
    			objFavorite = await models.mongoose.favorites.findOneAndUpdate({parent_id: parentId}, {$set: updateFavorite}, {new: true});
    		}
    		return objFavorite;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = FavoriteService;
//</es-section>
