/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:41:47 GMT-0400 (Bolivia Time)
 * Time: 4:41:47
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:41:47 GMT-0400 (Bolivia Time)
 * Last time updated: 4:41:47
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const addresBookService = require('../services/address_book.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const addressBookCtrl = {};
addressBookCtrl.service = addresBookService;




addressBookCtrl.findOneByBean = async (req, res) => {
    try {
        const { bean } = req.params;
        const objAddresBook = await addresBookService.findOneByBean(bean, req.query);
        if (!objAddresBook) {
            util.setError(404, `Cannot find addresBook with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found addresBook', objAddresBook);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

addressBookCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objAddresBook = await addresBookService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objAddresBook) {
            util.setError(404, `Cannot find addresBook with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found addresBook', objAddresBook);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

addressBookCtrl.findOneByBeanId = async (req, res) => {
    try {
        const { beanId } = req.params;
        const objAddresBook = await addresBookService.findOneByBeanId(beanId, req.query);
        if (!objAddresBook) {
            util.setError(404, `Cannot find addresBook with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found addresBook', objAddresBook);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}









//</es-section>

//<es-section>
module.exports = addressBookCtrl;
//</es-section>
