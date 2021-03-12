/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:03 GMT-0400 (Bolivia Time)
 * Time: 14:57:3
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:03 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:3
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

class InboundEmailService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllInboundEmail(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.inboundEmail.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.inboundEmail.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllInboundEmail(select = []) {
		try {
			if(sql) {
				return await models.sequelize.inboundEmail.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.inboundEmail.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addInboundEmail(newInboundEmail) {
		try {
			let objInboundEmail;
			if(util.PrimaryKeyTypeIsString(models.sequelize.inboundEmail.primaryKeys.id.type.toString())) {
			    newInboundEmail.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objInboundEmail = await models.sequelize.inboundEmail.create(newInboundEmail);
			} else {
				objInboundEmail = new models.mongoose.inboundEmail(newInboundEmail);
				await objInboundEmail.save();
			}
			return objInboundEmail;
		} catch (error) {
			throw error;
		}
	}

	static async updateInboundEmail(id, updateInboundEmail) {
		try {
			let objInboundEmail;
			if(sql) {
				objInboundEmail = await models.sequelize.inboundEmail.findOne({where: { id: util.String(id) }});
				if (objInboundEmail) {
					await models.sequelize.inboundEmail.update(updateInboundEmail, { where: { id: util.String(id) } });
					objInboundEmail = await models.sequelize.inboundEmail.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateInboundEmail._id;
				objInboundEmail = await models.mongoose.inboundEmail.findOneAndUpdate({id:id}, {$set: updateInboundEmail}, {new: true});
			}
			return objInboundEmail;
		} catch (error) {
			throw error;
		}
	}

	static async getAInboundEmail(id, query) {
		try {
			let objInboundEmail;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objInboundEmail = await models.sequelize.inboundEmail.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objInboundEmail = await models.mongoose.inboundEmail.find({id:util.String(id)}).select(query.select);
			}
			return objInboundEmail;
		} catch (error) {
			throw error;
		}
	}

	static async deleteInboundEmail(id) {
		try {
			let objInboundEmail;
			if(sql) {
				objInboundEmail = await models.sequelize.inboundEmail.findOne({ where: { id: util.String(id) } });
				if (objInboundEmail) {
					await models.sequelize.inboundEmail.destroy({where: { id: util.String(id) }});
				}
			} else {
				objInboundEmail = await models.mongoose.inboundEmail.deleteOne({id:util.String(id)});
			}
			return objInboundEmail;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOne({id: id});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOne({deleted: deleted});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleteSeen(deleteSeen, query = {}) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { delete_seen: deleteSeen },
    			});
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOne({delete_seen: deleteSeen});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByIsPersonal(isPersonal, query = {}) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { is_personal: isPersonal },
    			});
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOne({is_personal: isPersonal});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPort(port, query = {}) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { port: port },
    			});
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOne({port: port});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOne({name: name});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByStatus(status, query = {}) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { status: status },
    			});
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOne({status: status});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByServerUrl(serverUrl, query = {}) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { server_url: serverUrl },
    			});
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOne({server_url: serverUrl});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByEmailUser(emailUser, query = {}) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { email_user: emailUser },
    			});
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOne({email_user: emailUser});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByEmailPassword(emailPassword, query = {}) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { email_password: emailPassword },
    			});
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOne({email_password: emailPassword});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByService(service, query = {}) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { service: service },
    			});
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOne({service: service});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMailboxType(mailboxType, query = {}) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { mailbox_type: mailboxType },
    			});
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOne({mailbox_type: mailboxType});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMailbox(mailbox, query = {}) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { mailbox: mailbox },
    			});
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOne({mailbox: mailbox});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByStoredOptions(storedOptions, query = {}) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { stored_options: storedOptions },
    			});
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOne({stored_options: storedOptions});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOne({date_entered: dateEntered});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOne({date_modified: dateModified});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOne({modified_user_id: modifiedUserId});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOne({created_by: createdBy});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTemplateId(templateId, query = {}) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { template_id: templateId },
    			});
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOne({template_id: templateId});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByGroupId(groupId, query = {}) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { group_id: groupId },
    			});
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOne({group_id: groupId});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByGroupfolderId(groupfolderId, query = {}) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { groupfolder_id: groupfolderId },
    			});
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOne({groupfolder_id: groupfolderId});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateInboundEmailById(id, updateInboundEmail) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({where: { id: id }});
    			if (objInboundEmail) {
    				objInboundEmail = await models.sequelize.inboundEmail.update(updateInboundEmail, { where: { id: id } });
    			}
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOneAndUpdate({id: id}, {$set: updateInboundEmail}, {new: true});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateInboundEmailByDeleted(deleted, updateInboundEmail) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({where: { deleted: deleted }});
    			if (objInboundEmail) {
    				objInboundEmail = await models.sequelize.inboundEmail.update(updateInboundEmail, { where: { deleted: deleted } });
    			}
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOneAndUpdate({deleted: deleted}, {$set: updateInboundEmail}, {new: true});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateInboundEmailByDeleteSeen(deleteSeen, updateInboundEmail) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({where: { delete_seen: deleteSeen }});
    			if (objInboundEmail) {
    				objInboundEmail = await models.sequelize.inboundEmail.update(updateInboundEmail, { where: { delete_seen: deleteSeen } });
    			}
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOneAndUpdate({delete_seen: deleteSeen}, {$set: updateInboundEmail}, {new: true});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateInboundEmailByIsPersonal(isPersonal, updateInboundEmail) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({where: { is_personal: isPersonal }});
    			if (objInboundEmail) {
    				objInboundEmail = await models.sequelize.inboundEmail.update(updateInboundEmail, { where: { is_personal: isPersonal } });
    			}
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOneAndUpdate({is_personal: isPersonal}, {$set: updateInboundEmail}, {new: true});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateInboundEmailByPort(port, updateInboundEmail) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({where: { port: port }});
    			if (objInboundEmail) {
    				objInboundEmail = await models.sequelize.inboundEmail.update(updateInboundEmail, { where: { port: port } });
    			}
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOneAndUpdate({port: port}, {$set: updateInboundEmail}, {new: true});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateInboundEmailByName(name, updateInboundEmail) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({where: { name: name }});
    			if (objInboundEmail) {
    				objInboundEmail = await models.sequelize.inboundEmail.update(updateInboundEmail, { where: { name: name } });
    			}
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOneAndUpdate({name: name}, {$set: updateInboundEmail}, {new: true});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateInboundEmailByStatus(status, updateInboundEmail) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({where: { status: status }});
    			if (objInboundEmail) {
    				objInboundEmail = await models.sequelize.inboundEmail.update(updateInboundEmail, { where: { status: status } });
    			}
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOneAndUpdate({status: status}, {$set: updateInboundEmail}, {new: true});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateInboundEmailByServerUrl(serverUrl, updateInboundEmail) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({where: { server_url: serverUrl }});
    			if (objInboundEmail) {
    				objInboundEmail = await models.sequelize.inboundEmail.update(updateInboundEmail, { where: { server_url: serverUrl } });
    			}
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOneAndUpdate({server_url: serverUrl}, {$set: updateInboundEmail}, {new: true});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateInboundEmailByEmailUser(emailUser, updateInboundEmail) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({where: { email_user: emailUser }});
    			if (objInboundEmail) {
    				objInboundEmail = await models.sequelize.inboundEmail.update(updateInboundEmail, { where: { email_user: emailUser } });
    			}
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOneAndUpdate({email_user: emailUser}, {$set: updateInboundEmail}, {new: true});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateInboundEmailByEmailPassword(emailPassword, updateInboundEmail) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({where: { email_password: emailPassword }});
    			if (objInboundEmail) {
    				objInboundEmail = await models.sequelize.inboundEmail.update(updateInboundEmail, { where: { email_password: emailPassword } });
    			}
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOneAndUpdate({email_password: emailPassword}, {$set: updateInboundEmail}, {new: true});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateInboundEmailByService(service, updateInboundEmail) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({where: { service: service }});
    			if (objInboundEmail) {
    				objInboundEmail = await models.sequelize.inboundEmail.update(updateInboundEmail, { where: { service: service } });
    			}
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOneAndUpdate({service: service}, {$set: updateInboundEmail}, {new: true});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateInboundEmailByMailboxType(mailboxType, updateInboundEmail) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({where: { mailbox_type: mailboxType }});
    			if (objInboundEmail) {
    				objInboundEmail = await models.sequelize.inboundEmail.update(updateInboundEmail, { where: { mailbox_type: mailboxType } });
    			}
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOneAndUpdate({mailbox_type: mailboxType}, {$set: updateInboundEmail}, {new: true});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateInboundEmailByMailbox(mailbox, updateInboundEmail) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({where: { mailbox: mailbox }});
    			if (objInboundEmail) {
    				objInboundEmail = await models.sequelize.inboundEmail.update(updateInboundEmail, { where: { mailbox: mailbox } });
    			}
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOneAndUpdate({mailbox: mailbox}, {$set: updateInboundEmail}, {new: true});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateInboundEmailByStoredOptions(storedOptions, updateInboundEmail) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({where: { stored_options: storedOptions }});
    			if (objInboundEmail) {
    				objInboundEmail = await models.sequelize.inboundEmail.update(updateInboundEmail, { where: { stored_options: storedOptions } });
    			}
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOneAndUpdate({stored_options: storedOptions}, {$set: updateInboundEmail}, {new: true});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateInboundEmailByDateEntered(dateEntered, updateInboundEmail) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({where: { date_entered: dateEntered }});
    			if (objInboundEmail) {
    				objInboundEmail = await models.sequelize.inboundEmail.update(updateInboundEmail, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOneAndUpdate({date_entered: dateEntered}, {$set: updateInboundEmail}, {new: true});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateInboundEmailByDateModified(dateModified, updateInboundEmail) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({where: { date_modified: dateModified }});
    			if (objInboundEmail) {
    				objInboundEmail = await models.sequelize.inboundEmail.update(updateInboundEmail, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOneAndUpdate({date_modified: dateModified}, {$set: updateInboundEmail}, {new: true});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateInboundEmailByModifiedUserId(modifiedUserId, updateInboundEmail) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objInboundEmail) {
    				objInboundEmail = await models.sequelize.inboundEmail.update(updateInboundEmail, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateInboundEmail}, {new: true});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateInboundEmailByCreatedBy(createdBy, updateInboundEmail) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({where: { created_by: createdBy }});
    			if (objInboundEmail) {
    				objInboundEmail = await models.sequelize.inboundEmail.update(updateInboundEmail, { where: { created_by: createdBy } });
    			}
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOneAndUpdate({created_by: createdBy}, {$set: updateInboundEmail}, {new: true});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateInboundEmailByTemplateId(templateId, updateInboundEmail) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({where: { template_id: templateId }});
    			if (objInboundEmail) {
    				objInboundEmail = await models.sequelize.inboundEmail.update(updateInboundEmail, { where: { template_id: templateId } });
    			}
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOneAndUpdate({template_id: templateId}, {$set: updateInboundEmail}, {new: true});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateInboundEmailByGroupId(groupId, updateInboundEmail) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({where: { group_id: groupId }});
    			if (objInboundEmail) {
    				objInboundEmail = await models.sequelize.inboundEmail.update(updateInboundEmail, { where: { group_id: groupId } });
    			}
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOneAndUpdate({group_id: groupId}, {$set: updateInboundEmail}, {new: true});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateInboundEmailByGroupfolderId(groupfolderId, updateInboundEmail) {
    	try {
    		let objInboundEmail;
    		if(sql) {
    			objInboundEmail = await models.sequelize.inboundEmail.findOne({where: { groupfolder_id: groupfolderId }});
    			if (objInboundEmail) {
    				objInboundEmail = await models.sequelize.inboundEmail.update(updateInboundEmail, { where: { groupfolder_id: groupfolderId } });
    			}
    		} else {
    			objInboundEmail = await models.mongoose.inboundEmail.findOneAndUpdate({groupfolder_id: groupfolderId}, {$set: updateInboundEmail}, {new: true});
    		}
    		return objInboundEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = InboundEmailService;
//</es-section>
