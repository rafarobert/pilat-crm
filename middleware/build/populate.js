require('../utils/Prototipes');
require('dotenv').config({ path: "../.env" });
const configJson = require('../config/config');
const express = require("express");
const app = express();
const Sequelize = require('sequelize');
const path = require('path');
const fs = require('fs');
const { lstatSync, readdir, readFile } = require('fs');
const isDirectory = source => lstatSync(source).isDirectory();
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const dJSON = require('dirty-json');
const models = require('../core/express');
const { QueryTypes } = require('sequelize');
const buildService = require("./build.service");
const migrationNum=0;

let tableName = null;
let indexMigration = 0;
let numMigrations = -1;
let tableNameDash = null;
let expMigrationContent = null;
let open = '<<<';
let close  = '>>>';
let openES = '<es-section>';
let closeES = '</es-section>';
let openHtmlES = '<!--es-section-->';
let closeHtmlES = '<!--/es-section-->';
// let fields = null;
let DB = {};
// let foreigns = null;
// let aFields = null;
// let aForeigns = null;
let sequelize;
let expConfigStore;
let esConfig;
let codeSections = ['usr-password','usr-id'];

//joining path of directory
//passsing directoryPath and callback function
let
	contents = [],
	esMap = [],
	esTemplateContents = [],
	expMigrationContents = [],
	expControllerContents = [],
	expModelContents = [],
	expRouteContents = [],
	expServiceContents = [],
	extControllerContents = [],
	extModelContents = [],
	extStoreContents = [],
	extViewListContents = [],
	extViewAddContents = [],
	angModelContents = [],
	angServiceContents = [],
	angServiceSpecContents = [],

	generalFilesStore = {},

	expConfigFile = 'esconfig.json',
	dirEsCoreTemplates = path.join(__dirname, '../templates/core/'),

	extIndexFile = 'index.html',
	extEsFile = 'es.js',
	expConfigRoutesFile = 'routes.js',
	extTreeDataFile = 'treeData.json',
	extAppFile = 'app.js',
	addFile = 'Add.js',
	listFile = 'List.js',
	dirExpMigrations = path.join(__dirname, '../migrations/'),
	dirExpControllers = path.join(__dirname, '../controllers/'),
	dirExpModels = path.join(__dirname, '../models/'),
	dirExpConfig = path.join(__dirname, './'),
	dirExpRoutes = path.join(__dirname, '../routes/'),
	dirExpServices = path.join(__dirname, '../services/'),
	dirExtControllers = path.join(__dirname, '../public/js/es/app/controller/'),
	dirExtModels = path.join(__dirname, '../public/js/es/app/model/'),
	dirExtStores = path.join(__dirname, '../public/js/es/app/store/'),
	dirExtViews = path.join(__dirname, '../public/js/es/app/view/'),
	dirAngModels = path.join(__dirname, '../../frontend/src/app/models/'),
	dirAngServices =path.join(__dirname, '../../frontend/src/app/services/'),
	dirExtApp = path.join(__dirname, '../public/js/es/');

async function createOrUpdateMigrations(expMigrationFiles) {
	if(!expMigrationFiles.length) {
		let tables = {};
		let dbTables = await buildService.mysql.getDatabaseTables(config.database);
		let templateMigrationFile = 'template_express_migration.txt';
		let templateMigrationDir = path.join(__dirname, './templates/core/express/');
		if(dbTables.length) {
			// for (let m = 0 ; m < dbTables.length ; m++ ) {
			// 	let dbTable = dbTables[m];
			// 	tables[dbTable.TABLE_NAME] = [];
			// }
			for (let n = 0 ; n < dbTables.length ; n++ ) {
				let dbTable = dbTables[n];
				if (dbTable.TABLE_NAME == 'tracker') {
					//console.log(true);
				}
				if (dbTable.COLUMN_TYPE.toUpperCase() == 'DOUBLE') {
					// console.log(true);
				}
				let aColumnType = dbTable.COLUMN_TYPE.hasString('(') || dbTable.COLUMN_TYPE.hasString(')') ? dbTable.COLUMN_TYPE.split('(') : [];
				let columnType = aColumnType[0] ? aColumnType[0] : dbTable.COLUMN_TYPE;
				let seqColumnType;
				switch (columnType) {
					case 'varchar':
						seqColumnType = 'STRING';
						break;
					case 'int':
						seqColumnType = 'INTEGER';
						break;
					case 'datetime':
						seqColumnType = 'DATE';
						break;
					default:
						seqColumnType = columnType.toUpperCase();
						break;
				}

				let columnlength = aColumnType[1] ? aColumnType[1].split(')')[0]: columnType;
				let aColumnLength = columnlength.hasString(',') ? columnlength.split(',') : [];
				columnlength = aColumnLength[0] ? aColumnLength[0] : columnlength;

				if(!tables[dbTable.TABLE_NAME]) {
					tables[dbTable.TABLE_NAME] = {};
					tables[dbTable.TABLE_NAME][dbTable.COLUMN_NAME] = {};
					tables[dbTable.TABLE_NAME][dbTable.COLUMN_NAME] = {
						columnName: dbTable.COLUMN_NAME,
						key: dbTable.COLUMN_KEY,
						type: seqColumnType,
						length: columnlength,
						default: dbTable.COLUMN_DEFAULT,
						localTable: dbTable.TABLE_NAME,
						autoIncrement: dbTable.EXTRA.hasStringAs('auto_increment') ? true : false,
						keys:{},
						constraints:{},
						allowNull: dbTable.IS_NULLABLE=='NO'?false:true,
						unique:false
					};
					//Conditions
					if(dbTable.COLUMN_KEY == 'PRI' && dbTable.key == 'PRI') {
						tables[dbTable.TABLE_NAME][dbTable.COLUMN_NAME]['primaryKey'] = true;
					}
				} else {
					tables[dbTable.TABLE_NAME][dbTable.COLUMN_NAME] = {
						columnName: dbTable.COLUMN_NAME,
						key: dbTable.COLUMN_KEY,
						type: seqColumnType,
						length: columnlength,
						localTable: dbTable.TABLE_NAME,
						default: dbTable.COLUMN_DEFAULT,
						keys:{},
						constraints:{},
						allowNull: dbTable.IS_NULLABLE=='NO'?false:true,
						unique:false
					};
				}
				if(aColumnLength.length) {
					tables[dbTable.TABLE_NAME][dbTable.COLUMN_NAME]['decimals'] = aColumnLength[1];
				}
			}
			let aTables = asArray(tables,{takeColName:true, as:'localTable'});
			for (let o = 0 ; o < aTables.length ; o++ ) {
				let objTable = aTables[o];
				let aColumns = asArray(objTable);
				for (let p = 0 ; p < aColumns.length ; p++) {
					let column = aColumns[p];
					tables[objTable.localTable][column.columnName]['migNum'] = o+1;
				}
			}
			let tableConstraints;
			for (let o = 0 ; o < aTables.length ; o++ ) {
				let objTable = aTables[o];
				let tableIndexes = await buildService.mysql.getDatabaseTableIndexes(config.database, objTable.localTable);
				tableConstraints = await buildService.mysql.getDatabaseTableConstraints(config.database, objTable.localTable);
				if (tableIndexes.length) {
					for (let p = 0; p < tableIndexes.length; p++) {
						let column, tableIndex = tableIndexes[p];
						if (tableIndex.Table == objTable.localTable) {
							let aColumns = asArray(objTable);
							column = aColumns.find(param => param.columnName == tableIndex.Column_name);
							if (column) {
								column.localTable = objTable.localTable;
								column.keys[tableIndex.Key_name] = tableIndex;
								column['unique'] = true;
							}
						}
						if (column) {
							tables[objTable.localTable][tableIndex.Column_name] = column;
						}
						if (column.key == 'PRI') {
							tables[objTable.localTable][tableIndex.Column_name]['primaryKey'] = true;
						}
					}
				}

				if(tableConstraints.length) {
					for (let p = 0; p < tableConstraints.length; p++) {
						let column, tableConstraint = tableConstraints[p];
						if (tableConstraint.TABLE_NAME == objTable.localTable) {
							let aColumns = asArray(objTable);
							column = aColumns.find(param => param.columnName == tableConstraint.COLUMN_NAME);
							if (column && tableConstraint.REFERENCED_TABLE_NAME) {
								column.references = {
									model: {tableName: tableConstraint.REFERENCED_TABLE_NAME},
									key: tableConstraint.REFERENCED_COLUMN_NAME
								};
								column.constraints[tableConstraint.CONSTRAINT_NAME] = tableConstraint;
								column.onUpdate = 'CASCADE';
								column.onDelete = 'SET NULL';
								if (column) {
									tables[objTable.localTable][tableConstraint.COLUMN_NAME] = column;
								}
							} else {

							}
						}
					}
				}
			}
			let enableSecondWayTogetRelations = false;
			if (enableSecondWayTogetRelations) {
				aTables = asArray(tables);
				for (let o = 0; o < aTables.length; o++) {
					let objTable = aTables[o];
					let aColumns = asArray(objTable);
					let fields = asArray(tables[objTable.localTable]);
					let localTablePrimary = fields.find(param => param.key == 'PRI');
					let localTableSing = sing(objTable.localTable);
					let dbTables = Object.keys(tables);
					let fieldsRelated;
					let tableRelations = [];
					for (let q = 0; q < dbTables.length; q++) {
						let dbForeignTable = dbTables[q];
						let objDbForeignTable = tables[dbForeignTable];
						let dbForeignTableFields = asArray(objDbForeignTable);
						let dbForeignTablePrimary = dbForeignTableFields.find(param => param.key == 'PRI');
						let dbForeignTableSing = sing(dbForeignTable);
						let dbObjForeignTableRelated, dbLocalTableFieldsRelated, dbTableRelatedFields;
						let dbForeignTableRelated = dbForeignTable.includes(localTableSing) && dbForeignTable != objTable.localTable ? dbForeignTable : '';
						let localField, foreignTable, foreignTablePrimary;
						let dbForeignFields = tables[dbForeignTable];
						let aDbForeeignFields = asArray(dbForeignFields);
						let dbForeignFieldPrimary = aDbForeeignFields.find(param => param.key == 'PRI');

						if (dbForeignTableRelated) {
							dbObjForeignTableRelated = tables[dbForeignTableRelated];
							dbTableRelatedFields = asArray(dbObjForeignTableRelated);
							dbLocalTableFieldsRelated = dbTableRelatedFields.filter(param => param.unique == true && param.key != 'PRI' || param.columnName.includes(localTableSing));
							if (dbLocalTableFieldsRelated) {
								for (let r = 0; r < dbLocalTableFieldsRelated.length; r++) {
									let dbLocalTableFieldRelated = dbLocalTableFieldsRelated[r];
									let column = aColumns.find(param => param.columnName == localTablePrimary.columnName);
									if (column) {
										let tableRelation = {
											localField: localTablePrimary.columnName,
											foreignTable: dbLocalTableFieldRelated.localTable,
											foreignPrimary: dbLocalTableFieldRelated.columnName,
											constraint: `${objTable.localTable}_${dbForeignTable}_${dbLocalTableFieldRelated.columnName}`
										};
									}
								}
							}
						}
						fields.forEach(field => {
							if (dbForeignFieldPrimary) {
								[localField, foreignTable, foreignTablePrimary] = getRelatedTable(field.columnName, dbForeignTable, dbForeignFieldPrimary.columnName);
								if (localField && foreignTable && foreignTablePrimary) {
									if (!tableRelations.find(param => param.localField == localField)) {
										tableRelations.push({
											localField: dbForeignTablePrimary.columnName,
											foreignTable: foreignTable,
											foreignPrimary: foreignTablePrimary,
											constraint: `${objTable.localTable}_${foreignTable}_${foreignTablePrimary}`
										});
									}
								}
							}
						});
						if (dbForeignTable != objTable.localTable) {
							if (dbForeignTable == 'opportunities') {
								//console.log(true);
							}

							// fieldsRelated = fields.filter(param => param.columnName.includes(dbForeignTableSing) && !param.type.isLikeAnyWay('text') && !param.type.isLikeAnyWay('float') && !param.type.isLikeAnyWay('boolean') && !param.type.isLikeAnyWay('decimal') && !param.type.isLikeAnyWay('tinyint') && !param.type.isLikeAnyWay('blob') && !param.type.isLikeAnyWay('date'));
							fieldsRelated = fields.filter(param => !param.type.isLikeAnyWay('text') && !param.type.isLikeAnyWay('float') && !param.type.isLikeAnyWay('boolean') && !param.type.isLikeAnyWay('decimal') && !param.type.isLikeAnyWay('tinyint') && !param.type.isLikeAnyWay('blob') && !param.type.isLikeAnyWay('date'));
							fieldsRelated.forEach(localField => {
								if (localField.columnName.includes('description')) {
									//console.log(true);
								}

								if (!tableRelations.find(param => param.localField == localField.columnName)) {
									if (dbForeignFieldPrimary) {
										tableRelations.push({
											localField: localField.columnName,
											foreignTable: dbForeignTable,
											foreignPrimary: dbForeignFieldPrimary.columnName,
											constraint: `${objTable.localTable}_${dbForeignTable}_${dbForeignFieldPrimary}`
										});
									}
								}
							});
						}
					}

					for (let q = 0; q < tableRelations.length; q++) {
						let tableRelation = tableRelations[q];
						let column = aColumns.find(param => param.columnName == tableRelation.localField);
						if (column) {
							column.references = {
								model: {tableName: tableRelation.foreignTable},
								key: tableRelation.foreignPrimary
							};
							column.constraints[tableRelation.constraint] = {
								'COLUMN_NAME': tableRelation.localField,
								'CONSTRAINT_NAME': tableRelation.constraint,
								'REFERENCED_TABLE_NAME': tableRelation.foreignTable
							};
							column.onUpdate = 'CASCADE';
							column.onDelete = 'SET NULL';
							if (tableRelation.localField == 'reports_to_id') {
								//console.log(true);
							}
							tables[objTable.localTable][tableRelation.localField] = column;
						}
					}
				}
			}

			let migrationNames = Object.keys(tables);
			let n = 0;
			aTables = asArray(tables,{takeColName:false});
			for (let i = 0 ; i < aTables.length ; i++) {
				n++;
				let aTableFields = aTables[i];
				let tableName = aTableFields.localTable;
				delete aTableFields.localTable;
				let migrationName = migrationNames[i];
				migrationName = (n.lpad(3))+'-create-'+migrationName;

				let space = await fs.readFileSync(templateMigrationDir+templateMigrationFile).toString();
				let templateStore = {content:space, dir:templateMigrationDir+templateMigrationFile, file:templateMigrationFile};
				let migrationTables = {content:space, dir:templateMigrationDir+templateMigrationFile, file:templateMigrationFile, table: tableName, tableFields: aTableFields, tableForeigns:{}};
				if(tableName == 'leads') {
					console.log('yes');
				}
				await replaceSpaces(space,templateStore, migrationTables);
			}

			aTables = asArray(tables,{takeColName:true, as:'localTable'});

			app.set('regTables', tables);
		}
	}
}

