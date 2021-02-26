/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:08 GMT-0400 (Bolivia Time)
 * Time: 0:22:8
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:08 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:8
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

class AorFieldService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAorFields(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aorFields.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aorFields.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAorFields(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aorFields.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aorFields.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAorField(newAorField) {
		try {
			let objAorField;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aorFields.primaryKeys.id.type.toString())) {
			    newAorField.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAorField = await models.sequelize.aorFields.create(newAorField);
			} else {
				objAorField = new models.mongoose.aorFields(newAorField);
				await objAorField.save();
			}
			return objAorField;
		} catch (error) {
			throw error;
		}
	}

	static async updateAorField(id, updateAorField) {
		try {
			let objAorField;
			if(sql) {
				objAorField = await models.sequelize.aorFields.findOne({where: { id: util.Char(id) }});
				if (objAorField) {
					await models.sequelize.aorFields.update(updateAorField, { where: { id: util.Char(id) } });
					objAorField = await models.sequelize.aorFields.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAorField._id;
				objAorField = await models.mongoose.aorFields.findOneAndUpdate({id:id}, {$set: updateAorField}, {new: true});
			}
			return objAorField;
		} catch (error) {
			throw error;
		}
	}

	static async getAAorField(id, query) {
		try {
			let objAorField;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAorField = await models.sequelize.aorFields.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAorField = await models.mongoose.aorFields.find({id:util.Char(id)}).select(query.select);
			}
			return objAorField;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAorField(id) {
		try {
			let objAorField;
			if(sql) {
				objAorField = await models.sequelize.aorFields.findOne({ where: { id: util.Char(id) } });
				if (objAorField) {
					await models.sequelize.aorFields.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAorField = await models.mongoose.aorFields.deleteOne({id:util.Char(id)});
			}
			return objAorField;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAorField = await models.mongoose.aorFields.findOne({id: id});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAorField = await models.mongoose.aorFields.findOne({deleted: deleted});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDisplay(display, query = {}) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { display: display },
    			});
    		} else {
    			objAorField = await models.mongoose.aorFields.findOne({display: display});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLink(link, query = {}) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { link: link },
    			});
    		} else {
    			objAorField = await models.mongoose.aorFields.findOne({link: link});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByGroupBy(groupBy, query = {}) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { group_by: groupBy },
    			});
    		} else {
    			objAorField = await models.mongoose.aorFields.findOne({group_by: groupBy});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldOrder(fieldOrder, query = {}) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_order: fieldOrder },
    			});
    		} else {
    			objAorField = await models.mongoose.aorFields.findOne({field_order: fieldOrder});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByGroupDisplay(groupDisplay, query = {}) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { group_display: groupDisplay },
    			});
    		} else {
    			objAorField = await models.mongoose.aorFields.findOne({group_display: groupDisplay});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objAorField = await models.mongoose.aorFields.findOne({name: name});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByField(field, query = {}) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field: field },
    			});
    		} else {
    			objAorField = await models.mongoose.aorFields.findOne({field: field});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLabel(label, query = {}) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { label: label },
    			});
    		} else {
    			objAorField = await models.mongoose.aorFields.findOne({label: label});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldFunction(fieldFunction, query = {}) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_function: fieldFunction },
    			});
    		} else {
    			objAorField = await models.mongoose.aorFields.findOne({field_function: fieldFunction});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySortBy(sortBy, query = {}) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { sort_by: sortBy },
    			});
    		} else {
    			objAorField = await models.mongoose.aorFields.findOne({sort_by: sortBy});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFormat(format, query = {}) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { format: format },
    			});
    		} else {
    			objAorField = await models.mongoose.aorFields.findOne({format: format});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTotal(total, query = {}) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { total: total },
    			});
    		} else {
    			objAorField = await models.mongoose.aorFields.findOne({total: total});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySortOrder(sortOrder, query = {}) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { sort_order: sortOrder },
    			});
    		} else {
    			objAorField = await models.mongoose.aorFields.findOne({sort_order: sortOrder});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByGroupOrder(groupOrder, query = {}) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { group_order: groupOrder },
    			});
    		} else {
    			objAorField = await models.mongoose.aorFields.findOne({group_order: groupOrder});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objAorField = await models.mongoose.aorFields.findOne({description: description});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModulePath(modulePath, query = {}) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { module_path: modulePath },
    			});
    		} else {
    			objAorField = await models.mongoose.aorFields.findOne({module_path: modulePath});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objAorField = await models.mongoose.aorFields.findOne({date_entered: dateEntered});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAorField = await models.mongoose.aorFields.findOne({date_modified: dateModified});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objAorField = await models.mongoose.aorFields.findOne({modified_user_id: modifiedUserId});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAorField = await models.mongoose.aorFields.findOne({created_by: createdBy});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAorReportId(aorReportId, query = {}) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { aor_report_id: aorReportId },
    			});
    		} else {
    			objAorField = await models.mongoose.aorFields.findOne({aor_report_id: aorReportId});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAorFieldById(id, updateAorField) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({where: { id: id }});
    			if (objAorField) {
    				objAorField = await models.sequelize.aorFields.update(updateAorField, { where: { id: id } });
    			}
    		} else {
    			objAorField = await models.mongoose.aorFields.findOneAndUpdate({id: id}, {$set: updateAorField}, {new: true});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorFieldByDeleted(deleted, updateAorField) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({where: { deleted: deleted }});
    			if (objAorField) {
    				objAorField = await models.sequelize.aorFields.update(updateAorField, { where: { deleted: deleted } });
    			}
    		} else {
    			objAorField = await models.mongoose.aorFields.findOneAndUpdate({deleted: deleted}, {$set: updateAorField}, {new: true});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorFieldByDisplay(display, updateAorField) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({where: { display: display }});
    			if (objAorField) {
    				objAorField = await models.sequelize.aorFields.update(updateAorField, { where: { display: display } });
    			}
    		} else {
    			objAorField = await models.mongoose.aorFields.findOneAndUpdate({display: display}, {$set: updateAorField}, {new: true});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorFieldByLink(link, updateAorField) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({where: { link: link }});
    			if (objAorField) {
    				objAorField = await models.sequelize.aorFields.update(updateAorField, { where: { link: link } });
    			}
    		} else {
    			objAorField = await models.mongoose.aorFields.findOneAndUpdate({link: link}, {$set: updateAorField}, {new: true});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorFieldByGroupBy(groupBy, updateAorField) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({where: { group_by: groupBy }});
    			if (objAorField) {
    				objAorField = await models.sequelize.aorFields.update(updateAorField, { where: { group_by: groupBy } });
    			}
    		} else {
    			objAorField = await models.mongoose.aorFields.findOneAndUpdate({group_by: groupBy}, {$set: updateAorField}, {new: true});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorFieldByFieldOrder(fieldOrder, updateAorField) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({where: { field_order: fieldOrder }});
    			if (objAorField) {
    				objAorField = await models.sequelize.aorFields.update(updateAorField, { where: { field_order: fieldOrder } });
    			}
    		} else {
    			objAorField = await models.mongoose.aorFields.findOneAndUpdate({field_order: fieldOrder}, {$set: updateAorField}, {new: true});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorFieldByGroupDisplay(groupDisplay, updateAorField) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({where: { group_display: groupDisplay }});
    			if (objAorField) {
    				objAorField = await models.sequelize.aorFields.update(updateAorField, { where: { group_display: groupDisplay } });
    			}
    		} else {
    			objAorField = await models.mongoose.aorFields.findOneAndUpdate({group_display: groupDisplay}, {$set: updateAorField}, {new: true});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorFieldByName(name, updateAorField) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({where: { name: name }});
    			if (objAorField) {
    				objAorField = await models.sequelize.aorFields.update(updateAorField, { where: { name: name } });
    			}
    		} else {
    			objAorField = await models.mongoose.aorFields.findOneAndUpdate({name: name}, {$set: updateAorField}, {new: true});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorFieldByField(field, updateAorField) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({where: { field: field }});
    			if (objAorField) {
    				objAorField = await models.sequelize.aorFields.update(updateAorField, { where: { field: field } });
    			}
    		} else {
    			objAorField = await models.mongoose.aorFields.findOneAndUpdate({field: field}, {$set: updateAorField}, {new: true});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorFieldByLabel(label, updateAorField) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({where: { label: label }});
    			if (objAorField) {
    				objAorField = await models.sequelize.aorFields.update(updateAorField, { where: { label: label } });
    			}
    		} else {
    			objAorField = await models.mongoose.aorFields.findOneAndUpdate({label: label}, {$set: updateAorField}, {new: true});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorFieldByFieldFunction(fieldFunction, updateAorField) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({where: { field_function: fieldFunction }});
    			if (objAorField) {
    				objAorField = await models.sequelize.aorFields.update(updateAorField, { where: { field_function: fieldFunction } });
    			}
    		} else {
    			objAorField = await models.mongoose.aorFields.findOneAndUpdate({field_function: fieldFunction}, {$set: updateAorField}, {new: true});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorFieldBySortBy(sortBy, updateAorField) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({where: { sort_by: sortBy }});
    			if (objAorField) {
    				objAorField = await models.sequelize.aorFields.update(updateAorField, { where: { sort_by: sortBy } });
    			}
    		} else {
    			objAorField = await models.mongoose.aorFields.findOneAndUpdate({sort_by: sortBy}, {$set: updateAorField}, {new: true});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorFieldByFormat(format, updateAorField) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({where: { format: format }});
    			if (objAorField) {
    				objAorField = await models.sequelize.aorFields.update(updateAorField, { where: { format: format } });
    			}
    		} else {
    			objAorField = await models.mongoose.aorFields.findOneAndUpdate({format: format}, {$set: updateAorField}, {new: true});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorFieldByTotal(total, updateAorField) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({where: { total: total }});
    			if (objAorField) {
    				objAorField = await models.sequelize.aorFields.update(updateAorField, { where: { total: total } });
    			}
    		} else {
    			objAorField = await models.mongoose.aorFields.findOneAndUpdate({total: total}, {$set: updateAorField}, {new: true});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorFieldBySortOrder(sortOrder, updateAorField) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({where: { sort_order: sortOrder }});
    			if (objAorField) {
    				objAorField = await models.sequelize.aorFields.update(updateAorField, { where: { sort_order: sortOrder } });
    			}
    		} else {
    			objAorField = await models.mongoose.aorFields.findOneAndUpdate({sort_order: sortOrder}, {$set: updateAorField}, {new: true});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorFieldByGroupOrder(groupOrder, updateAorField) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({where: { group_order: groupOrder }});
    			if (objAorField) {
    				objAorField = await models.sequelize.aorFields.update(updateAorField, { where: { group_order: groupOrder } });
    			}
    		} else {
    			objAorField = await models.mongoose.aorFields.findOneAndUpdate({group_order: groupOrder}, {$set: updateAorField}, {new: true});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorFieldByDescription(description, updateAorField) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({where: { description: description }});
    			if (objAorField) {
    				objAorField = await models.sequelize.aorFields.update(updateAorField, { where: { description: description } });
    			}
    		} else {
    			objAorField = await models.mongoose.aorFields.findOneAndUpdate({description: description}, {$set: updateAorField}, {new: true});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorFieldByModulePath(modulePath, updateAorField) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({where: { module_path: modulePath }});
    			if (objAorField) {
    				objAorField = await models.sequelize.aorFields.update(updateAorField, { where: { module_path: modulePath } });
    			}
    		} else {
    			objAorField = await models.mongoose.aorFields.findOneAndUpdate({module_path: modulePath}, {$set: updateAorField}, {new: true});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorFieldByDateEntered(dateEntered, updateAorField) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({where: { date_entered: dateEntered }});
    			if (objAorField) {
    				objAorField = await models.sequelize.aorFields.update(updateAorField, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objAorField = await models.mongoose.aorFields.findOneAndUpdate({date_entered: dateEntered}, {$set: updateAorField}, {new: true});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorFieldByDateModified(dateModified, updateAorField) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({where: { date_modified: dateModified }});
    			if (objAorField) {
    				objAorField = await models.sequelize.aorFields.update(updateAorField, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAorField = await models.mongoose.aorFields.findOneAndUpdate({date_modified: dateModified}, {$set: updateAorField}, {new: true});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorFieldByModifiedUserId(modifiedUserId, updateAorField) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objAorField) {
    				objAorField = await models.sequelize.aorFields.update(updateAorField, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objAorField = await models.mongoose.aorFields.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateAorField}, {new: true});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorFieldByCreatedBy(createdBy, updateAorField) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({where: { created_by: createdBy }});
    			if (objAorField) {
    				objAorField = await models.sequelize.aorFields.update(updateAorField, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAorField = await models.mongoose.aorFields.findOneAndUpdate({created_by: createdBy}, {$set: updateAorField}, {new: true});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorFieldByAorReportId(aorReportId, updateAorField) {
    	try {
    		let objAorField;
    		if(sql) {
    			objAorField = await models.sequelize.aorFields.findOne({where: { aor_report_id: aorReportId }});
    			if (objAorField) {
    				objAorField = await models.sequelize.aorFields.update(updateAorField, { where: { aor_report_id: aorReportId } });
    			}
    		} else {
    			objAorField = await models.mongoose.aorFields.findOneAndUpdate({aor_report_id: aorReportId}, {$set: updateAorField}, {new: true});
    		}
    		return objAorField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AorFieldService;
//</es-section>
