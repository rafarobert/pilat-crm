/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:48 GMT-0400 (Bolivia Time)
 * Time: 14:0:48
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:48 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:48
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

class EmailTemplateService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllEmailTemplates(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.emailTemplates.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.emailTemplates.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllEmailTemplates(select = []) {
		try {
			if(sql) {
				return await models.sequelize.emailTemplates.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.emailTemplates.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addEmailTemplate(newEmailTemplate) {
		try {
			let objEmailTemplate;
			if(util.PrimaryKeyTypeIsString(models.sequelize.emailTemplates.primaryKeys.id.type.toString())) {
			    newEmailTemplate.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objEmailTemplate = await models.sequelize.emailTemplates.create(newEmailTemplate);
			} else {
				objEmailTemplate = new models.mongoose.emailTemplates(newEmailTemplate);
				await objEmailTemplate.save();
			}
			return objEmailTemplate;
		} catch (error) {
			throw error;
		}
	}

	static async updateEmailTemplate(id, updateEmailTemplate) {
		try {
			let objEmailTemplate;
			if(sql) {
				objEmailTemplate = await models.sequelize.emailTemplates.findOne({where: { id: util.Char(id) }});
				if (objEmailTemplate) {
					await models.sequelize.emailTemplates.update(updateEmailTemplate, { where: { id: util.Char(id) } });
					objEmailTemplate = await models.sequelize.emailTemplates.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateEmailTemplate._id;
				objEmailTemplate = await models.mongoose.emailTemplates.findOneAndUpdate({id:id}, {$set: updateEmailTemplate}, {new: true});
			}
			return objEmailTemplate;
		} catch (error) {
			throw error;
		}
	}

	static async getAEmailTemplate(id, query) {
		try {
			let objEmailTemplate;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objEmailTemplate = await models.sequelize.emailTemplates.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objEmailTemplate = await models.mongoose.emailTemplates.find({id:util.Char(id)}).select(query.select);
			}
			return objEmailTemplate;
		} catch (error) {
			throw error;
		}
	}

	static async deleteEmailTemplate(id) {
		try {
			let objEmailTemplate;
			if(sql) {
				objEmailTemplate = await models.sequelize.emailTemplates.findOne({ where: { id: util.Char(id) } });
				if (objEmailTemplate) {
					await models.sequelize.emailTemplates.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objEmailTemplate = await models.mongoose.emailTemplates.deleteOne({id:util.Char(id)});
			}
			return objEmailTemplate;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objEmailTemplate;
    		if(sql) {
    			objEmailTemplate = await models.sequelize.emailTemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objEmailTemplate = await models.mongoose.emailTemplates.findOne({id: id});
    		}
    		return objEmailTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objEmailTemplate;
    		if(sql) {
    			objEmailTemplate = await models.sequelize.emailTemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objEmailTemplate = await models.mongoose.emailTemplates.findOne({deleted: deleted});
    		}
    		return objEmailTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTextOnly(textOnly, query = {}) {
    	try {
    		let objEmailTemplate;
    		if(sql) {
    			objEmailTemplate = await models.sequelize.emailTemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { text_only: textOnly },
    			});
    		} else {
    			objEmailTemplate = await models.mongoose.emailTemplates.findOne({text_only: textOnly});
    		}
    		return objEmailTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objEmailTemplate;
    		if(sql) {
    			objEmailTemplate = await models.sequelize.emailTemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objEmailTemplate = await models.mongoose.emailTemplates.findOne({created_by: createdBy});
    		}
    		return objEmailTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPublished(published, query = {}) {
    	try {
    		let objEmailTemplate;
    		if(sql) {
    			objEmailTemplate = await models.sequelize.emailTemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { published: published },
    			});
    		} else {
    			objEmailTemplate = await models.mongoose.emailTemplates.findOne({published: published});
    		}
    		return objEmailTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objEmailTemplate;
    		if(sql) {
    			objEmailTemplate = await models.sequelize.emailTemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objEmailTemplate = await models.mongoose.emailTemplates.findOne({name: name});
    		}
    		return objEmailTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySubject(subject, query = {}) {
    	try {
    		let objEmailTemplate;
    		if(sql) {
    			objEmailTemplate = await models.sequelize.emailTemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { subject: subject },
    			});
    		} else {
    			objEmailTemplate = await models.mongoose.emailTemplates.findOne({subject: subject});
    		}
    		return objEmailTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByType(type, query = {}) {
    	try {
    		let objEmailTemplate;
    		if(sql) {
    			objEmailTemplate = await models.sequelize.emailTemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { type: type },
    			});
    		} else {
    			objEmailTemplate = await models.mongoose.emailTemplates.findOne({type: type});
    		}
    		return objEmailTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objEmailTemplate;
    		if(sql) {
    			objEmailTemplate = await models.sequelize.emailTemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objEmailTemplate = await models.mongoose.emailTemplates.findOne({description: description});
    		}
    		return objEmailTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBody(body, query = {}) {
    	try {
    		let objEmailTemplate;
    		if(sql) {
    			objEmailTemplate = await models.sequelize.emailTemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { body: body },
    			});
    		} else {
    			objEmailTemplate = await models.mongoose.emailTemplates.findOne({body: body});
    		}
    		return objEmailTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBodyHtml(bodyHtml, query = {}) {
    	try {
    		let objEmailTemplate;
    		if(sql) {
    			objEmailTemplate = await models.sequelize.emailTemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { body_html: bodyHtml },
    			});
    		} else {
    			objEmailTemplate = await models.mongoose.emailTemplates.findOne({body_html: bodyHtml});
    		}
    		return objEmailTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objEmailTemplate;
    		if(sql) {
    			objEmailTemplate = await models.sequelize.emailTemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objEmailTemplate = await models.mongoose.emailTemplates.findOne({date_entered: dateEntered});
    		}
    		return objEmailTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objEmailTemplate;
    		if(sql) {
    			objEmailTemplate = await models.sequelize.emailTemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objEmailTemplate = await models.mongoose.emailTemplates.findOne({date_modified: dateModified});
    		}
    		return objEmailTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objEmailTemplate;
    		if(sql) {
    			objEmailTemplate = await models.sequelize.emailTemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objEmailTemplate = await models.mongoose.emailTemplates.findOne({modified_user_id: modifiedUserId});
    		}
    		return objEmailTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objEmailTemplate;
    		if(sql) {
    			objEmailTemplate = await models.sequelize.emailTemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objEmailTemplate = await models.mongoose.emailTemplates.findOne({assigned_user_id: assignedUserId});
    		}
    		return objEmailTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateEmailTemplateById(id, updateEmailTemplate) {
    	try {
    		let objEmailTemplate;
    		if(sql) {
    			objEmailTemplate = await models.sequelize.emailTemplates.findOne({where: { id: id }});
    			if (objEmailTemplate) {
    				objEmailTemplate = await models.sequelize.emailTemplates.update(updateEmailTemplate, { where: { id: id } });
    			}
    		} else {
    			objEmailTemplate = await models.mongoose.emailTemplates.findOneAndUpdate({id: id}, {$set: updateEmailTemplate}, {new: true});
    		}
    		return objEmailTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailTemplateByDeleted(deleted, updateEmailTemplate) {
    	try {
    		let objEmailTemplate;
    		if(sql) {
    			objEmailTemplate = await models.sequelize.emailTemplates.findOne({where: { deleted: deleted }});
    			if (objEmailTemplate) {
    				objEmailTemplate = await models.sequelize.emailTemplates.update(updateEmailTemplate, { where: { deleted: deleted } });
    			}
    		} else {
    			objEmailTemplate = await models.mongoose.emailTemplates.findOneAndUpdate({deleted: deleted}, {$set: updateEmailTemplate}, {new: true});
    		}
    		return objEmailTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailTemplateByTextOnly(textOnly, updateEmailTemplate) {
    	try {
    		let objEmailTemplate;
    		if(sql) {
    			objEmailTemplate = await models.sequelize.emailTemplates.findOne({where: { text_only: textOnly }});
    			if (objEmailTemplate) {
    				objEmailTemplate = await models.sequelize.emailTemplates.update(updateEmailTemplate, { where: { text_only: textOnly } });
    			}
    		} else {
    			objEmailTemplate = await models.mongoose.emailTemplates.findOneAndUpdate({text_only: textOnly}, {$set: updateEmailTemplate}, {new: true});
    		}
    		return objEmailTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailTemplateByCreatedBy(createdBy, updateEmailTemplate) {
    	try {
    		let objEmailTemplate;
    		if(sql) {
    			objEmailTemplate = await models.sequelize.emailTemplates.findOne({where: { created_by: createdBy }});
    			if (objEmailTemplate) {
    				objEmailTemplate = await models.sequelize.emailTemplates.update(updateEmailTemplate, { where: { created_by: createdBy } });
    			}
    		} else {
    			objEmailTemplate = await models.mongoose.emailTemplates.findOneAndUpdate({created_by: createdBy}, {$set: updateEmailTemplate}, {new: true});
    		}
    		return objEmailTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailTemplateByPublished(published, updateEmailTemplate) {
    	try {
    		let objEmailTemplate;
    		if(sql) {
    			objEmailTemplate = await models.sequelize.emailTemplates.findOne({where: { published: published }});
    			if (objEmailTemplate) {
    				objEmailTemplate = await models.sequelize.emailTemplates.update(updateEmailTemplate, { where: { published: published } });
    			}
    		} else {
    			objEmailTemplate = await models.mongoose.emailTemplates.findOneAndUpdate({published: published}, {$set: updateEmailTemplate}, {new: true});
    		}
    		return objEmailTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailTemplateByName(name, updateEmailTemplate) {
    	try {
    		let objEmailTemplate;
    		if(sql) {
    			objEmailTemplate = await models.sequelize.emailTemplates.findOne({where: { name: name }});
    			if (objEmailTemplate) {
    				objEmailTemplate = await models.sequelize.emailTemplates.update(updateEmailTemplate, { where: { name: name } });
    			}
    		} else {
    			objEmailTemplate = await models.mongoose.emailTemplates.findOneAndUpdate({name: name}, {$set: updateEmailTemplate}, {new: true});
    		}
    		return objEmailTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailTemplateBySubject(subject, updateEmailTemplate) {
    	try {
    		let objEmailTemplate;
    		if(sql) {
    			objEmailTemplate = await models.sequelize.emailTemplates.findOne({where: { subject: subject }});
    			if (objEmailTemplate) {
    				objEmailTemplate = await models.sequelize.emailTemplates.update(updateEmailTemplate, { where: { subject: subject } });
    			}
    		} else {
    			objEmailTemplate = await models.mongoose.emailTemplates.findOneAndUpdate({subject: subject}, {$set: updateEmailTemplate}, {new: true});
    		}
    		return objEmailTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailTemplateByType(type, updateEmailTemplate) {
    	try {
    		let objEmailTemplate;
    		if(sql) {
    			objEmailTemplate = await models.sequelize.emailTemplates.findOne({where: { type: type }});
    			if (objEmailTemplate) {
    				objEmailTemplate = await models.sequelize.emailTemplates.update(updateEmailTemplate, { where: { type: type } });
    			}
    		} else {
    			objEmailTemplate = await models.mongoose.emailTemplates.findOneAndUpdate({type: type}, {$set: updateEmailTemplate}, {new: true});
    		}
    		return objEmailTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailTemplateByDescription(description, updateEmailTemplate) {
    	try {
    		let objEmailTemplate;
    		if(sql) {
    			objEmailTemplate = await models.sequelize.emailTemplates.findOne({where: { description: description }});
    			if (objEmailTemplate) {
    				objEmailTemplate = await models.sequelize.emailTemplates.update(updateEmailTemplate, { where: { description: description } });
    			}
    		} else {
    			objEmailTemplate = await models.mongoose.emailTemplates.findOneAndUpdate({description: description}, {$set: updateEmailTemplate}, {new: true});
    		}
    		return objEmailTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailTemplateByBody(body, updateEmailTemplate) {
    	try {
    		let objEmailTemplate;
    		if(sql) {
    			objEmailTemplate = await models.sequelize.emailTemplates.findOne({where: { body: body }});
    			if (objEmailTemplate) {
    				objEmailTemplate = await models.sequelize.emailTemplates.update(updateEmailTemplate, { where: { body: body } });
    			}
    		} else {
    			objEmailTemplate = await models.mongoose.emailTemplates.findOneAndUpdate({body: body}, {$set: updateEmailTemplate}, {new: true});
    		}
    		return objEmailTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailTemplateByBodyHtml(bodyHtml, updateEmailTemplate) {
    	try {
    		let objEmailTemplate;
    		if(sql) {
    			objEmailTemplate = await models.sequelize.emailTemplates.findOne({where: { body_html: bodyHtml }});
    			if (objEmailTemplate) {
    				objEmailTemplate = await models.sequelize.emailTemplates.update(updateEmailTemplate, { where: { body_html: bodyHtml } });
    			}
    		} else {
    			objEmailTemplate = await models.mongoose.emailTemplates.findOneAndUpdate({body_html: bodyHtml}, {$set: updateEmailTemplate}, {new: true});
    		}
    		return objEmailTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailTemplateByDateEntered(dateEntered, updateEmailTemplate) {
    	try {
    		let objEmailTemplate;
    		if(sql) {
    			objEmailTemplate = await models.sequelize.emailTemplates.findOne({where: { date_entered: dateEntered }});
    			if (objEmailTemplate) {
    				objEmailTemplate = await models.sequelize.emailTemplates.update(updateEmailTemplate, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objEmailTemplate = await models.mongoose.emailTemplates.findOneAndUpdate({date_entered: dateEntered}, {$set: updateEmailTemplate}, {new: true});
    		}
    		return objEmailTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailTemplateByDateModified(dateModified, updateEmailTemplate) {
    	try {
    		let objEmailTemplate;
    		if(sql) {
    			objEmailTemplate = await models.sequelize.emailTemplates.findOne({where: { date_modified: dateModified }});
    			if (objEmailTemplate) {
    				objEmailTemplate = await models.sequelize.emailTemplates.update(updateEmailTemplate, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objEmailTemplate = await models.mongoose.emailTemplates.findOneAndUpdate({date_modified: dateModified}, {$set: updateEmailTemplate}, {new: true});
    		}
    		return objEmailTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailTemplateByModifiedUserId(modifiedUserId, updateEmailTemplate) {
    	try {
    		let objEmailTemplate;
    		if(sql) {
    			objEmailTemplate = await models.sequelize.emailTemplates.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objEmailTemplate) {
    				objEmailTemplate = await models.sequelize.emailTemplates.update(updateEmailTemplate, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objEmailTemplate = await models.mongoose.emailTemplates.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateEmailTemplate}, {new: true});
    		}
    		return objEmailTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailTemplateByAssignedUserId(assignedUserId, updateEmailTemplate) {
    	try {
    		let objEmailTemplate;
    		if(sql) {
    			objEmailTemplate = await models.sequelize.emailTemplates.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objEmailTemplate) {
    				objEmailTemplate = await models.sequelize.emailTemplates.update(updateEmailTemplate, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objEmailTemplate = await models.mongoose.emailTemplates.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateEmailTemplate}, {new: true});
    		}
    		return objEmailTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = EmailTemplateService;
//</es-section>
