/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Nov 22 2020 05:14:00 GMT-0400 (Bolivia Time)
 * Time: 5:14:0
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Nov 22 2020 05:14:00 GMT-0400 (Bolivia Time)
 * Last time updated: 5:14:0
 *
 * Caution: es-sections will be replaced by script execution
 */

//<es-section>
require('dotenv').config({ path: "../.env" });
const env = process.env.NODE_ENV || 'development';
const configJson = require('../config/config');
const config = configJson[env];

const buildService = require('./build.service');
//</es-section>
const Util = require('../utils/Utils');
const util = new Util();

// Controller for DB Mongoose
//<es-section>
const buildCtrl = {};
buildCtrl.service = buildService;

buildCtrl.getDatabaseTables = async (req, res) => {
    try {
        const databaseTables = await buildService.mysql.getDatabaseTables(config.database);
        if (databaseTables.length > 0) {
            util.setSuccess(200, 'Database tables retrieved', databaseTables);
        } else {
            util.setSuccess(200, 'No database tables found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
0}

//</es-section>

//<es-section>
module.exports = buildCtrl;
//</es-section>
