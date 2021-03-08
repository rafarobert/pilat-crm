/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:49 GMT-0400 (Bolivia Time)
 * Time: 15:35:49
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:49 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:49
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const configService = require('../services/config.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const configCtrl = {};
configCtrl.service = configService;




configCtrl.findOneByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const objConfig = await configService.findOneByCategory(category, req.query);
        if (!objConfig) {
            util.setError(404, `Cannot find config with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found config', objConfig);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

configCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objConfig = await configService.findOneByName(name, req.query);
        if (!objConfig) {
            util.setError(404, `Cannot find config with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found config', objConfig);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

configCtrl.findOneByValue = async (req, res) => {
    try {
        const { value } = req.params;
        const objConfig = await configService.findOneByValue(value, req.query);
        if (!objConfig) {
            util.setError(404, `Cannot find config with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found config', objConfig);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}









//</es-section>

//<es-section>
module.exports = configCtrl;
//</es-section>