async function init() {
	try {
		expConfigStore = await fs.readFileSync(dirExpConfig + expConfigFile).toString().jsonParse();
		app.set('expConfigStore', {dir: dirExpConfig + expConfigFile, file: expConfigFile, content: expConfigStore});

		for (let i = 0; i < expConfigStore.cores.length; i++) {

			let core = expConfigStore.cores[i];
			let keys = Object.keys(core);
			let directories = core[keys[0]].toRewrite.directories;
			let files = core[keys[0]].toRewrite.files;
			let toExtract = core[keys[0]].toExtract;
			let using = core[keys[0]].using;
			let dirExpMigrations = path.join(__dirname, toExtract);
			let dirEsCoreTemplates = path.join(__dirname, using);
			let expMigrationFiles = await fs.readdirSync(dirExpMigrations);
			await createOrUpdateMigrations(expMigrationFiles);

			for (let k = 0; k < expMigrationFiles.length; k++) {

				let expMigrationFile = expMigrationFiles[k];
				tableNameDash = expMigrationFile.split('-create-')[1].split('.js')[0];
				tableName = tableNameDash.replace(/-/g, '_');
				let content = await fs.readFileSync(dirExpMigrations + expMigrationFile);
				content = content.toString();
				let jsonTxt = content.split(`'${tableName}',`)[1];
				jsonTxt = jsonTxt.split('});')[0] + '}';
				//jsonTxt = fixCorcheteComma(jsonTxt);
				let fixed = fixTxtJsonFeatures(jsonTxt);
				if(tableName == 'aos_quotes_os_contracts_c') {
					//console.log(1);
				}
				let fields = updateForeigns(fixed.jsonParse(), tableName);
				DB[tableName] = fields;
				let foreigns = getForeignsFromFields(fields, tableName);
				expMigrationContents[k] = {
					dir: dirExpMigrations + expMigrationFile,
					file: expMigrationFile,
					content: content.toString(),
					table: tableName,
					tableFields: fields,
					tableForeigns: foreigns
				};
				app.set('generalFilesStore', generalFilesStore);
				app.set('expMigrationStore', expMigrationContents);
			}

			for (let j = 0; j < files.length; j++) {
				let file = files[j];
				let into = path.join(__dirname, file.into);
				let fileExt = file.name + file.ext;
				if (fs.existsSync(into + fileExt)) {
					let content = await fs.readFileSync(into + fileExt);
					let store = {dir: into + fileExt, file: fileExt, content: content.toString()};
					app.set(file.with, store);
					generalFilesStore[fileExt] = store;
				}
			}
			for (let j = 0; j < directories.length; j++) {

				let directory = directories[j];
				let allIn = path.join(__dirname, directory.allIn);
				numMigrations = expMigrationFiles.length;

				for (let k = 0; k < expMigrationFiles.length; k++) {

					let expMigrationFile = expMigrationFiles[k];
					tableNameDash = expMigrationFile.split('-create-')[1].split('.js')[0];
					tableName = tableNameDash.replace(/-/g, '_');
					let tableNameFile = replaceThisKey(DB[tableName], directory.like);

					let fileExt = tableNameFile + directory.ext;

					if (directory.as == 'file') {

						if (fs.existsSync(allIn + fileExt)) {
							let content = await fs.readFileSync(allIn + fileExt);
							let fileStore = {dir: allIn + fileExt, file: fileExt, content: content.toString()};
							let aSubDir = allIn.split('/');
							await contents.push(fileStore);
							app.set(directory.with, contents);
							generalFilesStore[aSubDir[aSubDir.length - 2] + '/' + fileExt] = fileStore;
						}

					} else if (directory.as.includes('folder')) {

						[folder, name] = directory.as.split('/');
						fileExt = name + directory.ext;
						if (fs.existsSync(allIn + fileExt)) {
							let content = await fs.readFileSync(allIn + fileExt);
							let fileStore = {dir: allIn + fileExt, file: fileExt, content: content.toString()};
							let aSubDir = allIn.split('/');
							await contents.push(fileStore);
							app.set(directory.with, contents);
							generalFilesStore[aSubDir[aSubDir.length - 2] + '/' + fileExt] = fileStore;
						}
					}
				}
			}

			let esTemplateFiles = await fs.readdirSync(dirEsCoreTemplates);
			for (let i = 0; i < esTemplateFiles.length; i++) {
				let esTemplateFile = esTemplateFiles[i];
				let content = await await fs.readFileSync(dirEsCoreTemplates + esTemplateFile);
				if (esTemplateFile.indexOf('template') >= 0) {
					esTemplateContents.push({
						dir: dirEsCoreTemplates + esTemplateFile,
						file: esTemplateFile,
						content: content.toString()
					});
					app.set('esTemplateStore', esTemplateContents);
				}
			}



		}

		// let content = await fs.readFileSync(dirExpRoutes + expConfigRoutesFile);
		// let expConfigRouteStore = {dir: dirExpRoutes + expConfigRoutesFile, file: expConfigRoutesFile, content: content.toString()};
		// app.set('expConfigRouteStore', expConfigRouteStore);
		// generalFilesStore[expConfigRoutesFile] = expConfigRouteStore;
		//
		// fs.readFile(dirExtApp + extTreeDataFile, async (err, content) => {
		// 	let extTreeStore = {dir: dirExtApp + extTreeDataFile, file: extTreeDataFile, content: content.toString()};
		// 	app.set('extTreeStore', extTreeStore);
		// 	generalFilesStore[extTreeDataFile] = extTreeStore;
		// });
		// fs.readFile(dirExtApp + extIndexFile, async (err, content) => {
		// 	let extIndexStore = {dir: dirExtApp + extIndexFile, file: extIndexFile, content: content.toString()};
		// 	app.set('extIndexStore', extIndexStore);
		// 	generalFilesStore[extIndexFile] = extIndexStore;
		// });
		// fs.readFile(dirExtApp + extEsFile, async (err, content) => {
		// 	let extEsStore = {dir: dirExtApp + extEsFile, file: extEsFile, content: content.toString()};
		// 	app.set('extEsStore', extEsStore);
		// 	generalFilesStore[extEsFile] = extEsStore;
		// });
		// fs.readFile(dirExtApp + extAppFile, async (err, content) => {
		// 	let extAppStore = {dir: dirExtApp + extAppFile, file: extAppFile, content: content.toString()};
		// 	app.set('extAppStore', extAppStore);
		// 	generalFilesStore[extAppFile] = extAppStore ;
		// });

		// let expMigrationFiles = await fs.readdirSync(dirExpMigrations);
		//
		// numMigrations = expMigrationFiles.length;

		console.log('initializing');
		build();

	} catch (e) {
		console.log(e);
	}
}

init();

async function asyncForEach(array, callback) {
	for (let index = 0; index < array.length; index++) {
		await callback(array[index], index, array);
	}
}

async function build() {
	try {
		let expMigrationStore = app.get('expMigrationStore');
		for (let i = 0 ; i < expMigrationStore.length ; i++) {
			if(expMigrationStore[i]) {
				let esTemplateStore = app.get('esTemplateStore');
				console.log('done: ' + expMigrationStore[i].file);
				for (let j = 0 ; j < esTemplateStore.length ; j++) {
					if(esTemplateStore[j] && esTemplateStore[j].file != 'template_express_migration.txt') {
						let newContent = esTemplateStore[j].content;
						await replaceSpaces(newContent,esTemplateStore[j], expMigrationStore[i]);
						console.log('done: ' + esTemplateStore[j].file);
					}
				}
			}
		}
	} catch (e) {
		console.log(e);
	}
}

function updateForeignFields(aStore) {
	let aDbStores = asArray(DB);
	for (let i = 0; i < aStore.length; i++) {
		let store = aStore[i];
		if (store.references != undefined) {
			for (let j = 0; j < aDbStores.length; j++) {
				let dbStore = aDbStores[j];
				let foreignTableName = store.references.model.tableName;
				if (foreignTableName == dbStore.columnName) {

					let aForeignFields = asArray(dbStore);
					for (let k = 0; k < aForeignFields.length; k++) {
						let forignField = aForeignFields[k];
						if (forignField.references != undefined) {
							for (let l = 0; l < aDbStores.length; l++) {
								let dbForeignStore = aDbStores[l];
								let foreignForeignTableName = forignField.references.model.tableName.replace(/_/g, '-');
								if (foreignForeignTableName == dbForeignStore.columnName) {
									dbStore[forignField.columnName].foreign = dbForeignStore;
								}
							}
						}
					}

					store.foreign = dbStore;
				}
			}
		}
	}
	return aStore;
}

async function fixCorcheteComma(txt) {
	let aTxt = txt.split('},');
	for (let i = 0 ; i < aTxt.length ; i++) {
		let item = aTxt[i];
		if(item.trim().substring(0,1) == '}'){
			let lastItem = aTxt[i];
			delete aTxt[i];
			aTxt[i-1] += lastItem;
		}
	}
	let str = aTxt.join('},');
	str = str.replaceAll('},}', '}}');
	return str;
}

async function verifyTagsOnSpace(content) {

}

async function replaceSpaces(newContent, esTemplateDataInProcess, expMigrationDataInProgress) {
	try {
		let from, to, innerFrom, innerTo, openTag, closeTag, innerOpenTag, innerCloseTag, section, innerSection, tag, innerTag, space, innerSpace;
		if(esTemplateDataInProcess.file == "template_express_service.txt") {
				// console.log('yes');
		}
		if(expMigrationDataInProgress.table == "pilat_dictionaries") {
			  // console.log('yes');
		}
		if(esTemplateDataInProcess.file == "template_express_model.txt") {
			//console.log('yes');
		}
		if(esTemplateDataInProcess.file == "template_angular_model.txt") {
			//console.log('yes');
		}
		if(esTemplateDataInProcess.file == "template_express_related.txt") {
			//console.log('yes');
		}
		from = newContent.indexOf(open);
		to = newContent.indexOf(close);
		if (to >= 0) {
			openTag = newContent.substring(from, to) + close;
			closeTag = close + openTag.replaceAll(open, '').replaceAll(close, '') + open;
			space = newContent.split(openTag)[1].split(closeTag)[0];
			section = openTag + space + closeTag;
			tag = openTag.split(open)[1].split(close)[0];

			innerFrom = space.indexOf(open);
			innerTo = space.indexOf(close);
			if (innerTo >= 0) {
				innerOpenTag = space.substring(innerFrom, innerTo) + close;
				innerCloseTag = close + innerOpenTag.replaceAll(open, '').replaceAll(close, '') + open;
				innerSpace = space.split(innerOpenTag)[1].split(innerCloseTag)[0];
				innerSection = innerOpenTag + innerSpace + innerCloseTag;
				innerTag = innerOpenTag.split(open)[1].split(close)[0];
				innerSpace = updateSpace(innerSpace, innerTag, esTemplateDataInProcess, expMigrationDataInProgress).toString();
				space = space.replaceAll(innerSection, innerSpace);
				newContent = newContent.replaceAll(innerSection, innerSpace);
				await replaceSpaces(newContent, esTemplateDataInProcess, expMigrationDataInProgress);
			} else {
				space = updateSpace(space, tag, esTemplateDataInProcess, expMigrationDataInProgress).toString();
				newContent = newContent.replaceAll(section, space);
				try {
					await replaceSpaces(newContent, esTemplateDataInProcess, expMigrationDataInProgress);
				} catch (e) {
					console.log(e)
				}
			}
		} else {
//			newContent = fixCorcheteComma(newContent);
			let esTemplateStore = app.get('esTemplateStore');
			esConfig = app.get('expConfigStore');
			for (let i = 0 ; i < esConfig.content.cores.length ; i++) {
				let core = esConfig.content.cores[i];
				let keys = Object.keys(core);
				let directories = core[keys[0]].toRewrite.directories;
				let files = core[keys[0]].toRewrite.files;
				// if(expMigrationDataInProgress.table == getDefaultTable('auth')) {
				// 	console.log('yes');
				// }
				for (let k = 0 ; k < files.length ; k++) {
					let file = files[k].with;
					if(file == esTemplateDataInProcess.file.toString()) {
						writeTemplate(files[k], newContent, expMigrationDataInProgress);
						break;
					}
				}
				for (let j = 0 ; j < directories.length ; j++) {
					let template = directories[j].with;
					if (template == esTemplateDataInProcess.file.toString()) {
						writeTemplate(directories[j], newContent, expMigrationDataInProgress);
						break;
					}
				}
			}
		}
	} catch (e) {
		console.log(e);
	}
}

async function writeTemplate(toRewrite, newContent, expMigrationDataInProgress) {
	try {
		let dir;
		let like;
		let fileName;
		let dirName;
		if(toRewrite.into != undefined) {
			dir = path.join(__dirname, toRewrite.into);
		} else {
			dir = path.join(__dirname, toRewrite.allIn);
		}
		let ext = toRewrite.ext;
		let condition = toRewrite.as;
		if(toRewrite.like != undefined) {
			like = toRewrite.like;
			fileName = replaceThisKey(expMigrationDataInProgress.tableFields, like);
			dirName = replaceThisKey(expMigrationDataInProgress.tableFields, like);
		} else {
			fileName = toRewrite.name;
			dirName = toRewrite.dirName != undefined ? toRewrite.dirName : '';
		}
		let dirFile;
		let fileExt;
		let nameParts
		if (condition == 'file') {
			dirFile = dir + fileName + ext;
			fileExt = fileName + ext;
		} else if(condition.indexOf('folder') >= 0) {
			nameParts = condition.split('/');
			fileName = nameParts[1];
			if (!fs.existsSync(dir + dirName)){
				fs.mkdirSync(dir + dirName);
			}
			dirFile = dir + dirName + '/' + fileName + ext;
			fileExt = fileName + ext;
		}
		let aSubDir = dirFile.split('/');
		newContent = updateContent(newContent, expMigrationDataInProgress.tableFields,true);
		let generalFilesStore = app.get('generalFilesStore');
		let aGeneralFilesStore = asArray(app.get('generalFilesStore'));
		let oldFileStore;
		if(toRewrite.into != undefined) {
			oldFileStore = aGeneralFilesStore.find(params => params.columnName == fileExt);
		} else {
			oldFileStore = aGeneralFilesStore.find(params => params.columnName == aSubDir[aSubDir.length-2] +'/'+ fileExt);
		}
		await writeFile(dirFile, newContent, oldFileStore, false);
	} catch (e) {
		console.log(e);
	}
}

