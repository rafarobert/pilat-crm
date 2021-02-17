/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Sep 21 2020 22:55:51 GMT-0400 (Bolivia Time)
 * Time: 22:55:51
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Sep 21 2020 22:55:51 GMT-0400 (Bolivia Time)
 * Last time updated: 22:55:51
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const crudService = require('./crud.service');
//</es-section>
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

const crudCtrl = {};
crudCtrl.service = crudService;


//<es-section>
module.exports = crudCtrl;
//</es-section>
