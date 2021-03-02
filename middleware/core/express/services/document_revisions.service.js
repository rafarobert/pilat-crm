/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:42 GMT-0400 (Bolivia Time)
 * Time: 14:0:42
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:42 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:42
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

class DocumentRevisionService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllDocumentRevisions(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.documentRevisions.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.documentRevisions.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllDocumentRevisions(select = []) {
		try {
			if(sql) {
				return await models.sequelize.documentRevisions.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.documentRevisions.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addDocumentRevision(newDocumentRevision) {
		try {
			let objDocumentRevision;
			if(util.PrimaryKeyTypeIsString(models.sequelize.documentRevisions.primaryKeys.id.type.toString())) {
			    newDocumentRevision.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objDocumentRevision = await models.sequelize.documentRevisions.create(newDocumentRevision);
			} else {
				objDocumentRevision = new models.mongoose.documentRevisions(newDocumentRevision);
				await objDocumentRevision.save();
			}
			return objDocumentRevision;
		} catch (error) {
			throw error;
		}
	}

	static async updateDocumentRevision(id, updateDocumentRevision) {
		try {
			let objDocumentRevision;
			if(sql) {
				objDocumentRevision = await models.sequelize.documentRevisions.findOne({where: { id: util.String(id) }});
				if (objDocumentRevision) {
					await models.sequelize.documentRevisions.update(updateDocumentRevision, { where: { id: util.String(id) } });
					objDocumentRevision = await models.sequelize.documentRevisions.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateDocumentRevision._id;
				objDocumentRevision = await models.mongoose.documentRevisions.findOneAndUpdate({id:id}, {$set: updateDocumentRevision}, {new: true});
			}
			return objDocumentRevision;
		} catch (error) {
			throw error;
		}
	}

	static async getADocumentRevision(id, query) {
		try {
			let objDocumentRevision;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objDocumentRevision = await models.sequelize.documentRevisions.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objDocumentRevision = await models.mongoose.documentRevisions.find({id:util.String(id)}).select(query.select);
			}
			return objDocumentRevision;
		} catch (error) {
			throw error;
		}
	}

	static async deleteDocumentRevision(id) {
		try {
			let objDocumentRevision;
			if(sql) {
				objDocumentRevision = await models.sequelize.documentRevisions.findOne({ where: { id: util.String(id) } });
				if (objDocumentRevision) {
					await models.sequelize.documentRevisions.destroy({where: { id: util.String(id) }});
				}
			} else {
				objDocumentRevision = await models.mongoose.documentRevisions.deleteOne({id:util.String(id)});
			}
			return objDocumentRevision;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objDocumentRevision;
    		if(sql) {
    			objDocumentRevision = await models.sequelize.documentRevisions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objDocumentRevision = await models.mongoose.documentRevisions.findOne({id: id});
    		}
    		return objDocumentRevision;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objDocumentRevision;
    		if(sql) {
    			objDocumentRevision = await models.sequelize.documentRevisions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objDocumentRevision = await models.mongoose.documentRevisions.findOne({deleted: deleted});
    		}
    		return objDocumentRevision;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByChangeLog(changeLog, query = {}) {
    	try {
    		let objDocumentRevision;
    		if(sql) {
    			objDocumentRevision = await models.sequelize.documentRevisions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { change_log: changeLog },
    			});
    		} else {
    			objDocumentRevision = await models.mongoose.documentRevisions.findOne({change_log: changeLog});
    		}
    		return objDocumentRevision;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDocumentId(documentId, query = {}) {
    	try {
    		let objDocumentRevision;
    		if(sql) {
    			objDocumentRevision = await models.sequelize.documentRevisions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { document_id: documentId },
    			});
    		} else {
    			objDocumentRevision = await models.mongoose.documentRevisions.findOne({document_id: documentId});
    		}
    		return objDocumentRevision;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDocId(docId, query = {}) {
    	try {
    		let objDocumentRevision;
    		if(sql) {
    			objDocumentRevision = await models.sequelize.documentRevisions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { doc_id: docId },
    			});
    		} else {
    			objDocumentRevision = await models.mongoose.documentRevisions.findOne({doc_id: docId});
    		}
    		return objDocumentRevision;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDocType(docType, query = {}) {
    	try {
    		let objDocumentRevision;
    		if(sql) {
    			objDocumentRevision = await models.sequelize.documentRevisions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { doc_type: docType },
    			});
    		} else {
    			objDocumentRevision = await models.mongoose.documentRevisions.findOne({doc_type: docType});
    		}
    		return objDocumentRevision;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDocUrl(docUrl, query = {}) {
    	try {
    		let objDocumentRevision;
    		if(sql) {
    			objDocumentRevision = await models.sequelize.documentRevisions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { doc_url: docUrl },
    			});
    		} else {
    			objDocumentRevision = await models.mongoose.documentRevisions.findOne({doc_url: docUrl});
    		}
    		return objDocumentRevision;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFilename(filename, query = {}) {
    	try {
    		let objDocumentRevision;
    		if(sql) {
    			objDocumentRevision = await models.sequelize.documentRevisions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { filename: filename },
    			});
    		} else {
    			objDocumentRevision = await models.mongoose.documentRevisions.findOne({filename: filename});
    		}
    		return objDocumentRevision;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFileExt(fileExt, query = {}) {
    	try {
    		let objDocumentRevision;
    		if(sql) {
    			objDocumentRevision = await models.sequelize.documentRevisions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { file_ext: fileExt },
    			});
    		} else {
    			objDocumentRevision = await models.mongoose.documentRevisions.findOne({file_ext: fileExt});
    		}
    		return objDocumentRevision;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFileMimeType(fileMimeType, query = {}) {
    	try {
    		let objDocumentRevision;
    		if(sql) {
    			objDocumentRevision = await models.sequelize.documentRevisions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { file_mime_type: fileMimeType },
    			});
    		} else {
    			objDocumentRevision = await models.mongoose.documentRevisions.findOne({file_mime_type: fileMimeType});
    		}
    		return objDocumentRevision;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRevision(revision, query = {}) {
    	try {
    		let objDocumentRevision;
    		if(sql) {
    			objDocumentRevision = await models.sequelize.documentRevisions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { revision: revision },
    			});
    		} else {
    			objDocumentRevision = await models.mongoose.documentRevisions.findOne({revision: revision});
    		}
    		return objDocumentRevision;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objDocumentRevision;
    		if(sql) {
    			objDocumentRevision = await models.sequelize.documentRevisions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objDocumentRevision = await models.mongoose.documentRevisions.findOne({date_entered: dateEntered});
    		}
    		return objDocumentRevision;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objDocumentRevision;
    		if(sql) {
    			objDocumentRevision = await models.sequelize.documentRevisions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objDocumentRevision = await models.mongoose.documentRevisions.findOne({date_modified: dateModified});
    		}
    		return objDocumentRevision;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objDocumentRevision;
    		if(sql) {
    			objDocumentRevision = await models.sequelize.documentRevisions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objDocumentRevision = await models.mongoose.documentRevisions.findOne({created_by: createdBy});
    		}
    		return objDocumentRevision;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateDocumentRevisionById(id, updateDocumentRevision) {
    	try {
    		let objDocumentRevision;
    		if(sql) {
    			objDocumentRevision = await models.sequelize.documentRevisions.findOne({where: { id: id }});
    			if (objDocumentRevision) {
    				objDocumentRevision = await models.sequelize.documentRevisions.update(updateDocumentRevision, { where: { id: id } });
    			}
    		} else {
    			objDocumentRevision = await models.mongoose.documentRevisions.findOneAndUpdate({id: id}, {$set: updateDocumentRevision}, {new: true});
    		}
    		return objDocumentRevision;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentRevisionByDeleted(deleted, updateDocumentRevision) {
    	try {
    		let objDocumentRevision;
    		if(sql) {
    			objDocumentRevision = await models.sequelize.documentRevisions.findOne({where: { deleted: deleted }});
    			if (objDocumentRevision) {
    				objDocumentRevision = await models.sequelize.documentRevisions.update(updateDocumentRevision, { where: { deleted: deleted } });
    			}
    		} else {
    			objDocumentRevision = await models.mongoose.documentRevisions.findOneAndUpdate({deleted: deleted}, {$set: updateDocumentRevision}, {new: true});
    		}
    		return objDocumentRevision;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentRevisionByChangeLog(changeLog, updateDocumentRevision) {
    	try {
    		let objDocumentRevision;
    		if(sql) {
    			objDocumentRevision = await models.sequelize.documentRevisions.findOne({where: { change_log: changeLog }});
    			if (objDocumentRevision) {
    				objDocumentRevision = await models.sequelize.documentRevisions.update(updateDocumentRevision, { where: { change_log: changeLog } });
    			}
    		} else {
    			objDocumentRevision = await models.mongoose.documentRevisions.findOneAndUpdate({change_log: changeLog}, {$set: updateDocumentRevision}, {new: true});
    		}
    		return objDocumentRevision;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentRevisionByDocumentId(documentId, updateDocumentRevision) {
    	try {
    		let objDocumentRevision;
    		if(sql) {
    			objDocumentRevision = await models.sequelize.documentRevisions.findOne({where: { document_id: documentId }});
    			if (objDocumentRevision) {
    				objDocumentRevision = await models.sequelize.documentRevisions.update(updateDocumentRevision, { where: { document_id: documentId } });
    			}
    		} else {
    			objDocumentRevision = await models.mongoose.documentRevisions.findOneAndUpdate({document_id: documentId}, {$set: updateDocumentRevision}, {new: true});
    		}
    		return objDocumentRevision;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentRevisionByDocId(docId, updateDocumentRevision) {
    	try {
    		let objDocumentRevision;
    		if(sql) {
    			objDocumentRevision = await models.sequelize.documentRevisions.findOne({where: { doc_id: docId }});
    			if (objDocumentRevision) {
    				objDocumentRevision = await models.sequelize.documentRevisions.update(updateDocumentRevision, { where: { doc_id: docId } });
    			}
    		} else {
    			objDocumentRevision = await models.mongoose.documentRevisions.findOneAndUpdate({doc_id: docId}, {$set: updateDocumentRevision}, {new: true});
    		}
    		return objDocumentRevision;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentRevisionByDocType(docType, updateDocumentRevision) {
    	try {
    		let objDocumentRevision;
    		if(sql) {
    			objDocumentRevision = await models.sequelize.documentRevisions.findOne({where: { doc_type: docType }});
    			if (objDocumentRevision) {
    				objDocumentRevision = await models.sequelize.documentRevisions.update(updateDocumentRevision, { where: { doc_type: docType } });
    			}
    		} else {
    			objDocumentRevision = await models.mongoose.documentRevisions.findOneAndUpdate({doc_type: docType}, {$set: updateDocumentRevision}, {new: true});
    		}
    		return objDocumentRevision;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentRevisionByDocUrl(docUrl, updateDocumentRevision) {
    	try {
    		let objDocumentRevision;
    		if(sql) {
    			objDocumentRevision = await models.sequelize.documentRevisions.findOne({where: { doc_url: docUrl }});
    			if (objDocumentRevision) {
    				objDocumentRevision = await models.sequelize.documentRevisions.update(updateDocumentRevision, { where: { doc_url: docUrl } });
    			}
    		} else {
    			objDocumentRevision = await models.mongoose.documentRevisions.findOneAndUpdate({doc_url: docUrl}, {$set: updateDocumentRevision}, {new: true});
    		}
    		return objDocumentRevision;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentRevisionByFilename(filename, updateDocumentRevision) {
    	try {
    		let objDocumentRevision;
    		if(sql) {
    			objDocumentRevision = await models.sequelize.documentRevisions.findOne({where: { filename: filename }});
    			if (objDocumentRevision) {
    				objDocumentRevision = await models.sequelize.documentRevisions.update(updateDocumentRevision, { where: { filename: filename } });
    			}
    		} else {
    			objDocumentRevision = await models.mongoose.documentRevisions.findOneAndUpdate({filename: filename}, {$set: updateDocumentRevision}, {new: true});
    		}
    		return objDocumentRevision;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentRevisionByFileExt(fileExt, updateDocumentRevision) {
    	try {
    		let objDocumentRevision;
    		if(sql) {
    			objDocumentRevision = await models.sequelize.documentRevisions.findOne({where: { file_ext: fileExt }});
    			if (objDocumentRevision) {
    				objDocumentRevision = await models.sequelize.documentRevisions.update(updateDocumentRevision, { where: { file_ext: fileExt } });
    			}
    		} else {
    			objDocumentRevision = await models.mongoose.documentRevisions.findOneAndUpdate({file_ext: fileExt}, {$set: updateDocumentRevision}, {new: true});
    		}
    		return objDocumentRevision;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentRevisionByFileMimeType(fileMimeType, updateDocumentRevision) {
    	try {
    		let objDocumentRevision;
    		if(sql) {
    			objDocumentRevision = await models.sequelize.documentRevisions.findOne({where: { file_mime_type: fileMimeType }});
    			if (objDocumentRevision) {
    				objDocumentRevision = await models.sequelize.documentRevisions.update(updateDocumentRevision, { where: { file_mime_type: fileMimeType } });
    			}
    		} else {
    			objDocumentRevision = await models.mongoose.documentRevisions.findOneAndUpdate({file_mime_type: fileMimeType}, {$set: updateDocumentRevision}, {new: true});
    		}
    		return objDocumentRevision;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentRevisionByRevision(revision, updateDocumentRevision) {
    	try {
    		let objDocumentRevision;
    		if(sql) {
    			objDocumentRevision = await models.sequelize.documentRevisions.findOne({where: { revision: revision }});
    			if (objDocumentRevision) {
    				objDocumentRevision = await models.sequelize.documentRevisions.update(updateDocumentRevision, { where: { revision: revision } });
    			}
    		} else {
    			objDocumentRevision = await models.mongoose.documentRevisions.findOneAndUpdate({revision: revision}, {$set: updateDocumentRevision}, {new: true});
    		}
    		return objDocumentRevision;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentRevisionByDateEntered(dateEntered, updateDocumentRevision) {
    	try {
    		let objDocumentRevision;
    		if(sql) {
    			objDocumentRevision = await models.sequelize.documentRevisions.findOne({where: { date_entered: dateEntered }});
    			if (objDocumentRevision) {
    				objDocumentRevision = await models.sequelize.documentRevisions.update(updateDocumentRevision, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objDocumentRevision = await models.mongoose.documentRevisions.findOneAndUpdate({date_entered: dateEntered}, {$set: updateDocumentRevision}, {new: true});
    		}
    		return objDocumentRevision;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentRevisionByDateModified(dateModified, updateDocumentRevision) {
    	try {
    		let objDocumentRevision;
    		if(sql) {
    			objDocumentRevision = await models.sequelize.documentRevisions.findOne({where: { date_modified: dateModified }});
    			if (objDocumentRevision) {
    				objDocumentRevision = await models.sequelize.documentRevisions.update(updateDocumentRevision, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objDocumentRevision = await models.mongoose.documentRevisions.findOneAndUpdate({date_modified: dateModified}, {$set: updateDocumentRevision}, {new: true});
    		}
    		return objDocumentRevision;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentRevisionByCreatedBy(createdBy, updateDocumentRevision) {
    	try {
    		let objDocumentRevision;
    		if(sql) {
    			objDocumentRevision = await models.sequelize.documentRevisions.findOne({where: { created_by: createdBy }});
    			if (objDocumentRevision) {
    				objDocumentRevision = await models.sequelize.documentRevisions.update(updateDocumentRevision, { where: { created_by: createdBy } });
    			}
    		} else {
    			objDocumentRevision = await models.mongoose.documentRevisions.findOneAndUpdate({created_by: createdBy}, {$set: updateDocumentRevision}, {new: true});
    		}
    		return objDocumentRevision;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = DocumentRevisionService;
//</es-section>
