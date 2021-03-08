/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:28 GMT-0400 (Bolivia Time)
 * Time: 15:35:28
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:28 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:28
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

class AoProductQuoteService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAosProductsQuotes(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aosProductsQuotes.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aosProductsQuotes.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAosProductsQuotes(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aosProductsQuotes.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aosProductsQuotes.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAoProductQuote(newAoProductQuote) {
		try {
			let objAoProductQuote;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aosProductsQuotes.primaryKeys.id.type.toString())) {
			    newAoProductQuote.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAoProductQuote = await models.sequelize.aosProductsQuotes.create(newAoProductQuote);
			} else {
				objAoProductQuote = new models.mongoose.aosProductsQuotes(newAoProductQuote);
				await objAoProductQuote.save();
			}
			return objAoProductQuote;
		} catch (error) {
			throw error;
		}
	}

	static async updateAoProductQuote(id, updateAoProductQuote) {
		try {
			let objAoProductQuote;
			if(sql) {
				objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({where: { id: util.Char(id) }});
				if (objAoProductQuote) {
					await models.sequelize.aosProductsQuotes.update(updateAoProductQuote, { where: { id: util.Char(id) } });
					objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAoProductQuote._id;
				objAoProductQuote = await models.mongoose.aosProductsQuotes.findOneAndUpdate({id:id}, {$set: updateAoProductQuote}, {new: true});
			}
			return objAoProductQuote;
		} catch (error) {
			throw error;
		}
	}

	static async getAAoProductQuote(id, query) {
		try {
			let objAoProductQuote;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAoProductQuote = await models.mongoose.aosProductsQuotes.find({id:util.Char(id)}).select(query.select);
			}
			return objAoProductQuote;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAoProductQuote(id) {
		try {
			let objAoProductQuote;
			if(sql) {
				objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({ where: { id: util.Char(id) } });
				if (objAoProductQuote) {
					await models.sequelize.aosProductsQuotes.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAoProductQuote = await models.mongoose.aosProductsQuotes.deleteOne({id:util.Char(id)});
			}
			return objAoProductQuote;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOne({id: id});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOne({deleted: deleted});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByNumber(number, query = {}) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { number: number },
    			});
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOne({number: number});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByProductQty(productQty, query = {}) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { product_qty: productQty },
    			});
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOne({product_qty: productQty});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByProductCostPrice(productCostPrice, query = {}) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { product_cost_price: productCostPrice },
    			});
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOne({product_cost_price: productCostPrice});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByProductCostPriceUsdollar(productCostPriceUsdollar, query = {}) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { product_cost_price_usdollar: productCostPriceUsdollar },
    			});
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOne({product_cost_price_usdollar: productCostPriceUsdollar});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByProductListPrice(productListPrice, query = {}) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { product_list_price: productListPrice },
    			});
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOne({product_list_price: productListPrice});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByProductListPriceUsdollar(productListPriceUsdollar, query = {}) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { product_list_price_usdollar: productListPriceUsdollar },
    			});
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOne({product_list_price_usdollar: productListPriceUsdollar});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByProductDiscount(productDiscount, query = {}) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { product_discount: productDiscount },
    			});
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOne({product_discount: productDiscount});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByProductDiscountUsdollar(productDiscountUsdollar, query = {}) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { product_discount_usdollar: productDiscountUsdollar },
    			});
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOne({product_discount_usdollar: productDiscountUsdollar});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByProductDiscountAmount(productDiscountAmount, query = {}) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { product_discount_amount: productDiscountAmount },
    			});
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOne({product_discount_amount: productDiscountAmount});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByProductDiscountAmountUsdollar(productDiscountAmountUsdollar, query = {}) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { product_discount_amount_usdollar: productDiscountAmountUsdollar },
    			});
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOne({product_discount_amount_usdollar: productDiscountAmountUsdollar});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByProductUnitPrice(productUnitPrice, query = {}) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { product_unit_price: productUnitPrice },
    			});
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOne({product_unit_price: productUnitPrice});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByProductUnitPriceUsdollar(productUnitPriceUsdollar, query = {}) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { product_unit_price_usdollar: productUnitPriceUsdollar },
    			});
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOne({product_unit_price_usdollar: productUnitPriceUsdollar});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByVatAmt(vatAmt, query = {}) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { vat_amt: vatAmt },
    			});
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOne({vat_amt: vatAmt});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByVatAmtUsdollar(vatAmtUsdollar, query = {}) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { vat_amt_usdollar: vatAmtUsdollar },
    			});
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOne({vat_amt_usdollar: vatAmtUsdollar});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByProductTotalPrice(productTotalPrice, query = {}) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { product_total_price: productTotalPrice },
    			});
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOne({product_total_price: productTotalPrice});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByProductTotalPriceUsdollar(productTotalPriceUsdollar, query = {}) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { product_total_price_usdollar: productTotalPriceUsdollar },
    			});
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOne({product_total_price_usdollar: productTotalPriceUsdollar});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPartNumber(partNumber, query = {}) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { part_number: partNumber },
    			});
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOne({part_number: partNumber});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDiscount(discount, query = {}) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { discount: discount },
    			});
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOne({discount: discount});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByVat(vat, query = {}) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { vat: vat },
    			});
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOne({vat: vat});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentType(parentType, query = {}) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_type: parentType },
    			});
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOne({parent_type: parentType});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOne({name: name});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOne({description: description});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByItemDescription(itemDescription, query = {}) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { item_description: itemDescription },
    			});
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOne({item_description: itemDescription});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOne({date_entered: dateEntered});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOne({date_modified: dateModified});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOne({modified_user_id: modifiedUserId});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOne({created_by: createdBy});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOne({assigned_user_id: assignedUserId});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCurrencyId(currencyId, query = {}) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { currency_id: currencyId },
    			});
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOne({currency_id: currencyId});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOne({parent_id: parentId});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByProductId(productId, query = {}) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { product_id: productId },
    			});
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOne({product_id: productId});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByGroupId(groupId, query = {}) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { group_id: groupId },
    			});
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOne({group_id: groupId});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAoProductQuoteById(id, updateAoProductQuote) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({where: { id: id }});
    			if (objAoProductQuote) {
    				objAoProductQuote = await models.sequelize.aosProductsQuotes.update(updateAoProductQuote, { where: { id: id } });
    			}
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOneAndUpdate({id: id}, {$set: updateAoProductQuote}, {new: true});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteByDeleted(deleted, updateAoProductQuote) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({where: { deleted: deleted }});
    			if (objAoProductQuote) {
    				objAoProductQuote = await models.sequelize.aosProductsQuotes.update(updateAoProductQuote, { where: { deleted: deleted } });
    			}
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOneAndUpdate({deleted: deleted}, {$set: updateAoProductQuote}, {new: true});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteByNumber(number, updateAoProductQuote) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({where: { number: number }});
    			if (objAoProductQuote) {
    				objAoProductQuote = await models.sequelize.aosProductsQuotes.update(updateAoProductQuote, { where: { number: number } });
    			}
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOneAndUpdate({number: number}, {$set: updateAoProductQuote}, {new: true});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteByProductQty(productQty, updateAoProductQuote) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({where: { product_qty: productQty }});
    			if (objAoProductQuote) {
    				objAoProductQuote = await models.sequelize.aosProductsQuotes.update(updateAoProductQuote, { where: { product_qty: productQty } });
    			}
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOneAndUpdate({product_qty: productQty}, {$set: updateAoProductQuote}, {new: true});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteByProductCostPrice(productCostPrice, updateAoProductQuote) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({where: { product_cost_price: productCostPrice }});
    			if (objAoProductQuote) {
    				objAoProductQuote = await models.sequelize.aosProductsQuotes.update(updateAoProductQuote, { where: { product_cost_price: productCostPrice } });
    			}
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOneAndUpdate({product_cost_price: productCostPrice}, {$set: updateAoProductQuote}, {new: true});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteByProductCostPriceUsdollar(productCostPriceUsdollar, updateAoProductQuote) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({where: { product_cost_price_usdollar: productCostPriceUsdollar }});
    			if (objAoProductQuote) {
    				objAoProductQuote = await models.sequelize.aosProductsQuotes.update(updateAoProductQuote, { where: { product_cost_price_usdollar: productCostPriceUsdollar } });
    			}
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOneAndUpdate({product_cost_price_usdollar: productCostPriceUsdollar}, {$set: updateAoProductQuote}, {new: true});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteByProductListPrice(productListPrice, updateAoProductQuote) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({where: { product_list_price: productListPrice }});
    			if (objAoProductQuote) {
    				objAoProductQuote = await models.sequelize.aosProductsQuotes.update(updateAoProductQuote, { where: { product_list_price: productListPrice } });
    			}
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOneAndUpdate({product_list_price: productListPrice}, {$set: updateAoProductQuote}, {new: true});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteByProductListPriceUsdollar(productListPriceUsdollar, updateAoProductQuote) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({where: { product_list_price_usdollar: productListPriceUsdollar }});
    			if (objAoProductQuote) {
    				objAoProductQuote = await models.sequelize.aosProductsQuotes.update(updateAoProductQuote, { where: { product_list_price_usdollar: productListPriceUsdollar } });
    			}
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOneAndUpdate({product_list_price_usdollar: productListPriceUsdollar}, {$set: updateAoProductQuote}, {new: true});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteByProductDiscount(productDiscount, updateAoProductQuote) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({where: { product_discount: productDiscount }});
    			if (objAoProductQuote) {
    				objAoProductQuote = await models.sequelize.aosProductsQuotes.update(updateAoProductQuote, { where: { product_discount: productDiscount } });
    			}
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOneAndUpdate({product_discount: productDiscount}, {$set: updateAoProductQuote}, {new: true});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteByProductDiscountUsdollar(productDiscountUsdollar, updateAoProductQuote) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({where: { product_discount_usdollar: productDiscountUsdollar }});
    			if (objAoProductQuote) {
    				objAoProductQuote = await models.sequelize.aosProductsQuotes.update(updateAoProductQuote, { where: { product_discount_usdollar: productDiscountUsdollar } });
    			}
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOneAndUpdate({product_discount_usdollar: productDiscountUsdollar}, {$set: updateAoProductQuote}, {new: true});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteByProductDiscountAmount(productDiscountAmount, updateAoProductQuote) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({where: { product_discount_amount: productDiscountAmount }});
    			if (objAoProductQuote) {
    				objAoProductQuote = await models.sequelize.aosProductsQuotes.update(updateAoProductQuote, { where: { product_discount_amount: productDiscountAmount } });
    			}
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOneAndUpdate({product_discount_amount: productDiscountAmount}, {$set: updateAoProductQuote}, {new: true});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteByProductDiscountAmountUsdollar(productDiscountAmountUsdollar, updateAoProductQuote) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({where: { product_discount_amount_usdollar: productDiscountAmountUsdollar }});
    			if (objAoProductQuote) {
    				objAoProductQuote = await models.sequelize.aosProductsQuotes.update(updateAoProductQuote, { where: { product_discount_amount_usdollar: productDiscountAmountUsdollar } });
    			}
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOneAndUpdate({product_discount_amount_usdollar: productDiscountAmountUsdollar}, {$set: updateAoProductQuote}, {new: true});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteByProductUnitPrice(productUnitPrice, updateAoProductQuote) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({where: { product_unit_price: productUnitPrice }});
    			if (objAoProductQuote) {
    				objAoProductQuote = await models.sequelize.aosProductsQuotes.update(updateAoProductQuote, { where: { product_unit_price: productUnitPrice } });
    			}
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOneAndUpdate({product_unit_price: productUnitPrice}, {$set: updateAoProductQuote}, {new: true});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteByProductUnitPriceUsdollar(productUnitPriceUsdollar, updateAoProductQuote) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({where: { product_unit_price_usdollar: productUnitPriceUsdollar }});
    			if (objAoProductQuote) {
    				objAoProductQuote = await models.sequelize.aosProductsQuotes.update(updateAoProductQuote, { where: { product_unit_price_usdollar: productUnitPriceUsdollar } });
    			}
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOneAndUpdate({product_unit_price_usdollar: productUnitPriceUsdollar}, {$set: updateAoProductQuote}, {new: true});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteByVatAmt(vatAmt, updateAoProductQuote) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({where: { vat_amt: vatAmt }});
    			if (objAoProductQuote) {
    				objAoProductQuote = await models.sequelize.aosProductsQuotes.update(updateAoProductQuote, { where: { vat_amt: vatAmt } });
    			}
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOneAndUpdate({vat_amt: vatAmt}, {$set: updateAoProductQuote}, {new: true});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteByVatAmtUsdollar(vatAmtUsdollar, updateAoProductQuote) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({where: { vat_amt_usdollar: vatAmtUsdollar }});
    			if (objAoProductQuote) {
    				objAoProductQuote = await models.sequelize.aosProductsQuotes.update(updateAoProductQuote, { where: { vat_amt_usdollar: vatAmtUsdollar } });
    			}
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOneAndUpdate({vat_amt_usdollar: vatAmtUsdollar}, {$set: updateAoProductQuote}, {new: true});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteByProductTotalPrice(productTotalPrice, updateAoProductQuote) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({where: { product_total_price: productTotalPrice }});
    			if (objAoProductQuote) {
    				objAoProductQuote = await models.sequelize.aosProductsQuotes.update(updateAoProductQuote, { where: { product_total_price: productTotalPrice } });
    			}
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOneAndUpdate({product_total_price: productTotalPrice}, {$set: updateAoProductQuote}, {new: true});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteByProductTotalPriceUsdollar(productTotalPriceUsdollar, updateAoProductQuote) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({where: { product_total_price_usdollar: productTotalPriceUsdollar }});
    			if (objAoProductQuote) {
    				objAoProductQuote = await models.sequelize.aosProductsQuotes.update(updateAoProductQuote, { where: { product_total_price_usdollar: productTotalPriceUsdollar } });
    			}
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOneAndUpdate({product_total_price_usdollar: productTotalPriceUsdollar}, {$set: updateAoProductQuote}, {new: true});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteByPartNumber(partNumber, updateAoProductQuote) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({where: { part_number: partNumber }});
    			if (objAoProductQuote) {
    				objAoProductQuote = await models.sequelize.aosProductsQuotes.update(updateAoProductQuote, { where: { part_number: partNumber } });
    			}
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOneAndUpdate({part_number: partNumber}, {$set: updateAoProductQuote}, {new: true});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteByDiscount(discount, updateAoProductQuote) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({where: { discount: discount }});
    			if (objAoProductQuote) {
    				objAoProductQuote = await models.sequelize.aosProductsQuotes.update(updateAoProductQuote, { where: { discount: discount } });
    			}
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOneAndUpdate({discount: discount}, {$set: updateAoProductQuote}, {new: true});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteByVat(vat, updateAoProductQuote) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({where: { vat: vat }});
    			if (objAoProductQuote) {
    				objAoProductQuote = await models.sequelize.aosProductsQuotes.update(updateAoProductQuote, { where: { vat: vat } });
    			}
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOneAndUpdate({vat: vat}, {$set: updateAoProductQuote}, {new: true});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteByParentType(parentType, updateAoProductQuote) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({where: { parent_type: parentType }});
    			if (objAoProductQuote) {
    				objAoProductQuote = await models.sequelize.aosProductsQuotes.update(updateAoProductQuote, { where: { parent_type: parentType } });
    			}
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOneAndUpdate({parent_type: parentType}, {$set: updateAoProductQuote}, {new: true});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteByName(name, updateAoProductQuote) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({where: { name: name }});
    			if (objAoProductQuote) {
    				objAoProductQuote = await models.sequelize.aosProductsQuotes.update(updateAoProductQuote, { where: { name: name } });
    			}
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOneAndUpdate({name: name}, {$set: updateAoProductQuote}, {new: true});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteByDescription(description, updateAoProductQuote) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({where: { description: description }});
    			if (objAoProductQuote) {
    				objAoProductQuote = await models.sequelize.aosProductsQuotes.update(updateAoProductQuote, { where: { description: description } });
    			}
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOneAndUpdate({description: description}, {$set: updateAoProductQuote}, {new: true});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteByItemDescription(itemDescription, updateAoProductQuote) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({where: { item_description: itemDescription }});
    			if (objAoProductQuote) {
    				objAoProductQuote = await models.sequelize.aosProductsQuotes.update(updateAoProductQuote, { where: { item_description: itemDescription } });
    			}
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOneAndUpdate({item_description: itemDescription}, {$set: updateAoProductQuote}, {new: true});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteByDateEntered(dateEntered, updateAoProductQuote) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({where: { date_entered: dateEntered }});
    			if (objAoProductQuote) {
    				objAoProductQuote = await models.sequelize.aosProductsQuotes.update(updateAoProductQuote, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOneAndUpdate({date_entered: dateEntered}, {$set: updateAoProductQuote}, {new: true});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteByDateModified(dateModified, updateAoProductQuote) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({where: { date_modified: dateModified }});
    			if (objAoProductQuote) {
    				objAoProductQuote = await models.sequelize.aosProductsQuotes.update(updateAoProductQuote, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOneAndUpdate({date_modified: dateModified}, {$set: updateAoProductQuote}, {new: true});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteByModifiedUserId(modifiedUserId, updateAoProductQuote) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objAoProductQuote) {
    				objAoProductQuote = await models.sequelize.aosProductsQuotes.update(updateAoProductQuote, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateAoProductQuote}, {new: true});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteByCreatedBy(createdBy, updateAoProductQuote) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({where: { created_by: createdBy }});
    			if (objAoProductQuote) {
    				objAoProductQuote = await models.sequelize.aosProductsQuotes.update(updateAoProductQuote, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOneAndUpdate({created_by: createdBy}, {$set: updateAoProductQuote}, {new: true});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteByAssignedUserId(assignedUserId, updateAoProductQuote) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objAoProductQuote) {
    				objAoProductQuote = await models.sequelize.aosProductsQuotes.update(updateAoProductQuote, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateAoProductQuote}, {new: true});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteByCurrencyId(currencyId, updateAoProductQuote) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({where: { currency_id: currencyId }});
    			if (objAoProductQuote) {
    				objAoProductQuote = await models.sequelize.aosProductsQuotes.update(updateAoProductQuote, { where: { currency_id: currencyId } });
    			}
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOneAndUpdate({currency_id: currencyId}, {$set: updateAoProductQuote}, {new: true});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteByParentId(parentId, updateAoProductQuote) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({where: { parent_id: parentId }});
    			if (objAoProductQuote) {
    				objAoProductQuote = await models.sequelize.aosProductsQuotes.update(updateAoProductQuote, { where: { parent_id: parentId } });
    			}
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOneAndUpdate({parent_id: parentId}, {$set: updateAoProductQuote}, {new: true});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteByProductId(productId, updateAoProductQuote) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({where: { product_id: productId }});
    			if (objAoProductQuote) {
    				objAoProductQuote = await models.sequelize.aosProductsQuotes.update(updateAoProductQuote, { where: { product_id: productId } });
    			}
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOneAndUpdate({product_id: productId}, {$set: updateAoProductQuote}, {new: true});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteByGroupId(groupId, updateAoProductQuote) {
    	try {
    		let objAoProductQuote;
    		if(sql) {
    			objAoProductQuote = await models.sequelize.aosProductsQuotes.findOne({where: { group_id: groupId }});
    			if (objAoProductQuote) {
    				objAoProductQuote = await models.sequelize.aosProductsQuotes.update(updateAoProductQuote, { where: { group_id: groupId } });
    			}
    		} else {
    			objAoProductQuote = await models.mongoose.aosProductsQuotes.findOneAndUpdate({group_id: groupId}, {$set: updateAoProductQuote}, {new: true});
    		}
    		return objAoProductQuote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AoProductQuoteService;
//</es-section>
