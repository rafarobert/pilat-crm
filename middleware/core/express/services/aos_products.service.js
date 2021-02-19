/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:09 GMT-0400 (Bolivia Time)
 * Time: 18:36:9
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:09 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:9
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

class AoProductService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAosProducts(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aosProducts.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aosProducts.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAosProducts(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aosProducts.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aosProducts.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAoProduct(newAoProduct) {
		try {
			let objAoProduct;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aosProducts.primaryKeys.id.type.toString())) {
			    newAoProduct.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAoProduct = await models.sequelize.aosProducts.create(newAoProduct);
			} else {
				objAoProduct = new models.mongoose.aosProducts(newAoProduct);
				await objAoProduct.save();
			}
			return objAoProduct;
		} catch (error) {
			throw error;
		}
	}

	static async updateAoProduct(id, updateAoProduct) {
		try {
			let objAoProduct;
			if(sql) {
				objAoProduct = await models.sequelize.aosProducts.findOne({where: { id: util.Char(id) }});
				if (objAoProduct) {
					await models.sequelize.aosProducts.update(updateAoProduct, { where: { id: util.Char(id) } });
					objAoProduct = await models.sequelize.aosProducts.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAoProduct._id;
				objAoProduct = await models.mongoose.aosProducts.findOneAndUpdate({id:id}, {$set: updateAoProduct}, {new: true});
			}
			return objAoProduct;
		} catch (error) {
			throw error;
		}
	}

	static async getAAoProduct(id, query) {
		try {
			let objAoProduct;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAoProduct = await models.sequelize.aosProducts.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAoProduct = await models.mongoose.aosProducts.find({id:util.Char(id)}).select(query.select);
			}
			return objAoProduct;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAoProduct(id) {
		try {
			let objAoProduct;
			if(sql) {
				objAoProduct = await models.sequelize.aosProducts.findOne({ where: { id: util.Char(id) } });
				if (objAoProduct) {
					await models.sequelize.aosProducts.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAoProduct = await models.mongoose.aosProducts.deleteOne({id:util.Char(id)});
			}
			return objAoProduct;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOne({id: id});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOne({deleted: deleted});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCost(cost, query = {}) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { cost: cost },
    			});
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOne({cost: cost});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCostUsdollar(costUsdollar, query = {}) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { cost_usdollar: costUsdollar },
    			});
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOne({cost_usdollar: costUsdollar});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPrice(price, query = {}) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { price: price },
    			});
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOne({price: price});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPriceUsdollar(priceUsdollar, query = {}) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { price_usdollar: priceUsdollar },
    			});
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOne({price_usdollar: priceUsdollar});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOne({name: name});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMaincode(maincode, query = {}) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { maincode: maincode },
    			});
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOne({maincode: maincode});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPartNumber(partNumber, query = {}) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { part_number: partNumber },
    			});
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOne({part_number: partNumber});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCategory(category, query = {}) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { category: category },
    			});
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOne({category: category});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByType(type, query = {}) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { type: type },
    			});
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOne({type: type});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUrl(url, query = {}) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { url: url },
    			});
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOne({url: url});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByProductImage(productImage, query = {}) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { product_image: productImage },
    			});
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOne({product_image: productImage});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOne({description: description});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOne({date_entered: dateEntered});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOne({date_modified: dateModified});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOne({modified_user_id: modifiedUserId});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOne({created_by: createdBy});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOne({assigned_user_id: assignedUserId});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCurrencyId(currencyId, query = {}) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { currency_id: currencyId },
    			});
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOne({currency_id: currencyId});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByContactId(contactId, query = {}) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { contact_id: contactId },
    			});
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOne({contact_id: contactId});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAosProductCategoryId(aosProductCategoryId, query = {}) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { aos_product_category_id: aosProductCategoryId },
    			});
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOne({aos_product_category_id: aosProductCategoryId});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAoProductById(id, updateAoProduct) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({where: { id: id }});
    			if (objAoProduct) {
    				objAoProduct = await models.sequelize.aosProducts.update(updateAoProduct, { where: { id: id } });
    			}
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOneAndUpdate({id: id}, {$set: updateAoProduct}, {new: true});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductByDeleted(deleted, updateAoProduct) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({where: { deleted: deleted }});
    			if (objAoProduct) {
    				objAoProduct = await models.sequelize.aosProducts.update(updateAoProduct, { where: { deleted: deleted } });
    			}
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOneAndUpdate({deleted: deleted}, {$set: updateAoProduct}, {new: true});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductByCost(cost, updateAoProduct) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({where: { cost: cost }});
    			if (objAoProduct) {
    				objAoProduct = await models.sequelize.aosProducts.update(updateAoProduct, { where: { cost: cost } });
    			}
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOneAndUpdate({cost: cost}, {$set: updateAoProduct}, {new: true});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductByCostUsdollar(costUsdollar, updateAoProduct) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({where: { cost_usdollar: costUsdollar }});
    			if (objAoProduct) {
    				objAoProduct = await models.sequelize.aosProducts.update(updateAoProduct, { where: { cost_usdollar: costUsdollar } });
    			}
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOneAndUpdate({cost_usdollar: costUsdollar}, {$set: updateAoProduct}, {new: true});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductByPrice(price, updateAoProduct) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({where: { price: price }});
    			if (objAoProduct) {
    				objAoProduct = await models.sequelize.aosProducts.update(updateAoProduct, { where: { price: price } });
    			}
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOneAndUpdate({price: price}, {$set: updateAoProduct}, {new: true});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductByPriceUsdollar(priceUsdollar, updateAoProduct) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({where: { price_usdollar: priceUsdollar }});
    			if (objAoProduct) {
    				objAoProduct = await models.sequelize.aosProducts.update(updateAoProduct, { where: { price_usdollar: priceUsdollar } });
    			}
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOneAndUpdate({price_usdollar: priceUsdollar}, {$set: updateAoProduct}, {new: true});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductByName(name, updateAoProduct) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({where: { name: name }});
    			if (objAoProduct) {
    				objAoProduct = await models.sequelize.aosProducts.update(updateAoProduct, { where: { name: name } });
    			}
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOneAndUpdate({name: name}, {$set: updateAoProduct}, {new: true});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductByMaincode(maincode, updateAoProduct) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({where: { maincode: maincode }});
    			if (objAoProduct) {
    				objAoProduct = await models.sequelize.aosProducts.update(updateAoProduct, { where: { maincode: maincode } });
    			}
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOneAndUpdate({maincode: maincode}, {$set: updateAoProduct}, {new: true});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductByPartNumber(partNumber, updateAoProduct) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({where: { part_number: partNumber }});
    			if (objAoProduct) {
    				objAoProduct = await models.sequelize.aosProducts.update(updateAoProduct, { where: { part_number: partNumber } });
    			}
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOneAndUpdate({part_number: partNumber}, {$set: updateAoProduct}, {new: true});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductByCategory(category, updateAoProduct) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({where: { category: category }});
    			if (objAoProduct) {
    				objAoProduct = await models.sequelize.aosProducts.update(updateAoProduct, { where: { category: category } });
    			}
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOneAndUpdate({category: category}, {$set: updateAoProduct}, {new: true});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductByType(type, updateAoProduct) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({where: { type: type }});
    			if (objAoProduct) {
    				objAoProduct = await models.sequelize.aosProducts.update(updateAoProduct, { where: { type: type } });
    			}
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOneAndUpdate({type: type}, {$set: updateAoProduct}, {new: true});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductByUrl(url, updateAoProduct) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({where: { url: url }});
    			if (objAoProduct) {
    				objAoProduct = await models.sequelize.aosProducts.update(updateAoProduct, { where: { url: url } });
    			}
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOneAndUpdate({url: url}, {$set: updateAoProduct}, {new: true});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductByProductImage(productImage, updateAoProduct) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({where: { product_image: productImage }});
    			if (objAoProduct) {
    				objAoProduct = await models.sequelize.aosProducts.update(updateAoProduct, { where: { product_image: productImage } });
    			}
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOneAndUpdate({product_image: productImage}, {$set: updateAoProduct}, {new: true});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductByDescription(description, updateAoProduct) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({where: { description: description }});
    			if (objAoProduct) {
    				objAoProduct = await models.sequelize.aosProducts.update(updateAoProduct, { where: { description: description } });
    			}
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOneAndUpdate({description: description}, {$set: updateAoProduct}, {new: true});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductByDateEntered(dateEntered, updateAoProduct) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({where: { date_entered: dateEntered }});
    			if (objAoProduct) {
    				objAoProduct = await models.sequelize.aosProducts.update(updateAoProduct, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOneAndUpdate({date_entered: dateEntered}, {$set: updateAoProduct}, {new: true});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductByDateModified(dateModified, updateAoProduct) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({where: { date_modified: dateModified }});
    			if (objAoProduct) {
    				objAoProduct = await models.sequelize.aosProducts.update(updateAoProduct, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOneAndUpdate({date_modified: dateModified}, {$set: updateAoProduct}, {new: true});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductByModifiedUserId(modifiedUserId, updateAoProduct) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objAoProduct) {
    				objAoProduct = await models.sequelize.aosProducts.update(updateAoProduct, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateAoProduct}, {new: true});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductByCreatedBy(createdBy, updateAoProduct) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({where: { created_by: createdBy }});
    			if (objAoProduct) {
    				objAoProduct = await models.sequelize.aosProducts.update(updateAoProduct, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOneAndUpdate({created_by: createdBy}, {$set: updateAoProduct}, {new: true});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductByAssignedUserId(assignedUserId, updateAoProduct) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objAoProduct) {
    				objAoProduct = await models.sequelize.aosProducts.update(updateAoProduct, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateAoProduct}, {new: true});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductByCurrencyId(currencyId, updateAoProduct) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({where: { currency_id: currencyId }});
    			if (objAoProduct) {
    				objAoProduct = await models.sequelize.aosProducts.update(updateAoProduct, { where: { currency_id: currencyId } });
    			}
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOneAndUpdate({currency_id: currencyId}, {$set: updateAoProduct}, {new: true});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductByContactId(contactId, updateAoProduct) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({where: { contact_id: contactId }});
    			if (objAoProduct) {
    				objAoProduct = await models.sequelize.aosProducts.update(updateAoProduct, { where: { contact_id: contactId } });
    			}
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOneAndUpdate({contact_id: contactId}, {$set: updateAoProduct}, {new: true});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductByAosProductCategoryId(aosProductCategoryId, updateAoProduct) {
    	try {
    		let objAoProduct;
    		if(sql) {
    			objAoProduct = await models.sequelize.aosProducts.findOne({where: { aos_product_category_id: aosProductCategoryId }});
    			if (objAoProduct) {
    				objAoProduct = await models.sequelize.aosProducts.update(updateAoProduct, { where: { aos_product_category_id: aosProductCategoryId } });
    			}
    		} else {
    			objAoProduct = await models.mongoose.aosProducts.findOneAndUpdate({aos_product_category_id: aosProductCategoryId}, {$set: updateAoProduct}, {new: true});
    		}
    		return objAoProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AoProductService;
//</es-section>
