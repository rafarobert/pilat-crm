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
class CallService {

	static async getAllCalls(query) {
		try {
			if(sql) {
				let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
				let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
				return await models.sequelize.calls.findAndCountAll({
					attributes:query.select ? query.select.split(',') : null,
					where: where && !where.where ? where : null,
					limit: query.limit ? parseInt(query.limit) : null,
					offset: offset ? parseInt(offset) : 0,
					order: query.order ? JSON.parse(query.order) : [['id','DESC']],
					include: [
						{
							model:models.sequelize.callsCstm, as: 'callCallsCstm',
							where: where ? where.where ? where.where.callCallsCstm ? where.where.callCallsCstm : null : null : null,

						},
					]
				});
			}
		} catch (error) {
			throw error;
		}
	}

	static async getACall(id, query) {
		try {
			if(sql) {
				return await models.sequelize.calls.findOne({
					attributes:query.select ? query.select.split(',') : null,
					where:{id:id},
					include: [
						{model:models.sequelize.callsCstm, as: 'callCallsCstm'},
						{model:models.sequelize.callsContacts, as: 'callCallsContacts'},
						{model:models.sequelize.callsLeads, as: 'callCallsLeads'},
						{model:models.sequelize.sugarfeed, as: 'callSugarfeed'},
						{model:models.sequelize.aodIndexevent, as: 'callAodIndexevent'},
						{model:models.sequelize.tracker, as: 'callTracker'},
					]
				});
			}
		} catch (error) {
			throw error;
		}
	}

	static async addCall(newCall) {
		try {
			let objCall;
			if(sql) {

				if (newCall) {
					newCall.id = models.sequelize.objectId().toString();
					newCall.date_entered = new Date();
					newCall.date_modified = new Date();
					newCall.date_reviewed = new Date();
					let respCall = await models.sequelize.calls.create(newCall);
					objCall = respCall.dataValues;

					if (newCall.callCallsCstm) {
						newCall.callCallsCstm.id_c = newCall.id;
						let respCallsCstm = await models.sequelize.callsCstm.create(newCall.callCallsCstm);
						objCall.callCallsCstm = respCallsCstm.dataValues;
					}

					if (newCall.callCallsContacts) {
						newCall.callCallsContacts.id = models.sequelize.objectId().toString();
						newCall.callCallsContacts.call_id = newCall.id;
						newCall.callCallsContacts.date_modified = new Date();
						let respCallsContacts = await models.sequelize.callsContacts.create(newCall.callCallsContacts);
						objCall.callCallsContacts = respCallsContacts.dataValues
					}

					if (newCall.callCallsLeads) {
						newCall.callCallsLeads.id = models.sequelize.objectId().toString();
						newCall.callCallsLeads.call_id = newCall.id;
						newCall.callCallsLeads.date_modified = new Date();
						let respCallsLeads = await models.sequelize.callsLeads.create(newCall.callCallsLeads);
						objCall.callCallsLeads = respCallsLeads.dataValues;
					}

					if (newCall.callSugarfeed) {
						newCall.callSugarfeed.id = models.sequelize.objectId().toString();
						newCall.callSugarfeed.related_id = newCall.id;
						newCall.callSugarfeed.date_entered = new Date();
						newCall.callSugarfeed.date_modified = new Date();
						let respSugarfeed = await models.sequelize.sugarfeed.create(newCall.callSugarfeed);
						objCall.callSugarfeed = respSugarfeed.dataValues;
					}

					if (newCall.callAodIndexevent) {
						newCall.callAodIndexevent.id = models.sequelize.objectId().toString();
						newCall.callAodIndexevent.record_id = newCall.id;
						newCall.callAodIndexevent.date_entered = new Date();
						newCall.callAodIndexevent.date_modified = new Date();
						let respAodIndexevent = await models.sequelize.aodIndexevent.create(newCall.callAodIndexevent);
						objCall.callAodIndexevent = respAodIndexevent.dataValues;
					}

					if (newCall.callTracker) {
						let max = await models.sequelize.tracker.max('id');
						newCall.callTracker.id = newCall.callTracker.id ? newCall.callTracker.id : max+1;
						newCall.callTracker.monitor_id = models.sequelize.objectId().toString();
						newCall.callTracker.item_id = newCall.id;
						newCall.callTracker.date_modified = new Date();
						let respTracker = await models.sequelize.tracker.create(newCall.callTracker);
						objCall.callTracker = respTracker.dataValues;
					}
				}
			} else {
				objCall = new models.mongoose.calls(newCall);
				await objCall.save();
			}
			return objCall;
		} catch (error) {
			throw error;
		}
	}

