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
class UserService {

	static async getAllUsers(query) {
		try {
			if(sql) {
				let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
				let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
				return await models.sequelize.users.findAll({
					attributes:query.select ? query.select.split(',') : null,
					where: where && !where.where ? where : null,
					limit: query.limit ? parseInt(query.limit) : null,
					offset: offset ? parseInt(offset) : 0,
					order: query.order ? JSON.parse(query.order) : [['id','DESC']],
					include: [
						{
							model:models.sequelize.usersCstm, as: 'userUsersCstm',
							where: where ? where.where ? where.where.userUsersCstm ? where.where.userUsersCstm : null : null : null,

						},
					]
				});
			}
		} catch (error) {
			throw error;
		}
	}

	static async getAUser(id, query) {
		try {
			if(sql) {
				return await models.sequelize.users.findOne({
					attributes:query.select ? query.select.split(',') : null,
					where:{id:id},
					include: [
						{model:models.sequelize.usersCstm, as: 'userUsersCstm'},
						{model:models.sequelize.sugarfeed, as: 'userSugarfeed'},
						{model:models.sequelize.aodIndexevent, as: 'userAodIndexevent'},
						{model:models.sequelize.tracker, as: 'trackerItem'},
					]
				});
			}
		} catch (error) {
			throw error;
		}
	}

