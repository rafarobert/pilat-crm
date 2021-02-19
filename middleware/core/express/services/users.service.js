/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:39:00 GMT-0400 (Bolivia Time)
 * Time: 18:39:0
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:39:00 GMT-0400 (Bolivia Time)
 * Last time updated: 18:39:0
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

class UserService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllUsers(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.users.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.users.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllUsers(select = []) {
		try {
			if(sql) {
				return await models.sequelize.users.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.users.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addUser(newUser) {
		try {
			let objUser;
			if(util.PrimaryKeyTypeIsString(models.sequelize.users.primaryKeys.id.type.toString())) {
			    newUser.id = models.sequelize.objectId().toString();
		    }
			
			
			newUser.user_hash = await bcrypt.hash(newUser.user_hash, bcrypt.genSaltSync(8)).then(encripted => {return encripted});
			
			
			if(sql) {
				objUser = await models.sequelize.users.create(newUser);
			} else {
				objUser = new models.mongoose.users(newUser);
				await objUser.save();
			}
			return objUser;
		} catch (error) {
			throw error;
		}
	}

	static async updateUser(id, updateUser) {
		try {
			let objUser;
			if(sql) {
				objUser = await models.sequelize.users.findOne({where: { id: util.Char(id) }});
				if (objUser) {
					await models.sequelize.users.update(updateUser, { where: { id: util.Char(id) } });
					objUser = await models.sequelize.users.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateUser._id;
				objUser = await models.mongoose.users.findOneAndUpdate({id:id}, {$set: updateUser}, {new: true});
			}
			return objUser;
		} catch (error) {
			throw error;
		}
	}

	static async getAUser(id, query) {
		try {
			let objUser;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objUser = await models.sequelize.users.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objUser = await models.mongoose.users.find({id:util.Char(id)}).select(query.select);
			}
			return objUser;
		} catch (error) {
			throw error;
		}
	}

	static async deleteUser(id) {
		try {
			let objUser;
			if(sql) {
				objUser = await models.sequelize.users.findOne({ where: { id: util.Char(id) } });
				if (objUser) {
					await models.sequelize.users.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objUser = await models.mongoose.users.deleteOne({id:util.Char(id)});
			}
			return objUser;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objUser = await models.mongoose.users.findOne({id: id});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySystemGeneratedPassword(systemGeneratedPassword, query = {}) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { system_generated_password: systemGeneratedPassword },
    			});
    		} else {
    			objUser = await models.mongoose.users.findOne({system_generated_password: systemGeneratedPassword});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySugarLogin(sugarLogin, query = {}) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { sugar_login: sugarLogin },
    			});
    		} else {
    			objUser = await models.mongoose.users.findOne({sugar_login: sugarLogin});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByIsAdmin(isAdmin, query = {}) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { is_admin: isAdmin },
    			});
    		} else {
    			objUser = await models.mongoose.users.findOne({is_admin: isAdmin});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByExternalAuthOnly(externalAuthOnly, query = {}) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { external_auth_only: externalAuthOnly },
    			});
    		} else {
    			objUser = await models.mongoose.users.findOne({external_auth_only: externalAuthOnly});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByReceiveNotifications(receiveNotifications, query = {}) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { receive_notifications: receiveNotifications },
    			});
    		} else {
    			objUser = await models.mongoose.users.findOne({receive_notifications: receiveNotifications});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objUser = await models.mongoose.users.findOne({deleted: deleted});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPortalOnly(portalOnly, query = {}) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { portal_only: portalOnly },
    			});
    		} else {
    			objUser = await models.mongoose.users.findOne({portal_only: portalOnly});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByShowOnEmployees(showOnEmployees, query = {}) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { show_on_employees: showOnEmployees },
    			});
    		} else {
    			objUser = await models.mongoose.users.findOne({show_on_employees: showOnEmployees});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByIsGroup(isGroup, query = {}) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { is_group: isGroup },
    			});
    		} else {
    			objUser = await models.mongoose.users.findOne({is_group: isGroup});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFactorAuth(factorAuth, query = {}) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { factor_auth: factorAuth },
    			});
    		} else {
    			objUser = await models.mongoose.users.findOne({factor_auth: factorAuth});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUserName(userName, query = {}) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { user_name: userName },
    			});
    		} else {
    			objUser = await models.mongoose.users.findOne({user_name: userName});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUserHash(userHash, query = {}) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { user_hash: userHash },
    			});
    		} else {
    			objUser = await models.mongoose.users.findOne({user_hash: userHash});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAuthenticateId(authenticateId, query = {}) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { authenticate_id: authenticateId },
    			});
    		} else {
    			objUser = await models.mongoose.users.findOne({authenticate_id: authenticateId});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFirstName(firstName, query = {}) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { first_name: firstName },
    			});
    		} else {
    			objUser = await models.mongoose.users.findOne({first_name: firstName});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLastName(lastName, query = {}) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { last_name: lastName },
    			});
    		} else {
    			objUser = await models.mongoose.users.findOne({last_name: lastName});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTitle(title, query = {}) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { title: title },
    			});
    		} else {
    			objUser = await models.mongoose.users.findOne({title: title});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPhoto(photo, query = {}) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { photo: photo },
    			});
    		} else {
    			objUser = await models.mongoose.users.findOne({photo: photo});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDepartment(department, query = {}) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { department: department },
    			});
    		} else {
    			objUser = await models.mongoose.users.findOne({department: department});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPhoneHome(phoneHome, query = {}) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { phone_home: phoneHome },
    			});
    		} else {
    			objUser = await models.mongoose.users.findOne({phone_home: phoneHome});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPhoneMobile(phoneMobile, query = {}) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { phone_mobile: phoneMobile },
    			});
    		} else {
    			objUser = await models.mongoose.users.findOne({phone_mobile: phoneMobile});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPhoneWork(phoneWork, query = {}) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { phone_work: phoneWork },
    			});
    		} else {
    			objUser = await models.mongoose.users.findOne({phone_work: phoneWork});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPhoneOther(phoneOther, query = {}) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { phone_other: phoneOther },
    			});
    		} else {
    			objUser = await models.mongoose.users.findOne({phone_other: phoneOther});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPhoneFax(phoneFax, query = {}) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { phone_fax: phoneFax },
    			});
    		} else {
    			objUser = await models.mongoose.users.findOne({phone_fax: phoneFax});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByStatus(status, query = {}) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { status: status },
    			});
    		} else {
    			objUser = await models.mongoose.users.findOne({status: status});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAddressStreet(addressStreet, query = {}) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { address_street: addressStreet },
    			});
    		} else {
    			objUser = await models.mongoose.users.findOne({address_street: addressStreet});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAddressCity(addressCity, query = {}) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { address_city: addressCity },
    			});
    		} else {
    			objUser = await models.mongoose.users.findOne({address_city: addressCity});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAddressState(addressState, query = {}) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { address_state: addressState },
    			});
    		} else {
    			objUser = await models.mongoose.users.findOne({address_state: addressState});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAddressCountry(addressCountry, query = {}) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { address_country: addressCountry },
    			});
    		} else {
    			objUser = await models.mongoose.users.findOne({address_country: addressCountry});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAddressPostalcode(addressPostalcode, query = {}) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { address_postalcode: addressPostalcode },
    			});
    		} else {
    			objUser = await models.mongoose.users.findOne({address_postalcode: addressPostalcode});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByEmployeeStatus(employeeStatus, query = {}) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { employee_status: employeeStatus },
    			});
    		} else {
    			objUser = await models.mongoose.users.findOne({employee_status: employeeStatus});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMessengerId(messengerId, query = {}) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { messenger_id: messengerId },
    			});
    		} else {
    			objUser = await models.mongoose.users.findOne({messenger_id: messengerId});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMessengerType(messengerType, query = {}) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { messenger_type: messengerType },
    			});
    		} else {
    			objUser = await models.mongoose.users.findOne({messenger_type: messengerType});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFactorAuthInterface(factorAuthInterface, query = {}) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { factor_auth_interface: factorAuthInterface },
    			});
    		} else {
    			objUser = await models.mongoose.users.findOne({factor_auth_interface: factorAuthInterface});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objUser = await models.mongoose.users.findOne({description: description});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPwdLastChanged(pwdLastChanged, query = {}) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { pwd_last_changed: pwdLastChanged },
    			});
    		} else {
    			objUser = await models.mongoose.users.findOne({pwd_last_changed: pwdLastChanged});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objUser = await models.mongoose.users.findOne({date_entered: dateEntered});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objUser = await models.mongoose.users.findOne({date_modified: dateModified});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objUser = await models.mongoose.users.findOne({modified_user_id: modifiedUserId});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objUser = await models.mongoose.users.findOne({created_by: createdBy});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByReportsToId(reportsToId, query = {}) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { reports_to_id: reportsToId },
    			});
    		} else {
    			objUser = await models.mongoose.users.findOne({reports_to_id: reportsToId});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateUserById(id, updateUser) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({where: { id: id }});
    			if (objUser) {
    				objUser = await models.sequelize.users.update(updateUser, { where: { id: id } });
    			}
    		} else {
    			objUser = await models.mongoose.users.findOneAndUpdate({id: id}, {$set: updateUser}, {new: true});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserBySystemGeneratedPassword(systemGeneratedPassword, updateUser) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({where: { system_generated_password: systemGeneratedPassword }});
    			if (objUser) {
    				objUser = await models.sequelize.users.update(updateUser, { where: { system_generated_password: systemGeneratedPassword } });
    			}
    		} else {
    			objUser = await models.mongoose.users.findOneAndUpdate({system_generated_password: systemGeneratedPassword}, {$set: updateUser}, {new: true});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserBySugarLogin(sugarLogin, updateUser) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({where: { sugar_login: sugarLogin }});
    			if (objUser) {
    				objUser = await models.sequelize.users.update(updateUser, { where: { sugar_login: sugarLogin } });
    			}
    		} else {
    			objUser = await models.mongoose.users.findOneAndUpdate({sugar_login: sugarLogin}, {$set: updateUser}, {new: true});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserByIsAdmin(isAdmin, updateUser) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({where: { is_admin: isAdmin }});
    			if (objUser) {
    				objUser = await models.sequelize.users.update(updateUser, { where: { is_admin: isAdmin } });
    			}
    		} else {
    			objUser = await models.mongoose.users.findOneAndUpdate({is_admin: isAdmin}, {$set: updateUser}, {new: true});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserByExternalAuthOnly(externalAuthOnly, updateUser) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({where: { external_auth_only: externalAuthOnly }});
    			if (objUser) {
    				objUser = await models.sequelize.users.update(updateUser, { where: { external_auth_only: externalAuthOnly } });
    			}
    		} else {
    			objUser = await models.mongoose.users.findOneAndUpdate({external_auth_only: externalAuthOnly}, {$set: updateUser}, {new: true});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserByReceiveNotifications(receiveNotifications, updateUser) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({where: { receive_notifications: receiveNotifications }});
    			if (objUser) {
    				objUser = await models.sequelize.users.update(updateUser, { where: { receive_notifications: receiveNotifications } });
    			}
    		} else {
    			objUser = await models.mongoose.users.findOneAndUpdate({receive_notifications: receiveNotifications}, {$set: updateUser}, {new: true});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserByDeleted(deleted, updateUser) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({where: { deleted: deleted }});
    			if (objUser) {
    				objUser = await models.sequelize.users.update(updateUser, { where: { deleted: deleted } });
    			}
    		} else {
    			objUser = await models.mongoose.users.findOneAndUpdate({deleted: deleted}, {$set: updateUser}, {new: true});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserByPortalOnly(portalOnly, updateUser) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({where: { portal_only: portalOnly }});
    			if (objUser) {
    				objUser = await models.sequelize.users.update(updateUser, { where: { portal_only: portalOnly } });
    			}
    		} else {
    			objUser = await models.mongoose.users.findOneAndUpdate({portal_only: portalOnly}, {$set: updateUser}, {new: true});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserByShowOnEmployees(showOnEmployees, updateUser) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({where: { show_on_employees: showOnEmployees }});
    			if (objUser) {
    				objUser = await models.sequelize.users.update(updateUser, { where: { show_on_employees: showOnEmployees } });
    			}
    		} else {
    			objUser = await models.mongoose.users.findOneAndUpdate({show_on_employees: showOnEmployees}, {$set: updateUser}, {new: true});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserByIsGroup(isGroup, updateUser) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({where: { is_group: isGroup }});
    			if (objUser) {
    				objUser = await models.sequelize.users.update(updateUser, { where: { is_group: isGroup } });
    			}
    		} else {
    			objUser = await models.mongoose.users.findOneAndUpdate({is_group: isGroup}, {$set: updateUser}, {new: true});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserByFactorAuth(factorAuth, updateUser) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({where: { factor_auth: factorAuth }});
    			if (objUser) {
    				objUser = await models.sequelize.users.update(updateUser, { where: { factor_auth: factorAuth } });
    			}
    		} else {
    			objUser = await models.mongoose.users.findOneAndUpdate({factor_auth: factorAuth}, {$set: updateUser}, {new: true});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserByUserName(userName, updateUser) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({where: { user_name: userName }});
    			if (objUser) {
    				objUser = await models.sequelize.users.update(updateUser, { where: { user_name: userName } });
    			}
    		} else {
    			objUser = await models.mongoose.users.findOneAndUpdate({user_name: userName}, {$set: updateUser}, {new: true});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserByUserHash(userHash, updateUser) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({where: { user_hash: userHash }});
    			if (objUser) {
    				objUser = await models.sequelize.users.update(updateUser, { where: { user_hash: userHash } });
    			}
    		} else {
    			objUser = await models.mongoose.users.findOneAndUpdate({user_hash: userHash}, {$set: updateUser}, {new: true});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserByAuthenticateId(authenticateId, updateUser) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({where: { authenticate_id: authenticateId }});
    			if (objUser) {
    				objUser = await models.sequelize.users.update(updateUser, { where: { authenticate_id: authenticateId } });
    			}
    		} else {
    			objUser = await models.mongoose.users.findOneAndUpdate({authenticate_id: authenticateId}, {$set: updateUser}, {new: true});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserByFirstName(firstName, updateUser) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({where: { first_name: firstName }});
    			if (objUser) {
    				objUser = await models.sequelize.users.update(updateUser, { where: { first_name: firstName } });
    			}
    		} else {
    			objUser = await models.mongoose.users.findOneAndUpdate({first_name: firstName}, {$set: updateUser}, {new: true});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserByLastName(lastName, updateUser) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({where: { last_name: lastName }});
    			if (objUser) {
    				objUser = await models.sequelize.users.update(updateUser, { where: { last_name: lastName } });
    			}
    		} else {
    			objUser = await models.mongoose.users.findOneAndUpdate({last_name: lastName}, {$set: updateUser}, {new: true});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserByTitle(title, updateUser) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({where: { title: title }});
    			if (objUser) {
    				objUser = await models.sequelize.users.update(updateUser, { where: { title: title } });
    			}
    		} else {
    			objUser = await models.mongoose.users.findOneAndUpdate({title: title}, {$set: updateUser}, {new: true});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserByPhoto(photo, updateUser) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({where: { photo: photo }});
    			if (objUser) {
    				objUser = await models.sequelize.users.update(updateUser, { where: { photo: photo } });
    			}
    		} else {
    			objUser = await models.mongoose.users.findOneAndUpdate({photo: photo}, {$set: updateUser}, {new: true});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserByDepartment(department, updateUser) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({where: { department: department }});
    			if (objUser) {
    				objUser = await models.sequelize.users.update(updateUser, { where: { department: department } });
    			}
    		} else {
    			objUser = await models.mongoose.users.findOneAndUpdate({department: department}, {$set: updateUser}, {new: true});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserByPhoneHome(phoneHome, updateUser) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({where: { phone_home: phoneHome }});
    			if (objUser) {
    				objUser = await models.sequelize.users.update(updateUser, { where: { phone_home: phoneHome } });
    			}
    		} else {
    			objUser = await models.mongoose.users.findOneAndUpdate({phone_home: phoneHome}, {$set: updateUser}, {new: true});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserByPhoneMobile(phoneMobile, updateUser) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({where: { phone_mobile: phoneMobile }});
    			if (objUser) {
    				objUser = await models.sequelize.users.update(updateUser, { where: { phone_mobile: phoneMobile } });
    			}
    		} else {
    			objUser = await models.mongoose.users.findOneAndUpdate({phone_mobile: phoneMobile}, {$set: updateUser}, {new: true});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserByPhoneWork(phoneWork, updateUser) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({where: { phone_work: phoneWork }});
    			if (objUser) {
    				objUser = await models.sequelize.users.update(updateUser, { where: { phone_work: phoneWork } });
    			}
    		} else {
    			objUser = await models.mongoose.users.findOneAndUpdate({phone_work: phoneWork}, {$set: updateUser}, {new: true});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserByPhoneOther(phoneOther, updateUser) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({where: { phone_other: phoneOther }});
    			if (objUser) {
    				objUser = await models.sequelize.users.update(updateUser, { where: { phone_other: phoneOther } });
    			}
    		} else {
    			objUser = await models.mongoose.users.findOneAndUpdate({phone_other: phoneOther}, {$set: updateUser}, {new: true});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserByPhoneFax(phoneFax, updateUser) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({where: { phone_fax: phoneFax }});
    			if (objUser) {
    				objUser = await models.sequelize.users.update(updateUser, { where: { phone_fax: phoneFax } });
    			}
    		} else {
    			objUser = await models.mongoose.users.findOneAndUpdate({phone_fax: phoneFax}, {$set: updateUser}, {new: true});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserByStatus(status, updateUser) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({where: { status: status }});
    			if (objUser) {
    				objUser = await models.sequelize.users.update(updateUser, { where: { status: status } });
    			}
    		} else {
    			objUser = await models.mongoose.users.findOneAndUpdate({status: status}, {$set: updateUser}, {new: true});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserByAddressStreet(addressStreet, updateUser) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({where: { address_street: addressStreet }});
    			if (objUser) {
    				objUser = await models.sequelize.users.update(updateUser, { where: { address_street: addressStreet } });
    			}
    		} else {
    			objUser = await models.mongoose.users.findOneAndUpdate({address_street: addressStreet}, {$set: updateUser}, {new: true});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserByAddressCity(addressCity, updateUser) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({where: { address_city: addressCity }});
    			if (objUser) {
    				objUser = await models.sequelize.users.update(updateUser, { where: { address_city: addressCity } });
    			}
    		} else {
    			objUser = await models.mongoose.users.findOneAndUpdate({address_city: addressCity}, {$set: updateUser}, {new: true});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserByAddressState(addressState, updateUser) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({where: { address_state: addressState }});
    			if (objUser) {
    				objUser = await models.sequelize.users.update(updateUser, { where: { address_state: addressState } });
    			}
    		} else {
    			objUser = await models.mongoose.users.findOneAndUpdate({address_state: addressState}, {$set: updateUser}, {new: true});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserByAddressCountry(addressCountry, updateUser) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({where: { address_country: addressCountry }});
    			if (objUser) {
    				objUser = await models.sequelize.users.update(updateUser, { where: { address_country: addressCountry } });
    			}
    		} else {
    			objUser = await models.mongoose.users.findOneAndUpdate({address_country: addressCountry}, {$set: updateUser}, {new: true});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserByAddressPostalcode(addressPostalcode, updateUser) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({where: { address_postalcode: addressPostalcode }});
    			if (objUser) {
    				objUser = await models.sequelize.users.update(updateUser, { where: { address_postalcode: addressPostalcode } });
    			}
    		} else {
    			objUser = await models.mongoose.users.findOneAndUpdate({address_postalcode: addressPostalcode}, {$set: updateUser}, {new: true});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserByEmployeeStatus(employeeStatus, updateUser) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({where: { employee_status: employeeStatus }});
    			if (objUser) {
    				objUser = await models.sequelize.users.update(updateUser, { where: { employee_status: employeeStatus } });
    			}
    		} else {
    			objUser = await models.mongoose.users.findOneAndUpdate({employee_status: employeeStatus}, {$set: updateUser}, {new: true});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserByMessengerId(messengerId, updateUser) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({where: { messenger_id: messengerId }});
    			if (objUser) {
    				objUser = await models.sequelize.users.update(updateUser, { where: { messenger_id: messengerId } });
    			}
    		} else {
    			objUser = await models.mongoose.users.findOneAndUpdate({messenger_id: messengerId}, {$set: updateUser}, {new: true});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserByMessengerType(messengerType, updateUser) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({where: { messenger_type: messengerType }});
    			if (objUser) {
    				objUser = await models.sequelize.users.update(updateUser, { where: { messenger_type: messengerType } });
    			}
    		} else {
    			objUser = await models.mongoose.users.findOneAndUpdate({messenger_type: messengerType}, {$set: updateUser}, {new: true});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserByFactorAuthInterface(factorAuthInterface, updateUser) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({where: { factor_auth_interface: factorAuthInterface }});
    			if (objUser) {
    				objUser = await models.sequelize.users.update(updateUser, { where: { factor_auth_interface: factorAuthInterface } });
    			}
    		} else {
    			objUser = await models.mongoose.users.findOneAndUpdate({factor_auth_interface: factorAuthInterface}, {$set: updateUser}, {new: true});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserByDescription(description, updateUser) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({where: { description: description }});
    			if (objUser) {
    				objUser = await models.sequelize.users.update(updateUser, { where: { description: description } });
    			}
    		} else {
    			objUser = await models.mongoose.users.findOneAndUpdate({description: description}, {$set: updateUser}, {new: true});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserByPwdLastChanged(pwdLastChanged, updateUser) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({where: { pwd_last_changed: pwdLastChanged }});
    			if (objUser) {
    				objUser = await models.sequelize.users.update(updateUser, { where: { pwd_last_changed: pwdLastChanged } });
    			}
    		} else {
    			objUser = await models.mongoose.users.findOneAndUpdate({pwd_last_changed: pwdLastChanged}, {$set: updateUser}, {new: true});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserByDateEntered(dateEntered, updateUser) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({where: { date_entered: dateEntered }});
    			if (objUser) {
    				objUser = await models.sequelize.users.update(updateUser, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objUser = await models.mongoose.users.findOneAndUpdate({date_entered: dateEntered}, {$set: updateUser}, {new: true});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserByDateModified(dateModified, updateUser) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({where: { date_modified: dateModified }});
    			if (objUser) {
    				objUser = await models.sequelize.users.update(updateUser, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objUser = await models.mongoose.users.findOneAndUpdate({date_modified: dateModified}, {$set: updateUser}, {new: true});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserByModifiedUserId(modifiedUserId, updateUser) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objUser) {
    				objUser = await models.sequelize.users.update(updateUser, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objUser = await models.mongoose.users.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateUser}, {new: true});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserByCreatedBy(createdBy, updateUser) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({where: { created_by: createdBy }});
    			if (objUser) {
    				objUser = await models.sequelize.users.update(updateUser, { where: { created_by: createdBy } });
    			}
    		} else {
    			objUser = await models.mongoose.users.findOneAndUpdate({created_by: createdBy}, {$set: updateUser}, {new: true});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserByReportsToId(reportsToId, updateUser) {
    	try {
    		let objUser;
    		if(sql) {
    			objUser = await models.sequelize.users.findOne({where: { reports_to_id: reportsToId }});
    			if (objUser) {
    				objUser = await models.sequelize.users.update(updateUser, { where: { reports_to_id: reportsToId } });
    			}
    		} else {
    			objUser = await models.mongoose.users.findOneAndUpdate({reports_to_id: reportsToId}, {$set: updateUser}, {new: true});
    		}
    		return objUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = UserService;
//</es-section>
