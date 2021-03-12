/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:14 GMT-0400 (Bolivia Time)
 * Time: 14:56:14
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:14 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:14
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

class AoPdfTemplateService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAosPdfTemplates(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aosPdfTemplates.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aosPdfTemplates.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAosPdfTemplates(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aosPdfTemplates.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aosPdfTemplates.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAoPdfTemplate(newAoPdfTemplate) {
		try {
			let objAoPdfTemplate;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aosPdfTemplates.primaryKeys.id.type.toString())) {
			    newAoPdfTemplate.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAoPdfTemplate = await models.sequelize.aosPdfTemplates.create(newAoPdfTemplate);
			} else {
				objAoPdfTemplate = new models.mongoose.aosPdfTemplates(newAoPdfTemplate);
				await objAoPdfTemplate.save();
			}
			return objAoPdfTemplate;
		} catch (error) {
			throw error;
		}
	}

	static async updateAoPdfTemplate(id, updateAoPdfTemplate) {
		try {
			let objAoPdfTemplate;
			if(sql) {
				objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({where: { id: util.Char(id) }});
				if (objAoPdfTemplate) {
					await models.sequelize.aosPdfTemplates.update(updateAoPdfTemplate, { where: { id: util.Char(id) } });
					objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAoPdfTemplate._id;
				objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOneAndUpdate({id:id}, {$set: updateAoPdfTemplate}, {new: true});
			}
			return objAoPdfTemplate;
		} catch (error) {
			throw error;
		}
	}

	static async getAAoPdfTemplate(id, query) {
		try {
			let objAoPdfTemplate;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAoPdfTemplate = await models.mongoose.aosPdfTemplates.find({id:util.Char(id)}).select(query.select);
			}
			return objAoPdfTemplate;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAoPdfTemplate(id) {
		try {
			let objAoPdfTemplate;
			if(sql) {
				objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({ where: { id: util.Char(id) } });
				if (objAoPdfTemplate) {
					await models.sequelize.aosPdfTemplates.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAoPdfTemplate = await models.mongoose.aosPdfTemplates.deleteOne({id:util.Char(id)});
			}
			return objAoPdfTemplate;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOne({id: id});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOne({deleted: deleted});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByActive(active, query = {}) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { active: active },
    			});
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOne({active: active});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMarginLeft(marginLeft, query = {}) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { margin_left: marginLeft },
    			});
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOne({margin_left: marginLeft});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMarginRight(marginRight, query = {}) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { margin_right: marginRight },
    			});
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOne({margin_right: marginRight});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMarginTop(marginTop, query = {}) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { margin_top: marginTop },
    			});
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOne({margin_top: marginTop});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMarginBottom(marginBottom, query = {}) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { margin_bottom: marginBottom },
    			});
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOne({margin_bottom: marginBottom});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMarginHeader(marginHeader, query = {}) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { margin_header: marginHeader },
    			});
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOne({margin_header: marginHeader});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMarginFooter(marginFooter, query = {}) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { margin_footer: marginFooter },
    			});
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOne({margin_footer: marginFooter});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOne({name: name});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByType(type, query = {}) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { type: type },
    			});
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOne({type: type});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPageSize(pageSize, query = {}) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { page_size: pageSize },
    			});
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOne({page_size: pageSize});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByOrientation(orientation, query = {}) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { orientation: orientation },
    			});
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOne({orientation: orientation});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOne({description: description});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPdfheader(pdfheader, query = {}) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { pdfheader: pdfheader },
    			});
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOne({pdfheader: pdfheader});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPdffooter(pdffooter, query = {}) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { pdffooter: pdffooter },
    			});
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOne({pdffooter: pdffooter});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOne({date_entered: dateEntered});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOne({date_modified: dateModified});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOne({modified_user_id: modifiedUserId});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOne({created_by: createdBy});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOne({assigned_user_id: assignedUserId});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAoPdfTemplateById(id, updateAoPdfTemplate) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({where: { id: id }});
    			if (objAoPdfTemplate) {
    				objAoPdfTemplate = await models.sequelize.aosPdfTemplates.update(updateAoPdfTemplate, { where: { id: id } });
    			}
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOneAndUpdate({id: id}, {$set: updateAoPdfTemplate}, {new: true});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoPdfTemplateByDeleted(deleted, updateAoPdfTemplate) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({where: { deleted: deleted }});
    			if (objAoPdfTemplate) {
    				objAoPdfTemplate = await models.sequelize.aosPdfTemplates.update(updateAoPdfTemplate, { where: { deleted: deleted } });
    			}
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOneAndUpdate({deleted: deleted}, {$set: updateAoPdfTemplate}, {new: true});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoPdfTemplateByActive(active, updateAoPdfTemplate) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({where: { active: active }});
    			if (objAoPdfTemplate) {
    				objAoPdfTemplate = await models.sequelize.aosPdfTemplates.update(updateAoPdfTemplate, { where: { active: active } });
    			}
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOneAndUpdate({active: active}, {$set: updateAoPdfTemplate}, {new: true});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoPdfTemplateByMarginLeft(marginLeft, updateAoPdfTemplate) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({where: { margin_left: marginLeft }});
    			if (objAoPdfTemplate) {
    				objAoPdfTemplate = await models.sequelize.aosPdfTemplates.update(updateAoPdfTemplate, { where: { margin_left: marginLeft } });
    			}
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOneAndUpdate({margin_left: marginLeft}, {$set: updateAoPdfTemplate}, {new: true});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoPdfTemplateByMarginRight(marginRight, updateAoPdfTemplate) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({where: { margin_right: marginRight }});
    			if (objAoPdfTemplate) {
    				objAoPdfTemplate = await models.sequelize.aosPdfTemplates.update(updateAoPdfTemplate, { where: { margin_right: marginRight } });
    			}
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOneAndUpdate({margin_right: marginRight}, {$set: updateAoPdfTemplate}, {new: true});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoPdfTemplateByMarginTop(marginTop, updateAoPdfTemplate) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({where: { margin_top: marginTop }});
    			if (objAoPdfTemplate) {
    				objAoPdfTemplate = await models.sequelize.aosPdfTemplates.update(updateAoPdfTemplate, { where: { margin_top: marginTop } });
    			}
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOneAndUpdate({margin_top: marginTop}, {$set: updateAoPdfTemplate}, {new: true});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoPdfTemplateByMarginBottom(marginBottom, updateAoPdfTemplate) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({where: { margin_bottom: marginBottom }});
    			if (objAoPdfTemplate) {
    				objAoPdfTemplate = await models.sequelize.aosPdfTemplates.update(updateAoPdfTemplate, { where: { margin_bottom: marginBottom } });
    			}
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOneAndUpdate({margin_bottom: marginBottom}, {$set: updateAoPdfTemplate}, {new: true});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoPdfTemplateByMarginHeader(marginHeader, updateAoPdfTemplate) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({where: { margin_header: marginHeader }});
    			if (objAoPdfTemplate) {
    				objAoPdfTemplate = await models.sequelize.aosPdfTemplates.update(updateAoPdfTemplate, { where: { margin_header: marginHeader } });
    			}
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOneAndUpdate({margin_header: marginHeader}, {$set: updateAoPdfTemplate}, {new: true});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoPdfTemplateByMarginFooter(marginFooter, updateAoPdfTemplate) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({where: { margin_footer: marginFooter }});
    			if (objAoPdfTemplate) {
    				objAoPdfTemplate = await models.sequelize.aosPdfTemplates.update(updateAoPdfTemplate, { where: { margin_footer: marginFooter } });
    			}
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOneAndUpdate({margin_footer: marginFooter}, {$set: updateAoPdfTemplate}, {new: true});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoPdfTemplateByName(name, updateAoPdfTemplate) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({where: { name: name }});
    			if (objAoPdfTemplate) {
    				objAoPdfTemplate = await models.sequelize.aosPdfTemplates.update(updateAoPdfTemplate, { where: { name: name } });
    			}
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOneAndUpdate({name: name}, {$set: updateAoPdfTemplate}, {new: true});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoPdfTemplateByType(type, updateAoPdfTemplate) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({where: { type: type }});
    			if (objAoPdfTemplate) {
    				objAoPdfTemplate = await models.sequelize.aosPdfTemplates.update(updateAoPdfTemplate, { where: { type: type } });
    			}
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOneAndUpdate({type: type}, {$set: updateAoPdfTemplate}, {new: true});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoPdfTemplateByPageSize(pageSize, updateAoPdfTemplate) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({where: { page_size: pageSize }});
    			if (objAoPdfTemplate) {
    				objAoPdfTemplate = await models.sequelize.aosPdfTemplates.update(updateAoPdfTemplate, { where: { page_size: pageSize } });
    			}
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOneAndUpdate({page_size: pageSize}, {$set: updateAoPdfTemplate}, {new: true});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoPdfTemplateByOrientation(orientation, updateAoPdfTemplate) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({where: { orientation: orientation }});
    			if (objAoPdfTemplate) {
    				objAoPdfTemplate = await models.sequelize.aosPdfTemplates.update(updateAoPdfTemplate, { where: { orientation: orientation } });
    			}
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOneAndUpdate({orientation: orientation}, {$set: updateAoPdfTemplate}, {new: true});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoPdfTemplateByDescription(description, updateAoPdfTemplate) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({where: { description: description }});
    			if (objAoPdfTemplate) {
    				objAoPdfTemplate = await models.sequelize.aosPdfTemplates.update(updateAoPdfTemplate, { where: { description: description } });
    			}
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOneAndUpdate({description: description}, {$set: updateAoPdfTemplate}, {new: true});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoPdfTemplateByPdfheader(pdfheader, updateAoPdfTemplate) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({where: { pdfheader: pdfheader }});
    			if (objAoPdfTemplate) {
    				objAoPdfTemplate = await models.sequelize.aosPdfTemplates.update(updateAoPdfTemplate, { where: { pdfheader: pdfheader } });
    			}
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOneAndUpdate({pdfheader: pdfheader}, {$set: updateAoPdfTemplate}, {new: true});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoPdfTemplateByPdffooter(pdffooter, updateAoPdfTemplate) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({where: { pdffooter: pdffooter }});
    			if (objAoPdfTemplate) {
    				objAoPdfTemplate = await models.sequelize.aosPdfTemplates.update(updateAoPdfTemplate, { where: { pdffooter: pdffooter } });
    			}
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOneAndUpdate({pdffooter: pdffooter}, {$set: updateAoPdfTemplate}, {new: true});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoPdfTemplateByDateEntered(dateEntered, updateAoPdfTemplate) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({where: { date_entered: dateEntered }});
    			if (objAoPdfTemplate) {
    				objAoPdfTemplate = await models.sequelize.aosPdfTemplates.update(updateAoPdfTemplate, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOneAndUpdate({date_entered: dateEntered}, {$set: updateAoPdfTemplate}, {new: true});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoPdfTemplateByDateModified(dateModified, updateAoPdfTemplate) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({where: { date_modified: dateModified }});
    			if (objAoPdfTemplate) {
    				objAoPdfTemplate = await models.sequelize.aosPdfTemplates.update(updateAoPdfTemplate, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOneAndUpdate({date_modified: dateModified}, {$set: updateAoPdfTemplate}, {new: true});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoPdfTemplateByModifiedUserId(modifiedUserId, updateAoPdfTemplate) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objAoPdfTemplate) {
    				objAoPdfTemplate = await models.sequelize.aosPdfTemplates.update(updateAoPdfTemplate, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateAoPdfTemplate}, {new: true});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoPdfTemplateByCreatedBy(createdBy, updateAoPdfTemplate) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({where: { created_by: createdBy }});
    			if (objAoPdfTemplate) {
    				objAoPdfTemplate = await models.sequelize.aosPdfTemplates.update(updateAoPdfTemplate, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOneAndUpdate({created_by: createdBy}, {$set: updateAoPdfTemplate}, {new: true});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoPdfTemplateByAssignedUserId(assignedUserId, updateAoPdfTemplate) {
    	try {
    		let objAoPdfTemplate;
    		if(sql) {
    			objAoPdfTemplate = await models.sequelize.aosPdfTemplates.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objAoPdfTemplate) {
    				objAoPdfTemplate = await models.sequelize.aosPdfTemplates.update(updateAoPdfTemplate, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objAoPdfTemplate = await models.mongoose.aosPdfTemplates.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateAoPdfTemplate}, {new: true});
    		}
    		return objAoPdfTemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AoPdfTemplateService;
//</es-section>
