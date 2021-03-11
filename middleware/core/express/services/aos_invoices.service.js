/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:10 GMT-0400 (Bolivia Time)
 * Time: 14:56:10
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:10 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:10
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

class AoInvoiceService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAosInvoices(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aosInvoices.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aosInvoices.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAosInvoices(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aosInvoices.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aosInvoices.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAoInvoice(newAoInvoice) {
		try {
			let objAoInvoice;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aosInvoices.primaryKeys.id.type.toString())) {
			    newAoInvoice.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAoInvoice = await models.sequelize.aosInvoices.create(newAoInvoice);
			} else {
				objAoInvoice = new models.mongoose.aosInvoices(newAoInvoice);
				await objAoInvoice.save();
			}
			return objAoInvoice;
		} catch (error) {
			throw error;
		}
	}

	static async updateAoInvoice(id, updateAoInvoice) {
		try {
			let objAoInvoice;
			if(sql) {
				objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { id: util.Char(id) }});
				if (objAoInvoice) {
					await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { id: util.Char(id) } });
					objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAoInvoice._id;
				objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({id:id}, {$set: updateAoInvoice}, {new: true});
			}
			return objAoInvoice;
		} catch (error) {
			throw error;
		}
	}

	static async getAAoInvoice(id, query) {
		try {
			let objAoInvoice;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAoInvoice = await models.sequelize.aosInvoices.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAoInvoice = await models.mongoose.aosInvoices.find({id:util.Char(id)}).select(query.select);
			}
			return objAoInvoice;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAoInvoice(id) {
		try {
			let objAoInvoice;
			if(sql) {
				objAoInvoice = await models.sequelize.aosInvoices.findOne({ where: { id: util.Char(id) } });
				if (objAoInvoice) {
					await models.sequelize.aosInvoices.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAoInvoice = await models.mongoose.aosInvoices.deleteOne({id:util.Char(id)});
			}
			return objAoInvoice;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({id: id});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({deleted: deleted});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByNumber(number, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { number: number },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({number: number});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByQuoteNumber(quoteNumber, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { quote_number: quoteNumber },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({quote_number: quoteNumber});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTotalAmt(totalAmt, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { total_amt: totalAmt },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({total_amt: totalAmt});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTotalAmtUsdollar(totalAmtUsdollar, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { total_amt_usdollar: totalAmtUsdollar },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({total_amt_usdollar: totalAmtUsdollar});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySubtotalAmount(subtotalAmount, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { subtotal_amount: subtotalAmount },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({subtotal_amount: subtotalAmount});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySubtotalAmountUsdollar(subtotalAmountUsdollar, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { subtotal_amount_usdollar: subtotalAmountUsdollar },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({subtotal_amount_usdollar: subtotalAmountUsdollar});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDiscountAmount(discountAmount, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { discount_amount: discountAmount },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({discount_amount: discountAmount});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDiscountAmountUsdollar(discountAmountUsdollar, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { discount_amount_usdollar: discountAmountUsdollar },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({discount_amount_usdollar: discountAmountUsdollar});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTaxAmount(taxAmount, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { tax_amount: taxAmount },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({tax_amount: taxAmount});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTaxAmountUsdollar(taxAmountUsdollar, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { tax_amount_usdollar: taxAmountUsdollar },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({tax_amount_usdollar: taxAmountUsdollar});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByShippingAmount(shippingAmount, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { shipping_amount: shippingAmount },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({shipping_amount: shippingAmount});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByShippingAmountUsdollar(shippingAmountUsdollar, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { shipping_amount_usdollar: shippingAmountUsdollar },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({shipping_amount_usdollar: shippingAmountUsdollar});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByShippingTaxAmt(shippingTaxAmt, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { shipping_tax_amt: shippingTaxAmt },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({shipping_tax_amt: shippingTaxAmt});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByShippingTaxAmtUsdollar(shippingTaxAmtUsdollar, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { shipping_tax_amt_usdollar: shippingTaxAmtUsdollar },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({shipping_tax_amt_usdollar: shippingTaxAmtUsdollar});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTotalAmount(totalAmount, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { total_amount: totalAmount },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({total_amount: totalAmount});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTotalAmountUsdollar(totalAmountUsdollar, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { total_amount_usdollar: totalAmountUsdollar },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({total_amount_usdollar: totalAmountUsdollar});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySubtotalTaxAmount(subtotalTaxAmount, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { subtotal_tax_amount: subtotalTaxAmount },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({subtotal_tax_amount: subtotalTaxAmount});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySubtotalTaxAmountUsdollar(subtotalTaxAmountUsdollar, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { subtotal_tax_amount_usdollar: subtotalTaxAmountUsdollar },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({subtotal_tax_amount_usdollar: subtotalTaxAmountUsdollar});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({name: name});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBillingAddressStreet(billingAddressStreet, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { billing_address_street: billingAddressStreet },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({billing_address_street: billingAddressStreet});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBillingAddressCity(billingAddressCity, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { billing_address_city: billingAddressCity },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({billing_address_city: billingAddressCity});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBillingAddressState(billingAddressState, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { billing_address_state: billingAddressState },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({billing_address_state: billingAddressState});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBillingAddressPostalcode(billingAddressPostalcode, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { billing_address_postalcode: billingAddressPostalcode },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({billing_address_postalcode: billingAddressPostalcode});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBillingAddressCountry(billingAddressCountry, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { billing_address_country: billingAddressCountry },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({billing_address_country: billingAddressCountry});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByShippingAddressStreet(shippingAddressStreet, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { shipping_address_street: shippingAddressStreet },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({shipping_address_street: shippingAddressStreet});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByShippingAddressCity(shippingAddressCity, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { shipping_address_city: shippingAddressCity },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({shipping_address_city: shippingAddressCity});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByShippingAddressState(shippingAddressState, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { shipping_address_state: shippingAddressState },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({shipping_address_state: shippingAddressState});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByShippingAddressPostalcode(shippingAddressPostalcode, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { shipping_address_postalcode: shippingAddressPostalcode },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({shipping_address_postalcode: shippingAddressPostalcode});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByShippingAddressCountry(shippingAddressCountry, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { shipping_address_country: shippingAddressCountry },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({shipping_address_country: shippingAddressCountry});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByShippingTax(shippingTax, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { shipping_tax: shippingTax },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({shipping_tax: shippingTax});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByStatus(status, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { status: status },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({status: status});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({description: description});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTemplateDdownC(templateDdownC, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { template_ddown_c: templateDdownC },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({template_ddown_c: templateDdownC});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({date_entered: dateEntered});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({date_modified: dateModified});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByQuoteDate(quoteDate, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { quote_date: quoteDate },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({quote_date: quoteDate});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByInvoiceDate(invoiceDate, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { invoice_date: invoiceDate },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({invoice_date: invoiceDate});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDueDate(dueDate, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { due_date: dueDate },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({due_date: dueDate});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({modified_user_id: modifiedUserId});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({created_by: createdBy});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({assigned_user_id: assignedUserId});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBillingAccountId(billingAccountId, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { billing_account_id: billingAccountId },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({billing_account_id: billingAccountId});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBillingContactId(billingContactId, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { billing_contact_id: billingContactId },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({billing_contact_id: billingContactId});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCurrencyId(currencyId, query = {}) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { currency_id: currencyId },
    			});
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOne({currency_id: currencyId});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAoInvoiceById(id, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { id: id }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { id: id } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({id: id}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceByDeleted(deleted, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { deleted: deleted }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { deleted: deleted } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({deleted: deleted}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceByNumber(number, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { number: number }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { number: number } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({number: number}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceByQuoteNumber(quoteNumber, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { quote_number: quoteNumber }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { quote_number: quoteNumber } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({quote_number: quoteNumber}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceByTotalAmt(totalAmt, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { total_amt: totalAmt }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { total_amt: totalAmt } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({total_amt: totalAmt}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceByTotalAmtUsdollar(totalAmtUsdollar, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { total_amt_usdollar: totalAmtUsdollar }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { total_amt_usdollar: totalAmtUsdollar } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({total_amt_usdollar: totalAmtUsdollar}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceBySubtotalAmount(subtotalAmount, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { subtotal_amount: subtotalAmount }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { subtotal_amount: subtotalAmount } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({subtotal_amount: subtotalAmount}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceBySubtotalAmountUsdollar(subtotalAmountUsdollar, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { subtotal_amount_usdollar: subtotalAmountUsdollar }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { subtotal_amount_usdollar: subtotalAmountUsdollar } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({subtotal_amount_usdollar: subtotalAmountUsdollar}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceByDiscountAmount(discountAmount, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { discount_amount: discountAmount }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { discount_amount: discountAmount } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({discount_amount: discountAmount}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceByDiscountAmountUsdollar(discountAmountUsdollar, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { discount_amount_usdollar: discountAmountUsdollar }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { discount_amount_usdollar: discountAmountUsdollar } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({discount_amount_usdollar: discountAmountUsdollar}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceByTaxAmount(taxAmount, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { tax_amount: taxAmount }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { tax_amount: taxAmount } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({tax_amount: taxAmount}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceByTaxAmountUsdollar(taxAmountUsdollar, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { tax_amount_usdollar: taxAmountUsdollar }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { tax_amount_usdollar: taxAmountUsdollar } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({tax_amount_usdollar: taxAmountUsdollar}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceByShippingAmount(shippingAmount, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { shipping_amount: shippingAmount }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { shipping_amount: shippingAmount } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({shipping_amount: shippingAmount}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceByShippingAmountUsdollar(shippingAmountUsdollar, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { shipping_amount_usdollar: shippingAmountUsdollar }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { shipping_amount_usdollar: shippingAmountUsdollar } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({shipping_amount_usdollar: shippingAmountUsdollar}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceByShippingTaxAmt(shippingTaxAmt, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { shipping_tax_amt: shippingTaxAmt }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { shipping_tax_amt: shippingTaxAmt } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({shipping_tax_amt: shippingTaxAmt}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceByShippingTaxAmtUsdollar(shippingTaxAmtUsdollar, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { shipping_tax_amt_usdollar: shippingTaxAmtUsdollar }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { shipping_tax_amt_usdollar: shippingTaxAmtUsdollar } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({shipping_tax_amt_usdollar: shippingTaxAmtUsdollar}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceByTotalAmount(totalAmount, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { total_amount: totalAmount }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { total_amount: totalAmount } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({total_amount: totalAmount}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceByTotalAmountUsdollar(totalAmountUsdollar, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { total_amount_usdollar: totalAmountUsdollar }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { total_amount_usdollar: totalAmountUsdollar } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({total_amount_usdollar: totalAmountUsdollar}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceBySubtotalTaxAmount(subtotalTaxAmount, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { subtotal_tax_amount: subtotalTaxAmount }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { subtotal_tax_amount: subtotalTaxAmount } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({subtotal_tax_amount: subtotalTaxAmount}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceBySubtotalTaxAmountUsdollar(subtotalTaxAmountUsdollar, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { subtotal_tax_amount_usdollar: subtotalTaxAmountUsdollar }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { subtotal_tax_amount_usdollar: subtotalTaxAmountUsdollar } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({subtotal_tax_amount_usdollar: subtotalTaxAmountUsdollar}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceByName(name, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { name: name }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { name: name } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({name: name}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceByBillingAddressStreet(billingAddressStreet, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { billing_address_street: billingAddressStreet }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { billing_address_street: billingAddressStreet } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({billing_address_street: billingAddressStreet}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceByBillingAddressCity(billingAddressCity, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { billing_address_city: billingAddressCity }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { billing_address_city: billingAddressCity } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({billing_address_city: billingAddressCity}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceByBillingAddressState(billingAddressState, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { billing_address_state: billingAddressState }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { billing_address_state: billingAddressState } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({billing_address_state: billingAddressState}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceByBillingAddressPostalcode(billingAddressPostalcode, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { billing_address_postalcode: billingAddressPostalcode }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { billing_address_postalcode: billingAddressPostalcode } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({billing_address_postalcode: billingAddressPostalcode}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceByBillingAddressCountry(billingAddressCountry, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { billing_address_country: billingAddressCountry }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { billing_address_country: billingAddressCountry } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({billing_address_country: billingAddressCountry}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceByShippingAddressStreet(shippingAddressStreet, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { shipping_address_street: shippingAddressStreet }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { shipping_address_street: shippingAddressStreet } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({shipping_address_street: shippingAddressStreet}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceByShippingAddressCity(shippingAddressCity, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { shipping_address_city: shippingAddressCity }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { shipping_address_city: shippingAddressCity } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({shipping_address_city: shippingAddressCity}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceByShippingAddressState(shippingAddressState, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { shipping_address_state: shippingAddressState }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { shipping_address_state: shippingAddressState } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({shipping_address_state: shippingAddressState}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceByShippingAddressPostalcode(shippingAddressPostalcode, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { shipping_address_postalcode: shippingAddressPostalcode }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { shipping_address_postalcode: shippingAddressPostalcode } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({shipping_address_postalcode: shippingAddressPostalcode}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceByShippingAddressCountry(shippingAddressCountry, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { shipping_address_country: shippingAddressCountry }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { shipping_address_country: shippingAddressCountry } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({shipping_address_country: shippingAddressCountry}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceByShippingTax(shippingTax, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { shipping_tax: shippingTax }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { shipping_tax: shippingTax } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({shipping_tax: shippingTax}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceByStatus(status, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { status: status }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { status: status } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({status: status}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceByDescription(description, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { description: description }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { description: description } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({description: description}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceByTemplateDdownC(templateDdownC, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { template_ddown_c: templateDdownC }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { template_ddown_c: templateDdownC } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({template_ddown_c: templateDdownC}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceByDateEntered(dateEntered, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { date_entered: dateEntered }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({date_entered: dateEntered}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceByDateModified(dateModified, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { date_modified: dateModified }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({date_modified: dateModified}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceByQuoteDate(quoteDate, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { quote_date: quoteDate }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { quote_date: quoteDate } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({quote_date: quoteDate}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceByInvoiceDate(invoiceDate, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { invoice_date: invoiceDate }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { invoice_date: invoiceDate } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({invoice_date: invoiceDate}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceByDueDate(dueDate, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { due_date: dueDate }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { due_date: dueDate } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({due_date: dueDate}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceByModifiedUserId(modifiedUserId, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceByCreatedBy(createdBy, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { created_by: createdBy }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({created_by: createdBy}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceByAssignedUserId(assignedUserId, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceByBillingAccountId(billingAccountId, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { billing_account_id: billingAccountId }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { billing_account_id: billingAccountId } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({billing_account_id: billingAccountId}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceByBillingContactId(billingContactId, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { billing_contact_id: billingContactId }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { billing_contact_id: billingContactId } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({billing_contact_id: billingContactId}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceByCurrencyId(currencyId, updateAoInvoice) {
    	try {
    		let objAoInvoice;
    		if(sql) {
    			objAoInvoice = await models.sequelize.aosInvoices.findOne({where: { currency_id: currencyId }});
    			if (objAoInvoice) {
    				objAoInvoice = await models.sequelize.aosInvoices.update(updateAoInvoice, { where: { currency_id: currencyId } });
    			}
    		} else {
    			objAoInvoice = await models.mongoose.aosInvoices.findOneAndUpdate({currency_id: currencyId}, {$set: updateAoInvoice}, {new: true});
    		}
    		return objAoInvoice;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AoInvoiceService;
//</es-section>
