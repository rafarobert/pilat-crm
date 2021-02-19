/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:07 GMT-0400 (Bolivia Time)
 * Time: 18:38:7
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:07 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:7
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const pilatDictionaryService = require('../services/pilat_dictionaries.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const pilatDictionariesCtrl = {};
pilatDictionariesCtrl.service = pilatDictionaryService;


pilatDictionariesCtrl.getAllPilatDictionaries = async (req, res) => {
    try {
        const objPilatDictionaries = await pilatDictionaryService.getAllPilatDictionaries(req.query);
        if (objPilatDictionaries.length > 0) {
            util.setSuccess(200, 'PilatDictionaries retrieved', objPilatDictionaries);
        } else {
            util.setSuccess(200, 'No pilatDictionary found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatDictionariesCtrl.getAPilatDictionary = async (req, res) => {
    try {
        const { Id } = req.params;
        if (!util.isString(Id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objPilatDictionary = await pilatDictionaryService.getAPilatDictionary(Id, req.query);
        if (!objPilatDictionary) {
            util.setError(404, `Cannot find pilatDictionary with the id ${Id}`);
        } else {
            util.setSuccess(200, 'Found pilatDictionary', objPilatDictionary);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatDictionariesCtrl.addPilatDictionary = async (req, res) => {
    try {
        const objPilatDictionary = await pilatDictionaryService.addPilatDictionary(req.body);
        util.setSuccess(201, 'PilatDictionary Added!', objPilatDictionary);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatDictionariesCtrl.updatePilatDictionary = async (req, res) => {
    try {
        const { Id } = req.params;
        if (!util.isString(Id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objPilatDictionary = await pilatDictionaryService.updatePilatDictionary(Id, req.body);
        if (!objPilatDictionary) {
            util.setError(404, `Cannot find pilatDictionary with the id: ${Id}`);
        } else {
            util.setSuccess(200, 'PilatDictionary updated', objPilatDictionary);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

pilatDictionariesCtrl.deletePilatDictionary = async (req, res) => {
    try {
        const { Id } = req.params;
        if (!util.isString(Id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objPilatDictionary = await pilatDictionaryService.deletePilatDictionary(Id);
        if (objPilatDictionary) {
            util.setSuccess(200, 'PilatDictionary deleted', objPilatDictionary);
        } else {
            util.setError(404, `PilatDictionary with the id ${Id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



pilatDictionariesCtrl.findOneByUid = async (req, res) => {
    try {
        const { Id } = req.params;
        const objPilatDictionary = await pilatDictionaryService.findOneByUid(Id, req.query);
        if (!objPilatDictionary) {
            util.setError(404, `Cannot find pilatDictionary with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatDictionary', objPilatDictionary);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatDictionariesCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objPilatDictionary = await pilatDictionaryService.findOneById(id, req.query);
        if (!objPilatDictionary) {
            util.setError(404, `Cannot find pilatDictionary with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatDictionary', objPilatDictionary);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatDictionariesCtrl.findOneByDicCode = async (req, res) => {
    try {
        const { dicCode } = req.params;
        const objPilatDictionary = await pilatDictionaryService.findOneByDicCode(dicCode, req.query);
        if (!objPilatDictionary) {
            util.setError(404, `Cannot find pilatDictionary with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatDictionary', objPilatDictionary);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatDictionariesCtrl.findOneByDicDescription = async (req, res) => {
    try {
        const { dicDescription } = req.params;
        const objPilatDictionary = await pilatDictionaryService.findOneByDicDescription(dicDescription, req.query);
        if (!objPilatDictionary) {
            util.setError(404, `Cannot find pilatDictionary with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatDictionary', objPilatDictionary);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatDictionariesCtrl.findOneByDicGroup = async (req, res) => {
    try {
        const { dicGroup } = req.params;
        const objPilatDictionary = await pilatDictionaryService.findOneByDicGroup(dicGroup, req.query);
        if (!objPilatDictionary) {
            util.setError(404, `Cannot find pilatDictionary with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatDictionary', objPilatDictionary);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatDictionariesCtrl.findOneByDicParStatusId = async (req, res) => {
    try {
        const { dicParStatusId } = req.params;
        const objPilatDictionary = await pilatDictionaryService.findOneByDicParStatusId(dicParStatusId, req.query);
        if (!objPilatDictionary) {
            util.setError(404, `Cannot find pilatDictionary with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatDictionary', objPilatDictionary);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatDictionariesCtrl.findOneByCreatedby = async (req, res) => {
    try {
        const { createdby } = req.params;
        const objPilatDictionary = await pilatDictionaryService.findOneByCreatedby(createdby, req.query);
        if (!objPilatDictionary) {
            util.setError(404, `Cannot find pilatDictionary with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatDictionary', objPilatDictionary);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatDictionariesCtrl.findOneByUpdatedby = async (req, res) => {
    try {
        const { updatedby } = req.params;
        const objPilatDictionary = await pilatDictionaryService.findOneByUpdatedby(updatedby, req.query);
        if (!objPilatDictionary) {
            util.setError(404, `Cannot find pilatDictionary with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatDictionary', objPilatDictionary);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatDictionariesCtrl.findOneByDueat = async (req, res) => {
    try {
        const { dueat } = req.params;
        const objPilatDictionary = await pilatDictionaryService.findOneByDueat(dueat, req.query);
        if (!objPilatDictionary) {
            util.setError(404, `Cannot find pilatDictionary with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatDictionary', objPilatDictionary);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatDictionariesCtrl.findOneByCreatedat = async (req, res) => {
    try {
        const { createdat } = req.params;
        const objPilatDictionary = await pilatDictionaryService.findOneByCreatedat(createdat, req.query);
        if (!objPilatDictionary) {
            util.setError(404, `Cannot find pilatDictionary with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatDictionary', objPilatDictionary);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatDictionariesCtrl.findOneByUpdatedat = async (req, res) => {
    try {
        const { updatedat } = req.params;
        const objPilatDictionary = await pilatDictionaryService.findOneByUpdatedat(updatedat, req.query);
        if (!objPilatDictionary) {
            util.setError(404, `Cannot find pilatDictionary with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatDictionary', objPilatDictionary);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



pilatDictionariesCtrl.updatePilatDictionaryByUid = async (req, res) => {
     const { Id } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatDictionary = await pilatDictionaryService.updatePilatDictionaryByUid(Id, req.body);
            if (!objPilatDictionary) {
                util.setError(404, `Cannot find pilatDictionary with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatDictionary updated', objPilatDictionary);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatDictionariesCtrl.updatePilatDictionaryById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatDictionary = await pilatDictionaryService.updatePilatDictionaryById(id, req.body);
            if (!objPilatDictionary) {
                util.setError(404, `Cannot find pilatDictionary with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatDictionary updated', objPilatDictionary);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatDictionariesCtrl.updatePilatDictionaryByDicCode = async (req, res) => {
     const { dicCode } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatDictionary = await pilatDictionaryService.updatePilatDictionaryByDicCode(dicCode, req.body);
            if (!objPilatDictionary) {
                util.setError(404, `Cannot find pilatDictionary with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatDictionary updated', objPilatDictionary);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatDictionariesCtrl.updatePilatDictionaryByDicDescription = async (req, res) => {
     const { dicDescription } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatDictionary = await pilatDictionaryService.updatePilatDictionaryByDicDescription(dicDescription, req.body);
            if (!objPilatDictionary) {
                util.setError(404, `Cannot find pilatDictionary with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatDictionary updated', objPilatDictionary);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatDictionariesCtrl.updatePilatDictionaryByDicGroup = async (req, res) => {
     const { dicGroup } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatDictionary = await pilatDictionaryService.updatePilatDictionaryByDicGroup(dicGroup, req.body);
            if (!objPilatDictionary) {
                util.setError(404, `Cannot find pilatDictionary with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatDictionary updated', objPilatDictionary);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatDictionariesCtrl.updatePilatDictionaryByDicParStatusId = async (req, res) => {
     const { dicParStatusId } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatDictionary = await pilatDictionaryService.updatePilatDictionaryByDicParStatusId(dicParStatusId, req.body);
            if (!objPilatDictionary) {
                util.setError(404, `Cannot find pilatDictionary with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatDictionary updated', objPilatDictionary);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatDictionariesCtrl.updatePilatDictionaryByCreatedby = async (req, res) => {
     const { createdby } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatDictionary = await pilatDictionaryService.updatePilatDictionaryByCreatedby(createdby, req.body);
            if (!objPilatDictionary) {
                util.setError(404, `Cannot find pilatDictionary with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatDictionary updated', objPilatDictionary);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatDictionariesCtrl.updatePilatDictionaryByUpdatedby = async (req, res) => {
     const { updatedby } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatDictionary = await pilatDictionaryService.updatePilatDictionaryByUpdatedby(updatedby, req.body);
            if (!objPilatDictionary) {
                util.setError(404, `Cannot find pilatDictionary with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatDictionary updated', objPilatDictionary);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatDictionariesCtrl.updatePilatDictionaryByDueat = async (req, res) => {
     const { dueat } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatDictionary = await pilatDictionaryService.updatePilatDictionaryByDueat(dueat, req.body);
            if (!objPilatDictionary) {
                util.setError(404, `Cannot find pilatDictionary with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatDictionary updated', objPilatDictionary);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatDictionariesCtrl.updatePilatDictionaryByCreatedat = async (req, res) => {
     const { createdat } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatDictionary = await pilatDictionaryService.updatePilatDictionaryByCreatedat(createdat, req.body);
            if (!objPilatDictionary) {
                util.setError(404, `Cannot find pilatDictionary with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatDictionary updated', objPilatDictionary);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatDictionariesCtrl.updatePilatDictionaryByUpdatedat = async (req, res) => {
     const { updatedat } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatDictionary = await pilatDictionaryService.updatePilatDictionaryByUpdatedat(updatedat, req.body);
            if (!objPilatDictionary) {
                util.setError(404, `Cannot find pilatDictionary with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatDictionary updated', objPilatDictionary);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}



pilatDictionariesCtrl.findPilatParamsDicParStatusWithParOrder = async (req, res) => {
    try {
        const { select } = req.params;
        const pilatDictionaries = await pilatDictionaryService.findPilatParamsDicParStatusWithParOrder(select, req.query);
        if (pilatDictionaries.length > 0) {
            util.setSuccess(200, 'PilatDictionaries retrieved', pilatDictionaries);
        } else {
            util.setSuccess(200, 'No pilatDictionary found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



pilatDictionariesCtrl.filterPilatDictionariesByDicParStatus = async (req, res) => {
    try {
        const { Id } = req.params;
        const pilatDictionaries = await pilatDictionaryService.filterPilatDictionariesByDicParStatus(Id, req.query);
        if (pilatDictionaries.length > 0) {
            util.setSuccess(200, 'PilatDictionaries retrieved', pilatDictionaries);
        } else {
            util.setSuccess(200, 'No pilatDictionary found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatDictionariesCtrl.filterPilatDictionariesByDicParStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const pilatDictionaries = await pilatDictionaryService.filterPilatDictionariesByDicParStatus(id, req.query);
        if (pilatDictionaries.length > 0) {
            util.setSuccess(200, 'PilatDictionaries retrieved', pilatDictionaries);
        } else {
            util.setSuccess(200, 'No pilatDictionary found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatDictionariesCtrl.filterPilatDictionariesByDicParStatus = async (req, res) => {
    try {
        const { dicCode } = req.params;
        const pilatDictionaries = await pilatDictionaryService.filterPilatDictionariesByDicParStatus(dicCode, req.query);
        if (pilatDictionaries.length > 0) {
            util.setSuccess(200, 'PilatDictionaries retrieved', pilatDictionaries);
        } else {
            util.setSuccess(200, 'No pilatDictionary found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatDictionariesCtrl.filterPilatDictionariesByDicParStatus = async (req, res) => {
    try {
        const { dicDescription } = req.params;
        const pilatDictionaries = await pilatDictionaryService.filterPilatDictionariesByDicParStatus(dicDescription, req.query);
        if (pilatDictionaries.length > 0) {
            util.setSuccess(200, 'PilatDictionaries retrieved', pilatDictionaries);
        } else {
            util.setSuccess(200, 'No pilatDictionary found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatDictionariesCtrl.filterPilatDictionariesByDicParStatus = async (req, res) => {
    try {
        const { dicGroup } = req.params;
        const pilatDictionaries = await pilatDictionaryService.filterPilatDictionariesByDicParStatus(dicGroup, req.query);
        if (pilatDictionaries.length > 0) {
            util.setSuccess(200, 'PilatDictionaries retrieved', pilatDictionaries);
        } else {
            util.setSuccess(200, 'No pilatDictionary found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatDictionariesCtrl.filterPilatDictionariesByDicParStatus = async (req, res) => {
    try {
        const { dicParStatusId } = req.params;
        const pilatDictionaries = await pilatDictionaryService.filterPilatDictionariesByDicParStatus(dicParStatusId, req.query);
        if (pilatDictionaries.length > 0) {
            util.setSuccess(200, 'PilatDictionaries retrieved', pilatDictionaries);
        } else {
            util.setSuccess(200, 'No pilatDictionary found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatDictionariesCtrl.filterPilatDictionariesByDicParStatus = async (req, res) => {
    try {
        const { createdby } = req.params;
        const pilatDictionaries = await pilatDictionaryService.filterPilatDictionariesByDicParStatus(createdby, req.query);
        if (pilatDictionaries.length > 0) {
            util.setSuccess(200, 'PilatDictionaries retrieved', pilatDictionaries);
        } else {
            util.setSuccess(200, 'No pilatDictionary found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatDictionariesCtrl.filterPilatDictionariesByDicParStatus = async (req, res) => {
    try {
        const { updatedby } = req.params;
        const pilatDictionaries = await pilatDictionaryService.filterPilatDictionariesByDicParStatus(updatedby, req.query);
        if (pilatDictionaries.length > 0) {
            util.setSuccess(200, 'PilatDictionaries retrieved', pilatDictionaries);
        } else {
            util.setSuccess(200, 'No pilatDictionary found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatDictionariesCtrl.filterPilatDictionariesByDicParStatus = async (req, res) => {
    try {
        const { dueat } = req.params;
        const pilatDictionaries = await pilatDictionaryService.filterPilatDictionariesByDicParStatus(dueat, req.query);
        if (pilatDictionaries.length > 0) {
            util.setSuccess(200, 'PilatDictionaries retrieved', pilatDictionaries);
        } else {
            util.setSuccess(200, 'No pilatDictionary found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatDictionariesCtrl.filterPilatDictionariesByDicParStatus = async (req, res) => {
    try {
        const { createdat } = req.params;
        const pilatDictionaries = await pilatDictionaryService.filterPilatDictionariesByDicParStatus(createdat, req.query);
        if (pilatDictionaries.length > 0) {
            util.setSuccess(200, 'PilatDictionaries retrieved', pilatDictionaries);
        } else {
            util.setSuccess(200, 'No pilatDictionary found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatDictionariesCtrl.filterPilatDictionariesByDicParStatus = async (req, res) => {
    try {
        const { updatedat } = req.params;
        const pilatDictionaries = await pilatDictionaryService.filterPilatDictionariesByDicParStatus(updatedat, req.query);
        if (pilatDictionaries.length > 0) {
            util.setSuccess(200, 'PilatDictionaries retrieved', pilatDictionaries);
        } else {
            util.setSuccess(200, 'No pilatDictionary found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



//</es-section>

//<es-section>
module.exports = pilatDictionariesCtrl;
//</es-section>
