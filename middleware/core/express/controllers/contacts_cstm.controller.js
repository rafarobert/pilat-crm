/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:47 GMT-0400 (Bolivia Time)
 * Time: 4:42:47
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:47 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:47
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const contactCstmService = require('../services/contacts_cstm.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const contactsCstmCtrl = {};
contactsCstmCtrl.service = contactCstmService;


contactsCstmCtrl.getAllContactsCstm = async (req, res) => {
    try {
        const objContactsCstm = await contactCstmService.getAllContactsCstm(req.query);
        if (objContactsCstm.length > 0) {
            util.setSuccess(200, 'ContactsCstm retrieved', objContactsCstm);
        } else {
            util.setSuccess(200, 'No contactCstm found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCstmCtrl.getAContactCstm = async (req, res) => {
    try {
        const { idC } = req.params;
        if (!util.isChar(idC)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objContactCstm = await contactCstmService.getAContactCstm(idC, req.query);
        if (!objContactCstm) {
            util.setError(404, `Cannot find contactCstm with the id ${idC}`);
        } else {
            util.setSuccess(200, 'Found contactCstm', objContactCstm);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCstmCtrl.addContactCstm = async (req, res) => {
    try {
        const objContactCstm = await contactCstmService.addContactCstm(req.body);
        util.setSuccess(201, 'ContactCstm Added!', objContactCstm);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCstmCtrl.updateContactCstm = async (req, res) => {
    try {
        const { idC } = req.params;
        if (!util.isChar(idC)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objContactCstm = await contactCstmService.updateContactCstm(idC, req.body);
        if (!objContactCstm) {
            util.setError(404, `Cannot find contactCstm with the id: ${idC}`);
        } else {
            util.setSuccess(200, 'ContactCstm updated', objContactCstm);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

contactsCstmCtrl.deleteContactCstm = async (req, res) => {
    try {
        const { idC } = req.params;
        if (!util.isChar(idC)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objContactCstm = await contactCstmService.deleteContactCstm(idC);
        if (objContactCstm) {
            util.setSuccess(200, 'ContactCstm deleted', objContactCstm);
        } else {
            util.setError(404, `ContactCstm with the id ${idC} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



contactsCstmCtrl.findOneByIdC = async (req, res) => {
    try {
        const { idC } = req.params;
        const objContactCstm = await contactCstmService.findOneByIdC(idC, req.query);
        if (!objContactCstm) {
            util.setError(404, `Cannot find contactCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contactCstm', objContactCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCstmCtrl.findOneByJjwgMapsLngC = async (req, res) => {
    try {
        const { jjwgMapsLngC } = req.params;
        const objContactCstm = await contactCstmService.findOneByJjwgMapsLngC(jjwgMapsLngC, req.query);
        if (!objContactCstm) {
            util.setError(404, `Cannot find contactCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contactCstm', objContactCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCstmCtrl.findOneByJjwgMapsLatC = async (req, res) => {
    try {
        const { jjwgMapsLatC } = req.params;
        const objContactCstm = await contactCstmService.findOneByJjwgMapsLatC(jjwgMapsLatC, req.query);
        if (!objContactCstm) {
            util.setError(404, `Cannot find contactCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contactCstm', objContactCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCstmCtrl.findOneByJjwgMapsGeocodeStatusC = async (req, res) => {
    try {
        const { jjwgMapsGeocodeStatusC } = req.params;
        const objContactCstm = await contactCstmService.findOneByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC, req.query);
        if (!objContactCstm) {
            util.setError(404, `Cannot find contactCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contactCstm', objContactCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCstmCtrl.findOneByJjwgMapsAddressC = async (req, res) => {
    try {
        const { jjwgMapsAddressC } = req.params;
        const objContactCstm = await contactCstmService.findOneByJjwgMapsAddressC(jjwgMapsAddressC, req.query);
        if (!objContactCstm) {
            util.setError(404, `Cannot find contactCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contactCstm', objContactCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



contactsCstmCtrl.updateContactCstmByIdC = async (req, res) => {
     const { idC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContactCstm = await contactCstmService.updateContactCstmByIdC(idC, req.body);
            if (!objContactCstm) {
                util.setError(404, `Cannot find contactCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'ContactCstm updated', objContactCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCstmCtrl.updateContactCstmByJjwgMapsLngC = async (req, res) => {
     const { jjwgMapsLngC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContactCstm = await contactCstmService.updateContactCstmByJjwgMapsLngC(jjwgMapsLngC, req.body);
            if (!objContactCstm) {
                util.setError(404, `Cannot find contactCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'ContactCstm updated', objContactCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCstmCtrl.updateContactCstmByJjwgMapsLatC = async (req, res) => {
     const { jjwgMapsLatC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContactCstm = await contactCstmService.updateContactCstmByJjwgMapsLatC(jjwgMapsLatC, req.body);
            if (!objContactCstm) {
                util.setError(404, `Cannot find contactCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'ContactCstm updated', objContactCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCstmCtrl.updateContactCstmByJjwgMapsGeocodeStatusC = async (req, res) => {
     const { jjwgMapsGeocodeStatusC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContactCstm = await contactCstmService.updateContactCstmByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC, req.body);
            if (!objContactCstm) {
                util.setError(404, `Cannot find contactCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'ContactCstm updated', objContactCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCstmCtrl.updateContactCstmByJjwgMapsAddressC = async (req, res) => {
     const { jjwgMapsAddressC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContactCstm = await contactCstmService.updateContactCstmByJjwgMapsAddressC(jjwgMapsAddressC, req.body);
            if (!objContactCstm) {
                util.setError(404, `Cannot find contactCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'ContactCstm updated', objContactCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = contactsCstmCtrl;
//</es-section>
