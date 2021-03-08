/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:15 GMT-0400 (Bolivia Time)
 * Time: 15:35:15
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:15 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:15
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aorFieldService = require('../services/aor_fields.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aorFieldsCtrl = {};
aorFieldsCtrl.service = aorFieldService;


aorFieldsCtrl.getAllAorFields = async (req, res) => {
    try {
        const objAorFields = await aorFieldService.getAllAorFields(req.query);
        if (objAorFields.length > 0) {
            util.setSuccess(200, 'AorFields retrieved', objAorFields);
        } else {
            util.setSuccess(200, 'No aorField found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorFieldsCtrl.getAAorField = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAorField = await aorFieldService.getAAorField(id, req.query);
        if (!objAorField) {
            util.setError(404, `Cannot find aorField with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aorField', objAorField);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorFieldsCtrl.addAorField = async (req, res) => {
    try {
        const objAorField = await aorFieldService.addAorField(req.body);
        util.setSuccess(201, 'AorField Added!', objAorField);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorFieldsCtrl.updateAorField = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAorField = await aorFieldService.updateAorField(id, req.body);
        if (!objAorField) {
            util.setError(404, `Cannot find aorField with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AorField updated', objAorField);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aorFieldsCtrl.deleteAorField = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAorField = await aorFieldService.deleteAorField(id);
        if (objAorField) {
            util.setSuccess(200, 'AorField deleted', objAorField);
        } else {
            util.setError(404, `AorField with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aorFieldsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAorField = await aorFieldService.findOneById(id, req.query);
        if (!objAorField) {
            util.setError(404, `Cannot find aorField with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorField', objAorField);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorFieldsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAorField = await aorFieldService.findOneByDeleted(deleted, req.query);
        if (!objAorField) {
            util.setError(404, `Cannot find aorField with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorField', objAorField);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorFieldsCtrl.findOneByDisplay = async (req, res) => {
    try {
        const { display } = req.params;
        const objAorField = await aorFieldService.findOneByDisplay(display, req.query);
        if (!objAorField) {
            util.setError(404, `Cannot find aorField with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorField', objAorField);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorFieldsCtrl.findOneByLink = async (req, res) => {
    try {
        const { link } = req.params;
        const objAorField = await aorFieldService.findOneByLink(link, req.query);
        if (!objAorField) {
            util.setError(404, `Cannot find aorField with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorField', objAorField);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorFieldsCtrl.findOneByGroupBy = async (req, res) => {
    try {
        const { groupBy } = req.params;
        const objAorField = await aorFieldService.findOneByGroupBy(groupBy, req.query);
        if (!objAorField) {
            util.setError(404, `Cannot find aorField with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorField', objAorField);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorFieldsCtrl.findOneByFieldOrder = async (req, res) => {
    try {
        const { fieldOrder } = req.params;
        const objAorField = await aorFieldService.findOneByFieldOrder(fieldOrder, req.query);
        if (!objAorField) {
            util.setError(404, `Cannot find aorField with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorField', objAorField);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorFieldsCtrl.findOneByGroupDisplay = async (req, res) => {
    try {
        const { groupDisplay } = req.params;
        const objAorField = await aorFieldService.findOneByGroupDisplay(groupDisplay, req.query);
        if (!objAorField) {
            util.setError(404, `Cannot find aorField with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorField', objAorField);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorFieldsCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objAorField = await aorFieldService.findOneByName(name, req.query);
        if (!objAorField) {
            util.setError(404, `Cannot find aorField with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorField', objAorField);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorFieldsCtrl.findOneByField = async (req, res) => {
    try {
        const { field } = req.params;
        const objAorField = await aorFieldService.findOneByField(field, req.query);
        if (!objAorField) {
            util.setError(404, `Cannot find aorField with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorField', objAorField);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorFieldsCtrl.findOneByLabel = async (req, res) => {
    try {
        const { label } = req.params;
        const objAorField = await aorFieldService.findOneByLabel(label, req.query);
        if (!objAorField) {
            util.setError(404, `Cannot find aorField with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorField', objAorField);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorFieldsCtrl.findOneByFieldFunction = async (req, res) => {
    try {
        const { fieldFunction } = req.params;
        const objAorField = await aorFieldService.findOneByFieldFunction(fieldFunction, req.query);
        if (!objAorField) {
            util.setError(404, `Cannot find aorField with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorField', objAorField);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorFieldsCtrl.findOneBySortBy = async (req, res) => {
    try {
        const { sortBy } = req.params;
        const objAorField = await aorFieldService.findOneBySortBy(sortBy, req.query);
        if (!objAorField) {
            util.setError(404, `Cannot find aorField with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorField', objAorField);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorFieldsCtrl.findOneByFormat = async (req, res) => {
    try {
        const { format } = req.params;
        const objAorField = await aorFieldService.findOneByFormat(format, req.query);
        if (!objAorField) {
            util.setError(404, `Cannot find aorField with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorField', objAorField);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorFieldsCtrl.findOneByTotal = async (req, res) => {
    try {
        const { total } = req.params;
        const objAorField = await aorFieldService.findOneByTotal(total, req.query);
        if (!objAorField) {
            util.setError(404, `Cannot find aorField with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorField', objAorField);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorFieldsCtrl.findOneBySortOrder = async (req, res) => {
    try {
        const { sortOrder } = req.params;
        const objAorField = await aorFieldService.findOneBySortOrder(sortOrder, req.query);
        if (!objAorField) {
            util.setError(404, `Cannot find aorField with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorField', objAorField);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorFieldsCtrl.findOneByGroupOrder = async (req, res) => {
    try {
        const { groupOrder } = req.params;
        const objAorField = await aorFieldService.findOneByGroupOrder(groupOrder, req.query);
        if (!objAorField) {
            util.setError(404, `Cannot find aorField with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorField', objAorField);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorFieldsCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objAorField = await aorFieldService.findOneByDescription(description, req.query);
        if (!objAorField) {
            util.setError(404, `Cannot find aorField with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorField', objAorField);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorFieldsCtrl.findOneByModulePath = async (req, res) => {
    try {
        const { modulePath } = req.params;
        const objAorField = await aorFieldService.findOneByModulePath(modulePath, req.query);
        if (!objAorField) {
            util.setError(404, `Cannot find aorField with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorField', objAorField);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorFieldsCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objAorField = await aorFieldService.findOneByDateEntered(dateEntered, req.query);
        if (!objAorField) {
            util.setError(404, `Cannot find aorField with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorField', objAorField);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorFieldsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAorField = await aorFieldService.findOneByDateModified(dateModified, req.query);
        if (!objAorField) {
            util.setError(404, `Cannot find aorField with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorField', objAorField);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorFieldsCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objAorField = await aorFieldService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objAorField) {
            util.setError(404, `Cannot find aorField with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorField', objAorField);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorFieldsCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAorField = await aorFieldService.findOneByCreatedBy(createdBy, req.query);
        if (!objAorField) {
            util.setError(404, `Cannot find aorField with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorField', objAorField);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorFieldsCtrl.findOneByAorReportId = async (req, res) => {
    try {
        const { aorReportId } = req.params;
        const objAorField = await aorFieldService.findOneByAorReportId(aorReportId, req.query);
        if (!objAorField) {
            util.setError(404, `Cannot find aorField with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorField', objAorField);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aorFieldsCtrl.updateAorFieldById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorField = await aorFieldService.updateAorFieldById(id, req.body);
            if (!objAorField) {
                util.setError(404, `Cannot find aorField with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorField updated', objAorField);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorFieldsCtrl.updateAorFieldByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorField = await aorFieldService.updateAorFieldByDeleted(deleted, req.body);
            if (!objAorField) {
                util.setError(404, `Cannot find aorField with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorField updated', objAorField);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorFieldsCtrl.updateAorFieldByDisplay = async (req, res) => {
     const { display } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorField = await aorFieldService.updateAorFieldByDisplay(display, req.body);
            if (!objAorField) {
                util.setError(404, `Cannot find aorField with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorField updated', objAorField);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorFieldsCtrl.updateAorFieldByLink = async (req, res) => {
     const { link } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorField = await aorFieldService.updateAorFieldByLink(link, req.body);
            if (!objAorField) {
                util.setError(404, `Cannot find aorField with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorField updated', objAorField);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorFieldsCtrl.updateAorFieldByGroupBy = async (req, res) => {
     const { groupBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorField = await aorFieldService.updateAorFieldByGroupBy(groupBy, req.body);
            if (!objAorField) {
                util.setError(404, `Cannot find aorField with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorField updated', objAorField);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorFieldsCtrl.updateAorFieldByFieldOrder = async (req, res) => {
     const { fieldOrder } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorField = await aorFieldService.updateAorFieldByFieldOrder(fieldOrder, req.body);
            if (!objAorField) {
                util.setError(404, `Cannot find aorField with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorField updated', objAorField);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorFieldsCtrl.updateAorFieldByGroupDisplay = async (req, res) => {
     const { groupDisplay } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorField = await aorFieldService.updateAorFieldByGroupDisplay(groupDisplay, req.body);
            if (!objAorField) {
                util.setError(404, `Cannot find aorField with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorField updated', objAorField);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorFieldsCtrl.updateAorFieldByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorField = await aorFieldService.updateAorFieldByName(name, req.body);
            if (!objAorField) {
                util.setError(404, `Cannot find aorField with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorField updated', objAorField);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorFieldsCtrl.updateAorFieldByField = async (req, res) => {
     const { field } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorField = await aorFieldService.updateAorFieldByField(field, req.body);
            if (!objAorField) {
                util.setError(404, `Cannot find aorField with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorField updated', objAorField);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorFieldsCtrl.updateAorFieldByLabel = async (req, res) => {
     const { label } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorField = await aorFieldService.updateAorFieldByLabel(label, req.body);
            if (!objAorField) {
                util.setError(404, `Cannot find aorField with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorField updated', objAorField);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorFieldsCtrl.updateAorFieldByFieldFunction = async (req, res) => {
     const { fieldFunction } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorField = await aorFieldService.updateAorFieldByFieldFunction(fieldFunction, req.body);
            if (!objAorField) {
                util.setError(404, `Cannot find aorField with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorField updated', objAorField);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorFieldsCtrl.updateAorFieldBySortBy = async (req, res) => {
     const { sortBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorField = await aorFieldService.updateAorFieldBySortBy(sortBy, req.body);
            if (!objAorField) {
                util.setError(404, `Cannot find aorField with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorField updated', objAorField);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorFieldsCtrl.updateAorFieldByFormat = async (req, res) => {
     const { format } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorField = await aorFieldService.updateAorFieldByFormat(format, req.body);
            if (!objAorField) {
                util.setError(404, `Cannot find aorField with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorField updated', objAorField);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorFieldsCtrl.updateAorFieldByTotal = async (req, res) => {
     const { total } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorField = await aorFieldService.updateAorFieldByTotal(total, req.body);
            if (!objAorField) {
                util.setError(404, `Cannot find aorField with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorField updated', objAorField);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorFieldsCtrl.updateAorFieldBySortOrder = async (req, res) => {
     const { sortOrder } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorField = await aorFieldService.updateAorFieldBySortOrder(sortOrder, req.body);
            if (!objAorField) {
                util.setError(404, `Cannot find aorField with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorField updated', objAorField);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorFieldsCtrl.updateAorFieldByGroupOrder = async (req, res) => {
     const { groupOrder } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorField = await aorFieldService.updateAorFieldByGroupOrder(groupOrder, req.body);
            if (!objAorField) {
                util.setError(404, `Cannot find aorField with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorField updated', objAorField);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorFieldsCtrl.updateAorFieldByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorField = await aorFieldService.updateAorFieldByDescription(description, req.body);
            if (!objAorField) {
                util.setError(404, `Cannot find aorField with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorField updated', objAorField);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorFieldsCtrl.updateAorFieldByModulePath = async (req, res) => {
     const { modulePath } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorField = await aorFieldService.updateAorFieldByModulePath(modulePath, req.body);
            if (!objAorField) {
                util.setError(404, `Cannot find aorField with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorField updated', objAorField);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorFieldsCtrl.updateAorFieldByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorField = await aorFieldService.updateAorFieldByDateEntered(dateEntered, req.body);
            if (!objAorField) {
                util.setError(404, `Cannot find aorField with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorField updated', objAorField);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorFieldsCtrl.updateAorFieldByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorField = await aorFieldService.updateAorFieldByDateModified(dateModified, req.body);
            if (!objAorField) {
                util.setError(404, `Cannot find aorField with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorField updated', objAorField);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorFieldsCtrl.updateAorFieldByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorField = await aorFieldService.updateAorFieldByModifiedUserId(modifiedUserId, req.body);
            if (!objAorField) {
                util.setError(404, `Cannot find aorField with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorField updated', objAorField);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorFieldsCtrl.updateAorFieldByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorField = await aorFieldService.updateAorFieldByCreatedBy(createdBy, req.body);
            if (!objAorField) {
                util.setError(404, `Cannot find aorField with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorField updated', objAorField);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorFieldsCtrl.updateAorFieldByAorReportId = async (req, res) => {
     const { aorReportId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorField = await aorFieldService.updateAorFieldByAorReportId(aorReportId, req.body);
            if (!objAorField) {
                util.setError(404, `Cannot find aorField with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorField updated', objAorField);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aorFieldsCtrl;
//</es-section>
