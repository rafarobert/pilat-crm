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
class AosQuoteService {

	static async getAllAosQuotes(query) {
		try {
			if(sql) {
				let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
				let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
				return await models.sequelize.aosQuotes.findAll({
					attributes:query.select ? query.select.split(',') : null,
					where: where && !where.where ? where : null,
					limit: query.limit ? parseInt(query.limit) : null,
					offset: offset ? parseInt(offset) : 0,
					order: query.order ? JSON.parse(query.order) : [['id','DESC']],
					include: [
						{
							model:models.sequelize.aosQuotesCstm, as:'aoQuoteAosQuotesCstm',
							where: where ? where.where ? where.where.aoQuoteAosQuotesCstm ? where.where.aoQuoteAosQuotesCstm : null : null : null,
						},
					]
				});
			}
		} catch (error) {
			throw error;
		}
	}

	static async getAAosQuote(id, query) {
		try {
			if(sql) {
				return await models.sequelize.aosQuotes.findOne({
					attributes:query.select ? query.select.split(',') : null,
					where:{id:id},
					include: [
						{model:models.sequelize.aosQuotesCstm, as:'aoQuoteAosQuotesCstm'},
						{model:models.sequelize.aosQuotesAudit, as:'aoQuoteAosQuotesAudit'},
						{model:models.sequelize.sugarfeed, as:'aoQuoteSugarfeed'},
						{model:models.sequelize.aodIndexevent, as:'aoQuoteAodIndexevent'},
						{model:models.sequelize.tracker, as:'aoQuoteTracker'},
					]
				});
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAosQuote(newAosQuote) {
		try {
			let objAosQuote;

			if(sql) {

				if (newAosQuote){
					newAosQuote.id = models.sequelize.objectId().toString();
					newAosQuote.date_entered = new Date();
					newAosQuote.date_modified = new Date();
					newAosQuote.date_reviewed = new Date();
					let respAosQuote = await models.sequelize.aosQuotes.create(newAosQuote);
					objAosQuote = respAosQuote.dataValues;

					if (newAosQuote.aoQuoteAosQuotesCstm) {
						newAosQuote.aoQuoteAosQuotesCstm.id_c = newAosQuote.id;
						let respaoQuoteAosQuotesCstm = await models.sequelize.aosQuotesCstm.create(newAosQuote.aoQuoteAosQuotesCstm);
						objAosQuote.aoQuoteAosQuotesCstm = respaoQuoteAosQuotesCstm.dataValues;
					}

					if (newAosQuote.aoQuoteAosQuotesAudit) {
						newAosQuote.aoQuoteAosQuotesAudit = {};
						newAosQuote.aoQuoteAosQuotesAudit.id = models.sequelize.objectId().toString();
						newAosQuote.aoQuoteAosQuotesAudit.parent_id = newAosQuote.id;
						newAosQuote.aoQuoteAosQuotesAudit.date_created = new Date();
						let respaoQuoteAosQuotesAudit = await models.sequelize.aosQuotesAudit.create(newAosQuote.aoQuoteAosQuotesAudit);
						objAosQuote.aoQuoteAosQuotesAudit = respaoQuoteAosQuotesAudit.dataValues;
					}

					if (newAosQuote.aoQuoteSugarfeed) {
						newAosQuote.aoQuoteSugarfeed.id = models.sequelize.objectId().toString();
						newAosQuote.aoQuoteSugarfeed.related_id = newAosQuote.id;
						newAosQuote.aoQuoteSugarfeed.date_entered = new Date();
						newAosQuote.aoQuoteSugarfeed.date_modified = new Date();
						let respaoQuoteSugarfeed = await models.sequelize.sugarfeed.create(newAosQuote.aoQuoteSugarfeed);
						objAosQuote.aoQuoteSugarfeed = respaoQuoteSugarfeed.dataValues;
					}

					if (newAosQuote.aoQuoteAodIndexevent){
						newAosQuote.aoQuoteAodIndexevent = {};
						newAosQuote.aoQuoteAodIndexevent.id = models.sequelize.objectId().toString();
						newAosQuote.aoQuoteAodIndexevent.record_id = newAosQuote.id;
						newAosQuote.aoQuoteAodIndexevent.date_entered = new Date();
						newAosQuote.aoQuoteAodIndexevent.date_modified = new Date();
						let respaoQuoteAodIndexevent = await models.sequelize.aodIndexevent.create(newAosQuote.aoQuoteAodIndexevent);
						objAosQuote.aoQuoteAodIndexevent = respaoQuoteAodIndexevent.dataValues;
					}

					if (newAosQuote.aoQuoteTracker) {
						let max = await models.sequelize.tracker.max('id');
						newAosQuote.aoQuoteTracker.id = newAosQuote.aoQuoteTracker.id ? newAosQuote.aoQuoteTracker.id : max+1;
						newAosQuote.aoQuoteTracker.monitor_id = models.sequelize.objectId().toString();
						newAosQuote.aoQuoteTracker.item_id = newAosQuote.id;
						newAosQuote.aoQuoteTracker.date_modified = new Date();
						let respaoQuoteTracker = await models.sequelize.tracker.create(newAosQuote.aoQuoteTracker);
						objAosQuote.aoQuoteTracker = respaoQuoteTracker.dataValues;
					}
				}
			} else {
				objAosQuote = new models.mongoose.aosQuotes(newAosQuote);
				await objAosQuote.save();
			}
			return objAosQuote;
		} catch (error) {
			throw error;
		}
	}

	static async updateAosQuote(id, updateAosQuote) {
		try {
			let objAosQuote;

			if(sql) {

				if (updateAosQuote) {
					if (updateAosQuote.id) {
						updateAosQuote.date_modified = new Date();
						await models.sequelize.aosQuotes.update(updateAosQuote, {where:{id:id}});
						let respAosQuote = await models.sequelize.aosQuotes.findOne({where: { id: id }});
						objAosQuote = respAosQuote.dataValues;
					} else {
						let oldAosQuote = await models.sequelize.aosQuotes.findOne({id:id});
						if (oldAosQuote && oldAosQuote.dataValues) {
							oldAosQuote = oldAosQuote.dataValues;
							updateAosQuote.date_modified = new Date();
							await models.sequelize.aosQuotes.update(updateAosQuote, {where:{id:oldAosQuote.id}});
							let respAosQuote = await models.sequelize.aosQuotes.findOne({where: { id: oldAosQuote.id }});
							objAosQuote = respAosQuote.dataValues;
						} else {
							let newAosQuote = updateAosQuote;
							newAosQuote.id = models.sequelize.objectId().toString();
							newAosQuote.date_entered = new Date();
							newAosQuote.date_modified = new Date();
							newAosQuote.date_reviewed = new Date();
							let respAosQuote = await models.sequelize.aosQuotes.create(newAosQuote);
							objAosQuote = respAosQuote.dataValues;
						}
					}

					if (updateAosQuote.aoQuoteAosQuotesCstm) {
						if (updateAosQuote.aoQuoteAosQuotesCstm.id_c) {
							await models.sequelize.aosQuotesCstm.update(updateAosQuote.aoQuoteAosQuotesCstm, {where:{id_c:id}});
							let respaoQuoteAosQuotesCstm = await models.sequelize.aosQuotesCstm.findOne({where: { id_c: id }});
							objAosQuote.aoQuoteAosQuotesCstm = respaoQuoteAosQuotesCstm.dataValues;
						} else {
							let oldAoQuoteAosQuotesCstm = await models.sequelize.aosQuotesCstm.findOne({where:{id_c:id}});
							if (oldAoQuoteAosQuotesCstm && oldAoQuoteAosQuotesCstm.dataValues) {
								oldAoQuoteAosQuotesCstm = oldAoQuoteAosQuotesCstm.dataValues;
								await models.sequelize.aosQuotesCstm.update(updateAosQuote.aoQuoteAosQuotesCstm, {where:{id_c:oldAoQuoteAosQuotesCstm.id_c}});
								let respaoQuoteAosQuotesCstm = await models.sequelize.aosQuotesCstm.findOne({where: { id_c:oldAoQuoteAosQuotesCstm.id_c }});
								objAosQuote.aoQuoteAosQuotesCstm = respaoQuoteAosQuotesCstm.dataValues;
							} else {
								let newAosQuote = updateAosQuote;
								newAosQuote.aoQuoteAosQuotesCstm.id_c = newAosQuote.id;
								let respaoQuoteAosQuotesCstm = await models.sequelize.aosQuotesCstm.create(newAosQuote.aoQuoteAosQuotesCstm);
								objAosQuote.aoQuoteAosQuotesCstm = respaoQuoteAosQuotesCstm.dataValues;
							}
						}
					}

					if (updateAosQuote.aoQuoteSugarfeed) {
						if (updateAosQuote.aoQuoteSugarfeed.id) {
							updateAosQuote.aoQuoteSugarfeed.date_modified = new Date();
							await models.sequelize.sugarfeed.update(updateAosQuote.aoQuoteSugarfeed, {where:{related_id:id}});
							let respaoQuoteSugarfeed = await models.sequelize.sugarfeed.findOne({where: { related_id: id }});
							objAosQuote.aoQuoteSugarfeed = respaoQuoteSugarfeed.dataValues;
						} else {
							let oldAoQuoteSugarfeed = await models.sequelize.sugarfeed.findOne({where:{related_id:id}});
							if (oldAoQuoteSugarfeed && oldAoQuoteSugarfeed.dataValues) {
								oldAoQuoteSugarfeed = oldAoQuoteSugarfeed.dataValues;
								updateAosQuote.aoQuoteSugarfeed.date_modified = new Date();
								await models.sequelize.sugarfeed.update(updateAosQuote.aoQuoteSugarfeed, {where:{id:oldAoQuoteSugarfeed.id}});
								let respaoQuoteSugarfeed = await models.sequelize.sugarfeed.findOne({where: { id: oldAoQuoteSugarfeed.id }});
								objAosQuote.aoQuoteSugarfeed = respaoQuoteSugarfeed.dataValues;
							} else {
								let newAosQuote = updateAosQuote;
								newAosQuote.aoQuoteSugarfeed.id = models.sequelize.objectId().toString();
								newAosQuote.aoQuoteSugarfeed.related_id = newAosQuote.id;
								newAosQuote.aoQuoteSugarfeed.date_entered = new Date();
								newAosQuote.aoQuoteSugarfeed.date_modified = new Date();
								let respaoQuoteSugarfeed = await models.sequelize.sugarfeed.create(newAosQuote.aoQuoteSugarfeed);
								objAosQuote.aoQuoteSugarfeed = respaoQuoteSugarfeed.dataValues;
							}
						}
					}

					if (updateAosQuote.aoQuoteAodIndexevent) {
						if (updateAosQuote.aoQuoteAodIndexevent.id) {
							updateAosQuote.aoQuoteAodIndexevent.date_modified = new Date();
							await models.sequelize.aodIndexevent.update(updateAosQuote.aoQuoteAodIndexevent, {where:{record_id:id}});
							let respaoQuoteAodIndexevent = await models.sequelize.aodIndexevent.findOne({where: { record_id: id }});
							objAosQuote.aoQuoteAodIndexevent = respaoQuoteAodIndexevent.dataValues;
						} else {
							let newAosQuote = updateAosQuote;
							let oldAoQuoteAodIndexevent = await models.sequelize.aodIndexevent.findOne({record_id:id});
							if (oldAoQuoteAodIndexevent && oldAoQuoteAodIndexevent.dataValues) {
								oldAoQuoteAodIndexevent = oldAoQuoteAodIndexevent.dataValues;
								updateAosQuote.aoQuoteAodIndexevent.date_modified = new Date();
								await models.sequelize.aodIndexevent.update(updateAosQuote.aoQuoteAodIndexevent, {where:{id:oldAoQuoteAodIndexevent.id}});
								let respaoQuoteAodIndexevent = await models.sequelize.aodIndexevent.findOne({where: { id: oldAoQuoteAodIndexevent.id }});
								objAosQuote.aoQuoteAodIndexevent = respaoQuoteAodIndexevent.dataValues;
							} else {
								newAosQuote.aoQuoteAodIndexevent = {};
								newAosQuote.aoQuoteAodIndexevent.id = models.sequelize.objectId().toString();
								newAosQuote.aoQuoteAodIndexevent.record_id = newAosQuote.id;
								newAosQuote.aoQuoteAodIndexevent.date_entered = new Date();
								newAosQuote.aoQuoteAodIndexevent.date_modified = new Date();
								let respaoQuoteAodIndexevent = await models.sequelize.aodIndexevent.create(newAosQuote.aoQuoteAodIndexevent);
								objAosQuote.aoQuoteAodIndexevent = respaoQuoteAodIndexevent.dataValues;
							}
						}
					}

					if (updateAosQuote.aoQuoteTracker) {
						if (updateAosQuote.aoQuoteTracker.id) {
							updateAosQuote.aoQuoteTracker.date_modified = new Date();
							await models.sequelize.tracker.update(updateAosQuote.aoQuoteTracker, {where:{item_id:id}});
							let respaoQuoteTracker = await models.sequelize.tracker.findOne({where: { item_id: id }});
							objAosQuote.aoQuoteTracker = respaoQuoteTracker.dataValues;
						} else {
							let oldAoQuoteTracker = await models.sequelize.tracker.findOne({item_id:id});
							if (oldAoQuoteTracker && oldAoQuoteTracker.dataValues) {
								oldAoQuoteTracker = oldAoQuoteTracker.dataValues;
								updateAosQuote.aoQuoteTracker.date_modified = new Date();
								await models.sequelize.tracker.update(updateAosQuote.aoQuoteTracker, {where:{id:oldAoQuoteTracker.id}});
								let respaoQuoteTracker = await models.sequelize.tracker.findOne({where: { id: oldAoQuoteTracker.id }});
								objAosQuote.aoQuoteTracker = respaoQuoteTracker.dataValues;
							} else {
								let newAosQuote = updateAosQuote;
								let max = await models.sequelize.tracker.max('id');
								newAosQuote.aoQuoteTracker.id = newAosQuote.aoQuoteTracker.id ? newAosQuote.aoQuoteTracker.id : max+1;
								newAosQuote.aoQuoteTracker.monitor_id = models.sequelize.objectId().toString();
								newAosQuote.aoQuoteTracker.item_id = newAosQuote.id;
								newAosQuote.aoQuoteTracker.date_modified = new Date();
								let respaoQuoteTracker = await models.sequelize.tracker.create(newAosQuote.aoQuoteTracker);
								objAosQuote.aoQuoteTracker = respaoQuoteTracker.dataValues;
							}
						}
					}


						if (updateAosQuote.aoQuoteAosQuotesAudit) {
							if (updateAosQuote.aoQuoteAosQuotesAudit.id) {
								await models.sequelize.aosQuotesAudit.update(updateAosQuote.aoQuoteAosQuotesAudit, {where:{id:updateAosQuote.aoQuoteAosQuotesAudit.id}});
								let respaoQuoteAosQuotesAudit = await models.sequelize.aosQuotesAudit.findOne({where: { id:updateAosQuote.aoQuoteAosQuotesAudit.id }});
								objAosQuote.aoQuoteAosQuotesAudit = respaoQuoteAosQuotesAudit.dataValues;
							} else {
								let oldAoQuoteAosQuotesAudit = await models.sequelize.aosQuotesAudit.findOne({where:{parent_id:id}});
								if (oldAoQuoteAosQuotesAudit && oldAoQuoteAosQuotesAudit.dataValues) {
									oldAoQuoteAosQuotesAudit = oldAoQuoteAosQuotesAudit.dataValues;
									await models.sequelize.aosQuotesAudit.update(updateAosQuote.aoQuoteAosQuotesAudit, {where:{id:oldAoQuoteAosQuotesAudit.id}});
									let respaoQuoteAosQuotesAudit = await models.sequelize.aosQuotesAudit.findOne({where: { id:oldAoQuoteAosQuotesAudit.id }});
									objAosQuote.aoQuoteAosQuotesAudit = respaoQuoteAosQuotesAudit.dataValues;
								} else {
									let newAosQuote = updateAosQuote;
									newAosQuote.aoQuoteAosQuotesAudit = {};
									newAosQuote.aoQuoteAosQuotesAudit.id = models.sequelize.objectId().toString();
									newAosQuote.aoQuoteAosQuotesAudit.parent_id = newAosQuote.id;
									newAosQuote.aoQuoteAosQuotesAudit.date_created = new Date();
									let respaoQuoteAosQuotesAudit = await models.sequelize.aosQuotesAudit.create(newAosQuote.aoQuoteAosQuotesAudit);
									objAosQuote.aoQuoteAosQuotesAudit = respaoQuoteAosQuotesAudit.dataValues;
								}
							}
						}
				}
			} else {
				objAosQuote = new models.mongoose.aosQuotes(updateAosQuote);
				await objAosQuote.save();
			}
			return objAosQuote;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAosQuote(id) {
		try {

			let objAosQuote;

			if(sql) {

				let aosQuotes = await models.sequelize.aosQuotes.findOne({ where: { id: util.Char(id) } });
				if (aosQuotes) await models.sequelize.aosQuotes.destroy({where: { id: util.Char(id) }});

				let aoQuoteAosQuotesCstm = await models.sequelize.aosQuotesCstm.findOne({ where: { id_c: util.Char(id) } });
				if (aoQuoteAosQuotesCstm) await models.sequelize.aosQuotesCstm.destroy({where: { id_c: util.Char(id) }});

				let aoQuoteAosQuotesAudit = await models.sequelize.aosQuotesAudit.findOne({ where: { parent_id: util.Char(id) } });
				if (aoQuoteAosQuotesAudit) await models.sequelize.aosQuotesAudit.destroy({where: { parent_id: util.Char(id) }});

				let aoQuoteSugarfeed = await models.sequelize.sugarfeed.findOne({ where: { related_id: util.Char(id) } });
				if (aoQuoteSugarfeed) await models.sequelize.sugarfeed.destroy({where: { related_id: util.Char(id) }});

				let aoQuoteAodIndexevent = await models.sequelize.aodIndexevent.findOne({ where: { record_id: util.Char(id) } });
				if (aoQuoteAodIndexevent) await models.sequelize.aodIndexevent.destroy({where: { record_id: util.Char(id) }});

				let aoQuoteTracker = await models.sequelize.tracker.findOne({ where: { item_id: util.Char(id) } });
				if (aoQuoteTracker) await models.sequelize.tracker.destroy({where: { item_id: util.Char(id) }});

				objAosQuote = aosQuotes;
				objAosQuote.aoQuoteAosQuotesCstm = aoQuoteAosQuotesCstm;
				objAosQuote.aoQuoteAosQuotesAudit = aoQuoteAosQuotesAudit;
				objAosQuote.aoQuoteSugarfeed = aoQuoteSugarfeed;
				objAosQuote.aoQuoteAodIndexevent = aoQuoteAodIndexevent;
				objAosQuote.aoQuoteTracker = aoQuoteTracker;

			} else {
				objAosQuote = await models.mongoose.aosQuotes.deleteOne({id:util.Char(id)});
			}
			return objAosQuote;
		} catch (error) {
			throw error;
		}
	}


}

//<es-section>
module.exports = AosQuoteService;
//</es-section>
