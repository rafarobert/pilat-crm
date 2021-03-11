/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:45 GMT-0400 (Bolivia Time)
 * Time: 14:56:45
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:45 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:45
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

class EmailService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllEmails(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.emails.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.emails.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllEmails(select = []) {
		try {
			if(sql) {
				return await models.sequelize.emails.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.emails.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addEmail(newEmail) {
		try {
			let objEmail;
			if(util.PrimaryKeyTypeIsString(models.sequelize.emails.primaryKeys.id.type.toString())) {
			    newEmail.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objEmail = await models.sequelize.emails.create(newEmail);
			} else {
				objEmail = new models.mongoose.emails(newEmail);
				await objEmail.save();
			}
			return objEmail;
		} catch (error) {
			throw error;
		}
	}

	static async updateEmail(id, updateEmail) {
		try {
			let objEmail;
			if(sql) {
				objEmail = await models.sequelize.emails.findOne({where: { id: util.Char(id) }});
				if (objEmail) {
					await models.sequelize.emails.update(updateEmail, { where: { id: util.Char(id) } });
					objEmail = await models.sequelize.emails.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateEmail._id;
				objEmail = await models.mongoose.emails.findOneAndUpdate({id:id}, {$set: updateEmail}, {new: true});
			}
			return objEmail;
		} catch (error) {
			throw error;
		}
	}

	static async getAEmail(id, query) {
		try {
			let objEmail;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objEmail = await models.sequelize.emails.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objEmail = await models.mongoose.emails.find({id:util.Char(id)}).select(query.select);
			}
			return objEmail;
		} catch (error) {
			throw error;
		}
	}

	static async deleteEmail(id) {
		try {
			let objEmail;
			if(sql) {
				objEmail = await models.sequelize.emails.findOne({ where: { id: util.Char(id) } });
				if (objEmail) {
					await models.sequelize.emails.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objEmail = await models.mongoose.emails.deleteOne({id:util.Char(id)});
			}
			return objEmail;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objEmail = await models.mongoose.emails.findOne({id: id});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objEmail = await models.mongoose.emails.findOne({deleted: deleted});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByOrphaned(orphaned, query = {}) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { orphaned: orphaned },
    			});
    		} else {
    			objEmail = await models.mongoose.emails.findOne({orphaned: orphaned});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFlagged(flagged, query = {}) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { flagged: flagged },
    			});
    		} else {
    			objEmail = await models.mongoose.emails.findOne({flagged: flagged});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByReplyToStatus(replyToStatus, query = {}) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { reply_to_status: replyToStatus },
    			});
    		} else {
    			objEmail = await models.mongoose.emails.findOne({reply_to_status: replyToStatus});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objEmail = await models.mongoose.emails.findOne({name: name});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMessageId(messageId, query = {}) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { message_id: messageId },
    			});
    		} else {
    			objEmail = await models.mongoose.emails.findOne({message_id: messageId});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByType(type, query = {}) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { type: type },
    			});
    		} else {
    			objEmail = await models.mongoose.emails.findOne({type: type});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByStatus(status, query = {}) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { status: status },
    			});
    		} else {
    			objEmail = await models.mongoose.emails.findOne({status: status});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByIntent(intent, query = {}) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { intent: intent },
    			});
    		} else {
    			objEmail = await models.mongoose.emails.findOne({intent: intent});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentType(parentType, query = {}) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_type: parentType },
    			});
    		} else {
    			objEmail = await models.mongoose.emails.findOne({parent_type: parentType});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUid(uid, query = {}) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { uid: uid },
    			});
    		} else {
    			objEmail = await models.mongoose.emails.findOne({uid: uid});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCategoryId(categoryId, query = {}) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { category_id: categoryId },
    			});
    		} else {
    			objEmail = await models.mongoose.emails.findOne({category_id: categoryId});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objEmail = await models.mongoose.emails.findOne({date_entered: dateEntered});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objEmail = await models.mongoose.emails.findOne({date_modified: dateModified});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLastSynced(lastSynced, query = {}) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { last_synced: lastSynced },
    			});
    		} else {
    			objEmail = await models.mongoose.emails.findOne({last_synced: lastSynced});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateSentReceived(dateSentReceived, query = {}) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_sent_received: dateSentReceived },
    			});
    		} else {
    			objEmail = await models.mongoose.emails.findOne({date_sent_received: dateSentReceived});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objEmail = await models.mongoose.emails.findOne({modified_user_id: modifiedUserId});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objEmail = await models.mongoose.emails.findOne({created_by: createdBy});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objEmail = await models.mongoose.emails.findOne({assigned_user_id: assignedUserId});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMailboxId(mailboxId, query = {}) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { mailbox_id: mailboxId },
    			});
    		} else {
    			objEmail = await models.mongoose.emails.findOne({mailbox_id: mailboxId});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objEmail = await models.mongoose.emails.findOne({parent_id: parentId});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateEmailById(id, updateEmail) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({where: { id: id }});
    			if (objEmail) {
    				objEmail = await models.sequelize.emails.update(updateEmail, { where: { id: id } });
    			}
    		} else {
    			objEmail = await models.mongoose.emails.findOneAndUpdate({id: id}, {$set: updateEmail}, {new: true});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailByDeleted(deleted, updateEmail) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({where: { deleted: deleted }});
    			if (objEmail) {
    				objEmail = await models.sequelize.emails.update(updateEmail, { where: { deleted: deleted } });
    			}
    		} else {
    			objEmail = await models.mongoose.emails.findOneAndUpdate({deleted: deleted}, {$set: updateEmail}, {new: true});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailByOrphaned(orphaned, updateEmail) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({where: { orphaned: orphaned }});
    			if (objEmail) {
    				objEmail = await models.sequelize.emails.update(updateEmail, { where: { orphaned: orphaned } });
    			}
    		} else {
    			objEmail = await models.mongoose.emails.findOneAndUpdate({orphaned: orphaned}, {$set: updateEmail}, {new: true});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailByFlagged(flagged, updateEmail) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({where: { flagged: flagged }});
    			if (objEmail) {
    				objEmail = await models.sequelize.emails.update(updateEmail, { where: { flagged: flagged } });
    			}
    		} else {
    			objEmail = await models.mongoose.emails.findOneAndUpdate({flagged: flagged}, {$set: updateEmail}, {new: true});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailByReplyToStatus(replyToStatus, updateEmail) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({where: { reply_to_status: replyToStatus }});
    			if (objEmail) {
    				objEmail = await models.sequelize.emails.update(updateEmail, { where: { reply_to_status: replyToStatus } });
    			}
    		} else {
    			objEmail = await models.mongoose.emails.findOneAndUpdate({reply_to_status: replyToStatus}, {$set: updateEmail}, {new: true});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailByName(name, updateEmail) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({where: { name: name }});
    			if (objEmail) {
    				objEmail = await models.sequelize.emails.update(updateEmail, { where: { name: name } });
    			}
    		} else {
    			objEmail = await models.mongoose.emails.findOneAndUpdate({name: name}, {$set: updateEmail}, {new: true});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailByMessageId(messageId, updateEmail) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({where: { message_id: messageId }});
    			if (objEmail) {
    				objEmail = await models.sequelize.emails.update(updateEmail, { where: { message_id: messageId } });
    			}
    		} else {
    			objEmail = await models.mongoose.emails.findOneAndUpdate({message_id: messageId}, {$set: updateEmail}, {new: true});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailByType(type, updateEmail) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({where: { type: type }});
    			if (objEmail) {
    				objEmail = await models.sequelize.emails.update(updateEmail, { where: { type: type } });
    			}
    		} else {
    			objEmail = await models.mongoose.emails.findOneAndUpdate({type: type}, {$set: updateEmail}, {new: true});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailByStatus(status, updateEmail) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({where: { status: status }});
    			if (objEmail) {
    				objEmail = await models.sequelize.emails.update(updateEmail, { where: { status: status } });
    			}
    		} else {
    			objEmail = await models.mongoose.emails.findOneAndUpdate({status: status}, {$set: updateEmail}, {new: true});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailByIntent(intent, updateEmail) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({where: { intent: intent }});
    			if (objEmail) {
    				objEmail = await models.sequelize.emails.update(updateEmail, { where: { intent: intent } });
    			}
    		} else {
    			objEmail = await models.mongoose.emails.findOneAndUpdate({intent: intent}, {$set: updateEmail}, {new: true});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailByParentType(parentType, updateEmail) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({where: { parent_type: parentType }});
    			if (objEmail) {
    				objEmail = await models.sequelize.emails.update(updateEmail, { where: { parent_type: parentType } });
    			}
    		} else {
    			objEmail = await models.mongoose.emails.findOneAndUpdate({parent_type: parentType}, {$set: updateEmail}, {new: true});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailByUid(uid, updateEmail) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({where: { uid: uid }});
    			if (objEmail) {
    				objEmail = await models.sequelize.emails.update(updateEmail, { where: { uid: uid } });
    			}
    		} else {
    			objEmail = await models.mongoose.emails.findOneAndUpdate({uid: uid}, {$set: updateEmail}, {new: true});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailByCategoryId(categoryId, updateEmail) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({where: { category_id: categoryId }});
    			if (objEmail) {
    				objEmail = await models.sequelize.emails.update(updateEmail, { where: { category_id: categoryId } });
    			}
    		} else {
    			objEmail = await models.mongoose.emails.findOneAndUpdate({category_id: categoryId}, {$set: updateEmail}, {new: true});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailByDateEntered(dateEntered, updateEmail) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({where: { date_entered: dateEntered }});
    			if (objEmail) {
    				objEmail = await models.sequelize.emails.update(updateEmail, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objEmail = await models.mongoose.emails.findOneAndUpdate({date_entered: dateEntered}, {$set: updateEmail}, {new: true});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailByDateModified(dateModified, updateEmail) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({where: { date_modified: dateModified }});
    			if (objEmail) {
    				objEmail = await models.sequelize.emails.update(updateEmail, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objEmail = await models.mongoose.emails.findOneAndUpdate({date_modified: dateModified}, {$set: updateEmail}, {new: true});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailByLastSynced(lastSynced, updateEmail) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({where: { last_synced: lastSynced }});
    			if (objEmail) {
    				objEmail = await models.sequelize.emails.update(updateEmail, { where: { last_synced: lastSynced } });
    			}
    		} else {
    			objEmail = await models.mongoose.emails.findOneAndUpdate({last_synced: lastSynced}, {$set: updateEmail}, {new: true});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailByDateSentReceived(dateSentReceived, updateEmail) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({where: { date_sent_received: dateSentReceived }});
    			if (objEmail) {
    				objEmail = await models.sequelize.emails.update(updateEmail, { where: { date_sent_received: dateSentReceived } });
    			}
    		} else {
    			objEmail = await models.mongoose.emails.findOneAndUpdate({date_sent_received: dateSentReceived}, {$set: updateEmail}, {new: true});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailByModifiedUserId(modifiedUserId, updateEmail) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objEmail) {
    				objEmail = await models.sequelize.emails.update(updateEmail, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objEmail = await models.mongoose.emails.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateEmail}, {new: true});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailByCreatedBy(createdBy, updateEmail) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({where: { created_by: createdBy }});
    			if (objEmail) {
    				objEmail = await models.sequelize.emails.update(updateEmail, { where: { created_by: createdBy } });
    			}
    		} else {
    			objEmail = await models.mongoose.emails.findOneAndUpdate({created_by: createdBy}, {$set: updateEmail}, {new: true});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailByAssignedUserId(assignedUserId, updateEmail) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objEmail) {
    				objEmail = await models.sequelize.emails.update(updateEmail, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objEmail = await models.mongoose.emails.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateEmail}, {new: true});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailByMailboxId(mailboxId, updateEmail) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({where: { mailbox_id: mailboxId }});
    			if (objEmail) {
    				objEmail = await models.sequelize.emails.update(updateEmail, { where: { mailbox_id: mailboxId } });
    			}
    		} else {
    			objEmail = await models.mongoose.emails.findOneAndUpdate({mailbox_id: mailboxId}, {$set: updateEmail}, {new: true});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailByParentId(parentId, updateEmail) {
    	try {
    		let objEmail;
    		if(sql) {
    			objEmail = await models.sequelize.emails.findOne({where: { parent_id: parentId }});
    			if (objEmail) {
    				objEmail = await models.sequelize.emails.update(updateEmail, { where: { parent_id: parentId } });
    			}
    		} else {
    			objEmail = await models.mongoose.emails.findOneAndUpdate({parent_id: parentId}, {$set: updateEmail}, {new: true});
    		}
    		return objEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = EmailService;
//</es-section>