async function writeFile(file, newContent, oldFileStore = null, forceToRewrite = false) {
	try {

		if(oldFileStore == null) {
			//console.log(true);
		}
		if(!forceToRewrite) {
			// if(file.hasStringAs('service.js')) {
			// 	console.log(true);
			// }
			if (fs.existsSync(file) && oldFileStore) {
				let oldContent = oldFileStore.content;
				let openTag, closeTag;
				if (oldContent.indexOf(openES) >= 0) {
					openTag = openES;
					closeTag = closeES;
				} else if(oldContent.indexOf(openHtmlES) >= 0) {
					openTag = openHtmlES;
					closeTag = closeHtmlES;
				}
				if (oldContent.indexOf(openTag) >= 0) {
					let oldSections = oldContent.split(openTag);
					let newSections = newContent.split(openTag);
					delete oldSections[0];
					delete newSections[0];
					oldSections.forEach((oldSection,j) => {
						oldSections[j] = oldSection.split(closeTag)[0];
					});
					newSections.forEach((newSection,i) => {
						newSections[i] = newSection.split(closeTag)[0];
					});
					newSections.forEach((newSection,k) => {
						let sections = oldContent.split(oldSections[k]);
						newContent = openTag + sections.join(newSection) + closeTag;
						oldContent = sections.join(newSection);
					});
					newContent = newContent.substring(openTag.length,newContent.length-closeTag.length);
					fs.writeFileSync(file, newContent, async (err) => {
						if (err) return console.log(err);
						console.log('written: ' + file);
					});
				} else {
					fs.writeFileSync(file, newContent, async (err) => {
						if (err) return console.log(err);
						console.log('written: ' + file);
					});
				}
			} else {

				fs.writeFileSync(file, newContent, async (err) => {
					if (err) return console.log(err);
					console.log('written: ' + file);
				});
			}
		} else {
			fs.writeFileSync(file, newContent, async (err) => {
				if (err) return console.log(err);
				console.log('written: ' + file);
			});
		}
	} catch (e) {
		console.log(e);
	}
}

function updateSpace(space, tag, esTemplateData, expMigrationData) {
	try {
		let filled;
		if(space.indexOf(open) >= 0) {
			replaceSpaces(space, esTemplateData, expMigrationData);
		} else {
			if(space.hasStringAs('dbTable')) {
				filled = fillSpace(space, null, tag, expMigrationData.table, true);
			} else {
				let aTableFields = asArray(expMigrationData.tableFields);
				let aTableFieldsUpdated = updateForeignFields(aTableFields);
				filled = fillSpace(space, aTableFieldsUpdated, tag, expMigrationData.table, true);
			}
			return filled;
		}
	} catch (e) {
		console.log(e)
	}
}

function foreignKeysToReplace(store) {
	const keys = [];
	for (let i = 0 ; i < store.length ; i++) {
		let key = {
			UcObjPForeignTableName: UcObj(store[i].references.model.tableName).capitalize(),
			lcObjPForeignTableName: lcObj(store[i].references.model.tableName),
			UcObjSForeignTableName: UcObj(sing(store[i].references.model.tableName)).capitalize(),
			lcObjSForeignTableName: lcObj(sing(store[i].references.model.tableName)),
			UcObjForeignField: UcObj(store[i].references.key).capitalize(),
			lcObjForeignField: lcObj(store[i].references.key),
			lcObjLocalFieldName: lcObj(store[i].columnName),
			UcObjLocalFieldName: UcObj(store[i].columnName).capitalize(),
			UcObjRefLocalFieldName: UcObj(store[i].columnName).capitalize().replaceAll('id','').replaceAll('Id',''),
			localFieldName: store[i].columnName,
			foreignTableName: store[i].references.model.tableName
		};
		keys.push(key);
	}
	return keys;
}

function replaceThisKey(fields, key) {
	try {
		let aFields = asArray(fields);
		let keyNames = keysToReplace(aFields);
		let valToReturn;
		for (let i = 0 ; i < keyNames.length ; i++) {
			if(valToReturn){
				break;
			}
			let sKey = Object.keys(keyNames[i]);
			let sVal = Object.values(keyNames[i]);
			for( let j = 0 ; j < sKey.length ; j++) {
				if(sKey[j] == key) {
					valToReturn = sVal[j];
					break;
				} else if(key.includes(sKey[j])){
					key = key.replaceAll(sKey[j], sVal[j]);
					valToReturn = key;
				}
			}
		}
		return valToReturn;
	} catch (e) {
		console.log(e);
	}
}

function getForeignFieldsToBeUsedAsLabel(foreign) {
	let foreignFields = [];
	let aForeign = asArray(foreign);
	for (let  i = 0 ; i < aForeign.length ; i++) {
		if (
			aForeign[i].columnName.indexOf('id') < 0 &&
			aForeign[i].columnName.indexOf('Id') < 0 &&
			aForeign[i].columnName.indexOf('createdAt') < 0 &&
			aForeign[i].columnName.indexOf('updatedAt') < 0 &&
			aForeign[i].columnName.indexOf('dueAt') < 0
		) {
			foreignFields.push(aForeign[i]);
		}
	}
	return foreignFields;
}

function getDefaultTable(name) {
	let tables = Object.keys(DB);
	let toReturn = '';
	for (let i = 0 ; i < tables.length ; i++) {
		let table = tables[i];
		if(table.includes(name)) {
			toReturn = table;
		}
	}
	return toReturn;
}
function getDefaultField(table, field) {
	let dbTables = Object.keys(DB);
	let toReturn = '';
	for (let i = 0 ; i < dbTables.length ; i++) {
		let dbTable = dbTables[i];
		if(dbTable.includes(table)) {
			let dbFields = Object.keys(DB[dbTable]);
			for (let j = 0 ; j < dbFields.length ; j++) {
				let dbField = dbFields[j];
				if(dbField == field) {
					toReturn = field;
				}
			}
		}
	}
	return toReturn;
}

async function is(obj) {
	if(obj != undefined){
		return false;
	}
	if(obj){
		return false;
	}
	return true
}

async function isNot(obj) {
	if(obj == undefined){
		return true;
	}
	if(!obj){
		return true;
	}
	return false;
}