	static async addUser(newUser) {
		try {
			let objUser;

			if(sql) {

				if (newUser) {
					newUser.id = models.sequelize.objectId().toString();
					newUser.date_entered = new Date();
					newUser.date_modified = new Date();
					newUser.date_reviewed = new Date();
					let respUser = await models.sequelize.users.create(newUser);
					objUser = respUser.dataValues;
				}

				if (newUser.userUsersCstm) {
					newUser.userUsersCstm.id_c = newUser.id;
					let respUsersCstm = await models.sequelize.usersCstm.create(newUser.userUsersCstm);
					objUser.userUsersCstm = respUsersCstm.dataValues;
				}

				if (newUser.userSugarfeed) {
					newUser.userSugarfeed.id = models.sequelize.objectId().toString();
					newUser.userSugarfeed.related_id = newUser.id;
					newUser.userSugarfeed.date_entered = new Date();
					newUser.userSugarfeed.date_modified = new Date();
					let respSugarfeed = await models.sequelize.sugarfeed.create(newUser.userSugarfeed);
					objUser.userSugarfeed = respSugarfeed.dataValues;
				}

				if (newUser.userAodIndexevent) {
					newUser.userAodIndexevent.id = models.sequelize.objectId().toString();
					newUser.userAodIndexevent.record_id = newUser.id;
					newUser.userAodIndexevent.date_entered = new Date();
					newUser.userAodIndexevent.date_modified = new Date();
					let respAodIndexevent = await models.sequelize.aodIndexevent.create(newUser.userAodIndexevent);
					objUser.userAodIndexevent = respAodIndexevent.dataValues;
				}

				if (newUser.userTracker) {
					let max = await models.sequelize.tracker.max('id');
					newUser.userTracker.id = newUser.userTracker.id ? newUser.userTracker.id : max+1;
					newUser.userTracker.monitor_id = models.sequelize.objectId().toString();
					newUser.userTracker.item_id = newUser.id;
					newUser.userTracker.date_modified = new Date();
					let respTracker = await models.sequelize.tracker.create(newUser.userTracker);
					objUser.userTracker = respTracker.dataValues;
				}

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

				if (updateUser) {
					if (updateUser.id) {
						updateUser.date_modified = new Date();
						await models.sequelize.users.update(updateUser, {where:{id:id}});
						let respUser = await models.sequelize.users.findOne({where: { id: id }});
						objUser = respUser.dataValues;
					} else {
						let oldUser = await models.sequelize.users.findOne({where: { id: id }});
						if (oldUser && oldUser.dataValues) {
							oldUser = oldUser.dataValues;
							updateUser.date_modified = new Date();
							await models.sequelize.users.update(updateUser, {where:{id:oldUser.id}});
							let respUser = await models.sequelize.users.findOne({where: { id: oldUser.id }});
							objUser = respUser.dataValues;
						} else {
							let newUser = updateUser;
							newUser.id = models.sequelize.objectId().toString();
							newUser.date_entered = new Date();
							newUser.date_modified = new Date();
							newUser.date_reviewed = new Date();
							let respUser = await models.sequelize.users.create(newUser);
							objUser = respUser.dataValues;
						}
					}
				}

				if (updateUser.userUsersCstm) {
					if (updateUser.userUsersCstm.id_c) {
						await models.sequelize.usersCstm.update(updateUser.userUsersCstm, {where:{id_c:id}});
						let respUsersCstm = await models.sequelize.usersCstm.findOne({where: { id_c: id }});
						objUser.userUsersCstm = respUsersCstm.dataValues;
					} else {
						let oldUserUsersCstm = await models.sequelize.usersCstm.findOne({where: { id_c: id }});
						if (oldUserUsersCstm && oldUserUsersCstm.dataValues) {
							oldUserUsersCstm = oldUserUsersCstm.dataValues;
							await models.sequelize.usersCstm.update(updateUser.userUsersCstm, {where:{id_c:oldUserUsersCstm.id_c}});
							let respUsersCstm = await models.sequelize.usersCstm.findOne({where: { id_c: oldUserUsersCstm.id_c }});
							objUser.userUsersCstm = respUsersCstm.dataValues;
						} else {
							let newUser = updateUser;
							newUser.userUsersCstm.id_c = newUser.id;
							let respUsersCstm = await models.sequelize.usersCstm.create(newUser.userUsersCstm);
							objUser.userUsersCstm = respUsersCstm.dataValues;
						}
					}
				}

				if (updateUser.userSugarfeed) {
					if (updateUser.userSugarfeed.id) {
						updateUser.userSugarfeed.date_modified = new Date();
						await models.sequelize.sugarfeed.update(updateUser.userSugarfeed, {where:{related_id:id}});
						let respSugarfeed = await models.sequelize.sugarfeed.findOne({where: { related_id: id }});
						objUser.userSugarfeed = respSugarfeed.dataValues;
					} else {
						let oldUserSugarfeed = await models.sequelize.sugarfeed.findOne({where: { related_id: id }});
						if (oldUserSugarfeed && oldUserSugarfeed.dataValues) {
							oldUserSugarfeed = oldUserSugarfeed.dataValues;
							updateUser.userSugarfeed.date_modified = new Date();
							await models.sequelize.sugarfeed.update(updateUser.userSugarfeed, {where:{id:oldUserSugarfeed.id}});
							let respSugarfeed = await models.sequelize.sugarfeed.findOne({where: { id: oldUserSugarfeed.id }});
							objUser.userSugarfeed = respSugarfeed.dataValues;
						} else {
							let newUser = updateUser;
							newUser.userSugarfeed.id = models.sequelize.objectId().toString();
							newUser.userSugarfeed.related_id = newUser.id;
							newUser.userSugarfeed.date_entered = new Date();
							newUser.userSugarfeed.date_modified = new Date();
							let respSugarfeed = await models.sequelize.sugarfeed.create(newUser.userSugarfeed);
							objUser.userSugarfeed = respSugarfeed.dataValues;
						}
					}
				}

				if (updateUser.userAodIndexevent) {
					if (updateUser.userAodIndexevent.id) {
						updateUser.userAodIndexevent.date_modified = new Date();
						await models.sequelize.aodIndexevent.update(updateUser.userAodIndexevent, {where:{record_id:id}});
						let respAodIndexevent = await models.sequelize.aodIndexevent.findOne({where: { record_id: id }});
						objUser.userAodIndexevent = respAodIndexevent.dataValues;
					} else {
						let oldUserAodIndexevent = await models.sequelize.aodIndexevent.findOne({where: { record_id: id }});
						if (oldUserAodIndexevent && oldUserAodIndexevent.dataValues) {
							oldUserAodIndexevent = oldUserAodIndexevent.dataValues;
							updateUser.userAodIndexevent.date_modified = new Date();
							await models.sequelize.aodIndexevent.update(updateUser.userAodIndexevent, {where:{id:oldUserAodIndexevent.id}});
							let respAodIndexevent = await models.sequelize.aodIndexevent.findOne({where: { id: oldUserAodIndexevent.id }});
							objUser.userAodIndexevent = respAodIndexevent.dataValues;
						} else {
							let newUser = updateUser;
							newUser.userAodIndexevent.id = models.sequelize.objectId().toString();
							newUser.userAodIndexevent.record_id = newUser.id;
							newUser.userAodIndexevent.date_entered = new Date();
							newUser.userAodIndexevent.date_modified = new Date();
							let respAodIndexevent = await models.sequelize.aodIndexevent.create(newUser.userAodIndexevent);
							objUser.userAodIndexevent = respAodIndexevent.dataValues;
						}
					}
				}

				if (updateUser.userTracker) {
					if (updateUser.userTracker.id) {
						updateUser.userTracker.date_modified = new Date();
						await models.sequelize.tracker.update(updateUser.userTracker, {where:{item_id:id}});
						let respTracker = await models.sequelize.tracker.findOne({where: { item_id: id }});
						objUser.userTracker = respTracker.dataValues;
					} else {
						let oldUserTracker = await models.sequelize.tracker.findOne({where: { item_id: id }});
						if (oldUserTracker && oldUserTracker.dataValues) {
							oldUserTracker = oldUserTracker.dataValues;
							updateUser.userTracker.date_modified = new Date();
							await models.sequelize.tracker.update(updateUser.userTracker, {where:{id:oldUserTracker.id}});
							let respTracker = await models.sequelize.tracker.findOne({where: { id: oldUserTracker.id }});
							objUser.userTracker = respTracker.dataValues;
						} else {
							let newUser = updateUser;
							let max = await models.sequelize.tracker.max('id');
							newUser.userTracker.id = newUser.userTracker.id ? newUser.userTracker.id : max+1;
							newUser.userTracker.monitor_id = models.sequelize.objectId().toString();
							newUser.userTracker.item_id = newUser.id;
							newUser.userTracker.date_modified = new Date();
							let respTracker = await models.sequelize.tracker.create(newUser.userTracker);
							objUser.userTracker = respTracker.dataValues;
						}
					}
				}

			} else {
				objUser = new models.mongoose.users(updateUser);
				await objUser.save();
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

				let users = await models.sequelize.users.findOne({ where: { id: util.Char(id) } });
				if (users) await models.sequelize.users.destroy({where: { id: util.Char(id) }});

				let userUsersCstm = await models.sequelize.usersCstm.findOne({ where: { id_c: util.Char(id) } });
				if (userUsersCstm) await models.sequelize.usersCstm.destroy({where: { id_c: util.Char(id) }});

				let userSugarfeed = await models.sequelize.sugarfeed.findOne({ where: { related_id: util.Char(id) } });
				if (userSugarfeed) await models.sequelize.sugarfeed.destroy({where: { related_id: util.Char(id) }});

				let userAodIndexevent = await models.sequelize.aodIndexevent.findOne({ where: { record_id: util.Char(id) } });
				if (userAodIndexevent) await models.sequelize.aodIndexevent.destroy({where: { record_id: util.Char(id) }});

				let userTracker = await models.sequelize.tracker.findOne({ where: { item_id: util.Char(id) } });
				if (userTracker) await models.sequelize.tracker.destroy({where: { item_id: util.Char(id) }});

				objUser = users;
				objUser.userUsersCstm = userUsersCstm;
				objUser.userSugarfeed = userSugarfeed;
				objUser.userAodIndexevent = userAodIndexevent;
				objUser.userTracker = userTracker;

			} else {
				objUser = await models.mongoose.users.deleteOne({id:util.Char(id)});
			}
			return objUser;
		} catch (error) {
			throw error;
		}
	}


}

//<es-section>
module.exports = UserService;
//</es-section>
