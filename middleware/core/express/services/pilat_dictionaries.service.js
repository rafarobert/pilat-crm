/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:16 GMT-0400 (Bolivia Time)
 * Time: 14:1:16
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:16 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:16
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

class PilatDictionaryService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllPilatDictionaries(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.pilatDictionaries.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['_id','ASC']],
                });
			} else {
				return await models.mongoose.pilatDictionaries.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllPilatDictionaries(select = []) {
		try {
			if(sql) {
				return await models.sequelize.pilatDictionaries.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.pilatDictionaries.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addPilatDictionary(newPilatDictionary) {
		try {
			let objPilatDictionary;
			if(util.PrimaryKeyTypeIsString(models.sequelize.pilatDictionaries.primaryKeys._id.type.toString())) {
			    newPilatDictionary._id = models.sequelize.objectId().toString();
		    }
			
			if(!newPilatDictionary.id) {
              let max = await models.sequelize.pilatDictionaries.max('id');
              newPilatDictionary.id = newPilatDictionary.id ? newPilatDictionary.id : max+1;
			}
			
			
			
			if(sql) {
				objPilatDictionary = await models.sequelize.pilatDictionaries.create(newPilatDictionary);
			} else {
				objPilatDictionary = new models.mongoose.pilatDictionaries(newPilatDictionary);
				await objPilatDictionary.save();
			}
			return objPilatDictionary;
		} catch (error) {
			throw error;
		}
	}

	static async updatePilatDictionary(_id, updatePilatDictionary) {
		try {
			let objPilatDictionary;
			if(sql) {
				objPilatDictionary = await models.sequelize.pilatDictionaries.findOne({where: { _id: util.String(_id) }});
				if (objPilatDictionary) {
					await models.sequelize.pilatDictionaries.update(updatePilatDictionary, { where: { _id: util.String(_id) } });
					objPilatDictionary = await models.sequelize.pilatDictionaries.findOne({where: { _id: util.String(_id) }});
				}
			} else {
				delete updatePilatDictionary._id;
				objPilatDictionary = await models.mongoose.pilatDictionaries.findOneAndUpdate({_id:_id}, {$set: updatePilatDictionary}, {new: true});
			}
			return objPilatDictionary;
		} catch (error) {
			throw error;
		}
	}

	static async getAPilatDictionary(_id, query) {
		try {
			let objPilatDictionary;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objPilatDictionary = await models.sequelize.pilatDictionaries.findOne({
					    where: where && !where.where ? where : { _id: util.String(_id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objPilatDictionary = await models.mongoose.pilatDictionaries.find({_id:util.String(_id)}).select(query.select);
			}
			return objPilatDictionary;
		} catch (error) {
			throw error;
		}
	}

	static async deletePilatDictionary(_id) {
		try {
			let objPilatDictionary;
			if(sql) {
				objPilatDictionary = await models.sequelize.pilatDictionaries.findOne({ where: { _id: util.String(_id) } });
				if (objPilatDictionary) {
					await models.sequelize.pilatDictionaries.destroy({where: { _id: util.String(_id) }});
				}
			} else {
				objPilatDictionary = await models.mongoose.pilatDictionaries.deleteOne({_id:util.String(_id)});
			}
			return objPilatDictionary;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneByUid(Id, query = {}) {
    	try {
    		let objPilatDictionary;
    		if(sql) {
    			objPilatDictionary = await models.sequelize.pilatDictionaries.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { _id: Id },
    			});
    		} else {
    			objPilatDictionary = await models.mongoose.pilatDictionaries.findOne({_id: Id});
    		}
    		return objPilatDictionary;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneById(id, query = {}) {
    	try {
    		let objPilatDictionary;
    		if(sql) {
    			objPilatDictionary = await models.sequelize.pilatDictionaries.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objPilatDictionary = await models.mongoose.pilatDictionaries.findOne({id: id});
    		}
    		return objPilatDictionary;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDicCode(dicCode, query = {}) {
    	try {
    		let objPilatDictionary;
    		if(sql) {
    			objPilatDictionary = await models.sequelize.pilatDictionaries.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { dic_code: dicCode },
    			});
    		} else {
    			objPilatDictionary = await models.mongoose.pilatDictionaries.findOne({dic_code: dicCode});
    		}
    		return objPilatDictionary;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDicDescription(dicDescription, query = {}) {
    	try {
    		let objPilatDictionary;
    		if(sql) {
    			objPilatDictionary = await models.sequelize.pilatDictionaries.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { dic_description: dicDescription },
    			});
    		} else {
    			objPilatDictionary = await models.mongoose.pilatDictionaries.findOne({dic_description: dicDescription});
    		}
    		return objPilatDictionary;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDicGroup(dicGroup, query = {}) {
    	try {
    		let objPilatDictionary;
    		if(sql) {
    			objPilatDictionary = await models.sequelize.pilatDictionaries.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { dic_group: dicGroup },
    			});
    		} else {
    			objPilatDictionary = await models.mongoose.pilatDictionaries.findOne({dic_group: dicGroup});
    		}
    		return objPilatDictionary;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDicParStatusId(dicParStatusId, query = {}) {
    	try {
    		let objPilatDictionary;
    		if(sql) {
    			objPilatDictionary = await models.sequelize.pilatDictionaries.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { dic_par_status_id: dicParStatusId },
    			});
    		} else {
    			objPilatDictionary = await models.mongoose.pilatDictionaries.findOne({dic_par_status_id: dicParStatusId});
    		}
    		return objPilatDictionary;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedby(createdby, query = {}) {
    	try {
    		let objPilatDictionary;
    		if(sql) {
    			objPilatDictionary = await models.sequelize.pilatDictionaries.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { createdBy: createdby },
    			});
    		} else {
    			objPilatDictionary = await models.mongoose.pilatDictionaries.findOne({createdBy: createdby});
    		}
    		return objPilatDictionary;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUpdatedby(updatedby, query = {}) {
    	try {
    		let objPilatDictionary;
    		if(sql) {
    			objPilatDictionary = await models.sequelize.pilatDictionaries.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { updatedBy: updatedby },
    			});
    		} else {
    			objPilatDictionary = await models.mongoose.pilatDictionaries.findOne({updatedBy: updatedby});
    		}
    		return objPilatDictionary;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDueat(dueat, query = {}) {
    	try {
    		let objPilatDictionary;
    		if(sql) {
    			objPilatDictionary = await models.sequelize.pilatDictionaries.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { dueAt: dueat },
    			});
    		} else {
    			objPilatDictionary = await models.mongoose.pilatDictionaries.findOne({dueAt: dueat});
    		}
    		return objPilatDictionary;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedat(createdat, query = {}) {
    	try {
    		let objPilatDictionary;
    		if(sql) {
    			objPilatDictionary = await models.sequelize.pilatDictionaries.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { createdAt: createdat },
    			});
    		} else {
    			objPilatDictionary = await models.mongoose.pilatDictionaries.findOne({createdAt: createdat});
    		}
    		return objPilatDictionary;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUpdatedat(updatedat, query = {}) {
    	try {
    		let objPilatDictionary;
    		if(sql) {
    			objPilatDictionary = await models.sequelize.pilatDictionaries.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { updatedAt: updatedat },
    			});
    		} else {
    			objPilatDictionary = await models.mongoose.pilatDictionaries.findOne({updatedAt: updatedat});
    		}
    		return objPilatDictionary;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updatePilatDictionaryByUid(Id, updatePilatDictionary) {
    	try {
    		let objPilatDictionary;
    		if(sql) {
    			objPilatDictionary = await models.sequelize.pilatDictionaries.findOne({where: { _id: Id }});
    			if (objPilatDictionary) {
    				objPilatDictionary = await models.sequelize.pilatDictionaries.update(updatePilatDictionary, { where: { _id: Id } });
    			}
    		} else {
    			objPilatDictionary = await models.mongoose.pilatDictionaries.findOneAndUpdate({_id: Id}, {$set: updatePilatDictionary}, {new: true});
    		}
    		return objPilatDictionary;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatDictionaryById(id, updatePilatDictionary) {
    	try {
    		let objPilatDictionary;
    		if(sql) {
    			objPilatDictionary = await models.sequelize.pilatDictionaries.findOne({where: { id: id }});
    			if (objPilatDictionary) {
    				objPilatDictionary = await models.sequelize.pilatDictionaries.update(updatePilatDictionary, { where: { id: id } });
    			}
    		} else {
    			objPilatDictionary = await models.mongoose.pilatDictionaries.findOneAndUpdate({id: id}, {$set: updatePilatDictionary}, {new: true});
    		}
    		return objPilatDictionary;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatDictionaryByDicCode(dicCode, updatePilatDictionary) {
    	try {
    		let objPilatDictionary;
    		if(sql) {
    			objPilatDictionary = await models.sequelize.pilatDictionaries.findOne({where: { dic_code: dicCode }});
    			if (objPilatDictionary) {
    				objPilatDictionary = await models.sequelize.pilatDictionaries.update(updatePilatDictionary, { where: { dic_code: dicCode } });
    			}
    		} else {
    			objPilatDictionary = await models.mongoose.pilatDictionaries.findOneAndUpdate({dic_code: dicCode}, {$set: updatePilatDictionary}, {new: true});
    		}
    		return objPilatDictionary;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatDictionaryByDicDescription(dicDescription, updatePilatDictionary) {
    	try {
    		let objPilatDictionary;
    		if(sql) {
    			objPilatDictionary = await models.sequelize.pilatDictionaries.findOne({where: { dic_description: dicDescription }});
    			if (objPilatDictionary) {
    				objPilatDictionary = await models.sequelize.pilatDictionaries.update(updatePilatDictionary, { where: { dic_description: dicDescription } });
    			}
    		} else {
    			objPilatDictionary = await models.mongoose.pilatDictionaries.findOneAndUpdate({dic_description: dicDescription}, {$set: updatePilatDictionary}, {new: true});
    		}
    		return objPilatDictionary;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatDictionaryByDicGroup(dicGroup, updatePilatDictionary) {
    	try {
    		let objPilatDictionary;
    		if(sql) {
    			objPilatDictionary = await models.sequelize.pilatDictionaries.findOne({where: { dic_group: dicGroup }});
    			if (objPilatDictionary) {
    				objPilatDictionary = await models.sequelize.pilatDictionaries.update(updatePilatDictionary, { where: { dic_group: dicGroup } });
    			}
    		} else {
    			objPilatDictionary = await models.mongoose.pilatDictionaries.findOneAndUpdate({dic_group: dicGroup}, {$set: updatePilatDictionary}, {new: true});
    		}
    		return objPilatDictionary;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatDictionaryByDicParStatusId(dicParStatusId, updatePilatDictionary) {
    	try {
    		let objPilatDictionary;
    		if(sql) {
    			objPilatDictionary = await models.sequelize.pilatDictionaries.findOne({where: { dic_par_status_id: dicParStatusId }});
    			if (objPilatDictionary) {
    				objPilatDictionary = await models.sequelize.pilatDictionaries.update(updatePilatDictionary, { where: { dic_par_status_id: dicParStatusId } });
    			}
    		} else {
    			objPilatDictionary = await models.mongoose.pilatDictionaries.findOneAndUpdate({dic_par_status_id: dicParStatusId}, {$set: updatePilatDictionary}, {new: true});
    		}
    		return objPilatDictionary;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatDictionaryByCreatedby(createdby, updatePilatDictionary) {
    	try {
    		let objPilatDictionary;
    		if(sql) {
    			objPilatDictionary = await models.sequelize.pilatDictionaries.findOne({where: { createdBy: createdby }});
    			if (objPilatDictionary) {
    				objPilatDictionary = await models.sequelize.pilatDictionaries.update(updatePilatDictionary, { where: { createdBy: createdby } });
    			}
    		} else {
    			objPilatDictionary = await models.mongoose.pilatDictionaries.findOneAndUpdate({createdBy: createdby}, {$set: updatePilatDictionary}, {new: true});
    		}
    		return objPilatDictionary;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatDictionaryByUpdatedby(updatedby, updatePilatDictionary) {
    	try {
    		let objPilatDictionary;
    		if(sql) {
    			objPilatDictionary = await models.sequelize.pilatDictionaries.findOne({where: { updatedBy: updatedby }});
    			if (objPilatDictionary) {
    				objPilatDictionary = await models.sequelize.pilatDictionaries.update(updatePilatDictionary, { where: { updatedBy: updatedby } });
    			}
    		} else {
    			objPilatDictionary = await models.mongoose.pilatDictionaries.findOneAndUpdate({updatedBy: updatedby}, {$set: updatePilatDictionary}, {new: true});
    		}
    		return objPilatDictionary;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatDictionaryByDueat(dueat, updatePilatDictionary) {
    	try {
    		let objPilatDictionary;
    		if(sql) {
    			objPilatDictionary = await models.sequelize.pilatDictionaries.findOne({where: { dueAt: dueat }});
    			if (objPilatDictionary) {
    				objPilatDictionary = await models.sequelize.pilatDictionaries.update(updatePilatDictionary, { where: { dueAt: dueat } });
    			}
    		} else {
    			objPilatDictionary = await models.mongoose.pilatDictionaries.findOneAndUpdate({dueAt: dueat}, {$set: updatePilatDictionary}, {new: true});
    		}
    		return objPilatDictionary;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatDictionaryByCreatedat(createdat, updatePilatDictionary) {
    	try {
    		let objPilatDictionary;
    		if(sql) {
    			objPilatDictionary = await models.sequelize.pilatDictionaries.findOne({where: { createdAt: createdat }});
    			if (objPilatDictionary) {
    				objPilatDictionary = await models.sequelize.pilatDictionaries.update(updatePilatDictionary, { where: { createdAt: createdat } });
    			}
    		} else {
    			objPilatDictionary = await models.mongoose.pilatDictionaries.findOneAndUpdate({createdAt: createdat}, {$set: updatePilatDictionary}, {new: true});
    		}
    		return objPilatDictionary;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatDictionaryByUpdatedat(updatedat, updatePilatDictionary) {
    	try {
    		let objPilatDictionary;
    		if(sql) {
    			objPilatDictionary = await models.sequelize.pilatDictionaries.findOne({where: { updatedAt: updatedat }});
    			if (objPilatDictionary) {
    				objPilatDictionary = await models.sequelize.pilatDictionaries.update(updatePilatDictionary, { where: { updatedAt: updatedat } });
    			}
    		} else {
    			objPilatDictionary = await models.mongoose.pilatDictionaries.findOneAndUpdate({updatedAt: updatedat}, {$set: updatePilatDictionary}, {new: true});
    		}
    		return objPilatDictionary;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async findPilatParamsDicParStatusWithParOrder(select = ['_id', 'par_order'], query = {}) {
    	try {
    		let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? '0' : null;
    		if(sql) {
    		    return await models.sequelize.pilatParams.findAll({
                    attributes: select,
                    where: { par_group: {[Op.like]: '%grp_dic_par_status%'}},
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['_id','DESC']],
    		    });
    		} else {
    			return await models.mongoose.pilatParams.find({par_group: {$regex : ".*grp_dic_par_status.*"}}).select(select.join(' '));
    		}
    	} catch (error) {
            throw error;
    	}
    }
	
	
	static async filterPilatDictionariesByDicParStatus(ids, query = {select:'',level:0}) {
    	try {
    	    let status = await this.findPilatParamsDicParStatusWithParCod(['_id', 'par_abbr']);
        	let objPilatDictionary, project = {}, level, select;
        	level = Object.keys(query) && query.level ? query.level : 0;
        	select = Object.keys(query) && query.select ? query.select.split(',') : [];
        	select.forEach(sel => project[sel] = 1);
        	ids.forEach((id,i) => ids[i] = parseInt(id));
        	if(sql) {
    	        let enabled = status.find(param => param.dataValues.par_abbr == 'enabled');
    	        let idEnabled = enabled.dataValues._id;
        	    if ( level == 1 ) {
                    objPilatDictionary = await models.sequelize.pilatDictionaries.findAll(
                        arraySqlLevel1Include
                    );
        	    } else if( level == 2 ){
        	        objPilatDictionary = await models.sequelize.pilatDictionaries.findAll(
                        arraySqlLevel2Include
                    );
        	    } else {
        	        objPilatDictionary = await models.sequelize.pilatDictionaries.findAll(
                        arraySqlLevel0Include
                    );
        	    }
    		} else {
    		    let enabled = status.find(param => param._doc.par_abbr == 'enabled');
    		    let idEnabled = enabled._doc._id;
    		    if ( level == 1 ) {
                    objPilatDictionary = await models.mongoose.pilatDictionaries.aggregate(
                        arrayMongoLevel1Aggregate
                    );
    		    } else if( level == 2 ) {
    		        objPilatDictionary = await models.mongoose.pilatDictionaries.aggregate(
                        arrayMongoLevel2Aggregate
                    );
    		    } else {
    		        objPilatDictionary = await models.mongoose.pilatDictionaries.aggregate(
                        arrayMongoLevel0Aggregate
                    );
    		    }
    		}
    		return objPilatDictionary;
    	} catch (error) {
            throw error;
    	}
    }
	
	
	//</es-section>
}

//<es-section>
module.exports = PilatDictionaryService;
//</es-section>
