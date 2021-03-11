/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:28 GMT-0400 (Bolivia Time)
 * Time: 14:57:28
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:28 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:28
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

class PilatParamService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllPilatParams(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.pilatParams.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['_id','ASC']],
                });
			} else {
				return await models.mongoose.pilatParams.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllPilatParams(select = []) {
		try {
			if(sql) {
				return await models.sequelize.pilatParams.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.pilatParams.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addPilatParam(newPilatParam) {
		try {
			let objPilatParam;
			if(util.PrimaryKeyTypeIsString(models.sequelize.pilatParams.primaryKeys._id.type.toString())) {
			    newPilatParam._id = models.sequelize.objectId().toString();
		    }
			
			if(!newPilatParam.id) {
              let max = await models.sequelize.pilatParams.max('id');
              newPilatParam.id = newPilatParam.id ? newPilatParam.id : max+1;
			}
			
			
			
			if(sql) {
				objPilatParam = await models.sequelize.pilatParams.create(newPilatParam);
			} else {
				objPilatParam = new models.mongoose.pilatParams(newPilatParam);
				await objPilatParam.save();
			}
			return objPilatParam;
		} catch (error) {
			throw error;
		}
	}

	static async updatePilatParam(_id, updatePilatParam) {
		try {
			let objPilatParam;
			if(sql) {
				objPilatParam = await models.sequelize.pilatParams.findOne({where: { _id: util.String(_id) }});
				if (objPilatParam) {
					await models.sequelize.pilatParams.update(updatePilatParam, { where: { _id: util.String(_id) } });
					objPilatParam = await models.sequelize.pilatParams.findOne({where: { _id: util.String(_id) }});
				}
			} else {
				delete updatePilatParam._id;
				objPilatParam = await models.mongoose.pilatParams.findOneAndUpdate({_id:_id}, {$set: updatePilatParam}, {new: true});
			}
			return objPilatParam;
		} catch (error) {
			throw error;
		}
	}

	static async getAPilatParam(_id, query) {
		try {
			let objPilatParam;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objPilatParam = await models.sequelize.pilatParams.findOne({
					    where: where && !where.where ? where : { _id: util.String(_id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objPilatParam = await models.mongoose.pilatParams.find({_id:util.String(_id)}).select(query.select);
			}
			return objPilatParam;
		} catch (error) {
			throw error;
		}
	}

	static async deletePilatParam(_id) {
		try {
			let objPilatParam;
			if(sql) {
				objPilatParam = await models.sequelize.pilatParams.findOne({ where: { _id: util.String(_id) } });
				if (objPilatParam) {
					await models.sequelize.pilatParams.destroy({where: { _id: util.String(_id) }});
				}
			} else {
				objPilatParam = await models.mongoose.pilatParams.deleteOne({_id:util.String(_id)});
			}
			return objPilatParam;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneByUid(Id, query = {}) {
    	try {
    		let objPilatParam;
    		if(sql) {
    			objPilatParam = await models.sequelize.pilatParams.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { _id: Id },
    			});
    		} else {
    			objPilatParam = await models.mongoose.pilatParams.findOne({_id: Id});
    		}
    		return objPilatParam;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneById(id, query = {}) {
    	try {
    		let objPilatParam;
    		if(sql) {
    			objPilatParam = await models.sequelize.pilatParams.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objPilatParam = await models.mongoose.pilatParams.findOne({id: id});
    		}
    		return objPilatParam;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParOrder(parOrder, query = {}) {
    	try {
    		let objPilatParam;
    		if(sql) {
    			objPilatParam = await models.sequelize.pilatParams.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { par_order: parOrder },
    			});
    		} else {
    			objPilatParam = await models.mongoose.pilatParams.findOne({par_order: parOrder});
    		}
    		return objPilatParam;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParCod(parCod, query = {}) {
    	try {
    		let objPilatParam;
    		if(sql) {
    			objPilatParam = await models.sequelize.pilatParams.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { par_cod: parCod },
    			});
    		} else {
    			objPilatParam = await models.mongoose.pilatParams.findOne({par_cod: parCod});
    		}
    		return objPilatParam;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParDescription(parDescription, query = {}) {
    	try {
    		let objPilatParam;
    		if(sql) {
    			objPilatParam = await models.sequelize.pilatParams.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { par_description: parDescription },
    			});
    		} else {
    			objPilatParam = await models.mongoose.pilatParams.findOne({par_description: parDescription});
    		}
    		return objPilatParam;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParAbbr(parAbbr, query = {}) {
    	try {
    		let objPilatParam;
    		if(sql) {
    			objPilatParam = await models.sequelize.pilatParams.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { par_abbr: parAbbr },
    			});
    		} else {
    			objPilatParam = await models.mongoose.pilatParams.findOne({par_abbr: parAbbr});
    		}
    		return objPilatParam;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParGroup(parGroup, query = {}) {
    	try {
    		let objPilatParam;
    		if(sql) {
    			objPilatParam = await models.sequelize.pilatParams.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { par_group: parGroup },
    			});
    		} else {
    			objPilatParam = await models.mongoose.pilatParams.findOne({par_group: parGroup});
    		}
    		return objPilatParam;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedby(createdby, query = {}) {
    	try {
    		let objPilatParam;
    		if(sql) {
    			objPilatParam = await models.sequelize.pilatParams.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { createdBy: createdby },
    			});
    		} else {
    			objPilatParam = await models.mongoose.pilatParams.findOne({createdBy: createdby});
    		}
    		return objPilatParam;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUpdatedby(updatedby, query = {}) {
    	try {
    		let objPilatParam;
    		if(sql) {
    			objPilatParam = await models.sequelize.pilatParams.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { updatedBy: updatedby },
    			});
    		} else {
    			objPilatParam = await models.mongoose.pilatParams.findOne({updatedBy: updatedby});
    		}
    		return objPilatParam;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParDictionaryId(parDictionaryId, query = {}) {
    	try {
    		let objPilatParam;
    		if(sql) {
    			objPilatParam = await models.sequelize.pilatParams.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { par_dictionary_id: parDictionaryId },
    			});
    		} else {
    			objPilatParam = await models.mongoose.pilatParams.findOne({par_dictionary_id: parDictionaryId});
    		}
    		return objPilatParam;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParStatusId(parStatusId, query = {}) {
    	try {
    		let objPilatParam;
    		if(sql) {
    			objPilatParam = await models.sequelize.pilatParams.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { par_status_id: parStatusId },
    			});
    		} else {
    			objPilatParam = await models.mongoose.pilatParams.findOne({par_status_id: parStatusId});
    		}
    		return objPilatParam;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParParentId(parParentId, query = {}) {
    	try {
    		let objPilatParam;
    		if(sql) {
    			objPilatParam = await models.sequelize.pilatParams.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { par_parent_id: parParentId },
    			});
    		} else {
    			objPilatParam = await models.mongoose.pilatParams.findOne({par_parent_id: parParentId});
    		}
    		return objPilatParam;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDuaat(duaat, query = {}) {
    	try {
    		let objPilatParam;
    		if(sql) {
    			objPilatParam = await models.sequelize.pilatParams.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { duaAt: duaat },
    			});
    		} else {
    			objPilatParam = await models.mongoose.pilatParams.findOne({duaAt: duaat});
    		}
    		return objPilatParam;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedat(createdat, query = {}) {
    	try {
    		let objPilatParam;
    		if(sql) {
    			objPilatParam = await models.sequelize.pilatParams.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { createdAt: createdat },
    			});
    		} else {
    			objPilatParam = await models.mongoose.pilatParams.findOne({createdAt: createdat});
    		}
    		return objPilatParam;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUpdatedat(updatedat, query = {}) {
    	try {
    		let objPilatParam;
    		if(sql) {
    			objPilatParam = await models.sequelize.pilatParams.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { updatedAt: updatedat },
    			});
    		} else {
    			objPilatParam = await models.mongoose.pilatParams.findOne({updatedAt: updatedat});
    		}
    		return objPilatParam;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updatePilatParamByUid(Id, updatePilatParam) {
    	try {
    		let objPilatParam;
    		if(sql) {
    			objPilatParam = await models.sequelize.pilatParams.findOne({where: { _id: Id }});
    			if (objPilatParam) {
    				objPilatParam = await models.sequelize.pilatParams.update(updatePilatParam, { where: { _id: Id } });
    			}
    		} else {
    			objPilatParam = await models.mongoose.pilatParams.findOneAndUpdate({_id: Id}, {$set: updatePilatParam}, {new: true});
    		}
    		return objPilatParam;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatParamById(id, updatePilatParam) {
    	try {
    		let objPilatParam;
    		if(sql) {
    			objPilatParam = await models.sequelize.pilatParams.findOne({where: { id: id }});
    			if (objPilatParam) {
    				objPilatParam = await models.sequelize.pilatParams.update(updatePilatParam, { where: { id: id } });
    			}
    		} else {
    			objPilatParam = await models.mongoose.pilatParams.findOneAndUpdate({id: id}, {$set: updatePilatParam}, {new: true});
    		}
    		return objPilatParam;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatParamByParOrder(parOrder, updatePilatParam) {
    	try {
    		let objPilatParam;
    		if(sql) {
    			objPilatParam = await models.sequelize.pilatParams.findOne({where: { par_order: parOrder }});
    			if (objPilatParam) {
    				objPilatParam = await models.sequelize.pilatParams.update(updatePilatParam, { where: { par_order: parOrder } });
    			}
    		} else {
    			objPilatParam = await models.mongoose.pilatParams.findOneAndUpdate({par_order: parOrder}, {$set: updatePilatParam}, {new: true});
    		}
    		return objPilatParam;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatParamByParCod(parCod, updatePilatParam) {
    	try {
    		let objPilatParam;
    		if(sql) {
    			objPilatParam = await models.sequelize.pilatParams.findOne({where: { par_cod: parCod }});
    			if (objPilatParam) {
    				objPilatParam = await models.sequelize.pilatParams.update(updatePilatParam, { where: { par_cod: parCod } });
    			}
    		} else {
    			objPilatParam = await models.mongoose.pilatParams.findOneAndUpdate({par_cod: parCod}, {$set: updatePilatParam}, {new: true});
    		}
    		return objPilatParam;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatParamByParDescription(parDescription, updatePilatParam) {
    	try {
    		let objPilatParam;
    		if(sql) {
    			objPilatParam = await models.sequelize.pilatParams.findOne({where: { par_description: parDescription }});
    			if (objPilatParam) {
    				objPilatParam = await models.sequelize.pilatParams.update(updatePilatParam, { where: { par_description: parDescription } });
    			}
    		} else {
    			objPilatParam = await models.mongoose.pilatParams.findOneAndUpdate({par_description: parDescription}, {$set: updatePilatParam}, {new: true});
    		}
    		return objPilatParam;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatParamByParAbbr(parAbbr, updatePilatParam) {
    	try {
    		let objPilatParam;
    		if(sql) {
    			objPilatParam = await models.sequelize.pilatParams.findOne({where: { par_abbr: parAbbr }});
    			if (objPilatParam) {
    				objPilatParam = await models.sequelize.pilatParams.update(updatePilatParam, { where: { par_abbr: parAbbr } });
    			}
    		} else {
    			objPilatParam = await models.mongoose.pilatParams.findOneAndUpdate({par_abbr: parAbbr}, {$set: updatePilatParam}, {new: true});
    		}
    		return objPilatParam;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatParamByParGroup(parGroup, updatePilatParam) {
    	try {
    		let objPilatParam;
    		if(sql) {
    			objPilatParam = await models.sequelize.pilatParams.findOne({where: { par_group: parGroup }});
    			if (objPilatParam) {
    				objPilatParam = await models.sequelize.pilatParams.update(updatePilatParam, { where: { par_group: parGroup } });
    			}
    		} else {
    			objPilatParam = await models.mongoose.pilatParams.findOneAndUpdate({par_group: parGroup}, {$set: updatePilatParam}, {new: true});
    		}
    		return objPilatParam;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatParamByCreatedby(createdby, updatePilatParam) {
    	try {
    		let objPilatParam;
    		if(sql) {
    			objPilatParam = await models.sequelize.pilatParams.findOne({where: { createdBy: createdby }});
    			if (objPilatParam) {
    				objPilatParam = await models.sequelize.pilatParams.update(updatePilatParam, { where: { createdBy: createdby } });
    			}
    		} else {
    			objPilatParam = await models.mongoose.pilatParams.findOneAndUpdate({createdBy: createdby}, {$set: updatePilatParam}, {new: true});
    		}
    		return objPilatParam;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatParamByUpdatedby(updatedby, updatePilatParam) {
    	try {
    		let objPilatParam;
    		if(sql) {
    			objPilatParam = await models.sequelize.pilatParams.findOne({where: { updatedBy: updatedby }});
    			if (objPilatParam) {
    				objPilatParam = await models.sequelize.pilatParams.update(updatePilatParam, { where: { updatedBy: updatedby } });
    			}
    		} else {
    			objPilatParam = await models.mongoose.pilatParams.findOneAndUpdate({updatedBy: updatedby}, {$set: updatePilatParam}, {new: true});
    		}
    		return objPilatParam;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatParamByParDictionaryId(parDictionaryId, updatePilatParam) {
    	try {
    		let objPilatParam;
    		if(sql) {
    			objPilatParam = await models.sequelize.pilatParams.findOne({where: { par_dictionary_id: parDictionaryId }});
    			if (objPilatParam) {
    				objPilatParam = await models.sequelize.pilatParams.update(updatePilatParam, { where: { par_dictionary_id: parDictionaryId } });
    			}
    		} else {
    			objPilatParam = await models.mongoose.pilatParams.findOneAndUpdate({par_dictionary_id: parDictionaryId}, {$set: updatePilatParam}, {new: true});
    		}
    		return objPilatParam;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatParamByParStatusId(parStatusId, updatePilatParam) {
    	try {
    		let objPilatParam;
    		if(sql) {
    			objPilatParam = await models.sequelize.pilatParams.findOne({where: { par_status_id: parStatusId }});
    			if (objPilatParam) {
    				objPilatParam = await models.sequelize.pilatParams.update(updatePilatParam, { where: { par_status_id: parStatusId } });
    			}
    		} else {
    			objPilatParam = await models.mongoose.pilatParams.findOneAndUpdate({par_status_id: parStatusId}, {$set: updatePilatParam}, {new: true});
    		}
    		return objPilatParam;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatParamByParParentId(parParentId, updatePilatParam) {
    	try {
    		let objPilatParam;
    		if(sql) {
    			objPilatParam = await models.sequelize.pilatParams.findOne({where: { par_parent_id: parParentId }});
    			if (objPilatParam) {
    				objPilatParam = await models.sequelize.pilatParams.update(updatePilatParam, { where: { par_parent_id: parParentId } });
    			}
    		} else {
    			objPilatParam = await models.mongoose.pilatParams.findOneAndUpdate({par_parent_id: parParentId}, {$set: updatePilatParam}, {new: true});
    		}
    		return objPilatParam;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatParamByDuaat(duaat, updatePilatParam) {
    	try {
    		let objPilatParam;
    		if(sql) {
    			objPilatParam = await models.sequelize.pilatParams.findOne({where: { duaAt: duaat }});
    			if (objPilatParam) {
    				objPilatParam = await models.sequelize.pilatParams.update(updatePilatParam, { where: { duaAt: duaat } });
    			}
    		} else {
    			objPilatParam = await models.mongoose.pilatParams.findOneAndUpdate({duaAt: duaat}, {$set: updatePilatParam}, {new: true});
    		}
    		return objPilatParam;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatParamByCreatedat(createdat, updatePilatParam) {
    	try {
    		let objPilatParam;
    		if(sql) {
    			objPilatParam = await models.sequelize.pilatParams.findOne({where: { createdAt: createdat }});
    			if (objPilatParam) {
    				objPilatParam = await models.sequelize.pilatParams.update(updatePilatParam, { where: { createdAt: createdat } });
    			}
    		} else {
    			objPilatParam = await models.mongoose.pilatParams.findOneAndUpdate({createdAt: createdat}, {$set: updatePilatParam}, {new: true});
    		}
    		return objPilatParam;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatParamByUpdatedat(updatedat, updatePilatParam) {
    	try {
    		let objPilatParam;
    		if(sql) {
    			objPilatParam = await models.sequelize.pilatParams.findOne({where: { updatedAt: updatedat }});
    			if (objPilatParam) {
    				objPilatParam = await models.sequelize.pilatParams.update(updatePilatParam, { where: { updatedAt: updatedat } });
    			}
    		} else {
    			objPilatParam = await models.mongoose.pilatParams.findOneAndUpdate({updatedAt: updatedat}, {$set: updatePilatParam}, {new: true});
    		}
    		return objPilatParam;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async findPilatDictionariesParDictionaryWithDicCode(select = ['_id', 'dic_code'], query = {}) {
    	try {
    		let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? '0' : null;
    		if(sql) {
    		    return await models.sequelize.pilatDictionaries.findAll({
                    attributes: select,
                    where: { dic_group: {[Op.like]: '%grp_par_dictionary%'}},
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['_id','DESC']],
    		    });
    		} else {
    			return await models.mongoose.pilatDictionaries.find({dic_group: {$regex : ".*grp_par_dictionary.*"}}).select(select.join(' '));
    		}
    	} catch (error) {
            throw error;
    	}
    }
	
	static async findPilatParamsParStatusWithParOrder(select = ['_id', 'par_order'], query = {}) {
    	try {
    		let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? '0' : null;
    		if(sql) {
    		    return await models.sequelize.pilatParams.findAll({
                    attributes: select,
                    where: { par_group: {[Op.like]: '%grp_par_status%'}},
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['_id','DESC']],
    		    });
    		} else {
    			return await models.mongoose.pilatParams.find({par_group: {$regex : ".*grp_par_status.*"}}).select(select.join(' '));
    		}
    	} catch (error) {
            throw error;
    	}
    }
	
	static async findPilatParamsParParentWithParOrder(select = ['_id', 'par_order'], query = {}) {
    	try {
    		let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? '0' : null;
    		if(sql) {
    		    return await models.sequelize.pilatParams.findAll({
                    attributes: select,
                    where: { par_group: {[Op.like]: '%grp_par_parent%'}},
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['_id','DESC']],
    		    });
    		} else {
    			return await models.mongoose.pilatParams.find({par_group: {$regex : ".*grp_par_parent.*"}}).select(select.join(' '));
    		}
    	} catch (error) {
            throw error;
    	}
    }
	
	
	static async filterPilatParamsByParDictionary(ids, query = {select:'',level:0}) {
    	try {
    	    let status = await this.findPilatParamsParStatusWithParCod(['_id', 'par_abbr']);
        	let objPilatParam, project = {}, level, select;
        	level = Object.keys(query) && query.level ? query.level : 0;
        	select = Object.keys(query) && query.select ? query.select.split(',') : [];
        	select.forEach(sel => project[sel] = 1);
        	ids.forEach((id,i) => ids[i] = parseInt(id));
        	if(sql) {
    	        let enabled = status.find(param => param.dataValues.par_abbr == 'enabled');
    	        let idEnabled = enabled.dataValues._id;
        	    if ( level == 1 ) {
                    objPilatParam = await models.sequelize.pilatParams.findAll(
                        arraySqlLevel1Include
                    );
        	    } else if( level == 2 ){
        	        objPilatParam = await models.sequelize.pilatParams.findAll(
                        arraySqlLevel2Include
                    );
        	    } else {
        	        objPilatParam = await models.sequelize.pilatParams.findAll(
                        arraySqlLevel0Include
                    );
        	    }
    		} else {
    		    let enabled = status.find(param => param._doc.par_abbr == 'enabled');
    		    let idEnabled = enabled._doc._id;
    		    if ( level == 1 ) {
                    objPilatParam = await models.mongoose.pilatParams.aggregate(
                        arrayMongoLevel1Aggregate
                    );
    		    } else if( level == 2 ) {
    		        objPilatParam = await models.mongoose.pilatParams.aggregate(
                        arrayMongoLevel2Aggregate
                    );
    		    } else {
    		        objPilatParam = await models.mongoose.pilatParams.aggregate(
                        arrayMongoLevel0Aggregate
                    );
    		    }
    		}
    		return objPilatParam;
    	} catch (error) {
            throw error;
    	}
    }
	
	static async filterPilatParamsByParStatus(ids, query = {select:'',level:0}) {
    	try {
    	    let status = await this.findPilatParamsParStatusWithParCod(['_id', 'par_abbr']);
        	let objPilatParam, project = {}, level, select;
        	level = Object.keys(query) && query.level ? query.level : 0;
        	select = Object.keys(query) && query.select ? query.select.split(',') : [];
        	select.forEach(sel => project[sel] = 1);
        	ids.forEach((id,i) => ids[i] = parseInt(id));
        	if(sql) {
    	        let enabled = status.find(param => param.dataValues.par_abbr == 'enabled');
    	        let idEnabled = enabled.dataValues._id;
        	    if ( level == 1 ) {
                    objPilatParam = await models.sequelize.pilatParams.findAll(
                        arraySqlLevel1Include
                    );
        	    } else if( level == 2 ){
        	        objPilatParam = await models.sequelize.pilatParams.findAll(
                        arraySqlLevel2Include
                    );
        	    } else {
        	        objPilatParam = await models.sequelize.pilatParams.findAll(
                        arraySqlLevel0Include
                    );
        	    }
    		} else {
    		    let enabled = status.find(param => param._doc.par_abbr == 'enabled');
    		    let idEnabled = enabled._doc._id;
    		    if ( level == 1 ) {
                    objPilatParam = await models.mongoose.pilatParams.aggregate(
                        arrayMongoLevel1Aggregate
                    );
    		    } else if( level == 2 ) {
    		        objPilatParam = await models.mongoose.pilatParams.aggregate(
                        arrayMongoLevel2Aggregate
                    );
    		    } else {
    		        objPilatParam = await models.mongoose.pilatParams.aggregate(
                        arrayMongoLevel0Aggregate
                    );
    		    }
    		}
    		return objPilatParam;
    	} catch (error) {
            throw error;
    	}
    }
	
	static async filterPilatParamsByParParent(ids, query = {select:'',level:0}) {
    	try {
    	    let status = await this.findPilatParamsParStatusWithParCod(['_id', 'par_abbr']);
        	let objPilatParam, project = {}, level, select;
        	level = Object.keys(query) && query.level ? query.level : 0;
        	select = Object.keys(query) && query.select ? query.select.split(',') : [];
        	select.forEach(sel => project[sel] = 1);
        	ids.forEach((id,i) => ids[i] = parseInt(id));
        	if(sql) {
    	        let enabled = status.find(param => param.dataValues.par_abbr == 'enabled');
    	        let idEnabled = enabled.dataValues._id;
        	    if ( level == 1 ) {
                    objPilatParam = await models.sequelize.pilatParams.findAll(
                        arraySqlLevel1Include
                    );
        	    } else if( level == 2 ){
        	        objPilatParam = await models.sequelize.pilatParams.findAll(
                        arraySqlLevel2Include
                    );
        	    } else {
        	        objPilatParam = await models.sequelize.pilatParams.findAll(
                        arraySqlLevel0Include
                    );
        	    }
    		} else {
    		    let enabled = status.find(param => param._doc.par_abbr == 'enabled');
    		    let idEnabled = enabled._doc._id;
    		    if ( level == 1 ) {
                    objPilatParam = await models.mongoose.pilatParams.aggregate(
                        arrayMongoLevel1Aggregate
                    );
    		    } else if( level == 2 ) {
    		        objPilatParam = await models.mongoose.pilatParams.aggregate(
                        arrayMongoLevel2Aggregate
                    );
    		    } else {
    		        objPilatParam = await models.mongoose.pilatParams.aggregate(
                        arrayMongoLevel0Aggregate
                    );
    		    }
    		}
    		return objPilatParam;
    	} catch (error) {
            throw error;
    	}
    }
	
	
	//</es-section>
}

//<es-section>
module.exports = PilatParamService;
//</es-section>