function keysToReplace(store, isNew = true) {
	let date = new Date();
	let keys = [];
	if(!Array.isArray(store)) {
		store = asArray(store);
	}
	let storeValue = store.find(param => param.columnName.hasStringAs('status'));
	let storeLabel = store[0];
	for (let i = 0; i < store.length; i++) {
		try {
			let key;
			if(store[i].localTable != undefined) {
				if(store[i].localTable == 'emailman') {
					//console.log(2);
				}
				key = {
					//Fields
					"###": store[i].migNum ? (store[i].migNum).lpad(3) : '',
					"#userCreated": isNew ? "Rafael Gutierrez Gaspar" : "",
					"#dateCreated": isNew ? date.toString() : '',
					"#timeCreated": isNew ? date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() : '',
					"#userUpdated": "Rafael Gutierrez Gaspar",
					"#dateUpdated": date.toString(),
					"#timeUpdated": date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(),
					"#systemName": configJson.system,

					UcObjPLocalTableName: UcObj(store[i].localTable).capitalize(),
					lcObjPLocalTableName: lcObj(store[i].localTable),
					UcObjSLocalTableName: UcObj(sing(store[i].localTable)).capitalize(),
					lcObjSLocalTableName: lcObj(sing(store[i].localTable)),
					lcObjLocalTableName: lcObj(store[i].localTable),
					UcObjLocalTableName: UcObj(store[i].localTable),
					// localTableName: store[i].localTable,

					UcObjPForeignTableName: store[i].references != undefined ? UcObj(store[i].references.model.tableName).capitalize() : '',
					UcObjPForeignStatusTableName: store[i].references != undefined && store[i].references.model.tableName.hasStringAs('param')? UcObj(store[i].references.model.tableName).capitalize() : UcObj(getDefaultTable('param')),
					lcObjPForeignTableName: store[i].references != undefined ? lcObj(store[i].references.model.tableName) : '',
					UcObjSForeignTableName: store[i].references != undefined ? UcObj(sing(store[i].references.model.tableName)).capitalize() : '',
					lcObjSForeignTableName: store[i].references != undefined ? lcObj(sing(store[i].references.model.tableName)) : '',
					lcObjForeignTableName: store[i].references != undefined ? lcObj(store[i].references.model.tableName) : '',
					UcObjForeignTableName: store[i].references != undefined ? lcObj(store[i].references.model.tableName) : '',
					// foreignTableName: store[i].references != undefined ? store[i].references.model.tableName : '',

					//local Fields
					localFieldName: store[i].columnName,
					UcObjLocalFieldName: UcObj(store[i].columnName).capitalize(),
					UcObjLocalCommonFieldName: store[i].columnName == '_id' ? UcObj('uid').capitalize() : UcObj(store[i].columnName).capitalize(),
					lcObjLocalFieldName: lcObj(store[i].columnName),
					UcObjRefLocalFieldName: UcObj(store[i].columnName).capitalize().replaceAll('id', '').replaceAll('Id', ''),
					lcObjRefLocalFieldName: lcObj(store[i].columnName).replaceAll('id', '').replaceAll('Id', ''),

					//foreign Fields
					foreignFieldName: store[i].references != undefined ? store[i].references.key : '',
					UcObjForeignFieldName: store[i].references != undefined ? UcObj(store[i].references.key).capitalize() : '',
					lcObjForeignFieldName: store[i].references != undefined ? lcObj(store[i].references.key) : '',
					UcObjRefForeignFieldName: store[i].references != undefined ? UcObj(store[i].references.key).capitalize().replaceAll('id', '').replaceAll('Id', '') : '',


					'local_field_name': store[i].columnName,
					//second_primary_field
					'local_second_primary_field_name': (store[i].primaryKey == undefined || !store[i].primaryKey) && store[i].type.hasStringAs('BIGINT') && store[i].columnName.hasStringAs('id') ? store[i].columnName : '',
					'local_second_primary_name': (store[i].primaryKey == undefined || !store[i].primaryKey) && store[i].type.hasStringAs('BIGINT') && store[i].columnName.hasStringAs('id') ? store[i].columnName : '',
					'local_second_primary_type': (store[i].primaryKey == undefined || !store[i].primaryKey) && store[i].type.hasStringAs('BIGINT') && store[i].columnName.hasStringAs('id') ? store[i].type.replaceAll('Sequelize.','') : '',
					'UcObjLocalSecondPrimaryFieldType': (store[i].primaryKey == undefined || !store[i].primaryKey) && store[i].type.hasStringAs('BIGINT') && store[i].columnName.hasStringAs('id') ? UcObj(store[i].type.replaceAll('Sequelize.','')) : '',
					'UcObjLocalSecondPrimaryName': (store[i].primaryKey == undefined || !store[i].primaryKey) && store[i].type.hasStringAs('BIGINT') && store[i].columnName.hasStringAs('id') ? UcObj(store[i].columnName ) : '',
					'UcObjLocalSecondPrimaryType': (store[i].primaryKey == undefined || !store[i].primaryKey) && store[i].type.hasStringAs('BIGINT') && store[i].columnName.hasStringAs('id') ? UcObj(store[i].type.replaceAll('Sequelize.','')) : '',
					'lcObjLocalSecondPrimaryName': (store[i].primaryKey == undefined || !store[i].primaryKey) && store[i].type.hasStringAs('BIGINT') && store[i].columnName.hasStringAs('id') ? lcObj(store[i].columnName ) : '',
					'lcObjLocalSecondPrimaryFieldType': (store[i].primaryKey == undefined || !store[i].primaryKey) && store[i].type.hasStringAs('BIGINT') && store[i].columnName.hasStringAs('id') ? lcObj(store[i].type.replaceAll('Sequelize.','')) : '',
					'lcObjLocalSecondPrimaryType': (store[i].primaryKey == undefined || !store[i].primaryKey) && store[i].type.hasStringAs('BIGINT') && store[i].columnName.hasStringAs('id') ? lcObj(store[i].type.replaceAll('Sequelize.','')) : '',
					//primary_field
					'local_primary_name': store[i].primaryKey ? store[i].columnName : '',
					'local_primary_autoincrement': store[i].primaryKey ? store[i].autoIncrement ? store[i].autoIncrement.toString() : 'false' : '',
					'local_primary_field_name': store[i].primaryKey ? store[i].columnName : '',
					'UcObjLocalPrimaryName': store[i].primaryKey ? UcObj(store[i].columnName) : '',
					'UcObjLocalPrimaryFieldName': store[i].primaryKey ? UcObj(store[i].columnName) : '',
					'lcObjLocalPrimaryName': store[i].primaryKey ? lcObj(store[i].columnName) : '',
					'lcObjLocalPrimaryFieldName': store[i].primaryKey ? lcObj(store[i].columnName) : '',
					'local_primary_type': store[i].primaryKey ? store[i].type.replaceAll('Sequelize.','') : '',
					'UcObjLocalPrimaryType': store[i].primaryKey ? UcObj(store[i].type.replaceAll('Sequelize.','')) : '',
					'UcObjLocalPrimaryFieldType': store[i].primaryKey ? UcObj(store[i].type.replaceAll('Sequelize.','')) : '',
					'lcObjLocalPrimaryFieldType': store[i].primaryKey ? lcObj(store[i].type.replaceAll('Sequelize.','')) : '',
					'lcObjLocalPrimaryType': store[i].primaryKey ? lcObj(store[i].type.replaceAll('Sequelize.','')) : '',

					'local_date_field_name': store[i].type.hasStringAs('DATE') && store[i].references == undefined && !store[i].primaryKey ? store[i].columnName : '',
					'UcObjLocalDateFieldName': store[i].type.hasStringAs('DATE') && store[i].references == undefined && !store[i].primaryKey ? UcObj(store[i].columnName) : '',
					'lcObjLocalDateFieldName': store[i].type.hasStringAs('DATE') && store[i].references == undefined && !store[i].primaryKey ? lcObj(store[i].columnName) : '',

					'local_integer_field_name': store[i].type.hasStringAs('INTEGER') && store[i].references == undefined && !store[i].primaryKey ? store[i].columnName : '',
					'UcObjLocalIntegerFieldName': store[i].type.hasStringAs('INTEGER') && store[i].references == undefined && !store[i].primaryKey ? UcObj(store[i].columnName) : '',
					'lcObjLocalIntegerFieldName': store[i].type.hasStringAs('INTEGER') && store[i].references == undefined && !store[i].primaryKey ? lcObj(store[i].columnName) : '',
					'local_integer_length': store[i].type.hasStringAs('INTEGER') && store[i].references == undefined && !store[i].primaryKey && store[i].length ? store[i].length : '',

					'local_float_field_name': store[i].type.hasStringAs('FLOAT') && store[i].references == undefined && !store[i].primaryKey ? store[i].columnName : '',
					'UcObjLocalFloatFieldName': store[i].type.hasStringAs('FLOAT') && store[i].references == undefined && !store[i].primaryKey ? UcObj(store[i].columnName) : '',
					'lcObjLocalFloatFieldName': store[i].type.hasStringAs('FLOAT') && store[i].references == undefined && !store[i].primaryKey ? lcObj(store[i].columnName) : '',
					'local_float_decimals': store[i].type.hasStringAs('FLOAT') && store[i].references == undefined && !store[i].primaryKey && store[i].decimals ? store[i].decimals : '',
					'local_float_length': store[i].type.hasStringAs('FLOAT') && store[i].references == undefined && !store[i].primaryKey && store[i].length ? store[i].length : '',

					'local_decimal_field_name': store[i].type.hasStringAs('DECIMAL') && store[i].references == undefined && !store[i].primaryKey ? store[i].columnName : '',
					'UcObjLocalDecimalFieldName': store[i].type.hasStringAs('DECIMAL') && store[i].references == undefined && !store[i].primaryKey ? UcObj(store[i].columnName) : '',
					'lcObjLocalDecimalFieldName': store[i].type.hasStringAs('DECIMAL') && store[i].references == undefined && !store[i].primaryKey ? lcObj(store[i].columnName) : '',
					'local_decimal_decimals': store[i].type.hasStringAs('DECIMAL') && store[i].references == undefined && !store[i].primaryKey && store[i].decimals ? store[i].decimals : 5,
					'local_decimal_length': store[i].type.hasStringAs('DECIMAL') && store[i].references == undefined && !store[i].primaryKey && store[i].length ? store[i].length : '',

					'local_double_field_name': store[i].type.hasStringAs('DOUBLE') && store[i].references == undefined && !store[i].primaryKey ? store[i].columnName : '',
					'UcObjLocalDoubleFieldName': store[i].type.hasStringAs('DOUBLE') && store[i].references == undefined && !store[i].primaryKey ? UcObj(store[i].columnName) : '',
					'lcObjLocalDoubleFieldName': store[i].type.hasStringAs('DOUBLE') && store[i].references == undefined && !store[i].primaryKey ? lcObj(store[i].columnName) : '',

					'local_key_field_name': store[i].references == undefined && !store[i].primaryKey && store[i].unique ? store[i].columnName : '',
					'UcObjLocalKeyFieldName': store[i].references == undefined && !store[i].primaryKey && store[i].unique ? UcObj(store[i].columnName) : '',
					'lcObjLocalKeyFieldName': store[i].references == undefined && !store[i].primaryKey && store[i].unique ? lcObj(store[i].columnName) : '',

					'local_tinyint_field_name': store[i].type.hasStringAs('TINYINT') && store[i].references == undefined && !store[i].primaryKey ? store[i].columnName : '',

					'local_string_field_name': store[i].type.hasStringAs('STRING') && store[i].references == undefined && !store[i].primaryKey ? store[i].columnName : '',
					'UcObjLocalStringFieldName': store[i].type.hasStringAs('STRING') && store[i].references == undefined && !store[i].primaryKey ? UcObj(store[i].columnName) : '',
					'lcObjLocalStringFieldName': store[i].type.hasStringAs('STRING') && store[i].references == undefined && !store[i].primaryKey ? lcObj(store[i].columnName) : '',

					'local_text_field_name': store[i].type.hasStringAs('TEXT') && store[i].references == undefined && !store[i].primaryKey ? store[i].columnName : '',
					'UcObjLocalTextFieldName': store[i].type.hasStringAs('TEXT') && store[i].references == undefined && !store[i].primaryKey ? UcObj(store[i].columnName) : '',
					'lcObjLocalTextFieldName': store[i].type.hasStringAs('TEXT') && store[i].references == undefined && !store[i].primaryKey ? lcObj(store[i].columnName) : '',

					'local_varchar_field_name': (store[i].type.hasStringAs('STRING') || store[i].type.hasStringAs('VARCHAR')) && store[i].references == undefined && !store[i].primaryKey ? store[i].columnName : '',
					'local_varchar_name': (store[i].type.hasStringAs('STRING') || store[i].type.hasStringAs('VARCHAR')) && store[i].references == undefined && !store[i].primaryKey ? store[i].columnName : '',
					'UcObjLocalVarcharFieldName': (store[i].type.hasStringAs('STRING') || store[i].type.hasStringAs('VARCHAR')) && store[i].references == undefined && !store[i].primaryKey ? UcObj(store[i].columnName) : '',
					'lcObjLocalVarcharFieldName': (store[i].type.hasStringAs('STRING') || store[i].type.hasStringAs('VARCHAR')) && store[i].references == undefined && !store[i].primaryKey ? lcObj(store[i].columnName) : '',
					'local_varchar_length': (store[i].type.hasStringAs('STRING') || store[i].type.hasStringAs('VARCHAR')) && store[i].references == undefined && !store[i].primaryKey && store[i].length ? store[i].length : '',

					'local_blob_field_name': store[i].type.hasStringAs('BLOB') && store[i].references == undefined && !store[i].primaryKey ? store[i].columnName : '',
					'UcObjLocalBlobFieldName': store[i].type.hasStringAs('BLOB') && store[i].references == undefined && !store[i].primaryKey ? UcObj(store[i].columnName) : '',
					'lcObjLocalBlobFieldName': store[i].type.hasStringAs('BLOB') && store[i].references == undefined && !store[i].primaryKey ? lcObj(store[i].columnName) : '',

					'local_char_field_name': store[i].type.hasStringAs('CHAR') && !store[i].type.hasStringAs('VARCHAR') && store[i].references == undefined && !store[i].primaryKey ? store[i].columnName : '',
					'UcObjLocalCharFieldName': store[i].type.hasStringAs('CHAR') && !store[i].type.hasStringAs('VARCHAR') && store[i].references == undefined && !store[i].primaryKey ? UcObj(store[i].columnName) : '',
					'lcObjLocalCharFieldName': store[i].type.hasStringAs('CHAR') && !store[i].type.hasStringAs('VARCHAR') && store[i].references == undefined && !store[i].primaryKey ? lcObj(store[i].columnName) : '',
					'local_char_binary': store[i].type.hasStringAs('CHAR') && !store[i].type.hasStringAs('VARCHAR') && store[i].references == undefined && !store[i].primaryKey && store[i].binary ? store[i].binary : '',
					'local_char_length': store[i].type.hasStringAs('CHAR') && !store[i].type.hasStringAs('VARCHAR') && store[i].references == undefined && !store[i].primaryKey && store[i].length ? store[i].length : '',

					'local_bigint_field_name': store[i].type.hasStringAs('BIGINT') && store[i].references == undefined && !store[i].primaryKey ? store[i].columnName : '',
					'UcObjLocalBigintFieldName': store[i].type.hasStringAs('BIGINT') && store[i].references == undefined && !store[i].primaryKey ? UcObj(store[i].columnName) : '',
					'lcObjLocalBigintFieldName': store[i].type.hasStringAs('BIGINT') && store[i].references == undefined && !store[i].primaryKey ? lcObj(store[i].columnName) : '',

					'local_boolean_field_name': store[i].type.hasStringAs('BOOLEAN') && store[i].references == undefined && !store[i].primaryKey ? store[i].columnName : '',
					'UcObjLocalBooleanFieldName': store[i].type.hasStringAs('BOOLEAN') && store[i].references == undefined && !store[i].primaryKey ? UcObj(store[i].columnName) : '',
					'lcObjLocalBooleanFieldName': store[i].type.hasStringAs('BOOLEAN') && store[i].references == undefined && !store[i].primaryKey ? lcObj(store[i].columnName) : '',

					'local_index_field_name': !store[i].primaryKey && store[i].references != undefined ? store[i].columnName : '',
					'foreign_index_field_name': !store[i].primaryKey && store[i].references != undefined ? store[i].references.key : '',
					'UcObjLocalIndexFieldName': !store[i].primaryKey && store[i].references != undefined ? UcObj(store[i].columnName) : '',
					'lcObjLocalIndexFieldName': !store[i].primaryKey && store[i].references != undefined ? lcObj(store[i].columnName) : '',
					'local_index_type': !store[i].primaryKey && store[i].references != undefined && store[i].type ? store[i].type : '',
					'UcObjLocalIndexFieldType': !store[i].primaryKey && store[i].references != undefined && store[i].type ? UcObj(store[i].type) : '',
					'lcObjLocalIndexFieldType': !store[i].primaryKey && store[i].references != undefined && store[i].type ? lcObj(store[i].type) : '',

					'local_primary_field_properties': store[i].primaryKey && store[i].references != undefined ? `
						references: {
		          model: {tableName:'${store[i].references.model.tableName}'},
		          key: '${store[i].references.key}',
		        },
		        onUpdate: 'CASCADE', 
		        onDelete: 'SET NULL'` : '',

					'local_group_field_name': store[i].columnName.hasString('_group') && store[i].columnName.split('_group')[1] == '' && (store[i].columnName.split('_group')[0].length == 3 || store[i].columnName.split('_group')[0].hasString('_')) ? store[i].columnName : '',

					'local label field name': store[i].columnName.replaceAll('_',' '),
					'local label primary field name': store[i].primaryKey ? store[i].columnName.replaceAll('_',' ') : '',
					'local label primary field type': store[i].primaryKey ? store[i].type.replaceAll('_',' ') : '',
					'local label date field name': store[i].type.hasStringAs('DATE') && store[i].references == undefined && !store[i].primaryKey ? store[i].columnName.replaceAll('_',' ') : '',
					'local label tinyint field name': store[i].type.hasStringAs('TINYINT') && store[i].references == undefined && !store[i].primaryKey ? store[i].columnName.replaceAll('_',' ') : '',
					'local label key field name': store[i].references == undefined && !store[i].primaryKey && store[i].unique ? store[i].columnName.replaceAll('_',' ') : '',
					'local label integer field name': store[i].type.hasStringAs('INTEGER') && store[i].references == undefined && !store[i].primaryKey ? store[i].columnName.replaceAll('_',' ') : '',
					'local label blob field name': store[i].type.hasStringAs('BLOB') && store[i].references == undefined && !store[i].primaryKey ? store[i].columnName.replaceAll('_',' ') : '',
					'local label char field name': store[i].type.hasStringAs('CHAR') && !store[i].type.hasStringAs('VARCHAR') && store[i].references == undefined && !store[i].primaryKey ? store[i].columnName.replaceAll('_',' ') : '',
					'local label string field name': store[i].type.hasStringAs('STRING') && store[i].references == undefined && !store[i].primaryKey ? store[i].columnName.replaceAll('_', ' ') : '',
					'local label text field name': store[i].type.hasStringAs('TEXT') && store[i].references == undefined && !store[i].primaryKey ? store[i].columnName.replaceAll('_', ' ') : '',
					'local label varchar field name': (store[i].type.hasStringAs('STRING') || store[i].type.hasStringAs('VARCHAR')) && store[i].references == undefined && !store[i].primaryKey ? store[i].columnName.replaceAll('_', ' ') : '',
					'local label varchar field length': (store[i].type.hasStringAs('STRING') || store[i].type.hasStringAs('VARCHAR')) && store[i].references == undefined && !store[i].primaryKey && store[i].length ? store[i].length : '',
					'local label bigint field name': store[i].type.hasStringAs('BIGINT') && store[i].references == undefined && !store[i].primaryKey ? store[i].columnName.replaceAll('_',' ') : '',
					'local label boolean field name': store[i].type.hasStringAs('BOOLEAN') && store[i].references == undefined && !store[i].primaryKey ? store[i].columnName.replaceAll('_',' ') : '',
					'local label index field name': !store[i].primaryKey && store[i].references != undefined ? store[i].columnName.replaceAll('_',' ') : '',

					'foreign_field_name': store[i].references != undefined ? store[i].references.key : '',
					'foreign_store_field_name_value': store[i].references != undefined ? store[i].references.key : '',

					//specials foreigns
					UcObjForeignStoreFieldNameWithLabel: store[i].columnName ? UcObj(store[i].columnName).capitalize() : '',
					UcObjForeignStoreStatusFieldNameWithLabel: storeLabel.columnName ? storeLabel && storeLabel.columnName.hasStringAs('par') ? UcObj(storeLabel.columnName).capitalize() : UcObj('par_cod') : '',
					foreign_store_field_name_label: store[i].columnName ? store[i].columnName : '',

					//specials local
					UcObjlocalStoreFieldName: store[i].references != undefined ? UcObj(store[i].columnName).capitalize().replaceAll('id','').replaceAll('Id','') : '',
					UcObjlocalStoreIndexStatusFieldName: storeValue && storeValue.references != undefined && storeValue.columnName.hasStringAs('status') ? UcObj(storeValue.columnName).capitalize().replaceAll('id','').replaceAll('Id','') : '',
					lcObjlocalStoreIndexFieldName: store[i].references != undefined ? lcObj(store[i].columnName).capitalize().replaceAll('id','').replaceAll('Id','') : '',
					local_store_index_field_name: store[i].references != undefined ? store[i].columnName.replaceAll('_id','').replaceAll('_Id','').replaceAll('Id','').replaceAll('id','') : '',

					typeAngular: getTypesAngular(store[i].type),
					typeExtjs: getTypesExtJs(store[i].type),
					typeMongo: getTypesMongo(store[i].type),
					typeSequelize: getTypesSequlize(store[i].type),

					//local table
					"local_table_name": store[i].localTable,
					"local_s_table_name": sing(store[i].localTable),
					"local-s-table-name": sing(store[i].localTable).replace(/_/g, '-'),
					"local-table-name": store[i].localTable.replace(/_/g, '-'),

					//foreign table
					"foreign_table_name": !store[i].primaryKey && store[i].references != undefined ? store[i].references.model.tableName : '',
					"foreign_table_primary": !store[i].primaryKey && store[i].references != undefined ? store[i].references.key : '',
					"foreign_s_table_name": !store[i].primaryKey && store[i].references != undefined ? sing(store[i].references.model.tableName) : '',
					"foreign-s-table-name": !store[i].primaryKey && store[i].references != undefined ? sing(store[i].references.model.tableName).replace(/_/g, '-') : '',
					"foreign-table-name": !store[i].primaryKey && store[i].references != undefined ? store[i].references.model.tableName.replace(/_/g, '-') : ''
				};
			} else {
				key = {
					//Fields
					"#userCreated": isNew ? "Rafael Gutierrez Gaspar" : "",
					"#dateCreated": isNew ? date.toString() : '',
					"#timeCreated": isNew ? date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() : '',
					"#userUpdated": "Rafael Gutierrez Gaspar",
					"#dateUpdated": date.toString(),
					"#timeUpdated": date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(),

					UcObjPLocalDbTableName: UcObj(store[i].columnName).capitalize(),
					lcObjPLocalDbTableName: lcObj(store[i].columnName),
					UcObjSLocalDbTableName: UcObj(sing(store[i].columnName)).capitalize(),
					lcObjSLocalDbTableName: lcObj(sing(store[i].columnName)),
					lcObjLocalDbTableName: lcObj(store[i].columnName),
					UcObjLocalDbTableName: UcObj(store[i].columnName),
					"local_dbTable_name": store[i].columnName.replaceAll('-','_'),
					"local_dbTable_s_name": sing(store[i].columnName.replaceAll('-','_')),
					"local-dbTable-s-name": sing(store[i].columnName).replace(/_/g, '-'),
					"local-dbTable-name": store[i].columnName.replace(/_/g, '-'),
				};
			}
			keys.push(key);
		} catch (e) {
			console.log(e)
		}
	}
	return keys;
}

