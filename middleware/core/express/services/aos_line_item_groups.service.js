/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:12 GMT-0400 (Bolivia Time)
 * Time: 14:56:12
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:12 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:12
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

class AoLineItemGroupService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAosLineItemGroups(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aosLineItemGroups.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aosLineItemGroups.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAosLineItemGroups(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aosLineItemGroups.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aosLineItemGroups.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAoLineItemGroup(newAoLineItemGroup) {
		try {
			let objAoLineItemGroup;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aosLineItemGroups.primaryKeys.id.type.toString())) {
			    newAoLineItemGroup.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAoLineItemGroup = await models.sequelize.aosLineItemGroups.create(newAoLineItemGroup);
			} else {
				objAoLineItemGroup = new models.mongoose.aosLineItemGroups(newAoLineItemGroup);
				await objAoLineItemGroup.save();
			}
			return objAoLineItemGroup;
		} catch (error) {
			throw error;
		}
	}

	static async updateAoLineItemGroup(id, updateAoLineItemGroup) {
		try {
			let objAoLineItemGroup;
			if(sql) {
				objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({where: { id: util.Char(id) }});
				if (objAoLineItemGroup) {
					await models.sequelize.aosLineItemGroups.update(updateAoLineItemGroup, { where: { id: util.Char(id) } });
					objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAoLineItemGroup._id;
				objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOneAndUpdate({id:id}, {$set: updateAoLineItemGroup}, {new: true});
			}
			return objAoLineItemGroup;
		} catch (error) {
			throw error;
		}
	}

	static async getAAoLineItemGroup(id, query) {
		try {
			let objAoLineItemGroup;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAoLineItemGroup = await models.mongoose.aosLineItemGroups.find({id:util.Char(id)}).select(query.select);
			}
			return objAoLineItemGroup;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAoLineItemGroup(id) {
		try {
			let objAoLineItemGroup;
			if(sql) {
				objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({ where: { id: util.Char(id) } });
				if (objAoLineItemGroup) {
					await models.sequelize.aosLineItemGroups.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAoLineItemGroup = await models.mongoose.aosLineItemGroups.deleteOne({id:util.Char(id)});
			}
			return objAoLineItemGroup;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOne({id: id});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOne({deleted: deleted});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByNumber(number, query = {}) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { number: number },
    			});
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOne({number: number});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTotalAmt(totalAmt, query = {}) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { total_amt: totalAmt },
    			});
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOne({total_amt: totalAmt});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTotalAmtUsdollar(totalAmtUsdollar, query = {}) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { total_amt_usdollar: totalAmtUsdollar },
    			});
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOne({total_amt_usdollar: totalAmtUsdollar});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDiscountAmount(discountAmount, query = {}) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { discount_amount: discountAmount },
    			});
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOne({discount_amount: discountAmount});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDiscountAmountUsdollar(discountAmountUsdollar, query = {}) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { discount_amount_usdollar: discountAmountUsdollar },
    			});
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOne({discount_amount_usdollar: discountAmountUsdollar});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySubtotalAmount(subtotalAmount, query = {}) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { subtotal_amount: subtotalAmount },
    			});
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOne({subtotal_amount: subtotalAmount});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySubtotalAmountUsdollar(subtotalAmountUsdollar, query = {}) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { subtotal_amount_usdollar: subtotalAmountUsdollar },
    			});
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOne({subtotal_amount_usdollar: subtotalAmountUsdollar});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTaxAmount(taxAmount, query = {}) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { tax_amount: taxAmount },
    			});
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOne({tax_amount: taxAmount});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTaxAmountUsdollar(taxAmountUsdollar, query = {}) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { tax_amount_usdollar: taxAmountUsdollar },
    			});
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOne({tax_amount_usdollar: taxAmountUsdollar});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySubtotalTaxAmount(subtotalTaxAmount, query = {}) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { subtotal_tax_amount: subtotalTaxAmount },
    			});
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOne({subtotal_tax_amount: subtotalTaxAmount});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySubtotalTaxAmountUsdollar(subtotalTaxAmountUsdollar, query = {}) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { subtotal_tax_amount_usdollar: subtotalTaxAmountUsdollar },
    			});
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOne({subtotal_tax_amount_usdollar: subtotalTaxAmountUsdollar});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTotalAmount(totalAmount, query = {}) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { total_amount: totalAmount },
    			});
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOne({total_amount: totalAmount});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTotalAmountUsdollar(totalAmountUsdollar, query = {}) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { total_amount_usdollar: totalAmountUsdollar },
    			});
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOne({total_amount_usdollar: totalAmountUsdollar});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOne({name: name});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentType(parentType, query = {}) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_type: parentType },
    			});
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOne({parent_type: parentType});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOne({description: description});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOne({date_entered: dateEntered});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOne({date_modified: dateModified});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOne({modified_user_id: modifiedUserId});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOne({created_by: createdBy});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOne({assigned_user_id: assignedUserId});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOne({parent_id: parentId});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCurrencyId(currencyId, query = {}) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { currency_id: currencyId },
    			});
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOne({currency_id: currencyId});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAoLineItemGroupById(id, updateAoLineItemGroup) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({where: { id: id }});
    			if (objAoLineItemGroup) {
    				objAoLineItemGroup = await models.sequelize.aosLineItemGroups.update(updateAoLineItemGroup, { where: { id: id } });
    			}
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOneAndUpdate({id: id}, {$set: updateAoLineItemGroup}, {new: true});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoLineItemGroupByDeleted(deleted, updateAoLineItemGroup) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({where: { deleted: deleted }});
    			if (objAoLineItemGroup) {
    				objAoLineItemGroup = await models.sequelize.aosLineItemGroups.update(updateAoLineItemGroup, { where: { deleted: deleted } });
    			}
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOneAndUpdate({deleted: deleted}, {$set: updateAoLineItemGroup}, {new: true});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoLineItemGroupByNumber(number, updateAoLineItemGroup) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({where: { number: number }});
    			if (objAoLineItemGroup) {
    				objAoLineItemGroup = await models.sequelize.aosLineItemGroups.update(updateAoLineItemGroup, { where: { number: number } });
    			}
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOneAndUpdate({number: number}, {$set: updateAoLineItemGroup}, {new: true});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoLineItemGroupByTotalAmt(totalAmt, updateAoLineItemGroup) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({where: { total_amt: totalAmt }});
    			if (objAoLineItemGroup) {
    				objAoLineItemGroup = await models.sequelize.aosLineItemGroups.update(updateAoLineItemGroup, { where: { total_amt: totalAmt } });
    			}
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOneAndUpdate({total_amt: totalAmt}, {$set: updateAoLineItemGroup}, {new: true});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoLineItemGroupByTotalAmtUsdollar(totalAmtUsdollar, updateAoLineItemGroup) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({where: { total_amt_usdollar: totalAmtUsdollar }});
    			if (objAoLineItemGroup) {
    				objAoLineItemGroup = await models.sequelize.aosLineItemGroups.update(updateAoLineItemGroup, { where: { total_amt_usdollar: totalAmtUsdollar } });
    			}
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOneAndUpdate({total_amt_usdollar: totalAmtUsdollar}, {$set: updateAoLineItemGroup}, {new: true});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoLineItemGroupByDiscountAmount(discountAmount, updateAoLineItemGroup) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({where: { discount_amount: discountAmount }});
    			if (objAoLineItemGroup) {
    				objAoLineItemGroup = await models.sequelize.aosLineItemGroups.update(updateAoLineItemGroup, { where: { discount_amount: discountAmount } });
    			}
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOneAndUpdate({discount_amount: discountAmount}, {$set: updateAoLineItemGroup}, {new: true});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoLineItemGroupByDiscountAmountUsdollar(discountAmountUsdollar, updateAoLineItemGroup) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({where: { discount_amount_usdollar: discountAmountUsdollar }});
    			if (objAoLineItemGroup) {
    				objAoLineItemGroup = await models.sequelize.aosLineItemGroups.update(updateAoLineItemGroup, { where: { discount_amount_usdollar: discountAmountUsdollar } });
    			}
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOneAndUpdate({discount_amount_usdollar: discountAmountUsdollar}, {$set: updateAoLineItemGroup}, {new: true});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoLineItemGroupBySubtotalAmount(subtotalAmount, updateAoLineItemGroup) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({where: { subtotal_amount: subtotalAmount }});
    			if (objAoLineItemGroup) {
    				objAoLineItemGroup = await models.sequelize.aosLineItemGroups.update(updateAoLineItemGroup, { where: { subtotal_amount: subtotalAmount } });
    			}
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOneAndUpdate({subtotal_amount: subtotalAmount}, {$set: updateAoLineItemGroup}, {new: true});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoLineItemGroupBySubtotalAmountUsdollar(subtotalAmountUsdollar, updateAoLineItemGroup) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({where: { subtotal_amount_usdollar: subtotalAmountUsdollar }});
    			if (objAoLineItemGroup) {
    				objAoLineItemGroup = await models.sequelize.aosLineItemGroups.update(updateAoLineItemGroup, { where: { subtotal_amount_usdollar: subtotalAmountUsdollar } });
    			}
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOneAndUpdate({subtotal_amount_usdollar: subtotalAmountUsdollar}, {$set: updateAoLineItemGroup}, {new: true});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoLineItemGroupByTaxAmount(taxAmount, updateAoLineItemGroup) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({where: { tax_amount: taxAmount }});
    			if (objAoLineItemGroup) {
    				objAoLineItemGroup = await models.sequelize.aosLineItemGroups.update(updateAoLineItemGroup, { where: { tax_amount: taxAmount } });
    			}
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOneAndUpdate({tax_amount: taxAmount}, {$set: updateAoLineItemGroup}, {new: true});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoLineItemGroupByTaxAmountUsdollar(taxAmountUsdollar, updateAoLineItemGroup) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({where: { tax_amount_usdollar: taxAmountUsdollar }});
    			if (objAoLineItemGroup) {
    				objAoLineItemGroup = await models.sequelize.aosLineItemGroups.update(updateAoLineItemGroup, { where: { tax_amount_usdollar: taxAmountUsdollar } });
    			}
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOneAndUpdate({tax_amount_usdollar: taxAmountUsdollar}, {$set: updateAoLineItemGroup}, {new: true});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoLineItemGroupBySubtotalTaxAmount(subtotalTaxAmount, updateAoLineItemGroup) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({where: { subtotal_tax_amount: subtotalTaxAmount }});
    			if (objAoLineItemGroup) {
    				objAoLineItemGroup = await models.sequelize.aosLineItemGroups.update(updateAoLineItemGroup, { where: { subtotal_tax_amount: subtotalTaxAmount } });
    			}
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOneAndUpdate({subtotal_tax_amount: subtotalTaxAmount}, {$set: updateAoLineItemGroup}, {new: true});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoLineItemGroupBySubtotalTaxAmountUsdollar(subtotalTaxAmountUsdollar, updateAoLineItemGroup) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({where: { subtotal_tax_amount_usdollar: subtotalTaxAmountUsdollar }});
    			if (objAoLineItemGroup) {
    				objAoLineItemGroup = await models.sequelize.aosLineItemGroups.update(updateAoLineItemGroup, { where: { subtotal_tax_amount_usdollar: subtotalTaxAmountUsdollar } });
    			}
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOneAndUpdate({subtotal_tax_amount_usdollar: subtotalTaxAmountUsdollar}, {$set: updateAoLineItemGroup}, {new: true});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoLineItemGroupByTotalAmount(totalAmount, updateAoLineItemGroup) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({where: { total_amount: totalAmount }});
    			if (objAoLineItemGroup) {
    				objAoLineItemGroup = await models.sequelize.aosLineItemGroups.update(updateAoLineItemGroup, { where: { total_amount: totalAmount } });
    			}
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOneAndUpdate({total_amount: totalAmount}, {$set: updateAoLineItemGroup}, {new: true});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoLineItemGroupByTotalAmountUsdollar(totalAmountUsdollar, updateAoLineItemGroup) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({where: { total_amount_usdollar: totalAmountUsdollar }});
    			if (objAoLineItemGroup) {
    				objAoLineItemGroup = await models.sequelize.aosLineItemGroups.update(updateAoLineItemGroup, { where: { total_amount_usdollar: totalAmountUsdollar } });
    			}
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOneAndUpdate({total_amount_usdollar: totalAmountUsdollar}, {$set: updateAoLineItemGroup}, {new: true});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoLineItemGroupByName(name, updateAoLineItemGroup) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({where: { name: name }});
    			if (objAoLineItemGroup) {
    				objAoLineItemGroup = await models.sequelize.aosLineItemGroups.update(updateAoLineItemGroup, { where: { name: name } });
    			}
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOneAndUpdate({name: name}, {$set: updateAoLineItemGroup}, {new: true});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoLineItemGroupByParentType(parentType, updateAoLineItemGroup) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({where: { parent_type: parentType }});
    			if (objAoLineItemGroup) {
    				objAoLineItemGroup = await models.sequelize.aosLineItemGroups.update(updateAoLineItemGroup, { where: { parent_type: parentType } });
    			}
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOneAndUpdate({parent_type: parentType}, {$set: updateAoLineItemGroup}, {new: true});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoLineItemGroupByDescription(description, updateAoLineItemGroup) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({where: { description: description }});
    			if (objAoLineItemGroup) {
    				objAoLineItemGroup = await models.sequelize.aosLineItemGroups.update(updateAoLineItemGroup, { where: { description: description } });
    			}
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOneAndUpdate({description: description}, {$set: updateAoLineItemGroup}, {new: true});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoLineItemGroupByDateEntered(dateEntered, updateAoLineItemGroup) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({where: { date_entered: dateEntered }});
    			if (objAoLineItemGroup) {
    				objAoLineItemGroup = await models.sequelize.aosLineItemGroups.update(updateAoLineItemGroup, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOneAndUpdate({date_entered: dateEntered}, {$set: updateAoLineItemGroup}, {new: true});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoLineItemGroupByDateModified(dateModified, updateAoLineItemGroup) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({where: { date_modified: dateModified }});
    			if (objAoLineItemGroup) {
    				objAoLineItemGroup = await models.sequelize.aosLineItemGroups.update(updateAoLineItemGroup, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOneAndUpdate({date_modified: dateModified}, {$set: updateAoLineItemGroup}, {new: true});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoLineItemGroupByModifiedUserId(modifiedUserId, updateAoLineItemGroup) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objAoLineItemGroup) {
    				objAoLineItemGroup = await models.sequelize.aosLineItemGroups.update(updateAoLineItemGroup, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateAoLineItemGroup}, {new: true});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoLineItemGroupByCreatedBy(createdBy, updateAoLineItemGroup) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({where: { created_by: createdBy }});
    			if (objAoLineItemGroup) {
    				objAoLineItemGroup = await models.sequelize.aosLineItemGroups.update(updateAoLineItemGroup, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOneAndUpdate({created_by: createdBy}, {$set: updateAoLineItemGroup}, {new: true});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoLineItemGroupByAssignedUserId(assignedUserId, updateAoLineItemGroup) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objAoLineItemGroup) {
    				objAoLineItemGroup = await models.sequelize.aosLineItemGroups.update(updateAoLineItemGroup, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateAoLineItemGroup}, {new: true});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoLineItemGroupByParentId(parentId, updateAoLineItemGroup) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({where: { parent_id: parentId }});
    			if (objAoLineItemGroup) {
    				objAoLineItemGroup = await models.sequelize.aosLineItemGroups.update(updateAoLineItemGroup, { where: { parent_id: parentId } });
    			}
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOneAndUpdate({parent_id: parentId}, {$set: updateAoLineItemGroup}, {new: true});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoLineItemGroupByCurrencyId(currencyId, updateAoLineItemGroup) {
    	try {
    		let objAoLineItemGroup;
    		if(sql) {
    			objAoLineItemGroup = await models.sequelize.aosLineItemGroups.findOne({where: { currency_id: currencyId }});
    			if (objAoLineItemGroup) {
    				objAoLineItemGroup = await models.sequelize.aosLineItemGroups.update(updateAoLineItemGroup, { where: { currency_id: currencyId } });
    			}
    		} else {
    			objAoLineItemGroup = await models.mongoose.aosLineItemGroups.findOneAndUpdate({currency_id: currencyId}, {$set: updateAoLineItemGroup}, {new: true});
    		}
    		return objAoLineItemGroup;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AoLineItemGroupService;
//</es-section>
