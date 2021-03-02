/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:50 GMT-0400 (Bolivia Time)
 * Time: 14:0:50
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:50 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:50
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

class FieldMetaDataService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllFieldsMetaData(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.fieldsMetaData.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.fieldsMetaData.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllFieldsMetaData(select = []) {
		try {
			if(sql) {
				return await models.sequelize.fieldsMetaData.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.fieldsMetaData.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addFieldMetaData(newFieldMetaData) {
		try {
			let objFieldMetaData;
			if(util.PrimaryKeyTypeIsString(models.sequelize.fieldsMetaData.primaryKeys.id.type.toString())) {
			    newFieldMetaData.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objFieldMetaData = await models.sequelize.fieldsMetaData.create(newFieldMetaData);
			} else {
				objFieldMetaData = new models.mongoose.fieldsMetaData(newFieldMetaData);
				await objFieldMetaData.save();
			}
			return objFieldMetaData;
		} catch (error) {
			throw error;
		}
	}

	static async updateFieldMetaData(id, updateFieldMetaData) {
		try {
			let objFieldMetaData;
			if(sql) {
				objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({where: { id: util.String(id) }});
				if (objFieldMetaData) {
					await models.sequelize.fieldsMetaData.update(updateFieldMetaData, { where: { id: util.String(id) } });
					objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateFieldMetaData._id;
				objFieldMetaData = await models.mongoose.fieldsMetaData.findOneAndUpdate({id:id}, {$set: updateFieldMetaData}, {new: true});
			}
			return objFieldMetaData;
		} catch (error) {
			throw error;
		}
	}

	static async getAFieldMetaData(id, query) {
		try {
			let objFieldMetaData;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objFieldMetaData = await models.mongoose.fieldsMetaData.find({id:util.String(id)}).select(query.select);
			}
			return objFieldMetaData;
		} catch (error) {
			throw error;
		}
	}

	static async deleteFieldMetaData(id) {
		try {
			let objFieldMetaData;
			if(sql) {
				objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({ where: { id: util.String(id) } });
				if (objFieldMetaData) {
					await models.sequelize.fieldsMetaData.destroy({where: { id: util.String(id) }});
				}
			} else {
				objFieldMetaData = await models.mongoose.fieldsMetaData.deleteOne({id:util.String(id)});
			}
			return objFieldMetaData;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objFieldMetaData;
    		if(sql) {
    			objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objFieldMetaData = await models.mongoose.fieldsMetaData.findOne({id: id});
    		}
    		return objFieldMetaData;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRequired(required, query = {}) {
    	try {
    		let objFieldMetaData;
    		if(sql) {
    			objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { required: required },
    			});
    		} else {
    			objFieldMetaData = await models.mongoose.fieldsMetaData.findOne({required: required});
    		}
    		return objFieldMetaData;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objFieldMetaData;
    		if(sql) {
    			objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objFieldMetaData = await models.mongoose.fieldsMetaData.findOne({deleted: deleted});
    		}
    		return objFieldMetaData;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAudited(audited, query = {}) {
    	try {
    		let objFieldMetaData;
    		if(sql) {
    			objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { audited: audited },
    			});
    		} else {
    			objFieldMetaData = await models.mongoose.fieldsMetaData.findOne({audited: audited});
    		}
    		return objFieldMetaData;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMassupdate(massupdate, query = {}) {
    	try {
    		let objFieldMetaData;
    		if(sql) {
    			objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { massupdate: massupdate },
    			});
    		} else {
    			objFieldMetaData = await models.mongoose.fieldsMetaData.findOne({massupdate: massupdate});
    		}
    		return objFieldMetaData;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByReportable(reportable, query = {}) {
    	try {
    		let objFieldMetaData;
    		if(sql) {
    			objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { reportable: reportable },
    			});
    		} else {
    			objFieldMetaData = await models.mongoose.fieldsMetaData.findOne({reportable: reportable});
    		}
    		return objFieldMetaData;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLen(len, query = {}) {
    	try {
    		let objFieldMetaData;
    		if(sql) {
    			objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { len: len },
    			});
    		} else {
    			objFieldMetaData = await models.mongoose.fieldsMetaData.findOne({len: len});
    		}
    		return objFieldMetaData;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objFieldMetaData;
    		if(sql) {
    			objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objFieldMetaData = await models.mongoose.fieldsMetaData.findOne({name: name});
    		}
    		return objFieldMetaData;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByVname(vname, query = {}) {
    	try {
    		let objFieldMetaData;
    		if(sql) {
    			objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { vname: vname },
    			});
    		} else {
    			objFieldMetaData = await models.mongoose.fieldsMetaData.findOne({vname: vname});
    		}
    		return objFieldMetaData;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByComments(comments, query = {}) {
    	try {
    		let objFieldMetaData;
    		if(sql) {
    			objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { comments: comments },
    			});
    		} else {
    			objFieldMetaData = await models.mongoose.fieldsMetaData.findOne({comments: comments});
    		}
    		return objFieldMetaData;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByHelp(help, query = {}) {
    	try {
    		let objFieldMetaData;
    		if(sql) {
    			objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { help: help },
    			});
    		} else {
    			objFieldMetaData = await models.mongoose.fieldsMetaData.findOne({help: help});
    		}
    		return objFieldMetaData;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCustomModule(customModule, query = {}) {
    	try {
    		let objFieldMetaData;
    		if(sql) {
    			objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { custom_module: customModule },
    			});
    		} else {
    			objFieldMetaData = await models.mongoose.fieldsMetaData.findOne({custom_module: customModule});
    		}
    		return objFieldMetaData;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByType(type, query = {}) {
    	try {
    		let objFieldMetaData;
    		if(sql) {
    			objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { type: type },
    			});
    		} else {
    			objFieldMetaData = await models.mongoose.fieldsMetaData.findOne({type: type});
    		}
    		return objFieldMetaData;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDefaultValue(defaultValue, query = {}) {
    	try {
    		let objFieldMetaData;
    		if(sql) {
    			objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { default_value: defaultValue },
    			});
    		} else {
    			objFieldMetaData = await models.mongoose.fieldsMetaData.findOne({default_value: defaultValue});
    		}
    		return objFieldMetaData;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByImportable(importable, query = {}) {
    	try {
    		let objFieldMetaData;
    		if(sql) {
    			objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { importable: importable },
    			});
    		} else {
    			objFieldMetaData = await models.mongoose.fieldsMetaData.findOne({importable: importable});
    		}
    		return objFieldMetaData;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByExt1(ext1, query = {}) {
    	try {
    		let objFieldMetaData;
    		if(sql) {
    			objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { ext1: ext1 },
    			});
    		} else {
    			objFieldMetaData = await models.mongoose.fieldsMetaData.findOne({ext1: ext1});
    		}
    		return objFieldMetaData;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByExt2(ext2, query = {}) {
    	try {
    		let objFieldMetaData;
    		if(sql) {
    			objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { ext2: ext2 },
    			});
    		} else {
    			objFieldMetaData = await models.mongoose.fieldsMetaData.findOne({ext2: ext2});
    		}
    		return objFieldMetaData;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByExt3(ext3, query = {}) {
    	try {
    		let objFieldMetaData;
    		if(sql) {
    			objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { ext3: ext3 },
    			});
    		} else {
    			objFieldMetaData = await models.mongoose.fieldsMetaData.findOne({ext3: ext3});
    		}
    		return objFieldMetaData;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByExt4(ext4, query = {}) {
    	try {
    		let objFieldMetaData;
    		if(sql) {
    			objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { ext4: ext4 },
    			});
    		} else {
    			objFieldMetaData = await models.mongoose.fieldsMetaData.findOne({ext4: ext4});
    		}
    		return objFieldMetaData;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objFieldMetaData;
    		if(sql) {
    			objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objFieldMetaData = await models.mongoose.fieldsMetaData.findOne({date_modified: dateModified});
    		}
    		return objFieldMetaData;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateFieldMetaDataById(id, updateFieldMetaData) {
    	try {
    		let objFieldMetaData;
    		if(sql) {
    			objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({where: { id: id }});
    			if (objFieldMetaData) {
    				objFieldMetaData = await models.sequelize.fieldsMetaData.update(updateFieldMetaData, { where: { id: id } });
    			}
    		} else {
    			objFieldMetaData = await models.mongoose.fieldsMetaData.findOneAndUpdate({id: id}, {$set: updateFieldMetaData}, {new: true});
    		}
    		return objFieldMetaData;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFieldMetaDataByRequired(required, updateFieldMetaData) {
    	try {
    		let objFieldMetaData;
    		if(sql) {
    			objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({where: { required: required }});
    			if (objFieldMetaData) {
    				objFieldMetaData = await models.sequelize.fieldsMetaData.update(updateFieldMetaData, { where: { required: required } });
    			}
    		} else {
    			objFieldMetaData = await models.mongoose.fieldsMetaData.findOneAndUpdate({required: required}, {$set: updateFieldMetaData}, {new: true});
    		}
    		return objFieldMetaData;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFieldMetaDataByDeleted(deleted, updateFieldMetaData) {
    	try {
    		let objFieldMetaData;
    		if(sql) {
    			objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({where: { deleted: deleted }});
    			if (objFieldMetaData) {
    				objFieldMetaData = await models.sequelize.fieldsMetaData.update(updateFieldMetaData, { where: { deleted: deleted } });
    			}
    		} else {
    			objFieldMetaData = await models.mongoose.fieldsMetaData.findOneAndUpdate({deleted: deleted}, {$set: updateFieldMetaData}, {new: true});
    		}
    		return objFieldMetaData;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFieldMetaDataByAudited(audited, updateFieldMetaData) {
    	try {
    		let objFieldMetaData;
    		if(sql) {
    			objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({where: { audited: audited }});
    			if (objFieldMetaData) {
    				objFieldMetaData = await models.sequelize.fieldsMetaData.update(updateFieldMetaData, { where: { audited: audited } });
    			}
    		} else {
    			objFieldMetaData = await models.mongoose.fieldsMetaData.findOneAndUpdate({audited: audited}, {$set: updateFieldMetaData}, {new: true});
    		}
    		return objFieldMetaData;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFieldMetaDataByMassupdate(massupdate, updateFieldMetaData) {
    	try {
    		let objFieldMetaData;
    		if(sql) {
    			objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({where: { massupdate: massupdate }});
    			if (objFieldMetaData) {
    				objFieldMetaData = await models.sequelize.fieldsMetaData.update(updateFieldMetaData, { where: { massupdate: massupdate } });
    			}
    		} else {
    			objFieldMetaData = await models.mongoose.fieldsMetaData.findOneAndUpdate({massupdate: massupdate}, {$set: updateFieldMetaData}, {new: true});
    		}
    		return objFieldMetaData;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFieldMetaDataByReportable(reportable, updateFieldMetaData) {
    	try {
    		let objFieldMetaData;
    		if(sql) {
    			objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({where: { reportable: reportable }});
    			if (objFieldMetaData) {
    				objFieldMetaData = await models.sequelize.fieldsMetaData.update(updateFieldMetaData, { where: { reportable: reportable } });
    			}
    		} else {
    			objFieldMetaData = await models.mongoose.fieldsMetaData.findOneAndUpdate({reportable: reportable}, {$set: updateFieldMetaData}, {new: true});
    		}
    		return objFieldMetaData;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFieldMetaDataByLen(len, updateFieldMetaData) {
    	try {
    		let objFieldMetaData;
    		if(sql) {
    			objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({where: { len: len }});
    			if (objFieldMetaData) {
    				objFieldMetaData = await models.sequelize.fieldsMetaData.update(updateFieldMetaData, { where: { len: len } });
    			}
    		} else {
    			objFieldMetaData = await models.mongoose.fieldsMetaData.findOneAndUpdate({len: len}, {$set: updateFieldMetaData}, {new: true});
    		}
    		return objFieldMetaData;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFieldMetaDataByName(name, updateFieldMetaData) {
    	try {
    		let objFieldMetaData;
    		if(sql) {
    			objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({where: { name: name }});
    			if (objFieldMetaData) {
    				objFieldMetaData = await models.sequelize.fieldsMetaData.update(updateFieldMetaData, { where: { name: name } });
    			}
    		} else {
    			objFieldMetaData = await models.mongoose.fieldsMetaData.findOneAndUpdate({name: name}, {$set: updateFieldMetaData}, {new: true});
    		}
    		return objFieldMetaData;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFieldMetaDataByVname(vname, updateFieldMetaData) {
    	try {
    		let objFieldMetaData;
    		if(sql) {
    			objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({where: { vname: vname }});
    			if (objFieldMetaData) {
    				objFieldMetaData = await models.sequelize.fieldsMetaData.update(updateFieldMetaData, { where: { vname: vname } });
    			}
    		} else {
    			objFieldMetaData = await models.mongoose.fieldsMetaData.findOneAndUpdate({vname: vname}, {$set: updateFieldMetaData}, {new: true});
    		}
    		return objFieldMetaData;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFieldMetaDataByComments(comments, updateFieldMetaData) {
    	try {
    		let objFieldMetaData;
    		if(sql) {
    			objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({where: { comments: comments }});
    			if (objFieldMetaData) {
    				objFieldMetaData = await models.sequelize.fieldsMetaData.update(updateFieldMetaData, { where: { comments: comments } });
    			}
    		} else {
    			objFieldMetaData = await models.mongoose.fieldsMetaData.findOneAndUpdate({comments: comments}, {$set: updateFieldMetaData}, {new: true});
    		}
    		return objFieldMetaData;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFieldMetaDataByHelp(help, updateFieldMetaData) {
    	try {
    		let objFieldMetaData;
    		if(sql) {
    			objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({where: { help: help }});
    			if (objFieldMetaData) {
    				objFieldMetaData = await models.sequelize.fieldsMetaData.update(updateFieldMetaData, { where: { help: help } });
    			}
    		} else {
    			objFieldMetaData = await models.mongoose.fieldsMetaData.findOneAndUpdate({help: help}, {$set: updateFieldMetaData}, {new: true});
    		}
    		return objFieldMetaData;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFieldMetaDataByCustomModule(customModule, updateFieldMetaData) {
    	try {
    		let objFieldMetaData;
    		if(sql) {
    			objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({where: { custom_module: customModule }});
    			if (objFieldMetaData) {
    				objFieldMetaData = await models.sequelize.fieldsMetaData.update(updateFieldMetaData, { where: { custom_module: customModule } });
    			}
    		} else {
    			objFieldMetaData = await models.mongoose.fieldsMetaData.findOneAndUpdate({custom_module: customModule}, {$set: updateFieldMetaData}, {new: true});
    		}
    		return objFieldMetaData;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFieldMetaDataByType(type, updateFieldMetaData) {
    	try {
    		let objFieldMetaData;
    		if(sql) {
    			objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({where: { type: type }});
    			if (objFieldMetaData) {
    				objFieldMetaData = await models.sequelize.fieldsMetaData.update(updateFieldMetaData, { where: { type: type } });
    			}
    		} else {
    			objFieldMetaData = await models.mongoose.fieldsMetaData.findOneAndUpdate({type: type}, {$set: updateFieldMetaData}, {new: true});
    		}
    		return objFieldMetaData;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFieldMetaDataByDefaultValue(defaultValue, updateFieldMetaData) {
    	try {
    		let objFieldMetaData;
    		if(sql) {
    			objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({where: { default_value: defaultValue }});
    			if (objFieldMetaData) {
    				objFieldMetaData = await models.sequelize.fieldsMetaData.update(updateFieldMetaData, { where: { default_value: defaultValue } });
    			}
    		} else {
    			objFieldMetaData = await models.mongoose.fieldsMetaData.findOneAndUpdate({default_value: defaultValue}, {$set: updateFieldMetaData}, {new: true});
    		}
    		return objFieldMetaData;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFieldMetaDataByImportable(importable, updateFieldMetaData) {
    	try {
    		let objFieldMetaData;
    		if(sql) {
    			objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({where: { importable: importable }});
    			if (objFieldMetaData) {
    				objFieldMetaData = await models.sequelize.fieldsMetaData.update(updateFieldMetaData, { where: { importable: importable } });
    			}
    		} else {
    			objFieldMetaData = await models.mongoose.fieldsMetaData.findOneAndUpdate({importable: importable}, {$set: updateFieldMetaData}, {new: true});
    		}
    		return objFieldMetaData;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFieldMetaDataByExt1(ext1, updateFieldMetaData) {
    	try {
    		let objFieldMetaData;
    		if(sql) {
    			objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({where: { ext1: ext1 }});
    			if (objFieldMetaData) {
    				objFieldMetaData = await models.sequelize.fieldsMetaData.update(updateFieldMetaData, { where: { ext1: ext1 } });
    			}
    		} else {
    			objFieldMetaData = await models.mongoose.fieldsMetaData.findOneAndUpdate({ext1: ext1}, {$set: updateFieldMetaData}, {new: true});
    		}
    		return objFieldMetaData;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFieldMetaDataByExt2(ext2, updateFieldMetaData) {
    	try {
    		let objFieldMetaData;
    		if(sql) {
    			objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({where: { ext2: ext2 }});
    			if (objFieldMetaData) {
    				objFieldMetaData = await models.sequelize.fieldsMetaData.update(updateFieldMetaData, { where: { ext2: ext2 } });
    			}
    		} else {
    			objFieldMetaData = await models.mongoose.fieldsMetaData.findOneAndUpdate({ext2: ext2}, {$set: updateFieldMetaData}, {new: true});
    		}
    		return objFieldMetaData;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFieldMetaDataByExt3(ext3, updateFieldMetaData) {
    	try {
    		let objFieldMetaData;
    		if(sql) {
    			objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({where: { ext3: ext3 }});
    			if (objFieldMetaData) {
    				objFieldMetaData = await models.sequelize.fieldsMetaData.update(updateFieldMetaData, { where: { ext3: ext3 } });
    			}
    		} else {
    			objFieldMetaData = await models.mongoose.fieldsMetaData.findOneAndUpdate({ext3: ext3}, {$set: updateFieldMetaData}, {new: true});
    		}
    		return objFieldMetaData;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFieldMetaDataByExt4(ext4, updateFieldMetaData) {
    	try {
    		let objFieldMetaData;
    		if(sql) {
    			objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({where: { ext4: ext4 }});
    			if (objFieldMetaData) {
    				objFieldMetaData = await models.sequelize.fieldsMetaData.update(updateFieldMetaData, { where: { ext4: ext4 } });
    			}
    		} else {
    			objFieldMetaData = await models.mongoose.fieldsMetaData.findOneAndUpdate({ext4: ext4}, {$set: updateFieldMetaData}, {new: true});
    		}
    		return objFieldMetaData;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFieldMetaDataByDateModified(dateModified, updateFieldMetaData) {
    	try {
    		let objFieldMetaData;
    		if(sql) {
    			objFieldMetaData = await models.sequelize.fieldsMetaData.findOne({where: { date_modified: dateModified }});
    			if (objFieldMetaData) {
    				objFieldMetaData = await models.sequelize.fieldsMetaData.update(updateFieldMetaData, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objFieldMetaData = await models.mongoose.fieldsMetaData.findOneAndUpdate({date_modified: dateModified}, {$set: updateFieldMetaData}, {new: true});
    		}
    		return objFieldMetaData;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = FieldMetaDataService;
//</es-section>
