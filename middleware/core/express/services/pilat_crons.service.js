/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:24 GMT-0400 (Bolivia Time)
 * Time: 14:57:24
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:24 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:24
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

class PilatCronService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllPilatCrons(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.pilatCrons.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['_id','ASC']],
                });
			} else {
				return await models.mongoose.pilatCrons.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllPilatCrons(select = []) {
		try {
			if(sql) {
				return await models.sequelize.pilatCrons.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.pilatCrons.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addPilatCron(newPilatCron) {
		try {
			let objPilatCron;
			if(util.PrimaryKeyTypeIsString(models.sequelize.pilatCrons.primaryKeys._id.type.toString())) {
			    newPilatCron._id = models.sequelize.objectId().toString();
		    }
			
			if(!newPilatCron.id) {
              let max = await models.sequelize.pilatCrons.max('id');
              newPilatCron.id = newPilatCron.id ? newPilatCron.id : max+1;
			}
			
			
			
			if(sql) {
				objPilatCron = await models.sequelize.pilatCrons.create(newPilatCron);
			} else {
				objPilatCron = new models.mongoose.pilatCrons(newPilatCron);
				await objPilatCron.save();
			}
			return objPilatCron;
		} catch (error) {
			throw error;
		}
	}

	static async updatePilatCron(_id, updatePilatCron) {
		try {
			let objPilatCron;
			if(sql) {
				objPilatCron = await models.sequelize.pilatCrons.findOne({where: { _id: util.String(_id) }});
				if (objPilatCron) {
					await models.sequelize.pilatCrons.update(updatePilatCron, { where: { _id: util.String(_id) } });
					objPilatCron = await models.sequelize.pilatCrons.findOne({where: { _id: util.String(_id) }});
				}
			} else {
				delete updatePilatCron._id;
				objPilatCron = await models.mongoose.pilatCrons.findOneAndUpdate({_id:_id}, {$set: updatePilatCron}, {new: true});
			}
			return objPilatCron;
		} catch (error) {
			throw error;
		}
	}

	static async getAPilatCron(_id, query) {
		try {
			let objPilatCron;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objPilatCron = await models.sequelize.pilatCrons.findOne({
					    where: where && !where.where ? where : { _id: util.String(_id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objPilatCron = await models.mongoose.pilatCrons.find({_id:util.String(_id)}).select(query.select);
			}
			return objPilatCron;
		} catch (error) {
			throw error;
		}
	}

	static async deletePilatCron(_id) {
		try {
			let objPilatCron;
			if(sql) {
				objPilatCron = await models.sequelize.pilatCrons.findOne({ where: { _id: util.String(_id) } });
				if (objPilatCron) {
					await models.sequelize.pilatCrons.destroy({where: { _id: util.String(_id) }});
				}
			} else {
				objPilatCron = await models.mongoose.pilatCrons.deleteOne({_id:util.String(_id)});
			}
			return objPilatCron;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneByUid(Id, query = {}) {
    	try {
    		let objPilatCron;
    		if(sql) {
    			objPilatCron = await models.sequelize.pilatCrons.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { _id: Id },
    			});
    		} else {
    			objPilatCron = await models.mongoose.pilatCrons.findOne({_id: Id});
    		}
    		return objPilatCron;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneById(id, query = {}) {
    	try {
    		let objPilatCron;
    		if(sql) {
    			objPilatCron = await models.sequelize.pilatCrons.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objPilatCron = await models.mongoose.pilatCrons.findOne({id: id});
    		}
    		return objPilatCron;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCroStatus(croStatus, query = {}) {
    	try {
    		let objPilatCron;
    		if(sql) {
    			objPilatCron = await models.sequelize.pilatCrons.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { cro_status: croStatus },
    			});
    		} else {
    			objPilatCron = await models.mongoose.pilatCrons.findOne({cro_status: croStatus});
    		}
    		return objPilatCron;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCroDescription(croDescription, query = {}) {
    	try {
    		let objPilatCron;
    		if(sql) {
    			objPilatCron = await models.sequelize.pilatCrons.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { cro_description: croDescription },
    			});
    		} else {
    			objPilatCron = await models.mongoose.pilatCrons.findOne({cro_description: croDescription});
    		}
    		return objPilatCron;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCroExpression(croExpression, query = {}) {
    	try {
    		let objPilatCron;
    		if(sql) {
    			objPilatCron = await models.sequelize.pilatCrons.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { cro_expression: croExpression },
    			});
    		} else {
    			objPilatCron = await models.mongoose.pilatCrons.findOne({cro_expression: croExpression});
    		}
    		return objPilatCron;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCroGroup(croGroup, query = {}) {
    	try {
    		let objPilatCron;
    		if(sql) {
    			objPilatCron = await models.sequelize.pilatCrons.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { cro_group: croGroup },
    			});
    		} else {
    			objPilatCron = await models.mongoose.pilatCrons.findOne({cro_group: croGroup});
    		}
    		return objPilatCron;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCroMaiId(croMaiId, query = {}) {
    	try {
    		let objPilatCron;
    		if(sql) {
    			objPilatCron = await models.sequelize.pilatCrons.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { cro_mai_id: croMaiId },
    			});
    		} else {
    			objPilatCron = await models.mongoose.pilatCrons.findOne({cro_mai_id: croMaiId});
    		}
    		return objPilatCron;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedby(createdby, query = {}) {
    	try {
    		let objPilatCron;
    		if(sql) {
    			objPilatCron = await models.sequelize.pilatCrons.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { createdBy: createdby },
    			});
    		} else {
    			objPilatCron = await models.mongoose.pilatCrons.findOne({createdBy: createdby});
    		}
    		return objPilatCron;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUpdatedby(updatedby, query = {}) {
    	try {
    		let objPilatCron;
    		if(sql) {
    			objPilatCron = await models.sequelize.pilatCrons.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { updatedBy: updatedby },
    			});
    		} else {
    			objPilatCron = await models.mongoose.pilatCrons.findOne({updatedBy: updatedby});
    		}
    		return objPilatCron;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDueat(dueat, query = {}) {
    	try {
    		let objPilatCron;
    		if(sql) {
    			objPilatCron = await models.sequelize.pilatCrons.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { dueAt: dueat },
    			});
    		} else {
    			objPilatCron = await models.mongoose.pilatCrons.findOne({dueAt: dueat});
    		}
    		return objPilatCron;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedat(createdat, query = {}) {
    	try {
    		let objPilatCron;
    		if(sql) {
    			objPilatCron = await models.sequelize.pilatCrons.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { createdAt: createdat },
    			});
    		} else {
    			objPilatCron = await models.mongoose.pilatCrons.findOne({createdAt: createdat});
    		}
    		return objPilatCron;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUpdatedat(updatedat, query = {}) {
    	try {
    		let objPilatCron;
    		if(sql) {
    			objPilatCron = await models.sequelize.pilatCrons.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { updatedAt: updatedat },
    			});
    		} else {
    			objPilatCron = await models.mongoose.pilatCrons.findOne({updatedAt: updatedat});
    		}
    		return objPilatCron;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updatePilatCronByUid(Id, updatePilatCron) {
    	try {
    		let objPilatCron;
    		if(sql) {
    			objPilatCron = await models.sequelize.pilatCrons.findOne({where: { _id: Id }});
    			if (objPilatCron) {
    				objPilatCron = await models.sequelize.pilatCrons.update(updatePilatCron, { where: { _id: Id } });
    			}
    		} else {
    			objPilatCron = await models.mongoose.pilatCrons.findOneAndUpdate({_id: Id}, {$set: updatePilatCron}, {new: true});
    		}
    		return objPilatCron;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatCronById(id, updatePilatCron) {
    	try {
    		let objPilatCron;
    		if(sql) {
    			objPilatCron = await models.sequelize.pilatCrons.findOne({where: { id: id }});
    			if (objPilatCron) {
    				objPilatCron = await models.sequelize.pilatCrons.update(updatePilatCron, { where: { id: id } });
    			}
    		} else {
    			objPilatCron = await models.mongoose.pilatCrons.findOneAndUpdate({id: id}, {$set: updatePilatCron}, {new: true});
    		}
    		return objPilatCron;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatCronByCroStatus(croStatus, updatePilatCron) {
    	try {
    		let objPilatCron;
    		if(sql) {
    			objPilatCron = await models.sequelize.pilatCrons.findOne({where: { cro_status: croStatus }});
    			if (objPilatCron) {
    				objPilatCron = await models.sequelize.pilatCrons.update(updatePilatCron, { where: { cro_status: croStatus } });
    			}
    		} else {
    			objPilatCron = await models.mongoose.pilatCrons.findOneAndUpdate({cro_status: croStatus}, {$set: updatePilatCron}, {new: true});
    		}
    		return objPilatCron;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatCronByCroDescription(croDescription, updatePilatCron) {
    	try {
    		let objPilatCron;
    		if(sql) {
    			objPilatCron = await models.sequelize.pilatCrons.findOne({where: { cro_description: croDescription }});
    			if (objPilatCron) {
    				objPilatCron = await models.sequelize.pilatCrons.update(updatePilatCron, { where: { cro_description: croDescription } });
    			}
    		} else {
    			objPilatCron = await models.mongoose.pilatCrons.findOneAndUpdate({cro_description: croDescription}, {$set: updatePilatCron}, {new: true});
    		}
    		return objPilatCron;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatCronByCroExpression(croExpression, updatePilatCron) {
    	try {
    		let objPilatCron;
    		if(sql) {
    			objPilatCron = await models.sequelize.pilatCrons.findOne({where: { cro_expression: croExpression }});
    			if (objPilatCron) {
    				objPilatCron = await models.sequelize.pilatCrons.update(updatePilatCron, { where: { cro_expression: croExpression } });
    			}
    		} else {
    			objPilatCron = await models.mongoose.pilatCrons.findOneAndUpdate({cro_expression: croExpression}, {$set: updatePilatCron}, {new: true});
    		}
    		return objPilatCron;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatCronByCroGroup(croGroup, updatePilatCron) {
    	try {
    		let objPilatCron;
    		if(sql) {
    			objPilatCron = await models.sequelize.pilatCrons.findOne({where: { cro_group: croGroup }});
    			if (objPilatCron) {
    				objPilatCron = await models.sequelize.pilatCrons.update(updatePilatCron, { where: { cro_group: croGroup } });
    			}
    		} else {
    			objPilatCron = await models.mongoose.pilatCrons.findOneAndUpdate({cro_group: croGroup}, {$set: updatePilatCron}, {new: true});
    		}
    		return objPilatCron;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatCronByCroMaiId(croMaiId, updatePilatCron) {
    	try {
    		let objPilatCron;
    		if(sql) {
    			objPilatCron = await models.sequelize.pilatCrons.findOne({where: { cro_mai_id: croMaiId }});
    			if (objPilatCron) {
    				objPilatCron = await models.sequelize.pilatCrons.update(updatePilatCron, { where: { cro_mai_id: croMaiId } });
    			}
    		} else {
    			objPilatCron = await models.mongoose.pilatCrons.findOneAndUpdate({cro_mai_id: croMaiId}, {$set: updatePilatCron}, {new: true});
    		}
    		return objPilatCron;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatCronByCreatedby(createdby, updatePilatCron) {
    	try {
    		let objPilatCron;
    		if(sql) {
    			objPilatCron = await models.sequelize.pilatCrons.findOne({where: { createdBy: createdby }});
    			if (objPilatCron) {
    				objPilatCron = await models.sequelize.pilatCrons.update(updatePilatCron, { where: { createdBy: createdby } });
    			}
    		} else {
    			objPilatCron = await models.mongoose.pilatCrons.findOneAndUpdate({createdBy: createdby}, {$set: updatePilatCron}, {new: true});
    		}
    		return objPilatCron;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatCronByUpdatedby(updatedby, updatePilatCron) {
    	try {
    		let objPilatCron;
    		if(sql) {
    			objPilatCron = await models.sequelize.pilatCrons.findOne({where: { updatedBy: updatedby }});
    			if (objPilatCron) {
    				objPilatCron = await models.sequelize.pilatCrons.update(updatePilatCron, { where: { updatedBy: updatedby } });
    			}
    		} else {
    			objPilatCron = await models.mongoose.pilatCrons.findOneAndUpdate({updatedBy: updatedby}, {$set: updatePilatCron}, {new: true});
    		}
    		return objPilatCron;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatCronByDueat(dueat, updatePilatCron) {
    	try {
    		let objPilatCron;
    		if(sql) {
    			objPilatCron = await models.sequelize.pilatCrons.findOne({where: { dueAt: dueat }});
    			if (objPilatCron) {
    				objPilatCron = await models.sequelize.pilatCrons.update(updatePilatCron, { where: { dueAt: dueat } });
    			}
    		} else {
    			objPilatCron = await models.mongoose.pilatCrons.findOneAndUpdate({dueAt: dueat}, {$set: updatePilatCron}, {new: true});
    		}
    		return objPilatCron;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatCronByCreatedat(createdat, updatePilatCron) {
    	try {
    		let objPilatCron;
    		if(sql) {
    			objPilatCron = await models.sequelize.pilatCrons.findOne({where: { createdAt: createdat }});
    			if (objPilatCron) {
    				objPilatCron = await models.sequelize.pilatCrons.update(updatePilatCron, { where: { createdAt: createdat } });
    			}
    		} else {
    			objPilatCron = await models.mongoose.pilatCrons.findOneAndUpdate({createdAt: createdat}, {$set: updatePilatCron}, {new: true});
    		}
    		return objPilatCron;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatCronByUpdatedat(updatedat, updatePilatCron) {
    	try {
    		let objPilatCron;
    		if(sql) {
    			objPilatCron = await models.sequelize.pilatCrons.findOne({where: { updatedAt: updatedat }});
    			if (objPilatCron) {
    				objPilatCron = await models.sequelize.pilatCrons.update(updatePilatCron, { where: { updatedAt: updatedat } });
    			}
    		} else {
    			objPilatCron = await models.mongoose.pilatCrons.findOneAndUpdate({updatedAt: updatedat}, {$set: updatePilatCron}, {new: true});
    		}
    		return objPilatCron;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = PilatCronService;
//</es-section>
