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

class EmailBeanService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllEmailsBeans(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.emailsBeans.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.emailsBeans.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllEmailsBeans(select = []) {
		try {
			if(sql) {
				return await models.sequelize.emailsBeans.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.emailsBeans.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addEmailBean(newEmailBean) {
		try {
			let objEmailBean;
			if(util.PrimaryKeyTypeIsString(models.sequelize.emailsBeans.primaryKeys.id.type.toString())) {
			    newEmailBean.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objEmailBean = await models.sequelize.emailsBeans.create(newEmailBean);
			} else {
				objEmailBean = new models.mongoose.emailsBeans(newEmailBean);
				await objEmailBean.save();
			}
			return objEmailBean;
		} catch (error) {
			throw error;
		}
	}

	static async updateEmailBean(id, updateEmailBean) {
		try {
			let objEmailBean;
			if(sql) {
				objEmailBean = await models.sequelize.emailsBeans.findOne({where: { id: util.Char(id) }});
				if (objEmailBean) {
					await models.sequelize.emailsBeans.update(updateEmailBean, { where: { id: util.Char(id) } });
					objEmailBean = await models.sequelize.emailsBeans.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateEmailBean._id;
				objEmailBean = await models.mongoose.emailsBeans.findOneAndUpdate({id:id}, {$set: updateEmailBean}, {new: true});
			}
			return objEmailBean;
		} catch (error) {
			throw error;
		}
	}

	static async getAEmailBean(id, query) {
		try {
			let objEmailBean;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objEmailBean = await models.sequelize.emailsBeans.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objEmailBean = await models.mongoose.emailsBeans.find({id:util.Char(id)}).select(query.select);
			}
			return objEmailBean;
		} catch (error) {
			throw error;
		}
	}

	static async deleteEmailBean(id) {
		try {
			let objEmailBean;
			if(sql) {
				objEmailBean = await models.sequelize.emailsBeans.findOne({ where: { id: util.Char(id) } });
				if (objEmailBean) {
					await models.sequelize.emailsBeans.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objEmailBean = await models.mongoose.emailsBeans.deleteOne({id:util.Char(id)});
			}
			return objEmailBean;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objEmailBean;
    		if(sql) {
    			objEmailBean = await models.sequelize.emailsBeans.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objEmailBean = await models.mongoose.emailsBeans.findOne({id: id});
    		}
    		return objEmailBean;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objEmailBean;
    		if(sql) {
    			objEmailBean = await models.sequelize.emailsBeans.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objEmailBean = await models.mongoose.emailsBeans.findOne({deleted: deleted});
    		}
    		return objEmailBean;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeanModule(beanModule, query = {}) {
    	try {
    		let objEmailBean;
    		if(sql) {
    			objEmailBean = await models.sequelize.emailsBeans.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { bean_module: beanModule },
    			});
    		} else {
    			objEmailBean = await models.mongoose.emailsBeans.findOne({bean_module: beanModule});
    		}
    		return objEmailBean;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCampaignData(campaignData, query = {}) {
    	try {
    		let objEmailBean;
    		if(sql) {
    			objEmailBean = await models.sequelize.emailsBeans.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { campaign_data: campaignData },
    			});
    		} else {
    			objEmailBean = await models.mongoose.emailsBeans.findOne({campaign_data: campaignData});
    		}
    		return objEmailBean;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objEmailBean;
    		if(sql) {
    			objEmailBean = await models.sequelize.emailsBeans.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objEmailBean = await models.mongoose.emailsBeans.findOne({date_modified: dateModified});
    		}
    		return objEmailBean;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByEmailId(emailId, query = {}) {
    	try {
    		let objEmailBean;
    		if(sql) {
    			objEmailBean = await models.sequelize.emailsBeans.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { email_id: emailId },
    			});
    		} else {
    			objEmailBean = await models.mongoose.emailsBeans.findOne({email_id: emailId});
    		}
    		return objEmailBean;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeanId(beanId, query = {}) {
    	try {
    		let objEmailBean;
    		if(sql) {
    			objEmailBean = await models.sequelize.emailsBeans.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { bean_id: beanId },
    			});
    		} else {
    			objEmailBean = await models.mongoose.emailsBeans.findOne({bean_id: beanId});
    		}
    		return objEmailBean;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateEmailBeanById(id, updateEmailBean) {
    	try {
    		let objEmailBean;
    		if(sql) {
    			objEmailBean = await models.sequelize.emailsBeans.findOne({where: { id: id }});
    			if (objEmailBean) {
    				objEmailBean = await models.sequelize.emailsBeans.update(updateEmailBean, { where: { id: id } });
    			}
    		} else {
    			objEmailBean = await models.mongoose.emailsBeans.findOneAndUpdate({id: id}, {$set: updateEmailBean}, {new: true});
    		}
    		return objEmailBean;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailBeanByDeleted(deleted, updateEmailBean) {
    	try {
    		let objEmailBean;
    		if(sql) {
    			objEmailBean = await models.sequelize.emailsBeans.findOne({where: { deleted: deleted }});
    			if (objEmailBean) {
    				objEmailBean = await models.sequelize.emailsBeans.update(updateEmailBean, { where: { deleted: deleted } });
    			}
    		} else {
    			objEmailBean = await models.mongoose.emailsBeans.findOneAndUpdate({deleted: deleted}, {$set: updateEmailBean}, {new: true});
    		}
    		return objEmailBean;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailBeanByBeanModule(beanModule, updateEmailBean) {
    	try {
    		let objEmailBean;
    		if(sql) {
    			objEmailBean = await models.sequelize.emailsBeans.findOne({where: { bean_module: beanModule }});
    			if (objEmailBean) {
    				objEmailBean = await models.sequelize.emailsBeans.update(updateEmailBean, { where: { bean_module: beanModule } });
    			}
    		} else {
    			objEmailBean = await models.mongoose.emailsBeans.findOneAndUpdate({bean_module: beanModule}, {$set: updateEmailBean}, {new: true});
    		}
    		return objEmailBean;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailBeanByCampaignData(campaignData, updateEmailBean) {
    	try {
    		let objEmailBean;
    		if(sql) {
    			objEmailBean = await models.sequelize.emailsBeans.findOne({where: { campaign_data: campaignData }});
    			if (objEmailBean) {
    				objEmailBean = await models.sequelize.emailsBeans.update(updateEmailBean, { where: { campaign_data: campaignData } });
    			}
    		} else {
    			objEmailBean = await models.mongoose.emailsBeans.findOneAndUpdate({campaign_data: campaignData}, {$set: updateEmailBean}, {new: true});
    		}
    		return objEmailBean;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailBeanByDateModified(dateModified, updateEmailBean) {
    	try {
    		let objEmailBean;
    		if(sql) {
    			objEmailBean = await models.sequelize.emailsBeans.findOne({where: { date_modified: dateModified }});
    			if (objEmailBean) {
    				objEmailBean = await models.sequelize.emailsBeans.update(updateEmailBean, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objEmailBean = await models.mongoose.emailsBeans.findOneAndUpdate({date_modified: dateModified}, {$set: updateEmailBean}, {new: true});
    		}
    		return objEmailBean;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailBeanByEmailId(emailId, updateEmailBean) {
    	try {
    		let objEmailBean;
    		if(sql) {
    			objEmailBean = await models.sequelize.emailsBeans.findOne({where: { email_id: emailId }});
    			if (objEmailBean) {
    				objEmailBean = await models.sequelize.emailsBeans.update(updateEmailBean, { where: { email_id: emailId } });
    			}
    		} else {
    			objEmailBean = await models.mongoose.emailsBeans.findOneAndUpdate({email_id: emailId}, {$set: updateEmailBean}, {new: true});
    		}
    		return objEmailBean;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailBeanByBeanId(beanId, updateEmailBean) {
    	try {
    		let objEmailBean;
    		if(sql) {
    			objEmailBean = await models.sequelize.emailsBeans.findOne({where: { bean_id: beanId }});
    			if (objEmailBean) {
    				objEmailBean = await models.sequelize.emailsBeans.update(updateEmailBean, { where: { bean_id: beanId } });
    			}
    		} else {
    			objEmailBean = await models.mongoose.emailsBeans.findOneAndUpdate({bean_id: beanId}, {$set: updateEmailBean}, {new: true});
    		}
    		return objEmailBean;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = EmailBeanService;
//</es-section>
