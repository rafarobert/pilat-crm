/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:01 GMT-0400 (Bolivia Time)
 * Time: 14:57:1
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:01 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:1
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

class IadStickyNoteService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllIadStickyNotes(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.iadStickyNotes.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.iadStickyNotes.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllIadStickyNotes(select = []) {
		try {
			if(sql) {
				return await models.sequelize.iadStickyNotes.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.iadStickyNotes.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addIadStickyNote(newIadStickyNote) {
		try {
			let objIadStickyNote;
			if(util.PrimaryKeyTypeIsString(models.sequelize.iadStickyNotes.primaryKeys.id.type.toString())) {
			    newIadStickyNote.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objIadStickyNote = await models.sequelize.iadStickyNotes.create(newIadStickyNote);
			} else {
				objIadStickyNote = new models.mongoose.iadStickyNotes(newIadStickyNote);
				await objIadStickyNote.save();
			}
			return objIadStickyNote;
		} catch (error) {
			throw error;
		}
	}

	static async updateIadStickyNote(id, updateIadStickyNote) {
		try {
			let objIadStickyNote;
			if(sql) {
				objIadStickyNote = await models.sequelize.iadStickyNotes.findOne({where: { id: util.Char(id) }});
				if (objIadStickyNote) {
					await models.sequelize.iadStickyNotes.update(updateIadStickyNote, { where: { id: util.Char(id) } });
					objIadStickyNote = await models.sequelize.iadStickyNotes.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateIadStickyNote._id;
				objIadStickyNote = await models.mongoose.iadStickyNotes.findOneAndUpdate({id:id}, {$set: updateIadStickyNote}, {new: true});
			}
			return objIadStickyNote;
		} catch (error) {
			throw error;
		}
	}

	static async getAIadStickyNote(id, query) {
		try {
			let objIadStickyNote;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objIadStickyNote = await models.sequelize.iadStickyNotes.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objIadStickyNote = await models.mongoose.iadStickyNotes.find({id:util.Char(id)}).select(query.select);
			}
			return objIadStickyNote;
		} catch (error) {
			throw error;
		}
	}

	static async deleteIadStickyNote(id) {
		try {
			let objIadStickyNote;
			if(sql) {
				objIadStickyNote = await models.sequelize.iadStickyNotes.findOne({ where: { id: util.Char(id) } });
				if (objIadStickyNote) {
					await models.sequelize.iadStickyNotes.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objIadStickyNote = await models.mongoose.iadStickyNotes.deleteOne({id:util.Char(id)});
			}
			return objIadStickyNote;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objIadStickyNote;
    		if(sql) {
    			objIadStickyNote = await models.sequelize.iadStickyNotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objIadStickyNote = await models.mongoose.iadStickyNotes.findOne({id: id});
    		}
    		return objIadStickyNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objIadStickyNote;
    		if(sql) {
    			objIadStickyNote = await models.sequelize.iadStickyNotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objIadStickyNote = await models.mongoose.iadStickyNotes.findOne({deleted: deleted});
    		}
    		return objIadStickyNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDocumentName(documentName, query = {}) {
    	try {
    		let objIadStickyNote;
    		if(sql) {
    			objIadStickyNote = await models.sequelize.iadStickyNotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { document_name: documentName },
    			});
    		} else {
    			objIadStickyNote = await models.mongoose.iadStickyNotes.findOne({document_name: documentName});
    		}
    		return objIadStickyNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFilename(filename, query = {}) {
    	try {
    		let objIadStickyNote;
    		if(sql) {
    			objIadStickyNote = await models.sequelize.iadStickyNotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { filename: filename },
    			});
    		} else {
    			objIadStickyNote = await models.mongoose.iadStickyNotes.findOne({filename: filename});
    		}
    		return objIadStickyNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFileExt(fileExt, query = {}) {
    	try {
    		let objIadStickyNote;
    		if(sql) {
    			objIadStickyNote = await models.sequelize.iadStickyNotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { file_ext: fileExt },
    			});
    		} else {
    			objIadStickyNote = await models.mongoose.iadStickyNotes.findOne({file_ext: fileExt});
    		}
    		return objIadStickyNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFileMimeType(fileMimeType, query = {}) {
    	try {
    		let objIadStickyNote;
    		if(sql) {
    			objIadStickyNote = await models.sequelize.iadStickyNotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { file_mime_type: fileMimeType },
    			});
    		} else {
    			objIadStickyNote = await models.mongoose.iadStickyNotes.findOne({file_mime_type: fileMimeType});
    		}
    		return objIadStickyNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCategoryId(categoryId, query = {}) {
    	try {
    		let objIadStickyNote;
    		if(sql) {
    			objIadStickyNote = await models.sequelize.iadStickyNotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { category_id: categoryId },
    			});
    		} else {
    			objIadStickyNote = await models.mongoose.iadStickyNotes.findOne({category_id: categoryId});
    		}
    		return objIadStickyNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySubcategoryId(subcategoryId, query = {}) {
    	try {
    		let objIadStickyNote;
    		if(sql) {
    			objIadStickyNote = await models.sequelize.iadStickyNotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { subcategory_id: subcategoryId },
    			});
    		} else {
    			objIadStickyNote = await models.mongoose.iadStickyNotes.findOne({subcategory_id: subcategoryId});
    		}
    		return objIadStickyNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByStatusId(statusId, query = {}) {
    	try {
    		let objIadStickyNote;
    		if(sql) {
    			objIadStickyNote = await models.sequelize.iadStickyNotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { status_id: statusId },
    			});
    		} else {
    			objIadStickyNote = await models.mongoose.iadStickyNotes.findOne({status_id: statusId});
    		}
    		return objIadStickyNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objIadStickyNote;
    		if(sql) {
    			objIadStickyNote = await models.sequelize.iadStickyNotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objIadStickyNote = await models.mongoose.iadStickyNotes.findOne({description: description});
    		}
    		return objIadStickyNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objIadStickyNote;
    		if(sql) {
    			objIadStickyNote = await models.sequelize.iadStickyNotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objIadStickyNote = await models.mongoose.iadStickyNotes.findOne({date_entered: dateEntered});
    		}
    		return objIadStickyNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objIadStickyNote;
    		if(sql) {
    			objIadStickyNote = await models.sequelize.iadStickyNotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objIadStickyNote = await models.mongoose.iadStickyNotes.findOne({date_modified: dateModified});
    		}
    		return objIadStickyNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByActiveDate(activeDate, query = {}) {
    	try {
    		let objIadStickyNote;
    		if(sql) {
    			objIadStickyNote = await models.sequelize.iadStickyNotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { active_date: activeDate },
    			});
    		} else {
    			objIadStickyNote = await models.mongoose.iadStickyNotes.findOne({active_date: activeDate});
    		}
    		return objIadStickyNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByExpDate(expDate, query = {}) {
    	try {
    		let objIadStickyNote;
    		if(sql) {
    			objIadStickyNote = await models.sequelize.iadStickyNotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { exp_date: expDate },
    			});
    		} else {
    			objIadStickyNote = await models.mongoose.iadStickyNotes.findOne({exp_date: expDate});
    		}
    		return objIadStickyNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objIadStickyNote;
    		if(sql) {
    			objIadStickyNote = await models.sequelize.iadStickyNotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objIadStickyNote = await models.mongoose.iadStickyNotes.findOne({modified_user_id: modifiedUserId});
    		}
    		return objIadStickyNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objIadStickyNote;
    		if(sql) {
    			objIadStickyNote = await models.sequelize.iadStickyNotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objIadStickyNote = await models.mongoose.iadStickyNotes.findOne({created_by: createdBy});
    		}
    		return objIadStickyNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objIadStickyNote;
    		if(sql) {
    			objIadStickyNote = await models.sequelize.iadStickyNotes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objIadStickyNote = await models.mongoose.iadStickyNotes.findOne({assigned_user_id: assignedUserId});
    		}
    		return objIadStickyNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateIadStickyNoteById(id, updateIadStickyNote) {
    	try {
    		let objIadStickyNote;
    		if(sql) {
    			objIadStickyNote = await models.sequelize.iadStickyNotes.findOne({where: { id: id }});
    			if (objIadStickyNote) {
    				objIadStickyNote = await models.sequelize.iadStickyNotes.update(updateIadStickyNote, { where: { id: id } });
    			}
    		} else {
    			objIadStickyNote = await models.mongoose.iadStickyNotes.findOneAndUpdate({id: id}, {$set: updateIadStickyNote}, {new: true});
    		}
    		return objIadStickyNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateIadStickyNoteByDeleted(deleted, updateIadStickyNote) {
    	try {
    		let objIadStickyNote;
    		if(sql) {
    			objIadStickyNote = await models.sequelize.iadStickyNotes.findOne({where: { deleted: deleted }});
    			if (objIadStickyNote) {
    				objIadStickyNote = await models.sequelize.iadStickyNotes.update(updateIadStickyNote, { where: { deleted: deleted } });
    			}
    		} else {
    			objIadStickyNote = await models.mongoose.iadStickyNotes.findOneAndUpdate({deleted: deleted}, {$set: updateIadStickyNote}, {new: true});
    		}
    		return objIadStickyNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateIadStickyNoteByDocumentName(documentName, updateIadStickyNote) {
    	try {
    		let objIadStickyNote;
    		if(sql) {
    			objIadStickyNote = await models.sequelize.iadStickyNotes.findOne({where: { document_name: documentName }});
    			if (objIadStickyNote) {
    				objIadStickyNote = await models.sequelize.iadStickyNotes.update(updateIadStickyNote, { where: { document_name: documentName } });
    			}
    		} else {
    			objIadStickyNote = await models.mongoose.iadStickyNotes.findOneAndUpdate({document_name: documentName}, {$set: updateIadStickyNote}, {new: true});
    		}
    		return objIadStickyNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateIadStickyNoteByFilename(filename, updateIadStickyNote) {
    	try {
    		let objIadStickyNote;
    		if(sql) {
    			objIadStickyNote = await models.sequelize.iadStickyNotes.findOne({where: { filename: filename }});
    			if (objIadStickyNote) {
    				objIadStickyNote = await models.sequelize.iadStickyNotes.update(updateIadStickyNote, { where: { filename: filename } });
    			}
    		} else {
    			objIadStickyNote = await models.mongoose.iadStickyNotes.findOneAndUpdate({filename: filename}, {$set: updateIadStickyNote}, {new: true});
    		}
    		return objIadStickyNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateIadStickyNoteByFileExt(fileExt, updateIadStickyNote) {
    	try {
    		let objIadStickyNote;
    		if(sql) {
    			objIadStickyNote = await models.sequelize.iadStickyNotes.findOne({where: { file_ext: fileExt }});
    			if (objIadStickyNote) {
    				objIadStickyNote = await models.sequelize.iadStickyNotes.update(updateIadStickyNote, { where: { file_ext: fileExt } });
    			}
    		} else {
    			objIadStickyNote = await models.mongoose.iadStickyNotes.findOneAndUpdate({file_ext: fileExt}, {$set: updateIadStickyNote}, {new: true});
    		}
    		return objIadStickyNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateIadStickyNoteByFileMimeType(fileMimeType, updateIadStickyNote) {
    	try {
    		let objIadStickyNote;
    		if(sql) {
    			objIadStickyNote = await models.sequelize.iadStickyNotes.findOne({where: { file_mime_type: fileMimeType }});
    			if (objIadStickyNote) {
    				objIadStickyNote = await models.sequelize.iadStickyNotes.update(updateIadStickyNote, { where: { file_mime_type: fileMimeType } });
    			}
    		} else {
    			objIadStickyNote = await models.mongoose.iadStickyNotes.findOneAndUpdate({file_mime_type: fileMimeType}, {$set: updateIadStickyNote}, {new: true});
    		}
    		return objIadStickyNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateIadStickyNoteByCategoryId(categoryId, updateIadStickyNote) {
    	try {
    		let objIadStickyNote;
    		if(sql) {
    			objIadStickyNote = await models.sequelize.iadStickyNotes.findOne({where: { category_id: categoryId }});
    			if (objIadStickyNote) {
    				objIadStickyNote = await models.sequelize.iadStickyNotes.update(updateIadStickyNote, { where: { category_id: categoryId } });
    			}
    		} else {
    			objIadStickyNote = await models.mongoose.iadStickyNotes.findOneAndUpdate({category_id: categoryId}, {$set: updateIadStickyNote}, {new: true});
    		}
    		return objIadStickyNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateIadStickyNoteBySubcategoryId(subcategoryId, updateIadStickyNote) {
    	try {
    		let objIadStickyNote;
    		if(sql) {
    			objIadStickyNote = await models.sequelize.iadStickyNotes.findOne({where: { subcategory_id: subcategoryId }});
    			if (objIadStickyNote) {
    				objIadStickyNote = await models.sequelize.iadStickyNotes.update(updateIadStickyNote, { where: { subcategory_id: subcategoryId } });
    			}
    		} else {
    			objIadStickyNote = await models.mongoose.iadStickyNotes.findOneAndUpdate({subcategory_id: subcategoryId}, {$set: updateIadStickyNote}, {new: true});
    		}
    		return objIadStickyNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateIadStickyNoteByStatusId(statusId, updateIadStickyNote) {
    	try {
    		let objIadStickyNote;
    		if(sql) {
    			objIadStickyNote = await models.sequelize.iadStickyNotes.findOne({where: { status_id: statusId }});
    			if (objIadStickyNote) {
    				objIadStickyNote = await models.sequelize.iadStickyNotes.update(updateIadStickyNote, { where: { status_id: statusId } });
    			}
    		} else {
    			objIadStickyNote = await models.mongoose.iadStickyNotes.findOneAndUpdate({status_id: statusId}, {$set: updateIadStickyNote}, {new: true});
    		}
    		return objIadStickyNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateIadStickyNoteByDescription(description, updateIadStickyNote) {
    	try {
    		let objIadStickyNote;
    		if(sql) {
    			objIadStickyNote = await models.sequelize.iadStickyNotes.findOne({where: { description: description }});
    			if (objIadStickyNote) {
    				objIadStickyNote = await models.sequelize.iadStickyNotes.update(updateIadStickyNote, { where: { description: description } });
    			}
    		} else {
    			objIadStickyNote = await models.mongoose.iadStickyNotes.findOneAndUpdate({description: description}, {$set: updateIadStickyNote}, {new: true});
    		}
    		return objIadStickyNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateIadStickyNoteByDateEntered(dateEntered, updateIadStickyNote) {
    	try {
    		let objIadStickyNote;
    		if(sql) {
    			objIadStickyNote = await models.sequelize.iadStickyNotes.findOne({where: { date_entered: dateEntered }});
    			if (objIadStickyNote) {
    				objIadStickyNote = await models.sequelize.iadStickyNotes.update(updateIadStickyNote, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objIadStickyNote = await models.mongoose.iadStickyNotes.findOneAndUpdate({date_entered: dateEntered}, {$set: updateIadStickyNote}, {new: true});
    		}
    		return objIadStickyNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateIadStickyNoteByDateModified(dateModified, updateIadStickyNote) {
    	try {
    		let objIadStickyNote;
    		if(sql) {
    			objIadStickyNote = await models.sequelize.iadStickyNotes.findOne({where: { date_modified: dateModified }});
    			if (objIadStickyNote) {
    				objIadStickyNote = await models.sequelize.iadStickyNotes.update(updateIadStickyNote, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objIadStickyNote = await models.mongoose.iadStickyNotes.findOneAndUpdate({date_modified: dateModified}, {$set: updateIadStickyNote}, {new: true});
    		}
    		return objIadStickyNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateIadStickyNoteByActiveDate(activeDate, updateIadStickyNote) {
    	try {
    		let objIadStickyNote;
    		if(sql) {
    			objIadStickyNote = await models.sequelize.iadStickyNotes.findOne({where: { active_date: activeDate }});
    			if (objIadStickyNote) {
    				objIadStickyNote = await models.sequelize.iadStickyNotes.update(updateIadStickyNote, { where: { active_date: activeDate } });
    			}
    		} else {
    			objIadStickyNote = await models.mongoose.iadStickyNotes.findOneAndUpdate({active_date: activeDate}, {$set: updateIadStickyNote}, {new: true});
    		}
    		return objIadStickyNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateIadStickyNoteByExpDate(expDate, updateIadStickyNote) {
    	try {
    		let objIadStickyNote;
    		if(sql) {
    			objIadStickyNote = await models.sequelize.iadStickyNotes.findOne({where: { exp_date: expDate }});
    			if (objIadStickyNote) {
    				objIadStickyNote = await models.sequelize.iadStickyNotes.update(updateIadStickyNote, { where: { exp_date: expDate } });
    			}
    		} else {
    			objIadStickyNote = await models.mongoose.iadStickyNotes.findOneAndUpdate({exp_date: expDate}, {$set: updateIadStickyNote}, {new: true});
    		}
    		return objIadStickyNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateIadStickyNoteByModifiedUserId(modifiedUserId, updateIadStickyNote) {
    	try {
    		let objIadStickyNote;
    		if(sql) {
    			objIadStickyNote = await models.sequelize.iadStickyNotes.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objIadStickyNote) {
    				objIadStickyNote = await models.sequelize.iadStickyNotes.update(updateIadStickyNote, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objIadStickyNote = await models.mongoose.iadStickyNotes.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateIadStickyNote}, {new: true});
    		}
    		return objIadStickyNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateIadStickyNoteByCreatedBy(createdBy, updateIadStickyNote) {
    	try {
    		let objIadStickyNote;
    		if(sql) {
    			objIadStickyNote = await models.sequelize.iadStickyNotes.findOne({where: { created_by: createdBy }});
    			if (objIadStickyNote) {
    				objIadStickyNote = await models.sequelize.iadStickyNotes.update(updateIadStickyNote, { where: { created_by: createdBy } });
    			}
    		} else {
    			objIadStickyNote = await models.mongoose.iadStickyNotes.findOneAndUpdate({created_by: createdBy}, {$set: updateIadStickyNote}, {new: true});
    		}
    		return objIadStickyNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateIadStickyNoteByAssignedUserId(assignedUserId, updateIadStickyNote) {
    	try {
    		let objIadStickyNote;
    		if(sql) {
    			objIadStickyNote = await models.sequelize.iadStickyNotes.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objIadStickyNote) {
    				objIadStickyNote = await models.sequelize.iadStickyNotes.update(updateIadStickyNote, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objIadStickyNote = await models.mongoose.iadStickyNotes.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateIadStickyNote}, {new: true});
    		}
    		return objIadStickyNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = IadStickyNoteService;
//</es-section>
