/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:15 GMT-0400 (Bolivia Time)
 * Time: 14:1:15
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:15 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:15
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const pilatCronService = require('../services/pilat_crons.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const pilatCronsCtrl = {};
pilatCronsCtrl.service = pilatCronService;


pilatCronsCtrl.getAllPilatCrons = async (req, res) => {
    try {
        const objPilatCrons = await pilatCronService.getAllPilatCrons(req.query);
        if (objPilatCrons.length > 0) {
            util.setSuccess(200, 'PilatCrons retrieved', objPilatCrons);
        } else {
            util.setSuccess(200, 'No pilatCron found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatCronsCtrl.getAPilatCron = async (req, res) => {
    try {
        const { Id } = req.params;
        if (!util.isString(Id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objPilatCron = await pilatCronService.getAPilatCron(Id, req.query);
        if (!objPilatCron) {
            util.setError(404, `Cannot find pilatCron with the id ${Id}`);
        } else {
            util.setSuccess(200, 'Found pilatCron', objPilatCron);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatCronsCtrl.addPilatCron = async (req, res) => {
    try {
        const objPilatCron = await pilatCronService.addPilatCron(req.body);
        util.setSuccess(201, 'PilatCron Added!', objPilatCron);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatCronsCtrl.updatePilatCron = async (req, res) => {
    try {
        const { Id } = req.params;
        if (!util.isString(Id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objPilatCron = await pilatCronService.updatePilatCron(Id, req.body);
        if (!objPilatCron) {
            util.setError(404, `Cannot find pilatCron with the id: ${Id}`);
        } else {
            util.setSuccess(200, 'PilatCron updated', objPilatCron);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

pilatCronsCtrl.deletePilatCron = async (req, res) => {
    try {
        const { Id } = req.params;
        if (!util.isString(Id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objPilatCron = await pilatCronService.deletePilatCron(Id);
        if (objPilatCron) {
            util.setSuccess(200, 'PilatCron deleted', objPilatCron);
        } else {
            util.setError(404, `PilatCron with the id ${Id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



pilatCronsCtrl.findOneByUid = async (req, res) => {
    try {
        const { Id } = req.params;
        const objPilatCron = await pilatCronService.findOneByUid(Id, req.query);
        if (!objPilatCron) {
            util.setError(404, `Cannot find pilatCron with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatCron', objPilatCron);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatCronsCtrl.findOneByCroStatus = async (req, res) => {
    try {
        const { croStatus } = req.params;
        const objPilatCron = await pilatCronService.findOneByCroStatus(croStatus, req.query);
        if (!objPilatCron) {
            util.setError(404, `Cannot find pilatCron with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatCron', objPilatCron);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatCronsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objPilatCron = await pilatCronService.findOneById(id, req.query);
        if (!objPilatCron) {
            util.setError(404, `Cannot find pilatCron with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatCron', objPilatCron);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatCronsCtrl.findOneByCroDescription = async (req, res) => {
    try {
        const { croDescription } = req.params;
        const objPilatCron = await pilatCronService.findOneByCroDescription(croDescription, req.query);
        if (!objPilatCron) {
            util.setError(404, `Cannot find pilatCron with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatCron', objPilatCron);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatCronsCtrl.findOneByCroExpression = async (req, res) => {
    try {
        const { croExpression } = req.params;
        const objPilatCron = await pilatCronService.findOneByCroExpression(croExpression, req.query);
        if (!objPilatCron) {
            util.setError(404, `Cannot find pilatCron with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatCron', objPilatCron);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatCronsCtrl.findOneByCroGroup = async (req, res) => {
    try {
        const { croGroup } = req.params;
        const objPilatCron = await pilatCronService.findOneByCroGroup(croGroup, req.query);
        if (!objPilatCron) {
            util.setError(404, `Cannot find pilatCron with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatCron', objPilatCron);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatCronsCtrl.findOneByCroMaiId = async (req, res) => {
    try {
        const { croMaiId } = req.params;
        const objPilatCron = await pilatCronService.findOneByCroMaiId(croMaiId, req.query);
        if (!objPilatCron) {
            util.setError(404, `Cannot find pilatCron with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatCron', objPilatCron);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatCronsCtrl.findOneByCroLeadId = async (req, res) => {
    try {
        const { croLeadId } = req.params;
        const objPilatCron = await pilatCronService.findOneByCroLeadId(croLeadId, req.query);
        if (!objPilatCron) {
            util.setError(404, `Cannot find pilatCron with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatCron', objPilatCron);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatCronsCtrl.findOneByCreatedby = async (req, res) => {
    try {
        const { createdby } = req.params;
        const objPilatCron = await pilatCronService.findOneByCreatedby(createdby, req.query);
        if (!objPilatCron) {
            util.setError(404, `Cannot find pilatCron with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatCron', objPilatCron);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatCronsCtrl.findOneByUpdatedby = async (req, res) => {
    try {
        const { updatedby } = req.params;
        const objPilatCron = await pilatCronService.findOneByUpdatedby(updatedby, req.query);
        if (!objPilatCron) {
            util.setError(404, `Cannot find pilatCron with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatCron', objPilatCron);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatCronsCtrl.findOneByDueat = async (req, res) => {
    try {
        const { dueat } = req.params;
        const objPilatCron = await pilatCronService.findOneByDueat(dueat, req.query);
        if (!objPilatCron) {
            util.setError(404, `Cannot find pilatCron with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatCron', objPilatCron);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatCronsCtrl.findOneByCreatedat = async (req, res) => {
    try {
        const { createdat } = req.params;
        const objPilatCron = await pilatCronService.findOneByCreatedat(createdat, req.query);
        if (!objPilatCron) {
            util.setError(404, `Cannot find pilatCron with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatCron', objPilatCron);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatCronsCtrl.findOneByUpdatedat = async (req, res) => {
    try {
        const { updatedat } = req.params;
        const objPilatCron = await pilatCronService.findOneByUpdatedat(updatedat, req.query);
        if (!objPilatCron) {
            util.setError(404, `Cannot find pilatCron with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatCron', objPilatCron);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



pilatCronsCtrl.updatePilatCronByUid = async (req, res) => {
     const { Id } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatCron = await pilatCronService.updatePilatCronByUid(Id, req.body);
            if (!objPilatCron) {
                util.setError(404, `Cannot find pilatCron with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatCron updated', objPilatCron);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatCronsCtrl.updatePilatCronByCroStatus = async (req, res) => {
     const { croStatus } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatCron = await pilatCronService.updatePilatCronByCroStatus(croStatus, req.body);
            if (!objPilatCron) {
                util.setError(404, `Cannot find pilatCron with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatCron updated', objPilatCron);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatCronsCtrl.updatePilatCronById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatCron = await pilatCronService.updatePilatCronById(id, req.body);
            if (!objPilatCron) {
                util.setError(404, `Cannot find pilatCron with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatCron updated', objPilatCron);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatCronsCtrl.updatePilatCronByCroDescription = async (req, res) => {
     const { croDescription } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatCron = await pilatCronService.updatePilatCronByCroDescription(croDescription, req.body);
            if (!objPilatCron) {
                util.setError(404, `Cannot find pilatCron with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatCron updated', objPilatCron);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatCronsCtrl.updatePilatCronByCroExpression = async (req, res) => {
     const { croExpression } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatCron = await pilatCronService.updatePilatCronByCroExpression(croExpression, req.body);
            if (!objPilatCron) {
                util.setError(404, `Cannot find pilatCron with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatCron updated', objPilatCron);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatCronsCtrl.updatePilatCronByCroGroup = async (req, res) => {
     const { croGroup } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatCron = await pilatCronService.updatePilatCronByCroGroup(croGroup, req.body);
            if (!objPilatCron) {
                util.setError(404, `Cannot find pilatCron with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatCron updated', objPilatCron);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatCronsCtrl.updatePilatCronByCroMaiId = async (req, res) => {
     const { croMaiId } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatCron = await pilatCronService.updatePilatCronByCroMaiId(croMaiId, req.body);
            if (!objPilatCron) {
                util.setError(404, `Cannot find pilatCron with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatCron updated', objPilatCron);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatCronsCtrl.updatePilatCronByCroLeadId = async (req, res) => {
     const { croLeadId } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatCron = await pilatCronService.updatePilatCronByCroLeadId(croLeadId, req.body);
            if (!objPilatCron) {
                util.setError(404, `Cannot find pilatCron with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatCron updated', objPilatCron);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatCronsCtrl.updatePilatCronByCreatedby = async (req, res) => {
     const { createdby } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatCron = await pilatCronService.updatePilatCronByCreatedby(createdby, req.body);
            if (!objPilatCron) {
                util.setError(404, `Cannot find pilatCron with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatCron updated', objPilatCron);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatCronsCtrl.updatePilatCronByUpdatedby = async (req, res) => {
     const { updatedby } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatCron = await pilatCronService.updatePilatCronByUpdatedby(updatedby, req.body);
            if (!objPilatCron) {
                util.setError(404, `Cannot find pilatCron with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatCron updated', objPilatCron);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatCronsCtrl.updatePilatCronByDueat = async (req, res) => {
     const { dueat } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatCron = await pilatCronService.updatePilatCronByDueat(dueat, req.body);
            if (!objPilatCron) {
                util.setError(404, `Cannot find pilatCron with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatCron updated', objPilatCron);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatCronsCtrl.updatePilatCronByCreatedat = async (req, res) => {
     const { createdat } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatCron = await pilatCronService.updatePilatCronByCreatedat(createdat, req.body);
            if (!objPilatCron) {
                util.setError(404, `Cannot find pilatCron with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatCron updated', objPilatCron);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatCronsCtrl.updatePilatCronByUpdatedat = async (req, res) => {
     const { updatedat } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatCron = await pilatCronService.updatePilatCronByUpdatedat(updatedat, req.body);
            if (!objPilatCron) {
                util.setError(404, `Cannot find pilatCron with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatCron updated', objPilatCron);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = pilatCronsCtrl;
//</es-section>
