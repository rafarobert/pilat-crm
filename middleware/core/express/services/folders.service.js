/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:53 GMT-0400 (Bolivia Time)
 * Time: 14:56:53
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:53 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:53
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

class FolderService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllFolders(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.folders.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.folders.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllFolders(select = []) {
		try {
			if(sql) {
				return await models.sequelize.folders.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.folders.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addFolder(newFolder) {
		try {
			let objFolder;
			if(util.PrimaryKeyTypeIsString(models.sequelize.folders.primaryKeys.id.type.toString())) {
			    newFolder.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objFolder = await models.sequelize.folders.create(newFolder);
			} else {
				objFolder = new models.mongoose.folders(newFolder);
				await objFolder.save();
			}
			return objFolder;
		} catch (error) {
			throw error;
		}
	}

	static async updateFolder(id, updateFolder) {
		try {
			let objFolder;
			if(sql) {
				objFolder = await models.sequelize.folders.findOne({where: { id: util.Char(id) }});
				if (objFolder) {
					await models.sequelize.folders.update(updateFolder, { where: { id: util.Char(id) } });
					objFolder = await models.sequelize.folders.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateFolder._id;
				objFolder = await models.mongoose.folders.findOneAndUpdate({id:id}, {$set: updateFolder}, {new: true});
			}
			return objFolder;
		} catch (error) {
			throw error;
		}
	}

	static async getAFolder(id, query) {
		try {
			let objFolder;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objFolder = await models.sequelize.folders.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objFolder = await models.mongoose.folders.find({id:util.Char(id)}).select(query.select);
			}
			return objFolder;
		} catch (error) {
			throw error;
		}
	}

	static async deleteFolder(id) {
		try {
			let objFolder;
			if(sql) {
				objFolder = await models.sequelize.folders.findOne({ where: { id: util.Char(id) } });
				if (objFolder) {
					await models.sequelize.folders.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objFolder = await models.mongoose.folders.deleteOne({id:util.Char(id)});
			}
			return objFolder;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objFolder;
    		if(sql) {
    			objFolder = await models.sequelize.folders.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objFolder = await models.mongoose.folders.findOne({id: id});
    		}
    		return objFolder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByHasChild(hasChild, query = {}) {
    	try {
    		let objFolder;
    		if(sql) {
    			objFolder = await models.sequelize.folders.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { has_child: hasChild },
    			});
    		} else {
    			objFolder = await models.mongoose.folders.findOne({has_child: hasChild});
    		}
    		return objFolder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByIsGroup(isGroup, query = {}) {
    	try {
    		let objFolder;
    		if(sql) {
    			objFolder = await models.sequelize.folders.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { is_group: isGroup },
    			});
    		} else {
    			objFolder = await models.mongoose.folders.findOne({is_group: isGroup});
    		}
    		return objFolder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByIsDynamic(isDynamic, query = {}) {
    	try {
    		let objFolder;
    		if(sql) {
    			objFolder = await models.sequelize.folders.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { is_dynamic: isDynamic },
    			});
    		} else {
    			objFolder = await models.mongoose.folders.findOne({is_dynamic: isDynamic});
    		}
    		return objFolder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objFolder;
    		if(sql) {
    			objFolder = await models.sequelize.folders.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objFolder = await models.mongoose.folders.findOne({deleted: deleted});
    		}
    		return objFolder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objFolder;
    		if(sql) {
    			objFolder = await models.sequelize.folders.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objFolder = await models.mongoose.folders.findOne({name: name});
    		}
    		return objFolder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFolderType(folderType, query = {}) {
    	try {
    		let objFolder;
    		if(sql) {
    			objFolder = await models.sequelize.folders.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { folder_type: folderType },
    			});
    		} else {
    			objFolder = await models.mongoose.folders.findOne({folder_type: folderType});
    		}
    		return objFolder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDynamicQuery(dynamicQuery, query = {}) {
    	try {
    		let objFolder;
    		if(sql) {
    			objFolder = await models.sequelize.folders.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { dynamic_query: dynamicQuery },
    			});
    		} else {
    			objFolder = await models.mongoose.folders.findOne({dynamic_query: dynamicQuery});
    		}
    		return objFolder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentFolder(parentFolder, query = {}) {
    	try {
    		let objFolder;
    		if(sql) {
    			objFolder = await models.sequelize.folders.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_folder: parentFolder },
    			});
    		} else {
    			objFolder = await models.mongoose.folders.findOne({parent_folder: parentFolder});
    		}
    		return objFolder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignToId(assignToId, query = {}) {
    	try {
    		let objFolder;
    		if(sql) {
    			objFolder = await models.sequelize.folders.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assign_to_id: assignToId },
    			});
    		} else {
    			objFolder = await models.mongoose.folders.findOne({assign_to_id: assignToId});
    		}
    		return objFolder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objFolder;
    		if(sql) {
    			objFolder = await models.sequelize.folders.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objFolder = await models.mongoose.folders.findOne({created_by: createdBy});
    		}
    		return objFolder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedBy(modifiedBy, query = {}) {
    	try {
    		let objFolder;
    		if(sql) {
    			objFolder = await models.sequelize.folders.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_by: modifiedBy },
    			});
    		} else {
    			objFolder = await models.mongoose.folders.findOne({modified_by: modifiedBy});
    		}
    		return objFolder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateFolderById(id, updateFolder) {
    	try {
    		let objFolder;
    		if(sql) {
    			objFolder = await models.sequelize.folders.findOne({where: { id: id }});
    			if (objFolder) {
    				objFolder = await models.sequelize.folders.update(updateFolder, { where: { id: id } });
    			}
    		} else {
    			objFolder = await models.mongoose.folders.findOneAndUpdate({id: id}, {$set: updateFolder}, {new: true});
    		}
    		return objFolder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFolderByHasChild(hasChild, updateFolder) {
    	try {
    		let objFolder;
    		if(sql) {
    			objFolder = await models.sequelize.folders.findOne({where: { has_child: hasChild }});
    			if (objFolder) {
    				objFolder = await models.sequelize.folders.update(updateFolder, { where: { has_child: hasChild } });
    			}
    		} else {
    			objFolder = await models.mongoose.folders.findOneAndUpdate({has_child: hasChild}, {$set: updateFolder}, {new: true});
    		}
    		return objFolder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFolderByIsGroup(isGroup, updateFolder) {
    	try {
    		let objFolder;
    		if(sql) {
    			objFolder = await models.sequelize.folders.findOne({where: { is_group: isGroup }});
    			if (objFolder) {
    				objFolder = await models.sequelize.folders.update(updateFolder, { where: { is_group: isGroup } });
    			}
    		} else {
    			objFolder = await models.mongoose.folders.findOneAndUpdate({is_group: isGroup}, {$set: updateFolder}, {new: true});
    		}
    		return objFolder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFolderByIsDynamic(isDynamic, updateFolder) {
    	try {
    		let objFolder;
    		if(sql) {
    			objFolder = await models.sequelize.folders.findOne({where: { is_dynamic: isDynamic }});
    			if (objFolder) {
    				objFolder = await models.sequelize.folders.update(updateFolder, { where: { is_dynamic: isDynamic } });
    			}
    		} else {
    			objFolder = await models.mongoose.folders.findOneAndUpdate({is_dynamic: isDynamic}, {$set: updateFolder}, {new: true});
    		}
    		return objFolder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFolderByDeleted(deleted, updateFolder) {
    	try {
    		let objFolder;
    		if(sql) {
    			objFolder = await models.sequelize.folders.findOne({where: { deleted: deleted }});
    			if (objFolder) {
    				objFolder = await models.sequelize.folders.update(updateFolder, { where: { deleted: deleted } });
    			}
    		} else {
    			objFolder = await models.mongoose.folders.findOneAndUpdate({deleted: deleted}, {$set: updateFolder}, {new: true});
    		}
    		return objFolder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFolderByName(name, updateFolder) {
    	try {
    		let objFolder;
    		if(sql) {
    			objFolder = await models.sequelize.folders.findOne({where: { name: name }});
    			if (objFolder) {
    				objFolder = await models.sequelize.folders.update(updateFolder, { where: { name: name } });
    			}
    		} else {
    			objFolder = await models.mongoose.folders.findOneAndUpdate({name: name}, {$set: updateFolder}, {new: true});
    		}
    		return objFolder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFolderByFolderType(folderType, updateFolder) {
    	try {
    		let objFolder;
    		if(sql) {
    			objFolder = await models.sequelize.folders.findOne({where: { folder_type: folderType }});
    			if (objFolder) {
    				objFolder = await models.sequelize.folders.update(updateFolder, { where: { folder_type: folderType } });
    			}
    		} else {
    			objFolder = await models.mongoose.folders.findOneAndUpdate({folder_type: folderType}, {$set: updateFolder}, {new: true});
    		}
    		return objFolder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFolderByDynamicQuery(dynamicQuery, updateFolder) {
    	try {
    		let objFolder;
    		if(sql) {
    			objFolder = await models.sequelize.folders.findOne({where: { dynamic_query: dynamicQuery }});
    			if (objFolder) {
    				objFolder = await models.sequelize.folders.update(updateFolder, { where: { dynamic_query: dynamicQuery } });
    			}
    		} else {
    			objFolder = await models.mongoose.folders.findOneAndUpdate({dynamic_query: dynamicQuery}, {$set: updateFolder}, {new: true});
    		}
    		return objFolder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFolderByParentFolder(parentFolder, updateFolder) {
    	try {
    		let objFolder;
    		if(sql) {
    			objFolder = await models.sequelize.folders.findOne({where: { parent_folder: parentFolder }});
    			if (objFolder) {
    				objFolder = await models.sequelize.folders.update(updateFolder, { where: { parent_folder: parentFolder } });
    			}
    		} else {
    			objFolder = await models.mongoose.folders.findOneAndUpdate({parent_folder: parentFolder}, {$set: updateFolder}, {new: true});
    		}
    		return objFolder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFolderByAssignToId(assignToId, updateFolder) {
    	try {
    		let objFolder;
    		if(sql) {
    			objFolder = await models.sequelize.folders.findOne({where: { assign_to_id: assignToId }});
    			if (objFolder) {
    				objFolder = await models.sequelize.folders.update(updateFolder, { where: { assign_to_id: assignToId } });
    			}
    		} else {
    			objFolder = await models.mongoose.folders.findOneAndUpdate({assign_to_id: assignToId}, {$set: updateFolder}, {new: true});
    		}
    		return objFolder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFolderByCreatedBy(createdBy, updateFolder) {
    	try {
    		let objFolder;
    		if(sql) {
    			objFolder = await models.sequelize.folders.findOne({where: { created_by: createdBy }});
    			if (objFolder) {
    				objFolder = await models.sequelize.folders.update(updateFolder, { where: { created_by: createdBy } });
    			}
    		} else {
    			objFolder = await models.mongoose.folders.findOneAndUpdate({created_by: createdBy}, {$set: updateFolder}, {new: true});
    		}
    		return objFolder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFolderByModifiedBy(modifiedBy, updateFolder) {
    	try {
    		let objFolder;
    		if(sql) {
    			objFolder = await models.sequelize.folders.findOne({where: { modified_by: modifiedBy }});
    			if (objFolder) {
    				objFolder = await models.sequelize.folders.update(updateFolder, { where: { modified_by: modifiedBy } });
    			}
    		} else {
    			objFolder = await models.mongoose.folders.findOneAndUpdate({modified_by: modifiedBy}, {$set: updateFolder}, {new: true});
    		}
    		return objFolder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = FolderService;
//</es-section>
