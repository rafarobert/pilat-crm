/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:37:15 GMT-0400 (Bolivia Time)
 * Time: 15:37:15
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:37:15 GMT-0400 (Bolivia Time)
 * Last time updated: 15:37:15
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const vcalService = require('../services/vcals.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const vcalsCtrl = {};
vcalsCtrl.service = vcalService;


vcalsCtrl.getAllVcals = async (req, res) => {
    try {
        const objVcals = await vcalService.getAllVcals(req.query);
        if (objVcals.length > 0) {
            util.setSuccess(200, 'Vcals retrieved', objVcals);
        } else {
            util.setSuccess(200, 'No vcal found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

vcalsCtrl.getAVcal = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objVcal = await vcalService.getAVcal(id, req.query);
        if (!objVcal) {
            util.setError(404, `Cannot find vcal with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found vcal', objVcal);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

vcalsCtrl.addVcal = async (req, res) => {
    try {
        const objVcal = await vcalService.addVcal(req.body);
        util.setSuccess(201, 'Vcal Added!', objVcal);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

vcalsCtrl.updateVcal = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objVcal = await vcalService.updateVcal(id, req.body);
        if (!objVcal) {
            util.setError(404, `Cannot find vcal with the id: ${id}`);
        } else {
            util.setSuccess(200, 'Vcal updated', objVcal);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

vcalsCtrl.deleteVcal = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objVcal = await vcalService.deleteVcal(id);
        if (objVcal) {
            util.setSuccess(200, 'Vcal deleted', objVcal);
        } else {
            util.setError(404, `Vcal with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



vcalsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objVcal = await vcalService.findOneById(id, req.query);
        if (!objVcal) {
            util.setError(404, `Cannot find vcal with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found vcal', objVcal);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

vcalsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objVcal = await vcalService.findOneByDeleted(deleted, req.query);
        if (!objVcal) {
            util.setError(404, `Cannot find vcal with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found vcal', objVcal);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

vcalsCtrl.findOneByType = async (req, res) => {
    try {
        const { type } = req.params;
        const objVcal = await vcalService.findOneByType(type, req.query);
        if (!objVcal) {
            util.setError(404, `Cannot find vcal with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found vcal', objVcal);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

vcalsCtrl.findOneBySource = async (req, res) => {
    try {
        const { source } = req.params;
        const objVcal = await vcalService.findOneBySource(source, req.query);
        if (!objVcal) {
            util.setError(404, `Cannot find vcal with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found vcal', objVcal);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

vcalsCtrl.findOneByContent = async (req, res) => {
    try {
        const { content } = req.params;
        const objVcal = await vcalService.findOneByContent(content, req.query);
        if (!objVcal) {
            util.setError(404, `Cannot find vcal with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found vcal', objVcal);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

vcalsCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objVcal = await vcalService.findOneByDateEntered(dateEntered, req.query);
        if (!objVcal) {
            util.setError(404, `Cannot find vcal with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found vcal', objVcal);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

vcalsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objVcal = await vcalService.findOneByDateModified(dateModified, req.query);
        if (!objVcal) {
            util.setError(404, `Cannot find vcal with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found vcal', objVcal);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

vcalsCtrl.findOneByUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        const objVcal = await vcalService.findOneByUserId(userId, req.query);
        if (!objVcal) {
            util.setError(404, `Cannot find vcal with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found vcal', objVcal);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



vcalsCtrl.updateVcalById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objVcal = await vcalService.updateVcalById(id, req.body);
            if (!objVcal) {
                util.setError(404, `Cannot find vcal with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Vcal updated', objVcal);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

vcalsCtrl.updateVcalByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objVcal = await vcalService.updateVcalByDeleted(deleted, req.body);
            if (!objVcal) {
                util.setError(404, `Cannot find vcal with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Vcal updated', objVcal);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

vcalsCtrl.updateVcalByType = async (req, res) => {
     const { type } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objVcal = await vcalService.updateVcalByType(type, req.body);
            if (!objVcal) {
                util.setError(404, `Cannot find vcal with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Vcal updated', objVcal);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

vcalsCtrl.updateVcalBySource = async (req, res) => {
     const { source } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objVcal = await vcalService.updateVcalBySource(source, req.body);
            if (!objVcal) {
                util.setError(404, `Cannot find vcal with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Vcal updated', objVcal);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

vcalsCtrl.updateVcalByContent = async (req, res) => {
     const { content } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objVcal = await vcalService.updateVcalByContent(content, req.body);
            if (!objVcal) {
                util.setError(404, `Cannot find vcal with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Vcal updated', objVcal);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

vcalsCtrl.updateVcalByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objVcal = await vcalService.updateVcalByDateEntered(dateEntered, req.body);
            if (!objVcal) {
                util.setError(404, `Cannot find vcal with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Vcal updated', objVcal);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

vcalsCtrl.updateVcalByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objVcal = await vcalService.updateVcalByDateModified(dateModified, req.body);
            if (!objVcal) {
                util.setError(404, `Cannot find vcal with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Vcal updated', objVcal);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

vcalsCtrl.updateVcalByUserId = async (req, res) => {
     const { userId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objVcal = await vcalService.updateVcalByUserId(userId, req.body);
            if (!objVcal) {
                util.setError(404, `Cannot find vcal with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Vcal updated', objVcal);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = vcalsCtrl;
//</es-section>
