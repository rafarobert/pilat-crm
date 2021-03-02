/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:20 GMT-0400 (Bolivia Time)
 * Time: 14:1:20
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:20 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:20
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

class ProjectProductService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllProjectsProducts(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.projectsProducts.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.projectsProducts.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllProjectsProducts(select = []) {
		try {
			if(sql) {
				return await models.sequelize.projectsProducts.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.projectsProducts.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addProjectProduct(newProjectProduct) {
		try {
			let objProjectProduct;
			if(util.PrimaryKeyTypeIsString(models.sequelize.projectsProducts.primaryKeys.id.type.toString())) {
			    newProjectProduct.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objProjectProduct = await models.sequelize.projectsProducts.create(newProjectProduct);
			} else {
				objProjectProduct = new models.mongoose.projectsProducts(newProjectProduct);
				await objProjectProduct.save();
			}
			return objProjectProduct;
		} catch (error) {
			throw error;
		}
	}

	static async updateProjectProduct(id, updateProjectProduct) {
		try {
			let objProjectProduct;
			if(sql) {
				objProjectProduct = await models.sequelize.projectsProducts.findOne({where: { id: util.String(id) }});
				if (objProjectProduct) {
					await models.sequelize.projectsProducts.update(updateProjectProduct, { where: { id: util.String(id) } });
					objProjectProduct = await models.sequelize.projectsProducts.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateProjectProduct._id;
				objProjectProduct = await models.mongoose.projectsProducts.findOneAndUpdate({id:id}, {$set: updateProjectProduct}, {new: true});
			}
			return objProjectProduct;
		} catch (error) {
			throw error;
		}
	}

	static async getAProjectProduct(id, query) {
		try {
			let objProjectProduct;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objProjectProduct = await models.sequelize.projectsProducts.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objProjectProduct = await models.mongoose.projectsProducts.find({id:util.String(id)}).select(query.select);
			}
			return objProjectProduct;
		} catch (error) {
			throw error;
		}
	}

	static async deleteProjectProduct(id) {
		try {
			let objProjectProduct;
			if(sql) {
				objProjectProduct = await models.sequelize.projectsProducts.findOne({ where: { id: util.String(id) } });
				if (objProjectProduct) {
					await models.sequelize.projectsProducts.destroy({where: { id: util.String(id) }});
				}
			} else {
				objProjectProduct = await models.mongoose.projectsProducts.deleteOne({id:util.String(id)});
			}
			return objProjectProduct;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objProjectProduct;
    		if(sql) {
    			objProjectProduct = await models.sequelize.projectsProducts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objProjectProduct = await models.mongoose.projectsProducts.findOne({id: id});
    		}
    		return objProjectProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objProjectProduct;
    		if(sql) {
    			objProjectProduct = await models.sequelize.projectsProducts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objProjectProduct = await models.mongoose.projectsProducts.findOne({deleted: deleted});
    		}
    		return objProjectProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByProductId(productId, query = {}) {
    	try {
    		let objProjectProduct;
    		if(sql) {
    			objProjectProduct = await models.sequelize.projectsProducts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { product_id: productId },
    			});
    		} else {
    			objProjectProduct = await models.mongoose.projectsProducts.findOne({product_id: productId});
    		}
    		return objProjectProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByProjectId(projectId, query = {}) {
    	try {
    		let objProjectProduct;
    		if(sql) {
    			objProjectProduct = await models.sequelize.projectsProducts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { project_id: projectId },
    			});
    		} else {
    			objProjectProduct = await models.mongoose.projectsProducts.findOne({project_id: projectId});
    		}
    		return objProjectProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objProjectProduct;
    		if(sql) {
    			objProjectProduct = await models.sequelize.projectsProducts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objProjectProduct = await models.mongoose.projectsProducts.findOne({date_modified: dateModified});
    		}
    		return objProjectProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateProjectProductById(id, updateProjectProduct) {
    	try {
    		let objProjectProduct;
    		if(sql) {
    			objProjectProduct = await models.sequelize.projectsProducts.findOne({where: { id: id }});
    			if (objProjectProduct) {
    				objProjectProduct = await models.sequelize.projectsProducts.update(updateProjectProduct, { where: { id: id } });
    			}
    		} else {
    			objProjectProduct = await models.mongoose.projectsProducts.findOneAndUpdate({id: id}, {$set: updateProjectProduct}, {new: true});
    		}
    		return objProjectProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectProductByDeleted(deleted, updateProjectProduct) {
    	try {
    		let objProjectProduct;
    		if(sql) {
    			objProjectProduct = await models.sequelize.projectsProducts.findOne({where: { deleted: deleted }});
    			if (objProjectProduct) {
    				objProjectProduct = await models.sequelize.projectsProducts.update(updateProjectProduct, { where: { deleted: deleted } });
    			}
    		} else {
    			objProjectProduct = await models.mongoose.projectsProducts.findOneAndUpdate({deleted: deleted}, {$set: updateProjectProduct}, {new: true});
    		}
    		return objProjectProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectProductByProductId(productId, updateProjectProduct) {
    	try {
    		let objProjectProduct;
    		if(sql) {
    			objProjectProduct = await models.sequelize.projectsProducts.findOne({where: { product_id: productId }});
    			if (objProjectProduct) {
    				objProjectProduct = await models.sequelize.projectsProducts.update(updateProjectProduct, { where: { product_id: productId } });
    			}
    		} else {
    			objProjectProduct = await models.mongoose.projectsProducts.findOneAndUpdate({product_id: productId}, {$set: updateProjectProduct}, {new: true});
    		}
    		return objProjectProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectProductByProjectId(projectId, updateProjectProduct) {
    	try {
    		let objProjectProduct;
    		if(sql) {
    			objProjectProduct = await models.sequelize.projectsProducts.findOne({where: { project_id: projectId }});
    			if (objProjectProduct) {
    				objProjectProduct = await models.sequelize.projectsProducts.update(updateProjectProduct, { where: { project_id: projectId } });
    			}
    		} else {
    			objProjectProduct = await models.mongoose.projectsProducts.findOneAndUpdate({project_id: projectId}, {$set: updateProjectProduct}, {new: true});
    		}
    		return objProjectProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectProductByDateModified(dateModified, updateProjectProduct) {
    	try {
    		let objProjectProduct;
    		if(sql) {
    			objProjectProduct = await models.sequelize.projectsProducts.findOne({where: { date_modified: dateModified }});
    			if (objProjectProduct) {
    				objProjectProduct = await models.sequelize.projectsProducts.update(updateProjectProduct, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objProjectProduct = await models.mongoose.projectsProducts.findOneAndUpdate({date_modified: dateModified}, {$set: updateProjectProduct}, {new: true});
    		}
    		return objProjectProduct;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = ProjectProductService;
//</es-section>
