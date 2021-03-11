/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:39 GMT-0400 (Bolivia Time)
 * Time: 14:56:39
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:39 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:39
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

class CurrencyService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllCurrencies(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.currencies.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.currencies.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllCurrencies(select = []) {
		try {
			if(sql) {
				return await models.sequelize.currencies.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.currencies.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addCurrency(newCurrency) {
		try {
			let objCurrency;
			if(util.PrimaryKeyTypeIsString(models.sequelize.currencies.primaryKeys.id.type.toString())) {
			    newCurrency.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objCurrency = await models.sequelize.currencies.create(newCurrency);
			} else {
				objCurrency = new models.mongoose.currencies(newCurrency);
				await objCurrency.save();
			}
			return objCurrency;
		} catch (error) {
			throw error;
		}
	}

	static async updateCurrency(id, updateCurrency) {
		try {
			let objCurrency;
			if(sql) {
				objCurrency = await models.sequelize.currencies.findOne({where: { id: util.Char(id) }});
				if (objCurrency) {
					await models.sequelize.currencies.update(updateCurrency, { where: { id: util.Char(id) } });
					objCurrency = await models.sequelize.currencies.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateCurrency._id;
				objCurrency = await models.mongoose.currencies.findOneAndUpdate({id:id}, {$set: updateCurrency}, {new: true});
			}
			return objCurrency;
		} catch (error) {
			throw error;
		}
	}

	static async getACurrency(id, query) {
		try {
			let objCurrency;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objCurrency = await models.sequelize.currencies.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objCurrency = await models.mongoose.currencies.find({id:util.Char(id)}).select(query.select);
			}
			return objCurrency;
		} catch (error) {
			throw error;
		}
	}

	static async deleteCurrency(id) {
		try {
			let objCurrency;
			if(sql) {
				objCurrency = await models.sequelize.currencies.findOne({ where: { id: util.Char(id) } });
				if (objCurrency) {
					await models.sequelize.currencies.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objCurrency = await models.mongoose.currencies.deleteOne({id:util.Char(id)});
			}
			return objCurrency;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objCurrency;
    		if(sql) {
    			objCurrency = await models.sequelize.currencies.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objCurrency = await models.mongoose.currencies.findOne({id: id});
    		}
    		return objCurrency;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objCurrency;
    		if(sql) {
    			objCurrency = await models.sequelize.currencies.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objCurrency = await models.mongoose.currencies.findOne({deleted: deleted});
    		}
    		return objCurrency;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByConversionRate(conversionRate, query = {}) {
    	try {
    		let objCurrency;
    		if(sql) {
    			objCurrency = await models.sequelize.currencies.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { conversion_rate: conversionRate },
    			});
    		} else {
    			objCurrency = await models.mongoose.currencies.findOne({conversion_rate: conversionRate});
    		}
    		return objCurrency;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objCurrency;
    		if(sql) {
    			objCurrency = await models.sequelize.currencies.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objCurrency = await models.mongoose.currencies.findOne({name: name});
    		}
    		return objCurrency;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySymbol(symbol, query = {}) {
    	try {
    		let objCurrency;
    		if(sql) {
    			objCurrency = await models.sequelize.currencies.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { symbol: symbol },
    			});
    		} else {
    			objCurrency = await models.mongoose.currencies.findOne({symbol: symbol});
    		}
    		return objCurrency;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByIso4217(iso4217, query = {}) {
    	try {
    		let objCurrency;
    		if(sql) {
    			objCurrency = await models.sequelize.currencies.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { iso4217: iso4217 },
    			});
    		} else {
    			objCurrency = await models.mongoose.currencies.findOne({iso4217: iso4217});
    		}
    		return objCurrency;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByStatus(status, query = {}) {
    	try {
    		let objCurrency;
    		if(sql) {
    			objCurrency = await models.sequelize.currencies.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { status: status },
    			});
    		} else {
    			objCurrency = await models.mongoose.currencies.findOne({status: status});
    		}
    		return objCurrency;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objCurrency;
    		if(sql) {
    			objCurrency = await models.sequelize.currencies.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objCurrency = await models.mongoose.currencies.findOne({date_entered: dateEntered});
    		}
    		return objCurrency;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objCurrency;
    		if(sql) {
    			objCurrency = await models.sequelize.currencies.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objCurrency = await models.mongoose.currencies.findOne({date_modified: dateModified});
    		}
    		return objCurrency;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objCurrency;
    		if(sql) {
    			objCurrency = await models.sequelize.currencies.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objCurrency = await models.mongoose.currencies.findOne({created_by: createdBy});
    		}
    		return objCurrency;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateCurrencyById(id, updateCurrency) {
    	try {
    		let objCurrency;
    		if(sql) {
    			objCurrency = await models.sequelize.currencies.findOne({where: { id: id }});
    			if (objCurrency) {
    				objCurrency = await models.sequelize.currencies.update(updateCurrency, { where: { id: id } });
    			}
    		} else {
    			objCurrency = await models.mongoose.currencies.findOneAndUpdate({id: id}, {$set: updateCurrency}, {new: true});
    		}
    		return objCurrency;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCurrencyByDeleted(deleted, updateCurrency) {
    	try {
    		let objCurrency;
    		if(sql) {
    			objCurrency = await models.sequelize.currencies.findOne({where: { deleted: deleted }});
    			if (objCurrency) {
    				objCurrency = await models.sequelize.currencies.update(updateCurrency, { where: { deleted: deleted } });
    			}
    		} else {
    			objCurrency = await models.mongoose.currencies.findOneAndUpdate({deleted: deleted}, {$set: updateCurrency}, {new: true});
    		}
    		return objCurrency;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCurrencyByConversionRate(conversionRate, updateCurrency) {
    	try {
    		let objCurrency;
    		if(sql) {
    			objCurrency = await models.sequelize.currencies.findOne({where: { conversion_rate: conversionRate }});
    			if (objCurrency) {
    				objCurrency = await models.sequelize.currencies.update(updateCurrency, { where: { conversion_rate: conversionRate } });
    			}
    		} else {
    			objCurrency = await models.mongoose.currencies.findOneAndUpdate({conversion_rate: conversionRate}, {$set: updateCurrency}, {new: true});
    		}
    		return objCurrency;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCurrencyByName(name, updateCurrency) {
    	try {
    		let objCurrency;
    		if(sql) {
    			objCurrency = await models.sequelize.currencies.findOne({where: { name: name }});
    			if (objCurrency) {
    				objCurrency = await models.sequelize.currencies.update(updateCurrency, { where: { name: name } });
    			}
    		} else {
    			objCurrency = await models.mongoose.currencies.findOneAndUpdate({name: name}, {$set: updateCurrency}, {new: true});
    		}
    		return objCurrency;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCurrencyBySymbol(symbol, updateCurrency) {
    	try {
    		let objCurrency;
    		if(sql) {
    			objCurrency = await models.sequelize.currencies.findOne({where: { symbol: symbol }});
    			if (objCurrency) {
    				objCurrency = await models.sequelize.currencies.update(updateCurrency, { where: { symbol: symbol } });
    			}
    		} else {
    			objCurrency = await models.mongoose.currencies.findOneAndUpdate({symbol: symbol}, {$set: updateCurrency}, {new: true});
    		}
    		return objCurrency;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCurrencyByIso4217(iso4217, updateCurrency) {
    	try {
    		let objCurrency;
    		if(sql) {
    			objCurrency = await models.sequelize.currencies.findOne({where: { iso4217: iso4217 }});
    			if (objCurrency) {
    				objCurrency = await models.sequelize.currencies.update(updateCurrency, { where: { iso4217: iso4217 } });
    			}
    		} else {
    			objCurrency = await models.mongoose.currencies.findOneAndUpdate({iso4217: iso4217}, {$set: updateCurrency}, {new: true});
    		}
    		return objCurrency;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCurrencyByStatus(status, updateCurrency) {
    	try {
    		let objCurrency;
    		if(sql) {
    			objCurrency = await models.sequelize.currencies.findOne({where: { status: status }});
    			if (objCurrency) {
    				objCurrency = await models.sequelize.currencies.update(updateCurrency, { where: { status: status } });
    			}
    		} else {
    			objCurrency = await models.mongoose.currencies.findOneAndUpdate({status: status}, {$set: updateCurrency}, {new: true});
    		}
    		return objCurrency;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCurrencyByDateEntered(dateEntered, updateCurrency) {
    	try {
    		let objCurrency;
    		if(sql) {
    			objCurrency = await models.sequelize.currencies.findOne({where: { date_entered: dateEntered }});
    			if (objCurrency) {
    				objCurrency = await models.sequelize.currencies.update(updateCurrency, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objCurrency = await models.mongoose.currencies.findOneAndUpdate({date_entered: dateEntered}, {$set: updateCurrency}, {new: true});
    		}
    		return objCurrency;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCurrencyByDateModified(dateModified, updateCurrency) {
    	try {
    		let objCurrency;
    		if(sql) {
    			objCurrency = await models.sequelize.currencies.findOne({where: { date_modified: dateModified }});
    			if (objCurrency) {
    				objCurrency = await models.sequelize.currencies.update(updateCurrency, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objCurrency = await models.mongoose.currencies.findOneAndUpdate({date_modified: dateModified}, {$set: updateCurrency}, {new: true});
    		}
    		return objCurrency;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCurrencyByCreatedBy(createdBy, updateCurrency) {
    	try {
    		let objCurrency;
    		if(sql) {
    			objCurrency = await models.sequelize.currencies.findOne({where: { created_by: createdBy }});
    			if (objCurrency) {
    				objCurrency = await models.sequelize.currencies.update(updateCurrency, { where: { created_by: createdBy } });
    			}
    		} else {
    			objCurrency = await models.mongoose.currencies.findOneAndUpdate({created_by: createdBy}, {$set: updateCurrency}, {new: true});
    		}
    		return objCurrency;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = CurrencyService;
//</es-section>
