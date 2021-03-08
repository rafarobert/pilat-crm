/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:42 GMT-0400 (Bolivia Time)
 * Time: 15:36:42
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:42 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:42
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const pilatMailService = require('../services/pilat_mails.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const pilatMailsCtrl = {};
pilatMailsCtrl.service = pilatMailService;


pilatMailsCtrl.getAllPilatMails = async (req, res) => {
    try {
        const objPilatMails = await pilatMailService.getAllPilatMails(req.query);
        if (objPilatMails.length > 0) {
            util.setSuccess(200, 'PilatMails retrieved', objPilatMails);
        } else {
            util.setSuccess(200, 'No pilatMail found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.getAPilatMail = async (req, res) => {
    try {
        const { Id } = req.params;
        if (!util.isString(Id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objPilatMail = await pilatMailService.getAPilatMail(Id, req.query);
        if (!objPilatMail) {
            util.setError(404, `Cannot find pilatMail with the id ${Id}`);
        } else {
            util.setSuccess(200, 'Found pilatMail', objPilatMail);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.addPilatMail = async (req, res) => {
    try {
        const objPilatMail = await pilatMailService.addPilatMail(req.body);
        util.setSuccess(201, 'PilatMail Added!', objPilatMail);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.updatePilatMail = async (req, res) => {
    try {
        const { Id } = req.params;
        if (!util.isString(Id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objPilatMail = await pilatMailService.updatePilatMail(Id, req.body);
        if (!objPilatMail) {
            util.setError(404, `Cannot find pilatMail with the id: ${Id}`);
        } else {
            util.setSuccess(200, 'PilatMail updated', objPilatMail);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

pilatMailsCtrl.deletePilatMail = async (req, res) => {
    try {
        const { Id } = req.params;
        if (!util.isString(Id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objPilatMail = await pilatMailService.deletePilatMail(Id);
        if (objPilatMail) {
            util.setSuccess(200, 'PilatMail deleted', objPilatMail);
        } else {
            util.setError(404, `PilatMail with the id ${Id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



pilatMailsCtrl.findOneByUid = async (req, res) => {
    try {
        const { Id } = req.params;
        const objPilatMail = await pilatMailService.findOneByUid(Id, req.query);
        if (!objPilatMail) {
            util.setError(404, `Cannot find pilatMail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatMail', objPilatMail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objPilatMail = await pilatMailService.findOneById(id, req.query);
        if (!objPilatMail) {
            util.setError(404, `Cannot find pilatMail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatMail', objPilatMail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.findOneByMaiPort = async (req, res) => {
    try {
        const { maiPort } = req.params;
        const objPilatMail = await pilatMailService.findOneByMaiPort(maiPort, req.query);
        if (!objPilatMail) {
            util.setError(404, `Cannot find pilatMail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatMail', objPilatMail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.findOneByMaiDescription = async (req, res) => {
    try {
        const { maiDescription } = req.params;
        const objPilatMail = await pilatMailService.findOneByMaiDescription(maiDescription, req.query);
        if (!objPilatMail) {
            util.setError(404, `Cannot find pilatMail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatMail', objPilatMail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.findOneByMaiUserAccount = async (req, res) => {
    try {
        const { maiUserAccount } = req.params;
        const objPilatMail = await pilatMailService.findOneByMaiUserAccount(maiUserAccount, req.query);
        if (!objPilatMail) {
            util.setError(404, `Cannot find pilatMail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatMail', objPilatMail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.findOneByMaiUserPassword = async (req, res) => {
    try {
        const { maiUserPassword } = req.params;
        const objPilatMail = await pilatMailService.findOneByMaiUserPassword(maiUserPassword, req.query);
        if (!objPilatMail) {
            util.setError(404, `Cannot find pilatMail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatMail', objPilatMail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.findOneByMaiHost = async (req, res) => {
    try {
        const { maiHost } = req.params;
        const objPilatMail = await pilatMailService.findOneByMaiHost(maiHost, req.query);
        if (!objPilatMail) {
            util.setError(404, `Cannot find pilatMail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatMail', objPilatMail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.findOneByMaiProtocol = async (req, res) => {
    try {
        const { maiProtocol } = req.params;
        const objPilatMail = await pilatMailService.findOneByMaiProtocol(maiProtocol, req.query);
        if (!objPilatMail) {
            util.setError(404, `Cannot find pilatMail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatMail', objPilatMail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.findOneByMaiBusId = async (req, res) => {
    try {
        const { maiBusId } = req.params;
        const objPilatMail = await pilatMailService.findOneByMaiBusId(maiBusId, req.query);
        if (!objPilatMail) {
            util.setError(404, `Cannot find pilatMail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatMail', objPilatMail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.findOneByMaiParStatusId = async (req, res) => {
    try {
        const { maiParStatusId } = req.params;
        const objPilatMail = await pilatMailService.findOneByMaiParStatusId(maiParStatusId, req.query);
        if (!objPilatMail) {
            util.setError(404, `Cannot find pilatMail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatMail', objPilatMail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.findOneByMaiGroup = async (req, res) => {
    try {
        const { maiGroup } = req.params;
        const objPilatMail = await pilatMailService.findOneByMaiGroup(maiGroup, req.query);
        if (!objPilatMail) {
            util.setError(404, `Cannot find pilatMail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatMail', objPilatMail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.findOneByMaiSubject = async (req, res) => {
    try {
        const { maiSubject } = req.params;
        const objPilatMail = await pilatMailService.findOneByMaiSubject(maiSubject, req.query);
        if (!objPilatMail) {
            util.setError(404, `Cannot find pilatMail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatMail', objPilatMail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.findOneByMaiTo = async (req, res) => {
    try {
        const { maiTo } = req.params;
        const objPilatMail = await pilatMailService.findOneByMaiTo(maiTo, req.query);
        if (!objPilatMail) {
            util.setError(404, `Cannot find pilatMail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatMail', objPilatMail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.findOneByUpdatedby = async (req, res) => {
    try {
        const { updatedby } = req.params;
        const objPilatMail = await pilatMailService.findOneByUpdatedby(updatedby, req.query);
        if (!objPilatMail) {
            util.setError(404, `Cannot find pilatMail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatMail', objPilatMail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.findOneByCreatedby = async (req, res) => {
    try {
        const { createdby } = req.params;
        const objPilatMail = await pilatMailService.findOneByCreatedby(createdby, req.query);
        if (!objPilatMail) {
            util.setError(404, `Cannot find pilatMail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatMail', objPilatMail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.findOneByMaiBcc = async (req, res) => {
    try {
        const { maiBcc } = req.params;
        const objPilatMail = await pilatMailService.findOneByMaiBcc(maiBcc, req.query);
        if (!objPilatMail) {
            util.setError(404, `Cannot find pilatMail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatMail', objPilatMail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.findOneByMaiCc = async (req, res) => {
    try {
        const { maiCc } = req.params;
        const objPilatMail = await pilatMailService.findOneByMaiCc(maiCc, req.query);
        if (!objPilatMail) {
            util.setError(404, `Cannot find pilatMail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatMail', objPilatMail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.findOneByMaiText = async (req, res) => {
    try {
        const { maiText } = req.params;
        const objPilatMail = await pilatMailService.findOneByMaiText(maiText, req.query);
        if (!objPilatMail) {
            util.setError(404, `Cannot find pilatMail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatMail', objPilatMail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.findOneByMaiHtml = async (req, res) => {
    try {
        const { maiHtml } = req.params;
        const objPilatMail = await pilatMailService.findOneByMaiHtml(maiHtml, req.query);
        if (!objPilatMail) {
            util.setError(404, `Cannot find pilatMail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatMail', objPilatMail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.findOneByDueat = async (req, res) => {
    try {
        const { dueat } = req.params;
        const objPilatMail = await pilatMailService.findOneByDueat(dueat, req.query);
        if (!objPilatMail) {
            util.setError(404, `Cannot find pilatMail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatMail', objPilatMail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.findOneByCreatedat = async (req, res) => {
    try {
        const { createdat } = req.params;
        const objPilatMail = await pilatMailService.findOneByCreatedat(createdat, req.query);
        if (!objPilatMail) {
            util.setError(404, `Cannot find pilatMail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatMail', objPilatMail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.findOneByUpdatedat = async (req, res) => {
    try {
        const { updatedat } = req.params;
        const objPilatMail = await pilatMailService.findOneByUpdatedat(updatedat, req.query);
        if (!objPilatMail) {
            util.setError(404, `Cannot find pilatMail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatMail', objPilatMail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



pilatMailsCtrl.updatePilatMailByUid = async (req, res) => {
     const { Id } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatMail = await pilatMailService.updatePilatMailByUid(Id, req.body);
            if (!objPilatMail) {
                util.setError(404, `Cannot find pilatMail with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatMail updated', objPilatMail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatMailsCtrl.updatePilatMailById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatMail = await pilatMailService.updatePilatMailById(id, req.body);
            if (!objPilatMail) {
                util.setError(404, `Cannot find pilatMail with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatMail updated', objPilatMail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatMailsCtrl.updatePilatMailByMaiPort = async (req, res) => {
     const { maiPort } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatMail = await pilatMailService.updatePilatMailByMaiPort(maiPort, req.body);
            if (!objPilatMail) {
                util.setError(404, `Cannot find pilatMail with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatMail updated', objPilatMail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatMailsCtrl.updatePilatMailByMaiDescription = async (req, res) => {
     const { maiDescription } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatMail = await pilatMailService.updatePilatMailByMaiDescription(maiDescription, req.body);
            if (!objPilatMail) {
                util.setError(404, `Cannot find pilatMail with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatMail updated', objPilatMail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatMailsCtrl.updatePilatMailByMaiUserAccount = async (req, res) => {
     const { maiUserAccount } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatMail = await pilatMailService.updatePilatMailByMaiUserAccount(maiUserAccount, req.body);
            if (!objPilatMail) {
                util.setError(404, `Cannot find pilatMail with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatMail updated', objPilatMail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatMailsCtrl.updatePilatMailByMaiUserPassword = async (req, res) => {
     const { maiUserPassword } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatMail = await pilatMailService.updatePilatMailByMaiUserPassword(maiUserPassword, req.body);
            if (!objPilatMail) {
                util.setError(404, `Cannot find pilatMail with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatMail updated', objPilatMail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatMailsCtrl.updatePilatMailByMaiHost = async (req, res) => {
     const { maiHost } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatMail = await pilatMailService.updatePilatMailByMaiHost(maiHost, req.body);
            if (!objPilatMail) {
                util.setError(404, `Cannot find pilatMail with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatMail updated', objPilatMail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatMailsCtrl.updatePilatMailByMaiProtocol = async (req, res) => {
     const { maiProtocol } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatMail = await pilatMailService.updatePilatMailByMaiProtocol(maiProtocol, req.body);
            if (!objPilatMail) {
                util.setError(404, `Cannot find pilatMail with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatMail updated', objPilatMail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatMailsCtrl.updatePilatMailByMaiBusId = async (req, res) => {
     const { maiBusId } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatMail = await pilatMailService.updatePilatMailByMaiBusId(maiBusId, req.body);
            if (!objPilatMail) {
                util.setError(404, `Cannot find pilatMail with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatMail updated', objPilatMail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatMailsCtrl.updatePilatMailByMaiParStatusId = async (req, res) => {
     const { maiParStatusId } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatMail = await pilatMailService.updatePilatMailByMaiParStatusId(maiParStatusId, req.body);
            if (!objPilatMail) {
                util.setError(404, `Cannot find pilatMail with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatMail updated', objPilatMail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatMailsCtrl.updatePilatMailByMaiGroup = async (req, res) => {
     const { maiGroup } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatMail = await pilatMailService.updatePilatMailByMaiGroup(maiGroup, req.body);
            if (!objPilatMail) {
                util.setError(404, `Cannot find pilatMail with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatMail updated', objPilatMail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatMailsCtrl.updatePilatMailByMaiSubject = async (req, res) => {
     const { maiSubject } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatMail = await pilatMailService.updatePilatMailByMaiSubject(maiSubject, req.body);
            if (!objPilatMail) {
                util.setError(404, `Cannot find pilatMail with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatMail updated', objPilatMail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatMailsCtrl.updatePilatMailByMaiTo = async (req, res) => {
     const { maiTo } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatMail = await pilatMailService.updatePilatMailByMaiTo(maiTo, req.body);
            if (!objPilatMail) {
                util.setError(404, `Cannot find pilatMail with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatMail updated', objPilatMail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatMailsCtrl.updatePilatMailByUpdatedby = async (req, res) => {
     const { updatedby } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatMail = await pilatMailService.updatePilatMailByUpdatedby(updatedby, req.body);
            if (!objPilatMail) {
                util.setError(404, `Cannot find pilatMail with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatMail updated', objPilatMail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatMailsCtrl.updatePilatMailByCreatedby = async (req, res) => {
     const { createdby } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatMail = await pilatMailService.updatePilatMailByCreatedby(createdby, req.body);
            if (!objPilatMail) {
                util.setError(404, `Cannot find pilatMail with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatMail updated', objPilatMail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatMailsCtrl.updatePilatMailByMaiBcc = async (req, res) => {
     const { maiBcc } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatMail = await pilatMailService.updatePilatMailByMaiBcc(maiBcc, req.body);
            if (!objPilatMail) {
                util.setError(404, `Cannot find pilatMail with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatMail updated', objPilatMail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatMailsCtrl.updatePilatMailByMaiCc = async (req, res) => {
     const { maiCc } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatMail = await pilatMailService.updatePilatMailByMaiCc(maiCc, req.body);
            if (!objPilatMail) {
                util.setError(404, `Cannot find pilatMail with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatMail updated', objPilatMail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatMailsCtrl.updatePilatMailByMaiText = async (req, res) => {
     const { maiText } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatMail = await pilatMailService.updatePilatMailByMaiText(maiText, req.body);
            if (!objPilatMail) {
                util.setError(404, `Cannot find pilatMail with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatMail updated', objPilatMail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatMailsCtrl.updatePilatMailByMaiHtml = async (req, res) => {
     const { maiHtml } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatMail = await pilatMailService.updatePilatMailByMaiHtml(maiHtml, req.body);
            if (!objPilatMail) {
                util.setError(404, `Cannot find pilatMail with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatMail updated', objPilatMail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatMailsCtrl.updatePilatMailByDueat = async (req, res) => {
     const { dueat } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatMail = await pilatMailService.updatePilatMailByDueat(dueat, req.body);
            if (!objPilatMail) {
                util.setError(404, `Cannot find pilatMail with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatMail updated', objPilatMail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatMailsCtrl.updatePilatMailByCreatedat = async (req, res) => {
     const { createdat } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatMail = await pilatMailService.updatePilatMailByCreatedat(createdat, req.body);
            if (!objPilatMail) {
                util.setError(404, `Cannot find pilatMail with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatMail updated', objPilatMail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatMailsCtrl.updatePilatMailByUpdatedat = async (req, res) => {
     const { updatedat } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatMail = await pilatMailService.updatePilatMailByUpdatedat(updatedat, req.body);
            if (!objPilatMail) {
                util.setError(404, `Cannot find pilatMail with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatMail updated', objPilatMail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}



pilatMailsCtrl.findPilatParamsMaiParStatusWithParOrder = async (req, res) => {
    try {
        const { select } = req.params;
        const pilatMails = await pilatMailService.findPilatParamsMaiParStatusWithParOrder(select, req.query);
        if (pilatMails.length > 0) {
            util.setSuccess(200, 'PilatMails retrieved', pilatMails);
        } else {
            util.setSuccess(200, 'No pilatMail found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



pilatMailsCtrl.filterPilatMailsByMaiParStatus = async (req, res) => {
    try {
        const { Id } = req.params;
        const pilatMails = await pilatMailService.filterPilatMailsByMaiParStatus(Id, req.query);
        if (pilatMails.length > 0) {
            util.setSuccess(200, 'PilatMails retrieved', pilatMails);
        } else {
            util.setSuccess(200, 'No pilatMail found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.filterPilatMailsByMaiParStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const pilatMails = await pilatMailService.filterPilatMailsByMaiParStatus(id, req.query);
        if (pilatMails.length > 0) {
            util.setSuccess(200, 'PilatMails retrieved', pilatMails);
        } else {
            util.setSuccess(200, 'No pilatMail found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.filterPilatMailsByMaiParStatus = async (req, res) => {
    try {
        const { maiPort } = req.params;
        const pilatMails = await pilatMailService.filterPilatMailsByMaiParStatus(maiPort, req.query);
        if (pilatMails.length > 0) {
            util.setSuccess(200, 'PilatMails retrieved', pilatMails);
        } else {
            util.setSuccess(200, 'No pilatMail found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.filterPilatMailsByMaiParStatus = async (req, res) => {
    try {
        const { maiDescription } = req.params;
        const pilatMails = await pilatMailService.filterPilatMailsByMaiParStatus(maiDescription, req.query);
        if (pilatMails.length > 0) {
            util.setSuccess(200, 'PilatMails retrieved', pilatMails);
        } else {
            util.setSuccess(200, 'No pilatMail found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.filterPilatMailsByMaiParStatus = async (req, res) => {
    try {
        const { maiUserAccount } = req.params;
        const pilatMails = await pilatMailService.filterPilatMailsByMaiParStatus(maiUserAccount, req.query);
        if (pilatMails.length > 0) {
            util.setSuccess(200, 'PilatMails retrieved', pilatMails);
        } else {
            util.setSuccess(200, 'No pilatMail found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.filterPilatMailsByMaiParStatus = async (req, res) => {
    try {
        const { maiUserPassword } = req.params;
        const pilatMails = await pilatMailService.filterPilatMailsByMaiParStatus(maiUserPassword, req.query);
        if (pilatMails.length > 0) {
            util.setSuccess(200, 'PilatMails retrieved', pilatMails);
        } else {
            util.setSuccess(200, 'No pilatMail found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.filterPilatMailsByMaiParStatus = async (req, res) => {
    try {
        const { maiHost } = req.params;
        const pilatMails = await pilatMailService.filterPilatMailsByMaiParStatus(maiHost, req.query);
        if (pilatMails.length > 0) {
            util.setSuccess(200, 'PilatMails retrieved', pilatMails);
        } else {
            util.setSuccess(200, 'No pilatMail found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.filterPilatMailsByMaiParStatus = async (req, res) => {
    try {
        const { maiProtocol } = req.params;
        const pilatMails = await pilatMailService.filterPilatMailsByMaiParStatus(maiProtocol, req.query);
        if (pilatMails.length > 0) {
            util.setSuccess(200, 'PilatMails retrieved', pilatMails);
        } else {
            util.setSuccess(200, 'No pilatMail found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.filterPilatMailsByMaiParStatus = async (req, res) => {
    try {
        const { maiBusId } = req.params;
        const pilatMails = await pilatMailService.filterPilatMailsByMaiParStatus(maiBusId, req.query);
        if (pilatMails.length > 0) {
            util.setSuccess(200, 'PilatMails retrieved', pilatMails);
        } else {
            util.setSuccess(200, 'No pilatMail found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.filterPilatMailsByMaiParStatus = async (req, res) => {
    try {
        const { maiParStatusId } = req.params;
        const pilatMails = await pilatMailService.filterPilatMailsByMaiParStatus(maiParStatusId, req.query);
        if (pilatMails.length > 0) {
            util.setSuccess(200, 'PilatMails retrieved', pilatMails);
        } else {
            util.setSuccess(200, 'No pilatMail found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.filterPilatMailsByMaiParStatus = async (req, res) => {
    try {
        const { maiGroup } = req.params;
        const pilatMails = await pilatMailService.filterPilatMailsByMaiParStatus(maiGroup, req.query);
        if (pilatMails.length > 0) {
            util.setSuccess(200, 'PilatMails retrieved', pilatMails);
        } else {
            util.setSuccess(200, 'No pilatMail found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.filterPilatMailsByMaiParStatus = async (req, res) => {
    try {
        const { maiSubject } = req.params;
        const pilatMails = await pilatMailService.filterPilatMailsByMaiParStatus(maiSubject, req.query);
        if (pilatMails.length > 0) {
            util.setSuccess(200, 'PilatMails retrieved', pilatMails);
        } else {
            util.setSuccess(200, 'No pilatMail found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.filterPilatMailsByMaiParStatus = async (req, res) => {
    try {
        const { maiTo } = req.params;
        const pilatMails = await pilatMailService.filterPilatMailsByMaiParStatus(maiTo, req.query);
        if (pilatMails.length > 0) {
            util.setSuccess(200, 'PilatMails retrieved', pilatMails);
        } else {
            util.setSuccess(200, 'No pilatMail found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.filterPilatMailsByMaiParStatus = async (req, res) => {
    try {
        const { updatedby } = req.params;
        const pilatMails = await pilatMailService.filterPilatMailsByMaiParStatus(updatedby, req.query);
        if (pilatMails.length > 0) {
            util.setSuccess(200, 'PilatMails retrieved', pilatMails);
        } else {
            util.setSuccess(200, 'No pilatMail found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.filterPilatMailsByMaiParStatus = async (req, res) => {
    try {
        const { createdby } = req.params;
        const pilatMails = await pilatMailService.filterPilatMailsByMaiParStatus(createdby, req.query);
        if (pilatMails.length > 0) {
            util.setSuccess(200, 'PilatMails retrieved', pilatMails);
        } else {
            util.setSuccess(200, 'No pilatMail found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.filterPilatMailsByMaiParStatus = async (req, res) => {
    try {
        const { maiBcc } = req.params;
        const pilatMails = await pilatMailService.filterPilatMailsByMaiParStatus(maiBcc, req.query);
        if (pilatMails.length > 0) {
            util.setSuccess(200, 'PilatMails retrieved', pilatMails);
        } else {
            util.setSuccess(200, 'No pilatMail found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.filterPilatMailsByMaiParStatus = async (req, res) => {
    try {
        const { maiCc } = req.params;
        const pilatMails = await pilatMailService.filterPilatMailsByMaiParStatus(maiCc, req.query);
        if (pilatMails.length > 0) {
            util.setSuccess(200, 'PilatMails retrieved', pilatMails);
        } else {
            util.setSuccess(200, 'No pilatMail found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.filterPilatMailsByMaiParStatus = async (req, res) => {
    try {
        const { maiText } = req.params;
        const pilatMails = await pilatMailService.filterPilatMailsByMaiParStatus(maiText, req.query);
        if (pilatMails.length > 0) {
            util.setSuccess(200, 'PilatMails retrieved', pilatMails);
        } else {
            util.setSuccess(200, 'No pilatMail found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.filterPilatMailsByMaiParStatus = async (req, res) => {
    try {
        const { maiHtml } = req.params;
        const pilatMails = await pilatMailService.filterPilatMailsByMaiParStatus(maiHtml, req.query);
        if (pilatMails.length > 0) {
            util.setSuccess(200, 'PilatMails retrieved', pilatMails);
        } else {
            util.setSuccess(200, 'No pilatMail found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.filterPilatMailsByMaiParStatus = async (req, res) => {
    try {
        const { dueat } = req.params;
        const pilatMails = await pilatMailService.filterPilatMailsByMaiParStatus(dueat, req.query);
        if (pilatMails.length > 0) {
            util.setSuccess(200, 'PilatMails retrieved', pilatMails);
        } else {
            util.setSuccess(200, 'No pilatMail found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.filterPilatMailsByMaiParStatus = async (req, res) => {
    try {
        const { createdat } = req.params;
        const pilatMails = await pilatMailService.filterPilatMailsByMaiParStatus(createdat, req.query);
        if (pilatMails.length > 0) {
            util.setSuccess(200, 'PilatMails retrieved', pilatMails);
        } else {
            util.setSuccess(200, 'No pilatMail found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatMailsCtrl.filterPilatMailsByMaiParStatus = async (req, res) => {
    try {
        const { updatedat } = req.params;
        const pilatMails = await pilatMailService.filterPilatMailsByMaiParStatus(updatedat, req.query);
        if (pilatMails.length > 0) {
            util.setSuccess(200, 'PilatMails retrieved', pilatMails);
        } else {
            util.setSuccess(200, 'No pilatMail found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



//</es-section>

//<es-section>
module.exports = pilatMailsCtrl;
//</es-section>
