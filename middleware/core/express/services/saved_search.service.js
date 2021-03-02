/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:29 GMT-0400 (Bolivia Time)
 * Time: 14:1:29
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:29 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:29
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

class SavedSearchService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllSavedSearch(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.savedSearch.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.savedSearch.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllSavedSearch(select = []) {
		try {
			if(sql) {
				return await models.sequelize.savedSearch.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.savedSearch.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addSavedSearch(newSavedSearch) {
		try {
			let objSavedSearch;
			if(util.PrimaryKeyTypeIsString(models.sequelize.savedSearch.primaryKeys.id.type.toString())) {
			    newSavedSearch.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objSavedSearch = await models.sequelize.savedSearch.create(newSavedSearch);
			} else {
				objSavedSearch = new models.mongoose.savedSearch(newSavedSearch);
				await objSavedSearch.save();
			}
			return objSavedSearch;
		} catch (error) {
			throw error;
		}
	}

	static async updateSavedSearch(id, updateSavedSearch) {
		try {
			let objSavedSearch;
			if(sql) {
				objSavedSearch = await models.sequelize.savedSearch.findOne({where: { id: util.Char(id) }});
				if (objSavedSearch) {
					await models.sequelize.savedSearch.update(updateSavedSearch, { where: { id: util.Char(id) } });
					objSavedSearch = await models.sequelize.savedSearch.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateSavedSearch._id;
				objSavedSearch = await models.mongoose.savedSearch.findOneAndUpdate({id:id}, {$set: updateSavedSearch}, {new: true});
			}
			return objSavedSearch;
		} catch (error) {
			throw error;
		}
	}

	static async getASavedSearch(id, query) {
		try {
			let objSavedSearch;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objSavedSearch = await models.sequelize.savedSearch.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objSavedSearch = await models.mongoose.savedSearch.find({id:util.Char(id)}).select(query.select);
			}
			return objSavedSearch;
		} catch (error) {
			throw error;
		}
	}

	static async deleteSavedSearch(id) {
		try {
			let objSavedSearch;
			if(sql) {
				objSavedSearch = await models.sequelize.savedSearch.findOne({ where: { id: util.Char(id) } });
				if (objSavedSearch) {
					await models.sequelize.savedSearch.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objSavedSearch = await models.mongoose.savedSearch.deleteOne({id:util.Char(id)});
			}
			return objSavedSearch;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objSavedSearch;
    		if(sql) {
    			objSavedSearch = await models.sequelize.savedSearch.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objSavedSearch = await models.mongoose.savedSearch.findOne({id: id});
    		}
    		return objSavedSearch;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objSavedSearch;
    		if(sql) {
    			objSavedSearch = await models.sequelize.savedSearch.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objSavedSearch = await models.mongoose.savedSearch.findOne({deleted: deleted});
    		}
    		return objSavedSearch;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objSavedSearch;
    		if(sql) {
    			objSavedSearch = await models.sequelize.savedSearch.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objSavedSearch = await models.mongoose.savedSearch.findOne({name: name});
    		}
    		return objSavedSearch;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySearchModule(searchModule, query = {}) {
    	try {
    		let objSavedSearch;
    		if(sql) {
    			objSavedSearch = await models.sequelize.savedSearch.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { search_module: searchModule },
    			});
    		} else {
    			objSavedSearch = await models.mongoose.savedSearch.findOne({search_module: searchModule});
    		}
    		return objSavedSearch;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByContents(contents, query = {}) {
    	try {
    		let objSavedSearch;
    		if(sql) {
    			objSavedSearch = await models.sequelize.savedSearch.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { contents: contents },
    			});
    		} else {
    			objSavedSearch = await models.mongoose.savedSearch.findOne({contents: contents});
    		}
    		return objSavedSearch;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objSavedSearch;
    		if(sql) {
    			objSavedSearch = await models.sequelize.savedSearch.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objSavedSearch = await models.mongoose.savedSearch.findOne({description: description});
    		}
    		return objSavedSearch;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objSavedSearch;
    		if(sql) {
    			objSavedSearch = await models.sequelize.savedSearch.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objSavedSearch = await models.mongoose.savedSearch.findOne({date_entered: dateEntered});
    		}
    		return objSavedSearch;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objSavedSearch;
    		if(sql) {
    			objSavedSearch = await models.sequelize.savedSearch.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objSavedSearch = await models.mongoose.savedSearch.findOne({date_modified: dateModified});
    		}
    		return objSavedSearch;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objSavedSearch;
    		if(sql) {
    			objSavedSearch = await models.sequelize.savedSearch.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objSavedSearch = await models.mongoose.savedSearch.findOne({assigned_user_id: assignedUserId});
    		}
    		return objSavedSearch;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateSavedSearchById(id, updateSavedSearch) {
    	try {
    		let objSavedSearch;
    		if(sql) {
    			objSavedSearch = await models.sequelize.savedSearch.findOne({where: { id: id }});
    			if (objSavedSearch) {
    				objSavedSearch = await models.sequelize.savedSearch.update(updateSavedSearch, { where: { id: id } });
    			}
    		} else {
    			objSavedSearch = await models.mongoose.savedSearch.findOneAndUpdate({id: id}, {$set: updateSavedSearch}, {new: true});
    		}
    		return objSavedSearch;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSavedSearchByDeleted(deleted, updateSavedSearch) {
    	try {
    		let objSavedSearch;
    		if(sql) {
    			objSavedSearch = await models.sequelize.savedSearch.findOne({where: { deleted: deleted }});
    			if (objSavedSearch) {
    				objSavedSearch = await models.sequelize.savedSearch.update(updateSavedSearch, { where: { deleted: deleted } });
    			}
    		} else {
    			objSavedSearch = await models.mongoose.savedSearch.findOneAndUpdate({deleted: deleted}, {$set: updateSavedSearch}, {new: true});
    		}
    		return objSavedSearch;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSavedSearchByName(name, updateSavedSearch) {
    	try {
    		let objSavedSearch;
    		if(sql) {
    			objSavedSearch = await models.sequelize.savedSearch.findOne({where: { name: name }});
    			if (objSavedSearch) {
    				objSavedSearch = await models.sequelize.savedSearch.update(updateSavedSearch, { where: { name: name } });
    			}
    		} else {
    			objSavedSearch = await models.mongoose.savedSearch.findOneAndUpdate({name: name}, {$set: updateSavedSearch}, {new: true});
    		}
    		return objSavedSearch;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSavedSearchBySearchModule(searchModule, updateSavedSearch) {
    	try {
    		let objSavedSearch;
    		if(sql) {
    			objSavedSearch = await models.sequelize.savedSearch.findOne({where: { search_module: searchModule }});
    			if (objSavedSearch) {
    				objSavedSearch = await models.sequelize.savedSearch.update(updateSavedSearch, { where: { search_module: searchModule } });
    			}
    		} else {
    			objSavedSearch = await models.mongoose.savedSearch.findOneAndUpdate({search_module: searchModule}, {$set: updateSavedSearch}, {new: true});
    		}
    		return objSavedSearch;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSavedSearchByContents(contents, updateSavedSearch) {
    	try {
    		let objSavedSearch;
    		if(sql) {
    			objSavedSearch = await models.sequelize.savedSearch.findOne({where: { contents: contents }});
    			if (objSavedSearch) {
    				objSavedSearch = await models.sequelize.savedSearch.update(updateSavedSearch, { where: { contents: contents } });
    			}
    		} else {
    			objSavedSearch = await models.mongoose.savedSearch.findOneAndUpdate({contents: contents}, {$set: updateSavedSearch}, {new: true});
    		}
    		return objSavedSearch;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSavedSearchByDescription(description, updateSavedSearch) {
    	try {
    		let objSavedSearch;
    		if(sql) {
    			objSavedSearch = await models.sequelize.savedSearch.findOne({where: { description: description }});
    			if (objSavedSearch) {
    				objSavedSearch = await models.sequelize.savedSearch.update(updateSavedSearch, { where: { description: description } });
    			}
    		} else {
    			objSavedSearch = await models.mongoose.savedSearch.findOneAndUpdate({description: description}, {$set: updateSavedSearch}, {new: true});
    		}
    		return objSavedSearch;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSavedSearchByDateEntered(dateEntered, updateSavedSearch) {
    	try {
    		let objSavedSearch;
    		if(sql) {
    			objSavedSearch = await models.sequelize.savedSearch.findOne({where: { date_entered: dateEntered }});
    			if (objSavedSearch) {
    				objSavedSearch = await models.sequelize.savedSearch.update(updateSavedSearch, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objSavedSearch = await models.mongoose.savedSearch.findOneAndUpdate({date_entered: dateEntered}, {$set: updateSavedSearch}, {new: true});
    		}
    		return objSavedSearch;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSavedSearchByDateModified(dateModified, updateSavedSearch) {
    	try {
    		let objSavedSearch;
    		if(sql) {
    			objSavedSearch = await models.sequelize.savedSearch.findOne({where: { date_modified: dateModified }});
    			if (objSavedSearch) {
    				objSavedSearch = await models.sequelize.savedSearch.update(updateSavedSearch, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objSavedSearch = await models.mongoose.savedSearch.findOneAndUpdate({date_modified: dateModified}, {$set: updateSavedSearch}, {new: true});
    		}
    		return objSavedSearch;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSavedSearchByAssignedUserId(assignedUserId, updateSavedSearch) {
    	try {
    		let objSavedSearch;
    		if(sql) {
    			objSavedSearch = await models.sequelize.savedSearch.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objSavedSearch) {
    				objSavedSearch = await models.sequelize.savedSearch.update(updateSavedSearch, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objSavedSearch = await models.mongoose.savedSearch.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateSavedSearch}, {new: true});
    		}
    		return objSavedSearch;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = SavedSearchService;
//</es-section>
