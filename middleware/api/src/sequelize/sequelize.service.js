require('../../../utils/Prototipes');
const helpers = require('../../../utils/helpers');
const models = require('../../../core/express');
const sql = process.env.SQL;
const { Op } = require("sequelize");
const fs = require('fs');
const path = require('path');

class SequelizeService {

	static async getAllSequelizeMetas(query = {}) {
		try {
			if(sql) {
				return await models.sequelize.sequelizeMetas.findAll({attributes: ['name']});
			} else {
				return await models.mongoose.sequelizeMetas.find().limit(parseInt(query.limit)).skip(parseInt(query.start));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getASequelizeMeta(name) {
		try {
			let sequelizeMeta;
			if(sql) {
				sequelizeMeta = await models.sequelize.sequelizeMetas.findOne({where: { name: name }});
			} else {
				sequelizeMeta = await models.mongoose.sequelizeMetas.find({name: name});
			}
			return sequelizeMeta;
		} catch (error) {
			throw error;
		}
	}

	// Actualización mediante uso de git hooks post-receive
	
	static async sequelizeExport(name = '') {
		try {
			let tables = Object.keys(models.sequelize);
			let aData = [];
			for (let i = 0 ; i < tables.length ; i++) {
				let table = tables[i];
				if(typeof models.sequelize[table].findAll == 'function' ) {
					let tableContents, databaseName;
					databaseName = models.sequelize.getDatabaseName();
					if(table == 'sequelizeMetas') {
						tableContents = await models.sequelize.sequelizeMetas.findAll({attributes: ['name']});
					} else {
						tableContents = await models.sequelize[table].findAll();
					}
					if (tableContents.length) {
						aData = [];
						for (let j = 0 ; j < tableContents.length ; j++) {
							let tableContent = tableContents[j];
							//tableContent.dataValues._id =  {"$oid":tableContent.dataValues._id};
							aData.push(tableContent.dataValues);
						}
						let dir = path.join(__dirname, `../../../../export/sequelize/`);

						if (!fs.existsSync(dir)) {
							fs.mkdirSync(dir);
						}
						fs.writeFileSync(`${dir}${databaseName}_${table}.json`, JSON.stringify(aData), async (err) => {
							if (err) return console.log(err);
							console.log('written: ' + file);
						});
					}
				}
			}
			return aData;
		} catch (error) {
			throw error;
		}
	}

	static async sequelizeImport(query = {}, name) {
		try {
			let responses = [];
			let tables = Object.keys(models.sequelize);
			let dirMigration = path.join(__dirname, `../../../../migrations`);
			let esMigrationFiles = await fs.readdirSync(dirMigration, async (err) => {
				if (err) return console.log(err);
				console.log('readDir: ' + dir);
			});
			let tablesOrdered = [];
			if(esMigrationFiles.length) {
				for (let i = 0 ; i < tables.length ; i++) {
					let table = tables[i];
					if(table != 'sequelizeMetas' && models.sequelize[table].tableName ) {
						let tableOrder = esMigrationFiles.find(param => param.includes(models.sequelize[table].tableName.setDash()));
						if(tableOrder) {
							let tableOrderParts = tableOrder.split('-');
							let tableOrderIndex = parseInt(tableOrderParts[0]);
							tablesOrdered[tableOrderIndex] = table;
						}
					}
				}
			}

			for (let i = 1 ; i <= tablesOrdered.length ; i++) {
				let tableOrdered = tablesOrdered[i], from, response = [], tableName = '';
				if(tableOrdered) {
					if(tableOrdered != 'sequelizeMetas') {
						if(typeof models.sequelize[tableOrdered].findAll == 'function' ) {
							tableName = models.sequelize[tableOrdered].tableName;
							let aDataTable = await models.sequelize[tableOrdered].findAll();
							let aData = [];
							for (let j = 0 ; j < aDataTable.length ; j++) {
								let dataTable = aDataTable[j];
								aData.push(dataTable.dataValues);
							}
							if(aData.length) {
								let dir;
								if (query.from) {
									from = query.from;
									if ( from == 'mongoose') {
										dir = path.join(__dirname, `../../../../export/mongoose/`);
									} else if ( from == 'sequelize') {
										dir = path.join(__dirname, `../../../../export/sequelize/`);
									}
								} else {
									from = 'sequelize';
									dir = path.join(__dirname, `../../../../export/sequelize/`);
								}
								let esTableFiles = await fs.readdirSync(dir, async (err) => {
									if (err) return console.log(err);
									console.log('readDir: ' + dir);
								});
								if(esTableFiles.length) {
									let database = models.sequelize.getDatabaseName();
									let esTableFile = esTableFiles.find(param => param == `${database}_${tableOrdered}.json`);
									let tableFile = await fs.readFileSync(dir + esTableFile, async (err) => {
										if (err) return console.log(err);
										console.log('read: ' + esTableFile);
									});
									let tableFileStr = tableFile.toString();
									if(tableFileStr) {
										let aDataTableFile = tableFileStr.jsonParse();
										for (let l = 0 ; l < aDataTableFile.length ; l++) {
											let dataTableFile = aDataTableFile[l];
											let resp, mode;
											if (from) {
												if ( from == 'mongoose') {
													let dataTableFileValues = Object.values(dataTableFile);
													let dataTableFileKeys = Object.keys(dataTableFile);
													for (let m = 0 ; m < dataTableFileValues.length ; m++) {
														let dataTableFileValue = dataTableFileValues[m];
														if(dataTableFileValue != null && typeof dataTableFileValue == 'object') {
															dataTableFile[dataTableFileKeys[m]] = dataTableFileValue.$oid;
														}
													}
												}
											}
											if(aData.length != aDataTableFile.length) {
												for (let n = 0 ; n < aData.length ; n++) {
													let data = aData[n];
													let found = aDataTableFile.find(param => param._id == data._id.toString())
													if(!found) {
														let toBeDeleted = await models.sequelize[tableOrdered].findOne({ where: { _id: data._id.toString() } });
														if (toBeDeleted) {
															resp = await models.sequelize[tableOrdered].destroy({where: { _id: data._id.toString() }});
														}
														mode = 'deleted';
														response.push({_id: data._id, mode: mode, resp: resp});
													}
												}
											}
											if(aData.find(param => param._id == dataTableFile._id)) {
												resp = await models.sequelize[tableOrdered].update(dataTableFile, { where: { _id: dataTableFile._id } });
												mode = 'updated';
											} else {
												resp = await models.sequelize[tableOrdered].create(dataTableFile);
												mode = 'created';
											}
											response.push({_id: dataTableFile._id, mode: mode, resp: resp});
										}
									}
								}
							}
							responses.push({table: tableName, data: response});
						}
					}
				}
			}
			return responses
		} catch (error) {
			throw error;
		}
	}

	static async mongooseExport(name = '') {
		try {
			let tables = Object.keys(models.mongoose);
			let aData = [];
			for (let i = 0 ; i < tables.length ; i++) {
				let table = tables[i];
				if(typeof models.mongoose[table].find == 'function' ) {
					let tableContents, databaseName;
					databaseName = models.mongoose.getDatabaseName();
					if(table == 'sequelizeMetas') {
						tableContents = await models.mongoose.sequelizeMetas.find().select('_id name');
					} else {
						tableContents = await models.mongoose[table].find();
					}
					if (tableContents.length) {
						aData = [];
						for (let j = 0 ; j < tableContents.length ; j++) {
							let tableContent = tableContents[j];
							let tableContentKeys = Object.keys(tableContent._doc);
							for (let  k = 0 ; k < tableContentKeys.length ; k++) {
								let tableContentKey = tableContentKeys[k];
								if (models.mongoose.isValidObjectId(tableContent._doc[tableContentKey])) {
									tableContent._doc[tableContentKey] =  {"$oid":tableContent._doc[tableContentKey].toString()};
								}
							}
							aData.push(tableContent._doc);
						}
						let dir = path.join(__dirname, `../../../../export/mongoose/`);

						if (!fs.existsSync(dir)) {
							fs.mkdirSync(dir);
						}
						fs.writeFileSync(`${dir}${databaseName}_${table}.json`, JSON.stringify(aData), async (err) => {
							if (err) return console.log(err);
							console.log('written: ' + file);
						});
					}
				}
			}
			return aData;
		} catch (error) {
			throw error;
		}
	}

	static async mongooseImport(query = {}, name) {
		try {
			let responses = [];
			let tables = Object.keys(models.mongoose);
			let dirMigration = path.join(__dirname, `../../../../migrations`);
			let esMigrationFiles = await fs.readdirSync(dirMigration, async (err) => {
				if (err) return console.log(err);
				console.log('readDir: ' + dir);
			});
			let tablesOrdered = [];
			if(esMigrationFiles.length) {
				for (let i = 0 ; i < tables.length ; i++) {
					let table = tables[i];
					if(table != 'sequelizeMetas' && models.mongoose[table].collection && models.mongoose[table].collection.name ) {
						let tableOrder = esMigrationFiles.find(param => param.includes(models.mongoose[table].collection.name.setDash()));
						if(tableOrder) {
							let tableOrderParts = tableOrder.split('-');
							let tableOrderIndex = parseInt(tableOrderParts[0]);
							tablesOrdered[tableOrderIndex] = table;
						}
					}
				}
			}

			for (let i = 1 ; i <= tablesOrdered.length ; i++) {
				let tableOrdered = tablesOrdered[i], from, response = [], tableName = '';
				if(tableOrdered) {
					if(tableOrdered != 'sequelizeMetas') {
						if(typeof models.mongoose[tableOrdered].find == 'function' ) {
							tableName = models.mongoose[tableOrdered].collection.name;
							let aDataTable = await models.mongoose[tableOrdered].find();
							let aData = [];
							for (let j = 0 ; j < aDataTable.length ; j++) {
								let dataTable = aDataTable[j];
								aData.push(dataTable._doc);
							}
							//if(aData.length) {
								let dir;
								if (query.from) {
									from = query.from;
									if ( from == 'sequelize') {
										dir = path.join(__dirname, `../../../../export/sequelize/`);
									} else if ( from == 'mongoose') {
										dir = path.join(__dirname, `../../../../export/mongoose/`);
									}
								} else {
									from = 'mongoose';
									dir = path.join(__dirname, `../../../../export/mongoose/`);
								}
								let esTableFiles = await fs.readdirSync(dir, async (err) => {
									if (err) return console.log(err);
									console.log('readDir: ' + dir);
								});
								if(esTableFiles.length) {
									let database = models.mongoose.getDatabaseName();
									let esTableFile = esTableFiles.find(param => param == `${database}_${tableOrdered}.json`);
									if(esTableFile) {
										let tableFile = await fs.readFileSync(dir + esTableFile, async (err) => {
											if (err) return console.log(err);
											console.log('read: ' + esTableFile);
										});
										let tableFileStr = tableFile.toString();
										if(tableFileStr) {
											let aDataTableFile = tableFileStr.jsonParse();
											for (let l = 0 ; l < aDataTableFile.length ; l++) {
												let dataTableFile = aDataTableFile[l];
												let resp, mode;
												if (from) {
													if ( from == 'sequelize') {
														let dataTableFileValues = Object.values(dataTableFile);
														let dataTableFileKeys = Object.keys(dataTableFile);
														for (let m = 0 ; m < dataTableFileValues.length ; m++) {
															let dataTableFileValue = dataTableFileValues[m];
															if(dataTableFileValue != null && models.mongoose.isValidObjectId(dataTableFileValue)) {
																dataTableFile[dataTableFileKeys[m]] = models.mongoose.setAsObjectId(dataTableFileValue);
															}
														}
													} else if ( from == 'mongoose') {
														let dataTableFileValues = Object.values(dataTableFile);
														let dataTableFileKeys = Object.keys(dataTableFile);
														for (let m = 0 ; m < dataTableFileValues.length ; m++) {
															let dataTableFileValue = dataTableFileValues[m];
															if(dataTableFileValue != null && models.mongoose.isValidObjectId(dataTableFileValue.$oid)) {
																dataTableFile[dataTableFileKeys[m]] = models.mongoose.setAsObjectId(dataTableFileValue.$oid);
															}
														}
													}
												}
												if(aData.length != aDataTableFile.length) {
													for (let n = 0 ; n < aData.length ; n++) {
														let data = aData[n];
														let found = aDataTableFile.find(param => param._id == data._id.toString())
														if(!found) {
															resp = await models.mongoose[tableOrdered].findByIdAndRemove(data._id);
															mode = 'deleted';
															response.push({_id: data._id, mode: mode, resp: resp});
														}
													}
												}
												let _id = dataTableFile._id;
												if(aData.find(param => param._id == dataTableFile._id.toString())) {
													delete dataTableFile._id;
													resp = await models.mongoose[tableOrdered].findByIdAndUpdate(_id, dataTableFile, {new: true});
													if(resp == null) {
														resp = await models.mongoose[tableOrdered].findOneAndUpdate({id:dataTableFile.id}, dataTableFile, {new: true});
													}
													mode = 'updated';
												} else {
													resp = new models.mongoose[tableOrdered](dataTableFile);
													await resp.save();
													mode = 'created';
												}
												response.push({_id: _id, mode: mode, resp: resp});
											}
										}
									}
								}
							//}
							responses.push({table: tableName, data: response});
						}
					}
				}
			}
			return responses
		} catch (error) {
			throw error;
		}
	}
}

module.exports = SequelizeService;
