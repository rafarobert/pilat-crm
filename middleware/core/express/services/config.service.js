/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:49 GMT-0400 (Bolivia Time)
 * Time: 15:35:49
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:49 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:49
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

class ConfigService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	
	static async findOneByCategory(category, query = {}) {
    	try {
    		let objConfig;
    		if(sql) {
    			objConfig = await models.sequelize.config.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { category: category },
    			});
    		} else {
    			objConfig = await models.mongoose.config.findOne({category: category});
    		}
    		return objConfig;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objConfig;
    		if(sql) {
    			objConfig = await models.sequelize.config.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objConfig = await models.mongoose.config.findOne({name: name});
    		}
    		return objConfig;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByValue(value, query = {}) {
    	try {
    		let objConfig;
    		if(sql) {
    			objConfig = await models.sequelize.config.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { value: value },
    			});
    		} else {
    			objConfig = await models.mongoose.config.findOne({value: value});
    		}
    		return objConfig;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateConfigByCategory(category, updateConfig) {
    	try {
    		let objConfig;
    		if(sql) {
    			objConfig = await models.sequelize.config.findOne({where: { category: category }});
    			if (objConfig) {
    				objConfig = await models.sequelize.config.update(updateConfig, { where: { category: category } });
    			}
    		} else {
    			objConfig = await models.mongoose.config.findOneAndUpdate({category: category}, {$set: updateConfig}, {new: true});
    		}
    		return objConfig;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateConfigByName(name, updateConfig) {
    	try {
    		let objConfig;
    		if(sql) {
    			objConfig = await models.sequelize.config.findOne({where: { name: name }});
    			if (objConfig) {
    				objConfig = await models.sequelize.config.update(updateConfig, { where: { name: name } });
    			}
    		} else {
    			objConfig = await models.mongoose.config.findOneAndUpdate({name: name}, {$set: updateConfig}, {new: true});
    		}
    		return objConfig;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateConfigByValue(value, updateConfig) {
    	try {
    		let objConfig;
    		if(sql) {
    			objConfig = await models.sequelize.config.findOne({where: { value: value }});
    			if (objConfig) {
    				objConfig = await models.sequelize.config.update(updateConfig, { where: { value: value } });
    			}
    		} else {
    			objConfig = await models.mongoose.config.findOneAndUpdate({value: value}, {$set: updateConfig}, {new: true});
    		}
    		return objConfig;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = ConfigService;
//</es-section>
