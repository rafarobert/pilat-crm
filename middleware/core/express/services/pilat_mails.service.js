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

class PilatMailService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllPilatMails(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.pilatMails.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['_id','ASC']],
                });
			} else {
				return await models.mongoose.pilatMails.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllPilatMails(select = []) {
		try {
			if(sql) {
				return await models.sequelize.pilatMails.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.pilatMails.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addPilatMail(newPilatMail) {
		try {
			let objPilatMail;
			if(util.PrimaryKeyTypeIsString(models.sequelize.pilatMails.primaryKeys._id.type.toString())) {
			    newPilatMail._id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objPilatMail = await models.sequelize.pilatMails.create(newPilatMail);
			} else {
				objPilatMail = new models.mongoose.pilatMails(newPilatMail);
				await objPilatMail.save();
			}
			return objPilatMail;
		} catch (error) {
			throw error;
		}
	}

	static async updatePilatMail(_id, updatePilatMail) {
		try {
			let objPilatMail;
			if(sql) {
				objPilatMail = await models.sequelize.pilatMails.findOne({where: { _id: util.String(_id) }});
				if (objPilatMail) {
					await models.sequelize.pilatMails.update(updatePilatMail, { where: { _id: util.String(_id) } });
					objPilatMail = await models.sequelize.pilatMails.findOne({where: { _id: util.String(_id) }});
				}
			} else {
				delete updatePilatMail._id;
				objPilatMail = await models.mongoose.pilatMails.findOneAndUpdate({_id:_id}, {$set: updatePilatMail}, {new: true});
			}
			return objPilatMail;
		} catch (error) {
			throw error;
		}
	}

	static async getAPilatMail(_id, query) {
		try {
			let objPilatMail;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objPilatMail = await models.sequelize.pilatMails.findOne({
					    where: where && !where.where ? where : { _id: util.String(_id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objPilatMail = await models.mongoose.pilatMails.find({_id:util.String(_id)}).select(query.select);
			}
			return objPilatMail;
		} catch (error) {
			throw error;
		}
	}

	static async deletePilatMail(_id) {
		try {
			let objPilatMail;
			if(sql) {
				objPilatMail = await models.sequelize.pilatMails.findOne({ where: { _id: util.String(_id) } });
				if (objPilatMail) {
					await models.sequelize.pilatMails.destroy({where: { _id: util.String(_id) }});
				}
			} else {
				objPilatMail = await models.mongoose.pilatMails.deleteOne({_id:util.String(_id)});
			}
			return objPilatMail;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneByUid(Id, query = {}) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { _id: Id },
    			});
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOne({_id: Id});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneById(id, query = {}) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOne({id: id});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMaiPort(maiPort, query = {}) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { mai_port: maiPort },
    			});
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOne({mai_port: maiPort});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMaiDescription(maiDescription, query = {}) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { mai_description: maiDescription },
    			});
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOne({mai_description: maiDescription});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMaiUserAccount(maiUserAccount, query = {}) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { mai_user_account: maiUserAccount },
    			});
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOne({mai_user_account: maiUserAccount});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMaiUserPassword(maiUserPassword, query = {}) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { mai_user_password: maiUserPassword },
    			});
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOne({mai_user_password: maiUserPassword});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMaiHost(maiHost, query = {}) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { mai_host: maiHost },
    			});
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOne({mai_host: maiHost});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMaiProtocol(maiProtocol, query = {}) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { mai_protocol: maiProtocol },
    			});
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOne({mai_protocol: maiProtocol});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMaiBusId(maiBusId, query = {}) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { mai_bus_id: maiBusId },
    			});
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOne({mai_bus_id: maiBusId});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMaiParStatusId(maiParStatusId, query = {}) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { mai_par_status_id: maiParStatusId },
    			});
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOne({mai_par_status_id: maiParStatusId});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMaiGroup(maiGroup, query = {}) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { mai_group: maiGroup },
    			});
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOne({mai_group: maiGroup});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMaiSubject(maiSubject, query = {}) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { mai_subject: maiSubject },
    			});
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOne({mai_subject: maiSubject});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMaiTo(maiTo, query = {}) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { mai_to: maiTo },
    			});
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOne({mai_to: maiTo});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUpdatedby(updatedby, query = {}) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { updatedBy: updatedby },
    			});
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOne({updatedBy: updatedby});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedby(createdby, query = {}) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { createdBy: createdby },
    			});
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOne({createdBy: createdby});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMaiBcc(maiBcc, query = {}) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { mai_bcc: maiBcc },
    			});
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOne({mai_bcc: maiBcc});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMaiCc(maiCc, query = {}) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { mai_cc: maiCc },
    			});
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOne({mai_cc: maiCc});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMaiText(maiText, query = {}) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { mai_text: maiText },
    			});
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOne({mai_text: maiText});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMaiHtml(maiHtml, query = {}) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { mai_html: maiHtml },
    			});
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOne({mai_html: maiHtml});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDueat(dueat, query = {}) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { dueAt: dueat },
    			});
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOne({dueAt: dueat});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedat(createdat, query = {}) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { createdAt: createdat },
    			});
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOne({createdAt: createdat});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUpdatedat(updatedat, query = {}) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { updatedAt: updatedat },
    			});
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOne({updatedAt: updatedat});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updatePilatMailByUid(Id, updatePilatMail) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({where: { _id: Id }});
    			if (objPilatMail) {
    				objPilatMail = await models.sequelize.pilatMails.update(updatePilatMail, { where: { _id: Id } });
    			}
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOneAndUpdate({_id: Id}, {$set: updatePilatMail}, {new: true});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatMailById(id, updatePilatMail) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({where: { id: id }});
    			if (objPilatMail) {
    				objPilatMail = await models.sequelize.pilatMails.update(updatePilatMail, { where: { id: id } });
    			}
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOneAndUpdate({id: id}, {$set: updatePilatMail}, {new: true});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatMailByMaiPort(maiPort, updatePilatMail) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({where: { mai_port: maiPort }});
    			if (objPilatMail) {
    				objPilatMail = await models.sequelize.pilatMails.update(updatePilatMail, { where: { mai_port: maiPort } });
    			}
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOneAndUpdate({mai_port: maiPort}, {$set: updatePilatMail}, {new: true});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatMailByMaiDescription(maiDescription, updatePilatMail) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({where: { mai_description: maiDescription }});
    			if (objPilatMail) {
    				objPilatMail = await models.sequelize.pilatMails.update(updatePilatMail, { where: { mai_description: maiDescription } });
    			}
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOneAndUpdate({mai_description: maiDescription}, {$set: updatePilatMail}, {new: true});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatMailByMaiUserAccount(maiUserAccount, updatePilatMail) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({where: { mai_user_account: maiUserAccount }});
    			if (objPilatMail) {
    				objPilatMail = await models.sequelize.pilatMails.update(updatePilatMail, { where: { mai_user_account: maiUserAccount } });
    			}
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOneAndUpdate({mai_user_account: maiUserAccount}, {$set: updatePilatMail}, {new: true});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatMailByMaiUserPassword(maiUserPassword, updatePilatMail) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({where: { mai_user_password: maiUserPassword }});
    			if (objPilatMail) {
    				objPilatMail = await models.sequelize.pilatMails.update(updatePilatMail, { where: { mai_user_password: maiUserPassword } });
    			}
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOneAndUpdate({mai_user_password: maiUserPassword}, {$set: updatePilatMail}, {new: true});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatMailByMaiHost(maiHost, updatePilatMail) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({where: { mai_host: maiHost }});
    			if (objPilatMail) {
    				objPilatMail = await models.sequelize.pilatMails.update(updatePilatMail, { where: { mai_host: maiHost } });
    			}
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOneAndUpdate({mai_host: maiHost}, {$set: updatePilatMail}, {new: true});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatMailByMaiProtocol(maiProtocol, updatePilatMail) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({where: { mai_protocol: maiProtocol }});
    			if (objPilatMail) {
    				objPilatMail = await models.sequelize.pilatMails.update(updatePilatMail, { where: { mai_protocol: maiProtocol } });
    			}
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOneAndUpdate({mai_protocol: maiProtocol}, {$set: updatePilatMail}, {new: true});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatMailByMaiBusId(maiBusId, updatePilatMail) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({where: { mai_bus_id: maiBusId }});
    			if (objPilatMail) {
    				objPilatMail = await models.sequelize.pilatMails.update(updatePilatMail, { where: { mai_bus_id: maiBusId } });
    			}
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOneAndUpdate({mai_bus_id: maiBusId}, {$set: updatePilatMail}, {new: true});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatMailByMaiParStatusId(maiParStatusId, updatePilatMail) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({where: { mai_par_status_id: maiParStatusId }});
    			if (objPilatMail) {
    				objPilatMail = await models.sequelize.pilatMails.update(updatePilatMail, { where: { mai_par_status_id: maiParStatusId } });
    			}
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOneAndUpdate({mai_par_status_id: maiParStatusId}, {$set: updatePilatMail}, {new: true});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatMailByMaiGroup(maiGroup, updatePilatMail) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({where: { mai_group: maiGroup }});
    			if (objPilatMail) {
    				objPilatMail = await models.sequelize.pilatMails.update(updatePilatMail, { where: { mai_group: maiGroup } });
    			}
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOneAndUpdate({mai_group: maiGroup}, {$set: updatePilatMail}, {new: true});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatMailByMaiSubject(maiSubject, updatePilatMail) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({where: { mai_subject: maiSubject }});
    			if (objPilatMail) {
    				objPilatMail = await models.sequelize.pilatMails.update(updatePilatMail, { where: { mai_subject: maiSubject } });
    			}
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOneAndUpdate({mai_subject: maiSubject}, {$set: updatePilatMail}, {new: true});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatMailByMaiTo(maiTo, updatePilatMail) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({where: { mai_to: maiTo }});
    			if (objPilatMail) {
    				objPilatMail = await models.sequelize.pilatMails.update(updatePilatMail, { where: { mai_to: maiTo } });
    			}
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOneAndUpdate({mai_to: maiTo}, {$set: updatePilatMail}, {new: true});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatMailByUpdatedby(updatedby, updatePilatMail) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({where: { updatedBy: updatedby }});
    			if (objPilatMail) {
    				objPilatMail = await models.sequelize.pilatMails.update(updatePilatMail, { where: { updatedBy: updatedby } });
    			}
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOneAndUpdate({updatedBy: updatedby}, {$set: updatePilatMail}, {new: true});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatMailByCreatedby(createdby, updatePilatMail) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({where: { createdBy: createdby }});
    			if (objPilatMail) {
    				objPilatMail = await models.sequelize.pilatMails.update(updatePilatMail, { where: { createdBy: createdby } });
    			}
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOneAndUpdate({createdBy: createdby}, {$set: updatePilatMail}, {new: true});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatMailByMaiBcc(maiBcc, updatePilatMail) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({where: { mai_bcc: maiBcc }});
    			if (objPilatMail) {
    				objPilatMail = await models.sequelize.pilatMails.update(updatePilatMail, { where: { mai_bcc: maiBcc } });
    			}
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOneAndUpdate({mai_bcc: maiBcc}, {$set: updatePilatMail}, {new: true});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatMailByMaiCc(maiCc, updatePilatMail) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({where: { mai_cc: maiCc }});
    			if (objPilatMail) {
    				objPilatMail = await models.sequelize.pilatMails.update(updatePilatMail, { where: { mai_cc: maiCc } });
    			}
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOneAndUpdate({mai_cc: maiCc}, {$set: updatePilatMail}, {new: true});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatMailByMaiText(maiText, updatePilatMail) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({where: { mai_text: maiText }});
    			if (objPilatMail) {
    				objPilatMail = await models.sequelize.pilatMails.update(updatePilatMail, { where: { mai_text: maiText } });
    			}
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOneAndUpdate({mai_text: maiText}, {$set: updatePilatMail}, {new: true});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatMailByMaiHtml(maiHtml, updatePilatMail) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({where: { mai_html: maiHtml }});
    			if (objPilatMail) {
    				objPilatMail = await models.sequelize.pilatMails.update(updatePilatMail, { where: { mai_html: maiHtml } });
    			}
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOneAndUpdate({mai_html: maiHtml}, {$set: updatePilatMail}, {new: true});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatMailByDueat(dueat, updatePilatMail) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({where: { dueAt: dueat }});
    			if (objPilatMail) {
    				objPilatMail = await models.sequelize.pilatMails.update(updatePilatMail, { where: { dueAt: dueat } });
    			}
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOneAndUpdate({dueAt: dueat}, {$set: updatePilatMail}, {new: true});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatMailByCreatedat(createdat, updatePilatMail) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({where: { createdAt: createdat }});
    			if (objPilatMail) {
    				objPilatMail = await models.sequelize.pilatMails.update(updatePilatMail, { where: { createdAt: createdat } });
    			}
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOneAndUpdate({createdAt: createdat}, {$set: updatePilatMail}, {new: true});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatMailByUpdatedat(updatedat, updatePilatMail) {
    	try {
    		let objPilatMail;
    		if(sql) {
    			objPilatMail = await models.sequelize.pilatMails.findOne({where: { updatedAt: updatedat }});
    			if (objPilatMail) {
    				objPilatMail = await models.sequelize.pilatMails.update(updatePilatMail, { where: { updatedAt: updatedat } });
    			}
    		} else {
    			objPilatMail = await models.mongoose.pilatMails.findOneAndUpdate({updatedAt: updatedat}, {$set: updatePilatMail}, {new: true});
    		}
    		return objPilatMail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async findPilatParamsMaiParStatusWithParOrder(select = ['_id', 'par_order'], query = {}) {
    	try {
    		let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? '0' : null;
    		if(sql) {
    		    return await models.sequelize.pilatParams.findAll({
                    attributes: select,
                    where: { par_group: {[Op.like]: '%grp_mai_par_status%'}},
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['_id','DESC']],
    		    });
    		} else {
    			return await models.mongoose.pilatParams.find({par_group: {$regex : ".*grp_mai_par_status.*"}}).select(select.join(' '));
    		}
    	} catch (error) {
            throw error;
    	}
    }
	
	
	static async filterPilatMailsByMaiParStatus(ids, query = {select:'',level:0}) {
    	try {
    	    let status = await this.findPilatParamsMaiParStatusWithParCod(['_id', 'par_abbr']);
        	let objPilatMail, project = {}, level, select;
        	level = Object.keys(query) && query.level ? query.level : 0;
        	select = Object.keys(query) && query.select ? query.select.split(',') : [];
        	select.forEach(sel => project[sel] = 1);
        	ids.forEach((id,i) => ids[i] = parseInt(id));
        	if(sql) {
    	        let enabled = status.find(param => param.dataValues.par_abbr == 'enabled');
    	        let idEnabled = enabled.dataValues._id;
        	    if ( level == 1 ) {
                    objPilatMail = await models.sequelize.pilatMails.findAll(
                        arraySqlLevel1Include
                    );
        	    } else if( level == 2 ){
        	        objPilatMail = await models.sequelize.pilatMails.findAll(
                        arraySqlLevel2Include
                    );
        	    } else {
        	        objPilatMail = await models.sequelize.pilatMails.findAll(
                        arraySqlLevel0Include
                    );
        	    }
    		} else {
    		    let enabled = status.find(param => param._doc.par_abbr == 'enabled');
    		    let idEnabled = enabled._doc._id;
    		    if ( level == 1 ) {
                    objPilatMail = await models.mongoose.pilatMails.aggregate(
                        arrayMongoLevel1Aggregate
                    );
    		    } else if( level == 2 ) {
    		        objPilatMail = await models.mongoose.pilatMails.aggregate(
                        arrayMongoLevel2Aggregate
                    );
    		    } else {
    		        objPilatMail = await models.mongoose.pilatMails.aggregate(
                        arrayMongoLevel0Aggregate
                    );
    		    }
    		}
    		return objPilatMail;
    	} catch (error) {
            throw error;
    	}
    }
	
	
	//</es-section>
}

//<es-section>
module.exports = PilatMailService;
//</es-section>
