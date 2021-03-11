/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:47 GMT-0400 (Bolivia Time)
 * Time: 14:56:47
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:47 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:47
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

class EmailAddrBeanRelService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllEmailAddrBeanRel(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.emailAddrBeanRel.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.emailAddrBeanRel.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllEmailAddrBeanRel(select = []) {
		try {
			if(sql) {
				return await models.sequelize.emailAddrBeanRel.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.emailAddrBeanRel.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addEmailAddrBeanRel(newEmailAddrBeanRel) {
		try {
			let objEmailAddrBeanRel;
			if(util.PrimaryKeyTypeIsString(models.sequelize.emailAddrBeanRel.primaryKeys.id.type.toString())) {
			    newEmailAddrBeanRel.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objEmailAddrBeanRel = await models.sequelize.emailAddrBeanRel.create(newEmailAddrBeanRel);
			} else {
				objEmailAddrBeanRel = new models.mongoose.emailAddrBeanRel(newEmailAddrBeanRel);
				await objEmailAddrBeanRel.save();
			}
			return objEmailAddrBeanRel;
		} catch (error) {
			throw error;
		}
	}

	static async updateEmailAddrBeanRel(id, updateEmailAddrBeanRel) {
		try {
			let objEmailAddrBeanRel;
			if(sql) {
				objEmailAddrBeanRel = await models.sequelize.emailAddrBeanRel.findOne({where: { id: util.Char(id) }});
				if (objEmailAddrBeanRel) {
					await models.sequelize.emailAddrBeanRel.update(updateEmailAddrBeanRel, { where: { id: util.Char(id) } });
					objEmailAddrBeanRel = await models.sequelize.emailAddrBeanRel.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateEmailAddrBeanRel._id;
				objEmailAddrBeanRel = await models.mongoose.emailAddrBeanRel.findOneAndUpdate({id:id}, {$set: updateEmailAddrBeanRel}, {new: true});
			}
			return objEmailAddrBeanRel;
		} catch (error) {
			throw error;
		}
	}

	static async getAEmailAddrBeanRel(id, query) {
		try {
			let objEmailAddrBeanRel;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objEmailAddrBeanRel = await models.sequelize.emailAddrBeanRel.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objEmailAddrBeanRel = await models.mongoose.emailAddrBeanRel.find({id:util.Char(id)}).select(query.select);
			}
			return objEmailAddrBeanRel;
		} catch (error) {
			throw error;
		}
	}

	static async deleteEmailAddrBeanRel(id) {
		try {
			let objEmailAddrBeanRel;
			if(sql) {
				objEmailAddrBeanRel = await models.sequelize.emailAddrBeanRel.findOne({ where: { id: util.Char(id) } });
				if (objEmailAddrBeanRel) {
					await models.sequelize.emailAddrBeanRel.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objEmailAddrBeanRel = await models.mongoose.emailAddrBeanRel.deleteOne({id:util.Char(id)});
			}
			return objEmailAddrBeanRel;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objEmailAddrBeanRel;
    		if(sql) {
    			objEmailAddrBeanRel = await models.sequelize.emailAddrBeanRel.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objEmailAddrBeanRel = await models.mongoose.emailAddrBeanRel.findOne({id: id});
    		}
    		return objEmailAddrBeanRel;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPrimaryAddress(primaryAddress, query = {}) {
    	try {
    		let objEmailAddrBeanRel;
    		if(sql) {
    			objEmailAddrBeanRel = await models.sequelize.emailAddrBeanRel.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { primary_address: primaryAddress },
    			});
    		} else {
    			objEmailAddrBeanRel = await models.mongoose.emailAddrBeanRel.findOne({primary_address: primaryAddress});
    		}
    		return objEmailAddrBeanRel;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByReplyToAddress(replyToAddress, query = {}) {
    	try {
    		let objEmailAddrBeanRel;
    		if(sql) {
    			objEmailAddrBeanRel = await models.sequelize.emailAddrBeanRel.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { reply_to_address: replyToAddress },
    			});
    		} else {
    			objEmailAddrBeanRel = await models.mongoose.emailAddrBeanRel.findOne({reply_to_address: replyToAddress});
    		}
    		return objEmailAddrBeanRel;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objEmailAddrBeanRel;
    		if(sql) {
    			objEmailAddrBeanRel = await models.sequelize.emailAddrBeanRel.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objEmailAddrBeanRel = await models.mongoose.emailAddrBeanRel.findOne({deleted: deleted});
    		}
    		return objEmailAddrBeanRel;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeanModule(beanModule, query = {}) {
    	try {
    		let objEmailAddrBeanRel;
    		if(sql) {
    			objEmailAddrBeanRel = await models.sequelize.emailAddrBeanRel.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { bean_module: beanModule },
    			});
    		} else {
    			objEmailAddrBeanRel = await models.mongoose.emailAddrBeanRel.findOne({bean_module: beanModule});
    		}
    		return objEmailAddrBeanRel;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objEmailAddrBeanRel;
    		if(sql) {
    			objEmailAddrBeanRel = await models.sequelize.emailAddrBeanRel.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objEmailAddrBeanRel = await models.mongoose.emailAddrBeanRel.findOne({date_created: dateCreated});
    		}
    		return objEmailAddrBeanRel;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objEmailAddrBeanRel;
    		if(sql) {
    			objEmailAddrBeanRel = await models.sequelize.emailAddrBeanRel.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objEmailAddrBeanRel = await models.mongoose.emailAddrBeanRel.findOne({date_modified: dateModified});
    		}
    		return objEmailAddrBeanRel;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByEmailAddressId(emailAddressId, query = {}) {
    	try {
    		let objEmailAddrBeanRel;
    		if(sql) {
    			objEmailAddrBeanRel = await models.sequelize.emailAddrBeanRel.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { email_address_id: emailAddressId },
    			});
    		} else {
    			objEmailAddrBeanRel = await models.mongoose.emailAddrBeanRel.findOne({email_address_id: emailAddressId});
    		}
    		return objEmailAddrBeanRel;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeanId(beanId, query = {}) {
    	try {
    		let objEmailAddrBeanRel;
    		if(sql) {
    			objEmailAddrBeanRel = await models.sequelize.emailAddrBeanRel.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { bean_id: beanId },
    			});
    		} else {
    			objEmailAddrBeanRel = await models.mongoose.emailAddrBeanRel.findOne({bean_id: beanId});
    		}
    		return objEmailAddrBeanRel;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateEmailAddrBeanRelById(id, updateEmailAddrBeanRel) {
    	try {
    		let objEmailAddrBeanRel;
    		if(sql) {
    			objEmailAddrBeanRel = await models.sequelize.emailAddrBeanRel.findOne({where: { id: id }});
    			if (objEmailAddrBeanRel) {
    				objEmailAddrBeanRel = await models.sequelize.emailAddrBeanRel.update(updateEmailAddrBeanRel, { where: { id: id } });
    			}
    		} else {
    			objEmailAddrBeanRel = await models.mongoose.emailAddrBeanRel.findOneAndUpdate({id: id}, {$set: updateEmailAddrBeanRel}, {new: true});
    		}
    		return objEmailAddrBeanRel;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailAddrBeanRelByPrimaryAddress(primaryAddress, updateEmailAddrBeanRel) {
    	try {
    		let objEmailAddrBeanRel;
    		if(sql) {
    			objEmailAddrBeanRel = await models.sequelize.emailAddrBeanRel.findOne({where: { primary_address: primaryAddress }});
    			if (objEmailAddrBeanRel) {
    				objEmailAddrBeanRel = await models.sequelize.emailAddrBeanRel.update(updateEmailAddrBeanRel, { where: { primary_address: primaryAddress } });
    			}
    		} else {
    			objEmailAddrBeanRel = await models.mongoose.emailAddrBeanRel.findOneAndUpdate({primary_address: primaryAddress}, {$set: updateEmailAddrBeanRel}, {new: true});
    		}
    		return objEmailAddrBeanRel;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailAddrBeanRelByReplyToAddress(replyToAddress, updateEmailAddrBeanRel) {
    	try {
    		let objEmailAddrBeanRel;
    		if(sql) {
    			objEmailAddrBeanRel = await models.sequelize.emailAddrBeanRel.findOne({where: { reply_to_address: replyToAddress }});
    			if (objEmailAddrBeanRel) {
    				objEmailAddrBeanRel = await models.sequelize.emailAddrBeanRel.update(updateEmailAddrBeanRel, { where: { reply_to_address: replyToAddress } });
    			}
    		} else {
    			objEmailAddrBeanRel = await models.mongoose.emailAddrBeanRel.findOneAndUpdate({reply_to_address: replyToAddress}, {$set: updateEmailAddrBeanRel}, {new: true});
    		}
    		return objEmailAddrBeanRel;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailAddrBeanRelByDeleted(deleted, updateEmailAddrBeanRel) {
    	try {
    		let objEmailAddrBeanRel;
    		if(sql) {
    			objEmailAddrBeanRel = await models.sequelize.emailAddrBeanRel.findOne({where: { deleted: deleted }});
    			if (objEmailAddrBeanRel) {
    				objEmailAddrBeanRel = await models.sequelize.emailAddrBeanRel.update(updateEmailAddrBeanRel, { where: { deleted: deleted } });
    			}
    		} else {
    			objEmailAddrBeanRel = await models.mongoose.emailAddrBeanRel.findOneAndUpdate({deleted: deleted}, {$set: updateEmailAddrBeanRel}, {new: true});
    		}
    		return objEmailAddrBeanRel;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailAddrBeanRelByBeanModule(beanModule, updateEmailAddrBeanRel) {
    	try {
    		let objEmailAddrBeanRel;
    		if(sql) {
    			objEmailAddrBeanRel = await models.sequelize.emailAddrBeanRel.findOne({where: { bean_module: beanModule }});
    			if (objEmailAddrBeanRel) {
    				objEmailAddrBeanRel = await models.sequelize.emailAddrBeanRel.update(updateEmailAddrBeanRel, { where: { bean_module: beanModule } });
    			}
    		} else {
    			objEmailAddrBeanRel = await models.mongoose.emailAddrBeanRel.findOneAndUpdate({bean_module: beanModule}, {$set: updateEmailAddrBeanRel}, {new: true});
    		}
    		return objEmailAddrBeanRel;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailAddrBeanRelByDateCreated(dateCreated, updateEmailAddrBeanRel) {
    	try {
    		let objEmailAddrBeanRel;
    		if(sql) {
    			objEmailAddrBeanRel = await models.sequelize.emailAddrBeanRel.findOne({where: { date_created: dateCreated }});
    			if (objEmailAddrBeanRel) {
    				objEmailAddrBeanRel = await models.sequelize.emailAddrBeanRel.update(updateEmailAddrBeanRel, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objEmailAddrBeanRel = await models.mongoose.emailAddrBeanRel.findOneAndUpdate({date_created: dateCreated}, {$set: updateEmailAddrBeanRel}, {new: true});
    		}
    		return objEmailAddrBeanRel;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailAddrBeanRelByDateModified(dateModified, updateEmailAddrBeanRel) {
    	try {
    		let objEmailAddrBeanRel;
    		if(sql) {
    			objEmailAddrBeanRel = await models.sequelize.emailAddrBeanRel.findOne({where: { date_modified: dateModified }});
    			if (objEmailAddrBeanRel) {
    				objEmailAddrBeanRel = await models.sequelize.emailAddrBeanRel.update(updateEmailAddrBeanRel, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objEmailAddrBeanRel = await models.mongoose.emailAddrBeanRel.findOneAndUpdate({date_modified: dateModified}, {$set: updateEmailAddrBeanRel}, {new: true});
    		}
    		return objEmailAddrBeanRel;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailAddrBeanRelByEmailAddressId(emailAddressId, updateEmailAddrBeanRel) {
    	try {
    		let objEmailAddrBeanRel;
    		if(sql) {
    			objEmailAddrBeanRel = await models.sequelize.emailAddrBeanRel.findOne({where: { email_address_id: emailAddressId }});
    			if (objEmailAddrBeanRel) {
    				objEmailAddrBeanRel = await models.sequelize.emailAddrBeanRel.update(updateEmailAddrBeanRel, { where: { email_address_id: emailAddressId } });
    			}
    		} else {
    			objEmailAddrBeanRel = await models.mongoose.emailAddrBeanRel.findOneAndUpdate({email_address_id: emailAddressId}, {$set: updateEmailAddrBeanRel}, {new: true});
    		}
    		return objEmailAddrBeanRel;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailAddrBeanRelByBeanId(beanId, updateEmailAddrBeanRel) {
    	try {
    		let objEmailAddrBeanRel;
    		if(sql) {
    			objEmailAddrBeanRel = await models.sequelize.emailAddrBeanRel.findOne({where: { bean_id: beanId }});
    			if (objEmailAddrBeanRel) {
    				objEmailAddrBeanRel = await models.sequelize.emailAddrBeanRel.update(updateEmailAddrBeanRel, { where: { bean_id: beanId } });
    			}
    		} else {
    			objEmailAddrBeanRel = await models.mongoose.emailAddrBeanRel.findOneAndUpdate({bean_id: beanId}, {$set: updateEmailAddrBeanRel}, {new: true});
    		}
    		return objEmailAddrBeanRel;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = EmailAddrBeanRelService;
//</es-section>