function updateForeigns(fields, tableName = null){
	if(!fields){
		//console.log('yes');
	}
	let keys = Object.keys(fields);
	let values = Object.values(fields);
	keys.forEach((key, index)=> {
		if(tableName) {
			fields[key].localTable = tableName.replaceAll('-','_');
		}
		if (key == 'createdById' || key == 'updatedById') {
			fields[key].references = {};
			fields[key].references.model = {};
			fields[key].references.model.tableName = getDefaultTable('user');
			fields[key].foreignTable = getDefaultTable('user');
			fields[key].references.key = '_id';
		} else if (key.indexOf('par_status_id') >= 0) {
			fields[key].references = {};
			fields[key].references.model = {};
			fields[key].references.model.tableName = getDefaultTable('param');
			fields[key].foreignTable = getDefaultTable('param');
			fields[key].references.key = '_id';
		}
	});
	return fields;
}

function asArray(obj, props = {}) {
	try {
		let array = [];
		if(obj) {
			if (obj.length) {
				return obj;
			}
			if(typeof obj == 'object') {
				let keys = Object.keys(obj);
				let values = Object.values(obj);
				keys.forEach((key,index) => {
					if(Object.keys(props).length) {
						if(props.takeColName){
							if(props.as){
								values[index][props.as] = key;
							} else {
								values[index].columnName = key;
							}
						}
					} else {
						values[index].columnName = key;
					}
					if(typeof values[index] == 'object') {
						array.push(values[index]);
					}
				})
			}
			if(array.length) {
				return array;
			}
		}
		return [];
	} catch (e) {
		console.log(e);
	}
}

function getForeignsFromFields(fields, tableName = null) {
	let foreigns = {};
	let keys = Object.keys(fields);
	let values = Object.values(fields);
	keys.forEach((key, index)=> {
		if(values[index].references != undefined) {
			foreigns[key] = values[index];
			foreigns[key].foreignTable = values[index].references.model.tableName;
		}
	});
	return foreigns;
}

function updateContent(content, fields, isNew = true) {
	let objects = keysToReplace(asArray(fields), isNew);
	objects.forEach((object, index) => {
		let keys = Object.keys(object);
		let values = Object.values(object);
		keys.forEach((key, index) => {
			if (content.indexOf(key) >= 0) {
				content = content.replaceAll(key, values[index]);
				content = content.replaceAll(key, values[index]);
				content = content.replaceAll(key, values[index]);
				content = content.replaceAll(key, values[index]);
				content = content.replaceAll(key, values[index]);
			}
		});
	});
	return content;
}
let objSpecialKeys = {}, aSpecialFields = [], aSpecialKeys = [
		'UcObjForeignStoreFieldNameWithLabel',
		'local_group_field_name',
		'foreign_store_field_name_label',
	];
let fieldSettings = [
	'local_primary_autoincrement',
	'local_varchar_length',
	'local_char_length',
	'local_integer_length',
	'local_decimal_length',
	'local_decimal_decimals',
	'local_float_length',
	'local_float_decimals',
	'local_double_length',
	'local_double_decimals',
	'local_char_length',
	'local_char_binary',
]

function setDash(table) {
	if(table.indexOf('_') >= 0) {
		return table.replaceAll('_','-');
	} else {
		return table;
	}
}

function setDashUnder(table) {
	if(table.indexOf('-') >= 0) {
		return table.replaceAll('-','_');
	} else {
		return table;
	}
}

function fillSpace(space, aFields, section, table, distinct = true) {
	try {
		let filled = '';
		let filledFields = '';
		let toReturn = '';
		let replaced = [];
		let foreignFields = [];
		let hasSpecialKey = false;
		let specialContent = '';
		let beginTablesEsTag = '<es-';
		//let beginTablesEsTags = [];
		// for (let l = 0 ; l < codeSections.length ; l++) {
		// 	let codeSection = codeSections[l];
		// 	beginTablesEsTags.push(`<${codeSection}>`);
		// }
		let openTableTag = '',closeTableTag = '',currentOpenTableTag = '',currentCloseTableTag = '',aCurrentTags = [], aOccurrrencies = [],
			openFieldTag = '',closeFieldTag = '',currentOpenFieldTag = '',currentCloseFieldTag = '',currentOpenFieldKey = '',spaceTableTag = '',spaceFieldTag = '';

		if(aFields) {
			// if(section == 'sequelizeStoreFilterServiceFunctions') {
			// 	console.log(true);
			// }
			let objects = keysToReplace(aFields);
			let tableName = '';
			let foreignTableNames = [];
			let tableFields = Object.values(DB);
			//for (let m = 0 ; m < beginTablesEsTags.length ; m++) {
				//let beginTablesEsTag = beginTablesEsTags[m];
			if(space.indexOf('</') >=0) {
				let dbFields = asArray(DB[table]);
				aOccurrrencies = space.split('</');
				for (let k = 1 ; k < aOccurrrencies.length ; k++) {
					let occurency = aOccurrrencies[k];
					currentOpenFieldKey = occurency.split('>')[0];
					currentOpenFieldTag = currentOpenFieldKey ? '<'+currentOpenFieldKey+'>' : '';
					currentCloseFieldTag = currentOpenFieldTag ? '</'+currentOpenFieldKey+'>' : '';
					if(currentOpenFieldTag && !aCurrentTags.find(param => param.open == currentOpenFieldTag)){
						aCurrentTags.push({open:currentOpenFieldTag, close:currentCloseFieldTag});
					}
				}

				for (let i = 0 ; i < tableFields.length ; i++) {
					let fields = tableFields[i];
					let aFields = asArray(fields);
					for (let j = 0 ; j < aFields.length ; j ++) {
						let field = aFields[j];

						openFieldTag = '<'+setDash(field.columnName)+'>';
						closeFieldTag = '</'+setDash(field.columnName)+'>';
						if(space.hasString('<'+setDash(field.columnName)+'>')) {
							spaceFieldTag = space.split(openFieldTag)[1];
							spaceFieldTag = spaceFieldTag.split(closeFieldTag)[0];
							let emptyKey = '', aGeneralEmptyValues = [];
							for (let k = 0 ; k < objects.length ; k++) {
								let objectItems = objects[k];
								if(objectItems.local_field_name == field.columnName) {
									let aEmpties = [];
									let keys = Object.keys(objectItems);
									let values = Object.values(objectItems);
									for (let l = 0 ; l < keys.length ; l++) {
										if (spaceFieldTag.indexOf(keys[l]) >= 0) {
											if(values[l] == '') {
												aEmpties.push({key: keys[l], value: values[l]})
											}
										}
									}
									if(aEmpties.length) {
										aGeneralEmptyValues.push({field:objectItems.local_field_name, emptyKeys:aEmpties})
									}
									break;
								}
							}
							if(aGeneralEmptyValues.length) {
								let addIt = false;
								for (let z = 0 ; z < aGeneralEmptyValues.length ; z++) {
									let generalEmptyValues = aGeneralEmptyValues[z];
									for (let w = 0 ; w < generalEmptyValues.emptyKeys.length ; w++) {
										let emptyKey = generalEmptyValues.emptyKeys[w];
										if(spaceFieldTag.indexOf(emptyKey.key) >= 0) {
											addIt = false
										}
									}
									if(spaceFieldTag.indexOf(generalEmptyValues.field) >= 0) {
										//addIt = true
									}
								}
								if (addIt) {
									space = space.split(openFieldTag)[0]+spaceFieldTag+space.split(closeFieldTag)[1];
								} else {
									space = space.split(openFieldTag)[0]+space.split(closeFieldTag)[1];
								}
							} else {
								if (DB[table][field.columnName] && Object.keys(DB[table][field.columnName]).length) {
									space = space.split(openFieldTag)[0]+spaceFieldTag+space.split(closeFieldTag)[1];
								} else {
									space = space.split(openFieldTag)[0]+space.split(closeFieldTag)[1];
								}
							}
						} else {
							if(space.split(closeFieldTag)[1]!=undefined) {
								space = space.split(openFieldTag)[0]+space.split(closeFieldTag)[1];
							}
						}
					}

					openTableTag = '<'+setDash(table)+'>';
					closeTableTag = '</'+setDash(table)+'>';
					if(space.hasString(`<${setDash(fields.columnName)}>`)){
						spaceTableTag = space.split(openTableTag)[1];
						spaceTableTag = spaceTableTag.split(openTableTag)[0];
						space = space.split(openTableTag)[0]+spaceTableTag+space.split(closeTableTag)[1];
					} else {
						if(space.split(closeTableTag)[1] != undefined) {
							space = space.split(openTableTag)[0]+space.split(closeTableTag)[1];
						}
					}
				}
			}

			if (aCurrentTags.length && space.indexOf('</') >= 0) {
				for (let l = 0 ; l < aCurrentTags.length ; l++) {
					let currentTag = aCurrentTags[l];
					if(space.indexOf(currentTag.open) >= 0) {
						space = space.split(currentTag.open)[0]+space.split(currentTag.close)[1];
					}
				}
			}

			filled = space;
			for (let i = 0 ; i < objects.length ; i++) {
				let object = objects[i];
				let objectKeys = Object.keys(objects[i]);
				let objectValues = Object.values(objects[i]);
				// if(object['UcObjlocalStoreFieldName'] == '') {
				// 	console.log(true);
				// }
				if(distinct) {
					foreignFields = [];
					replaced = [];
					if( space.hasStringAs('foreign') && objects[i].foreign_table_name != '' && (!foreignTableNames.isInto(objects[i].foreign_table_name) || space.hasStringAs('field'))) {

						filled = space;
						// special Keys
						aSpecialKeys.forEach(specialKey => {
							if(space.indexOf(specialKey) >= 0) {
								// if(specialKey == 'UcObjForeignStoreStatusFieldNameWithLabel' ){
								// 	console.log(true);
								// }
								hasSpecialKey = true;
								aSpecialFields = getForeignFieldsToBeUsedAsLabel(aFields[i].foreign);
								objSpecialKeys[specialKey] = '';
								objSpecialKeys[specialKey] = replaceThisKey(aSpecialFields,specialKey);
							}
						});
						if(space.hasStringAs('field')) {
							foreignTableNames = [];
						}
						if(aFields[i].references != undefined && (setDash(aFields[i].references.model.tableName) != setDash(aFields[i].localTable) || space.hasStringAs('ref') || space.hasStringAs('store') || space.hasStringAs('local_index_field_name'))){
							let foreignToLocalTable = setDash(aFields[i].references.model.tableName) == setDash(aFields[i].localTable);
							if(hasSpecialKey) {
								hasSpecialKey = false;
								[objSpecialKeys,aSpecialFields,aSpecialKeys,objects[i],filled,space,foreignFields,replaced, aEmptyValues] = setFillSpecialSpace(objSpecialKeys,aSpecialFields,aSpecialKeys,objects[i],filled,space,foreignFields,replaced);
							} else {
								[foreignTableNames,objects[i],space,filled,replaced,foreignToLocalTable, aEmptyValues] = setFillForeignSpace(foreignTableNames,objects[i],space,filled,replaced,foreignToLocalTable);
							}
							//filled = setFillQueryObjects_1(space, filled, aFields, objects[i], section, table, foreignTableNames);
							//filled = setFillQueryObjects_1(space, filled, aFields, objects[i], section, table, foreignTableNames);

							// if (object != '') {
								if(object.localTable != object.foreign_table_name) {
									if (!aEmptyValues.length) {
										if (replaced.length) {
											toReturn += filled;
										}
									}
								}
							// }
						}
					} else if((space.indexOf('Foreign') < 0 && space.indexOf('foreign') < 0)){
						let keys = Object.keys(objects[i]);
						let values = Object.values(objects[i]);
						if(space.indexOf('Field') >= 0 || space.indexOf('field') >= 0) {
							filled = space;
						}
						let aIndexJ = [], aEmptyValues = [], aValues = [];
						for (let j = 0 ; j < keys.length ; j++) {
							if (space.indexOf(keys[j]) >= 0) {
								if(values[j] != '') {
									filled = filled.replaceAll(keys[j], values[j]);
									if(toReturn.indexOf(filled) >= 0){
										filled = space;
										aEmptyValues.push({key: keys[j], value: values[j]});
									} else {
										replaced.push({key: keys[j], value: values[j]});
										aIndexJ.push(j);
									}
								} else {
									let itDoesntExists = true;
									for (let z = 0 ; z < objects.length ; z++) {
										let bkpObject = objects[z];
										if(bkpObject[keys[j]] != '') {
											filled = filled.replaceAll(keys[j], bkpObject[keys[j]]);
											if(toReturn.indexOf(filled) >= 0){
												filled = space;
											} else {
												replaced.push({key: keys[j], value: bkpObject[keys[j]]});
												aIndexJ.push(j);
												itDoesntExists = false;
											}
											break;
										}
									}
									if(itDoesntExists) {
										aEmptyValues.push({key: keys[j], value: values[j]});
									}
								}
							}
						}

						if (!aEmptyValues.length) {
							if (replaced.length) {
								if (space.indexOf('Field') >= 0 || space.indexOf('field') >= 0) {
									toReturn += filled;
								} else {
									toReturn = filled;
								}
							}
						}
					} else {

					}
				} else {
					foreignTableNames.push(objects[i].foreign_table_name);
					let keys = Object.keys(objects[i]);
					let values = Object.values(objects[i]);
					for (let j = 0 ; j < keys.length ; j++) {
						if (space.indexOf(keys[j]) >= 0 && values[j] != '') {
							filled = filled.replaceAll(keys[j], values[j]);
						}
					}
					if (values[i] != '') {
						toReturn += filled;
					}
				}
			}
		} else {
				let aDb = asArray(DB);
				let objects = keysToReplace(aDb);
				let tables = Object.keys(DB);
				let modules = [];
				for (let i = 0 ; i < tables.length ; i++) {
					let table = tables[i];
					[modulo,submodulo1,submodulo2,submodulo3,submodulo4,submodulo5] = table.split('_');
				}
				for (let j = 0 ; j < objects.length ; j++) {
					let object = objects[j];
					let fields = Object.keys(DB[object.local_dbTable_name]);
					let keys = Object.keys(objects[j]);
					let values = Object.values(objects[j]);
					let allRelations = [];
					filled = space;
					replaced = [];
					let emptyValues = [];
					for (let i = 0 ; i < keys.length ; i++) {
						if (space.indexOf(keys[i]) >= 0) {
							if (values[i] != '') {
								filled = filled.replaceAll(keys[i], values[i]);
								replaced.push({key: keys[i], value: values[i]});
							} else {
								emptyValues.push({key: keys[i], value: values[i]})
							}
						}
					}
					if (replaced.length) {
						if (!emptyValues.length) {
							toReturn += filled;
						}
					}
				}
		}
		if(toReturn) {
			return toReturn;
		}
		return '';
	}
	 catch (e) {
		console.log(e);
	}
}