	static async updateCall(id, updateCall) {
		try {
			let objCall;

			if(sql) {

				if (updateCall) {
					if (updateCall.id) {
						updateCall.date_modified = new Date();
						await models.sequelize.calls.update(updateCall, {where:{id:id}});
						let respCall = await models.sequelize.calls.findOne({where: { id: id }});
						objCall = respCall.dataValues;
					} else {
						let oldCall = await models.sequelize.calls.findOne({where:{id:id}});
						if (oldCall && oldCall.dataValues) {
							oldCall = oldCall.dataValues;
							updateCall.date_modified = new Date();
							await models.sequelize.calls.update(updateCall, {where:{id:oldCall.id}});
							let respCall = await models.sequelize.calls.findOne({where: { id: oldCall.id }});
							objCall = respCall.dataValues;
						} else {
							let newCall = updateCall;
							newCall.id = models.sequelize.objectId().toString();
							newCall.date_entered = new Date();
							newCall.date_modified = new Date();
							newCall.date_reviewed = new Date();
							let respCall = await models.sequelize.calls.create(newCall);
							objCall = respCall.dataValues;
						}
					}

					if (updateCall.callCallsCstm) {
						if (updateCall.callCallsCstm.id_c) {
							await models.sequelize.callsCstm.update(updateCall.callCallsCstm, {where:{id_c:id}});
							let respCallsCstm = await models.sequelize.callsCstm.findOne({where: { id_c: id }});
							objCall.callCallsCstm = respCallsCstm.dataValues;
						} else {
							let oldCallCallsCstm = await models.sequelize.callsCstm.findOne({where:{id_c:id}});
							if (oldCallCallsCstm && oldCallCallsCstm.dataValues) {
								oldCallCallsCstm = oldCallCallsCstm.dataValues;
								await models.sequelize.callsCstm.update(updateCall.callCallsCstm, {where:{id_c:oldCallCallsCstm.id_c}});
								let respCallsCstm = await models.sequelize.callsCstm.findOne({where: { id_c: oldCallCallsCstm.id_c }});
								objCall.callCallsCstm = respCallsCstm.dataValues;
							} else {
								let newCall = updateCall;
								newCall.callCallsCstm.id_c = newCall.id;
								let respCallsCstm = await models.sequelize.callsCstm.create(newCall.callCallsCstm);
								objCall.callCallsCstm = respCallsCstm.dataValues;
							}
						}
					}

					if (updateCall.callCallsLeads) {
						if (updateCall.callCallsLeads.id) {
							updateCall.callCallsLeads.date_modified = new Date();
							await models.sequelize.callsLeads.update(updateCall.callCallsLeads, {where:{call_id:id}});
							let respCallsLeads = await models.sequelize.callsLeads.findOne({where: { call_id: id }});
							objCall.callCallsLeads = respCallsLeads.dataValues;
						} else {
							let oldCallCallsLeads = await models.sequelize.callsLeads.findOne({where:{call_id:id}});
							if (oldCallCallsLeads && oldCallCallsLeads.dataValues) {
								oldCallCallsLeads = oldCallCallsLeads.dataValues;
								updateCall.callCallsLeads.date_modified = new Date();
								await models.sequelize.callsLeads.update(updateCall.callCallsLeads, {where:{id:oldCallCallsLeads.id}});
								let respCallsLeads = await models.sequelize.callsLeads.findOne({where: { id: oldCallCallsLeads.id }});
								objCall.callCallsLeads = respCallsLeads.dataValues;
							} else {
								let newCall = updateCall;
								newCall.callCallsLeads.id = models.sequelize.objectId().toString();
								newCall.callCallsLeads.call_id = newCall.id;
								newCall.callCallsLeads.date_modified = new Date();
								let respCallsLeads = await models.sequelize.callsLeads.create(newCall.callCallsLeads);
								objCall.callCallsLeads = respCallsLeads.dataValues;
							}
						}
					}

					if (updateCall.callCallsContacts) {
						if (updateCall.callCallsContacts.id) {
							updateCall.callCallsContacts.date_modified = new Date();
							await models.sequelize.callsContacts.update(updateCall.callCallsContacts, {where:{call_id:id}});
							let respCallsContacts = await models.sequelize.callsContacts.findOne({where: { call_id: id }});
							objCall.callCallsContacts = respCallsContacts.dataValues;
						} else {
							let oldCallCallsContacts = await models.sequelize.callsContacts.findOne({where:{call_id:id}});
							if (oldCallCallsContacts && oldCallCallsContacts.dataValues) {
								oldCallCallsContacts = oldCallCallsContacts.dataValues;
								updateCall.callCallsContacts.date_modified = new Date();
								await models.sequelize.callsContacts.update(updateCall.callCallsContacts, {where:{id:oldCallCallsContacts.id}});
								let respCallsContacts = await models.sequelize.callsContacts.findOne({where: { id: oldCallCallsContacts.id }});
								objCall.callCallsContacts = respCallsContacts.dataValues;
							} else {
								let newCall = updateCall;
								newCall.callCallsContacts.id = models.sequelize.objectId().toString();
								newCall.callCallsContacts.call_id = newCall.id;
								newCall.callCallsContacts.date_modified = new Date();
								let respCallsContacts = await models.sequelize.callsContacts.create(newCall.callCallsContacts);
								objCall.callCallsContacts = respCallsContacts.dataValues
							}
						}
					}

					if (updateCall.callSugarfeed) {
						if (updateCall.callSugarfeed.id) {
							updateCall.callSugarfeed.date_modified = new Date();
							await models.sequelize.sugarfeed.update(updateCall.callSugarfeed, {where:{related_id:id}});
							let respSugarfeed = await models.sequelize.sugarfeed.findOne({where: { related_id: id }});
							objCall.callSugarfeed = respSugarfeed.dataValues;
						} else {
							let oldCallSugarfeed = await models.sequelize.sugarfeed.findOne({where:{related_id:id}});
							if (oldCallSugarfeed && oldCallSugarfeed.dataValues) {
								oldCallSugarfeed = oldCallSugarfeed.dataValues;
								updateCall.callSugarfeed.date_modified = new Date();
								await models.sequelize.sugarfeed.update(updateCall.callSugarfeed, {where:{id:oldCallSugarfeed.id}});
								let respSugarfeed = await models.sequelize.sugarfeed.findOne({where: { id: oldCallSugarfeed.id }});
								objCall.callSugarfeed = respSugarfeed.dataValues;
							} else {
								let newCall = updateCall;
								newCall.callSugarfeed.id = models.sequelize.objectId().toString();
								newCall.callSugarfeed.related_id = newCall.id;
								newCall.callSugarfeed.date_entered = new Date();
								newCall.callSugarfeed.date_modified = new Date();
								let respSugarfeed = await models.sequelize.sugarfeed.create(newCall.callSugarfeed);
								objCall.callSugarfeed = respSugarfeed.dataValues;
							}
						}
					}

					if (updateCall.callAodIndexevent) {
						if (updateCall.callAodIndexevent.id) {
							updateCall.callAodIndexevent.date_modified = new Date();
							await models.sequelize.aodIndexevent.update(updateCall.callAodIndexevent, {where:{record_id:id}});
							let respAodIndexevent = await models.sequelize.aodIndexevent.findOne({where: { record_id: id }});
							objCall.callAodIndexevent = respAodIndexevent.dataValues;
						} else {
							let oldCallAodIndexevent = await models.sequelize.aodIndexevent.findOne({where:{record_id:id}});
							if (oldCallAodIndexevent && oldCallAodIndexevent.dataValues) {
								oldCallAodIndexevent = oldCallAodIndexevent.dataValues;
								updateCall.callAodIndexevent.date_modified = new Date();
								await models.sequelize.aodIndexevent.update(updateCall.callAodIndexevent, {where:{id:oldCallAodIndexevent.id}});
								let respAodIndexevent = await models.sequelize.aodIndexevent.findOne({where: { id: oldCallAodIndexevent.id }});
								objCall.callAodIndexevent = respAodIndexevent.dataValues;
							} else {
								let newCall = updateCall;
								newCall.callAodIndexevent.id = models.sequelize.objectId().toString();
								newCall.callAodIndexevent.record_id = newCall.id;
								newCall.callAodIndexevent.date_entered = new Date();
								newCall.callAodIndexevent.date_modified = new Date();
								let respAodIndexevent = await models.sequelize.aodIndexevent.create(newCall.callAodIndexevent);
								objCall.callAodIndexevent = respAodIndexevent.dataValues;
							}
						}
					}

					if (updateCall.callTracker) {
						if (updateCall.callTracker.id) {
							updateCall.callTracker.date_modified = new Date();
							await models.sequelize.tracker.update(updateCall.callTracker, {where:{item_id:id}});
							let respTracker = await models.sequelize.tracker.findOne({where: { item_id: id }});
							objCall.callTracker = respTracker.dataValues;
						} else {
							let oldCallTracker = await models.sequelize.tracker.findOne({where:{item_id:id}});
							if (oldCallTracker && oldCallTracker.dataValues) {
								oldCallTracker = oldCallTracker.dataValues;
								updateCall.callTracker.date_modified = new Date();
								await models.sequelize.tracker.update(updateCall.callTracker, {where:{id:oldCallTracker.id}});
								let respTracker = await models.sequelize.tracker.findOne({where: { id: oldCallTracker.id }});
								objCall.callTracker = respTracker.dataValues;
							} else {
								let newCall = updateCall;
								let max = await models.sequelize.tracker.max('id');
								newCall.callTracker.id = newCall.callTracker.id ? newCall.callTracker.id : max+1;
								newCall.callTracker.monitor_id = models.sequelize.objectId().toString();
								newCall.callTracker.item_id = newCall.id;
								newCall.callTracker.date_modified = new Date();
								let respTracker = await models.sequelize.tracker.create(newCall.callTracker);
								objCall.callTracker = respTracker.dataValues;
							}
						}
					}
				}
			} else {
				objCall = new models.mongoose.calls(updateCall);
				await objCall.save();
			}
			return objCall;
		} catch (error) {
			throw error;
		}
	}

