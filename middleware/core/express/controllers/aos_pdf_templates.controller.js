/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:25 GMT-0400 (Bolivia Time)
 * Time: 15:35:25
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:25 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:25
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aoPdfTemplateService = require('../services/aos_pdf_templates.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aosPdfTemplatesCtrl = {};
aosPdfTemplatesCtrl.service = aoPdfTemplateService;


aosPdfTemplatesCtrl.getAllAosPdfTemplates = async (req, res) => {
    try {
        const objAosPdfTemplates = await aoPdfTemplateService.getAllAosPdfTemplates(req.query);
        if (objAosPdfTemplates.length > 0) {
            util.setSuccess(200, 'AosPdfTemplates retrieved', objAosPdfTemplates);
        } else {
            util.setSuccess(200, 'No aoPdfTemplate found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosPdfTemplatesCtrl.getAAoPdfTemplate = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAoPdfTemplate = await aoPdfTemplateService.getAAoPdfTemplate(id, req.query);
        if (!objAoPdfTemplate) {
            util.setError(404, `Cannot find aoPdfTemplate with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aoPdfTemplate', objAoPdfTemplate);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosPdfTemplatesCtrl.addAoPdfTemplate = async (req, res) => {
    try {
        const objAoPdfTemplate = await aoPdfTemplateService.addAoPdfTemplate(req.body);
        util.setSuccess(201, 'AoPdfTemplate Added!', objAoPdfTemplate);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosPdfTemplatesCtrl.updateAoPdfTemplate = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAoPdfTemplate = await aoPdfTemplateService.updateAoPdfTemplate(id, req.body);
        if (!objAoPdfTemplate) {
            util.setError(404, `Cannot find aoPdfTemplate with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AoPdfTemplate updated', objAoPdfTemplate);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aosPdfTemplatesCtrl.deleteAoPdfTemplate = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAoPdfTemplate = await aoPdfTemplateService.deleteAoPdfTemplate(id);
        if (objAoPdfTemplate) {
            util.setSuccess(200, 'AoPdfTemplate deleted', objAoPdfTemplate);
        } else {
            util.setError(404, `AoPdfTemplate with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aosPdfTemplatesCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAoPdfTemplate = await aoPdfTemplateService.findOneById(id, req.query);
        if (!objAoPdfTemplate) {
            util.setError(404, `Cannot find aoPdfTemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoPdfTemplate', objAoPdfTemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosPdfTemplatesCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAoPdfTemplate = await aoPdfTemplateService.findOneByDeleted(deleted, req.query);
        if (!objAoPdfTemplate) {
            util.setError(404, `Cannot find aoPdfTemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoPdfTemplate', objAoPdfTemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosPdfTemplatesCtrl.findOneByActive = async (req, res) => {
    try {
        const { active } = req.params;
        const objAoPdfTemplate = await aoPdfTemplateService.findOneByActive(active, req.query);
        if (!objAoPdfTemplate) {
            util.setError(404, `Cannot find aoPdfTemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoPdfTemplate', objAoPdfTemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosPdfTemplatesCtrl.findOneByMarginLeft = async (req, res) => {
    try {
        const { marginLeft } = req.params;
        const objAoPdfTemplate = await aoPdfTemplateService.findOneByMarginLeft(marginLeft, req.query);
        if (!objAoPdfTemplate) {
            util.setError(404, `Cannot find aoPdfTemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoPdfTemplate', objAoPdfTemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosPdfTemplatesCtrl.findOneByMarginRight = async (req, res) => {
    try {
        const { marginRight } = req.params;
        const objAoPdfTemplate = await aoPdfTemplateService.findOneByMarginRight(marginRight, req.query);
        if (!objAoPdfTemplate) {
            util.setError(404, `Cannot find aoPdfTemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoPdfTemplate', objAoPdfTemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosPdfTemplatesCtrl.findOneByMarginTop = async (req, res) => {
    try {
        const { marginTop } = req.params;
        const objAoPdfTemplate = await aoPdfTemplateService.findOneByMarginTop(marginTop, req.query);
        if (!objAoPdfTemplate) {
            util.setError(404, `Cannot find aoPdfTemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoPdfTemplate', objAoPdfTemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosPdfTemplatesCtrl.findOneByMarginBottom = async (req, res) => {
    try {
        const { marginBottom } = req.params;
        const objAoPdfTemplate = await aoPdfTemplateService.findOneByMarginBottom(marginBottom, req.query);
        if (!objAoPdfTemplate) {
            util.setError(404, `Cannot find aoPdfTemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoPdfTemplate', objAoPdfTemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosPdfTemplatesCtrl.findOneByMarginHeader = async (req, res) => {
    try {
        const { marginHeader } = req.params;
        const objAoPdfTemplate = await aoPdfTemplateService.findOneByMarginHeader(marginHeader, req.query);
        if (!objAoPdfTemplate) {
            util.setError(404, `Cannot find aoPdfTemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoPdfTemplate', objAoPdfTemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosPdfTemplatesCtrl.findOneByMarginFooter = async (req, res) => {
    try {
        const { marginFooter } = req.params;
        const objAoPdfTemplate = await aoPdfTemplateService.findOneByMarginFooter(marginFooter, req.query);
        if (!objAoPdfTemplate) {
            util.setError(404, `Cannot find aoPdfTemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoPdfTemplate', objAoPdfTemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosPdfTemplatesCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objAoPdfTemplate = await aoPdfTemplateService.findOneByName(name, req.query);
        if (!objAoPdfTemplate) {
            util.setError(404, `Cannot find aoPdfTemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoPdfTemplate', objAoPdfTemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosPdfTemplatesCtrl.findOneByType = async (req, res) => {
    try {
        const { type } = req.params;
        const objAoPdfTemplate = await aoPdfTemplateService.findOneByType(type, req.query);
        if (!objAoPdfTemplate) {
            util.setError(404, `Cannot find aoPdfTemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoPdfTemplate', objAoPdfTemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosPdfTemplatesCtrl.findOneByPageSize = async (req, res) => {
    try {
        const { pageSize } = req.params;
        const objAoPdfTemplate = await aoPdfTemplateService.findOneByPageSize(pageSize, req.query);
        if (!objAoPdfTemplate) {
            util.setError(404, `Cannot find aoPdfTemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoPdfTemplate', objAoPdfTemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosPdfTemplatesCtrl.findOneByOrientation = async (req, res) => {
    try {
        const { orientation } = req.params;
        const objAoPdfTemplate = await aoPdfTemplateService.findOneByOrientation(orientation, req.query);
        if (!objAoPdfTemplate) {
            util.setError(404, `Cannot find aoPdfTemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoPdfTemplate', objAoPdfTemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosPdfTemplatesCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objAoPdfTemplate = await aoPdfTemplateService.findOneByDescription(description, req.query);
        if (!objAoPdfTemplate) {
            util.setError(404, `Cannot find aoPdfTemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoPdfTemplate', objAoPdfTemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosPdfTemplatesCtrl.findOneByPdfheader = async (req, res) => {
    try {
        const { pdfheader } = req.params;
        const objAoPdfTemplate = await aoPdfTemplateService.findOneByPdfheader(pdfheader, req.query);
        if (!objAoPdfTemplate) {
            util.setError(404, `Cannot find aoPdfTemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoPdfTemplate', objAoPdfTemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosPdfTemplatesCtrl.findOneByPdffooter = async (req, res) => {
    try {
        const { pdffooter } = req.params;
        const objAoPdfTemplate = await aoPdfTemplateService.findOneByPdffooter(pdffooter, req.query);
        if (!objAoPdfTemplate) {
            util.setError(404, `Cannot find aoPdfTemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoPdfTemplate', objAoPdfTemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosPdfTemplatesCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objAoPdfTemplate = await aoPdfTemplateService.findOneByDateEntered(dateEntered, req.query);
        if (!objAoPdfTemplate) {
            util.setError(404, `Cannot find aoPdfTemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoPdfTemplate', objAoPdfTemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosPdfTemplatesCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAoPdfTemplate = await aoPdfTemplateService.findOneByDateModified(dateModified, req.query);
        if (!objAoPdfTemplate) {
            util.setError(404, `Cannot find aoPdfTemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoPdfTemplate', objAoPdfTemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosPdfTemplatesCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objAoPdfTemplate = await aoPdfTemplateService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objAoPdfTemplate) {
            util.setError(404, `Cannot find aoPdfTemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoPdfTemplate', objAoPdfTemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosPdfTemplatesCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAoPdfTemplate = await aoPdfTemplateService.findOneByCreatedBy(createdBy, req.query);
        if (!objAoPdfTemplate) {
            util.setError(404, `Cannot find aoPdfTemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoPdfTemplate', objAoPdfTemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosPdfTemplatesCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objAoPdfTemplate = await aoPdfTemplateService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objAoPdfTemplate) {
            util.setError(404, `Cannot find aoPdfTemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoPdfTemplate', objAoPdfTemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aosPdfTemplatesCtrl.updateAoPdfTemplateById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoPdfTemplate = await aoPdfTemplateService.updateAoPdfTemplateById(id, req.body);
            if (!objAoPdfTemplate) {
                util.setError(404, `Cannot find aoPdfTemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoPdfTemplate updated', objAoPdfTemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosPdfTemplatesCtrl.updateAoPdfTemplateByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoPdfTemplate = await aoPdfTemplateService.updateAoPdfTemplateByDeleted(deleted, req.body);
            if (!objAoPdfTemplate) {
                util.setError(404, `Cannot find aoPdfTemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoPdfTemplate updated', objAoPdfTemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosPdfTemplatesCtrl.updateAoPdfTemplateByActive = async (req, res) => {
     const { active } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoPdfTemplate = await aoPdfTemplateService.updateAoPdfTemplateByActive(active, req.body);
            if (!objAoPdfTemplate) {
                util.setError(404, `Cannot find aoPdfTemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoPdfTemplate updated', objAoPdfTemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosPdfTemplatesCtrl.updateAoPdfTemplateByMarginLeft = async (req, res) => {
     const { marginLeft } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoPdfTemplate = await aoPdfTemplateService.updateAoPdfTemplateByMarginLeft(marginLeft, req.body);
            if (!objAoPdfTemplate) {
                util.setError(404, `Cannot find aoPdfTemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoPdfTemplate updated', objAoPdfTemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosPdfTemplatesCtrl.updateAoPdfTemplateByMarginRight = async (req, res) => {
     const { marginRight } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoPdfTemplate = await aoPdfTemplateService.updateAoPdfTemplateByMarginRight(marginRight, req.body);
            if (!objAoPdfTemplate) {
                util.setError(404, `Cannot find aoPdfTemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoPdfTemplate updated', objAoPdfTemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosPdfTemplatesCtrl.updateAoPdfTemplateByMarginTop = async (req, res) => {
     const { marginTop } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoPdfTemplate = await aoPdfTemplateService.updateAoPdfTemplateByMarginTop(marginTop, req.body);
            if (!objAoPdfTemplate) {
                util.setError(404, `Cannot find aoPdfTemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoPdfTemplate updated', objAoPdfTemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosPdfTemplatesCtrl.updateAoPdfTemplateByMarginBottom = async (req, res) => {
     const { marginBottom } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoPdfTemplate = await aoPdfTemplateService.updateAoPdfTemplateByMarginBottom(marginBottom, req.body);
            if (!objAoPdfTemplate) {
                util.setError(404, `Cannot find aoPdfTemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoPdfTemplate updated', objAoPdfTemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosPdfTemplatesCtrl.updateAoPdfTemplateByMarginHeader = async (req, res) => {
     const { marginHeader } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoPdfTemplate = await aoPdfTemplateService.updateAoPdfTemplateByMarginHeader(marginHeader, req.body);
            if (!objAoPdfTemplate) {
                util.setError(404, `Cannot find aoPdfTemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoPdfTemplate updated', objAoPdfTemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosPdfTemplatesCtrl.updateAoPdfTemplateByMarginFooter = async (req, res) => {
     const { marginFooter } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoPdfTemplate = await aoPdfTemplateService.updateAoPdfTemplateByMarginFooter(marginFooter, req.body);
            if (!objAoPdfTemplate) {
                util.setError(404, `Cannot find aoPdfTemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoPdfTemplate updated', objAoPdfTemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosPdfTemplatesCtrl.updateAoPdfTemplateByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoPdfTemplate = await aoPdfTemplateService.updateAoPdfTemplateByName(name, req.body);
            if (!objAoPdfTemplate) {
                util.setError(404, `Cannot find aoPdfTemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoPdfTemplate updated', objAoPdfTemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosPdfTemplatesCtrl.updateAoPdfTemplateByType = async (req, res) => {
     const { type } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoPdfTemplate = await aoPdfTemplateService.updateAoPdfTemplateByType(type, req.body);
            if (!objAoPdfTemplate) {
                util.setError(404, `Cannot find aoPdfTemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoPdfTemplate updated', objAoPdfTemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosPdfTemplatesCtrl.updateAoPdfTemplateByPageSize = async (req, res) => {
     const { pageSize } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoPdfTemplate = await aoPdfTemplateService.updateAoPdfTemplateByPageSize(pageSize, req.body);
            if (!objAoPdfTemplate) {
                util.setError(404, `Cannot find aoPdfTemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoPdfTemplate updated', objAoPdfTemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosPdfTemplatesCtrl.updateAoPdfTemplateByOrientation = async (req, res) => {
     const { orientation } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoPdfTemplate = await aoPdfTemplateService.updateAoPdfTemplateByOrientation(orientation, req.body);
            if (!objAoPdfTemplate) {
                util.setError(404, `Cannot find aoPdfTemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoPdfTemplate updated', objAoPdfTemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosPdfTemplatesCtrl.updateAoPdfTemplateByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoPdfTemplate = await aoPdfTemplateService.updateAoPdfTemplateByDescription(description, req.body);
            if (!objAoPdfTemplate) {
                util.setError(404, `Cannot find aoPdfTemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoPdfTemplate updated', objAoPdfTemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosPdfTemplatesCtrl.updateAoPdfTemplateByPdfheader = async (req, res) => {
     const { pdfheader } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoPdfTemplate = await aoPdfTemplateService.updateAoPdfTemplateByPdfheader(pdfheader, req.body);
            if (!objAoPdfTemplate) {
                util.setError(404, `Cannot find aoPdfTemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoPdfTemplate updated', objAoPdfTemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosPdfTemplatesCtrl.updateAoPdfTemplateByPdffooter = async (req, res) => {
     const { pdffooter } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoPdfTemplate = await aoPdfTemplateService.updateAoPdfTemplateByPdffooter(pdffooter, req.body);
            if (!objAoPdfTemplate) {
                util.setError(404, `Cannot find aoPdfTemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoPdfTemplate updated', objAoPdfTemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosPdfTemplatesCtrl.updateAoPdfTemplateByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoPdfTemplate = await aoPdfTemplateService.updateAoPdfTemplateByDateEntered(dateEntered, req.body);
            if (!objAoPdfTemplate) {
                util.setError(404, `Cannot find aoPdfTemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoPdfTemplate updated', objAoPdfTemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosPdfTemplatesCtrl.updateAoPdfTemplateByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoPdfTemplate = await aoPdfTemplateService.updateAoPdfTemplateByDateModified(dateModified, req.body);
            if (!objAoPdfTemplate) {
                util.setError(404, `Cannot find aoPdfTemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoPdfTemplate updated', objAoPdfTemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosPdfTemplatesCtrl.updateAoPdfTemplateByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoPdfTemplate = await aoPdfTemplateService.updateAoPdfTemplateByModifiedUserId(modifiedUserId, req.body);
            if (!objAoPdfTemplate) {
                util.setError(404, `Cannot find aoPdfTemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoPdfTemplate updated', objAoPdfTemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosPdfTemplatesCtrl.updateAoPdfTemplateByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoPdfTemplate = await aoPdfTemplateService.updateAoPdfTemplateByCreatedBy(createdBy, req.body);
            if (!objAoPdfTemplate) {
                util.setError(404, `Cannot find aoPdfTemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoPdfTemplate updated', objAoPdfTemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosPdfTemplatesCtrl.updateAoPdfTemplateByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoPdfTemplate = await aoPdfTemplateService.updateAoPdfTemplateByAssignedUserId(assignedUserId, req.body);
            if (!objAoPdfTemplate) {
                util.setError(404, `Cannot find aoPdfTemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoPdfTemplate updated', objAoPdfTemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aosPdfTemplatesCtrl;
//</es-section>
