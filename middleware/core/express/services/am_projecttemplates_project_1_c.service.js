/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:55:53 GMT-0400 (Bolivia Time)
 * Time: 14:55:53
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:55:53 GMT-0400 (Bolivia Time)
 * Last time updated: 14:55:53
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

class AmProjecttemplateProject1CService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAmProjecttemplatesProject1C(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.amProjecttemplatesProject1C.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['_id','ASC']],
                });
			} else {
				return await models.mongoose.amProjecttemplatesProject1C.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAmProjecttemplatesProject1C(select = []) {
		try {
			if(sql) {
				return await models.sequelize.amProjecttemplatesProject1C.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.amProjecttemplatesProject1C.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAmProjecttemplateProject1C(newAmProjecttemplateProject1C) {
		try {
			let objAmProjecttemplateProject1C;
			if(util.PrimaryKeyTypeIsString(models.sequelize.amProjecttemplatesProject1C.primaryKeys.id.type.toString())) {
			    newAmProjecttemplateProject1C.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAmProjecttemplateProject1C = await models.sequelize.amProjecttemplatesProject1C.create(newAmProjecttemplateProject1C);
			} else {
				objAmProjecttemplateProject1C = new models.mongoose.amProjecttemplatesProject1C(newAmProjecttemplateProject1C);
				await objAmProjecttemplateProject1C.save();
			}
			return objAmProjecttemplateProject1C;
		} catch (error) {
			throw error;
		}
	}

	static async updateAmProjecttemplateProject1C(id, updateAmProjecttemplateProject1C) {
		try {
			let objAmProjecttemplateProject1C;
			if(sql) {
				objAmProjecttemplateProject1C = await models.sequelize.amProjecttemplatesProject1C.findOne({where: { id: util.String(id) }});
				if (objAmProjecttemplateProject1C) {
					await models.sequelize.amProjecttemplatesProject1C.update(updateAmProjecttemplateProject1C, { where: { id: util.String(id) } });
					objAmProjecttemplateProject1C = await models.sequelize.amProjecttemplatesProject1C.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateAmProjecttemplateProject1C._id;
				objAmProjecttemplateProject1C = await models.mongoose.amProjecttemplatesProject1C.findOneAndUpdate({id:id}, {$set: updateAmProjecttemplateProject1C}, {new: true});
			}
			return objAmProjecttemplateProject1C;
		} catch (error) {
			throw error;
		}
	}

	static async getAAmProjecttemplateProject1C(id, query) {
		try {
			let objAmProjecttemplateProject1C;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAmProjecttemplateProject1C = await models.sequelize.amProjecttemplatesProject1C.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAmProjecttemplateProject1C = await models.mongoose.amProjecttemplatesProject1C.find({id:util.String(id)}).select(query.select);
			}
			return objAmProjecttemplateProject1C;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAmProjecttemplateProject1C(id) {
		try {
			let objAmProjecttemplateProject1C;
			if(sql) {
				objAmProjecttemplateProject1C = await models.sequelize.amProjecttemplatesProject1C.findOne({ where: { id: util.String(id) } });
				if (objAmProjecttemplateProject1C) {
					await models.sequelize.amProjecttemplatesProject1C.destroy({where: { id: util.String(id) }});
				}
			} else {
				objAmProjecttemplateProject1C = await models.mongoose.amProjecttemplatesProject1C.deleteOne({id:util.String(id)});
			}
			return objAmProjecttemplateProject1C;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAmProjecttemplateProject1C;
    		if(sql) {
    			objAmProjecttemplateProject1C = await models.sequelize.amProjecttemplatesProject1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAmProjecttemplateProject1C = await models.mongoose.amProjecttemplatesProject1C.findOne({id: id});
    		}
    		return objAmProjecttemplateProject1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAmProjecttemplateProject1C;
    		if(sql) {
    			objAmProjecttemplateProject1C = await models.sequelize.amProjecttemplatesProject1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAmProjecttemplateProject1C = await models.mongoose.amProjecttemplatesProject1C.findOne({deleted: deleted});
    		}
    		return objAmProjecttemplateProject1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAmProjecttemplatesProject1amProjecttemplatesIda(amProjecttemplatesProject1amProjecttemplatesIda, query = {}) {
    	try {
    		let objAmProjecttemplateProject1C;
    		if(sql) {
    			objAmProjecttemplateProject1C = await models.sequelize.amProjecttemplatesProject1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { am_projecttemplates_project_1am_projecttemplates_ida: amProjecttemplatesProject1amProjecttemplatesIda },
    			});
    		} else {
    			objAmProjecttemplateProject1C = await models.mongoose.amProjecttemplatesProject1C.findOne({am_projecttemplates_project_1am_projecttemplates_ida: amProjecttemplatesProject1amProjecttemplatesIda});
    		}
    		return objAmProjecttemplateProject1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAmProjecttemplatesProject1projectIdb(amProjecttemplatesProject1projectIdb, query = {}) {
    	try {
    		let objAmProjecttemplateProject1C;
    		if(sql) {
    			objAmProjecttemplateProject1C = await models.sequelize.amProjecttemplatesProject1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { am_projecttemplates_project_1project_idb: amProjecttemplatesProject1projectIdb },
    			});
    		} else {
    			objAmProjecttemplateProject1C = await models.mongoose.amProjecttemplatesProject1C.findOne({am_projecttemplates_project_1project_idb: amProjecttemplatesProject1projectIdb});
    		}
    		return objAmProjecttemplateProject1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAmProjecttemplateProject1C;
    		if(sql) {
    			objAmProjecttemplateProject1C = await models.sequelize.amProjecttemplatesProject1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAmProjecttemplateProject1C = await models.mongoose.amProjecttemplatesProject1C.findOne({date_modified: dateModified});
    		}
    		return objAmProjecttemplateProject1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAmProjecttemplateProject1CById(id, updateAmProjecttemplateProject1C) {
    	try {
    		let objAmProjecttemplateProject1C;
    		if(sql) {
    			objAmProjecttemplateProject1C = await models.sequelize.amProjecttemplatesProject1C.findOne({where: { id: id }});
    			if (objAmProjecttemplateProject1C) {
    				objAmProjecttemplateProject1C = await models.sequelize.amProjecttemplatesProject1C.update(updateAmProjecttemplateProject1C, { where: { id: id } });
    			}
    		} else {
    			objAmProjecttemplateProject1C = await models.mongoose.amProjecttemplatesProject1C.findOneAndUpdate({id: id}, {$set: updateAmProjecttemplateProject1C}, {new: true});
    		}
    		return objAmProjecttemplateProject1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmProjecttemplateProject1CByDeleted(deleted, updateAmProjecttemplateProject1C) {
    	try {
    		let objAmProjecttemplateProject1C;
    		if(sql) {
    			objAmProjecttemplateProject1C = await models.sequelize.amProjecttemplatesProject1C.findOne({where: { deleted: deleted }});
    			if (objAmProjecttemplateProject1C) {
    				objAmProjecttemplateProject1C = await models.sequelize.amProjecttemplatesProject1C.update(updateAmProjecttemplateProject1C, { where: { deleted: deleted } });
    			}
    		} else {
    			objAmProjecttemplateProject1C = await models.mongoose.amProjecttemplatesProject1C.findOneAndUpdate({deleted: deleted}, {$set: updateAmProjecttemplateProject1C}, {new: true});
    		}
    		return objAmProjecttemplateProject1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmProjecttemplateProject1CByAmProjecttemplatesProject1amProjecttemplatesIda(amProjecttemplatesProject1amProjecttemplatesIda, updateAmProjecttemplateProject1C) {
    	try {
    		let objAmProjecttemplateProject1C;
    		if(sql) {
    			objAmProjecttemplateProject1C = await models.sequelize.amProjecttemplatesProject1C.findOne({where: { am_projecttemplates_project_1am_projecttemplates_ida: amProjecttemplatesProject1amProjecttemplatesIda }});
    			if (objAmProjecttemplateProject1C) {
    				objAmProjecttemplateProject1C = await models.sequelize.amProjecttemplatesProject1C.update(updateAmProjecttemplateProject1C, { where: { am_projecttemplates_project_1am_projecttemplates_ida: amProjecttemplatesProject1amProjecttemplatesIda } });
    			}
    		} else {
    			objAmProjecttemplateProject1C = await models.mongoose.amProjecttemplatesProject1C.findOneAndUpdate({am_projecttemplates_project_1am_projecttemplates_ida: amProjecttemplatesProject1amProjecttemplatesIda}, {$set: updateAmProjecttemplateProject1C}, {new: true});
    		}
    		return objAmProjecttemplateProject1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmProjecttemplateProject1CByAmProjecttemplatesProject1projectIdb(amProjecttemplatesProject1projectIdb, updateAmProjecttemplateProject1C) {
    	try {
    		let objAmProjecttemplateProject1C;
    		if(sql) {
    			objAmProjecttemplateProject1C = await models.sequelize.amProjecttemplatesProject1C.findOne({where: { am_projecttemplates_project_1project_idb: amProjecttemplatesProject1projectIdb }});
    			if (objAmProjecttemplateProject1C) {
    				objAmProjecttemplateProject1C = await models.sequelize.amProjecttemplatesProject1C.update(updateAmProjecttemplateProject1C, { where: { am_projecttemplates_project_1project_idb: amProjecttemplatesProject1projectIdb } });
    			}
    		} else {
    			objAmProjecttemplateProject1C = await models.mongoose.amProjecttemplatesProject1C.findOneAndUpdate({am_projecttemplates_project_1project_idb: amProjecttemplatesProject1projectIdb}, {$set: updateAmProjecttemplateProject1C}, {new: true});
    		}
    		return objAmProjecttemplateProject1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmProjecttemplateProject1CByDateModified(dateModified, updateAmProjecttemplateProject1C) {
    	try {
    		let objAmProjecttemplateProject1C;
    		if(sql) {
    			objAmProjecttemplateProject1C = await models.sequelize.amProjecttemplatesProject1C.findOne({where: { date_modified: dateModified }});
    			if (objAmProjecttemplateProject1C) {
    				objAmProjecttemplateProject1C = await models.sequelize.amProjecttemplatesProject1C.update(updateAmProjecttemplateProject1C, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAmProjecttemplateProject1C = await models.mongoose.amProjecttemplatesProject1C.findOneAndUpdate({date_modified: dateModified}, {$set: updateAmProjecttemplateProject1C}, {new: true});
    		}
    		return objAmProjecttemplateProject1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AmProjecttemplateProject1CService;
//</es-section>
