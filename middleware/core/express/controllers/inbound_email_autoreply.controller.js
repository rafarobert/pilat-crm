/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:59 GMT-0400 (Bolivia Time)
 * Time: 14:0:59
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:59 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:59
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const inboundEmailAutoreplyService = require('../services/inbound_email_autoreply.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const inboundEmailAutoreplyCtrl = {};
inboundEmailAutoreplyCtrl.service = inboundEmailAutoreplyService;


inboundEmailAutoreplyCtrl.getAllInboundEmailAutoreply = async (req, res) => {
    try {
        const objInboundEmailAutoreply = await inboundEmailAutoreplyService.getAllInboundEmailAutoreply(req.query);
        if (objInboundEmailAutoreply.length > 0) {
            util.setSuccess(200, 'InboundEmailAutoreply retrieved', objInboundEmailAutoreply);
        } else {
            util.setSuccess(200, 'No inboundEmailAutoreply found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

inboundEmailAutoreplyCtrl.getAInboundEmailAutoreply = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objInboundEmailAutoreply = await inboundEmailAutoreplyService.getAInboundEmailAutoreply(id, req.query);
        if (!objInboundEmailAutoreply) {
            util.setError(404, `Cannot find inboundEmailAutoreply with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found inboundEmailAutoreply', objInboundEmailAutoreply);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

inboundEmailAutoreplyCtrl.addInboundEmailAutoreply = async (req, res) => {
    try {
        const objInboundEmailAutoreply = await inboundEmailAutoreplyService.addInboundEmailAutoreply(req.body);
        util.setSuccess(201, 'InboundEmailAutoreply Added!', objInboundEmailAutoreply);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

inboundEmailAutoreplyCtrl.updateInboundEmailAutoreply = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objInboundEmailAutoreply = await inboundEmailAutoreplyService.updateInboundEmailAutoreply(id, req.body);
        if (!objInboundEmailAutoreply) {
            util.setError(404, `Cannot find inboundEmailAutoreply with the id: ${id}`);
        } else {
            util.setSuccess(200, 'InboundEmailAutoreply updated', objInboundEmailAutoreply);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

inboundEmailAutoreplyCtrl.deleteInboundEmailAutoreply = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objInboundEmailAutoreply = await inboundEmailAutoreplyService.deleteInboundEmailAutoreply(id);
        if (objInboundEmailAutoreply) {
            util.setSuccess(200, 'InboundEmailAutoreply deleted', objInboundEmailAutoreply);
        } else {
            util.setError(404, `InboundEmailAutoreply with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



inboundEmailAutoreplyCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objInboundEmailAutoreply = await inboundEmailAutoreplyService.findOneById(id, req.query);
        if (!objInboundEmailAutoreply) {
            util.setError(404, `Cannot find inboundEmailAutoreply with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found inboundEmailAutoreply', objInboundEmailAutoreply);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

inboundEmailAutoreplyCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objInboundEmailAutoreply = await inboundEmailAutoreplyService.findOneByDeleted(deleted, req.query);
        if (!objInboundEmailAutoreply) {
            util.setError(404, `Cannot find inboundEmailAutoreply with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found inboundEmailAutoreply', objInboundEmailAutoreply);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

inboundEmailAutoreplyCtrl.findOneByAutorepliedTo = async (req, res) => {
    try {
        const { autorepliedTo } = req.params;
        const objInboundEmailAutoreply = await inboundEmailAutoreplyService.findOneByAutorepliedTo(autorepliedTo, req.query);
        if (!objInboundEmailAutoreply) {
            util.setError(404, `Cannot find inboundEmailAutoreply with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found inboundEmailAutoreply', objInboundEmailAutoreply);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

inboundEmailAutoreplyCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objInboundEmailAutoreply = await inboundEmailAutoreplyService.findOneByDateEntered(dateEntered, req.query);
        if (!objInboundEmailAutoreply) {
            util.setError(404, `Cannot find inboundEmailAutoreply with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found inboundEmailAutoreply', objInboundEmailAutoreply);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

inboundEmailAutoreplyCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objInboundEmailAutoreply = await inboundEmailAutoreplyService.findOneByDateModified(dateModified, req.query);
        if (!objInboundEmailAutoreply) {
            util.setError(404, `Cannot find inboundEmailAutoreply with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found inboundEmailAutoreply', objInboundEmailAutoreply);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

inboundEmailAutoreplyCtrl.findOneByIeId = async (req, res) => {
    try {
        const { ieId } = req.params;
        const objInboundEmailAutoreply = await inboundEmailAutoreplyService.findOneByIeId(ieId, req.query);
        if (!objInboundEmailAutoreply) {
            util.setError(404, `Cannot find inboundEmailAutoreply with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found inboundEmailAutoreply', objInboundEmailAutoreply);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



inboundEmailAutoreplyCtrl.updateInboundEmailAutoreplyById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objInboundEmailAutoreply = await inboundEmailAutoreplyService.updateInboundEmailAutoreplyById(id, req.body);
            if (!objInboundEmailAutoreply) {
                util.setError(404, `Cannot find inboundEmailAutoreply with the id: ${id}`);
            } else {
                util.setSuccess(200, 'InboundEmailAutoreply updated', objInboundEmailAutoreply);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

inboundEmailAutoreplyCtrl.updateInboundEmailAutoreplyByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objInboundEmailAutoreply = await inboundEmailAutoreplyService.updateInboundEmailAutoreplyByDeleted(deleted, req.body);
            if (!objInboundEmailAutoreply) {
                util.setError(404, `Cannot find inboundEmailAutoreply with the id: ${id}`);
            } else {
                util.setSuccess(200, 'InboundEmailAutoreply updated', objInboundEmailAutoreply);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

inboundEmailAutoreplyCtrl.updateInboundEmailAutoreplyByAutorepliedTo = async (req, res) => {
     const { autorepliedTo } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objInboundEmailAutoreply = await inboundEmailAutoreplyService.updateInboundEmailAutoreplyByAutorepliedTo(autorepliedTo, req.body);
            if (!objInboundEmailAutoreply) {
                util.setError(404, `Cannot find inboundEmailAutoreply with the id: ${id}`);
            } else {
                util.setSuccess(200, 'InboundEmailAutoreply updated', objInboundEmailAutoreply);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

inboundEmailAutoreplyCtrl.updateInboundEmailAutoreplyByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objInboundEmailAutoreply = await inboundEmailAutoreplyService.updateInboundEmailAutoreplyByDateEntered(dateEntered, req.body);
            if (!objInboundEmailAutoreply) {
                util.setError(404, `Cannot find inboundEmailAutoreply with the id: ${id}`);
            } else {
                util.setSuccess(200, 'InboundEmailAutoreply updated', objInboundEmailAutoreply);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

inboundEmailAutoreplyCtrl.updateInboundEmailAutoreplyByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objInboundEmailAutoreply = await inboundEmailAutoreplyService.updateInboundEmailAutoreplyByDateModified(dateModified, req.body);
            if (!objInboundEmailAutoreply) {
                util.setError(404, `Cannot find inboundEmailAutoreply with the id: ${id}`);
            } else {
                util.setSuccess(200, 'InboundEmailAutoreply updated', objInboundEmailAutoreply);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

inboundEmailAutoreplyCtrl.updateInboundEmailAutoreplyByIeId = async (req, res) => {
     const { ieId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objInboundEmailAutoreply = await inboundEmailAutoreplyService.updateInboundEmailAutoreplyByIeId(ieId, req.body);
            if (!objInboundEmailAutoreply) {
                util.setError(404, `Cannot find inboundEmailAutoreply with the id: ${id}`);
            } else {
                util.setSuccess(200, 'InboundEmailAutoreply updated', objInboundEmailAutoreply);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = inboundEmailAutoreplyCtrl;
//</es-section>
