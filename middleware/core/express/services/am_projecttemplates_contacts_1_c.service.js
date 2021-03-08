/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:03 GMT-0400 (Bolivia Time)
 * Time: 15:35:3
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:03 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:3
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

class AmProjecttemplateContact1CService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAmProjecttemplatesContacts1C(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.amProjecttemplatesContacts1C.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.amProjecttemplatesContacts1C.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAmProjecttemplatesContacts1C(select = []) {
		try {
			if(sql) {
				return await models.sequelize.amProjecttemplatesContacts1C.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.amProjecttemplatesContacts1C.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAmProjecttemplateContact1C(newAmProjecttemplateContact1C) {
		try {
			let objAmProjecttemplateContact1C;
			if(util.PrimaryKeyTypeIsString(models.sequelize.amProjecttemplatesContacts1C.primaryKeys.id.type.toString())) {
			    newAmProjecttemplateContact1C.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAmProjecttemplateContact1C = await models.sequelize.amProjecttemplatesContacts1C.create(newAmProjecttemplateContact1C);
			} else {
				objAmProjecttemplateContact1C = new models.mongoose.amProjecttemplatesContacts1C(newAmProjecttemplateContact1C);
				await objAmProjecttemplateContact1C.save();
			}
			return objAmProjecttemplateContact1C;
		} catch (error) {
			throw error;
		}
	}

	static async updateAmProjecttemplateContact1C(id, updateAmProjecttemplateContact1C) {
		try {
			let objAmProjecttemplateContact1C;
			if(sql) {
				objAmProjecttemplateContact1C = await models.sequelize.amProjecttemplatesContacts1C.findOne({where: { id: util.String(id) }});
				if (objAmProjecttemplateContact1C) {
					await models.sequelize.amProjecttemplatesContacts1C.update(updateAmProjecttemplateContact1C, { where: { id: util.String(id) } });
					objAmProjecttemplateContact1C = await models.sequelize.amProjecttemplatesContacts1C.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateAmProjecttemplateContact1C._id;
				objAmProjecttemplateContact1C = await models.mongoose.amProjecttemplatesContacts1C.findOneAndUpdate({id:id}, {$set: updateAmProjecttemplateContact1C}, {new: true});
			}
			return objAmProjecttemplateContact1C;
		} catch (error) {
			throw error;
		}
	}

	static async getAAmProjecttemplateContact1C(id, query) {
		try {
			let objAmProjecttemplateContact1C;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAmProjecttemplateContact1C = await models.sequelize.amProjecttemplatesContacts1C.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAmProjecttemplateContact1C = await models.mongoose.amProjecttemplatesContacts1C.find({id:util.String(id)}).select(query.select);
			}
			return objAmProjecttemplateContact1C;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAmProjecttemplateContact1C(id) {
		try {
			let objAmProjecttemplateContact1C;
			if(sql) {
				objAmProjecttemplateContact1C = await models.sequelize.amProjecttemplatesContacts1C.findOne({ where: { id: util.String(id) } });
				if (objAmProjecttemplateContact1C) {
					await models.sequelize.amProjecttemplatesContacts1C.destroy({where: { id: util.String(id) }});
				}
			} else {
				objAmProjecttemplateContact1C = await models.mongoose.amProjecttemplatesContacts1C.deleteOne({id:util.String(id)});
			}
			return objAmProjecttemplateContact1C;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAmProjecttemplateContact1C;
    		if(sql) {
    			objAmProjecttemplateContact1C = await models.sequelize.amProjecttemplatesContacts1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAmProjecttemplateContact1C = await models.mongoose.amProjecttemplatesContacts1C.findOne({id: id});
    		}
    		return objAmProjecttemplateContact1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAmProjecttemplateContact1C;
    		if(sql) {
    			objAmProjecttemplateContact1C = await models.sequelize.amProjecttemplatesContacts1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAmProjecttemplateContact1C = await models.mongoose.amProjecttemplatesContacts1C.findOne({deleted: deleted});
    		}
    		return objAmProjecttemplateContact1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAmProjecttemplatesIda(amProjecttemplatesIda, query = {}) {
    	try {
    		let objAmProjecttemplateContact1C;
    		if(sql) {
    			objAmProjecttemplateContact1C = await models.sequelize.amProjecttemplatesContacts1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { am_projecttemplates_ida: amProjecttemplatesIda },
    			});
    		} else {
    			objAmProjecttemplateContact1C = await models.mongoose.amProjecttemplatesContacts1C.findOne({am_projecttemplates_ida: amProjecttemplatesIda});
    		}
    		return objAmProjecttemplateContact1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByContactsIdb(contactsIdb, query = {}) {
    	try {
    		let objAmProjecttemplateContact1C;
    		if(sql) {
    			objAmProjecttemplateContact1C = await models.sequelize.amProjecttemplatesContacts1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { contacts_idb: contactsIdb },
    			});
    		} else {
    			objAmProjecttemplateContact1C = await models.mongoose.amProjecttemplatesContacts1C.findOne({contacts_idb: contactsIdb});
    		}
    		return objAmProjecttemplateContact1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAmProjecttemplateContact1C;
    		if(sql) {
    			objAmProjecttemplateContact1C = await models.sequelize.amProjecttemplatesContacts1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAmProjecttemplateContact1C = await models.mongoose.amProjecttemplatesContacts1C.findOne({date_modified: dateModified});
    		}
    		return objAmProjecttemplateContact1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAmProjecttemplateContact1CById(id, updateAmProjecttemplateContact1C) {
    	try {
    		let objAmProjecttemplateContact1C;
    		if(sql) {
    			objAmProjecttemplateContact1C = await models.sequelize.amProjecttemplatesContacts1C.findOne({where: { id: id }});
    			if (objAmProjecttemplateContact1C) {
    				objAmProjecttemplateContact1C = await models.sequelize.amProjecttemplatesContacts1C.update(updateAmProjecttemplateContact1C, { where: { id: id } });
    			}
    		} else {
    			objAmProjecttemplateContact1C = await models.mongoose.amProjecttemplatesContacts1C.findOneAndUpdate({id: id}, {$set: updateAmProjecttemplateContact1C}, {new: true});
    		}
    		return objAmProjecttemplateContact1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmProjecttemplateContact1CByDeleted(deleted, updateAmProjecttemplateContact1C) {
    	try {
    		let objAmProjecttemplateContact1C;
    		if(sql) {
    			objAmProjecttemplateContact1C = await models.sequelize.amProjecttemplatesContacts1C.findOne({where: { deleted: deleted }});
    			if (objAmProjecttemplateContact1C) {
    				objAmProjecttemplateContact1C = await models.sequelize.amProjecttemplatesContacts1C.update(updateAmProjecttemplateContact1C, { where: { deleted: deleted } });
    			}
    		} else {
    			objAmProjecttemplateContact1C = await models.mongoose.amProjecttemplatesContacts1C.findOneAndUpdate({deleted: deleted}, {$set: updateAmProjecttemplateContact1C}, {new: true});
    		}
    		return objAmProjecttemplateContact1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmProjecttemplateContact1CByAmProjecttemplatesIda(amProjecttemplatesIda, updateAmProjecttemplateContact1C) {
    	try {
    		let objAmProjecttemplateContact1C;
    		if(sql) {
    			objAmProjecttemplateContact1C = await models.sequelize.amProjecttemplatesContacts1C.findOne({where: { am_projecttemplates_ida: amProjecttemplatesIda }});
    			if (objAmProjecttemplateContact1C) {
    				objAmProjecttemplateContact1C = await models.sequelize.amProjecttemplatesContacts1C.update(updateAmProjecttemplateContact1C, { where: { am_projecttemplates_ida: amProjecttemplatesIda } });
    			}
    		} else {
    			objAmProjecttemplateContact1C = await models.mongoose.amProjecttemplatesContacts1C.findOneAndUpdate({am_projecttemplates_ida: amProjecttemplatesIda}, {$set: updateAmProjecttemplateContact1C}, {new: true});
    		}
    		return objAmProjecttemplateContact1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmProjecttemplateContact1CByContactsIdb(contactsIdb, updateAmProjecttemplateContact1C) {
    	try {
    		let objAmProjecttemplateContact1C;
    		if(sql) {
    			objAmProjecttemplateContact1C = await models.sequelize.amProjecttemplatesContacts1C.findOne({where: { contacts_idb: contactsIdb }});
    			if (objAmProjecttemplateContact1C) {
    				objAmProjecttemplateContact1C = await models.sequelize.amProjecttemplatesContacts1C.update(updateAmProjecttemplateContact1C, { where: { contacts_idb: contactsIdb } });
    			}
    		} else {
    			objAmProjecttemplateContact1C = await models.mongoose.amProjecttemplatesContacts1C.findOneAndUpdate({contacts_idb: contactsIdb}, {$set: updateAmProjecttemplateContact1C}, {new: true});
    		}
    		return objAmProjecttemplateContact1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmProjecttemplateContact1CByDateModified(dateModified, updateAmProjecttemplateContact1C) {
    	try {
    		let objAmProjecttemplateContact1C;
    		if(sql) {
    			objAmProjecttemplateContact1C = await models.sequelize.amProjecttemplatesContacts1C.findOne({where: { date_modified: dateModified }});
    			if (objAmProjecttemplateContact1C) {
    				objAmProjecttemplateContact1C = await models.sequelize.amProjecttemplatesContacts1C.update(updateAmProjecttemplateContact1C, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAmProjecttemplateContact1C = await models.mongoose.amProjecttemplatesContacts1C.findOneAndUpdate({date_modified: dateModified}, {$set: updateAmProjecttemplateContact1C}, {new: true});
    		}
    		return objAmProjecttemplateContact1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AmProjecttemplateContact1CService;
//</es-section>
