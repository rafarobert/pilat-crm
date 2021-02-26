/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:21:57 GMT-0400 (Bolivia Time)
 * Time: 0:21:57
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:21:57 GMT-0400 (Bolivia Time)
 * Last time updated: 0:21:57
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

class AmTasktemplateAmProjecttemplateCService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAmTasktemplatesAmProjecttemplatesC(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.amTasktemplatesAmProjecttemplatesC.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.amTasktemplatesAmProjecttemplatesC.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAmTasktemplatesAmProjecttemplatesC(select = []) {
		try {
			if(sql) {
				return await models.sequelize.amTasktemplatesAmProjecttemplatesC.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.amTasktemplatesAmProjecttemplatesC.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAmTasktemplateAmProjecttemplateC(newAmTasktemplateAmProjecttemplateC) {
		try {
			let objAmTasktemplateAmProjecttemplateC;
			if(util.PrimaryKeyTypeIsString(models.sequelize.amTasktemplatesAmProjecttemplatesC.primaryKeys.id.type.toString())) {
			    newAmTasktemplateAmProjecttemplateC.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAmTasktemplateAmProjecttemplateC = await models.sequelize.amTasktemplatesAmProjecttemplatesC.create(newAmTasktemplateAmProjecttemplateC);
			} else {
				objAmTasktemplateAmProjecttemplateC = new models.mongoose.amTasktemplatesAmProjecttemplatesC(newAmTasktemplateAmProjecttemplateC);
				await objAmTasktemplateAmProjecttemplateC.save();
			}
			return objAmTasktemplateAmProjecttemplateC;
		} catch (error) {
			throw error;
		}
	}

	static async updateAmTasktemplateAmProjecttemplateC(id, updateAmTasktemplateAmProjecttemplateC) {
		try {
			let objAmTasktemplateAmProjecttemplateC;
			if(sql) {
				objAmTasktemplateAmProjecttemplateC = await models.sequelize.amTasktemplatesAmProjecttemplatesC.findOne({where: { id: util.String(id) }});
				if (objAmTasktemplateAmProjecttemplateC) {
					await models.sequelize.amTasktemplatesAmProjecttemplatesC.update(updateAmTasktemplateAmProjecttemplateC, { where: { id: util.String(id) } });
					objAmTasktemplateAmProjecttemplateC = await models.sequelize.amTasktemplatesAmProjecttemplatesC.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateAmTasktemplateAmProjecttemplateC._id;
				objAmTasktemplateAmProjecttemplateC = await models.mongoose.amTasktemplatesAmProjecttemplatesC.findOneAndUpdate({id:id}, {$set: updateAmTasktemplateAmProjecttemplateC}, {new: true});
			}
			return objAmTasktemplateAmProjecttemplateC;
		} catch (error) {
			throw error;
		}
	}

	static async getAAmTasktemplateAmProjecttemplateC(id, query) {
		try {
			let objAmTasktemplateAmProjecttemplateC;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAmTasktemplateAmProjecttemplateC = await models.sequelize.amTasktemplatesAmProjecttemplatesC.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAmTasktemplateAmProjecttemplateC = await models.mongoose.amTasktemplatesAmProjecttemplatesC.find({id:util.String(id)}).select(query.select);
			}
			return objAmTasktemplateAmProjecttemplateC;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAmTasktemplateAmProjecttemplateC(id) {
		try {
			let objAmTasktemplateAmProjecttemplateC;
			if(sql) {
				objAmTasktemplateAmProjecttemplateC = await models.sequelize.amTasktemplatesAmProjecttemplatesC.findOne({ where: { id: util.String(id) } });
				if (objAmTasktemplateAmProjecttemplateC) {
					await models.sequelize.amTasktemplatesAmProjecttemplatesC.destroy({where: { id: util.String(id) }});
				}
			} else {
				objAmTasktemplateAmProjecttemplateC = await models.mongoose.amTasktemplatesAmProjecttemplatesC.deleteOne({id:util.String(id)});
			}
			return objAmTasktemplateAmProjecttemplateC;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAmTasktemplateAmProjecttemplateC;
    		if(sql) {
    			objAmTasktemplateAmProjecttemplateC = await models.sequelize.amTasktemplatesAmProjecttemplatesC.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAmTasktemplateAmProjecttemplateC = await models.mongoose.amTasktemplatesAmProjecttemplatesC.findOne({id: id});
    		}
    		return objAmTasktemplateAmProjecttemplateC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAmTasktemplateAmProjecttemplateC;
    		if(sql) {
    			objAmTasktemplateAmProjecttemplateC = await models.sequelize.amTasktemplatesAmProjecttemplatesC.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAmTasktemplateAmProjecttemplateC = await models.mongoose.amTasktemplatesAmProjecttemplatesC.findOne({deleted: deleted});
    		}
    		return objAmTasktemplateAmProjecttemplateC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAmTasktemplatesAmProjecttemplatesamProjecttemplatesIda(amTasktemplatesAmProjecttemplatesamProjecttemplatesIda, query = {}) {
    	try {
    		let objAmTasktemplateAmProjecttemplateC;
    		if(sql) {
    			objAmTasktemplateAmProjecttemplateC = await models.sequelize.amTasktemplatesAmProjecttemplatesC.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { am_tasktemplates_am_projecttemplatesam_projecttemplates_ida: amTasktemplatesAmProjecttemplatesamProjecttemplatesIda },
    			});
    		} else {
    			objAmTasktemplateAmProjecttemplateC = await models.mongoose.amTasktemplatesAmProjecttemplatesC.findOne({am_tasktemplates_am_projecttemplatesam_projecttemplates_ida: amTasktemplatesAmProjecttemplatesamProjecttemplatesIda});
    		}
    		return objAmTasktemplateAmProjecttemplateC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAmTasktemplatesAmProjecttemplatesamTasktemplatesIdb(amTasktemplatesAmProjecttemplatesamTasktemplatesIdb, query = {}) {
    	try {
    		let objAmTasktemplateAmProjecttemplateC;
    		if(sql) {
    			objAmTasktemplateAmProjecttemplateC = await models.sequelize.amTasktemplatesAmProjecttemplatesC.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { am_tasktemplates_am_projecttemplatesam_tasktemplates_idb: amTasktemplatesAmProjecttemplatesamTasktemplatesIdb },
    			});
    		} else {
    			objAmTasktemplateAmProjecttemplateC = await models.mongoose.amTasktemplatesAmProjecttemplatesC.findOne({am_tasktemplates_am_projecttemplatesam_tasktemplates_idb: amTasktemplatesAmProjecttemplatesamTasktemplatesIdb});
    		}
    		return objAmTasktemplateAmProjecttemplateC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAmTasktemplateAmProjecttemplateC;
    		if(sql) {
    			objAmTasktemplateAmProjecttemplateC = await models.sequelize.amTasktemplatesAmProjecttemplatesC.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAmTasktemplateAmProjecttemplateC = await models.mongoose.amTasktemplatesAmProjecttemplatesC.findOne({date_modified: dateModified});
    		}
    		return objAmTasktemplateAmProjecttemplateC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAmTasktemplateAmProjecttemplateCById(id, updateAmTasktemplateAmProjecttemplateC) {
    	try {
    		let objAmTasktemplateAmProjecttemplateC;
    		if(sql) {
    			objAmTasktemplateAmProjecttemplateC = await models.sequelize.amTasktemplatesAmProjecttemplatesC.findOne({where: { id: id }});
    			if (objAmTasktemplateAmProjecttemplateC) {
    				objAmTasktemplateAmProjecttemplateC = await models.sequelize.amTasktemplatesAmProjecttemplatesC.update(updateAmTasktemplateAmProjecttemplateC, { where: { id: id } });
    			}
    		} else {
    			objAmTasktemplateAmProjecttemplateC = await models.mongoose.amTasktemplatesAmProjecttemplatesC.findOneAndUpdate({id: id}, {$set: updateAmTasktemplateAmProjecttemplateC}, {new: true});
    		}
    		return objAmTasktemplateAmProjecttemplateC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmTasktemplateAmProjecttemplateCByDeleted(deleted, updateAmTasktemplateAmProjecttemplateC) {
    	try {
    		let objAmTasktemplateAmProjecttemplateC;
    		if(sql) {
    			objAmTasktemplateAmProjecttemplateC = await models.sequelize.amTasktemplatesAmProjecttemplatesC.findOne({where: { deleted: deleted }});
    			if (objAmTasktemplateAmProjecttemplateC) {
    				objAmTasktemplateAmProjecttemplateC = await models.sequelize.amTasktemplatesAmProjecttemplatesC.update(updateAmTasktemplateAmProjecttemplateC, { where: { deleted: deleted } });
    			}
    		} else {
    			objAmTasktemplateAmProjecttemplateC = await models.mongoose.amTasktemplatesAmProjecttemplatesC.findOneAndUpdate({deleted: deleted}, {$set: updateAmTasktemplateAmProjecttemplateC}, {new: true});
    		}
    		return objAmTasktemplateAmProjecttemplateC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmTasktemplateAmProjecttemplateCByAmTasktemplatesAmProjecttemplatesamProjecttemplatesIda(amTasktemplatesAmProjecttemplatesamProjecttemplatesIda, updateAmTasktemplateAmProjecttemplateC) {
    	try {
    		let objAmTasktemplateAmProjecttemplateC;
    		if(sql) {
    			objAmTasktemplateAmProjecttemplateC = await models.sequelize.amTasktemplatesAmProjecttemplatesC.findOne({where: { am_tasktemplates_am_projecttemplatesam_projecttemplates_ida: amTasktemplatesAmProjecttemplatesamProjecttemplatesIda }});
    			if (objAmTasktemplateAmProjecttemplateC) {
    				objAmTasktemplateAmProjecttemplateC = await models.sequelize.amTasktemplatesAmProjecttemplatesC.update(updateAmTasktemplateAmProjecttemplateC, { where: { am_tasktemplates_am_projecttemplatesam_projecttemplates_ida: amTasktemplatesAmProjecttemplatesamProjecttemplatesIda } });
    			}
    		} else {
    			objAmTasktemplateAmProjecttemplateC = await models.mongoose.amTasktemplatesAmProjecttemplatesC.findOneAndUpdate({am_tasktemplates_am_projecttemplatesam_projecttemplates_ida: amTasktemplatesAmProjecttemplatesamProjecttemplatesIda}, {$set: updateAmTasktemplateAmProjecttemplateC}, {new: true});
    		}
    		return objAmTasktemplateAmProjecttemplateC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmTasktemplateAmProjecttemplateCByAmTasktemplatesAmProjecttemplatesamTasktemplatesIdb(amTasktemplatesAmProjecttemplatesamTasktemplatesIdb, updateAmTasktemplateAmProjecttemplateC) {
    	try {
    		let objAmTasktemplateAmProjecttemplateC;
    		if(sql) {
    			objAmTasktemplateAmProjecttemplateC = await models.sequelize.amTasktemplatesAmProjecttemplatesC.findOne({where: { am_tasktemplates_am_projecttemplatesam_tasktemplates_idb: amTasktemplatesAmProjecttemplatesamTasktemplatesIdb }});
    			if (objAmTasktemplateAmProjecttemplateC) {
    				objAmTasktemplateAmProjecttemplateC = await models.sequelize.amTasktemplatesAmProjecttemplatesC.update(updateAmTasktemplateAmProjecttemplateC, { where: { am_tasktemplates_am_projecttemplatesam_tasktemplates_idb: amTasktemplatesAmProjecttemplatesamTasktemplatesIdb } });
    			}
    		} else {
    			objAmTasktemplateAmProjecttemplateC = await models.mongoose.amTasktemplatesAmProjecttemplatesC.findOneAndUpdate({am_tasktemplates_am_projecttemplatesam_tasktemplates_idb: amTasktemplatesAmProjecttemplatesamTasktemplatesIdb}, {$set: updateAmTasktemplateAmProjecttemplateC}, {new: true});
    		}
    		return objAmTasktemplateAmProjecttemplateC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmTasktemplateAmProjecttemplateCByDateModified(dateModified, updateAmTasktemplateAmProjecttemplateC) {
    	try {
    		let objAmTasktemplateAmProjecttemplateC;
    		if(sql) {
    			objAmTasktemplateAmProjecttemplateC = await models.sequelize.amTasktemplatesAmProjecttemplatesC.findOne({where: { date_modified: dateModified }});
    			if (objAmTasktemplateAmProjecttemplateC) {
    				objAmTasktemplateAmProjecttemplateC = await models.sequelize.amTasktemplatesAmProjecttemplatesC.update(updateAmTasktemplateAmProjecttemplateC, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAmTasktemplateAmProjecttemplateC = await models.mongoose.amTasktemplatesAmProjecttemplatesC.findOneAndUpdate({date_modified: dateModified}, {$set: updateAmTasktemplateAmProjecttemplateC}, {new: true});
    		}
    		return objAmTasktemplateAmProjecttemplateC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AmTasktemplateAmProjecttemplateCService;
//</es-section>
