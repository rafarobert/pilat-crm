'use strict';
import fs from 'fs';
import path from 'path';
import mongoose from "mongoose";
import configJson from '../../config/config';

const { Sequelize, Model, DataTypes } = require("sequelize");
const env = process.env.NODE_ENV || 'development';
const config = configJson[env];
const basename = path.basename(__filename);
const db = {sequelize: {}, mongoose:{}};
const {Schema} = mongoose;
const sql = process.env.SQL;
const Op = Sequelize.Op;

config.$eq = Op.eq;
config.$ne = Op.ne;
config.$gte = Op.gte;
config.$gt = Op.gt;
config.$lte = Op.lte;
config.$lt = Op.lt;
config.$not = Op.not;
config.$in = Op.in;
config.$notIn = Op.notIn;
config.$is = Op.is;
config.$like = Op.like;
config.$notLike = Op.notLike;
config.$iLike = Op.iLike;
config.$notILike = Op.notILike;
config.$regexp = Op.regexp;
config.$notRegexp = Op.notRegexp;
config.$iRegexp = Op.iRegexp;
config.$notIRegexp = Op.notIRegexp;
config.$between = Op.between;
config.$notBetween = Op.notBetween;
config.$overlap = Op.overlap;
config.$contains = Op.contains;
config.$contained = Op.contained;
config.$adjacent = Op.adjacent;
config.$strictLeft = Op.strictLeft;
config.$strictRight = Op.strictRight;
config.$noExtendRight = Op.noExtendRight;
config.$noExtendLeft = Op.noExtendLeft;
config.$and = Op.and;
config.$or = Op.or;
config.$any = Op.any;
config.$all = Op.all;
config.$values = Op.values;
config.$col = Op.col;

console.log('This is the environment: ', env);
console.log('Database host: ', config.host);
console.log('Node host: ', config.domain);

let sequelize;
if (config.use_env_variable) {
	sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
	sequelize = new Sequelize(config.database, config.username, config.password, config);
}
db.sequelize = sequelize;

fs.readdirSync(__dirname+'/models')
	.filter(file => {
		return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
	})
	.forEach(file => {
		try {
			if(file != 'index.js') {
				let model = require(path.join(__dirname+'/models', file));
				//if(sql) {
				let modelSequelize = model.sequelize(sequelize,DataTypes);
					db.sequelize[modelSequelize.name] = modelSequelize;
				//} else {
					db.mongoose[model.mongoose.modelName] = model.mongoose;
				//}
			}
		} catch (e) {
			console.log(e);
		}
	});

let dbSequelizeKeys = Object.keys(db.sequelize);
for(let  i = 0 ; i < dbSequelizeKeys.length ; i++) {
	let dbSequelizeKey = dbSequelizeKeys[i];
	if (db.sequelize[dbSequelizeKey].associate) {
		db.sequelize[dbSequelizeKey].associate(db.sequelize);
	}
}

db.sequelize.getDatabaseName = () => {
	return sequelize.config.database;
}
db.sequelize.getDatabasePort = () => {
	return sequelize.config.port;
}
db.sequelize.getDatabaseHost = () => {
	return sequelize.config.host;
}

db.mongoose.getDatabaseName = () => {
	return mongoose.connection.name;
}
db.mongoose.getDatabasePort = () => {
	return mongoose.connection.port;
}
db.mongoose.getDatabaseHost = () => {
	return mongoose.connection.host
}

db.sequelize.objectId = () => {
	return new mongoose.Types.ObjectId();
}
db.mongoose.setAsObjectId = (id) => {
	return mongoose.Types.ObjectId(id);
}
db.mongoose.isValidObjectId = (id) => {
	if(mongoose.Types.ObjectId.isValid(id)) {
		let newObjId = new mongoose.Types.ObjectId(id);
		if (newObjId.toString() === id) {
			return true
		} else {
			return false
		}
	}
}
db.mongoose.objectId = () => {
	return new mongoose.Types.ObjectId();
}

module.exports = db;
