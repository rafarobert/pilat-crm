/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:00 GMT-0400 (Bolivia Time)
 * Time: 15:36:0
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:00 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:0
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

class EmailTextService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllEmailsText(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.emailsText.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['email_id','ASC']],
                });
			} else {
				return await models.mongoose.emailsText.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllEmailsText(select = []) {
		try {
			if(sql) {
				return await models.sequelize.emailsText.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.emailsText.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addEmailText(newEmailText) {
		try {
			let objEmailText;
			if(util.PrimaryKeyTypeIsString(models.sequelize.emailsText.primaryKeys.email_id.type.toString())) {
			    newEmailText.email_id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objEmailText = await models.sequelize.emailsText.create(newEmailText);
			} else {
				objEmailText = new models.mongoose.emailsText(newEmailText);
				await objEmailText.save();
			}
			return objEmailText;
		} catch (error) {
			throw error;
		}
	}

	static async updateEmailText(email_id, updateEmailText) {
		try {
			let objEmailText;
			if(sql) {
				objEmailText = await models.sequelize.emailsText.findOne({where: { email_id: util.Char(email_id) }});
				if (objEmailText) {
					await models.sequelize.emailsText.update(updateEmailText, { where: { email_id: util.Char(email_id) } });
					objEmailText = await models.sequelize.emailsText.findOne({where: { email_id: util.Char(email_id) }});
				}
			} else {
				delete updateEmailText._id;
				objEmailText = await models.mongoose.emailsText.findOneAndUpdate({email_id:email_id}, {$set: updateEmailText}, {new: true});
			}
			return objEmailText;
		} catch (error) {
			throw error;
		}
	}

	static async getAEmailText(email_id, query) {
		try {
			let objEmailText;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objEmailText = await models.sequelize.emailsText.findOne({
					    where: where && !where.where ? where : { email_id: util.Char(email_id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objEmailText = await models.mongoose.emailsText.find({email_id:util.Char(email_id)}).select(query.select);
			}
			return objEmailText;
		} catch (error) {
			throw error;
		}
	}

	static async deleteEmailText(email_id) {
		try {
			let objEmailText;
			if(sql) {
				objEmailText = await models.sequelize.emailsText.findOne({ where: { email_id: util.Char(email_id) } });
				if (objEmailText) {
					await models.sequelize.emailsText.destroy({where: { email_id: util.Char(email_id) }});
				}
			} else {
				objEmailText = await models.mongoose.emailsText.deleteOne({email_id:util.Char(email_id)});
			}
			return objEmailText;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneByEmailId(emailId, query = {}) {
    	try {
    		let objEmailText;
    		if(sql) {
    			objEmailText = await models.sequelize.emailsText.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { email_id: emailId },
    			});
    		} else {
    			objEmailText = await models.mongoose.emailsText.findOne({email_id: emailId});
    		}
    		return objEmailText;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objEmailText;
    		if(sql) {
    			objEmailText = await models.sequelize.emailsText.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objEmailText = await models.mongoose.emailsText.findOne({deleted: deleted});
    		}
    		return objEmailText;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFromAddr(fromAddr, query = {}) {
    	try {
    		let objEmailText;
    		if(sql) {
    			objEmailText = await models.sequelize.emailsText.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { from_addr: fromAddr },
    			});
    		} else {
    			objEmailText = await models.mongoose.emailsText.findOne({from_addr: fromAddr});
    		}
    		return objEmailText;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByReplyToAddr(replyToAddr, query = {}) {
    	try {
    		let objEmailText;
    		if(sql) {
    			objEmailText = await models.sequelize.emailsText.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { reply_to_addr: replyToAddr },
    			});
    		} else {
    			objEmailText = await models.mongoose.emailsText.findOne({reply_to_addr: replyToAddr});
    		}
    		return objEmailText;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByToAddrs(toAddrs, query = {}) {
    	try {
    		let objEmailText;
    		if(sql) {
    			objEmailText = await models.sequelize.emailsText.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { to_addrs: toAddrs },
    			});
    		} else {
    			objEmailText = await models.mongoose.emailsText.findOne({to_addrs: toAddrs});
    		}
    		return objEmailText;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCcAddrs(ccAddrs, query = {}) {
    	try {
    		let objEmailText;
    		if(sql) {
    			objEmailText = await models.sequelize.emailsText.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { cc_addrs: ccAddrs },
    			});
    		} else {
    			objEmailText = await models.mongoose.emailsText.findOne({cc_addrs: ccAddrs});
    		}
    		return objEmailText;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBccAddrs(bccAddrs, query = {}) {
    	try {
    		let objEmailText;
    		if(sql) {
    			objEmailText = await models.sequelize.emailsText.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { bcc_addrs: bccAddrs },
    			});
    		} else {
    			objEmailText = await models.mongoose.emailsText.findOne({bcc_addrs: bccAddrs});
    		}
    		return objEmailText;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objEmailText;
    		if(sql) {
    			objEmailText = await models.sequelize.emailsText.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objEmailText = await models.mongoose.emailsText.findOne({description: description});
    		}
    		return objEmailText;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescriptionHtml(descriptionHtml, query = {}) {
    	try {
    		let objEmailText;
    		if(sql) {
    			objEmailText = await models.sequelize.emailsText.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description_html: descriptionHtml },
    			});
    		} else {
    			objEmailText = await models.mongoose.emailsText.findOne({description_html: descriptionHtml});
    		}
    		return objEmailText;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRawSource(rawSource, query = {}) {
    	try {
    		let objEmailText;
    		if(sql) {
    			objEmailText = await models.sequelize.emailsText.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { raw_source: rawSource },
    			});
    		} else {
    			objEmailText = await models.mongoose.emailsText.findOne({raw_source: rawSource});
    		}
    		return objEmailText;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateEmailTextByEmailId(emailId, updateEmailText) {
    	try {
    		let objEmailText;
    		if(sql) {
    			objEmailText = await models.sequelize.emailsText.findOne({where: { email_id: emailId }});
    			if (objEmailText) {
    				objEmailText = await models.sequelize.emailsText.update(updateEmailText, { where: { email_id: emailId } });
    			}
    		} else {
    			objEmailText = await models.mongoose.emailsText.findOneAndUpdate({email_id: emailId}, {$set: updateEmailText}, {new: true});
    		}
    		return objEmailText;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailTextByDeleted(deleted, updateEmailText) {
    	try {
    		let objEmailText;
    		if(sql) {
    			objEmailText = await models.sequelize.emailsText.findOne({where: { deleted: deleted }});
    			if (objEmailText) {
    				objEmailText = await models.sequelize.emailsText.update(updateEmailText, { where: { deleted: deleted } });
    			}
    		} else {
    			objEmailText = await models.mongoose.emailsText.findOneAndUpdate({deleted: deleted}, {$set: updateEmailText}, {new: true});
    		}
    		return objEmailText;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailTextByFromAddr(fromAddr, updateEmailText) {
    	try {
    		let objEmailText;
    		if(sql) {
    			objEmailText = await models.sequelize.emailsText.findOne({where: { from_addr: fromAddr }});
    			if (objEmailText) {
    				objEmailText = await models.sequelize.emailsText.update(updateEmailText, { where: { from_addr: fromAddr } });
    			}
    		} else {
    			objEmailText = await models.mongoose.emailsText.findOneAndUpdate({from_addr: fromAddr}, {$set: updateEmailText}, {new: true});
    		}
    		return objEmailText;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailTextByReplyToAddr(replyToAddr, updateEmailText) {
    	try {
    		let objEmailText;
    		if(sql) {
    			objEmailText = await models.sequelize.emailsText.findOne({where: { reply_to_addr: replyToAddr }});
    			if (objEmailText) {
    				objEmailText = await models.sequelize.emailsText.update(updateEmailText, { where: { reply_to_addr: replyToAddr } });
    			}
    		} else {
    			objEmailText = await models.mongoose.emailsText.findOneAndUpdate({reply_to_addr: replyToAddr}, {$set: updateEmailText}, {new: true});
    		}
    		return objEmailText;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailTextByToAddrs(toAddrs, updateEmailText) {
    	try {
    		let objEmailText;
    		if(sql) {
    			objEmailText = await models.sequelize.emailsText.findOne({where: { to_addrs: toAddrs }});
    			if (objEmailText) {
    				objEmailText = await models.sequelize.emailsText.update(updateEmailText, { where: { to_addrs: toAddrs } });
    			}
    		} else {
    			objEmailText = await models.mongoose.emailsText.findOneAndUpdate({to_addrs: toAddrs}, {$set: updateEmailText}, {new: true});
    		}
    		return objEmailText;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailTextByCcAddrs(ccAddrs, updateEmailText) {
    	try {
    		let objEmailText;
    		if(sql) {
    			objEmailText = await models.sequelize.emailsText.findOne({where: { cc_addrs: ccAddrs }});
    			if (objEmailText) {
    				objEmailText = await models.sequelize.emailsText.update(updateEmailText, { where: { cc_addrs: ccAddrs } });
    			}
    		} else {
    			objEmailText = await models.mongoose.emailsText.findOneAndUpdate({cc_addrs: ccAddrs}, {$set: updateEmailText}, {new: true});
    		}
    		return objEmailText;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailTextByBccAddrs(bccAddrs, updateEmailText) {
    	try {
    		let objEmailText;
    		if(sql) {
    			objEmailText = await models.sequelize.emailsText.findOne({where: { bcc_addrs: bccAddrs }});
    			if (objEmailText) {
    				objEmailText = await models.sequelize.emailsText.update(updateEmailText, { where: { bcc_addrs: bccAddrs } });
    			}
    		} else {
    			objEmailText = await models.mongoose.emailsText.findOneAndUpdate({bcc_addrs: bccAddrs}, {$set: updateEmailText}, {new: true});
    		}
    		return objEmailText;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailTextByDescription(description, updateEmailText) {
    	try {
    		let objEmailText;
    		if(sql) {
    			objEmailText = await models.sequelize.emailsText.findOne({where: { description: description }});
    			if (objEmailText) {
    				objEmailText = await models.sequelize.emailsText.update(updateEmailText, { where: { description: description } });
    			}
    		} else {
    			objEmailText = await models.mongoose.emailsText.findOneAndUpdate({description: description}, {$set: updateEmailText}, {new: true});
    		}
    		return objEmailText;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailTextByDescriptionHtml(descriptionHtml, updateEmailText) {
    	try {
    		let objEmailText;
    		if(sql) {
    			objEmailText = await models.sequelize.emailsText.findOne({where: { description_html: descriptionHtml }});
    			if (objEmailText) {
    				objEmailText = await models.sequelize.emailsText.update(updateEmailText, { where: { description_html: descriptionHtml } });
    			}
    		} else {
    			objEmailText = await models.mongoose.emailsText.findOneAndUpdate({description_html: descriptionHtml}, {$set: updateEmailText}, {new: true});
    		}
    		return objEmailText;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailTextByRawSource(rawSource, updateEmailText) {
    	try {
    		let objEmailText;
    		if(sql) {
    			objEmailText = await models.sequelize.emailsText.findOne({where: { raw_source: rawSource }});
    			if (objEmailText) {
    				objEmailText = await models.sequelize.emailsText.update(updateEmailText, { where: { raw_source: rawSource } });
    			}
    		} else {
    			objEmailText = await models.mongoose.emailsText.findOneAndUpdate({raw_source: rawSource}, {$set: updateEmailText}, {new: true});
    		}
    		return objEmailText;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = EmailTextService;
//</es-section>
