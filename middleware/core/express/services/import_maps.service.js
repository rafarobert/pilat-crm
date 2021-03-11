/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:02 GMT-0400 (Bolivia Time)
 * Time: 14:57:2
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:02 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:2
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

class ImportMapService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllImportMaps(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.importMaps.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['_id','ASC']],
                });
			} else {
				return await models.mongoose.importMaps.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllImportMaps(select = []) {
		try {
			if(sql) {
				return await models.sequelize.importMaps.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.importMaps.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addImportMap(newImportMap) {
		try {
			let objImportMap;
			if(util.PrimaryKeyTypeIsString(models.sequelize.importMaps.primaryKeys.id.type.toString())) {
			    newImportMap.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objImportMap = await models.sequelize.importMaps.create(newImportMap);
			} else {
				objImportMap = new models.mongoose.importMaps(newImportMap);
				await objImportMap.save();
			}
			return objImportMap;
		} catch (error) {
			throw error;
		}
	}

	static async updateImportMap(id, updateImportMap) {
		try {
			let objImportMap;
			if(sql) {
				objImportMap = await models.sequelize.importMaps.findOne({where: { id: util.Char(id) }});
				if (objImportMap) {
					await models.sequelize.importMaps.update(updateImportMap, { where: { id: util.Char(id) } });
					objImportMap = await models.sequelize.importMaps.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateImportMap._id;
				objImportMap = await models.mongoose.importMaps.findOneAndUpdate({id:id}, {$set: updateImportMap}, {new: true});
			}
			return objImportMap;
		} catch (error) {
			throw error;
		}
	}

	static async getAImportMap(id, query) {
		try {
			let objImportMap;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objImportMap = await models.sequelize.importMaps.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objImportMap = await models.mongoose.importMaps.find({id:util.Char(id)}).select(query.select);
			}
			return objImportMap;
		} catch (error) {
			throw error;
		}
	}

	static async deleteImportMap(id) {
		try {
			let objImportMap;
			if(sql) {
				objImportMap = await models.sequelize.importMaps.findOne({ where: { id: util.Char(id) } });
				if (objImportMap) {
					await models.sequelize.importMaps.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objImportMap = await models.mongoose.importMaps.deleteOne({id:util.Char(id)});
			}
			return objImportMap;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objImportMap;
    		if(sql) {
    			objImportMap = await models.sequelize.importMaps.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objImportMap = await models.mongoose.importMaps.findOne({id: id});
    		}
    		return objImportMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByHasHeader(hasHeader, query = {}) {
    	try {
    		let objImportMap;
    		if(sql) {
    			objImportMap = await models.sequelize.importMaps.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { has_header: hasHeader },
    			});
    		} else {
    			objImportMap = await models.mongoose.importMaps.findOne({has_header: hasHeader});
    		}
    		return objImportMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objImportMap;
    		if(sql) {
    			objImportMap = await models.sequelize.importMaps.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objImportMap = await models.mongoose.importMaps.findOne({deleted: deleted});
    		}
    		return objImportMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objImportMap;
    		if(sql) {
    			objImportMap = await models.sequelize.importMaps.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objImportMap = await models.mongoose.importMaps.findOne({name: name});
    		}
    		return objImportMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySource(source, query = {}) {
    	try {
    		let objImportMap;
    		if(sql) {
    			objImportMap = await models.sequelize.importMaps.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { source: source },
    			});
    		} else {
    			objImportMap = await models.mongoose.importMaps.findOne({source: source});
    		}
    		return objImportMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByEnclosure(enclosure, query = {}) {
    	try {
    		let objImportMap;
    		if(sql) {
    			objImportMap = await models.sequelize.importMaps.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { enclosure: enclosure },
    			});
    		} else {
    			objImportMap = await models.mongoose.importMaps.findOne({enclosure: enclosure});
    		}
    		return objImportMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDelimiter(delimiter, query = {}) {
    	try {
    		let objImportMap;
    		if(sql) {
    			objImportMap = await models.sequelize.importMaps.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { delimiter: delimiter },
    			});
    		} else {
    			objImportMap = await models.mongoose.importMaps.findOne({delimiter: delimiter});
    		}
    		return objImportMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModule(module, query = {}) {
    	try {
    		let objImportMap;
    		if(sql) {
    			objImportMap = await models.sequelize.importMaps.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { module: module },
    			});
    		} else {
    			objImportMap = await models.mongoose.importMaps.findOne({module: module});
    		}
    		return objImportMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByIsPublished(isPublished, query = {}) {
    	try {
    		let objImportMap;
    		if(sql) {
    			objImportMap = await models.sequelize.importMaps.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { is_published: isPublished },
    			});
    		} else {
    			objImportMap = await models.mongoose.importMaps.findOne({is_published: isPublished});
    		}
    		return objImportMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByContent(content, query = {}) {
    	try {
    		let objImportMap;
    		if(sql) {
    			objImportMap = await models.sequelize.importMaps.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { content: content },
    			});
    		} else {
    			objImportMap = await models.mongoose.importMaps.findOne({content: content});
    		}
    		return objImportMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDefaultValues(defaultValues, query = {}) {
    	try {
    		let objImportMap;
    		if(sql) {
    			objImportMap = await models.sequelize.importMaps.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { default_values: defaultValues },
    			});
    		} else {
    			objImportMap = await models.mongoose.importMaps.findOne({default_values: defaultValues});
    		}
    		return objImportMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objImportMap;
    		if(sql) {
    			objImportMap = await models.sequelize.importMaps.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objImportMap = await models.mongoose.importMaps.findOne({date_entered: dateEntered});
    		}
    		return objImportMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objImportMap;
    		if(sql) {
    			objImportMap = await models.sequelize.importMaps.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objImportMap = await models.mongoose.importMaps.findOne({date_modified: dateModified});
    		}
    		return objImportMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objImportMap;
    		if(sql) {
    			objImportMap = await models.sequelize.importMaps.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objImportMap = await models.mongoose.importMaps.findOne({assigned_user_id: assignedUserId});
    		}
    		return objImportMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateImportMapById(id, updateImportMap) {
    	try {
    		let objImportMap;
    		if(sql) {
    			objImportMap = await models.sequelize.importMaps.findOne({where: { id: id }});
    			if (objImportMap) {
    				objImportMap = await models.sequelize.importMaps.update(updateImportMap, { where: { id: id } });
    			}
    		} else {
    			objImportMap = await models.mongoose.importMaps.findOneAndUpdate({id: id}, {$set: updateImportMap}, {new: true});
    		}
    		return objImportMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateImportMapByHasHeader(hasHeader, updateImportMap) {
    	try {
    		let objImportMap;
    		if(sql) {
    			objImportMap = await models.sequelize.importMaps.findOne({where: { has_header: hasHeader }});
    			if (objImportMap) {
    				objImportMap = await models.sequelize.importMaps.update(updateImportMap, { where: { has_header: hasHeader } });
    			}
    		} else {
    			objImportMap = await models.mongoose.importMaps.findOneAndUpdate({has_header: hasHeader}, {$set: updateImportMap}, {new: true});
    		}
    		return objImportMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateImportMapByDeleted(deleted, updateImportMap) {
    	try {
    		let objImportMap;
    		if(sql) {
    			objImportMap = await models.sequelize.importMaps.findOne({where: { deleted: deleted }});
    			if (objImportMap) {
    				objImportMap = await models.sequelize.importMaps.update(updateImportMap, { where: { deleted: deleted } });
    			}
    		} else {
    			objImportMap = await models.mongoose.importMaps.findOneAndUpdate({deleted: deleted}, {$set: updateImportMap}, {new: true});
    		}
    		return objImportMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateImportMapByName(name, updateImportMap) {
    	try {
    		let objImportMap;
    		if(sql) {
    			objImportMap = await models.sequelize.importMaps.findOne({where: { name: name }});
    			if (objImportMap) {
    				objImportMap = await models.sequelize.importMaps.update(updateImportMap, { where: { name: name } });
    			}
    		} else {
    			objImportMap = await models.mongoose.importMaps.findOneAndUpdate({name: name}, {$set: updateImportMap}, {new: true});
    		}
    		return objImportMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateImportMapBySource(source, updateImportMap) {
    	try {
    		let objImportMap;
    		if(sql) {
    			objImportMap = await models.sequelize.importMaps.findOne({where: { source: source }});
    			if (objImportMap) {
    				objImportMap = await models.sequelize.importMaps.update(updateImportMap, { where: { source: source } });
    			}
    		} else {
    			objImportMap = await models.mongoose.importMaps.findOneAndUpdate({source: source}, {$set: updateImportMap}, {new: true});
    		}
    		return objImportMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateImportMapByEnclosure(enclosure, updateImportMap) {
    	try {
    		let objImportMap;
    		if(sql) {
    			objImportMap = await models.sequelize.importMaps.findOne({where: { enclosure: enclosure }});
    			if (objImportMap) {
    				objImportMap = await models.sequelize.importMaps.update(updateImportMap, { where: { enclosure: enclosure } });
    			}
    		} else {
    			objImportMap = await models.mongoose.importMaps.findOneAndUpdate({enclosure: enclosure}, {$set: updateImportMap}, {new: true});
    		}
    		return objImportMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateImportMapByDelimiter(delimiter, updateImportMap) {
    	try {
    		let objImportMap;
    		if(sql) {
    			objImportMap = await models.sequelize.importMaps.findOne({where: { delimiter: delimiter }});
    			if (objImportMap) {
    				objImportMap = await models.sequelize.importMaps.update(updateImportMap, { where: { delimiter: delimiter } });
    			}
    		} else {
    			objImportMap = await models.mongoose.importMaps.findOneAndUpdate({delimiter: delimiter}, {$set: updateImportMap}, {new: true});
    		}
    		return objImportMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateImportMapByModule(module, updateImportMap) {
    	try {
    		let objImportMap;
    		if(sql) {
    			objImportMap = await models.sequelize.importMaps.findOne({where: { module: module }});
    			if (objImportMap) {
    				objImportMap = await models.sequelize.importMaps.update(updateImportMap, { where: { module: module } });
    			}
    		} else {
    			objImportMap = await models.mongoose.importMaps.findOneAndUpdate({module: module}, {$set: updateImportMap}, {new: true});
    		}
    		return objImportMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateImportMapByIsPublished(isPublished, updateImportMap) {
    	try {
    		let objImportMap;
    		if(sql) {
    			objImportMap = await models.sequelize.importMaps.findOne({where: { is_published: isPublished }});
    			if (objImportMap) {
    				objImportMap = await models.sequelize.importMaps.update(updateImportMap, { where: { is_published: isPublished } });
    			}
    		} else {
    			objImportMap = await models.mongoose.importMaps.findOneAndUpdate({is_published: isPublished}, {$set: updateImportMap}, {new: true});
    		}
    		return objImportMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateImportMapByContent(content, updateImportMap) {
    	try {
    		let objImportMap;
    		if(sql) {
    			objImportMap = await models.sequelize.importMaps.findOne({where: { content: content }});
    			if (objImportMap) {
    				objImportMap = await models.sequelize.importMaps.update(updateImportMap, { where: { content: content } });
    			}
    		} else {
    			objImportMap = await models.mongoose.importMaps.findOneAndUpdate({content: content}, {$set: updateImportMap}, {new: true});
    		}
    		return objImportMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateImportMapByDefaultValues(defaultValues, updateImportMap) {
    	try {
    		let objImportMap;
    		if(sql) {
    			objImportMap = await models.sequelize.importMaps.findOne({where: { default_values: defaultValues }});
    			if (objImportMap) {
    				objImportMap = await models.sequelize.importMaps.update(updateImportMap, { where: { default_values: defaultValues } });
    			}
    		} else {
    			objImportMap = await models.mongoose.importMaps.findOneAndUpdate({default_values: defaultValues}, {$set: updateImportMap}, {new: true});
    		}
    		return objImportMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateImportMapByDateEntered(dateEntered, updateImportMap) {
    	try {
    		let objImportMap;
    		if(sql) {
    			objImportMap = await models.sequelize.importMaps.findOne({where: { date_entered: dateEntered }});
    			if (objImportMap) {
    				objImportMap = await models.sequelize.importMaps.update(updateImportMap, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objImportMap = await models.mongoose.importMaps.findOneAndUpdate({date_entered: dateEntered}, {$set: updateImportMap}, {new: true});
    		}
    		return objImportMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateImportMapByDateModified(dateModified, updateImportMap) {
    	try {
    		let objImportMap;
    		if(sql) {
    			objImportMap = await models.sequelize.importMaps.findOne({where: { date_modified: dateModified }});
    			if (objImportMap) {
    				objImportMap = await models.sequelize.importMaps.update(updateImportMap, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objImportMap = await models.mongoose.importMaps.findOneAndUpdate({date_modified: dateModified}, {$set: updateImportMap}, {new: true});
    		}
    		return objImportMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateImportMapByAssignedUserId(assignedUserId, updateImportMap) {
    	try {
    		let objImportMap;
    		if(sql) {
    			objImportMap = await models.sequelize.importMaps.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objImportMap) {
    				objImportMap = await models.sequelize.importMaps.update(updateImportMap, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objImportMap = await models.mongoose.importMaps.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateImportMap}, {new: true});
    		}
    		return objImportMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = ImportMapService;
//</es-section>
