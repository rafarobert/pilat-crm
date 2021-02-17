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

require('../utils/Prototipes');
const helpers = require('../utils/helpers');
const models = require('../core/express');
const sql = process.env.SQL;
const { QueryTypes } = require('sequelize');

class BuildServiceMysql {

	static async getDatabaseTables(database) {
		try {
			if(sql) {
				return await models.sequelize.query(`
          select * from information_schema.columns
          where table_schema = '${database}'
          order by table_name
				`, {
					type: QueryTypes.SELECT
				});
			}
		} catch (error) {
			throw error;
		}
	}

	static async getDatabaseTableIndexes(database, table) {
		try {
			if(sql) {
				return await models.sequelize.query(`
          SHOW INDEXES FROM ${table}
          IN ${database};
				`, {
					type: QueryTypes.SELECT
				});
			}
		} catch (error) {
			throw error;
		}
	}

	static async getDatabaseTableConstraints(database, table) {
		try {
			if(sql) {
				return await models.sequelize.query(`
          select *
					from information_schema.KEY_COLUMN_USAGE
					where table_schema like'${database}' and table_name like '${table}'
				`, {
					type: QueryTypes.SELECT
				});
			}
		} catch (error) {
			throw error;
		}
	}

	static async getLastTablePrimaryNumberId() {
		try {
			if (sql) {
				return await models.sequelize.query(`
					SELECT MAX(id) FROM tracker
				`);
			}
		} catch (e) {
			throw e;
		}
	}
}

//<es-section>
module.exports.mysql = BuildServiceMysql;
//</es-section>
