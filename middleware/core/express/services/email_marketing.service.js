/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:02 GMT-0400 (Bolivia Time)
 * Time: 4:43:2
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:02 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:2
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

class EmailMarketingService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllEmailMarketing(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.emailMarketing.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.emailMarketing.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllEmailMarketing(select = []) {
		try {
			if(sql) {
				return await models.sequelize.emailMarketing.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.emailMarketing.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addEmailMarketing(newEmailMarketing) {
		try {
			let objEmailMarketing;
			if(util.PrimaryKeyTypeIsString(models.sequelize.emailMarketing.primaryKeys.id.type.toString())) {
			    newEmailMarketing.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objEmailMarketing = await models.sequelize.emailMarketing.create(newEmailMarketing);
			} else {
				objEmailMarketing = new models.mongoose.emailMarketing(newEmailMarketing);
				await objEmailMarketing.save();
			}
			return objEmailMarketing;
		} catch (error) {
			throw error;
		}
	}

	static async updateEmailMarketing(id, updateEmailMarketing) {
		try {
			let objEmailMarketing;
			if(sql) {
				objEmailMarketing = await models.sequelize.emailMarketing.findOne({where: { id: util.Char(id) }});
				if (objEmailMarketing) {
					await models.sequelize.emailMarketing.update(updateEmailMarketing, { where: { id: util.Char(id) } });
					objEmailMarketing = await models.sequelize.emailMarketing.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateEmailMarketing._id;
				objEmailMarketing = await models.mongoose.emailMarketing.findOneAndUpdate({id:id}, {$set: updateEmailMarketing}, {new: true});
			}
			return objEmailMarketing;
		} catch (error) {
			throw error;
		}
	}

	static async getAEmailMarketing(id, query) {
		try {
			let objEmailMarketing;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objEmailMarketing = await models.sequelize.emailMarketing.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objEmailMarketing = await models.mongoose.emailMarketing.find({id:util.Char(id)}).select(query.select);
			}
			return objEmailMarketing;
		} catch (error) {
			throw error;
		}
	}

	static async deleteEmailMarketing(id) {
		try {
			let objEmailMarketing;
			if(sql) {
				objEmailMarketing = await models.sequelize.emailMarketing.findOne({ where: { id: util.Char(id) } });
				if (objEmailMarketing) {
					await models.sequelize.emailMarketing.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objEmailMarketing = await models.mongoose.emailMarketing.deleteOne({id:util.Char(id)});
			}
			return objEmailMarketing;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objEmailMarketing;
    		if(sql) {
    			objEmailMarketing = await models.sequelize.emailMarketing.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objEmailMarketing = await models.mongoose.emailMarketing.findOne({id: id});
    		}
    		return objEmailMarketing;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objEmailMarketing;
    		if(sql) {
    			objEmailMarketing = await models.sequelize.emailMarketing.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objEmailMarketing = await models.mongoose.emailMarketing.findOne({deleted: deleted});
    		}
    		return objEmailMarketing;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAllProspectLists(allProspectLists, query = {}) {
    	try {
    		let objEmailMarketing;
    		if(sql) {
    			objEmailMarketing = await models.sequelize.emailMarketing.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { all_prospect_lists: allProspectLists },
    			});
    		} else {
    			objEmailMarketing = await models.mongoose.emailMarketing.findOne({all_prospect_lists: allProspectLists});
    		}
    		return objEmailMarketing;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objEmailMarketing;
    		if(sql) {
    			objEmailMarketing = await models.sequelize.emailMarketing.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objEmailMarketing = await models.mongoose.emailMarketing.findOne({name: name});
    		}
    		return objEmailMarketing;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFromName(fromName, query = {}) {
    	try {
    		let objEmailMarketing;
    		if(sql) {
    			objEmailMarketing = await models.sequelize.emailMarketing.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { from_name: fromName },
    			});
    		} else {
    			objEmailMarketing = await models.mongoose.emailMarketing.findOne({from_name: fromName});
    		}
    		return objEmailMarketing;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFromAddr(fromAddr, query = {}) {
    	try {
    		let objEmailMarketing;
    		if(sql) {
    			objEmailMarketing = await models.sequelize.emailMarketing.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { from_addr: fromAddr },
    			});
    		} else {
    			objEmailMarketing = await models.mongoose.emailMarketing.findOne({from_addr: fromAddr});
    		}
    		return objEmailMarketing;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByReplyToName(replyToName, query = {}) {
    	try {
    		let objEmailMarketing;
    		if(sql) {
    			objEmailMarketing = await models.sequelize.emailMarketing.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { reply_to_name: replyToName },
    			});
    		} else {
    			objEmailMarketing = await models.mongoose.emailMarketing.findOne({reply_to_name: replyToName});
    		}
    		return objEmailMarketing;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByReplyToAddr(replyToAddr, query = {}) {
    	try {
    		let objEmailMarketing;
    		if(sql) {
    			objEmailMarketing = await models.sequelize.emailMarketing.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { reply_to_addr: replyToAddr },
    			});
    		} else {
    			objEmailMarketing = await models.mongoose.emailMarketing.findOne({reply_to_addr: replyToAddr});
    		}
    		return objEmailMarketing;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByInboundEmailId(inboundEmailId, query = {}) {
    	try {
    		let objEmailMarketing;
    		if(sql) {
    			objEmailMarketing = await models.sequelize.emailMarketing.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { inbound_email_id: inboundEmailId },
    			});
    		} else {
    			objEmailMarketing = await models.mongoose.emailMarketing.findOne({inbound_email_id: inboundEmailId});
    		}
    		return objEmailMarketing;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByStatus(status, query = {}) {
    	try {
    		let objEmailMarketing;
    		if(sql) {
    			objEmailMarketing = await models.sequelize.emailMarketing.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { status: status },
    			});
    		} else {
    			objEmailMarketing = await models.mongoose.emailMarketing.findOne({status: status});
    		}
    		return objEmailMarketing;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objEmailMarketing;
    		if(sql) {
    			objEmailMarketing = await models.sequelize.emailMarketing.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objEmailMarketing = await models.mongoose.emailMarketing.findOne({date_entered: dateEntered});
    		}
    		return objEmailMarketing;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objEmailMarketing;
    		if(sql) {
    			objEmailMarketing = await models.sequelize.emailMarketing.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objEmailMarketing = await models.mongoose.emailMarketing.findOne({date_modified: dateModified});
    		}
    		return objEmailMarketing;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateStart(dateStart, query = {}) {
    	try {
    		let objEmailMarketing;
    		if(sql) {
    			objEmailMarketing = await models.sequelize.emailMarketing.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_start: dateStart },
    			});
    		} else {
    			objEmailMarketing = await models.mongoose.emailMarketing.findOne({date_start: dateStart});
    		}
    		return objEmailMarketing;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objEmailMarketing;
    		if(sql) {
    			objEmailMarketing = await models.sequelize.emailMarketing.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objEmailMarketing = await models.mongoose.emailMarketing.findOne({modified_user_id: modifiedUserId});
    		}
    		return objEmailMarketing;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objEmailMarketing;
    		if(sql) {
    			objEmailMarketing = await models.sequelize.emailMarketing.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objEmailMarketing = await models.mongoose.emailMarketing.findOne({created_by: createdBy});
    		}
    		return objEmailMarketing;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTemplateId(templateId, query = {}) {
    	try {
    		let objEmailMarketing;
    		if(sql) {
    			objEmailMarketing = await models.sequelize.emailMarketing.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { template_id: templateId },
    			});
    		} else {
    			objEmailMarketing = await models.mongoose.emailMarketing.findOne({template_id: templateId});
    		}
    		return objEmailMarketing;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCampaignId(campaignId, query = {}) {
    	try {
    		let objEmailMarketing;
    		if(sql) {
    			objEmailMarketing = await models.sequelize.emailMarketing.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { campaign_id: campaignId },
    			});
    		} else {
    			objEmailMarketing = await models.mongoose.emailMarketing.findOne({campaign_id: campaignId});
    		}
    		return objEmailMarketing;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByOutboundEmailId(outboundEmailId, query = {}) {
    	try {
    		let objEmailMarketing;
    		if(sql) {
    			objEmailMarketing = await models.sequelize.emailMarketing.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { outbound_email_id: outboundEmailId },
    			});
    		} else {
    			objEmailMarketing = await models.mongoose.emailMarketing.findOne({outbound_email_id: outboundEmailId});
    		}
    		return objEmailMarketing;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateEmailMarketingById(id, updateEmailMarketing) {
    	try {
    		let objEmailMarketing;
    		if(sql) {
    			objEmailMarketing = await models.sequelize.emailMarketing.findOne({where: { id: id }});
    			if (objEmailMarketing) {
    				objEmailMarketing = await models.sequelize.emailMarketing.update(updateEmailMarketing, { where: { id: id } });
    			}
    		} else {
    			objEmailMarketing = await models.mongoose.emailMarketing.findOneAndUpdate({id: id}, {$set: updateEmailMarketing}, {new: true});
    		}
    		return objEmailMarketing;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailMarketingByDeleted(deleted, updateEmailMarketing) {
    	try {
    		let objEmailMarketing;
    		if(sql) {
    			objEmailMarketing = await models.sequelize.emailMarketing.findOne({where: { deleted: deleted }});
    			if (objEmailMarketing) {
    				objEmailMarketing = await models.sequelize.emailMarketing.update(updateEmailMarketing, { where: { deleted: deleted } });
    			}
    		} else {
    			objEmailMarketing = await models.mongoose.emailMarketing.findOneAndUpdate({deleted: deleted}, {$set: updateEmailMarketing}, {new: true});
    		}
    		return objEmailMarketing;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailMarketingByAllProspectLists(allProspectLists, updateEmailMarketing) {
    	try {
    		let objEmailMarketing;
    		if(sql) {
    			objEmailMarketing = await models.sequelize.emailMarketing.findOne({where: { all_prospect_lists: allProspectLists }});
    			if (objEmailMarketing) {
    				objEmailMarketing = await models.sequelize.emailMarketing.update(updateEmailMarketing, { where: { all_prospect_lists: allProspectLists } });
    			}
    		} else {
    			objEmailMarketing = await models.mongoose.emailMarketing.findOneAndUpdate({all_prospect_lists: allProspectLists}, {$set: updateEmailMarketing}, {new: true});
    		}
    		return objEmailMarketing;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailMarketingByName(name, updateEmailMarketing) {
    	try {
    		let objEmailMarketing;
    		if(sql) {
    			objEmailMarketing = await models.sequelize.emailMarketing.findOne({where: { name: name }});
    			if (objEmailMarketing) {
    				objEmailMarketing = await models.sequelize.emailMarketing.update(updateEmailMarketing, { where: { name: name } });
    			}
    		} else {
    			objEmailMarketing = await models.mongoose.emailMarketing.findOneAndUpdate({name: name}, {$set: updateEmailMarketing}, {new: true});
    		}
    		return objEmailMarketing;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailMarketingByFromName(fromName, updateEmailMarketing) {
    	try {
    		let objEmailMarketing;
    		if(sql) {
    			objEmailMarketing = await models.sequelize.emailMarketing.findOne({where: { from_name: fromName }});
    			if (objEmailMarketing) {
    				objEmailMarketing = await models.sequelize.emailMarketing.update(updateEmailMarketing, { where: { from_name: fromName } });
    			}
    		} else {
    			objEmailMarketing = await models.mongoose.emailMarketing.findOneAndUpdate({from_name: fromName}, {$set: updateEmailMarketing}, {new: true});
    		}
    		return objEmailMarketing;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailMarketingByFromAddr(fromAddr, updateEmailMarketing) {
    	try {
    		let objEmailMarketing;
    		if(sql) {
    			objEmailMarketing = await models.sequelize.emailMarketing.findOne({where: { from_addr: fromAddr }});
    			if (objEmailMarketing) {
    				objEmailMarketing = await models.sequelize.emailMarketing.update(updateEmailMarketing, { where: { from_addr: fromAddr } });
    			}
    		} else {
    			objEmailMarketing = await models.mongoose.emailMarketing.findOneAndUpdate({from_addr: fromAddr}, {$set: updateEmailMarketing}, {new: true});
    		}
    		return objEmailMarketing;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailMarketingByReplyToName(replyToName, updateEmailMarketing) {
    	try {
    		let objEmailMarketing;
    		if(sql) {
    			objEmailMarketing = await models.sequelize.emailMarketing.findOne({where: { reply_to_name: replyToName }});
    			if (objEmailMarketing) {
    				objEmailMarketing = await models.sequelize.emailMarketing.update(updateEmailMarketing, { where: { reply_to_name: replyToName } });
    			}
    		} else {
    			objEmailMarketing = await models.mongoose.emailMarketing.findOneAndUpdate({reply_to_name: replyToName}, {$set: updateEmailMarketing}, {new: true});
    		}
    		return objEmailMarketing;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailMarketingByReplyToAddr(replyToAddr, updateEmailMarketing) {
    	try {
    		let objEmailMarketing;
    		if(sql) {
    			objEmailMarketing = await models.sequelize.emailMarketing.findOne({where: { reply_to_addr: replyToAddr }});
    			if (objEmailMarketing) {
    				objEmailMarketing = await models.sequelize.emailMarketing.update(updateEmailMarketing, { where: { reply_to_addr: replyToAddr } });
    			}
    		} else {
    			objEmailMarketing = await models.mongoose.emailMarketing.findOneAndUpdate({reply_to_addr: replyToAddr}, {$set: updateEmailMarketing}, {new: true});
    		}
    		return objEmailMarketing;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailMarketingByInboundEmailId(inboundEmailId, updateEmailMarketing) {
    	try {
    		let objEmailMarketing;
    		if(sql) {
    			objEmailMarketing = await models.sequelize.emailMarketing.findOne({where: { inbound_email_id: inboundEmailId }});
    			if (objEmailMarketing) {
    				objEmailMarketing = await models.sequelize.emailMarketing.update(updateEmailMarketing, { where: { inbound_email_id: inboundEmailId } });
    			}
    		} else {
    			objEmailMarketing = await models.mongoose.emailMarketing.findOneAndUpdate({inbound_email_id: inboundEmailId}, {$set: updateEmailMarketing}, {new: true});
    		}
    		return objEmailMarketing;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailMarketingByStatus(status, updateEmailMarketing) {
    	try {
    		let objEmailMarketing;
    		if(sql) {
    			objEmailMarketing = await models.sequelize.emailMarketing.findOne({where: { status: status }});
    			if (objEmailMarketing) {
    				objEmailMarketing = await models.sequelize.emailMarketing.update(updateEmailMarketing, { where: { status: status } });
    			}
    		} else {
    			objEmailMarketing = await models.mongoose.emailMarketing.findOneAndUpdate({status: status}, {$set: updateEmailMarketing}, {new: true});
    		}
    		return objEmailMarketing;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailMarketingByDateEntered(dateEntered, updateEmailMarketing) {
    	try {
    		let objEmailMarketing;
    		if(sql) {
    			objEmailMarketing = await models.sequelize.emailMarketing.findOne({where: { date_entered: dateEntered }});
    			if (objEmailMarketing) {
    				objEmailMarketing = await models.sequelize.emailMarketing.update(updateEmailMarketing, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objEmailMarketing = await models.mongoose.emailMarketing.findOneAndUpdate({date_entered: dateEntered}, {$set: updateEmailMarketing}, {new: true});
    		}
    		return objEmailMarketing;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailMarketingByDateModified(dateModified, updateEmailMarketing) {
    	try {
    		let objEmailMarketing;
    		if(sql) {
    			objEmailMarketing = await models.sequelize.emailMarketing.findOne({where: { date_modified: dateModified }});
    			if (objEmailMarketing) {
    				objEmailMarketing = await models.sequelize.emailMarketing.update(updateEmailMarketing, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objEmailMarketing = await models.mongoose.emailMarketing.findOneAndUpdate({date_modified: dateModified}, {$set: updateEmailMarketing}, {new: true});
    		}
    		return objEmailMarketing;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailMarketingByDateStart(dateStart, updateEmailMarketing) {
    	try {
    		let objEmailMarketing;
    		if(sql) {
    			objEmailMarketing = await models.sequelize.emailMarketing.findOne({where: { date_start: dateStart }});
    			if (objEmailMarketing) {
    				objEmailMarketing = await models.sequelize.emailMarketing.update(updateEmailMarketing, { where: { date_start: dateStart } });
    			}
    		} else {
    			objEmailMarketing = await models.mongoose.emailMarketing.findOneAndUpdate({date_start: dateStart}, {$set: updateEmailMarketing}, {new: true});
    		}
    		return objEmailMarketing;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailMarketingByModifiedUserId(modifiedUserId, updateEmailMarketing) {
    	try {
    		let objEmailMarketing;
    		if(sql) {
    			objEmailMarketing = await models.sequelize.emailMarketing.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objEmailMarketing) {
    				objEmailMarketing = await models.sequelize.emailMarketing.update(updateEmailMarketing, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objEmailMarketing = await models.mongoose.emailMarketing.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateEmailMarketing}, {new: true});
    		}
    		return objEmailMarketing;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailMarketingByCreatedBy(createdBy, updateEmailMarketing) {
    	try {
    		let objEmailMarketing;
    		if(sql) {
    			objEmailMarketing = await models.sequelize.emailMarketing.findOne({where: { created_by: createdBy }});
    			if (objEmailMarketing) {
    				objEmailMarketing = await models.sequelize.emailMarketing.update(updateEmailMarketing, { where: { created_by: createdBy } });
    			}
    		} else {
    			objEmailMarketing = await models.mongoose.emailMarketing.findOneAndUpdate({created_by: createdBy}, {$set: updateEmailMarketing}, {new: true});
    		}
    		return objEmailMarketing;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailMarketingByTemplateId(templateId, updateEmailMarketing) {
    	try {
    		let objEmailMarketing;
    		if(sql) {
    			objEmailMarketing = await models.sequelize.emailMarketing.findOne({where: { template_id: templateId }});
    			if (objEmailMarketing) {
    				objEmailMarketing = await models.sequelize.emailMarketing.update(updateEmailMarketing, { where: { template_id: templateId } });
    			}
    		} else {
    			objEmailMarketing = await models.mongoose.emailMarketing.findOneAndUpdate({template_id: templateId}, {$set: updateEmailMarketing}, {new: true});
    		}
    		return objEmailMarketing;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailMarketingByCampaignId(campaignId, updateEmailMarketing) {
    	try {
    		let objEmailMarketing;
    		if(sql) {
    			objEmailMarketing = await models.sequelize.emailMarketing.findOne({where: { campaign_id: campaignId }});
    			if (objEmailMarketing) {
    				objEmailMarketing = await models.sequelize.emailMarketing.update(updateEmailMarketing, { where: { campaign_id: campaignId } });
    			}
    		} else {
    			objEmailMarketing = await models.mongoose.emailMarketing.findOneAndUpdate({campaign_id: campaignId}, {$set: updateEmailMarketing}, {new: true});
    		}
    		return objEmailMarketing;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailMarketingByOutboundEmailId(outboundEmailId, updateEmailMarketing) {
    	try {
    		let objEmailMarketing;
    		if(sql) {
    			objEmailMarketing = await models.sequelize.emailMarketing.findOne({where: { outbound_email_id: outboundEmailId }});
    			if (objEmailMarketing) {
    				objEmailMarketing = await models.sequelize.emailMarketing.update(updateEmailMarketing, { where: { outbound_email_id: outboundEmailId } });
    			}
    		} else {
    			objEmailMarketing = await models.mongoose.emailMarketing.findOneAndUpdate({outbound_email_id: outboundEmailId}, {$set: updateEmailMarketing}, {new: true});
    		}
    		return objEmailMarketing;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = EmailMarketingService;
//</es-section>
