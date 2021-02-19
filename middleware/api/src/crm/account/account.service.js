/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 02:25:36 GMT-0400 (Bolivia Time)
 * Time: 2:25:36
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 02:25:36 GMT-0400 (Bolivia Time)
 * Last time updated: 2:25:36
 *
 * Caution: es-sections will be replaced by script execution
 */

require('../../../../utils/Prototipes');
const helpers = require('../../../../utils/helpers');
const models = require('../../../relations');
import configJson from '../../../../config/config';
const sql = configJson.sql;
const Util = require('../../../../utils/Utils');
const util = new Util();

const { Op } = require("sequelize");
class AccountService {

	static async getAllAccounts(query) {
		try {
			if(sql) {
				let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
				let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.accounts.findAll({
					attributes:query.select ? query.select.split(',') : null,
					where: where && !where.where ? where : null,
					limit: query.limit ? parseInt(query.limit) : null,
					offset: offset ? parseInt(offset) : 0,
					order: query.order ? JSON.parse(query.order) : [['id','DESC']],
					include: [
						{
							model:models.sequelize.accountsCstm, as: 'accountAccountsCstm',
							where: where ? where.where ? where.where.accountAccountsCstm ? where.where.accountAccountsCstm : null : null : null,
						},
					]
				});
			}
		} catch (error) {
			throw error;
		}
	}

