/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:20 GMT-0400 (Bolivia Time)
 * Time: 14:56:20
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:20 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:20
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

class AoQuoteService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAosQuotes(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aosQuotes.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aosQuotes.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAosQuotes(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aosQuotes.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aosQuotes.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAoQuote(newAoQuote) {
		try {
			let objAoQuote;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aosQuotes.primaryKeys.id.type.toString())) {
			    newAoQuote.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAoQuote = await models.sequelize.aosQuotes.create(newAoQuote);
			} else {
				objAoQuote = new models.mongoose.aosQuotes(newAoQuote);
				await objAoQuote.save();
			}
			return objAoQuote;
		} catch (error) {
			throw error;
		}
	}

	static async updateAoQuote(id, updateAoQuote) {
		try {
			let objAoQuote;
			if(sql) {
				objAoQuote = await models.sequelize.aosQuotes.findOne({where: { id: util.Char(id) }});
				if (objAoQuote) {
					await models.sequelize.aosQuotes.update(updateAoQuote, { where: { id: util.Char(id) } });
					objAoQuote = await models.sequelize.aosQuotes.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAoQuote._id;
				objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({id:id}, {$set: updateAoQuote}, {new: true});
			}
			return objAoQuote;
		} catch (error) {
			throw error;
		}
	}

	static async getAAoQuote(id, query) {
		try {
			let objAoQuote;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAoQuote = await models.sequelize.aosQuotes.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAoQuote = await models.mongoose.aosQuotes.find({id:util.Char(id)}).select(query.select);
			}
			return objAoQuote;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAoQuote(id) {
		try {
			let objAoQuote;
			if(sql) {
				objAoQuote = await models.sequelize.aosQuotes.findOne({ where: { id: util.Char(id) } });
				if (objAoQuote) {
					await models.sequelize.aosQuotes.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAoQuote = await models.mongoose.aosQuotes.deleteOne({id:util.Char(id)});
			}
			return objAoQuote;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({id: id});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({deleted: deleted});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByNumber(number, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { number: number },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({number: number});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTotalAmt(totalAmt, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { total_amt: totalAmt },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({total_amt: totalAmt});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTotalAmtUsdollar(totalAmtUsdollar, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { total_amt_usdollar: totalAmtUsdollar },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({total_amt_usdollar: totalAmtUsdollar});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySubtotalAmount(subtotalAmount, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { subtotal_amount: subtotalAmount },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({subtotal_amount: subtotalAmount});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySubtotalAmountUsdollar(subtotalAmountUsdollar, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { subtotal_amount_usdollar: subtotalAmountUsdollar },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({subtotal_amount_usdollar: subtotalAmountUsdollar});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDiscountAmount(discountAmount, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { discount_amount: discountAmount },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({discount_amount: discountAmount});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDiscountAmountUsdollar(discountAmountUsdollar, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { discount_amount_usdollar: discountAmountUsdollar },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({discount_amount_usdollar: discountAmountUsdollar});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTaxAmount(taxAmount, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { tax_amount: taxAmount },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({tax_amount: taxAmount});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTaxAmountUsdollar(taxAmountUsdollar, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { tax_amount_usdollar: taxAmountUsdollar },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({tax_amount_usdollar: taxAmountUsdollar});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByShippingAmount(shippingAmount, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { shipping_amount: shippingAmount },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({shipping_amount: shippingAmount});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByShippingAmountUsdollar(shippingAmountUsdollar, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { shipping_amount_usdollar: shippingAmountUsdollar },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({shipping_amount_usdollar: shippingAmountUsdollar});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByShippingTaxAmt(shippingTaxAmt, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { shipping_tax_amt: shippingTaxAmt },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({shipping_tax_amt: shippingTaxAmt});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByShippingTaxAmtUsdollar(shippingTaxAmtUsdollar, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { shipping_tax_amt_usdollar: shippingTaxAmtUsdollar },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({shipping_tax_amt_usdollar: shippingTaxAmtUsdollar});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTotalAmount(totalAmount, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { total_amount: totalAmount },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({total_amount: totalAmount});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTotalAmountUsdollar(totalAmountUsdollar, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { total_amount_usdollar: totalAmountUsdollar },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({total_amount_usdollar: totalAmountUsdollar});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySubtotalTaxAmount(subtotalTaxAmount, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { subtotal_tax_amount: subtotalTaxAmount },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({subtotal_tax_amount: subtotalTaxAmount});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySubtotalTaxAmountUsdollar(subtotalTaxAmountUsdollar, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { subtotal_tax_amount_usdollar: subtotalTaxAmountUsdollar },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({subtotal_tax_amount_usdollar: subtotalTaxAmountUsdollar});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({name: name});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBillingAddressStreet(billingAddressStreet, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { billing_address_street: billingAddressStreet },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({billing_address_street: billingAddressStreet});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBillingAddressCity(billingAddressCity, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { billing_address_city: billingAddressCity },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({billing_address_city: billingAddressCity});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBillingAddressState(billingAddressState, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { billing_address_state: billingAddressState },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({billing_address_state: billingAddressState});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBillingAddressPostalcode(billingAddressPostalcode, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { billing_address_postalcode: billingAddressPostalcode },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({billing_address_postalcode: billingAddressPostalcode});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBillingAddressCountry(billingAddressCountry, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { billing_address_country: billingAddressCountry },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({billing_address_country: billingAddressCountry});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByShippingAddressStreet(shippingAddressStreet, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { shipping_address_street: shippingAddressStreet },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({shipping_address_street: shippingAddressStreet});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByShippingAddressCity(shippingAddressCity, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { shipping_address_city: shippingAddressCity },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({shipping_address_city: shippingAddressCity});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByShippingAddressState(shippingAddressState, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { shipping_address_state: shippingAddressState },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({shipping_address_state: shippingAddressState});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByShippingAddressPostalcode(shippingAddressPostalcode, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { shipping_address_postalcode: shippingAddressPostalcode },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({shipping_address_postalcode: shippingAddressPostalcode});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByShippingAddressCountry(shippingAddressCountry, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { shipping_address_country: shippingAddressCountry },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({shipping_address_country: shippingAddressCountry});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByShippingTax(shippingTax, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { shipping_tax: shippingTax },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({shipping_tax: shippingTax});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByStage(stage, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { stage: stage },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({stage: stage});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTerm(term, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { term: term },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({term: term});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByApprovalStatus(approvalStatus, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { approval_status: approvalStatus },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({approval_status: approvalStatus});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByInvoiceStatus(invoiceStatus, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { invoice_status: invoiceStatus },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({invoice_status: invoiceStatus});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({description: description});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByApprovalIssue(approvalIssue, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { approval_issue: approvalIssue },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({approval_issue: approvalIssue});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTemplateDdownC(templateDdownC, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { template_ddown_c: templateDdownC },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({template_ddown_c: templateDdownC});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTermsC(termsC, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { terms_c: termsC },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({terms_c: termsC});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({date_entered: dateEntered});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({date_modified: dateModified});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByExpiration(expiration, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { expiration: expiration },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({expiration: expiration});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({modified_user_id: modifiedUserId});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({created_by: createdBy});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({assigned_user_id: assignedUserId});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBillingAccountId(billingAccountId, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { billing_account_id: billingAccountId },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({billing_account_id: billingAccountId});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBillingContactId(billingContactId, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { billing_contact_id: billingContactId },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({billing_contact_id: billingContactId});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByOpportunityId(opportunityId, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { opportunity_id: opportunityId },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({opportunity_id: opportunityId});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCurrencyId(currencyId, query = {}) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { currency_id: currencyId },
    			});
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOne({currency_id: currencyId});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAoQuoteById(id, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { id: id }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { id: id } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({id: id}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByDeleted(deleted, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { deleted: deleted }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { deleted: deleted } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({deleted: deleted}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByNumber(number, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { number: number }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { number: number } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({number: number}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByTotalAmt(totalAmt, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { total_amt: totalAmt }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { total_amt: totalAmt } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({total_amt: totalAmt}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByTotalAmtUsdollar(totalAmtUsdollar, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { total_amt_usdollar: totalAmtUsdollar }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { total_amt_usdollar: totalAmtUsdollar } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({total_amt_usdollar: totalAmtUsdollar}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteBySubtotalAmount(subtotalAmount, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { subtotal_amount: subtotalAmount }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { subtotal_amount: subtotalAmount } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({subtotal_amount: subtotalAmount}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteBySubtotalAmountUsdollar(subtotalAmountUsdollar, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { subtotal_amount_usdollar: subtotalAmountUsdollar }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { subtotal_amount_usdollar: subtotalAmountUsdollar } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({subtotal_amount_usdollar: subtotalAmountUsdollar}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByDiscountAmount(discountAmount, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { discount_amount: discountAmount }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { discount_amount: discountAmount } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({discount_amount: discountAmount}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByDiscountAmountUsdollar(discountAmountUsdollar, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { discount_amount_usdollar: discountAmountUsdollar }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { discount_amount_usdollar: discountAmountUsdollar } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({discount_amount_usdollar: discountAmountUsdollar}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByTaxAmount(taxAmount, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { tax_amount: taxAmount }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { tax_amount: taxAmount } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({tax_amount: taxAmount}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByTaxAmountUsdollar(taxAmountUsdollar, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { tax_amount_usdollar: taxAmountUsdollar }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { tax_amount_usdollar: taxAmountUsdollar } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({tax_amount_usdollar: taxAmountUsdollar}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByShippingAmount(shippingAmount, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { shipping_amount: shippingAmount }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { shipping_amount: shippingAmount } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({shipping_amount: shippingAmount}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByShippingAmountUsdollar(shippingAmountUsdollar, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { shipping_amount_usdollar: shippingAmountUsdollar }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { shipping_amount_usdollar: shippingAmountUsdollar } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({shipping_amount_usdollar: shippingAmountUsdollar}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByShippingTaxAmt(shippingTaxAmt, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { shipping_tax_amt: shippingTaxAmt }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { shipping_tax_amt: shippingTaxAmt } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({shipping_tax_amt: shippingTaxAmt}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByShippingTaxAmtUsdollar(shippingTaxAmtUsdollar, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { shipping_tax_amt_usdollar: shippingTaxAmtUsdollar }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { shipping_tax_amt_usdollar: shippingTaxAmtUsdollar } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({shipping_tax_amt_usdollar: shippingTaxAmtUsdollar}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByTotalAmount(totalAmount, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { total_amount: totalAmount }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { total_amount: totalAmount } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({total_amount: totalAmount}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByTotalAmountUsdollar(totalAmountUsdollar, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { total_amount_usdollar: totalAmountUsdollar }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { total_amount_usdollar: totalAmountUsdollar } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({total_amount_usdollar: totalAmountUsdollar}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteBySubtotalTaxAmount(subtotalTaxAmount, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { subtotal_tax_amount: subtotalTaxAmount }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { subtotal_tax_amount: subtotalTaxAmount } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({subtotal_tax_amount: subtotalTaxAmount}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteBySubtotalTaxAmountUsdollar(subtotalTaxAmountUsdollar, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { subtotal_tax_amount_usdollar: subtotalTaxAmountUsdollar }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { subtotal_tax_amount_usdollar: subtotalTaxAmountUsdollar } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({subtotal_tax_amount_usdollar: subtotalTaxAmountUsdollar}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByName(name, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { name: name }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { name: name } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({name: name}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByBillingAddressStreet(billingAddressStreet, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { billing_address_street: billingAddressStreet }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { billing_address_street: billingAddressStreet } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({billing_address_street: billingAddressStreet}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByBillingAddressCity(billingAddressCity, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { billing_address_city: billingAddressCity }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { billing_address_city: billingAddressCity } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({billing_address_city: billingAddressCity}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByBillingAddressState(billingAddressState, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { billing_address_state: billingAddressState }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { billing_address_state: billingAddressState } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({billing_address_state: billingAddressState}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByBillingAddressPostalcode(billingAddressPostalcode, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { billing_address_postalcode: billingAddressPostalcode }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { billing_address_postalcode: billingAddressPostalcode } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({billing_address_postalcode: billingAddressPostalcode}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByBillingAddressCountry(billingAddressCountry, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { billing_address_country: billingAddressCountry }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { billing_address_country: billingAddressCountry } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({billing_address_country: billingAddressCountry}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByShippingAddressStreet(shippingAddressStreet, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { shipping_address_street: shippingAddressStreet }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { shipping_address_street: shippingAddressStreet } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({shipping_address_street: shippingAddressStreet}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByShippingAddressCity(shippingAddressCity, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { shipping_address_city: shippingAddressCity }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { shipping_address_city: shippingAddressCity } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({shipping_address_city: shippingAddressCity}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByShippingAddressState(shippingAddressState, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { shipping_address_state: shippingAddressState }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { shipping_address_state: shippingAddressState } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({shipping_address_state: shippingAddressState}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByShippingAddressPostalcode(shippingAddressPostalcode, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { shipping_address_postalcode: shippingAddressPostalcode }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { shipping_address_postalcode: shippingAddressPostalcode } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({shipping_address_postalcode: shippingAddressPostalcode}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByShippingAddressCountry(shippingAddressCountry, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { shipping_address_country: shippingAddressCountry }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { shipping_address_country: shippingAddressCountry } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({shipping_address_country: shippingAddressCountry}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByShippingTax(shippingTax, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { shipping_tax: shippingTax }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { shipping_tax: shippingTax } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({shipping_tax: shippingTax}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByStage(stage, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { stage: stage }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { stage: stage } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({stage: stage}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByTerm(term, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { term: term }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { term: term } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({term: term}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByApprovalStatus(approvalStatus, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { approval_status: approvalStatus }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { approval_status: approvalStatus } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({approval_status: approvalStatus}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByInvoiceStatus(invoiceStatus, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { invoice_status: invoiceStatus }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { invoice_status: invoiceStatus } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({invoice_status: invoiceStatus}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByDescription(description, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { description: description }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { description: description } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({description: description}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByApprovalIssue(approvalIssue, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { approval_issue: approvalIssue }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { approval_issue: approvalIssue } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({approval_issue: approvalIssue}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByTemplateDdownC(templateDdownC, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { template_ddown_c: templateDdownC }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { template_ddown_c: templateDdownC } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({template_ddown_c: templateDdownC}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByTermsC(termsC, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { terms_c: termsC }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { terms_c: termsC } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({terms_c: termsC}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByDateEntered(dateEntered, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { date_entered: dateEntered }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({date_entered: dateEntered}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByDateModified(dateModified, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { date_modified: dateModified }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({date_modified: dateModified}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByExpiration(expiration, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { expiration: expiration }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { expiration: expiration } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({expiration: expiration}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByModifiedUserId(modifiedUserId, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByCreatedBy(createdBy, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { created_by: createdBy }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({created_by: createdBy}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByAssignedUserId(assignedUserId, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByBillingAccountId(billingAccountId, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { billing_account_id: billingAccountId }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { billing_account_id: billingAccountId } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({billing_account_id: billingAccountId}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByBillingContactId(billingContactId, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { billing_contact_id: billingContactId }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { billing_contact_id: billingContactId } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({billing_contact_id: billingContactId}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByOpportunityId(opportunityId, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { opportunity_id: opportunityId }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { opportunity_id: opportunityId } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({opportunity_id: opportunityId}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteByCurrencyId(currencyId, updateAoQuote) {
    	try {
    		let objAoQuote;
    		if(sql) {
    			objAoQuote = await models.sequelize.aosQuotes.findOne({where: { currency_id: currencyId }});
    			if (objAoQuote) {
    				objAoQuote = await models.sequelize.aosQuotes.update(updateAoQuote, { where: { currency_id: currencyId } });
    			}
    		} else {
    			objAoQuote = await models.mongoose.aosQuotes.findOneAndUpdate({currency_id: currencyId}, {$set: updateAoQuote}, {new: true});
    		}
    		return objAoQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AoQuoteService;
//</es-section>
