/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:03 GMT-0400 (Bolivia Time)
 * Time: 14:0:3
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:03 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:3
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

class AmProjecttemplateUser1CService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAmProjecttemplatesUsers1C(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.amProjecttemplatesUsers1C.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.amProjecttemplatesUsers1C.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAmProjecttemplatesUsers1C(select = []) {
		try {
			if(sql) {
				return await models.sequelize.amProjecttemplatesUsers1C.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.amProjecttemplatesUsers1C.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAmProjecttemplateUser1C(newAmProjecttemplateUser1C) {
		try {
			let objAmProjecttemplateUser1C;
			if(util.PrimaryKeyTypeIsString(models.sequelize.amProjecttemplatesUsers1C.primaryKeys.id.type.toString())) {
			    newAmProjecttemplateUser1C.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAmProjecttemplateUser1C = await models.sequelize.amProjecttemplatesUsers1C.create(newAmProjecttemplateUser1C);
			} else {
				objAmProjecttemplateUser1C = new models.mongoose.amProjecttemplatesUsers1C(newAmProjecttemplateUser1C);
				await objAmProjecttemplateUser1C.save();
			}
			return objAmProjecttemplateUser1C;
		} catch (error) {
			throw error;
		}
	}

	static async updateAmProjecttemplateUser1C(id, updateAmProjecttemplateUser1C) {
		try {
			let objAmProjecttemplateUser1C;
			if(sql) {
				objAmProjecttemplateUser1C = await models.sequelize.amProjecttemplatesUsers1C.findOne({where: { id: util.String(id) }});
				if (objAmProjecttemplateUser1C) {
					await models.sequelize.amProjecttemplatesUsers1C.update(updateAmProjecttemplateUser1C, { where: { id: util.String(id) } });
					objAmProjecttemplateUser1C = await models.sequelize.amProjecttemplatesUsers1C.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateAmProjecttemplateUser1C._id;
				objAmProjecttemplateUser1C = await models.mongoose.amProjecttemplatesUsers1C.findOneAndUpdate({id:id}, {$set: updateAmProjecttemplateUser1C}, {new: true});
			}
			return objAmProjecttemplateUser1C;
		} catch (error) {
			throw error;
		}
	}

	static async getAAmProjecttemplateUser1C(id, query) {
		try {
			let objAmProjecttemplateUser1C;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAmProjecttemplateUser1C = await models.sequelize.amProjecttemplatesUsers1C.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAmProjecttemplateUser1C = await models.mongoose.amProjecttemplatesUsers1C.find({id:util.String(id)}).select(query.select);
			}
			return objAmProjecttemplateUser1C;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAmProjecttemplateUser1C(id) {
		try {
			let objAmProjecttemplateUser1C;
			if(sql) {
				objAmProjecttemplateUser1C = await models.sequelize.amProjecttemplatesUsers1C.findOne({ where: { id: util.String(id) } });
				if (objAmProjecttemplateUser1C) {
					await models.sequelize.amProjecttemplatesUsers1C.destroy({where: { id: util.String(id) }});
				}
			} else {
				objAmProjecttemplateUser1C = await models.mongoose.amProjecttemplatesUsers1C.deleteOne({id:util.String(id)});
			}
			return objAmProjecttemplateUser1C;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAmProjecttemplateUser1C;
    		if(sql) {
    			objAmProjecttemplateUser1C = await models.sequelize.amProjecttemplatesUsers1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAmProjecttemplateUser1C = await models.mongoose.amProjecttemplatesUsers1C.findOne({id: id});
    		}
    		return objAmProjecttemplateUser1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAmProjecttemplateUser1C;
    		if(sql) {
    			objAmProjecttemplateUser1C = await models.sequelize.amProjecttemplatesUsers1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAmProjecttemplateUser1C = await models.mongoose.amProjecttemplatesUsers1C.findOne({deleted: deleted});
    		}
    		return objAmProjecttemplateUser1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAmProjecttemplatesIda(amProjecttemplatesIda, query = {}) {
    	try {
    		let objAmProjecttemplateUser1C;
    		if(sql) {
    			objAmProjecttemplateUser1C = await models.sequelize.amProjecttemplatesUsers1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { am_projecttemplates_ida: amProjecttemplatesIda },
    			});
    		} else {
    			objAmProjecttemplateUser1C = await models.mongoose.amProjecttemplatesUsers1C.findOne({am_projecttemplates_ida: amProjecttemplatesIda});
    		}
    		return objAmProjecttemplateUser1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUsersIdb(usersIdb, query = {}) {
    	try {
    		let objAmProjecttemplateUser1C;
    		if(sql) {
    			objAmProjecttemplateUser1C = await models.sequelize.amProjecttemplatesUsers1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { users_idb: usersIdb },
    			});
    		} else {
    			objAmProjecttemplateUser1C = await models.mongoose.amProjecttemplatesUsers1C.findOne({users_idb: usersIdb});
    		}
    		return objAmProjecttemplateUser1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAmProjecttemplateUser1C;
    		if(sql) {
    			objAmProjecttemplateUser1C = await models.sequelize.amProjecttemplatesUsers1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAmProjecttemplateUser1C = await models.mongoose.amProjecttemplatesUsers1C.findOne({date_modified: dateModified});
    		}
    		return objAmProjecttemplateUser1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAmProjecttemplateUser1CById(id, updateAmProjecttemplateUser1C) {
    	try {
    		let objAmProjecttemplateUser1C;
    		if(sql) {
    			objAmProjecttemplateUser1C = await models.sequelize.amProjecttemplatesUsers1C.findOne({where: { id: id }});
    			if (objAmProjecttemplateUser1C) {
    				objAmProjecttemplateUser1C = await models.sequelize.amProjecttemplatesUsers1C.update(updateAmProjecttemplateUser1C, { where: { id: id } });
    			}
    		} else {
    			objAmProjecttemplateUser1C = await models.mongoose.amProjecttemplatesUsers1C.findOneAndUpdate({id: id}, {$set: updateAmProjecttemplateUser1C}, {new: true});
    		}
    		return objAmProjecttemplateUser1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmProjecttemplateUser1CByDeleted(deleted, updateAmProjecttemplateUser1C) {
    	try {
    		let objAmProjecttemplateUser1C;
    		if(sql) {
    			objAmProjecttemplateUser1C = await models.sequelize.amProjecttemplatesUsers1C.findOne({where: { deleted: deleted }});
    			if (objAmProjecttemplateUser1C) {
    				objAmProjecttemplateUser1C = await models.sequelize.amProjecttemplatesUsers1C.update(updateAmProjecttemplateUser1C, { where: { deleted: deleted } });
    			}
    		} else {
    			objAmProjecttemplateUser1C = await models.mongoose.amProjecttemplatesUsers1C.findOneAndUpdate({deleted: deleted}, {$set: updateAmProjecttemplateUser1C}, {new: true});
    		}
    		return objAmProjecttemplateUser1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmProjecttemplateUser1CByAmProjecttemplatesIda(amProjecttemplatesIda, updateAmProjecttemplateUser1C) {
    	try {
    		let objAmProjecttemplateUser1C;
    		if(sql) {
    			objAmProjecttemplateUser1C = await models.sequelize.amProjecttemplatesUsers1C.findOne({where: { am_projecttemplates_ida: amProjecttemplatesIda }});
    			if (objAmProjecttemplateUser1C) {
    				objAmProjecttemplateUser1C = await models.sequelize.amProjecttemplatesUsers1C.update(updateAmProjecttemplateUser1C, { where: { am_projecttemplates_ida: amProjecttemplatesIda } });
    			}
    		} else {
    			objAmProjecttemplateUser1C = await models.mongoose.amProjecttemplatesUsers1C.findOneAndUpdate({am_projecttemplates_ida: amProjecttemplatesIda}, {$set: updateAmProjecttemplateUser1C}, {new: true});
    		}
    		return objAmProjecttemplateUser1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmProjecttemplateUser1CByUsersIdb(usersIdb, updateAmProjecttemplateUser1C) {
    	try {
    		let objAmProjecttemplateUser1C;
    		if(sql) {
    			objAmProjecttemplateUser1C = await models.sequelize.amProjecttemplatesUsers1C.findOne({where: { users_idb: usersIdb }});
    			if (objAmProjecttemplateUser1C) {
    				objAmProjecttemplateUser1C = await models.sequelize.amProjecttemplatesUsers1C.update(updateAmProjecttemplateUser1C, { where: { users_idb: usersIdb } });
    			}
    		} else {
    			objAmProjecttemplateUser1C = await models.mongoose.amProjecttemplatesUsers1C.findOneAndUpdate({users_idb: usersIdb}, {$set: updateAmProjecttemplateUser1C}, {new: true});
    		}
    		return objAmProjecttemplateUser1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmProjecttemplateUser1CByDateModified(dateModified, updateAmProjecttemplateUser1C) {
    	try {
    		let objAmProjecttemplateUser1C;
    		if(sql) {
    			objAmProjecttemplateUser1C = await models.sequelize.amProjecttemplatesUsers1C.findOne({where: { date_modified: dateModified }});
    			if (objAmProjecttemplateUser1C) {
    				objAmProjecttemplateUser1C = await models.sequelize.amProjecttemplatesUsers1C.update(updateAmProjecttemplateUser1C, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAmProjecttemplateUser1C = await models.mongoose.amProjecttemplatesUsers1C.findOneAndUpdate({date_modified: dateModified}, {$set: updateAmProjecttemplateUser1C}, {new: true});
    		}
    		return objAmProjecttemplateUser1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AmProjecttemplateUser1CService;
//</es-section>