function setFillForeignSpace(foreignTableNames,object,space,filled,replaced,foreignToLocalTable) {
	let keys = Object.keys(object);
	let values = Object.values(object);
	let aEmptyValues = [];
	if(!foreignTableNames.isInto(object.foreign_table_name) || space.hasStringAs('field')) {
		foreignTableNames.push(object.foreign_table_name);
		for (let j = 0 ; j < keys.length ; j++) {
			if (space.indexOf(keys[j]) >= 0 ) {
				if(values[j] != '') {
					filled = filled.replaceAll(keys[j], values[j]);
					replaced.push({key: keys[j], value: values[j]});
				} else {
					aEmptyValues.push({key: keys[j], value: values[j]});
				}
			}
		}
		if(space.hasString('belongsTo') && foreignToLocalTable) {
			let aFilled = filled.split('\n');
			aFilled.forEach(toFill => {
				if(toFill.hasString('belongsTo')) {
					filled = '\n'+toFill+'\n';
				}
			})
		}
	}
	return [foreignTableNames,object,space,filled,replaced,foreignToLocalTable,aEmptyValues];
}

function setFillQueryObjects_1(space, filled, fields, objectKeys, tag, table, foreignTableNames) {
	let sqlObj, defaultProjects, interDefaultProjects;
	let foreignFields = fields.filter(param => param.foreign != undefined);
	let fieldStatus = fields.find(param => param.columnName.hasStringAs('status'));
	let beginSpecialKey, firstSpecialKey, secondFindBeginSpecialKey;
	if(filled.hasStringAs('arraySqlLevel0Include')){
		// console.log(true);
		sqlObj = '';
		sqlObj += `     {
		                  attributes: select.filterByModel(models.sequelize.${lcObj(fieldStatus.localTable)}.rawAttributes),
											where: { ${fieldStatus.columnName}: enabled._id },
											include: [
												`;
	 	for (let i = 0 ; i < foreignFields.length ; i++) {
	 		let foreignField = foreignFields[i];
	 	  if(foreignField.columnName == objectKeys.foreign_store_field_name_label) {
		    sqlObj += ` { attributes: select.filterByModel(models.sequelize.${lcObj(foreignField.foreignTable)}.rawAttributes), where: { id: ids }, model: models.sequelize.${lcObj(foreignField.foreignTable)}, as: '${objectKeys.lcObjSLocalTableName + objectKeys.UcObjRefLocalFieldName}' },
		    `;
	    }
	  }
	 	sqlObj += `       ]
										}`;
	 	filled = filled.replaceAll('arraySqlLevel0Include', sqlObj)
	}
	if(filled.hasStringAs('arraySqlLevel1Include')){
		// console.log(true);
		sqlObj = '';
		sqlObj += `     {
											attributes: select.filterByModel(models.sequelize.${lcObj(fieldStatus.localTable)}.rawAttributes),
											where: { ${fieldStatus.columnName}: enabled._id },
											include: [
												`;
	 	for (let i = 0 ; i < foreignFields.length ; i++) {
	 		let foreignField = foreignFields[i];
	 	  if(foreignField.columnName == objectKeys.foreign_store_field_name_label) {
		    sqlObj += `     { attributes: select.filterByModel(models.sequelize.${lcObj(foreignField.foreignTable)}.rawAttributes), where: { id: ids }, model: models.sequelize.${lcObj(foreignField.foreignTable)}, as: '${objectKeys.lcObjSLocalTableName + objectKeys.UcObjRefLocalFieldName}' },
		    `;
	    }	else {
		    sqlObj += `     { attributes: select.filterByModel(models.sequelize.${lcObj(foreignField.foreignTable)}.rawAttributes), model: models.sequelize.${lcObj(foreignField.foreignTable)}, as: '${lcObj(sing(foreignField.localTable)) + UcObj(foreignField.columnName.replaceAll('_id','').replaceAll('id','').replaceAll('Id',''))}' },
		    `;
	    }
	  }
	 	sqlObj += `       ]
										}`;
	 	filled = filled.replaceAll('arraySqlLevel1Include', sqlObj)
	}
	if(filled.hasStringAs('arraySqlLevel2Include')){
		// console.log(true);
		sqlObj = '';
		sqlObj += `     { attributes: select.filterByModel(models.sequelize.${lcObj(fieldStatus.localTable)}.schema.paths),
											where: { ${fieldStatus.columnName}: enabled._id },
											include: [
											`;
	 	for (let i = 0 ; i < foreignFields.length ; i++) {
	 		let foreignField = foreignFields[i];
	 	  if(foreignField.columnName == objectKeys.foreign_store_field_name_label) {
		    sqlObj += `     { attributes: select.filterByModel(models.sequelize.${lcObj(foreignField.foreignTable)}.schema.paths), where: { id: ids }, model: models.sequelize.${lcObj(foreignField.foreignTable)}, as: '${objectKeys.lcObjSLocalTableName + objectKeys.UcObjRefLocalFieldName}',
		                      include: [
		    `;

		    let aForeignForeignFields = asArray(foreignField.foreign).filter(param => param.foreign != undefined);
		    let foreignObjectKeys = keysToReplace(aForeignForeignFields);
		    for (let j = 0 ; j < aForeignForeignFields.length ; j++) {
			    let foreignForeignField = aForeignForeignFields[j];
			    let foreignObjectKey = foreignObjectKeys[j];
			    if (foreignForeignField.columnName == foreignObjectKey.foreign_store_field_name_label) {
				    sqlObj += `     { attributes: select.filterByModel(models.sequelize.${lcObj(foreignForeignField.foreignTable)}.schema.paths), model: models.sequelize.${lcObj(foreignForeignField.foreignTable)}, as: '${lcObj(sing(foreignForeignField.localTable)) + UcObj(foreignForeignField.columnName.replaceAll('_id','').replaceAll('id','').replaceAll('Id',''))}' },
		        `;
			    }
		    }
		    sqlObj += `       ]
										},`;

	    }	else {
		    sqlObj += `     { attributes: select.filterByModel(models.sequelize.${lcObj(foreignField.foreignTable)}.schema.paths), model: models.sequelize.${lcObj(foreignField.foreignTable)}, as: '${lcObj(sing(foreignField.localTable)) + UcObj(foreignField.columnName.replaceAll('_id','').replaceAll('id','').replaceAll('Id',''))}',
		                      include: [
		                    `;

		    let aForeignForeignFields = asArray(foreignField.foreign).filter(param => param.foreign != undefined);
		    let foreignObjectKeys = keysToReplace(aForeignForeignFields);
		    for (let j = 0 ; j < aForeignForeignFields.length ; j++) {
			    let foreignForeignField = aForeignForeignFields[j];
			    let foreignObjectKey = foreignObjectKeys[j];
			    if (foreignForeignField.columnName == foreignObjectKey.foreign_store_field_name_label) {
				    sqlObj += `     { attributes: select.filterByModel(models.sequelize.${lcObj(foreignForeignField.foreignTable)}.schema.paths), model: models.sequelize.${lcObj(foreignForeignField.foreignTable)}, as: '${lcObj(sing(foreignForeignField.localTable)) + UcObj(foreignForeignField.columnName.replaceAll('_id','').replaceAll('id','').replaceAll('Id',''))}' },
		        `;
			    }
		    }
		    sqlObj += `       ]
										},`;
	    }
	  }
	 	sqlObj += `       ]
										}`;
	 	filled = filled.replaceAll('arraySqlLevel2Include', sqlObj)
	}
	if(filled.hasStringAs('arrayMongoLevel1Aggregate')){
			// console.log(true);
			sqlObj = '';
		  for (let i = 0 ; i < foreignFields.length ; i++) {
		    let foreignField = foreignFields[i];
		    if(i == 0) {
					defaultProjects = `[ 
											{ $project: helpers.setByModel(project, models.mongoose.${lcObj(foreignField.localTable)}.schema.paths, [
											`;
			  }
		    if(foreignField.columnName == objectKeys.foreign_store_field_name_label) {
			    defaultProjects += `'${objectKeys.local_field_name}',`;
			    sqlObj += `	
			                { $match: { ${fieldStatus.columnName}: idEnabled } },
			                { $sort : { id : 1} },
			                { $lookup: {
													from: '${foreignField.foreignTable}', 
													as: '${objectKeys.lcObjSLocalTableName + objectKeys.UcObjRefLocalFieldName}', 
													let: { ${objectKeys.local_field_name}: '$${objectKeys.local_field_name}'},
													pipeline: [ 
														{ $project: helpers.setByModel(project, models.mongoose.${lcObj(foreignField.foreignTable)}.schema.paths, ['_id','id']) },
														{ $match: { $expr: { $and: [
															{ $eq: ['$_id','$$${objectKeys.local_field_name}'] },
															{ $in: ["$id", ids] }
													] } } }]
											} },
											{ $unwind: '$${objectKeys.lcObjSLocalTableName + objectKeys.UcObjRefLocalFieldName}' },
											`;
		    }	else {
			    defaultProjects += `'${foreignField.columnName}',`;
			    sqlObj += `	
			                {	$lookup: {
													from: '${foreignField.foreignTable}', 
													as: '${lcObj(sing(foreignField.localTable)) + UcObj(foreignField.columnName.replaceAll('_id','').replaceAll('id','').replaceAll('Id',''))}',
													let: {${foreignField.columnName}: '$${foreignField.columnName}'},
													pipeline: [
														{ $project: helpers.setByModel(project,models.mongoose.${lcObj(foreignField.foreignTable)}.schema.paths, ['_id']) },
														{ $match: {
																$expr: {
																	$and: [
																		{$eq: ["$_id", "$$${foreignField.columnName}"]},
																	]
																}
															}
														},
													]
											} },
											{ $unwind: '$${lcObj(sing(foreignField.localTable)) + UcObj(foreignField.columnName.replaceAll('_id','').replaceAll('id','').replaceAll('Id',''))}' },
											`;
		    }
		  }
			defaultProjects += `]) },`;
			sqlObj = defaultProjects + sqlObj;
		  sqlObj += `
					]`;
		  filled = filled.replaceAll('arrayMongoLevel1Aggregate', sqlObj)
	}

	if(filled.hasStringAs('arrayMongoLevel2Aggregate')){
		// console.log(true);
		sqlObj = '';

		// begin first loop
	 	for (let i = 0 ; i < foreignFields.length ; i++) {
	 		let foreignField = foreignFields[i];
		  if(i == 0) {
			  defaultProjects = `[ 
			              { $project: helpers.setByModel(project, models.mongoose.${lcObj(foreignField.localTable)}.schema.paths, [
			              `;
		  }
	 	  if(foreignField.columnName == objectKeys.foreign_store_field_name_label) {
		    defaultProjects += `'${objectKeys.local_field_name}',`;
		    sqlObj += `	
		                { $match: { ${fieldStatus.columnName}: idEnabled } },
		                { $sort : { id : 1} },
		                { $lookup: {
												from: '${foreignField.foreignTable}', 
												as: '${objectKeys.lcObjSLocalTableName + objectKeys.UcObjRefLocalFieldName}', 
												let: { ${objectKeys.local_field_name}: '$${objectKeys.local_field_name}'},
												pipeline: [
													{ $project: helpers.setByModel(project,models.mongoose.${lcObj(foreignField.foreignTable)}.schema.paths, ['id',${getStrIndexFields(foreignField.foreign)}]) }, 
													{ $match: { $expr: { $and: [
														{ $eq: ['$_id','$$${objectKeys.local_field_name}'] },
														{ $in: ['$id', ids] }
													] } } }
												]
										} },
										{ $unwind: { path: '$${objectKeys.lcObjSLocalTableName + objectKeys.UcObjRefLocalFieldName}', preserveNullAndEmptyArrays: true } },
										`;
		    let aForeignForeignFields = asArray(foreignField.foreign).filter(param => param.foreign != undefined);
		    let foreignObjectKeys = keysToReplace(aForeignForeignFields);


		    // begin intern second loop
		    for (let j = 0 ; j < aForeignForeignFields.length ; j++) {
			    let foreignForeignField = aForeignForeignFields[j];
			    let foreignObjectKey = foreignObjectKeys[j];
			    if (foreignForeignField.columnName == foreignObjectKey.foreign_store_field_name_label) {
				    sqlObj += `   
				                  {	$lookup: { 
															from: '${foreignForeignField.foreignTable}',
															as: '${objectKeys.lcObjSLocalTableName + objectKeys.UcObjRefLocalFieldName}.${lcObj(sing(foreignForeignField.localTable)) + UcObj(foreignForeignField.columnName.replaceAll('_id','').replaceAll('id','').replaceAll('Id',''))}',
															let: {${foreignForeignField.columnName}: '$${objectKeys.lcObjSLocalTableName + objectKeys.UcObjRefLocalFieldName}.${foreignForeignField.columnName}'},
															pipeline: [
																{ $project: helpers.setByModel(project,models.mongoose.${lcObj(foreignForeignField.foreignTable)}.schema.paths, ['_id']) },
																{ $match: {
																		$expr: {
																			$and: [
																				{$eq: ["$_id", "$$${foreignForeignField.columnName}"]},
																			]
																		}
																	}
																},
															]
													} },
													{ $unwind: { path: '$${objectKeys.lcObjSLocalTableName + objectKeys.UcObjRefLocalFieldName}.${lcObj(sing(foreignForeignField.localTable)) + UcObj(foreignForeignField.columnName.replaceAll('_id','').replaceAll('id','').replaceAll('Id',''))}', preserveNullAndEmptyArrays: true } },
										`;
			    }
		    }

	    }	else {
		    defaultProjects += `'${foreignField.columnName}',`;
		    sqlObj += `	 
										{	$lookup: {
												from: '${foreignField.foreignTable}', 
												as: '${objectKeys.lcObjSLocalTableName + UcObj(foreignField.columnName.replaceAll('_id','').replaceAll('id','').replaceAll('Id',''))}',
												let: {${foreignField.columnName}: '$${foreignField.columnName}'},
												pipeline: [
														{ $project: helpers.setByModel(project,models.mongoose.${lcObj(foreignField.foreignTable)}.schema.paths, [${getStrIndexFields(foreignField.foreign)}]) },
														{ $match: {
																$expr: {
																	$and: [
																		{ $eq: ["$_id", "$$${foreignField.columnName}"] },
																	]
																}
														} },
												]
										} },
										{ $unwind: { path: '$${objectKeys.lcObjSLocalTableName + UcObj(foreignField.columnName.replaceAll('_id','').replaceAll('id','').replaceAll('Id',''))}', preserveNullAndEmptyArrays: true } },
										`;

		    let aForeignForeignFields = asArray(foreignField.foreign).filter(param => param.foreign != undefined);
		    let foreignObjectKeys = keysToReplace(aForeignForeignFields);
		    for (let j = 0 ; j < aForeignForeignFields.length ; j++) {
			    let foreignForeignField = aForeignForeignFields[j];
			    let foreignObjectKey = foreignObjectKeys[j];
			    if (foreignForeignField.columnName == foreignObjectKey.foreign_store_field_name_label) {
				    sqlObj += `   
				                  {	$lookup: { 
															from: '${foreignForeignField.foreignTable}', 
															as: '${objectKeys.lcObjSLocalTableName + UcObj(foreignField.columnName.replaceAll('_id','').replaceAll('id','').replaceAll('Id',''))}.${lcObj(sing(foreignForeignField.localTable)) + UcObj(foreignForeignField.columnName.replaceAll('_id','').replaceAll('id','').replaceAll('Id',''))}',
															let: {${foreignForeignField.columnName}: '$${objectKeys.lcObjSLocalTableName + UcObj(foreignField.columnName.replaceAll('_id','').replaceAll('id','').replaceAll('Id',''))}.${foreignForeignField.columnName}'},
															pipeline: [
																{ $project: helpers.setByModel(project,models.mongoose.${lcObj(foreignForeignField.foreignTable)}.schema.paths, ['_id']) },
																{ $match: {
																		$expr: {
																			$and: [
																				{ $eq: ["$_id", "$$${foreignForeignField.columnName}"] },
																			]
																		}
																	}
																},
															]	
													} },
													{ $unwind: { path: '$${objectKeys.lcObjSLocalTableName + UcObj(foreignField.columnName.replaceAll('_id','').replaceAll('id','').replaceAll('Id',''))}.${lcObj(sing(foreignForeignField.localTable)) + UcObj(foreignForeignField.columnName.replaceAll('_id','').replaceAll('id','').replaceAll('Id',''))}', preserveNullAndEmptyArrays: true } },
								`;
			    }
		    }
	    }
	  }
			defaultProjects += `]) },`;
			sqlObj = defaultProjects + sqlObj;
		  sqlObj += `
						]`;
		  filled = filled.replaceAll('arrayMongoLevel2Aggregate', sqlObj)
	}

	if(filled.hasStringAs('arrayMongoLevel0Aggregate')){
		// console.log(true);
		sqlObj = '';
		sqlObj += `[
					`;
	 	for (let i = 0 ; i < foreignFields.length ; i++) {
	 		let foreignField = foreignFields[i];
	 	  if(foreignField.columnName == objectKeys.foreign_store_field_name_label) {
		    sqlObj += `	
		                { $project: helpers.setByModel(project, models.mongoose.${lcObj(foreignField.localTable)}.schema.paths, ['${objectKeys.local_field_name}']) },
		                { $match: { ${fieldStatus.columnName}: idEnabled } },
		                { $sort : { id : 1} },
										{ $lookup: {
												from: '${foreignField.foreignTable}', 
												as: '${objectKeys.lcObjSLocalTableName + objectKeys.UcObjRefLocalFieldName}', 
												let: { ${objectKeys.local_field_name}: '$${objectKeys.local_field_name}'},
												pipeline: [ 
													{ $project: helpers.setByModel(project,models.mongoose.${lcObj(foreignField.foreignTable)}.schema.paths, ['_id','id']) },
													{ $match: { $expr: { $and: [
														{ $eq: ['$_id','$$${objectKeys.local_field_name}'] },
														{ $in: ['$id', ids] }
													] } } }
												]
										} },
										{ $unwind: '$${objectKeys.lcObjSLocalTableName + objectKeys.UcObjRefLocalFieldName}' },`;
	    }
	  }

		 sqlObj += `
					]`;
		 filled = filled.replaceAll('arrayMongoLevel0Aggregate', sqlObj)
	}
	return filled;
}