	static async getAAccount(id, query) {
		try {
			if(sql) {
				return await models.sequelize.accounts.findOne({
					attributes:query.select ? query.select.split(',') : null,
					where:{id:id},
					include: [
						{model:models.sequelize.accountsCstm, as: 'accountAccountsCstm'},
						{model:models.sequelize.accountsAudit, as: 'accountAccountsAudit'},
						{model:models.sequelize.accountsOpportunities, as: 'accountAccountsOpportunities'},
						{model:models.sequelize.accountsContacts, as: 'accountAccountsContacts'},
						{model:models.sequelize.sugarfeed, as: 'accountSugarfeed'},
						{model:models.sequelize.aodIndexevent, as: 'accountAodIndexevent'},
						{model:models.sequelize.tracker, as: 'accountTracker'},
					]
				});
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAccount(newAccount) {
		try {
			let objAccount;

			if(sql) {

				if (newAccount) {
					newAccount.id = models.sequelize.objectId().toString();
					newAccount.date_entered = new Date();
					newAccount.date_modified = new Date();
					let respAccount = await models.sequelize.accounts.create(newAccount);
					objAccount = respAccount.dataValues;

					if (newAccount.accountAccountsCstm) {
						newAccount.accountAccountsCstm.id_c = newAccount.id;
						let respAccountsCstm = await models.sequelize.accountsCstm.create(newAccount.accountAccountsCstm);
						objAccount.accountAccountsCstm = respAccountsCstm.dataValues;
					}

					if (newAccount.accountAccountsAudit) {
						newAccount.accountAccountsAudit.id = models.sequelize.objectId().toString();
						newAccount.accountAccountsAudit.parent_id = newAccount.id;
						newAccount.accountAccountsAudit.date_created = new Date();
						let respAccountsAudit = await models.sequelize.accountsAudit.create(newAccount.accountAccountsAudit);
						objAccount.accountAccountsAudit = respAccountsAudit.dataValues;
					}

					if (newAccount.accountAccountsOpportunities) {
						newAccount.accountAccountsOpportunities.id = models.sequelize.objectId().toString();
						newAccount.accountAccountsOpportunities.account_id = newAccount.id;
						newAccount.accountAccountsOpportunities.date_modified = new Date();
						let respAccountsOpportunities = await models.sequelize.accountsOpportunities.create(newAccount.accountAccountsOpportunities);
						objAccount.accountAccountsOpportunities = respAccountsOpportunities.dataValues;
					}

					if (newAccount.accountAccountsContacts) {
						newAccount.accountAccountsContacts.id = models.sequelize.objectId().toString();
						newAccount.accountAccountsContacts.account_id = newAccount.id;
						newAccount.accountAccountsContacts.date_modified = new Date();
						let respAccountsContacts = await models.sequelize.accountsContacts.create(newAccount.accountAccountsContacts);
						objAccount.accountAccountsContacts = respAccountsContacts.dataValues;
					}

					if (newAccount.accountSugarfeed) {
						newAccount.accountSugarfeed.id = models.sequelize.objectId().toString();
						newAccount.accountSugarfeed.related_id = newAccount.id;
						newAccount.accountSugarfeed.date_entered = new Date();
						newAccount.accountSugarfeed.date_modified = new Date();
						let respSugarfeed = await models.sequelize.sugarfeed.create(newAccount.accountSugarfeed);
						objAccount.accountSugarfeed = respSugarfeed.dataValues;
					}

					if (newAccount.accountAodIndexevent) {
						newAccount.accountAodIndexevent.id = models.sequelize.objectId().toString();
						newAccount.accountAodIndexevent.record_id = newAccount.id;
						newAccount.accountAodIndexevent.date_entered = new Date();
						newAccount.accountAodIndexevent.date_modified = new Date();
						let respAodIndexevent = await models.sequelize.aodIndexevent.create(newAccount.accountAodIndexevent);
						objAccount.accountAodIndexevent = respAodIndexevent.dataValues;
					}

					if (newAccount.accountTracker) {
						let max = await models.sequelize.tracker.max('id');
						newAccount.accountTracker.id = newAccount.accountTracker.id ? newAccount.accountTracker.id : max+1;
						newAccount.accountTracker.monitor_id = models.sequelize.objectId().toString();
						newAccount.accountTracker.item_id = newAccount.id;
						newAccount.accountTracker.date_modified = new Date();
						let respTracker = await models.sequelize.tracker.create(newAccount.accountTracker);
						objAccount.accountTracker = respTracker.dataValues;
					}
				}
			} else {
				objAccount = new models.mongoose.accounts(newAccount);
				await objAccount.save();
			}
			return objAccount;
		} catch (error) {
			throw error;
		}
	}

	static async updateAccount(id, updateAccount) {
		try {
			let objAccount;

			if(sql) {

				if (updateAccount) {
					if (updateAccount.id) {
						updateAccount.date_modified = new Date();
						await models.sequelize.accounts.update(updateAccount, {where:{id:updateAccount.id}});
						let respAccount = await models.sequelize.accounts.findOne({where: { id: updateAccount.id }});
						objAccount = respAccount.dataValues;
					} else {
						let oldUpdateAccount = await models.sequelize.accounts.findOne({where:{id:id}});
						if (oldUpdateAccount && oldUpdateAccount.dataValues) {
							oldUpdateAccount = oldUpdateAccount.dataValues;
							updateAccount.date_modified = new Date();
							await models.sequelize.accounts.update(updateAccount, {where:{id:oldUpdateAccount.id}});
							let respAccount = await models.sequelize.accounts.findOne({where: { id: oldUpdateAccount.id }});
							objAccount = respAccount.dataValues;
						} else {
							let newAccount = updateAccount;
							newAccount.id = models.sequelize.objectId().toString();
							newAccount.date_entered = new Date();
							newAccount.date_modified = new Date();
							let respAccount = await models.sequelize.accounts.create(newAccount);
							objAccount = respAccount.dataValues;
						}
					}

					if (updateAccount.accountAccountsOpportunities) {
						if (updateAccount.accountAccountsOpportunities.id) {
							updateAccount.accountAccountsOpportunities.date_modified = new Date();
							await models.sequelize.accountsOpportunities.update(updateAccount.accountAccountsOpportunities, {where:{id:updateAccount.accountAccountsOpportunities.id}});
							let respAccountsOpportunities = await models.sequelize.accountsOpportunities.findOne({where: { id:updateAccount.accountAccountsOpportunities.id }});
							objAccount.accountAccountsOpportunities = respAccountsOpportunities.dataValues;
						} else {
							let oldAccountAccountsOpportunities = await models.sequelize.accountsOpportunities.findOne({where:{account_id:id}});
							if (oldAccountAccountsOpportunities && oldAccountAccountsOpportunities.dataValues) {
								oldAccountAccountsOpportunities = oldAccountAccountsOpportunities.dataValues;
								updateAccount.accountAccountsOpportunities.date_modified = new Date();
								await models.sequelize.accountsOpportunities.update(updateAccount.accountAccountsOpportunities, {where:{id:oldAccountAccountsOpportunities.id}});
								let respAccountsOpportunities = await models.sequelize.accountsOpportunities.findOne({where: { id:oldAccountAccountsOpportunities.id }});
								objAccount.accountAccountsOpportunities = respAccountsOpportunities.dataValues;
							} else {
								let newAccount = updateAccount;
								newAccount.accountAccountsOpportunities.id = models.sequelize.objectId().toString();
								newAccount.accountAccountsOpportunities.account_id = newAccount.id;
								newAccount.accountAccountsOpportunities.date_modified = new Date();
								let respAccountsOpportunities = await models.sequelize.accountsOpportunities.create(newAccount.accountAccountsOpportunities);
								objAccount.accountAccountsOpportunities = respAccountsOpportunities.dataValues;
							}
						}
					}

					if (updateAccount.accountAccountsContacts) {
						if (updateAccount.accountAccountsContacts.id) {
							updateAccount.accountAccountsContacts.date_modified = new Date();
							await models.sequelize.accountsContacts.update(updateAccount.accountAccountsContacts, {where:{id:updateAccount.accountAccountsContacts.id}});
							let respAccountsContacts = await models.sequelize.accountsContacts.findOne({where: { id:updateAccount.accountAccountsContacts.id }});
							objAccount.accountAccountsContacts = respAccountsContacts.dataValues;
						} else {
							let oldAccountAccountsContacts = await models.sequelize.accountsContacts.findOne({where:{account_id:id}});
							if (oldAccountAccountsContacts && oldAccountAccountsContacts.dataValues) {
								oldAccountAccountsContacts = oldAccountAccountsContacts.dataValues;
								updateAccount.accountAccountsContacts.date_modified = new Date();
								await models.sequelize.accountsContacts.update(updateAccount.accountAccountsContacts, {where:{id:oldAccountAccountsContacts.id}});
								let respAccountsContacts = await models.sequelize.accountsContacts.findOne({where: { id:oldAccountAccountsContacts.id }});
								objAccount.accountAccountsContacts = respAccountsContacts.dataValues;
							} else {
								let newAccount = updateAccount;
								newAccount.accountAccountsContacts.id = models.sequelize.objectId().toString();
								newAccount.accountAccountsContacts.account_id = newAccount.id;
								newAccount.accountAccountsContacts.date_modified = new Date();
								let respAccountsContacts = await models.sequelize.accountsContacts.create(newAccount.accountAccountsContacts);
								objAccount.accountAccountsContacts = respAccountsContacts.dataValues;
							}
						}
					}

					if (updateAccount.accountSugarfeed) {
						if (updateAccount.accountSugarfeed.id) {
							updateAccount.accountSugarfeed.date_modified = new Date();
							await models.sequelize.sugarfeed.update(updateAccount.accountSugarfeed, {where:{id:updateAccount.accountSugarfeed.id}});
							let respSugarfeed = await models.sequelize.sugarfeed.findOne({where: { id: updateAccount.accountSugarfeed.id }});
							objAccount.accountSugarfeed = respSugarfeed.dataValues;
						} else {
							let oldAccountSugarfeed = await models.sequelize.sugarfeed.findOne({where:{related_id:id}});
							if (oldAccountSugarfeed && oldAccountSugarfeed.dataValues) {
								oldAccountSugarfeed = oldAccountSugarfeed.dataValues;
								updateAccount.accountSugarfeed.date_modified = new Date();
								await models.sequelize.sugarfeed.update(updateAccount.accountSugarfeed, {where:{id:oldAccountSugarfeed.id}});
								let respSugarfeed = await models.sequelize.sugarfeed.findOne({where: { id: oldAccountSugarfeed.id }});
								objAccount.accountSugarfeed = respSugarfeed.dataValues;
							} else {
								let newAccount = updateAccount;
								newAccount.accountSugarfeed.id = models.sequelize.objectId().toString();
								newAccount.accountSugarfeed.related_id = newAccount.id;
								newAccount.accountSugarfeed.date_entered = new Date();
								newAccount.accountSugarfeed.date_modified = new Date();
								let respSugarfeed = await models.sequelize.sugarfeed.create(newAccount.accountSugarfeed);
								objAccount.accountSugarfeed = respSugarfeed.dataValues;
							}
						}
					}

					if (updateAccount.accountAodIndexevent) {
						if (updateAccount.accountAodIndexevent.id) {
							updateAccount.accountAodIndexevent.date_modified = new Date();
							await models.sequelize.aodIndexevent.update(updateAccount.accountAodIndexevent,{where:{id:updateAccount.accountAodIndexevent.id}} );
							let respAodIndexevent = await models.sequelize.aodIndexevent.findOne({where: { id: updateAccount.accountAodIndexevent.id }});
							objAccount.accountAodIndexevent = respAodIndexevent.dataValues;
						} else {
							let oldAccountAodIndexevent = await models.sequelize.aodIndexevent.findOne({where:{record_id:id}});
							if (oldAccountAodIndexevent && oldAccountAodIndexevent.dataValues) {
								oldAccountAodIndexevent = oldAccountAodIndexevent.dataValues;
								updateAccount.accountAodIndexevent.date_modified = new Date();
								await models.sequelize.aodIndexevent.update(updateAccount.accountAodIndexevent,{where:{id:oldAccountAodIndexevent.id}} );
								let respAodIndexevent = await models.sequelize.aodIndexevent.findOne({where: { id: oldAccountAodIndexevent.id }});
								objAccount.accountAodIndexevent = respAodIndexevent.dataValues;
							} else {
								let newAccount = updateAccount;
								newAccount.accountAodIndexevent.id = models.sequelize.objectId().toString();
								newAccount.accountAodIndexevent.record_id = newAccount.id;
								newAccount.accountAodIndexevent.date_entered = new Date();
								newAccount.accountAodIndexevent.date_modified = new Date();
								let respAodIndexevent = await models.sequelize.aodIndexevent.create(newAccount.accountAodIndexevent);
								objAccount.accountAodIndexevent = respAodIndexevent.dataValues;
							}
						}
					}

					if (updateAccount.accountTracker) {
						if (updateAccount.accountTracker.id) {
							updateAccount.accountTracker.date_modified = new Date();
							await models.sequelize.tracker.update(updateAccount.accountTracker,{where:{id:updateAccount.accountTracker.id}} );
							let respTracker = await models.sequelize.tracker.findOne({where: { id: updateAccount.accountTracker.id }});
							objAccount.accountTracker = respTracker.dataValues;
						} else {
							let oldAccountTracker = await models.sequelize.tracker.findOne({where:{item_id:id}});
							if (oldAccountTracker && oldAccountTracker.dataValues) {
								oldAccountTracker = oldAccountTracker.dataValues;
								updateAccount.accountTracker.date_modified = new Date();
								await models.sequelize.tracker.update(updateAccount.accountTracker,{where:{id:oldAccountTracker.id}} );
								let respTracker = await models.sequelize.tracker.findOne({where: { id: oldAccountTracker.id }});
								objAccount.accountTracker = respTracker.dataValues;
							} else {
								let newAccount = updateAccount;
								let max = await models.sequelize.tracker.max('id');
								newAccount.accountTracker.id = newAccount.accountTracker.id ? newAccount.accountTracker.id : max+1;
								newAccount.accountTracker.monitor_id = models.sequelize.objectId().toString();
								newAccount.accountTracker.item_id = newAccount.id;
								newAccount.accountTracker.date_modified = new Date();
								let respTracker = await models.sequelize.tracker.create(newAccount.accountTracker);
								objAccount.accountTracker = respTracker.dataValues;
							}
						}
					}

					if (updateAccount.accountAccountsCstm) {
						if (updateAccount.accountAccountsCstm.id_c) {
							await models.sequelize.accountsCstm.update(updateAccount.accountAccountsCstm, {where: {id_c:updateAccount.accountAccountsCstm.id_c}});
							let respAccountsCstm = await models.sequelize.accountsCstm.findOne({where: { id_c: updateAccount.accountAccountsCstm.id_c }});
							objAccount.accountAccountsCstm = respAccountsCstm.dataValues;
						} else {
							let oldAccountAccountsCstm = await models.sequelize.accountsCstm.findOne({where:{id_c:id}});
							if (oldAccountAccountsCstm && oldAccountAccountsCstm.dataValues) {
								oldAccountAccountsCstm = oldAccountAccountsCstm.dataValues;
								await models.sequelize.accountsCstm.update(updateAccount.accountAccountsCstm, {where: {id_c:oldAccountAccountsCstm.id_c}});
								let respAccountsCstm = await models.sequelize.accountsCstm.findOne({where: { id_c: oldAccountAccountsCstm.id_c }});
								objAccount.accountAccountsCstm = respAccountsCstm.dataValues;
							} else {
								let newAccount = updateAccount;
								newAccount.accountAccountsCstm.id_c = newAccount.id;
								let respAccountsCstm = await models.sequelize.accountsCstm.create(newAccount.accountAccountsCstm);
								objAccount.accountAccountsCstm = respAccountsCstm.dataValues;
							}
						}
					}

					if (updateAccount.accountAccountsAudit) {
						if (updateAccount.accountAccountsAudit.id) {
							await models.sequelize.accountsAudit.update(updateAccount.accountAccountsAudit, {where: {id:updateAccount.accountAccountsAudit.id}});
							let respAccountsAudit = await models.sequelize.accountsAudit.findOne({where: { id:updateAccount.accountAccountsAudit.id }});
							objAccount.accountAccountsAudit = respAccountsAudit.dataValues;
						} else {
							let oldAccountAccountsAudit = await models.sequelize.accountsAudit.findOne({where:{parent_id:id}});
							if (oldAccountAccountsAudit && oldAccountAccountsAudit.dataValues) {
								oldAccountAccountsAudit = oldAccountAccountsAudit.dataValues
								await models.sequelize.accountsAudit.update(updateAccount.accountAccountsAudit, {where: {id:oldAccountAccountsAudit.id}});
								let respAccountsAudit = await models.sequelize.accountsAudit.findOne({where: { id:oldAccountAccountsAudit.id }});
								objAccount.accountAccountsAudit = respAccountsAudit.dataValues;
							} else {
								let newAccount = updateAccount;
								newAccount.accountAccountsAudit.id = models.sequelize.objectId().toString();
								newAccount.accountAccountsAudit.parent_id = newAccount.id;
								newAccount.accountAccountsAudit.date_created = new Date();
								let respAccountsAudit = await models.sequelize.accountsAudit.create(newAccount.accountAccountsAudit);
								objAccount.accountAccountsAudit = respAccountsAudit.dataValues;
							}
						}
					}
				}
			} else {
				objAccount = new models.mongoose.accounts(objAccount);
				await objAccount.save();
			}
			return objAccount;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAccount(id) {
		try {
			let objAccount;
			if(sql) {

				let accounts = await models.sequelize.accounts.findOne({ where: { id: util.Char(id) } });
				if (accounts) await models.sequelize.accounts.destroy({where: { id: util.Char(id) }});

				let accountAcountsCstm = await models.sequelize.accountsCstm.findOne({ where: { id_c: util.Char(id) } });
				if (accountAcountsCstm) await models.sequelize.accountsCstm.destroy({where: { id_c: util.Char(id) }});

				let accountAccountsAudit = await models.sequelize.accountsAudit.findOne({ where: { parent_id: util.Char(id) } });
				if (accountAccountsAudit) await models.sequelize.accountsAudit.destroy({where: { parent_id: util.Char(id) }});

				let accountAccountsOpportunities = await models.sequelize.accountsOpportunities.findOne({ where: { account_id: util.Char(id) } });
				if (accountAccountsOpportunities) await models.sequelize.accountsOpportunities.destroy({where: { account_id: util.Char(id) }});

				let accountAccountsContacts = await models.sequelize.accountsContacts.findOne({ where: { account_id: util.Char(id) } });
				if (accountAccountsContacts) await models.sequelize.accountsContacts.destroy({where: { account_id: util.Char(id) }});

				let accountSugarfeed = await models.sequelize.sugarfeed.findOne({ where: { related_id: util.Char(id) } });
				if (accountSugarfeed) await models.sequelize.sugarfeed.destroy({where: { related_id: util.Char(id) }});

				let accountAodIndexevent = await models.sequelize.aodIndexevent.findOne({ where: { record_id: util.Char(id) } });
				if (accountAodIndexevent) await models.sequelize.aodIndexevent.destroy({where: { record_id: util.Char(id) }});

				let accountTracker = await models.sequelize.tracker.findOne({ where: { item_id: util.Char(id) } });
				if (accountTracker) await models.sequelize.tracker.destroy({where: { item_id: util.Char(id) }});

				objAccount = accounts;
				objAccount.accountAcountsCstm = accountAcountsCstm;
				objAccount.accountAccountsAudit = accountAccountsAudit;
				objAccount.accountAccountsOpportunities = accountAccountsOpportunities;
				objAccount.accountAccountsContacts= accountAccountsContacts;
				objAccount.accountSugarfeed = accountSugarfeed;
				objAccount.accountAodIndexevent = accountAodIndexevent;
				objAccount.accountTracker = accountTracker;

			} else {
				objAccount = await models.mongoose.accounts.deleteOne({id:util.Char(id)});
			}
			return objAccount;
		} catch (error) {
			throw error;
		}
	}


}

//<es-section>
module.exports = AccountService;
//</es-section>
