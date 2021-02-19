/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:06 GMT-0400 (Bolivia Time)
 * Time: 4:43:6
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:06 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:6
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const fieldMetaDataService = require('../services/fields_meta_data.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const fieldsMetaDataCtrl = {};
fieldsMetaDataCtrl.service = fieldMetaDataService;


fieldsMetaDataCtrl.getAllFieldsMetaData = async (req, res) => {
    try {
        const objFieldsMetaData = await fieldMetaDataService.getAllFieldsMetaData(req.query);
        if (objFieldsMetaData.length > 0) {
            util.setSuccess(200, 'FieldsMetaData retrieved', objFieldsMetaData);
        } else {
            util.setSuccess(200, 'No fieldMetaData found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fieldsMetaDataCtrl.getAFieldMetaData = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objFieldMetaData = await fieldMetaDataService.getAFieldMetaData(id, req.query);
        if (!objFieldMetaData) {
            util.setError(404, `Cannot find fieldMetaData with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found fieldMetaData', objFieldMetaData);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fieldsMetaDataCtrl.addFieldMetaData = async (req, res) => {
    try {
        const objFieldMetaData = await fieldMetaDataService.addFieldMetaData(req.body);
        util.setSuccess(201, 'FieldMetaData Added!', objFieldMetaData);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fieldsMetaDataCtrl.updateFieldMetaData = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objFieldMetaData = await fieldMetaDataService.updateFieldMetaData(id, req.body);
        if (!objFieldMetaData) {
            util.setError(404, `Cannot find fieldMetaData with the id: ${id}`);
        } else {
            util.setSuccess(200, 'FieldMetaData updated', objFieldMetaData);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

fieldsMetaDataCtrl.deleteFieldMetaData = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objFieldMetaData = await fieldMetaDataService.deleteFieldMetaData(id);
        if (objFieldMetaData) {
            util.setSuccess(200, 'FieldMetaData deleted', objFieldMetaData);
        } else {
            util.setError(404, `FieldMetaData with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



fieldsMetaDataCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objFieldMetaData = await fieldMetaDataService.findOneById(id, req.query);
        if (!objFieldMetaData) {
            util.setError(404, `Cannot find fieldMetaData with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fieldMetaData', objFieldMetaData);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fieldsMetaDataCtrl.findOneByRequired = async (req, res) => {
    try {
        const { required } = req.params;
        const objFieldMetaData = await fieldMetaDataService.findOneByRequired(required, req.query);
        if (!objFieldMetaData) {
            util.setError(404, `Cannot find fieldMetaData with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fieldMetaData', objFieldMetaData);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fieldsMetaDataCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objFieldMetaData = await fieldMetaDataService.findOneByDeleted(deleted, req.query);
        if (!objFieldMetaData) {
            util.setError(404, `Cannot find fieldMetaData with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fieldMetaData', objFieldMetaData);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fieldsMetaDataCtrl.findOneByAudited = async (req, res) => {
    try {
        const { audited } = req.params;
        const objFieldMetaData = await fieldMetaDataService.findOneByAudited(audited, req.query);
        if (!objFieldMetaData) {
            util.setError(404, `Cannot find fieldMetaData with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fieldMetaData', objFieldMetaData);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fieldsMetaDataCtrl.findOneByMassupdate = async (req, res) => {
    try {
        const { massupdate } = req.params;
        const objFieldMetaData = await fieldMetaDataService.findOneByMassupdate(massupdate, req.query);
        if (!objFieldMetaData) {
            util.setError(404, `Cannot find fieldMetaData with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fieldMetaData', objFieldMetaData);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fieldsMetaDataCtrl.findOneByReportable = async (req, res) => {
    try {
        const { reportable } = req.params;
        const objFieldMetaData = await fieldMetaDataService.findOneByReportable(reportable, req.query);
        if (!objFieldMetaData) {
            util.setError(404, `Cannot find fieldMetaData with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fieldMetaData', objFieldMetaData);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fieldsMetaDataCtrl.findOneByLen = async (req, res) => {
    try {
        const { len } = req.params;
        const objFieldMetaData = await fieldMetaDataService.findOneByLen(len, req.query);
        if (!objFieldMetaData) {
            util.setError(404, `Cannot find fieldMetaData with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fieldMetaData', objFieldMetaData);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fieldsMetaDataCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objFieldMetaData = await fieldMetaDataService.findOneByName(name, req.query);
        if (!objFieldMetaData) {
            util.setError(404, `Cannot find fieldMetaData with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fieldMetaData', objFieldMetaData);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fieldsMetaDataCtrl.findOneByVname = async (req, res) => {
    try {
        const { vname } = req.params;
        const objFieldMetaData = await fieldMetaDataService.findOneByVname(vname, req.query);
        if (!objFieldMetaData) {
            util.setError(404, `Cannot find fieldMetaData with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fieldMetaData', objFieldMetaData);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fieldsMetaDataCtrl.findOneByComments = async (req, res) => {
    try {
        const { comments } = req.params;
        const objFieldMetaData = await fieldMetaDataService.findOneByComments(comments, req.query);
        if (!objFieldMetaData) {
            util.setError(404, `Cannot find fieldMetaData with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fieldMetaData', objFieldMetaData);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fieldsMetaDataCtrl.findOneByHelp = async (req, res) => {
    try {
        const { help } = req.params;
        const objFieldMetaData = await fieldMetaDataService.findOneByHelp(help, req.query);
        if (!objFieldMetaData) {
            util.setError(404, `Cannot find fieldMetaData with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fieldMetaData', objFieldMetaData);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fieldsMetaDataCtrl.findOneByCustomModule = async (req, res) => {
    try {
        const { customModule } = req.params;
        const objFieldMetaData = await fieldMetaDataService.findOneByCustomModule(customModule, req.query);
        if (!objFieldMetaData) {
            util.setError(404, `Cannot find fieldMetaData with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fieldMetaData', objFieldMetaData);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fieldsMetaDataCtrl.findOneByType = async (req, res) => {
    try {
        const { type } = req.params;
        const objFieldMetaData = await fieldMetaDataService.findOneByType(type, req.query);
        if (!objFieldMetaData) {
            util.setError(404, `Cannot find fieldMetaData with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fieldMetaData', objFieldMetaData);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fieldsMetaDataCtrl.findOneByDefaultValue = async (req, res) => {
    try {
        const { defaultValue } = req.params;
        const objFieldMetaData = await fieldMetaDataService.findOneByDefaultValue(defaultValue, req.query);
        if (!objFieldMetaData) {
            util.setError(404, `Cannot find fieldMetaData with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fieldMetaData', objFieldMetaData);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fieldsMetaDataCtrl.findOneByImportable = async (req, res) => {
    try {
        const { importable } = req.params;
        const objFieldMetaData = await fieldMetaDataService.findOneByImportable(importable, req.query);
        if (!objFieldMetaData) {
            util.setError(404, `Cannot find fieldMetaData with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fieldMetaData', objFieldMetaData);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fieldsMetaDataCtrl.findOneByExt1 = async (req, res) => {
    try {
        const { ext1 } = req.params;
        const objFieldMetaData = await fieldMetaDataService.findOneByExt1(ext1, req.query);
        if (!objFieldMetaData) {
            util.setError(404, `Cannot find fieldMetaData with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fieldMetaData', objFieldMetaData);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fieldsMetaDataCtrl.findOneByExt2 = async (req, res) => {
    try {
        const { ext2 } = req.params;
        const objFieldMetaData = await fieldMetaDataService.findOneByExt2(ext2, req.query);
        if (!objFieldMetaData) {
            util.setError(404, `Cannot find fieldMetaData with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fieldMetaData', objFieldMetaData);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fieldsMetaDataCtrl.findOneByExt3 = async (req, res) => {
    try {
        const { ext3 } = req.params;
        const objFieldMetaData = await fieldMetaDataService.findOneByExt3(ext3, req.query);
        if (!objFieldMetaData) {
            util.setError(404, `Cannot find fieldMetaData with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fieldMetaData', objFieldMetaData);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fieldsMetaDataCtrl.findOneByExt4 = async (req, res) => {
    try {
        const { ext4 } = req.params;
        const objFieldMetaData = await fieldMetaDataService.findOneByExt4(ext4, req.query);
        if (!objFieldMetaData) {
            util.setError(404, `Cannot find fieldMetaData with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fieldMetaData', objFieldMetaData);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fieldsMetaDataCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objFieldMetaData = await fieldMetaDataService.findOneByDateModified(dateModified, req.query);
        if (!objFieldMetaData) {
            util.setError(404, `Cannot find fieldMetaData with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fieldMetaData', objFieldMetaData);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



fieldsMetaDataCtrl.updateFieldMetaDataById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFieldMetaData = await fieldMetaDataService.updateFieldMetaDataById(id, req.body);
            if (!objFieldMetaData) {
                util.setError(404, `Cannot find fieldMetaData with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FieldMetaData updated', objFieldMetaData);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fieldsMetaDataCtrl.updateFieldMetaDataByRequired = async (req, res) => {
     const { required } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFieldMetaData = await fieldMetaDataService.updateFieldMetaDataByRequired(required, req.body);
            if (!objFieldMetaData) {
                util.setError(404, `Cannot find fieldMetaData with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FieldMetaData updated', objFieldMetaData);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fieldsMetaDataCtrl.updateFieldMetaDataByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFieldMetaData = await fieldMetaDataService.updateFieldMetaDataByDeleted(deleted, req.body);
            if (!objFieldMetaData) {
                util.setError(404, `Cannot find fieldMetaData with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FieldMetaData updated', objFieldMetaData);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fieldsMetaDataCtrl.updateFieldMetaDataByAudited = async (req, res) => {
     const { audited } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFieldMetaData = await fieldMetaDataService.updateFieldMetaDataByAudited(audited, req.body);
            if (!objFieldMetaData) {
                util.setError(404, `Cannot find fieldMetaData with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FieldMetaData updated', objFieldMetaData);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fieldsMetaDataCtrl.updateFieldMetaDataByMassupdate = async (req, res) => {
     const { massupdate } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFieldMetaData = await fieldMetaDataService.updateFieldMetaDataByMassupdate(massupdate, req.body);
            if (!objFieldMetaData) {
                util.setError(404, `Cannot find fieldMetaData with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FieldMetaData updated', objFieldMetaData);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fieldsMetaDataCtrl.updateFieldMetaDataByReportable = async (req, res) => {
     const { reportable } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFieldMetaData = await fieldMetaDataService.updateFieldMetaDataByReportable(reportable, req.body);
            if (!objFieldMetaData) {
                util.setError(404, `Cannot find fieldMetaData with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FieldMetaData updated', objFieldMetaData);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fieldsMetaDataCtrl.updateFieldMetaDataByLen = async (req, res) => {
     const { len } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFieldMetaData = await fieldMetaDataService.updateFieldMetaDataByLen(len, req.body);
            if (!objFieldMetaData) {
                util.setError(404, `Cannot find fieldMetaData with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FieldMetaData updated', objFieldMetaData);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fieldsMetaDataCtrl.updateFieldMetaDataByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFieldMetaData = await fieldMetaDataService.updateFieldMetaDataByName(name, req.body);
            if (!objFieldMetaData) {
                util.setError(404, `Cannot find fieldMetaData with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FieldMetaData updated', objFieldMetaData);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fieldsMetaDataCtrl.updateFieldMetaDataByVname = async (req, res) => {
     const { vname } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFieldMetaData = await fieldMetaDataService.updateFieldMetaDataByVname(vname, req.body);
            if (!objFieldMetaData) {
                util.setError(404, `Cannot find fieldMetaData with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FieldMetaData updated', objFieldMetaData);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fieldsMetaDataCtrl.updateFieldMetaDataByComments = async (req, res) => {
     const { comments } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFieldMetaData = await fieldMetaDataService.updateFieldMetaDataByComments(comments, req.body);
            if (!objFieldMetaData) {
                util.setError(404, `Cannot find fieldMetaData with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FieldMetaData updated', objFieldMetaData);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fieldsMetaDataCtrl.updateFieldMetaDataByHelp = async (req, res) => {
     const { help } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFieldMetaData = await fieldMetaDataService.updateFieldMetaDataByHelp(help, req.body);
            if (!objFieldMetaData) {
                util.setError(404, `Cannot find fieldMetaData with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FieldMetaData updated', objFieldMetaData);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fieldsMetaDataCtrl.updateFieldMetaDataByCustomModule = async (req, res) => {
     const { customModule } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFieldMetaData = await fieldMetaDataService.updateFieldMetaDataByCustomModule(customModule, req.body);
            if (!objFieldMetaData) {
                util.setError(404, `Cannot find fieldMetaData with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FieldMetaData updated', objFieldMetaData);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fieldsMetaDataCtrl.updateFieldMetaDataByType = async (req, res) => {
     const { type } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFieldMetaData = await fieldMetaDataService.updateFieldMetaDataByType(type, req.body);
            if (!objFieldMetaData) {
                util.setError(404, `Cannot find fieldMetaData with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FieldMetaData updated', objFieldMetaData);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fieldsMetaDataCtrl.updateFieldMetaDataByDefaultValue = async (req, res) => {
     const { defaultValue } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFieldMetaData = await fieldMetaDataService.updateFieldMetaDataByDefaultValue(defaultValue, req.body);
            if (!objFieldMetaData) {
                util.setError(404, `Cannot find fieldMetaData with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FieldMetaData updated', objFieldMetaData);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fieldsMetaDataCtrl.updateFieldMetaDataByImportable = async (req, res) => {
     const { importable } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFieldMetaData = await fieldMetaDataService.updateFieldMetaDataByImportable(importable, req.body);
            if (!objFieldMetaData) {
                util.setError(404, `Cannot find fieldMetaData with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FieldMetaData updated', objFieldMetaData);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fieldsMetaDataCtrl.updateFieldMetaDataByExt1 = async (req, res) => {
     const { ext1 } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFieldMetaData = await fieldMetaDataService.updateFieldMetaDataByExt1(ext1, req.body);
            if (!objFieldMetaData) {
                util.setError(404, `Cannot find fieldMetaData with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FieldMetaData updated', objFieldMetaData);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fieldsMetaDataCtrl.updateFieldMetaDataByExt2 = async (req, res) => {
     const { ext2 } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFieldMetaData = await fieldMetaDataService.updateFieldMetaDataByExt2(ext2, req.body);
            if (!objFieldMetaData) {
                util.setError(404, `Cannot find fieldMetaData with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FieldMetaData updated', objFieldMetaData);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fieldsMetaDataCtrl.updateFieldMetaDataByExt3 = async (req, res) => {
     const { ext3 } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFieldMetaData = await fieldMetaDataService.updateFieldMetaDataByExt3(ext3, req.body);
            if (!objFieldMetaData) {
                util.setError(404, `Cannot find fieldMetaData with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FieldMetaData updated', objFieldMetaData);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fieldsMetaDataCtrl.updateFieldMetaDataByExt4 = async (req, res) => {
     const { ext4 } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFieldMetaData = await fieldMetaDataService.updateFieldMetaDataByExt4(ext4, req.body);
            if (!objFieldMetaData) {
                util.setError(404, `Cannot find fieldMetaData with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FieldMetaData updated', objFieldMetaData);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fieldsMetaDataCtrl.updateFieldMetaDataByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFieldMetaData = await fieldMetaDataService.updateFieldMetaDataByDateModified(dateModified, req.body);
            if (!objFieldMetaData) {
                util.setError(404, `Cannot find fieldMetaData with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FieldMetaData updated', objFieldMetaData);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = fieldsMetaDataCtrl;
//</es-section>