function setFillQueryObjects_2(space, filled, fields, objectKeys, tag, table, foreignTableNames) {
	let sqlObj, defaultProjects, interDefaultProjects;
	let foreignFields = fields.filter(param => param.foreign != undefined);
	let fieldStatus = fields.find(param => param.columnName.hasStringAs('status'));
	let beginSpecialKey, firstSpecialKey, secondFindBeginSpecialKey;
	if(filled.hasStringAs('arraySqlLevel0Include')){
		// console.log(true);
		sqlObj = '';
		sqlObj += `     {
		                  attributes: select.filterByModel(models.sequelize.${lcObj(fieldStatus.localTable)}.rawAttributes),
											where: { ${fieldStatus.columnName}: enabled._id },
											include: [
												`;
	 	for (let i = 0 ; i < foreignFields.length ; i++) {
	 		let foreignField = foreignFields[i];
	 	  if(foreignField.columnName == objectKeys.foreign_store_field_name_label) {
		    sqlObj += ` { attributes: select.filterByModel(models.sequelize.${lcObj(foreignField.foreignTable)}.rawAttributes), where: { id: ids }, model: models.sequelize.${lcObj(foreignField.foreignTable)}, as: '${objectKeys.lcObjSLocalTableName + objectKeys.UcObjRefLocalFieldName}' },
		    `;
	    }
	  }
	 	sqlObj += `       ]
										}`;
	 	filled = filled.replaceAll('arraySqlLevel0Include', sqlObj)
	}
	if(filled.hasStringAs('arraySqlLevel1Include')){
		// console.log(true);
		sqlObj = '';
		sqlObj += `     {
											attributes: select.filterByModel(models.sequelize.${lcObj(fieldStatus.localTable)}.rawAttributes),
											where: { ${fieldStatus.columnName}: enabled._id },
											include: [
												`;
	 	for (let i = 0 ; i < foreignFields.length ; i++) {
	 		let foreignField = foreignFields[i];
	 	  if(foreignField.columnName == objectKeys.foreign_store_field_name_label) {
		    sqlObj += `     { attributes: select.filterByModel(models.sequelize.${lcObj(foreignField.foreignTable)}.rawAttributes), where: { id: ids }, model: models.sequelize.${lcObj(foreignField.foreignTable)}, as: '${objectKeys.lcObjSLocalTableName + objectKeys.UcObjRefLocalFieldName}' },
		    `;
	    }	else {
		    sqlObj += `     { attributes: select.filterByModel(models.sequelize.${lcObj(foreignField.foreignTable)}.rawAttributes), model: models.sequelize.${lcObj(foreignField.foreignTable)}, as: '${lcObj(sing(foreignField.localTable)) + UcObj(foreignField.columnName.replaceAll('_id','').replaceAll('id','').replaceAll('Id',''))}' },
		    `;
	    }
	  }
	 	sqlObj += `       ]
										}`;
	 	filled = filled.replaceAll('arraySqlLevel1Include', sqlObj)
	}
	if(filled.hasStringAs('arraySqlLevel2Include')){
		// console.log(true);
		sqlObj = '';
		sqlObj += `     { attributes: select.filterByModel(models.sequelize.${lcObj(fieldStatus.localTable)}.schema.paths),
											where: { ${fieldStatus.columnName}: enabled._id },
											include: [
											`;
	 	for (let i = 0 ; i < foreignFields.length ; i++) {
	 		let foreignField = foreignFields[i];
	 	  if(foreignField.columnName == objectKeys.foreign_store_field_name_label) {
		    sqlObj += `     { attributes: select.filterByModel(models.sequelize.${lcObj(foreignField.foreignTable)}.schema.paths), where: { id: ids }, model: models.sequelize.${lcObj(foreignField.foreignTable)}, as: '${objectKeys.lcObjSLocalTableName + objectKeys.UcObjRefLocalFieldName}',
		                      include: [
		    `;

		    let aForeignForeignFields = asArray(foreignField.foreign).filter(param => param.foreign != undefined);
		    let foreignObjectKeys = keysToReplace(aForeignForeignFields);
		    for (let j = 0 ; j < aForeignForeignFields.length ; j++) {
			    let foreignForeignField = aForeignForeignFields[j];
			    let foreignObjectKey = foreignObjectKeys[j];
			    if (foreignForeignField.columnName == foreignObjectKey.foreign_store_field_name_label) {
				    sqlObj += `     { attributes: select.filterByModel(models.sequelize.${lcObj(foreignForeignField.foreignTable)}.schema.paths), model: models.sequelize.${lcObj(foreignForeignField.foreignTable)}, as: '${lcObj(sing(foreignForeignField.localTable)) + UcObj(foreignForeignField.columnName.replaceAll('_id','').replaceAll('id','').replaceAll('Id',''))}' },
		        `;
			    }
		    }
		    sqlObj += `       ]
										},`;

	    }	else {
		    sqlObj += `     { attributes: select.filterByModel(models.sequelize.${lcObj(foreignField.foreignTable)}.schema.paths), model: models.sequelize.${lcObj(foreignField.foreignTable)}, as: '${lcObj(sing(foreignField.localTable)) + UcObj(foreignField.columnName.replaceAll('_id','').replaceAll('id','').replaceAll('Id',''))}',
		                      include: [
		                    `;

		    let aForeignForeignFields = asArray(foreignField.foreign).filter(param => param.foreign != undefined);
		    let foreignObjectKeys = keysToReplace(aForeignForeignFields);
		    for (let j = 0 ; j < aForeignForeignFields.length ; j++) {
			    let foreignForeignField = aForeignForeignFields[j];
			    let foreignObjectKey = foreignObjectKeys[j];
			    if (foreignForeignField.columnName == foreignObjectKey.foreign_store_field_name_label) {
				    sqlObj += `     { attributes: select.filterByModel(models.sequelize.${lcObj(foreignForeignField.foreignTable)}.schema.paths), model: models.sequelize.${lcObj(foreignForeignField.foreignTable)}, as: '${lcObj(sing(foreignForeignField.localTable)) + UcObj(foreignForeignField.columnName.replaceAll('_id','').replaceAll('id','').replaceAll('Id',''))}' },
		        `;
			    }
		    }
		    sqlObj += `       ]
										},`;
	    }
	  }
	 	sqlObj += `       ]
										}`;
	 	filled = filled.replaceAll('arraySqlLevel2Include', sqlObj)
	}
	if(filled.hasStringAs('arrayMongoLevel1Aggregate')){
			// console.log(true);
			sqlObj = '';
		  for (let i = 0 ; i < foreignFields.length ; i++) {
		    let foreignField = foreignFields[i];
		    if(i == 0) {
					defaultProjects = `[ 
											{ $project: helpers.setByModel(project, models.mongoose.${lcObj(foreignField.localTable)}.schema.paths, [
											`;
			  }
		    if(foreignField.columnName == objectKeys.foreign_store_field_name_label) {
			    defaultProjects += `'${objectKeys.local_field_name}',`;
			    sqlObj += `	
			                { $match: { ${fieldStatus.columnName}: idEnabled } },
			                { $sort : { id : 1} },
			                { $lookup: {
													from: '${foreignField.foreignTable}', 
													as: '${objectKeys.lcObjSLocalTableName + objectKeys.UcObjRefLocalFieldName}',
													pipeline: [ 
														{ $project: helpers.setByModel(project, models.mongoose.${lcObj(foreignField.foreignTable)}.schema.paths, ['_id','id']) },
														{ $match: { $expr: { $and: [
															{ $in: ["$id", ids] }
													] } } }]
											} },
											{ $unwind: '$${objectKeys.lcObjSLocalTableName + objectKeys.UcObjRefLocalFieldName}' },
											`;
		    }	else {
			    defaultProjects += `'${foreignField.columnName}',`;
			    sqlObj += `	
			                {	$lookup: {
													from: '${foreignField.foreignTable}', 
													as: '${lcObj(sing(foreignField.localTable)) + UcObj(foreignField.columnName.replaceAll('_id','').replaceAll('id','').replaceAll('Id',''))}',
													pipeline: [
														{ $project: helpers.setByModel(project,models.mongoose.${lcObj(foreignField.foreignTable)}.schema.paths, ['_id']) },
													]
											} },
											{ $unwind: '$${lcObj(sing(foreignField.localTable)) + UcObj(foreignField.columnName.replaceAll('_id','').replaceAll('id','').replaceAll('Id',''))}' },
											`;
		    }
		  }
			defaultProjects += `]) },`;
			sqlObj = defaultProjects + sqlObj;
		  sqlObj += `
					]`;
		  filled = filled.replaceAll('arrayMongoLevel1Aggregate', sqlObj)
	}

	if(filled.hasStringAs('arrayMongoLevel2Aggregate')){
		// console.log(true);
		sqlObj = '';

		// begin first loop
	 	for (let i = 0 ; i < foreignFields.length ; i++) {
	 		let foreignField = foreignFields[i];
		  if(i == 0) {
			  defaultProjects = `[ 
			              { $project: helpers.setByModel(project, models.mongoose.${lcObj(foreignField.localTable)}.schema.paths, [
			              `;
		  }
	 	  if(foreignField.columnName == objectKeys.foreign_store_field_name_label) {
		    defaultProjects += `'${objectKeys.local_field_name}',`;
		    sqlObj += `	
		                { $match: { ${fieldStatus.columnName}: idEnabled } },
		                { $sort : { id : 1} },
		                { $lookup: {
												from: '${foreignField.foreignTable}', 
												as: '${objectKeys.lcObjSLocalTableName + objectKeys.UcObjRefLocalFieldName}',
												pipeline: [
													{ $project: helpers.setByModel(project,models.mongoose.${lcObj(foreignField.foreignTable)}.schema.paths, ['id',${getStrIndexFields(foreignField.foreign)}]) }, 
													{ $match: { $expr: { $and: [
														{ $in: ['$id', ids] }
													] } } }
												]
										} },
										{ $unwind: { path: '$${objectKeys.lcObjSLocalTableName + objectKeys.UcObjRefLocalFieldName}', preserveNullAndEmptyArrays: true } },
										`;
		    let aForeignForeignFields = asArray(foreignField.foreign).filter(param => param.foreign != undefined);
		    let foreignObjectKeys = keysToReplace(aForeignForeignFields);


		    // begin intern second loop
		    for (let j = 0 ; j < aForeignForeignFields.length ; j++) {
			    let foreignForeignField = aForeignForeignFields[j];
			    let foreignObjectKey = foreignObjectKeys[j];
			    if (foreignForeignField.columnName == foreignObjectKey.foreign_store_field_name_label) {
				    sqlObj += `   
				                  {	$lookup: { 
															from: '${foreignForeignField.foreignTable}',
															as: '${objectKeys.lcObjSLocalTableName + objectKeys.UcObjRefLocalFieldName}.${lcObj(sing(foreignForeignField.localTable)) + UcObj(foreignForeignField.columnName.replaceAll('_id','').replaceAll('id','').replaceAll('Id',''))}',
															pipeline: [
																{ $project: helpers.setByModel(project,models.mongoose.${lcObj(foreignForeignField.foreignTable)}.schema.paths, ['_id']) },
															]
													} },
													{ $unwind: { path: '$${objectKeys.lcObjSLocalTableName + objectKeys.UcObjRefLocalFieldName}.${lcObj(sing(foreignForeignField.localTable)) + UcObj(foreignForeignField.columnName.replaceAll('_id','').replaceAll('id','').replaceAll('Id',''))}', preserveNullAndEmptyArrays: true } },
										`;
			    }
		    }

	    }	else {
		    defaultProjects += `'${foreignField.columnName}',`;
		    sqlObj += `	 
										{	$lookup: {
												from: '${foreignField.foreignTable}', 
												as: '${objectKeys.lcObjSLocalTableName + UcObj(foreignField.columnName.replaceAll('_id','').replaceAll('id','').replaceAll('Id',''))}',
												pipeline: [
														{ $project: helpers.setByModel(project,models.mongoose.${lcObj(foreignField.foreignTable)}.schema.paths, [${getStrIndexFields(foreignField.foreign)}]) },
												]
										} },
										{ $unwind: { path: '$${objectKeys.lcObjSLocalTableName + UcObj(foreignField.columnName.replaceAll('_id','').replaceAll('id','').replaceAll('Id',''))}', preserveNullAndEmptyArrays: true } },
										`;

		    let aForeignForeignFields = asArray(foreignField.foreign).filter(param => param.foreign != undefined);
		    let foreignObjectKeys = keysToReplace(aForeignForeignFields);
		    for (let j = 0 ; j < aForeignForeignFields.length ; j++) {
			    let foreignForeignField = aForeignForeignFields[j];
			    let foreignObjectKey = foreignObjectKeys[j];
			    if (foreignForeignField.columnName == foreignObjectKey.foreign_store_field_name_label) {
				    sqlObj += `   
				                  {	$lookup: { 
															from: '${foreignForeignField.foreignTable}', 
															as: '${objectKeys.lcObjSLocalTableName + UcObj(foreignField.columnName.replaceAll('_id','').replaceAll('id','').replaceAll('Id',''))}.${lcObj(sing(foreignForeignField.localTable)) + UcObj(foreignForeignField.columnName.replaceAll('_id','').replaceAll('id','').replaceAll('Id',''))}',
															pipeline: [
																{ $project: helpers.setByModel(project,models.mongoose.${lcObj(foreignForeignField.foreignTable)}.schema.paths, ['_id']) },
															]	
													} },
													{ $unwind: { path: '$${objectKeys.lcObjSLocalTableName + UcObj(foreignField.columnName.replaceAll('_id','').replaceAll('id','').replaceAll('Id',''))}.${lcObj(sing(foreignForeignField.localTable)) + UcObj(foreignForeignField.columnName.replaceAll('_id','').replaceAll('id','').replaceAll('Id',''))}', preserveNullAndEmptyArrays: true } },
								`;
			    }
		    }
	    }
	  }
			defaultProjects += `]) },`;
			sqlObj = defaultProjects + sqlObj;
		  sqlObj += `
						]`;
		  filled = filled.replaceAll('arrayMongoLevel2Aggregate', sqlObj)
	}

	if(filled.hasStringAs('arrayMongoLevel0Aggregate')){
		// console.log(true);
		sqlObj = '';
		sqlObj += `[
					`;
	 	for (let i = 0 ; i < foreignFields.length ; i++) {
	 		let foreignField = foreignFields[i];
	 	  if(foreignField.columnName == objectKeys.foreign_store_field_name_label) {
		    sqlObj += `	
		                { $project: helpers.setByModel(project, models.mongoose.${lcObj(foreignField.localTable)}.schema.paths, ['${objectKeys.local_field_name}']) },
		                { $match: { ${fieldStatus.columnName}: idEnabled } },
		                { $sort : { id : 1} },
										{ $lookup: {
												from: '${foreignField.foreignTable}', 
												as: '${objectKeys.lcObjSLocalTableName + objectKeys.UcObjRefLocalFieldName}',
												pipeline: [ 
													{ $project: helpers.setByModel(project,models.mongoose.${lcObj(foreignField.foreignTable)}.schema.paths, ['_id','id']) },
													{ $match: { $expr: { $and: [
														{ $in: ['$id', ids] }
													] } } }
												]
										} },
										{ $unwind: '$${objectKeys.lcObjSLocalTableName + objectKeys.UcObjRefLocalFieldName}' },`;
	    }
	  }

		 sqlObj += `
					]`;
		 filled = filled.replaceAll('arrayMongoLevel0Aggregate', sqlObj)
	}
	return filled;
}