	static async deleteCall(id) {
		try {

			let objCall;

			if(sql) {

				let calls = await models.sequelize.calls.findOne({ where: { id: util.Char(id) } });
				if (calls) await models.sequelize.calls.destroy({where: { id: util.Char(id) }});

				let callCallsCstm = await models.sequelize.callsCstm.findOne({ where: { id_c: util.Char(id) } });
				if (callCallsCstm) await models.sequelize.callsCstm.destroy({where: { id_c: util.Char(id) }});

				let callCallsLeads = await models.sequelize.callsLeads.findOne({ where: { call_id: util.Char(id) } });
				if (callCallsLeads) await models.sequelize.callsLeads.destroy({where: { call_id: util.Char(id) }});

				let callCallsContacts = await models.sequelize.callsContacts.findOne({ where: { call_id: util.Char(id) } });
				if (callCallsContacts) await models.sequelize.callsContacts.destroy({where: { call_id: util.Char(id) }});

				let callSugarfeed = await models.sequelize.sugarfeed.findOne({ where: { related_id: util.Char(id) } });
				if (callSugarfeed) await models.sequelize.sugarfeed.destroy({where: { related_id: util.Char(id) }});

				let callAodIndexevent = await models.sequelize.aodIndexevent.findOne({ where: { record_id: util.Char(id) } });
				if (callAodIndexevent) await models.sequelize.aodIndexevent.destroy({where: { record_id: util.Char(id) }});

				let callTracker = await models.sequelize.tracker.findOne({ where: { item_id: util.Char(id) } });
				if (callTracker) await models.sequelize.tracker.destroy({where: { item_id: util.Char(id) }});

				objCall = calls;
				objCall.callCallsCstm = callCallsCstm;
				objCall.callCallsLeads = callCallsLeads;
				objCall.callCallsContacts = callCallsContacts;
				objCall.callSugarfeed = callSugarfeed;
				objCall.callAodIndexevent = callAodIndexevent;
				objCall.callTracker = callTracker;

			} else {
				objCall = await models.mongoose.calls.deleteOne({id:util.Char(id)});
			}
			return objCall;
		} catch (error) {
			throw error;
		}
	}


}

//<es-section>
module.exports = CallService;
//</es-section>
