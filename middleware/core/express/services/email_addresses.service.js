/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:01 GMT-0400 (Bolivia Time)
 * Time: 15:36:1
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:01 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:1
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

class EmailAddresseService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllEmailAddresses(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.emailAddresses.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.emailAddresses.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllEmailAddresses(select = []) {
		try {
			if(sql) {
				return await models.sequelize.emailAddresses.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.emailAddresses.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addEmailAddresse(newEmailAddresse) {
		try {
			let objEmailAddresse;
			if(util.PrimaryKeyTypeIsString(models.sequelize.emailAddresses.primaryKeys.id.type.toString())) {
			    newEmailAddresse.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objEmailAddresse = await models.sequelize.emailAddresses.create(newEmailAddresse);
			} else {
				objEmailAddresse = new models.mongoose.emailAddresses(newEmailAddresse);
				await objEmailAddresse.save();
			}
			return objEmailAddresse;
		} catch (error) {
			throw error;
		}
	}

	static async updateEmailAddresse(id, updateEmailAddresse) {
		try {
			let objEmailAddresse;
			if(sql) {
				objEmailAddresse = await models.sequelize.emailAddresses.findOne({where: { id: util.Char(id) }});
				if (objEmailAddresse) {
					await models.sequelize.emailAddresses.update(updateEmailAddresse, { where: { id: util.Char(id) } });
					objEmailAddresse = await models.sequelize.emailAddresses.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateEmailAddresse._id;
				objEmailAddresse = await models.mongoose.emailAddresses.findOneAndUpdate({id:id}, {$set: updateEmailAddresse}, {new: true});
			}
			return objEmailAddresse;
		} catch (error) {
			throw error;
		}
	}

	static async getAEmailAddresse(id, query) {
		try {
			let objEmailAddresse;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objEmailAddresse = await models.sequelize.emailAddresses.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objEmailAddresse = await models.mongoose.emailAddresses.find({id:util.Char(id)}).select(query.select);
			}
			return objEmailAddresse;
		} catch (error) {
			throw error;
		}
	}

	static async deleteEmailAddresse(id) {
		try {
			let objEmailAddresse;
			if(sql) {
				objEmailAddresse = await models.sequelize.emailAddresses.findOne({ where: { id: util.Char(id) } });
				if (objEmailAddresse) {
					await models.sequelize.emailAddresses.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objEmailAddresse = await models.mongoose.emailAddresses.deleteOne({id:util.Char(id)});
			}
			return objEmailAddresse;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objEmailAddresse;
    		if(sql) {
    			objEmailAddresse = await models.sequelize.emailAddresses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objEmailAddresse = await models.mongoose.emailAddresses.findOne({id: id});
    		}
    		return objEmailAddresse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByInvalidEmail(invalidEmail, query = {}) {
    	try {
    		let objEmailAddresse;
    		if(sql) {
    			objEmailAddresse = await models.sequelize.emailAddresses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { invalid_email: invalidEmail },
    			});
    		} else {
    			objEmailAddresse = await models.mongoose.emailAddresses.findOne({invalid_email: invalidEmail});
    		}
    		return objEmailAddresse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByOptOut(optOut, query = {}) {
    	try {
    		let objEmailAddresse;
    		if(sql) {
    			objEmailAddresse = await models.sequelize.emailAddresses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { opt_out: optOut },
    			});
    		} else {
    			objEmailAddresse = await models.mongoose.emailAddresses.findOne({opt_out: optOut});
    		}
    		return objEmailAddresse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objEmailAddresse;
    		if(sql) {
    			objEmailAddresse = await models.sequelize.emailAddresses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objEmailAddresse = await models.mongoose.emailAddresses.findOne({deleted: deleted});
    		}
    		return objEmailAddresse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByEmailAddress(emailAddress, query = {}) {
    	try {
    		let objEmailAddresse;
    		if(sql) {
    			objEmailAddresse = await models.sequelize.emailAddresses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { email_address: emailAddress },
    			});
    		} else {
    			objEmailAddresse = await models.mongoose.emailAddresses.findOne({email_address: emailAddress});
    		}
    		return objEmailAddresse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByEmailAddressCaps(emailAddressCaps, query = {}) {
    	try {
    		let objEmailAddresse;
    		if(sql) {
    			objEmailAddresse = await models.sequelize.emailAddresses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { email_address_caps: emailAddressCaps },
    			});
    		} else {
    			objEmailAddresse = await models.mongoose.emailAddresses.findOne({email_address_caps: emailAddressCaps});
    		}
    		return objEmailAddresse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByConfirmOptIn(confirmOptIn, query = {}) {
    	try {
    		let objEmailAddresse;
    		if(sql) {
    			objEmailAddresse = await models.sequelize.emailAddresses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { confirm_opt_in: confirmOptIn },
    			});
    		} else {
    			objEmailAddresse = await models.mongoose.emailAddresses.findOne({confirm_opt_in: confirmOptIn});
    		}
    		return objEmailAddresse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByConfirmOptInToken(confirmOptInToken, query = {}) {
    	try {
    		let objEmailAddresse;
    		if(sql) {
    			objEmailAddresse = await models.sequelize.emailAddresses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { confirm_opt_in_token: confirmOptInToken },
    			});
    		} else {
    			objEmailAddresse = await models.mongoose.emailAddresses.findOne({confirm_opt_in_token: confirmOptInToken});
    		}
    		return objEmailAddresse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByConfirmOptInDate(confirmOptInDate, query = {}) {
    	try {
    		let objEmailAddresse;
    		if(sql) {
    			objEmailAddresse = await models.sequelize.emailAddresses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { confirm_opt_in_date: confirmOptInDate },
    			});
    		} else {
    			objEmailAddresse = await models.mongoose.emailAddresses.findOne({confirm_opt_in_date: confirmOptInDate});
    		}
    		return objEmailAddresse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByConfirmOptInSentDate(confirmOptInSentDate, query = {}) {
    	try {
    		let objEmailAddresse;
    		if(sql) {
    			objEmailAddresse = await models.sequelize.emailAddresses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { confirm_opt_in_sent_date: confirmOptInSentDate },
    			});
    		} else {
    			objEmailAddresse = await models.mongoose.emailAddresses.findOne({confirm_opt_in_sent_date: confirmOptInSentDate});
    		}
    		return objEmailAddresse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByConfirmOptInFailDate(confirmOptInFailDate, query = {}) {
    	try {
    		let objEmailAddresse;
    		if(sql) {
    			objEmailAddresse = await models.sequelize.emailAddresses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { confirm_opt_in_fail_date: confirmOptInFailDate },
    			});
    		} else {
    			objEmailAddresse = await models.mongoose.emailAddresses.findOne({confirm_opt_in_fail_date: confirmOptInFailDate});
    		}
    		return objEmailAddresse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objEmailAddresse;
    		if(sql) {
    			objEmailAddresse = await models.sequelize.emailAddresses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objEmailAddresse = await models.mongoose.emailAddresses.findOne({date_created: dateCreated});
    		}
    		return objEmailAddresse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objEmailAddresse;
    		if(sql) {
    			objEmailAddresse = await models.sequelize.emailAddresses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objEmailAddresse = await models.mongoose.emailAddresses.findOne({date_modified: dateModified});
    		}
    		return objEmailAddresse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateEmailAddresseById(id, updateEmailAddresse) {
    	try {
    		let objEmailAddresse;
    		if(sql) {
    			objEmailAddresse = await models.sequelize.emailAddresses.findOne({where: { id: id }});
    			if (objEmailAddresse) {
    				objEmailAddresse = await models.sequelize.emailAddresses.update(updateEmailAddresse, { where: { id: id } });
    			}
    		} else {
    			objEmailAddresse = await models.mongoose.emailAddresses.findOneAndUpdate({id: id}, {$set: updateEmailAddresse}, {new: true});
    		}
    		return objEmailAddresse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailAddresseByInvalidEmail(invalidEmail, updateEmailAddresse) {
    	try {
    		let objEmailAddresse;
    		if(sql) {
    			objEmailAddresse = await models.sequelize.emailAddresses.findOne({where: { invalid_email: invalidEmail }});
    			if (objEmailAddresse) {
    				objEmailAddresse = await models.sequelize.emailAddresses.update(updateEmailAddresse, { where: { invalid_email: invalidEmail } });
    			}
    		} else {
    			objEmailAddresse = await models.mongoose.emailAddresses.findOneAndUpdate({invalid_email: invalidEmail}, {$set: updateEmailAddresse}, {new: true});
    		}
    		return objEmailAddresse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailAddresseByOptOut(optOut, updateEmailAddresse) {
    	try {
    		let objEmailAddresse;
    		if(sql) {
    			objEmailAddresse = await models.sequelize.emailAddresses.findOne({where: { opt_out: optOut }});
    			if (objEmailAddresse) {
    				objEmailAddresse = await models.sequelize.emailAddresses.update(updateEmailAddresse, { where: { opt_out: optOut } });
    			}
    		} else {
    			objEmailAddresse = await models.mongoose.emailAddresses.findOneAndUpdate({opt_out: optOut}, {$set: updateEmailAddresse}, {new: true});
    		}
    		return objEmailAddresse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailAddresseByDeleted(deleted, updateEmailAddresse) {
    	try {
    		let objEmailAddresse;
    		if(sql) {
    			objEmailAddresse = await models.sequelize.emailAddresses.findOne({where: { deleted: deleted }});
    			if (objEmailAddresse) {
    				objEmailAddresse = await models.sequelize.emailAddresses.update(updateEmailAddresse, { where: { deleted: deleted } });
    			}
    		} else {
    			objEmailAddresse = await models.mongoose.emailAddresses.findOneAndUpdate({deleted: deleted}, {$set: updateEmailAddresse}, {new: true});
    		}
    		return objEmailAddresse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailAddresseByEmailAddress(emailAddress, updateEmailAddresse) {
    	try {
    		let objEmailAddresse;
    		if(sql) {
    			objEmailAddresse = await models.sequelize.emailAddresses.findOne({where: { email_address: emailAddress }});
    			if (objEmailAddresse) {
    				objEmailAddresse = await models.sequelize.emailAddresses.update(updateEmailAddresse, { where: { email_address: emailAddress } });
    			}
    		} else {
    			objEmailAddresse = await models.mongoose.emailAddresses.findOneAndUpdate({email_address: emailAddress}, {$set: updateEmailAddresse}, {new: true});
    		}
    		return objEmailAddresse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailAddresseByEmailAddressCaps(emailAddressCaps, updateEmailAddresse) {
    	try {
    		let objEmailAddresse;
    		if(sql) {
    			objEmailAddresse = await models.sequelize.emailAddresses.findOne({where: { email_address_caps: emailAddressCaps }});
    			if (objEmailAddresse) {
    				objEmailAddresse = await models.sequelize.emailAddresses.update(updateEmailAddresse, { where: { email_address_caps: emailAddressCaps } });
    			}
    		} else {
    			objEmailAddresse = await models.mongoose.emailAddresses.findOneAndUpdate({email_address_caps: emailAddressCaps}, {$set: updateEmailAddresse}, {new: true});
    		}
    		return objEmailAddresse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailAddresseByConfirmOptIn(confirmOptIn, updateEmailAddresse) {
    	try {
    		let objEmailAddresse;
    		if(sql) {
    			objEmailAddresse = await models.sequelize.emailAddresses.findOne({where: { confirm_opt_in: confirmOptIn }});
    			if (objEmailAddresse) {
    				objEmailAddresse = await models.sequelize.emailAddresses.update(updateEmailAddresse, { where: { confirm_opt_in: confirmOptIn } });
    			}
    		} else {
    			objEmailAddresse = await models.mongoose.emailAddresses.findOneAndUpdate({confirm_opt_in: confirmOptIn}, {$set: updateEmailAddresse}, {new: true});
    		}
    		return objEmailAddresse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailAddresseByConfirmOptInToken(confirmOptInToken, updateEmailAddresse) {
    	try {
    		let objEmailAddresse;
    		if(sql) {
    			objEmailAddresse = await models.sequelize.emailAddresses.findOne({where: { confirm_opt_in_token: confirmOptInToken }});
    			if (objEmailAddresse) {
    				objEmailAddresse = await models.sequelize.emailAddresses.update(updateEmailAddresse, { where: { confirm_opt_in_token: confirmOptInToken } });
    			}
    		} else {
    			objEmailAddresse = await models.mongoose.emailAddresses.findOneAndUpdate({confirm_opt_in_token: confirmOptInToken}, {$set: updateEmailAddresse}, {new: true});
    		}
    		return objEmailAddresse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailAddresseByConfirmOptInDate(confirmOptInDate, updateEmailAddresse) {
    	try {
    		let objEmailAddresse;
    		if(sql) {
    			objEmailAddresse = await models.sequelize.emailAddresses.findOne({where: { confirm_opt_in_date: confirmOptInDate }});
    			if (objEmailAddresse) {
    				objEmailAddresse = await models.sequelize.emailAddresses.update(updateEmailAddresse, { where: { confirm_opt_in_date: confirmOptInDate } });
    			}
    		} else {
    			objEmailAddresse = await models.mongoose.emailAddresses.findOneAndUpdate({confirm_opt_in_date: confirmOptInDate}, {$set: updateEmailAddresse}, {new: true});
    		}
    		return objEmailAddresse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailAddresseByConfirmOptInSentDate(confirmOptInSentDate, updateEmailAddresse) {
    	try {
    		let objEmailAddresse;
    		if(sql) {
    			objEmailAddresse = await models.sequelize.emailAddresses.findOne({where: { confirm_opt_in_sent_date: confirmOptInSentDate }});
    			if (objEmailAddresse) {
    				objEmailAddresse = await models.sequelize.emailAddresses.update(updateEmailAddresse, { where: { confirm_opt_in_sent_date: confirmOptInSentDate } });
    			}
    		} else {
    			objEmailAddresse = await models.mongoose.emailAddresses.findOneAndUpdate({confirm_opt_in_sent_date: confirmOptInSentDate}, {$set: updateEmailAddresse}, {new: true});
    		}
    		return objEmailAddresse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailAddresseByConfirmOptInFailDate(confirmOptInFailDate, updateEmailAddresse) {
    	try {
    		let objEmailAddresse;
    		if(sql) {
    			objEmailAddresse = await models.sequelize.emailAddresses.findOne({where: { confirm_opt_in_fail_date: confirmOptInFailDate }});
    			if (objEmailAddresse) {
    				objEmailAddresse = await models.sequelize.emailAddresses.update(updateEmailAddresse, { where: { confirm_opt_in_fail_date: confirmOptInFailDate } });
    			}
    		} else {
    			objEmailAddresse = await models.mongoose.emailAddresses.findOneAndUpdate({confirm_opt_in_fail_date: confirmOptInFailDate}, {$set: updateEmailAddresse}, {new: true});
    		}
    		return objEmailAddresse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailAddresseByDateCreated(dateCreated, updateEmailAddresse) {
    	try {
    		let objEmailAddresse;
    		if(sql) {
    			objEmailAddresse = await models.sequelize.emailAddresses.findOne({where: { date_created: dateCreated }});
    			if (objEmailAddresse) {
    				objEmailAddresse = await models.sequelize.emailAddresses.update(updateEmailAddresse, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objEmailAddresse = await models.mongoose.emailAddresses.findOneAndUpdate({date_created: dateCreated}, {$set: updateEmailAddresse}, {new: true});
    		}
    		return objEmailAddresse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailAddresseByDateModified(dateModified, updateEmailAddresse) {
    	try {
    		let objEmailAddresse;
    		if(sql) {
    			objEmailAddresse = await models.sequelize.emailAddresses.findOne({where: { date_modified: dateModified }});
    			if (objEmailAddresse) {
    				objEmailAddresse = await models.sequelize.emailAddresses.update(updateEmailAddresse, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objEmailAddresse = await models.mongoose.emailAddresses.findOneAndUpdate({date_modified: dateModified}, {$set: updateEmailAddresse}, {new: true});
    		}
    		return objEmailAddresse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = EmailAddresseService;
//</es-section>