function setFillSpecialSpace(objSpecialKeys,aSpecialFields,aSpecialKeys,object,filled,space,foreignFields,replaced) {
	let specialKeys = Object.keys(objSpecialKeys);
	let specialVals = Object.values(objSpecialKeys);
	let keys = Object.keys(object);
	let values = Object.values(object);
	let aEmptyValues = [];
	for(let j = 0 ; j < aSpecialFields.length ; j++) {
		for (let k = 0 ; k < aSpecialKeys.length ; k++) {
			if (space.indexOf(specialKeys[k]) >= 0 ) {
				if(specialVals[k] != '') {
					if (!foreignFields.isInto(specialVals[k])) {
						foreignFields.push(specialVals[k]);
						filled = filled.replaceAll(specialKeys[k], specialVals[k]);
						replaced.push({key: specialKeys[k], value: specialVals[k]});
					}
				} else {
					aEmptyValues.push({key: specialKeys[k], value: specialVals[k]});
				}
			}
		}
	}
	for (let j = 0 ; j < keys.length ; j++) {
		if (filled.indexOf(keys[j]) >= 0 ) {
			if(values[j] != '') {
				if (foreignFields.length) {
					filled = filled.replaceAll(keys[j], values[j]);
					replaced.push({key: keys[j], value: values[j]});
				}
			} else {
				aEmptyValues.push({key: keys[j], value: values[j]});
			}
		}
	}
	return [objSpecialKeys,aSpecialFields,aSpecialKeys,object,filled,space,foreignFields,replaced, aEmptyValues];
}

function fixTxtJsonFeatures(txtJson) {
	let atxtJson = txtJson.split('},');
	let lastItem = atxtJson[atxtJson.length-1];
	if(lastItem.hasStringAs('}')){
		delete atxtJson[atxtJson.length-1];
		txtJson = atxtJson.join('},');
		txtJson = txtJson.substring(0,txtJson.length-1) + '}';
	}
	// txtJson = txtJson.replace(/Sequelize.TEXT/g, "'Sequelize.TEXT'");
	// txtJson = txtJson.replace(/Sequelize.STRING/g, "'Sequelize.STRING'");
	// txtJson = txtJson.replace(/Sequelize.DATE/g, "'Sequelize.DATE'");
	// txtJson = txtJson.replace(/Sequelize.BIGINT/g, "'Sequelize.BIGINT'");
	// txtJson = txtJson.replace(/Sequelize.TINYINT/g, "'Sequelize.TINYINT'");
	// txtJson = txtJson.replace(/Sequelize.CHAR/g, "'Sequelize.CHAR'");
	// txtJson = txtJson.replace(/Sequelize.BLOB/g, "'Sequelize.BLOB'");
	// txtJson = txtJson.replace(/Sequelize.FLOAT/g, "'Sequelize.FLOAT'");
	// txtJson = txtJson.replace(/Sequelize.INTEGER/g, "'Sequelize.INTEGER'");
	// txtJson = txtJson.replace(/Sequelize.BOOLEAN/g, "'Sequelize.BOOLEAN'");
	// txtJson = txtJson.replace(/Sequelize.FLOAT/g, "'Sequelize.FLOAT'");
	return txtJson;
}

function getStrIndexFields(fields) {
	let string = '';
	let aFields = asArray(fields);
	for (let i = 0 ; i < aFields.length ; i++) {
		let field = aFields[i];
		if(field.references){
			string += `'${field.columnName}',`;
		}
	}
	return string;
}

function UcObj(name) {
	let words, obj = '';
	if(name.indexOf('_') >= 0){
		words = name.split('_');
		words.forEach(word => {
			obj += word.capitalize();
		});
	} else if(name.indexOf('-') >= 0) {
		words = name.split('-');
		words.forEach(word => {
			obj += word.capitalize();
		});
	} else {
		obj += name.toLowerCase().capitalize();
	}
	if(obj == '') {
		return name;
	} else {
		return obj;
	}
}

function lcObj(name) {
	let words, obj = '';
	if(name.indexOf('_') >= 0){
		words = name.split('_');
		obj = words[0];
		delete words[0];
		words.forEach(word => {
			obj += word.capitalize();
		});
	} else if(name.indexOf('-') >= 0) {
		words = name.split('-');
		obj = words[0];
		delete words[0];
		words.forEach(word => {
			obj += word.capitalize();
		});
	}
	if(obj == '') {
		return name.toLowerCase()
	} else {
		return obj;
	}
}

function getTypesAngular(type, options = null){
	let typeAngular = '';
	switch (type) {
		case 'Sequelize.DATE':
			typeAngular = 'Date';
			break;
		case 'Sequelize.BOOLEAN':
			typeAngular = 'boolean';
			break;
		case 'Sequelize.FLOAT':
			typeAngular = 'number';
			break;
		case 'Sequelize.DECIMAL':
			typeAngular = 'number';
			break;
		case 'Sequelize.BIGINT':
			typeAngular = 'number';
			break;
		case 'Sequelize.STRING':
			typeAngular = 'string';
			break;
		case 'Sequelize.TEXT':
			typeAngular = 'string';
			break;
		case 'Sequelize.INTEGER':
			typeAngular = 'number';
			break;
		case 'Sequelize.TINYINT':
			typeAngular = 'number';
			break;
		case 'Sequelize.CHAR':
			typeAngular = 'string';
			break;
		case 'Sequelize.BLOB':
			typeAngular = 'string';
			break;
		case 'Sequelize.DOUBLE':
			typeAngular = 'number';
			break;
	}
	return typeAngular;
}

function getTypesExtJs(type, options = null){
	let typeExtJs = '';
	switch (type) {
		case 'Sequelize.DATE':
			typeExtJs = 'date';
			break;
		case 'Sequelize.FLOAT':
			typeExtJs = 'types.FLOAT';
			break;
		case 'Sequelize.DECIMAL':
			typeExtJs = 'types.DECIMAL';
			break;
		case 'Sequelize.BOOLEAN':
			typeExtJs = 'boolean';
			break;
		case 'Sequelize.BIGINT':
			typeExtJs = 'number';
			break;
		case 'Sequelize.STRING':
			typeExtJs = 'text';
			break;
		case 'Sequelize.TEXT':
			typeExtJs = 'text';
			break;
		case 'Sequelize.INTEGER':
			typeExtJs = 'types.INT';
			break;
		case 'Sequelize.TINYINT':
			typeExtJs = 'types.TINYINT';
			break;
		case 'Sequelize.CHAR':
			typeExtJs = 'types.CHAR';
			break;
		case 'Sequelize.BLOB':
			typeExtJs = 'types.BLOB';
			break;
		case 'Sequelize.DOUBLE':
			typeExtJs = 'types.DOUBLE';
			break;
	}
	return typeExtJs;
}

function getTypesMongo(type, options = null){
	let typeMongo = '';
	switch (type) {
		case 'Sequelize.DATE':
			typeMongo = 'Date';
			break;
		case 'Sequelize.BIGINT':
			typeMongo = 'Number';
			break;
		case 'Sequelize.BOOLEAN':
			typeMongo = 'Boolean';
			break;
		case 'Sequelize.FLOAT':
			typeMongo = 'mongoose.Types.Decimal128';
			break;
		case 'Sequelize.DECIMAL':
			typeMongo = 'mongoose.Types.Decimal128';
			break;
		case 'Sequelize.STRING':
			typeMongo = 'String';
			break;
		case 'Sequelize.TEXT':
			typeMongo = 'String';
			break;
		case 'Sequelize.INTEGER':
			typeMongo = 'Number';
			break;
		case 'Sequelize.TINYINT':
			typeMongo = 'Number';
			break;
		case 'Sequelize.CHAR':
			typeMongo = 'String';
			break;
		case 'Sequelize.BLOB':
			typeMongo = 'String';
			break;
		case 'Sequelize.DOUBLE':
			typeMongo = 'mongoose.Types.Decimal128';
			break;
	}
	return typeMongo;
}

function getTypesSequlize(type, options = null){
	let typeSequelize = '';
	switch (type) {
		case 'Sequelize.DATE':
			typeSequelize = 'DATE';
			break;
		case 'Sequelize.BIGINT':
			typeSequelize = 'BIGINT';
			break;
		case 'Sequelize.BOOLEAN':
			typeSequelize  = 'BOOLEAN';
			break;
		case 'Sequelize.FLOAT':
			typeSequelize = 'FLOAT';
			break;
		case 'Sequelize.DECIMAL':
			typeSequelize = 'DECIMAL';
			break;
		case 'Sequelize.STRING':
			typeSequelize = 'STRING';
			break;
		case 'Sequelize.TEXT':
			typeSequelize = 'STRING';
			break;
		case 'Sequelize.INTEGER':
			typeSequelize = 'INTEGER';
			break;
		case 'Sequelize.TINYINT':
			typeSequelize = 'TINYINT';
			break;
		case 'Sequelize.CHAR':
			typeSequelize = 'CHAR';
			break;
		case 'Sequelize.BLOB':
			typeSequelize = 'BLOB';
			break;
		case 'Sequelize.DOUBLE':
			typeSequelize = 'DOUBLE';
			break;
	}
	return typeSequelize
}

function getRelatedTable(field, table, primary) {
	let relatedTable;
	switch (field) {
		case 'created_by':
			return [field,'users','id'];
		// case 'parent_id':
		// 	return [field,table,primary];
		default:
			return [null,null,null];
	}
}

let specialNames = [
	{'p':'currencies', 's':'currency'},
	{'p':'categories', 's':'category'},
	{'p':'opportunities', 's':'opportunity'},
	{'p':'dictionaries', 's':'dictionary'},
	{'p':'people', 's':'person'}
];

function arrayUnique(array) {
	var a = array.concat();
	for(var i=0; i<a.length; ++i) {
		for(var j=i+1; j<a.length; ++j) {
			if(a[i] === a[j])
				a.splice(j--, 1);
		}
	}

	return a;
}

function sing(name) {
	if (name == 'opportunities_contacts') {
		//console.log(true);
	}
	let singular = '';
	let pWords = [];
	let sWords = [];
	if(name.indexOf('_') >= 0) {
		pWords = name.split('_');
		pWords.forEach(pWord => {
			//if(word.notIn(codeSections)){
			let word = pWord;
			for (let i = 0 ; i < specialNames.length ; i++) {
				let special = specialNames[i];
					if (pWord.indexOf(special.p) >= 0) {
						word = special.s;
						break;
					} else if(pWord.lastIndexOf('s')+1 == pWord.length){
						word = pWord.substring(0,pWord.length-1);
					}
			}
			//}
			sWords.push(word);
		});
		singular = sWords.join('_')
	} else if(name.indexOf('-') >= 0) {
		pWords = name.split('-');
		pWords.forEach(pWord => {
			//if(word.notIn(codeSections)){
			let word = pWord;
			for (let i = 0 ; i < specialNames.length ; i++) {
				let special = specialNames[i];
					if (pWord.indexOf(special.p) >= 0) {
						word = special.s;
						break;
					} else if(pWord.lastIndexOf('s')+1 == pWord.length){
						word = pWord.substring(0,pWord.length-1);
					}
			}
			//}
			sWords.push(word);
		});
		singular = sWords.join('-')
	} else {
		let word = '';
		for (let i = 0 ; i < specialNames.length ; i++) {
			let special = specialNames[i];
			if (name.indexOf(special.p) >= 0) {
				word = special.s;
				break;
			} else if(name.lastIndexOf('s')+1 == name.length){
				word = name.substring(0,name.length-1);
			}

		}
		singular = word;
	}

	if(singular == '') {
		return name;
	} else {
		return singular;
	}
}
