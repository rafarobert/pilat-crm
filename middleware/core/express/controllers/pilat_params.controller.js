/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:44 GMT-0400 (Bolivia Time)
 * Time: 15:36:44
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:44 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:44
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const pilatParamService = require('../services/pilat_params.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const pilatParamsCtrl = {};
pilatParamsCtrl.service = pilatParamService;


pilatParamsCtrl.getAllPilatParams = async (req, res) => {
    try {
        const objPilatParams = await pilatParamService.getAllPilatParams(req.query);
        if (objPilatParams.length > 0) {
            util.setSuccess(200, 'PilatParams retrieved', objPilatParams);
        } else {
            util.setSuccess(200, 'No pilatParam found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatParamsCtrl.getAPilatParam = async (req, res) => {
    try {
        const { Id } = req.params;
        if (!util.isString(Id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objPilatParam = await pilatParamService.getAPilatParam(Id, req.query);
        if (!objPilatParam) {
            util.setError(404, `Cannot find pilatParam with the id ${Id}`);
        } else {
            util.setSuccess(200, 'Found pilatParam', objPilatParam);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatParamsCtrl.addPilatParam = async (req, res) => {
    try {
        const objPilatParam = await pilatParamService.addPilatParam(req.body);
        util.setSuccess(201, 'PilatParam Added!', objPilatParam);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatParamsCtrl.updatePilatParam = async (req, res) => {
    try {
        const { Id } = req.params;
        if (!util.isString(Id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objPilatParam = await pilatParamService.updatePilatParam(Id, req.body);
        if (!objPilatParam) {
            util.setError(404, `Cannot find pilatParam with the id: ${Id}`);
        } else {
            util.setSuccess(200, 'PilatParam updated', objPilatParam);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

pilatParamsCtrl.deletePilatParam = async (req, res) => {
    try {
        const { Id } = req.params;
        if (!util.isString(Id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objPilatParam = await pilatParamService.deletePilatParam(Id);
        if (objPilatParam) {
            util.setSuccess(200, 'PilatParam deleted', objPilatParam);
        } else {
            util.setError(404, `PilatParam with the id ${Id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



pilatParamsCtrl.findOneByUid = async (req, res) => {
    try {
        const { Id } = req.params;
        const objPilatParam = await pilatParamService.findOneByUid(Id, req.query);
        if (!objPilatParam) {
            util.setError(404, `Cannot find pilatParam with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatParam', objPilatParam);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatParamsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objPilatParam = await pilatParamService.findOneById(id, req.query);
        if (!objPilatParam) {
            util.setError(404, `Cannot find pilatParam with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatParam', objPilatParam);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatParamsCtrl.findOneByParOrder = async (req, res) => {
    try {
        const { parOrder } = req.params;
        const objPilatParam = await pilatParamService.findOneByParOrder(parOrder, req.query);
        if (!objPilatParam) {
            util.setError(404, `Cannot find pilatParam with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatParam', objPilatParam);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatParamsCtrl.findOneByParCod = async (req, res) => {
    try {
        const { parCod } = req.params;
        const objPilatParam = await pilatParamService.findOneByParCod(parCod, req.query);
        if (!objPilatParam) {
            util.setError(404, `Cannot find pilatParam with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatParam', objPilatParam);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatParamsCtrl.findOneByParDescription = async (req, res) => {
    try {
        const { parDescription } = req.params;
        const objPilatParam = await pilatParamService.findOneByParDescription(parDescription, req.query);
        if (!objPilatParam) {
            util.setError(404, `Cannot find pilatParam with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatParam', objPilatParam);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatParamsCtrl.findOneByParAbbr = async (req, res) => {
    try {
        const { parAbbr } = req.params;
        const objPilatParam = await pilatParamService.findOneByParAbbr(parAbbr, req.query);
        if (!objPilatParam) {
            util.setError(404, `Cannot find pilatParam with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatParam', objPilatParam);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatParamsCtrl.findOneByParGroup = async (req, res) => {
    try {
        const { parGroup } = req.params;
        const objPilatParam = await pilatParamService.findOneByParGroup(parGroup, req.query);
        if (!objPilatParam) {
            util.setError(404, `Cannot find pilatParam with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatParam', objPilatParam);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatParamsCtrl.findOneByCreatedby = async (req, res) => {
    try {
        const { createdby } = req.params;
        const objPilatParam = await pilatParamService.findOneByCreatedby(createdby, req.query);
        if (!objPilatParam) {
            util.setError(404, `Cannot find pilatParam with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatParam', objPilatParam);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatParamsCtrl.findOneByUpdatedby = async (req, res) => {
    try {
        const { updatedby } = req.params;
        const objPilatParam = await pilatParamService.findOneByUpdatedby(updatedby, req.query);
        if (!objPilatParam) {
            util.setError(404, `Cannot find pilatParam with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatParam', objPilatParam);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatParamsCtrl.findOneByParDictionaryId = async (req, res) => {
    try {
        const { parDictionaryId } = req.params;
        const objPilatParam = await pilatParamService.findOneByParDictionaryId(parDictionaryId, req.query);
        if (!objPilatParam) {
            util.setError(404, `Cannot find pilatParam with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatParam', objPilatParam);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatParamsCtrl.findOneByParStatusId = async (req, res) => {
    try {
        const { parStatusId } = req.params;
        const objPilatParam = await pilatParamService.findOneByParStatusId(parStatusId, req.query);
        if (!objPilatParam) {
            util.setError(404, `Cannot find pilatParam with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatParam', objPilatParam);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatParamsCtrl.findOneByParParentId = async (req, res) => {
    try {
        const { parParentId } = req.params;
        const objPilatParam = await pilatParamService.findOneByParParentId(parParentId, req.query);
        if (!objPilatParam) {
            util.setError(404, `Cannot find pilatParam with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatParam', objPilatParam);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatParamsCtrl.findOneByDuaat = async (req, res) => {
    try {
        const { duaat } = req.params;
        const objPilatParam = await pilatParamService.findOneByDuaat(duaat, req.query);
        if (!objPilatParam) {
            util.setError(404, `Cannot find pilatParam with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatParam', objPilatParam);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatParamsCtrl.findOneByCreatedat = async (req, res) => {
    try {
        const { createdat } = req.params;
        const objPilatParam = await pilatParamService.findOneByCreatedat(createdat, req.query);
        if (!objPilatParam) {
            util.setError(404, `Cannot find pilatParam with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatParam', objPilatParam);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatParamsCtrl.findOneByUpdatedat = async (req, res) => {
    try {
        const { updatedat } = req.params;
        const objPilatParam = await pilatParamService.findOneByUpdatedat(updatedat, req.query);
        if (!objPilatParam) {
            util.setError(404, `Cannot find pilatParam with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatParam', objPilatParam);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



pilatParamsCtrl.updatePilatParamByUid = async (req, res) => {
     const { Id } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatParam = await pilatParamService.updatePilatParamByUid(Id, req.body);
            if (!objPilatParam) {
                util.setError(404, `Cannot find pilatParam with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatParam updated', objPilatParam);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatParamsCtrl.updatePilatParamById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatParam = await pilatParamService.updatePilatParamById(id, req.body);
            if (!objPilatParam) {
                util.setError(404, `Cannot find pilatParam with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatParam updated', objPilatParam);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatParamsCtrl.updatePilatParamByParOrder = async (req, res) => {
     const { parOrder } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatParam = await pilatParamService.updatePilatParamByParOrder(parOrder, req.body);
            if (!objPilatParam) {
                util.setError(404, `Cannot find pilatParam with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatParam updated', objPilatParam);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatParamsCtrl.updatePilatParamByParCod = async (req, res) => {
     const { parCod } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatParam = await pilatParamService.updatePilatParamByParCod(parCod, req.body);
            if (!objPilatParam) {
                util.setError(404, `Cannot find pilatParam with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatParam updated', objPilatParam);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatParamsCtrl.updatePilatParamByParDescription = async (req, res) => {
     const { parDescription } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatParam = await pilatParamService.updatePilatParamByParDescription(parDescription, req.body);
            if (!objPilatParam) {
                util.setError(404, `Cannot find pilatParam with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatParam updated', objPilatParam);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatParamsCtrl.updatePilatParamByParAbbr = async (req, res) => {
     const { parAbbr } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatParam = await pilatParamService.updatePilatParamByParAbbr(parAbbr, req.body);
            if (!objPilatParam) {
                util.setError(404, `Cannot find pilatParam with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatParam updated', objPilatParam);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatParamsCtrl.updatePilatParamByParGroup = async (req, res) => {
     const { parGroup } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatParam = await pilatParamService.updatePilatParamByParGroup(parGroup, req.body);
            if (!objPilatParam) {
                util.setError(404, `Cannot find pilatParam with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatParam updated', objPilatParam);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatParamsCtrl.updatePilatParamByCreatedby = async (req, res) => {
     const { createdby } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatParam = await pilatParamService.updatePilatParamByCreatedby(createdby, req.body);
            if (!objPilatParam) {
                util.setError(404, `Cannot find pilatParam with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatParam updated', objPilatParam);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatParamsCtrl.updatePilatParamByUpdatedby = async (req, res) => {
     const { updatedby } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatParam = await pilatParamService.updatePilatParamByUpdatedby(updatedby, req.body);
            if (!objPilatParam) {
                util.setError(404, `Cannot find pilatParam with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatParam updated', objPilatParam);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatParamsCtrl.updatePilatParamByParDictionaryId = async (req, res) => {
     const { parDictionaryId } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatParam = await pilatParamService.updatePilatParamByParDictionaryId(parDictionaryId, req.body);
            if (!objPilatParam) {
                util.setError(404, `Cannot find pilatParam with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatParam updated', objPilatParam);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatParamsCtrl.updatePilatParamByParStatusId = async (req, res) => {
     const { parStatusId } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatParam = await pilatParamService.updatePilatParamByParStatusId(parStatusId, req.body);
            if (!objPilatParam) {
                util.setError(404, `Cannot find pilatParam with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatParam updated', objPilatParam);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatParamsCtrl.updatePilatParamByParParentId = async (req, res) => {
     const { parParentId } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatParam = await pilatParamService.updatePilatParamByParParentId(parParentId, req.body);
            if (!objPilatParam) {
                util.setError(404, `Cannot find pilatParam with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatParam updated', objPilatParam);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatParamsCtrl.updatePilatParamByDuaat = async (req, res) => {
     const { duaat } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatParam = await pilatParamService.updatePilatParamByDuaat(duaat, req.body);
            if (!objPilatParam) {
                util.setError(404, `Cannot find pilatParam with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatParam updated', objPilatParam);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatParamsCtrl.updatePilatParamByCreatedat = async (req, res) => {
     const { createdat } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatParam = await pilatParamService.updatePilatParamByCreatedat(createdat, req.body);
            if (!objPilatParam) {
                util.setError(404, `Cannot find pilatParam with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatParam updated', objPilatParam);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatParamsCtrl.updatePilatParamByUpdatedat = async (req, res) => {
     const { updatedat } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatParam = await pilatParamService.updatePilatParamByUpdatedat(updatedat, req.body);
            if (!objPilatParam) {
                util.setError(404, `Cannot find pilatParam with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatParam updated', objPilatParam);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}



pilatParamsCtrl.findPilatDictionariesParDictionaryWithDicCode = async (req, res) => {
    try {
        const { select } = req.params;
        const pilatParams = await pilatParamService.findPilatDictionariesParDictionaryWithDicCode(select, req.query);
        if (pilatParams.length > 0) {
            util.setSuccess(200, 'PilatParams retrieved', pilatParams);
        } else {
            util.setSuccess(200, 'No pilatParam found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatParamsCtrl.findPilatParamsParStatusWithParOrder = async (req, res) => {
    try {
        const { select } = req.params;
        const pilatParams = await pilatParamService.findPilatParamsParStatusWithParOrder(select, req.query);
        if (pilatParams.length > 0) {
            util.setSuccess(200, 'PilatParams retrieved', pilatParams);
        } else {
            util.setSuccess(200, 'No pilatParam found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatParamsCtrl.findPilatParamsParParentWithParOrder = async (req, res) => {
    try {
        const { select } = req.params;
        const pilatParams = await pilatParamService.findPilatParamsParParentWithParOrder(select, req.query);
        if (pilatParams.length > 0) {
            util.setSuccess(200, 'PilatParams retrieved', pilatParams);
        } else {
            util.setSuccess(200, 'No pilatParam found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



pilatParamsCtrl.filterPilatParamsByParDictionary = async (req, res) => {
    try {
        const { Id } = req.params;
        const pilatParams = await pilatParamService.filterPilatParamsByParDictionary(Id, req.query);
        if (pilatParams.length > 0) {
            util.setSuccess(200, 'PilatParams retrieved', pilatParams);
        } else {
            util.setSuccess(200, 'No pilatParam found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatParamsCtrl.filterPilatParamsByParDictionary = async (req, res) => {
    try {
        const { id } = req.params;
        const pilatParams = await pilatParamService.filterPilatParamsByParDictionary(id, req.query);
        if (pilatParams.length > 0) {
            util.setSuccess(200, 'PilatParams retrieved', pilatParams);
        } else {
            util.setSuccess(200, 'No pilatParam found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatParamsCtrl.filterPilatParamsByParDictionary = async (req, res) => {
    try {
        const { parOrder } = req.params;
        const pilatParams = await pilatParamService.filterPilatParamsByParDictionary(parOrder, req.query);
        if (pilatParams.length > 0) {
            util.setSuccess(200, 'PilatParams retrieved', pilatParams);
        } else {
            util.setSuccess(200, 'No pilatParam found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatParamsCtrl.filterPilatParamsByParDictionary = async (req, res) => {
    try {
        const { parCod } = req.params;
        const pilatParams = await pilatParamService.filterPilatParamsByParDictionary(parCod, req.query);
        if (pilatParams.length > 0) {
            util.setSuccess(200, 'PilatParams retrieved', pilatParams);
        } else {
            util.setSuccess(200, 'No pilatParam found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatParamsCtrl.filterPilatParamsByParDictionary = async (req, res) => {
    try {
        const { parDescription } = req.params;
        const pilatParams = await pilatParamService.filterPilatParamsByParDictionary(parDescription, req.query);
        if (pilatParams.length > 0) {
            util.setSuccess(200, 'PilatParams retrieved', pilatParams);
        } else {
            util.setSuccess(200, 'No pilatParam found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatParamsCtrl.filterPilatParamsByParDictionary = async (req, res) => {
    try {
        const { parAbbr } = req.params;
        const pilatParams = await pilatParamService.filterPilatParamsByParDictionary(parAbbr, req.query);
        if (pilatParams.length > 0) {
            util.setSuccess(200, 'PilatParams retrieved', pilatParams);
        } else {
            util.setSuccess(200, 'No pilatParam found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatParamsCtrl.filterPilatParamsByParDictionary = async (req, res) => {
    try {
        const { parGroup } = req.params;
        const pilatParams = await pilatParamService.filterPilatParamsByParDictionary(parGroup, req.query);
        if (pilatParams.length > 0) {
            util.setSuccess(200, 'PilatParams retrieved', pilatParams);
        } else {
            util.setSuccess(200, 'No pilatParam found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatParamsCtrl.filterPilatParamsByParDictionary = async (req, res) => {
    try {
        const { createdby } = req.params;
        const pilatParams = await pilatParamService.filterPilatParamsByParDictionary(createdby, req.query);
        if (pilatParams.length > 0) {
            util.setSuccess(200, 'PilatParams retrieved', pilatParams);
        } else {
            util.setSuccess(200, 'No pilatParam found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatParamsCtrl.filterPilatParamsByParDictionary = async (req, res) => {
    try {
        const { updatedby } = req.params;
        const pilatParams = await pilatParamService.filterPilatParamsByParDictionary(updatedby, req.query);
        if (pilatParams.length > 0) {
            util.setSuccess(200, 'PilatParams retrieved', pilatParams);
        } else {
            util.setSuccess(200, 'No pilatParam found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatParamsCtrl.filterPilatParamsByParDictionary = async (req, res) => {
    try {
        const { parDictionaryId } = req.params;
        const pilatParams = await pilatParamService.filterPilatParamsByParDictionary(parDictionaryId, req.query);
        if (pilatParams.length > 0) {
            util.setSuccess(200, 'PilatParams retrieved', pilatParams);
        } else {
            util.setSuccess(200, 'No pilatParam found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatParamsCtrl.filterPilatParamsByParStatus = async (req, res) => {
    try {
        const { parStatusId } = req.params;
        const pilatParams = await pilatParamService.filterPilatParamsByParStatus(parStatusId, req.query);
        if (pilatParams.length > 0) {
            util.setSuccess(200, 'PilatParams retrieved', pilatParams);
        } else {
            util.setSuccess(200, 'No pilatParam found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatParamsCtrl.filterPilatParamsByParParent = async (req, res) => {
    try {
        const { parParentId } = req.params;
        const pilatParams = await pilatParamService.filterPilatParamsByParParent(parParentId, req.query);
        if (pilatParams.length > 0) {
            util.setSuccess(200, 'PilatParams retrieved', pilatParams);
        } else {
            util.setSuccess(200, 'No pilatParam found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatParamsCtrl.filterPilatParamsByParDictionary = async (req, res) => {
    try {
        const { duaat } = req.params;
        const pilatParams = await pilatParamService.filterPilatParamsByParDictionary(duaat, req.query);
        if (pilatParams.length > 0) {
            util.setSuccess(200, 'PilatParams retrieved', pilatParams);
        } else {
            util.setSuccess(200, 'No pilatParam found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatParamsCtrl.filterPilatParamsByParDictionary = async (req, res) => {
    try {
        const { createdat } = req.params;
        const pilatParams = await pilatParamService.filterPilatParamsByParDictionary(createdat, req.query);
        if (pilatParams.length > 0) {
            util.setSuccess(200, 'PilatParams retrieved', pilatParams);
        } else {
            util.setSuccess(200, 'No pilatParam found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatParamsCtrl.filterPilatParamsByParDictionary = async (req, res) => {
    try {
        const { updatedat } = req.params;
        const pilatParams = await pilatParamService.filterPilatParamsByParDictionary(updatedat, req.query);
        if (pilatParams.length > 0) {
            util.setSuccess(200, 'PilatParams retrieved', pilatParams);
        } else {
            util.setSuccess(200, 'No pilatParam found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



//</es-section>

//<es-section>
module.exports = pilatParamsCtrl;
//</es-section>
