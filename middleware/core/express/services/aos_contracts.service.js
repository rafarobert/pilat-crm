/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:18 GMT-0400 (Bolivia Time)
 * Time: 15:35:18
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:18 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:18
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

class AoContractService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAosContracts(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aosContracts.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aosContracts.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAosContracts(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aosContracts.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aosContracts.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAoContract(newAoContract) {
		try {
			let objAoContract;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aosContracts.primaryKeys.id.type.toString())) {
			    newAoContract.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAoContract = await models.sequelize.aosContracts.create(newAoContract);
			} else {
				objAoContract = new models.mongoose.aosContracts(newAoContract);
				await objAoContract.save();
			}
			return objAoContract;
		} catch (error) {
			throw error;
		}
	}

	static async updateAoContract(id, updateAoContract) {
		try {
			let objAoContract;
			if(sql) {
				objAoContract = await models.sequelize.aosContracts.findOne({where: { id: util.Char(id) }});
				if (objAoContract) {
					await models.sequelize.aosContracts.update(updateAoContract, { where: { id: util.Char(id) } });
					objAoContract = await models.sequelize.aosContracts.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAoContract._id;
				objAoContract = await models.mongoose.aosContracts.findOneAndUpdate({id:id}, {$set: updateAoContract}, {new: true});
			}
			return objAoContract;
		} catch (error) {
			throw error;
		}
	}

	static async getAAoContract(id, query) {
		try {
			let objAoContract;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAoContract = await models.sequelize.aosContracts.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAoContract = await models.mongoose.aosContracts.find({id:util.Char(id)}).select(query.select);
			}
			return objAoContract;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAoContract(id) {
		try {
			let objAoContract;
			if(sql) {
				objAoContract = await models.sequelize.aosContracts.findOne({ where: { id: util.Char(id) } });
				if (objAoContract) {
					await models.sequelize.aosContracts.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAoContract = await models.mongoose.aosContracts.deleteOne({id:util.Char(id)});
			}
			return objAoContract;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOne({id: id});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOne({deleted: deleted});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTotalContractValue(totalContractValue, query = {}) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { total_contract_value: totalContractValue },
    			});
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOne({total_contract_value: totalContractValue});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTotalContractValueUsdollar(totalContractValueUsdollar, query = {}) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { total_contract_value_usdollar: totalContractValueUsdollar },
    			});
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOne({total_contract_value_usdollar: totalContractValueUsdollar});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTotalAmt(totalAmt, query = {}) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { total_amt: totalAmt },
    			});
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOne({total_amt: totalAmt});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTotalAmtUsdollar(totalAmtUsdollar, query = {}) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { total_amt_usdollar: totalAmtUsdollar },
    			});
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOne({total_amt_usdollar: totalAmtUsdollar});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySubtotalAmount(subtotalAmount, query = {}) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { subtotal_amount: subtotalAmount },
    			});
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOne({subtotal_amount: subtotalAmount});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySubtotalAmountUsdollar(subtotalAmountUsdollar, query = {}) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { subtotal_amount_usdollar: subtotalAmountUsdollar },
    			});
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOne({subtotal_amount_usdollar: subtotalAmountUsdollar});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDiscountAmount(discountAmount, query = {}) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { discount_amount: discountAmount },
    			});
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOne({discount_amount: discountAmount});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDiscountAmountUsdollar(discountAmountUsdollar, query = {}) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { discount_amount_usdollar: discountAmountUsdollar },
    			});
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOne({discount_amount_usdollar: discountAmountUsdollar});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTaxAmount(taxAmount, query = {}) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { tax_amount: taxAmount },
    			});
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOne({tax_amount: taxAmount});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTaxAmountUsdollar(taxAmountUsdollar, query = {}) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { tax_amount_usdollar: taxAmountUsdollar },
    			});
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOne({tax_amount_usdollar: taxAmountUsdollar});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByShippingAmount(shippingAmount, query = {}) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { shipping_amount: shippingAmount },
    			});
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOne({shipping_amount: shippingAmount});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByShippingAmountUsdollar(shippingAmountUsdollar, query = {}) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { shipping_amount_usdollar: shippingAmountUsdollar },
    			});
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOne({shipping_amount_usdollar: shippingAmountUsdollar});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByShippingTaxAmt(shippingTaxAmt, query = {}) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { shipping_tax_amt: shippingTaxAmt },
    			});
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOne({shipping_tax_amt: shippingTaxAmt});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByShippingTaxAmtUsdollar(shippingTaxAmtUsdollar, query = {}) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { shipping_tax_amt_usdollar: shippingTaxAmtUsdollar },
    			});
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOne({shipping_tax_amt_usdollar: shippingTaxAmtUsdollar});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTotalAmount(totalAmount, query = {}) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { total_amount: totalAmount },
    			});
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOne({total_amount: totalAmount});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTotalAmountUsdollar(totalAmountUsdollar, query = {}) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { total_amount_usdollar: totalAmountUsdollar },
    			});
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOne({total_amount_usdollar: totalAmountUsdollar});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOne({name: name});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByReferenceCode(referenceCode, query = {}) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { reference_code: referenceCode },
    			});
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOne({reference_code: referenceCode});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByStatus(status, query = {}) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { status: status },
    			});
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOne({status: status});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByContractType(contractType, query = {}) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { contract_type: contractType },
    			});
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOne({contract_type: contractType});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByShippingTax(shippingTax, query = {}) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { shipping_tax: shippingTax },
    			});
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOne({shipping_tax: shippingTax});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOne({description: description});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOne({date_entered: dateEntered});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOne({date_modified: dateModified});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByStartDate(startDate, query = {}) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { start_date: startDate },
    			});
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOne({start_date: startDate});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByEndDate(endDate, query = {}) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { end_date: endDate },
    			});
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOne({end_date: endDate});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCustomerSignedDate(customerSignedDate, query = {}) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { customer_signed_date: customerSignedDate },
    			});
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOne({customer_signed_date: customerSignedDate});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCompanySignedDate(companySignedDate, query = {}) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { company_signed_date: companySignedDate },
    			});
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOne({company_signed_date: companySignedDate});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRenewalReminderDate(renewalReminderDate, query = {}) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { renewal_reminder_date: renewalReminderDate },
    			});
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOne({renewal_reminder_date: renewalReminderDate});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOne({modified_user_id: modifiedUserId});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOne({created_by: createdBy});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOne({assigned_user_id: assignedUserId});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCurrencyId(currencyId, query = {}) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { currency_id: currencyId },
    			});
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOne({currency_id: currencyId});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByContractAccountId(contractAccountId, query = {}) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { contract_account_id: contractAccountId },
    			});
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOne({contract_account_id: contractAccountId});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByOpportunityId(opportunityId, query = {}) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { opportunity_id: opportunityId },
    			});
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOne({opportunity_id: opportunityId});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByContactId(contactId, query = {}) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { contact_id: contactId },
    			});
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOne({contact_id: contactId});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCallId(callId, query = {}) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { call_id: callId },
    			});
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOne({call_id: callId});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAoContractById(id, updateAoContract) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({where: { id: id }});
    			if (objAoContract) {
    				objAoContract = await models.sequelize.aosContracts.update(updateAoContract, { where: { id: id } });
    			}
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOneAndUpdate({id: id}, {$set: updateAoContract}, {new: true});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractByDeleted(deleted, updateAoContract) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({where: { deleted: deleted }});
    			if (objAoContract) {
    				objAoContract = await models.sequelize.aosContracts.update(updateAoContract, { where: { deleted: deleted } });
    			}
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOneAndUpdate({deleted: deleted}, {$set: updateAoContract}, {new: true});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractByTotalContractValue(totalContractValue, updateAoContract) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({where: { total_contract_value: totalContractValue }});
    			if (objAoContract) {
    				objAoContract = await models.sequelize.aosContracts.update(updateAoContract, { where: { total_contract_value: totalContractValue } });
    			}
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOneAndUpdate({total_contract_value: totalContractValue}, {$set: updateAoContract}, {new: true});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractByTotalContractValueUsdollar(totalContractValueUsdollar, updateAoContract) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({where: { total_contract_value_usdollar: totalContractValueUsdollar }});
    			if (objAoContract) {
    				objAoContract = await models.sequelize.aosContracts.update(updateAoContract, { where: { total_contract_value_usdollar: totalContractValueUsdollar } });
    			}
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOneAndUpdate({total_contract_value_usdollar: totalContractValueUsdollar}, {$set: updateAoContract}, {new: true});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractByTotalAmt(totalAmt, updateAoContract) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({where: { total_amt: totalAmt }});
    			if (objAoContract) {
    				objAoContract = await models.sequelize.aosContracts.update(updateAoContract, { where: { total_amt: totalAmt } });
    			}
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOneAndUpdate({total_amt: totalAmt}, {$set: updateAoContract}, {new: true});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractByTotalAmtUsdollar(totalAmtUsdollar, updateAoContract) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({where: { total_amt_usdollar: totalAmtUsdollar }});
    			if (objAoContract) {
    				objAoContract = await models.sequelize.aosContracts.update(updateAoContract, { where: { total_amt_usdollar: totalAmtUsdollar } });
    			}
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOneAndUpdate({total_amt_usdollar: totalAmtUsdollar}, {$set: updateAoContract}, {new: true});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractBySubtotalAmount(subtotalAmount, updateAoContract) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({where: { subtotal_amount: subtotalAmount }});
    			if (objAoContract) {
    				objAoContract = await models.sequelize.aosContracts.update(updateAoContract, { where: { subtotal_amount: subtotalAmount } });
    			}
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOneAndUpdate({subtotal_amount: subtotalAmount}, {$set: updateAoContract}, {new: true});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractBySubtotalAmountUsdollar(subtotalAmountUsdollar, updateAoContract) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({where: { subtotal_amount_usdollar: subtotalAmountUsdollar }});
    			if (objAoContract) {
    				objAoContract = await models.sequelize.aosContracts.update(updateAoContract, { where: { subtotal_amount_usdollar: subtotalAmountUsdollar } });
    			}
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOneAndUpdate({subtotal_amount_usdollar: subtotalAmountUsdollar}, {$set: updateAoContract}, {new: true});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractByDiscountAmount(discountAmount, updateAoContract) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({where: { discount_amount: discountAmount }});
    			if (objAoContract) {
    				objAoContract = await models.sequelize.aosContracts.update(updateAoContract, { where: { discount_amount: discountAmount } });
    			}
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOneAndUpdate({discount_amount: discountAmount}, {$set: updateAoContract}, {new: true});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractByDiscountAmountUsdollar(discountAmountUsdollar, updateAoContract) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({where: { discount_amount_usdollar: discountAmountUsdollar }});
    			if (objAoContract) {
    				objAoContract = await models.sequelize.aosContracts.update(updateAoContract, { where: { discount_amount_usdollar: discountAmountUsdollar } });
    			}
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOneAndUpdate({discount_amount_usdollar: discountAmountUsdollar}, {$set: updateAoContract}, {new: true});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractByTaxAmount(taxAmount, updateAoContract) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({where: { tax_amount: taxAmount }});
    			if (objAoContract) {
    				objAoContract = await models.sequelize.aosContracts.update(updateAoContract, { where: { tax_amount: taxAmount } });
    			}
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOneAndUpdate({tax_amount: taxAmount}, {$set: updateAoContract}, {new: true});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractByTaxAmountUsdollar(taxAmountUsdollar, updateAoContract) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({where: { tax_amount_usdollar: taxAmountUsdollar }});
    			if (objAoContract) {
    				objAoContract = await models.sequelize.aosContracts.update(updateAoContract, { where: { tax_amount_usdollar: taxAmountUsdollar } });
    			}
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOneAndUpdate({tax_amount_usdollar: taxAmountUsdollar}, {$set: updateAoContract}, {new: true});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractByShippingAmount(shippingAmount, updateAoContract) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({where: { shipping_amount: shippingAmount }});
    			if (objAoContract) {
    				objAoContract = await models.sequelize.aosContracts.update(updateAoContract, { where: { shipping_amount: shippingAmount } });
    			}
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOneAndUpdate({shipping_amount: shippingAmount}, {$set: updateAoContract}, {new: true});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractByShippingAmountUsdollar(shippingAmountUsdollar, updateAoContract) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({where: { shipping_amount_usdollar: shippingAmountUsdollar }});
    			if (objAoContract) {
    				objAoContract = await models.sequelize.aosContracts.update(updateAoContract, { where: { shipping_amount_usdollar: shippingAmountUsdollar } });
    			}
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOneAndUpdate({shipping_amount_usdollar: shippingAmountUsdollar}, {$set: updateAoContract}, {new: true});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractByShippingTaxAmt(shippingTaxAmt, updateAoContract) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({where: { shipping_tax_amt: shippingTaxAmt }});
    			if (objAoContract) {
    				objAoContract = await models.sequelize.aosContracts.update(updateAoContract, { where: { shipping_tax_amt: shippingTaxAmt } });
    			}
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOneAndUpdate({shipping_tax_amt: shippingTaxAmt}, {$set: updateAoContract}, {new: true});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractByShippingTaxAmtUsdollar(shippingTaxAmtUsdollar, updateAoContract) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({where: { shipping_tax_amt_usdollar: shippingTaxAmtUsdollar }});
    			if (objAoContract) {
    				objAoContract = await models.sequelize.aosContracts.update(updateAoContract, { where: { shipping_tax_amt_usdollar: shippingTaxAmtUsdollar } });
    			}
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOneAndUpdate({shipping_tax_amt_usdollar: shippingTaxAmtUsdollar}, {$set: updateAoContract}, {new: true});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractByTotalAmount(totalAmount, updateAoContract) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({where: { total_amount: totalAmount }});
    			if (objAoContract) {
    				objAoContract = await models.sequelize.aosContracts.update(updateAoContract, { where: { total_amount: totalAmount } });
    			}
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOneAndUpdate({total_amount: totalAmount}, {$set: updateAoContract}, {new: true});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractByTotalAmountUsdollar(totalAmountUsdollar, updateAoContract) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({where: { total_amount_usdollar: totalAmountUsdollar }});
    			if (objAoContract) {
    				objAoContract = await models.sequelize.aosContracts.update(updateAoContract, { where: { total_amount_usdollar: totalAmountUsdollar } });
    			}
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOneAndUpdate({total_amount_usdollar: totalAmountUsdollar}, {$set: updateAoContract}, {new: true});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractByName(name, updateAoContract) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({where: { name: name }});
    			if (objAoContract) {
    				objAoContract = await models.sequelize.aosContracts.update(updateAoContract, { where: { name: name } });
    			}
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOneAndUpdate({name: name}, {$set: updateAoContract}, {new: true});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractByReferenceCode(referenceCode, updateAoContract) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({where: { reference_code: referenceCode }});
    			if (objAoContract) {
    				objAoContract = await models.sequelize.aosContracts.update(updateAoContract, { where: { reference_code: referenceCode } });
    			}
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOneAndUpdate({reference_code: referenceCode}, {$set: updateAoContract}, {new: true});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractByStatus(status, updateAoContract) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({where: { status: status }});
    			if (objAoContract) {
    				objAoContract = await models.sequelize.aosContracts.update(updateAoContract, { where: { status: status } });
    			}
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOneAndUpdate({status: status}, {$set: updateAoContract}, {new: true});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractByContractType(contractType, updateAoContract) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({where: { contract_type: contractType }});
    			if (objAoContract) {
    				objAoContract = await models.sequelize.aosContracts.update(updateAoContract, { where: { contract_type: contractType } });
    			}
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOneAndUpdate({contract_type: contractType}, {$set: updateAoContract}, {new: true});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractByShippingTax(shippingTax, updateAoContract) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({where: { shipping_tax: shippingTax }});
    			if (objAoContract) {
    				objAoContract = await models.sequelize.aosContracts.update(updateAoContract, { where: { shipping_tax: shippingTax } });
    			}
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOneAndUpdate({shipping_tax: shippingTax}, {$set: updateAoContract}, {new: true});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractByDescription(description, updateAoContract) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({where: { description: description }});
    			if (objAoContract) {
    				objAoContract = await models.sequelize.aosContracts.update(updateAoContract, { where: { description: description } });
    			}
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOneAndUpdate({description: description}, {$set: updateAoContract}, {new: true});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractByDateEntered(dateEntered, updateAoContract) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({where: { date_entered: dateEntered }});
    			if (objAoContract) {
    				objAoContract = await models.sequelize.aosContracts.update(updateAoContract, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOneAndUpdate({date_entered: dateEntered}, {$set: updateAoContract}, {new: true});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractByDateModified(dateModified, updateAoContract) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({where: { date_modified: dateModified }});
    			if (objAoContract) {
    				objAoContract = await models.sequelize.aosContracts.update(updateAoContract, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOneAndUpdate({date_modified: dateModified}, {$set: updateAoContract}, {new: true});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractByStartDate(startDate, updateAoContract) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({where: { start_date: startDate }});
    			if (objAoContract) {
    				objAoContract = await models.sequelize.aosContracts.update(updateAoContract, { where: { start_date: startDate } });
    			}
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOneAndUpdate({start_date: startDate}, {$set: updateAoContract}, {new: true});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractByEndDate(endDate, updateAoContract) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({where: { end_date: endDate }});
    			if (objAoContract) {
    				objAoContract = await models.sequelize.aosContracts.update(updateAoContract, { where: { end_date: endDate } });
    			}
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOneAndUpdate({end_date: endDate}, {$set: updateAoContract}, {new: true});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractByCustomerSignedDate(customerSignedDate, updateAoContract) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({where: { customer_signed_date: customerSignedDate }});
    			if (objAoContract) {
    				objAoContract = await models.sequelize.aosContracts.update(updateAoContract, { where: { customer_signed_date: customerSignedDate } });
    			}
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOneAndUpdate({customer_signed_date: customerSignedDate}, {$set: updateAoContract}, {new: true});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractByCompanySignedDate(companySignedDate, updateAoContract) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({where: { company_signed_date: companySignedDate }});
    			if (objAoContract) {
    				objAoContract = await models.sequelize.aosContracts.update(updateAoContract, { where: { company_signed_date: companySignedDate } });
    			}
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOneAndUpdate({company_signed_date: companySignedDate}, {$set: updateAoContract}, {new: true});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractByRenewalReminderDate(renewalReminderDate, updateAoContract) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({where: { renewal_reminder_date: renewalReminderDate }});
    			if (objAoContract) {
    				objAoContract = await models.sequelize.aosContracts.update(updateAoContract, { where: { renewal_reminder_date: renewalReminderDate } });
    			}
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOneAndUpdate({renewal_reminder_date: renewalReminderDate}, {$set: updateAoContract}, {new: true});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractByModifiedUserId(modifiedUserId, updateAoContract) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objAoContract) {
    				objAoContract = await models.sequelize.aosContracts.update(updateAoContract, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateAoContract}, {new: true});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractByCreatedBy(createdBy, updateAoContract) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({where: { created_by: createdBy }});
    			if (objAoContract) {
    				objAoContract = await models.sequelize.aosContracts.update(updateAoContract, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOneAndUpdate({created_by: createdBy}, {$set: updateAoContract}, {new: true});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractByAssignedUserId(assignedUserId, updateAoContract) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objAoContract) {
    				objAoContract = await models.sequelize.aosContracts.update(updateAoContract, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateAoContract}, {new: true});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractByCurrencyId(currencyId, updateAoContract) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({where: { currency_id: currencyId }});
    			if (objAoContract) {
    				objAoContract = await models.sequelize.aosContracts.update(updateAoContract, { where: { currency_id: currencyId } });
    			}
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOneAndUpdate({currency_id: currencyId}, {$set: updateAoContract}, {new: true});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractByContractAccountId(contractAccountId, updateAoContract) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({where: { contract_account_id: contractAccountId }});
    			if (objAoContract) {
    				objAoContract = await models.sequelize.aosContracts.update(updateAoContract, { where: { contract_account_id: contractAccountId } });
    			}
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOneAndUpdate({contract_account_id: contractAccountId}, {$set: updateAoContract}, {new: true});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractByOpportunityId(opportunityId, updateAoContract) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({where: { opportunity_id: opportunityId }});
    			if (objAoContract) {
    				objAoContract = await models.sequelize.aosContracts.update(updateAoContract, { where: { opportunity_id: opportunityId } });
    			}
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOneAndUpdate({opportunity_id: opportunityId}, {$set: updateAoContract}, {new: true});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractByContactId(contactId, updateAoContract) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({where: { contact_id: contactId }});
    			if (objAoContract) {
    				objAoContract = await models.sequelize.aosContracts.update(updateAoContract, { where: { contact_id: contactId } });
    			}
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOneAndUpdate({contact_id: contactId}, {$set: updateAoContract}, {new: true});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractByCallId(callId, updateAoContract) {
    	try {
    		let objAoContract;
    		if(sql) {
    			objAoContract = await models.sequelize.aosContracts.findOne({where: { call_id: callId }});
    			if (objAoContract) {
    				objAoContract = await models.sequelize.aosContracts.update(updateAoContract, { where: { call_id: callId } });
    			}
    		} else {
    			objAoContract = await models.mongoose.aosContracts.findOneAndUpdate({call_id: callId}, {$set: updateAoContract}, {new: true});
    		}
    		return objAoContract;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AoContractService;
//</es-section>
