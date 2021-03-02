/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:14 GMT-0400 (Bolivia Time)
 * Time: 14:1:14
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:14 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:14
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

class OutboundEmailService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllOutboundEmail(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.outboundEmail.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.outboundEmail.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllOutboundEmail(select = []) {
		try {
			if(sql) {
				return await models.sequelize.outboundEmail.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.outboundEmail.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addOutboundEmail(newOutboundEmail) {
		try {
			let objOutboundEmail;
			if(util.PrimaryKeyTypeIsString(models.sequelize.outboundEmail.primaryKeys.id.type.toString())) {
			    newOutboundEmail.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objOutboundEmail = await models.sequelize.outboundEmail.create(newOutboundEmail);
			} else {
				objOutboundEmail = new models.mongoose.outboundEmail(newOutboundEmail);
				await objOutboundEmail.save();
			}
			return objOutboundEmail;
		} catch (error) {
			throw error;
		}
	}

	static async updateOutboundEmail(id, updateOutboundEmail) {
		try {
			let objOutboundEmail;
			if(sql) {
				objOutboundEmail = await models.sequelize.outboundEmail.findOne({where: { id: util.Char(id) }});
				if (objOutboundEmail) {
					await models.sequelize.outboundEmail.update(updateOutboundEmail, { where: { id: util.Char(id) } });
					objOutboundEmail = await models.sequelize.outboundEmail.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateOutboundEmail._id;
				objOutboundEmail = await models.mongoose.outboundEmail.findOneAndUpdate({id:id}, {$set: updateOutboundEmail}, {new: true});
			}
			return objOutboundEmail;
		} catch (error) {
			throw error;
		}
	}

	static async getAOutboundEmail(id, query) {
		try {
			let objOutboundEmail;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objOutboundEmail = await models.sequelize.outboundEmail.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objOutboundEmail = await models.mongoose.outboundEmail.find({id:util.Char(id)}).select(query.select);
			}
			return objOutboundEmail;
		} catch (error) {
			throw error;
		}
	}

	static async deleteOutboundEmail(id) {
		try {
			let objOutboundEmail;
			if(sql) {
				objOutboundEmail = await models.sequelize.outboundEmail.findOne({ where: { id: util.Char(id) } });
				if (objOutboundEmail) {
					await models.sequelize.outboundEmail.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objOutboundEmail = await models.mongoose.outboundEmail.deleteOne({id:util.Char(id)});
			}
			return objOutboundEmail;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objOutboundEmail;
    		if(sql) {
    			objOutboundEmail = await models.sequelize.outboundEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objOutboundEmail = await models.mongoose.outboundEmail.findOne({id: id});
    		}
    		return objOutboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMailSmtpauthReq(mailSmtpauthReq, query = {}) {
    	try {
    		let objOutboundEmail;
    		if(sql) {
    			objOutboundEmail = await models.sequelize.outboundEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { mail_smtpauth_req: mailSmtpauthReq },
    			});
    		} else {
    			objOutboundEmail = await models.mongoose.outboundEmail.findOne({mail_smtpauth_req: mailSmtpauthReq});
    		}
    		return objOutboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objOutboundEmail;
    		if(sql) {
    			objOutboundEmail = await models.sequelize.outboundEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objOutboundEmail = await models.mongoose.outboundEmail.findOne({deleted: deleted});
    		}
    		return objOutboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objOutboundEmail;
    		if(sql) {
    			objOutboundEmail = await models.sequelize.outboundEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objOutboundEmail = await models.mongoose.outboundEmail.findOne({name: name});
    		}
    		return objOutboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByType(type, query = {}) {
    	try {
    		let objOutboundEmail;
    		if(sql) {
    			objOutboundEmail = await models.sequelize.outboundEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { type: type },
    			});
    		} else {
    			objOutboundEmail = await models.mongoose.outboundEmail.findOne({type: type});
    		}
    		return objOutboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySmtpFromName(smtpFromName, query = {}) {
    	try {
    		let objOutboundEmail;
    		if(sql) {
    			objOutboundEmail = await models.sequelize.outboundEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { smtp_from_name: smtpFromName },
    			});
    		} else {
    			objOutboundEmail = await models.mongoose.outboundEmail.findOne({smtp_from_name: smtpFromName});
    		}
    		return objOutboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySmtpFromAddr(smtpFromAddr, query = {}) {
    	try {
    		let objOutboundEmail;
    		if(sql) {
    			objOutboundEmail = await models.sequelize.outboundEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { smtp_from_addr: smtpFromAddr },
    			});
    		} else {
    			objOutboundEmail = await models.mongoose.outboundEmail.findOne({smtp_from_addr: smtpFromAddr});
    		}
    		return objOutboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMailSendtype(mailSendtype, query = {}) {
    	try {
    		let objOutboundEmail;
    		if(sql) {
    			objOutboundEmail = await models.sequelize.outboundEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { mail_sendtype: mailSendtype },
    			});
    		} else {
    			objOutboundEmail = await models.mongoose.outboundEmail.findOne({mail_sendtype: mailSendtype});
    		}
    		return objOutboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMailSmtptype(mailSmtptype, query = {}) {
    	try {
    		let objOutboundEmail;
    		if(sql) {
    			objOutboundEmail = await models.sequelize.outboundEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { mail_smtptype: mailSmtptype },
    			});
    		} else {
    			objOutboundEmail = await models.mongoose.outboundEmail.findOne({mail_smtptype: mailSmtptype});
    		}
    		return objOutboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMailSmtpserver(mailSmtpserver, query = {}) {
    	try {
    		let objOutboundEmail;
    		if(sql) {
    			objOutboundEmail = await models.sequelize.outboundEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { mail_smtpserver: mailSmtpserver },
    			});
    		} else {
    			objOutboundEmail = await models.mongoose.outboundEmail.findOne({mail_smtpserver: mailSmtpserver});
    		}
    		return objOutboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMailSmtpport(mailSmtpport, query = {}) {
    	try {
    		let objOutboundEmail;
    		if(sql) {
    			objOutboundEmail = await models.sequelize.outboundEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { mail_smtpport: mailSmtpport },
    			});
    		} else {
    			objOutboundEmail = await models.mongoose.outboundEmail.findOne({mail_smtpport: mailSmtpport});
    		}
    		return objOutboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMailSmtpuser(mailSmtpuser, query = {}) {
    	try {
    		let objOutboundEmail;
    		if(sql) {
    			objOutboundEmail = await models.sequelize.outboundEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { mail_smtpuser: mailSmtpuser },
    			});
    		} else {
    			objOutboundEmail = await models.mongoose.outboundEmail.findOne({mail_smtpuser: mailSmtpuser});
    		}
    		return objOutboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMailSmtppass(mailSmtppass, query = {}) {
    	try {
    		let objOutboundEmail;
    		if(sql) {
    			objOutboundEmail = await models.sequelize.outboundEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { mail_smtppass: mailSmtppass },
    			});
    		} else {
    			objOutboundEmail = await models.mongoose.outboundEmail.findOne({mail_smtppass: mailSmtppass});
    		}
    		return objOutboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMailSmtpssl(mailSmtpssl, query = {}) {
    	try {
    		let objOutboundEmail;
    		if(sql) {
    			objOutboundEmail = await models.sequelize.outboundEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { mail_smtpssl: mailSmtpssl },
    			});
    		} else {
    			objOutboundEmail = await models.mongoose.outboundEmail.findOne({mail_smtpssl: mailSmtpssl});
    		}
    		return objOutboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objOutboundEmail;
    		if(sql) {
    			objOutboundEmail = await models.sequelize.outboundEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objOutboundEmail = await models.mongoose.outboundEmail.findOne({date_entered: dateEntered});
    		}
    		return objOutboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objOutboundEmail;
    		if(sql) {
    			objOutboundEmail = await models.sequelize.outboundEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objOutboundEmail = await models.mongoose.outboundEmail.findOne({date_modified: dateModified});
    		}
    		return objOutboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUserId(userId, query = {}) {
    	try {
    		let objOutboundEmail;
    		if(sql) {
    			objOutboundEmail = await models.sequelize.outboundEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { user_id: userId },
    			});
    		} else {
    			objOutboundEmail = await models.mongoose.outboundEmail.findOne({user_id: userId});
    		}
    		return objOutboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objOutboundEmail;
    		if(sql) {
    			objOutboundEmail = await models.sequelize.outboundEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objOutboundEmail = await models.mongoose.outboundEmail.findOne({modified_user_id: modifiedUserId});
    		}
    		return objOutboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objOutboundEmail;
    		if(sql) {
    			objOutboundEmail = await models.sequelize.outboundEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objOutboundEmail = await models.mongoose.outboundEmail.findOne({created_by: createdBy});
    		}
    		return objOutboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objOutboundEmail;
    		if(sql) {
    			objOutboundEmail = await models.sequelize.outboundEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objOutboundEmail = await models.mongoose.outboundEmail.findOne({assigned_user_id: assignedUserId});
    		}
    		return objOutboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateOutboundEmailById(id, updateOutboundEmail) {
    	try {
    		let objOutboundEmail;
    		if(sql) {
    			objOutboundEmail = await models.sequelize.outboundEmail.findOne({where: { id: id }});
    			if (objOutboundEmail) {
    				objOutboundEmail = await models.sequelize.outboundEmail.update(updateOutboundEmail, { where: { id: id } });
    			}
    		} else {
    			objOutboundEmail = await models.mongoose.outboundEmail.findOneAndUpdate({id: id}, {$set: updateOutboundEmail}, {new: true});
    		}
    		return objOutboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOutboundEmailByMailSmtpauthReq(mailSmtpauthReq, updateOutboundEmail) {
    	try {
    		let objOutboundEmail;
    		if(sql) {
    			objOutboundEmail = await models.sequelize.outboundEmail.findOne({where: { mail_smtpauth_req: mailSmtpauthReq }});
    			if (objOutboundEmail) {
    				objOutboundEmail = await models.sequelize.outboundEmail.update(updateOutboundEmail, { where: { mail_smtpauth_req: mailSmtpauthReq } });
    			}
    		} else {
    			objOutboundEmail = await models.mongoose.outboundEmail.findOneAndUpdate({mail_smtpauth_req: mailSmtpauthReq}, {$set: updateOutboundEmail}, {new: true});
    		}
    		return objOutboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOutboundEmailByDeleted(deleted, updateOutboundEmail) {
    	try {
    		let objOutboundEmail;
    		if(sql) {
    			objOutboundEmail = await models.sequelize.outboundEmail.findOne({where: { deleted: deleted }});
    			if (objOutboundEmail) {
    				objOutboundEmail = await models.sequelize.outboundEmail.update(updateOutboundEmail, { where: { deleted: deleted } });
    			}
    		} else {
    			objOutboundEmail = await models.mongoose.outboundEmail.findOneAndUpdate({deleted: deleted}, {$set: updateOutboundEmail}, {new: true});
    		}
    		return objOutboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOutboundEmailByName(name, updateOutboundEmail) {
    	try {
    		let objOutboundEmail;
    		if(sql) {
    			objOutboundEmail = await models.sequelize.outboundEmail.findOne({where: { name: name }});
    			if (objOutboundEmail) {
    				objOutboundEmail = await models.sequelize.outboundEmail.update(updateOutboundEmail, { where: { name: name } });
    			}
    		} else {
    			objOutboundEmail = await models.mongoose.outboundEmail.findOneAndUpdate({name: name}, {$set: updateOutboundEmail}, {new: true});
    		}
    		return objOutboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOutboundEmailByType(type, updateOutboundEmail) {
    	try {
    		let objOutboundEmail;
    		if(sql) {
    			objOutboundEmail = await models.sequelize.outboundEmail.findOne({where: { type: type }});
    			if (objOutboundEmail) {
    				objOutboundEmail = await models.sequelize.outboundEmail.update(updateOutboundEmail, { where: { type: type } });
    			}
    		} else {
    			objOutboundEmail = await models.mongoose.outboundEmail.findOneAndUpdate({type: type}, {$set: updateOutboundEmail}, {new: true});
    		}
    		return objOutboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOutboundEmailBySmtpFromName(smtpFromName, updateOutboundEmail) {
    	try {
    		let objOutboundEmail;
    		if(sql) {
    			objOutboundEmail = await models.sequelize.outboundEmail.findOne({where: { smtp_from_name: smtpFromName }});
    			if (objOutboundEmail) {
    				objOutboundEmail = await models.sequelize.outboundEmail.update(updateOutboundEmail, { where: { smtp_from_name: smtpFromName } });
    			}
    		} else {
    			objOutboundEmail = await models.mongoose.outboundEmail.findOneAndUpdate({smtp_from_name: smtpFromName}, {$set: updateOutboundEmail}, {new: true});
    		}
    		return objOutboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOutboundEmailBySmtpFromAddr(smtpFromAddr, updateOutboundEmail) {
    	try {
    		let objOutboundEmail;
    		if(sql) {
    			objOutboundEmail = await models.sequelize.outboundEmail.findOne({where: { smtp_from_addr: smtpFromAddr }});
    			if (objOutboundEmail) {
    				objOutboundEmail = await models.sequelize.outboundEmail.update(updateOutboundEmail, { where: { smtp_from_addr: smtpFromAddr } });
    			}
    		} else {
    			objOutboundEmail = await models.mongoose.outboundEmail.findOneAndUpdate({smtp_from_addr: smtpFromAddr}, {$set: updateOutboundEmail}, {new: true});
    		}
    		return objOutboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOutboundEmailByMailSendtype(mailSendtype, updateOutboundEmail) {
    	try {
    		let objOutboundEmail;
    		if(sql) {
    			objOutboundEmail = await models.sequelize.outboundEmail.findOne({where: { mail_sendtype: mailSendtype }});
    			if (objOutboundEmail) {
    				objOutboundEmail = await models.sequelize.outboundEmail.update(updateOutboundEmail, { where: { mail_sendtype: mailSendtype } });
    			}
    		} else {
    			objOutboundEmail = await models.mongoose.outboundEmail.findOneAndUpdate({mail_sendtype: mailSendtype}, {$set: updateOutboundEmail}, {new: true});
    		}
    		return objOutboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOutboundEmailByMailSmtptype(mailSmtptype, updateOutboundEmail) {
    	try {
    		let objOutboundEmail;
    		if(sql) {
    			objOutboundEmail = await models.sequelize.outboundEmail.findOne({where: { mail_smtptype: mailSmtptype }});
    			if (objOutboundEmail) {
    				objOutboundEmail = await models.sequelize.outboundEmail.update(updateOutboundEmail, { where: { mail_smtptype: mailSmtptype } });
    			}
    		} else {
    			objOutboundEmail = await models.mongoose.outboundEmail.findOneAndUpdate({mail_smtptype: mailSmtptype}, {$set: updateOutboundEmail}, {new: true});
    		}
    		return objOutboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOutboundEmailByMailSmtpserver(mailSmtpserver, updateOutboundEmail) {
    	try {
    		let objOutboundEmail;
    		if(sql) {
    			objOutboundEmail = await models.sequelize.outboundEmail.findOne({where: { mail_smtpserver: mailSmtpserver }});
    			if (objOutboundEmail) {
    				objOutboundEmail = await models.sequelize.outboundEmail.update(updateOutboundEmail, { where: { mail_smtpserver: mailSmtpserver } });
    			}
    		} else {
    			objOutboundEmail = await models.mongoose.outboundEmail.findOneAndUpdate({mail_smtpserver: mailSmtpserver}, {$set: updateOutboundEmail}, {new: true});
    		}
    		return objOutboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOutboundEmailByMailSmtpport(mailSmtpport, updateOutboundEmail) {
    	try {
    		let objOutboundEmail;
    		if(sql) {
    			objOutboundEmail = await models.sequelize.outboundEmail.findOne({where: { mail_smtpport: mailSmtpport }});
    			if (objOutboundEmail) {
    				objOutboundEmail = await models.sequelize.outboundEmail.update(updateOutboundEmail, { where: { mail_smtpport: mailSmtpport } });
    			}
    		} else {
    			objOutboundEmail = await models.mongoose.outboundEmail.findOneAndUpdate({mail_smtpport: mailSmtpport}, {$set: updateOutboundEmail}, {new: true});
    		}
    		return objOutboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOutboundEmailByMailSmtpuser(mailSmtpuser, updateOutboundEmail) {
    	try {
    		let objOutboundEmail;
    		if(sql) {
    			objOutboundEmail = await models.sequelize.outboundEmail.findOne({where: { mail_smtpuser: mailSmtpuser }});
    			if (objOutboundEmail) {
    				objOutboundEmail = await models.sequelize.outboundEmail.update(updateOutboundEmail, { where: { mail_smtpuser: mailSmtpuser } });
    			}
    		} else {
    			objOutboundEmail = await models.mongoose.outboundEmail.findOneAndUpdate({mail_smtpuser: mailSmtpuser}, {$set: updateOutboundEmail}, {new: true});
    		}
    		return objOutboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOutboundEmailByMailSmtppass(mailSmtppass, updateOutboundEmail) {
    	try {
    		let objOutboundEmail;
    		if(sql) {
    			objOutboundEmail = await models.sequelize.outboundEmail.findOne({where: { mail_smtppass: mailSmtppass }});
    			if (objOutboundEmail) {
    				objOutboundEmail = await models.sequelize.outboundEmail.update(updateOutboundEmail, { where: { mail_smtppass: mailSmtppass } });
    			}
    		} else {
    			objOutboundEmail = await models.mongoose.outboundEmail.findOneAndUpdate({mail_smtppass: mailSmtppass}, {$set: updateOutboundEmail}, {new: true});
    		}
    		return objOutboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOutboundEmailByMailSmtpssl(mailSmtpssl, updateOutboundEmail) {
    	try {
    		let objOutboundEmail;
    		if(sql) {
    			objOutboundEmail = await models.sequelize.outboundEmail.findOne({where: { mail_smtpssl: mailSmtpssl }});
    			if (objOutboundEmail) {
    				objOutboundEmail = await models.sequelize.outboundEmail.update(updateOutboundEmail, { where: { mail_smtpssl: mailSmtpssl } });
    			}
    		} else {
    			objOutboundEmail = await models.mongoose.outboundEmail.findOneAndUpdate({mail_smtpssl: mailSmtpssl}, {$set: updateOutboundEmail}, {new: true});
    		}
    		return objOutboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOutboundEmailByDateEntered(dateEntered, updateOutboundEmail) {
    	try {
    		let objOutboundEmail;
    		if(sql) {
    			objOutboundEmail = await models.sequelize.outboundEmail.findOne({where: { date_entered: dateEntered }});
    			if (objOutboundEmail) {
    				objOutboundEmail = await models.sequelize.outboundEmail.update(updateOutboundEmail, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objOutboundEmail = await models.mongoose.outboundEmail.findOneAndUpdate({date_entered: dateEntered}, {$set: updateOutboundEmail}, {new: true});
    		}
    		return objOutboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOutboundEmailByDateModified(dateModified, updateOutboundEmail) {
    	try {
    		let objOutboundEmail;
    		if(sql) {
    			objOutboundEmail = await models.sequelize.outboundEmail.findOne({where: { date_modified: dateModified }});
    			if (objOutboundEmail) {
    				objOutboundEmail = await models.sequelize.outboundEmail.update(updateOutboundEmail, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objOutboundEmail = await models.mongoose.outboundEmail.findOneAndUpdate({date_modified: dateModified}, {$set: updateOutboundEmail}, {new: true});
    		}
    		return objOutboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOutboundEmailByUserId(userId, updateOutboundEmail) {
    	try {
    		let objOutboundEmail;
    		if(sql) {
    			objOutboundEmail = await models.sequelize.outboundEmail.findOne({where: { user_id: userId }});
    			if (objOutboundEmail) {
    				objOutboundEmail = await models.sequelize.outboundEmail.update(updateOutboundEmail, { where: { user_id: userId } });
    			}
    		} else {
    			objOutboundEmail = await models.mongoose.outboundEmail.findOneAndUpdate({user_id: userId}, {$set: updateOutboundEmail}, {new: true});
    		}
    		return objOutboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOutboundEmailByModifiedUserId(modifiedUserId, updateOutboundEmail) {
    	try {
    		let objOutboundEmail;
    		if(sql) {
    			objOutboundEmail = await models.sequelize.outboundEmail.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objOutboundEmail) {
    				objOutboundEmail = await models.sequelize.outboundEmail.update(updateOutboundEmail, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objOutboundEmail = await models.mongoose.outboundEmail.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateOutboundEmail}, {new: true});
    		}
    		return objOutboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOutboundEmailByCreatedBy(createdBy, updateOutboundEmail) {
    	try {
    		let objOutboundEmail;
    		if(sql) {
    			objOutboundEmail = await models.sequelize.outboundEmail.findOne({where: { created_by: createdBy }});
    			if (objOutboundEmail) {
    				objOutboundEmail = await models.sequelize.outboundEmail.update(updateOutboundEmail, { where: { created_by: createdBy } });
    			}
    		} else {
    			objOutboundEmail = await models.mongoose.outboundEmail.findOneAndUpdate({created_by: createdBy}, {$set: updateOutboundEmail}, {new: true});
    		}
    		return objOutboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOutboundEmailByAssignedUserId(assignedUserId, updateOutboundEmail) {
    	try {
    		let objOutboundEmail;
    		if(sql) {
    			objOutboundEmail = await models.sequelize.outboundEmail.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objOutboundEmail) {
    				objOutboundEmail = await models.sequelize.outboundEmail.update(updateOutboundEmail, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objOutboundEmail = await models.mongoose.outboundEmail.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateOutboundEmail}, {new: true});
    		}
    		return objOutboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = OutboundEmailService;
//</es-section>
