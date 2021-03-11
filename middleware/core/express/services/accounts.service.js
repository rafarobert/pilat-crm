/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:55:46 GMT-0400 (Bolivia Time)
 * Time: 14:55:46
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:55:46 GMT-0400 (Bolivia Time)
 * Last time updated: 14:55:46
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

class AccountService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAccounts(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.accounts.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.accounts.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAccounts(select = []) {
		try {
			if(sql) {
				return await models.sequelize.accounts.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.accounts.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAccount(newAccount) {
		try {
			let objAccount;
			if(util.PrimaryKeyTypeIsString(models.sequelize.accounts.primaryKeys.id.type.toString())) {
			    newAccount.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAccount = await models.sequelize.accounts.create(newAccount);
			} else {
				objAccount = new models.mongoose.accounts(newAccount);
				await objAccount.save();
			}
			return objAccount;
		} catch (error) {
			throw error;
		}
	}

	static async updateAccount(id, updateAccount) {
		try {
			let objAccount;
			if(sql) {
				objAccount = await models.sequelize.accounts.findOne({where: { id: util.Char(id) }});
				if (objAccount) {
					await models.sequelize.accounts.update(updateAccount, { where: { id: util.Char(id) } });
					objAccount = await models.sequelize.accounts.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAccount._id;
				objAccount = await models.mongoose.accounts.findOneAndUpdate({id:id}, {$set: updateAccount}, {new: true});
			}
			return objAccount;
		} catch (error) {
			throw error;
		}
	}

	static async getAAccount(id, query) {
		try {
			let objAccount;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAccount = await models.sequelize.accounts.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAccount = await models.mongoose.accounts.find({id:util.Char(id)}).select(query.select);
			}
			return objAccount;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAccount(id) {
		try {
			let objAccount;
			if(sql) {
				objAccount = await models.sequelize.accounts.findOne({ where: { id: util.Char(id) } });
				if (objAccount) {
					await models.sequelize.accounts.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAccount = await models.mongoose.accounts.deleteOne({id:util.Char(id)});
			}
			return objAccount;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAccount = await models.mongoose.accounts.findOne({id: id});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAccount = await models.mongoose.accounts.findOne({deleted: deleted});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objAccount = await models.mongoose.accounts.findOne({name: name});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAccountType(accountType, query = {}) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { account_type: accountType },
    			});
    		} else {
    			objAccount = await models.mongoose.accounts.findOne({account_type: accountType});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByIndustry(industry, query = {}) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { industry: industry },
    			});
    		} else {
    			objAccount = await models.mongoose.accounts.findOne({industry: industry});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAnnualRevenue(annualRevenue, query = {}) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { annual_revenue: annualRevenue },
    			});
    		} else {
    			objAccount = await models.mongoose.accounts.findOne({annual_revenue: annualRevenue});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPhoneFax(phoneFax, query = {}) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { phone_fax: phoneFax },
    			});
    		} else {
    			objAccount = await models.mongoose.accounts.findOne({phone_fax: phoneFax});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBillingAddressStreet(billingAddressStreet, query = {}) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { billing_address_street: billingAddressStreet },
    			});
    		} else {
    			objAccount = await models.mongoose.accounts.findOne({billing_address_street: billingAddressStreet});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBillingAddressCity(billingAddressCity, query = {}) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { billing_address_city: billingAddressCity },
    			});
    		} else {
    			objAccount = await models.mongoose.accounts.findOne({billing_address_city: billingAddressCity});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBillingAddressState(billingAddressState, query = {}) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { billing_address_state: billingAddressState },
    			});
    		} else {
    			objAccount = await models.mongoose.accounts.findOne({billing_address_state: billingAddressState});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBillingAddressPostalcode(billingAddressPostalcode, query = {}) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { billing_address_postalcode: billingAddressPostalcode },
    			});
    		} else {
    			objAccount = await models.mongoose.accounts.findOne({billing_address_postalcode: billingAddressPostalcode});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBillingAddressCountry(billingAddressCountry, query = {}) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { billing_address_country: billingAddressCountry },
    			});
    		} else {
    			objAccount = await models.mongoose.accounts.findOne({billing_address_country: billingAddressCountry});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRating(rating, query = {}) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { rating: rating },
    			});
    		} else {
    			objAccount = await models.mongoose.accounts.findOne({rating: rating});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPhoneOffice(phoneOffice, query = {}) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { phone_office: phoneOffice },
    			});
    		} else {
    			objAccount = await models.mongoose.accounts.findOne({phone_office: phoneOffice});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPhoneAlternate(phoneAlternate, query = {}) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { phone_alternate: phoneAlternate },
    			});
    		} else {
    			objAccount = await models.mongoose.accounts.findOne({phone_alternate: phoneAlternate});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByWebsite(website, query = {}) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { website: website },
    			});
    		} else {
    			objAccount = await models.mongoose.accounts.findOne({website: website});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByOwnership(ownership, query = {}) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { ownership: ownership },
    			});
    		} else {
    			objAccount = await models.mongoose.accounts.findOne({ownership: ownership});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByEmployees(employees, query = {}) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { employees: employees },
    			});
    		} else {
    			objAccount = await models.mongoose.accounts.findOne({employees: employees});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTickerSymbol(tickerSymbol, query = {}) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { ticker_symbol: tickerSymbol },
    			});
    		} else {
    			objAccount = await models.mongoose.accounts.findOne({ticker_symbol: tickerSymbol});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByShippingAddressStreet(shippingAddressStreet, query = {}) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { shipping_address_street: shippingAddressStreet },
    			});
    		} else {
    			objAccount = await models.mongoose.accounts.findOne({shipping_address_street: shippingAddressStreet});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByShippingAddressCity(shippingAddressCity, query = {}) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { shipping_address_city: shippingAddressCity },
    			});
    		} else {
    			objAccount = await models.mongoose.accounts.findOne({shipping_address_city: shippingAddressCity});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByShippingAddressState(shippingAddressState, query = {}) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { shipping_address_state: shippingAddressState },
    			});
    		} else {
    			objAccount = await models.mongoose.accounts.findOne({shipping_address_state: shippingAddressState});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByShippingAddressPostalcode(shippingAddressPostalcode, query = {}) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { shipping_address_postalcode: shippingAddressPostalcode },
    			});
    		} else {
    			objAccount = await models.mongoose.accounts.findOne({shipping_address_postalcode: shippingAddressPostalcode});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByShippingAddressCountry(shippingAddressCountry, query = {}) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { shipping_address_country: shippingAddressCountry },
    			});
    		} else {
    			objAccount = await models.mongoose.accounts.findOne({shipping_address_country: shippingAddressCountry});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySicCode(sicCode, query = {}) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { sic_code: sicCode },
    			});
    		} else {
    			objAccount = await models.mongoose.accounts.findOne({sic_code: sicCode});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objAccount = await models.mongoose.accounts.findOne({description: description});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objAccount = await models.mongoose.accounts.findOne({date_entered: dateEntered});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAccount = await models.mongoose.accounts.findOne({date_modified: dateModified});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objAccount = await models.mongoose.accounts.findOne({modified_user_id: modifiedUserId});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAccount = await models.mongoose.accounts.findOne({created_by: createdBy});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objAccount = await models.mongoose.accounts.findOne({assigned_user_id: assignedUserId});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objAccount = await models.mongoose.accounts.findOne({parent_id: parentId});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCampaignId(campaignId, query = {}) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { campaign_id: campaignId },
    			});
    		} else {
    			objAccount = await models.mongoose.accounts.findOne({campaign_id: campaignId});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAccountById(id, updateAccount) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({where: { id: id }});
    			if (objAccount) {
    				objAccount = await models.sequelize.accounts.update(updateAccount, { where: { id: id } });
    			}
    		} else {
    			objAccount = await models.mongoose.accounts.findOneAndUpdate({id: id}, {$set: updateAccount}, {new: true});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountByDeleted(deleted, updateAccount) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({where: { deleted: deleted }});
    			if (objAccount) {
    				objAccount = await models.sequelize.accounts.update(updateAccount, { where: { deleted: deleted } });
    			}
    		} else {
    			objAccount = await models.mongoose.accounts.findOneAndUpdate({deleted: deleted}, {$set: updateAccount}, {new: true});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountByName(name, updateAccount) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({where: { name: name }});
    			if (objAccount) {
    				objAccount = await models.sequelize.accounts.update(updateAccount, { where: { name: name } });
    			}
    		} else {
    			objAccount = await models.mongoose.accounts.findOneAndUpdate({name: name}, {$set: updateAccount}, {new: true});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountByAccountType(accountType, updateAccount) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({where: { account_type: accountType }});
    			if (objAccount) {
    				objAccount = await models.sequelize.accounts.update(updateAccount, { where: { account_type: accountType } });
    			}
    		} else {
    			objAccount = await models.mongoose.accounts.findOneAndUpdate({account_type: accountType}, {$set: updateAccount}, {new: true});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountByIndustry(industry, updateAccount) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({where: { industry: industry }});
    			if (objAccount) {
    				objAccount = await models.sequelize.accounts.update(updateAccount, { where: { industry: industry } });
    			}
    		} else {
    			objAccount = await models.mongoose.accounts.findOneAndUpdate({industry: industry}, {$set: updateAccount}, {new: true});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountByAnnualRevenue(annualRevenue, updateAccount) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({where: { annual_revenue: annualRevenue }});
    			if (objAccount) {
    				objAccount = await models.sequelize.accounts.update(updateAccount, { where: { annual_revenue: annualRevenue } });
    			}
    		} else {
    			objAccount = await models.mongoose.accounts.findOneAndUpdate({annual_revenue: annualRevenue}, {$set: updateAccount}, {new: true});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountByPhoneFax(phoneFax, updateAccount) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({where: { phone_fax: phoneFax }});
    			if (objAccount) {
    				objAccount = await models.sequelize.accounts.update(updateAccount, { where: { phone_fax: phoneFax } });
    			}
    		} else {
    			objAccount = await models.mongoose.accounts.findOneAndUpdate({phone_fax: phoneFax}, {$set: updateAccount}, {new: true});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountByBillingAddressStreet(billingAddressStreet, updateAccount) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({where: { billing_address_street: billingAddressStreet }});
    			if (objAccount) {
    				objAccount = await models.sequelize.accounts.update(updateAccount, { where: { billing_address_street: billingAddressStreet } });
    			}
    		} else {
    			objAccount = await models.mongoose.accounts.findOneAndUpdate({billing_address_street: billingAddressStreet}, {$set: updateAccount}, {new: true});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountByBillingAddressCity(billingAddressCity, updateAccount) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({where: { billing_address_city: billingAddressCity }});
    			if (objAccount) {
    				objAccount = await models.sequelize.accounts.update(updateAccount, { where: { billing_address_city: billingAddressCity } });
    			}
    		} else {
    			objAccount = await models.mongoose.accounts.findOneAndUpdate({billing_address_city: billingAddressCity}, {$set: updateAccount}, {new: true});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountByBillingAddressState(billingAddressState, updateAccount) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({where: { billing_address_state: billingAddressState }});
    			if (objAccount) {
    				objAccount = await models.sequelize.accounts.update(updateAccount, { where: { billing_address_state: billingAddressState } });
    			}
    		} else {
    			objAccount = await models.mongoose.accounts.findOneAndUpdate({billing_address_state: billingAddressState}, {$set: updateAccount}, {new: true});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountByBillingAddressPostalcode(billingAddressPostalcode, updateAccount) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({where: { billing_address_postalcode: billingAddressPostalcode }});
    			if (objAccount) {
    				objAccount = await models.sequelize.accounts.update(updateAccount, { where: { billing_address_postalcode: billingAddressPostalcode } });
    			}
    		} else {
    			objAccount = await models.mongoose.accounts.findOneAndUpdate({billing_address_postalcode: billingAddressPostalcode}, {$set: updateAccount}, {new: true});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountByBillingAddressCountry(billingAddressCountry, updateAccount) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({where: { billing_address_country: billingAddressCountry }});
    			if (objAccount) {
    				objAccount = await models.sequelize.accounts.update(updateAccount, { where: { billing_address_country: billingAddressCountry } });
    			}
    		} else {
    			objAccount = await models.mongoose.accounts.findOneAndUpdate({billing_address_country: billingAddressCountry}, {$set: updateAccount}, {new: true});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountByRating(rating, updateAccount) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({where: { rating: rating }});
    			if (objAccount) {
    				objAccount = await models.sequelize.accounts.update(updateAccount, { where: { rating: rating } });
    			}
    		} else {
    			objAccount = await models.mongoose.accounts.findOneAndUpdate({rating: rating}, {$set: updateAccount}, {new: true});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountByPhoneOffice(phoneOffice, updateAccount) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({where: { phone_office: phoneOffice }});
    			if (objAccount) {
    				objAccount = await models.sequelize.accounts.update(updateAccount, { where: { phone_office: phoneOffice } });
    			}
    		} else {
    			objAccount = await models.mongoose.accounts.findOneAndUpdate({phone_office: phoneOffice}, {$set: updateAccount}, {new: true});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountByPhoneAlternate(phoneAlternate, updateAccount) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({where: { phone_alternate: phoneAlternate }});
    			if (objAccount) {
    				objAccount = await models.sequelize.accounts.update(updateAccount, { where: { phone_alternate: phoneAlternate } });
    			}
    		} else {
    			objAccount = await models.mongoose.accounts.findOneAndUpdate({phone_alternate: phoneAlternate}, {$set: updateAccount}, {new: true});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountByWebsite(website, updateAccount) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({where: { website: website }});
    			if (objAccount) {
    				objAccount = await models.sequelize.accounts.update(updateAccount, { where: { website: website } });
    			}
    		} else {
    			objAccount = await models.mongoose.accounts.findOneAndUpdate({website: website}, {$set: updateAccount}, {new: true});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountByOwnership(ownership, updateAccount) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({where: { ownership: ownership }});
    			if (objAccount) {
    				objAccount = await models.sequelize.accounts.update(updateAccount, { where: { ownership: ownership } });
    			}
    		} else {
    			objAccount = await models.mongoose.accounts.findOneAndUpdate({ownership: ownership}, {$set: updateAccount}, {new: true});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountByEmployees(employees, updateAccount) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({where: { employees: employees }});
    			if (objAccount) {
    				objAccount = await models.sequelize.accounts.update(updateAccount, { where: { employees: employees } });
    			}
    		} else {
    			objAccount = await models.mongoose.accounts.findOneAndUpdate({employees: employees}, {$set: updateAccount}, {new: true});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountByTickerSymbol(tickerSymbol, updateAccount) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({where: { ticker_symbol: tickerSymbol }});
    			if (objAccount) {
    				objAccount = await models.sequelize.accounts.update(updateAccount, { where: { ticker_symbol: tickerSymbol } });
    			}
    		} else {
    			objAccount = await models.mongoose.accounts.findOneAndUpdate({ticker_symbol: tickerSymbol}, {$set: updateAccount}, {new: true});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountByShippingAddressStreet(shippingAddressStreet, updateAccount) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({where: { shipping_address_street: shippingAddressStreet }});
    			if (objAccount) {
    				objAccount = await models.sequelize.accounts.update(updateAccount, { where: { shipping_address_street: shippingAddressStreet } });
    			}
    		} else {
    			objAccount = await models.mongoose.accounts.findOneAndUpdate({shipping_address_street: shippingAddressStreet}, {$set: updateAccount}, {new: true});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountByShippingAddressCity(shippingAddressCity, updateAccount) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({where: { shipping_address_city: shippingAddressCity }});
    			if (objAccount) {
    				objAccount = await models.sequelize.accounts.update(updateAccount, { where: { shipping_address_city: shippingAddressCity } });
    			}
    		} else {
    			objAccount = await models.mongoose.accounts.findOneAndUpdate({shipping_address_city: shippingAddressCity}, {$set: updateAccount}, {new: true});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountByShippingAddressState(shippingAddressState, updateAccount) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({where: { shipping_address_state: shippingAddressState }});
    			if (objAccount) {
    				objAccount = await models.sequelize.accounts.update(updateAccount, { where: { shipping_address_state: shippingAddressState } });
    			}
    		} else {
    			objAccount = await models.mongoose.accounts.findOneAndUpdate({shipping_address_state: shippingAddressState}, {$set: updateAccount}, {new: true});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountByShippingAddressPostalcode(shippingAddressPostalcode, updateAccount) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({where: { shipping_address_postalcode: shippingAddressPostalcode }});
    			if (objAccount) {
    				objAccount = await models.sequelize.accounts.update(updateAccount, { where: { shipping_address_postalcode: shippingAddressPostalcode } });
    			}
    		} else {
    			objAccount = await models.mongoose.accounts.findOneAndUpdate({shipping_address_postalcode: shippingAddressPostalcode}, {$set: updateAccount}, {new: true});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountByShippingAddressCountry(shippingAddressCountry, updateAccount) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({where: { shipping_address_country: shippingAddressCountry }});
    			if (objAccount) {
    				objAccount = await models.sequelize.accounts.update(updateAccount, { where: { shipping_address_country: shippingAddressCountry } });
    			}
    		} else {
    			objAccount = await models.mongoose.accounts.findOneAndUpdate({shipping_address_country: shippingAddressCountry}, {$set: updateAccount}, {new: true});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountBySicCode(sicCode, updateAccount) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({where: { sic_code: sicCode }});
    			if (objAccount) {
    				objAccount = await models.sequelize.accounts.update(updateAccount, { where: { sic_code: sicCode } });
    			}
    		} else {
    			objAccount = await models.mongoose.accounts.findOneAndUpdate({sic_code: sicCode}, {$set: updateAccount}, {new: true});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountByDescription(description, updateAccount) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({where: { description: description }});
    			if (objAccount) {
    				objAccount = await models.sequelize.accounts.update(updateAccount, { where: { description: description } });
    			}
    		} else {
    			objAccount = await models.mongoose.accounts.findOneAndUpdate({description: description}, {$set: updateAccount}, {new: true});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountByDateEntered(dateEntered, updateAccount) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({where: { date_entered: dateEntered }});
    			if (objAccount) {
    				objAccount = await models.sequelize.accounts.update(updateAccount, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objAccount = await models.mongoose.accounts.findOneAndUpdate({date_entered: dateEntered}, {$set: updateAccount}, {new: true});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountByDateModified(dateModified, updateAccount) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({where: { date_modified: dateModified }});
    			if (objAccount) {
    				objAccount = await models.sequelize.accounts.update(updateAccount, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAccount = await models.mongoose.accounts.findOneAndUpdate({date_modified: dateModified}, {$set: updateAccount}, {new: true});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountByModifiedUserId(modifiedUserId, updateAccount) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objAccount) {
    				objAccount = await models.sequelize.accounts.update(updateAccount, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objAccount = await models.mongoose.accounts.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateAccount}, {new: true});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountByCreatedBy(createdBy, updateAccount) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({where: { created_by: createdBy }});
    			if (objAccount) {
    				objAccount = await models.sequelize.accounts.update(updateAccount, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAccount = await models.mongoose.accounts.findOneAndUpdate({created_by: createdBy}, {$set: updateAccount}, {new: true});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountByAssignedUserId(assignedUserId, updateAccount) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objAccount) {
    				objAccount = await models.sequelize.accounts.update(updateAccount, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objAccount = await models.mongoose.accounts.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateAccount}, {new: true});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountByParentId(parentId, updateAccount) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({where: { parent_id: parentId }});
    			if (objAccount) {
    				objAccount = await models.sequelize.accounts.update(updateAccount, { where: { parent_id: parentId } });
    			}
    		} else {
    			objAccount = await models.mongoose.accounts.findOneAndUpdate({parent_id: parentId}, {$set: updateAccount}, {new: true});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountByCampaignId(campaignId, updateAccount) {
    	try {
    		let objAccount;
    		if(sql) {
    			objAccount = await models.sequelize.accounts.findOne({where: { campaign_id: campaignId }});
    			if (objAccount) {
    				objAccount = await models.sequelize.accounts.update(updateAccount, { where: { campaign_id: campaignId } });
    			}
    		} else {
    			objAccount = await models.mongoose.accounts.findOneAndUpdate({campaign_id: campaignId}, {$set: updateAccount}, {new: true});
    		}
    		return objAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AccountService;
//</es-section>
