/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:42 GMT-0400 (Bolivia Time)
 * Time: 0:22:42
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:42 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:42
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const customFieldService = require('../services/custom_fields.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const customFieldsCtrl = {};
customFieldsCtrl.service = customFieldService;




customFieldsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objCustomField = await customFieldService.findOneByDeleted(deleted, req.query);
        if (!objCustomField) {
            util.setError(404, `Cannot find customField with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found customField', objCustomField);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

customFieldsCtrl.findOneBySetNum = async (req, res) => {
    try {
        const { setNum } = req.params;
        const objCustomField = await customFieldService.findOneBySetNum(setNum, req.query);
        if (!objCustomField) {
            util.setError(404, `Cannot find customField with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found customField', objCustomField);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

customFieldsCtrl.findOneByBeanId = async (req, res) => {
    try {
        const { beanId } = req.params;
        const objCustomField = await customFieldService.findOneByBeanId(beanId, req.query);
        if (!objCustomField) {
            util.setError(404, `Cannot find customField with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found customField', objCustomField);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

customFieldsCtrl.findOneByField0 = async (req, res) => {
    try {
        const { field0 } = req.params;
        const objCustomField = await customFieldService.findOneByField0(field0, req.query);
        if (!objCustomField) {
            util.setError(404, `Cannot find customField with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found customField', objCustomField);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

customFieldsCtrl.findOneByField1 = async (req, res) => {
    try {
        const { field1 } = req.params;
        const objCustomField = await customFieldService.findOneByField1(field1, req.query);
        if (!objCustomField) {
            util.setError(404, `Cannot find customField with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found customField', objCustomField);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

customFieldsCtrl.findOneByField2 = async (req, res) => {
    try {
        const { field2 } = req.params;
        const objCustomField = await customFieldService.findOneByField2(field2, req.query);
        if (!objCustomField) {
            util.setError(404, `Cannot find customField with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found customField', objCustomField);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

customFieldsCtrl.findOneByField3 = async (req, res) => {
    try {
        const { field3 } = req.params;
        const objCustomField = await customFieldService.findOneByField3(field3, req.query);
        if (!objCustomField) {
            util.setError(404, `Cannot find customField with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found customField', objCustomField);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

customFieldsCtrl.findOneByField4 = async (req, res) => {
    try {
        const { field4 } = req.params;
        const objCustomField = await customFieldService.findOneByField4(field4, req.query);
        if (!objCustomField) {
            util.setError(404, `Cannot find customField with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found customField', objCustomField);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

customFieldsCtrl.findOneByField5 = async (req, res) => {
    try {
        const { field5 } = req.params;
        const objCustomField = await customFieldService.findOneByField5(field5, req.query);
        if (!objCustomField) {
            util.setError(404, `Cannot find customField with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found customField', objCustomField);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

customFieldsCtrl.findOneByField6 = async (req, res) => {
    try {
        const { field6 } = req.params;
        const objCustomField = await customFieldService.findOneByField6(field6, req.query);
        if (!objCustomField) {
            util.setError(404, `Cannot find customField with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found customField', objCustomField);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

customFieldsCtrl.findOneByField7 = async (req, res) => {
    try {
        const { field7 } = req.params;
        const objCustomField = await customFieldService.findOneByField7(field7, req.query);
        if (!objCustomField) {
            util.setError(404, `Cannot find customField with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found customField', objCustomField);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

customFieldsCtrl.findOneByField8 = async (req, res) => {
    try {
        const { field8 } = req.params;
        const objCustomField = await customFieldService.findOneByField8(field8, req.query);
        if (!objCustomField) {
            util.setError(404, `Cannot find customField with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found customField', objCustomField);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

customFieldsCtrl.findOneByField9 = async (req, res) => {
    try {
        const { field9 } = req.params;
        const objCustomField = await customFieldService.findOneByField9(field9, req.query);
        if (!objCustomField) {
            util.setError(404, `Cannot find customField with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found customField', objCustomField);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}









//</es-section>

//<es-section>
module.exports = customFieldsCtrl;
//</es-section>
