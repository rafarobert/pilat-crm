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

class FolderRelService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllFoldersRel(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.foldersRel.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['_id','ASC']],
                });
			} else {
				return await models.mongoose.foldersRel.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllFoldersRel(select = []) {
		try {
			if(sql) {
				return await models.sequelize.foldersRel.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.foldersRel.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addFolderRel(newFolderRel) {
		try {
			let objFolderRel;
			if(util.PrimaryKeyTypeIsString(models.sequelize.foldersRel.primaryKeys.id.type.toString())) {
			    newFolderRel.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objFolderRel = await models.sequelize.foldersRel.create(newFolderRel);
			} else {
				objFolderRel = new models.mongoose.foldersRel(newFolderRel);
				await objFolderRel.save();
			}
			return objFolderRel;
		} catch (error) {
			throw error;
		}
	}

	static async updateFolderRel(id, updateFolderRel) {
		try {
			let objFolderRel;
			if(sql) {
				objFolderRel = await models.sequelize.foldersRel.findOne({where: { id: util.Char(id) }});
				if (objFolderRel) {
					await models.sequelize.foldersRel.update(updateFolderRel, { where: { id: util.Char(id) } });
					objFolderRel = await models.sequelize.foldersRel.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateFolderRel._id;
				objFolderRel = await models.mongoose.foldersRel.findOneAndUpdate({id:id}, {$set: updateFolderRel}, {new: true});
			}
			return objFolderRel;
		} catch (error) {
			throw error;
		}
	}

	static async getAFolderRel(id, query) {
		try {
			let objFolderRel;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objFolderRel = await models.sequelize.foldersRel.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objFolderRel = await models.mongoose.foldersRel.find({id:util.Char(id)}).select(query.select);
			}
			return objFolderRel;
		} catch (error) {
			throw error;
		}
	}

	static async deleteFolderRel(id) {
		try {
			let objFolderRel;
			if(sql) {
				objFolderRel = await models.sequelize.foldersRel.findOne({ where: { id: util.Char(id) } });
				if (objFolderRel) {
					await models.sequelize.foldersRel.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objFolderRel = await models.mongoose.foldersRel.deleteOne({id:util.Char(id)});
			}
			return objFolderRel;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objFolderRel;
    		if(sql) {
    			objFolderRel = await models.sequelize.foldersRel.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objFolderRel = await models.mongoose.foldersRel.findOne({id: id});
    		}
    		return objFolderRel;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objFolderRel;
    		if(sql) {
    			objFolderRel = await models.sequelize.foldersRel.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objFolderRel = await models.mongoose.foldersRel.findOne({deleted: deleted});
    		}
    		return objFolderRel;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPolymorphicModule(polymorphicModule, query = {}) {
    	try {
    		let objFolderRel;
    		if(sql) {
    			objFolderRel = await models.sequelize.foldersRel.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { polymorphic_module: polymorphicModule },
    			});
    		} else {
    			objFolderRel = await models.mongoose.foldersRel.findOne({polymorphic_module: polymorphicModule});
    		}
    		return objFolderRel;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFolderId(folderId, query = {}) {
    	try {
    		let objFolderRel;
    		if(sql) {
    			objFolderRel = await models.sequelize.foldersRel.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { folder_id: folderId },
    			});
    		} else {
    			objFolderRel = await models.mongoose.foldersRel.findOne({folder_id: folderId});
    		}
    		return objFolderRel;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPolymorphicId(polymorphicId, query = {}) {
    	try {
    		let objFolderRel;
    		if(sql) {
    			objFolderRel = await models.sequelize.foldersRel.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { polymorphic_id: polymorphicId },
    			});
    		} else {
    			objFolderRel = await models.mongoose.foldersRel.findOne({polymorphic_id: polymorphicId});
    		}
    		return objFolderRel;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateFolderRelById(id, updateFolderRel) {
    	try {
    		let objFolderRel;
    		if(sql) {
    			objFolderRel = await models.sequelize.foldersRel.findOne({where: { id: id }});
    			if (objFolderRel) {
    				objFolderRel = await models.sequelize.foldersRel.update(updateFolderRel, { where: { id: id } });
    			}
    		} else {
    			objFolderRel = await models.mongoose.foldersRel.findOneAndUpdate({id: id}, {$set: updateFolderRel}, {new: true});
    		}
    		return objFolderRel;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFolderRelByDeleted(deleted, updateFolderRel) {
    	try {
    		let objFolderRel;
    		if(sql) {
    			objFolderRel = await models.sequelize.foldersRel.findOne({where: { deleted: deleted }});
    			if (objFolderRel) {
    				objFolderRel = await models.sequelize.foldersRel.update(updateFolderRel, { where: { deleted: deleted } });
    			}
    		} else {
    			objFolderRel = await models.mongoose.foldersRel.findOneAndUpdate({deleted: deleted}, {$set: updateFolderRel}, {new: true});
    		}
    		return objFolderRel;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFolderRelByPolymorphicModule(polymorphicModule, updateFolderRel) {
    	try {
    		let objFolderRel;
    		if(sql) {
    			objFolderRel = await models.sequelize.foldersRel.findOne({where: { polymorphic_module: polymorphicModule }});
    			if (objFolderRel) {
    				objFolderRel = await models.sequelize.foldersRel.update(updateFolderRel, { where: { polymorphic_module: polymorphicModule } });
    			}
    		} else {
    			objFolderRel = await models.mongoose.foldersRel.findOneAndUpdate({polymorphic_module: polymorphicModule}, {$set: updateFolderRel}, {new: true});
    		}
    		return objFolderRel;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFolderRelByFolderId(folderId, updateFolderRel) {
    	try {
    		let objFolderRel;
    		if(sql) {
    			objFolderRel = await models.sequelize.foldersRel.findOne({where: { folder_id: folderId }});
    			if (objFolderRel) {
    				objFolderRel = await models.sequelize.foldersRel.update(updateFolderRel, { where: { folder_id: folderId } });
    			}
    		} else {
    			objFolderRel = await models.mongoose.foldersRel.findOneAndUpdate({folder_id: folderId}, {$set: updateFolderRel}, {new: true});
    		}
    		return objFolderRel;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFolderRelByPolymorphicId(polymorphicId, updateFolderRel) {
    	try {
    		let objFolderRel;
    		if(sql) {
    			objFolderRel = await models.sequelize.foldersRel.findOne({where: { polymorphic_id: polymorphicId }});
    			if (objFolderRel) {
    				objFolderRel = await models.sequelize.foldersRel.update(updateFolderRel, { where: { polymorphic_id: polymorphicId } });
    			}
    		} else {
    			objFolderRel = await models.mongoose.foldersRel.findOneAndUpdate({polymorphic_id: polymorphicId}, {$set: updateFolderRel}, {new: true});
    		}
    		return objFolderRel;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = FolderRelService;
//</es-section>
