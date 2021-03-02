/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:45 GMT-0400 (Bolivia Time)
 * Time: 14:0:45
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:45 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:45
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

class EmailEmailAddrRelService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllEmailsEmailAddrRel(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.emailsEmailAddrRel.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.emailsEmailAddrRel.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllEmailsEmailAddrRel(select = []) {
		try {
			if(sql) {
				return await models.sequelize.emailsEmailAddrRel.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.emailsEmailAddrRel.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addEmailEmailAddrRel(newEmailEmailAddrRel) {
		try {
			let objEmailEmailAddrRel;
			if(util.PrimaryKeyTypeIsString(models.sequelize.emailsEmailAddrRel.primaryKeys.id.type.toString())) {
			    newEmailEmailAddrRel.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objEmailEmailAddrRel = await models.sequelize.emailsEmailAddrRel.create(newEmailEmailAddrRel);
			} else {
				objEmailEmailAddrRel = new models.mongoose.emailsEmailAddrRel(newEmailEmailAddrRel);
				await objEmailEmailAddrRel.save();
			}
			return objEmailEmailAddrRel;
		} catch (error) {
			throw error;
		}
	}

	static async updateEmailEmailAddrRel(id, updateEmailEmailAddrRel) {
		try {
			let objEmailEmailAddrRel;
			if(sql) {
				objEmailEmailAddrRel = await models.sequelize.emailsEmailAddrRel.findOne({where: { id: util.Char(id) }});
				if (objEmailEmailAddrRel) {
					await models.sequelize.emailsEmailAddrRel.update(updateEmailEmailAddrRel, { where: { id: util.Char(id) } });
					objEmailEmailAddrRel = await models.sequelize.emailsEmailAddrRel.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateEmailEmailAddrRel._id;
				objEmailEmailAddrRel = await models.mongoose.emailsEmailAddrRel.findOneAndUpdate({id:id}, {$set: updateEmailEmailAddrRel}, {new: true});
			}
			return objEmailEmailAddrRel;
		} catch (error) {
			throw error;
		}
	}

	static async getAEmailEmailAddrRel(id, query) {
		try {
			let objEmailEmailAddrRel;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objEmailEmailAddrRel = await models.sequelize.emailsEmailAddrRel.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objEmailEmailAddrRel = await models.mongoose.emailsEmailAddrRel.find({id:util.Char(id)}).select(query.select);
			}
			return objEmailEmailAddrRel;
		} catch (error) {
			throw error;
		}
	}

	static async deleteEmailEmailAddrRel(id) {
		try {
			let objEmailEmailAddrRel;
			if(sql) {
				objEmailEmailAddrRel = await models.sequelize.emailsEmailAddrRel.findOne({ where: { id: util.Char(id) } });
				if (objEmailEmailAddrRel) {
					await models.sequelize.emailsEmailAddrRel.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objEmailEmailAddrRel = await models.mongoose.emailsEmailAddrRel.deleteOne({id:util.Char(id)});
			}
			return objEmailEmailAddrRel;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objEmailEmailAddrRel;
    		if(sql) {
    			objEmailEmailAddrRel = await models.sequelize.emailsEmailAddrRel.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objEmailEmailAddrRel = await models.mongoose.emailsEmailAddrRel.findOne({id: id});
    		}
    		return objEmailEmailAddrRel;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objEmailEmailAddrRel;
    		if(sql) {
    			objEmailEmailAddrRel = await models.sequelize.emailsEmailAddrRel.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objEmailEmailAddrRel = await models.mongoose.emailsEmailAddrRel.findOne({deleted: deleted});
    		}
    		return objEmailEmailAddrRel;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAddressType(addressType, query = {}) {
    	try {
    		let objEmailEmailAddrRel;
    		if(sql) {
    			objEmailEmailAddrRel = await models.sequelize.emailsEmailAddrRel.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { address_type: addressType },
    			});
    		} else {
    			objEmailEmailAddrRel = await models.mongoose.emailsEmailAddrRel.findOne({address_type: addressType});
    		}
    		return objEmailEmailAddrRel;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByEmailId(emailId, query = {}) {
    	try {
    		let objEmailEmailAddrRel;
    		if(sql) {
    			objEmailEmailAddrRel = await models.sequelize.emailsEmailAddrRel.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { email_id: emailId },
    			});
    		} else {
    			objEmailEmailAddrRel = await models.mongoose.emailsEmailAddrRel.findOne({email_id: emailId});
    		}
    		return objEmailEmailAddrRel;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByEmailAddressId(emailAddressId, query = {}) {
    	try {
    		let objEmailEmailAddrRel;
    		if(sql) {
    			objEmailEmailAddrRel = await models.sequelize.emailsEmailAddrRel.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { email_address_id: emailAddressId },
    			});
    		} else {
    			objEmailEmailAddrRel = await models.mongoose.emailsEmailAddrRel.findOne({email_address_id: emailAddressId});
    		}
    		return objEmailEmailAddrRel;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateEmailEmailAddrRelById(id, updateEmailEmailAddrRel) {
    	try {
    		let objEmailEmailAddrRel;
    		if(sql) {
    			objEmailEmailAddrRel = await models.sequelize.emailsEmailAddrRel.findOne({where: { id: id }});
    			if (objEmailEmailAddrRel) {
    				objEmailEmailAddrRel = await models.sequelize.emailsEmailAddrRel.update(updateEmailEmailAddrRel, { where: { id: id } });
    			}
    		} else {
    			objEmailEmailAddrRel = await models.mongoose.emailsEmailAddrRel.findOneAndUpdate({id: id}, {$set: updateEmailEmailAddrRel}, {new: true});
    		}
    		return objEmailEmailAddrRel;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailEmailAddrRelByDeleted(deleted, updateEmailEmailAddrRel) {
    	try {
    		let objEmailEmailAddrRel;
    		if(sql) {
    			objEmailEmailAddrRel = await models.sequelize.emailsEmailAddrRel.findOne({where: { deleted: deleted }});
    			if (objEmailEmailAddrRel) {
    				objEmailEmailAddrRel = await models.sequelize.emailsEmailAddrRel.update(updateEmailEmailAddrRel, { where: { deleted: deleted } });
    			}
    		} else {
    			objEmailEmailAddrRel = await models.mongoose.emailsEmailAddrRel.findOneAndUpdate({deleted: deleted}, {$set: updateEmailEmailAddrRel}, {new: true});
    		}
    		return objEmailEmailAddrRel;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailEmailAddrRelByAddressType(addressType, updateEmailEmailAddrRel) {
    	try {
    		let objEmailEmailAddrRel;
    		if(sql) {
    			objEmailEmailAddrRel = await models.sequelize.emailsEmailAddrRel.findOne({where: { address_type: addressType }});
    			if (objEmailEmailAddrRel) {
    				objEmailEmailAddrRel = await models.sequelize.emailsEmailAddrRel.update(updateEmailEmailAddrRel, { where: { address_type: addressType } });
    			}
    		} else {
    			objEmailEmailAddrRel = await models.mongoose.emailsEmailAddrRel.findOneAndUpdate({address_type: addressType}, {$set: updateEmailEmailAddrRel}, {new: true});
    		}
    		return objEmailEmailAddrRel;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailEmailAddrRelByEmailId(emailId, updateEmailEmailAddrRel) {
    	try {
    		let objEmailEmailAddrRel;
    		if(sql) {
    			objEmailEmailAddrRel = await models.sequelize.emailsEmailAddrRel.findOne({where: { email_id: emailId }});
    			if (objEmailEmailAddrRel) {
    				objEmailEmailAddrRel = await models.sequelize.emailsEmailAddrRel.update(updateEmailEmailAddrRel, { where: { email_id: emailId } });
    			}
    		} else {
    			objEmailEmailAddrRel = await models.mongoose.emailsEmailAddrRel.findOneAndUpdate({email_id: emailId}, {$set: updateEmailEmailAddrRel}, {new: true});
    		}
    		return objEmailEmailAddrRel;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailEmailAddrRelByEmailAddressId(emailAddressId, updateEmailEmailAddrRel) {
    	try {
    		let objEmailEmailAddrRel;
    		if(sql) {
    			objEmailEmailAddrRel = await models.sequelize.emailsEmailAddrRel.findOne({where: { email_address_id: emailAddressId }});
    			if (objEmailEmailAddrRel) {
    				objEmailEmailAddrRel = await models.sequelize.emailsEmailAddrRel.update(updateEmailEmailAddrRel, { where: { email_address_id: emailAddressId } });
    			}
    		} else {
    			objEmailEmailAddrRel = await models.mongoose.emailsEmailAddrRel.findOneAndUpdate({email_address_id: emailAddressId}, {$set: updateEmailEmailAddrRel}, {new: true});
    		}
    		return objEmailEmailAddrRel;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = EmailEmailAddrRelService;
//</es-section>
