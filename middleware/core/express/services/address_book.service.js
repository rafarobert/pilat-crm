/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:41:47 GMT-0400 (Bolivia Time)
 * Time: 4:41:47
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:41:47 GMT-0400 (Bolivia Time)
 * Last time updated: 4:41:47
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

class AddresBookService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	
	static async findOneByBean(bean, query = {}) {
    	try {
    		let objAddresBook;
    		if(sql) {
    			objAddresBook = await models.sequelize.addressBook.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { bean: bean },
    			});
    		} else {
    			objAddresBook = await models.mongoose.addressBook.findOne({bean: bean});
    		}
    		return objAddresBook;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objAddresBook;
    		if(sql) {
    			objAddresBook = await models.sequelize.addressBook.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objAddresBook = await models.mongoose.addressBook.findOne({assigned_user_id: assignedUserId});
    		}
    		return objAddresBook;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeanId(beanId, query = {}) {
    	try {
    		let objAddresBook;
    		if(sql) {
    			objAddresBook = await models.sequelize.addressBook.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { bean_id: beanId },
    			});
    		} else {
    			objAddresBook = await models.mongoose.addressBook.findOne({bean_id: beanId});
    		}
    		return objAddresBook;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAddresBookByBean(bean, updateAddresBook) {
    	try {
    		let objAddresBook;
    		if(sql) {
    			objAddresBook = await models.sequelize.addressBook.findOne({where: { bean: bean }});
    			if (objAddresBook) {
    				objAddresBook = await models.sequelize.addressBook.update(updateAddresBook, { where: { bean: bean } });
    			}
    		} else {
    			objAddresBook = await models.mongoose.addressBook.findOneAndUpdate({bean: bean}, {$set: updateAddresBook}, {new: true});
    		}
    		return objAddresBook;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAddresBookByAssignedUserId(assignedUserId, updateAddresBook) {
    	try {
    		let objAddresBook;
    		if(sql) {
    			objAddresBook = await models.sequelize.addressBook.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objAddresBook) {
    				objAddresBook = await models.sequelize.addressBook.update(updateAddresBook, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objAddresBook = await models.mongoose.addressBook.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateAddresBook}, {new: true});
    		}
    		return objAddresBook;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAddresBookByBeanId(beanId, updateAddresBook) {
    	try {
    		let objAddresBook;
    		if(sql) {
    			objAddresBook = await models.sequelize.addressBook.findOne({where: { bean_id: beanId }});
    			if (objAddresBook) {
    				objAddresBook = await models.sequelize.addressBook.update(updateAddresBook, { where: { bean_id: beanId } });
    			}
    		} else {
    			objAddresBook = await models.mongoose.addressBook.findOneAndUpdate({bean_id: beanId}, {$set: updateAddresBook}, {new: true});
    		}
    		return objAddresBook;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AddresBookService;
//</es-section>
