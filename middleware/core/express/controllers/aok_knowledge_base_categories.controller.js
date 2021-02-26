/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:03 GMT-0400 (Bolivia Time)
 * Time: 0:22:3
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:03 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:3
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aokKnowledgeBaseCategoryService = require('../services/aok_knowledge_base_categories.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aokKnowledgeBaseCategoriesCtrl = {};
aokKnowledgeBaseCategoriesCtrl.service = aokKnowledgeBaseCategoryService;


aokKnowledgeBaseCategoriesCtrl.getAllAokKnowledgeBaseCategories = async (req, res) => {
    try {
        const objAokKnowledgeBaseCategories = await aokKnowledgeBaseCategoryService.getAllAokKnowledgeBaseCategories(req.query);
        if (objAokKnowledgeBaseCategories.length > 0) {
            util.setSuccess(200, 'AokKnowledgeBaseCategories retrieved', objAokKnowledgeBaseCategories);
        } else {
            util.setSuccess(200, 'No aokKnowledgeBaseCategory found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgeBaseCategoriesCtrl.getAAokKnowledgeBaseCategory = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAokKnowledgeBaseCategory = await aokKnowledgeBaseCategoryService.getAAokKnowledgeBaseCategory(id, req.query);
        if (!objAokKnowledgeBaseCategory) {
            util.setError(404, `Cannot find aokKnowledgeBaseCategory with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgeBaseCategory', objAokKnowledgeBaseCategory);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgeBaseCategoriesCtrl.addAokKnowledgeBaseCategory = async (req, res) => {
    try {
        const objAokKnowledgeBaseCategory = await aokKnowledgeBaseCategoryService.addAokKnowledgeBaseCategory(req.body);
        util.setSuccess(201, 'AokKnowledgeBaseCategory Added!', objAokKnowledgeBaseCategory);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgeBaseCategoriesCtrl.updateAokKnowledgeBaseCategory = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAokKnowledgeBaseCategory = await aokKnowledgeBaseCategoryService.updateAokKnowledgeBaseCategory(id, req.body);
        if (!objAokKnowledgeBaseCategory) {
            util.setError(404, `Cannot find aokKnowledgeBaseCategory with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AokKnowledgeBaseCategory updated', objAokKnowledgeBaseCategory);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aokKnowledgeBaseCategoriesCtrl.deleteAokKnowledgeBaseCategory = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAokKnowledgeBaseCategory = await aokKnowledgeBaseCategoryService.deleteAokKnowledgeBaseCategory(id);
        if (objAokKnowledgeBaseCategory) {
            util.setSuccess(200, 'AokKnowledgeBaseCategory deleted', objAokKnowledgeBaseCategory);
        } else {
            util.setError(404, `AokKnowledgeBaseCategory with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aokKnowledgeBaseCategoriesCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAokKnowledgeBaseCategory = await aokKnowledgeBaseCategoryService.findOneById(id, req.query);
        if (!objAokKnowledgeBaseCategory) {
            util.setError(404, `Cannot find aokKnowledgeBaseCategory with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgeBaseCategory', objAokKnowledgeBaseCategory);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgeBaseCategoriesCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAokKnowledgeBaseCategory = await aokKnowledgeBaseCategoryService.findOneByDeleted(deleted, req.query);
        if (!objAokKnowledgeBaseCategory) {
            util.setError(404, `Cannot find aokKnowledgeBaseCategory with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgeBaseCategory', objAokKnowledgeBaseCategory);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgeBaseCategoriesCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objAokKnowledgeBaseCategory = await aokKnowledgeBaseCategoryService.findOneByName(name, req.query);
        if (!objAokKnowledgeBaseCategory) {
            util.setError(404, `Cannot find aokKnowledgeBaseCategory with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgeBaseCategory', objAokKnowledgeBaseCategory);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgeBaseCategoriesCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objAokKnowledgeBaseCategory = await aokKnowledgeBaseCategoryService.findOneByDescription(description, req.query);
        if (!objAokKnowledgeBaseCategory) {
            util.setError(404, `Cannot find aokKnowledgeBaseCategory with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgeBaseCategory', objAokKnowledgeBaseCategory);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgeBaseCategoriesCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objAokKnowledgeBaseCategory = await aokKnowledgeBaseCategoryService.findOneByDateEntered(dateEntered, req.query);
        if (!objAokKnowledgeBaseCategory) {
            util.setError(404, `Cannot find aokKnowledgeBaseCategory with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgeBaseCategory', objAokKnowledgeBaseCategory);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgeBaseCategoriesCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAokKnowledgeBaseCategory = await aokKnowledgeBaseCategoryService.findOneByDateModified(dateModified, req.query);
        if (!objAokKnowledgeBaseCategory) {
            util.setError(404, `Cannot find aokKnowledgeBaseCategory with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgeBaseCategory', objAokKnowledgeBaseCategory);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgeBaseCategoriesCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objAokKnowledgeBaseCategory = await aokKnowledgeBaseCategoryService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objAokKnowledgeBaseCategory) {
            util.setError(404, `Cannot find aokKnowledgeBaseCategory with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgeBaseCategory', objAokKnowledgeBaseCategory);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgeBaseCategoriesCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAokKnowledgeBaseCategory = await aokKnowledgeBaseCategoryService.findOneByCreatedBy(createdBy, req.query);
        if (!objAokKnowledgeBaseCategory) {
            util.setError(404, `Cannot find aokKnowledgeBaseCategory with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgeBaseCategory', objAokKnowledgeBaseCategory);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgeBaseCategoriesCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objAokKnowledgeBaseCategory = await aokKnowledgeBaseCategoryService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objAokKnowledgeBaseCategory) {
            util.setError(404, `Cannot find aokKnowledgeBaseCategory with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgeBaseCategory', objAokKnowledgeBaseCategory);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aokKnowledgeBaseCategoriesCtrl.updateAokKnowledgeBaseCategoryById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgeBaseCategory = await aokKnowledgeBaseCategoryService.updateAokKnowledgeBaseCategoryById(id, req.body);
            if (!objAokKnowledgeBaseCategory) {
                util.setError(404, `Cannot find aokKnowledgeBaseCategory with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgeBaseCategory updated', objAokKnowledgeBaseCategory);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgeBaseCategoriesCtrl.updateAokKnowledgeBaseCategoryByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgeBaseCategory = await aokKnowledgeBaseCategoryService.updateAokKnowledgeBaseCategoryByDeleted(deleted, req.body);
            if (!objAokKnowledgeBaseCategory) {
                util.setError(404, `Cannot find aokKnowledgeBaseCategory with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgeBaseCategory updated', objAokKnowledgeBaseCategory);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgeBaseCategoriesCtrl.updateAokKnowledgeBaseCategoryByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgeBaseCategory = await aokKnowledgeBaseCategoryService.updateAokKnowledgeBaseCategoryByName(name, req.body);
            if (!objAokKnowledgeBaseCategory) {
                util.setError(404, `Cannot find aokKnowledgeBaseCategory with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgeBaseCategory updated', objAokKnowledgeBaseCategory);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgeBaseCategoriesCtrl.updateAokKnowledgeBaseCategoryByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgeBaseCategory = await aokKnowledgeBaseCategoryService.updateAokKnowledgeBaseCategoryByDescription(description, req.body);
            if (!objAokKnowledgeBaseCategory) {
                util.setError(404, `Cannot find aokKnowledgeBaseCategory with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgeBaseCategory updated', objAokKnowledgeBaseCategory);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgeBaseCategoriesCtrl.updateAokKnowledgeBaseCategoryByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgeBaseCategory = await aokKnowledgeBaseCategoryService.updateAokKnowledgeBaseCategoryByDateEntered(dateEntered, req.body);
            if (!objAokKnowledgeBaseCategory) {
                util.setError(404, `Cannot find aokKnowledgeBaseCategory with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgeBaseCategory updated', objAokKnowledgeBaseCategory);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgeBaseCategoriesCtrl.updateAokKnowledgeBaseCategoryByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgeBaseCategory = await aokKnowledgeBaseCategoryService.updateAokKnowledgeBaseCategoryByDateModified(dateModified, req.body);
            if (!objAokKnowledgeBaseCategory) {
                util.setError(404, `Cannot find aokKnowledgeBaseCategory with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgeBaseCategory updated', objAokKnowledgeBaseCategory);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgeBaseCategoriesCtrl.updateAokKnowledgeBaseCategoryByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgeBaseCategory = await aokKnowledgeBaseCategoryService.updateAokKnowledgeBaseCategoryByModifiedUserId(modifiedUserId, req.body);
            if (!objAokKnowledgeBaseCategory) {
                util.setError(404, `Cannot find aokKnowledgeBaseCategory with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgeBaseCategory updated', objAokKnowledgeBaseCategory);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgeBaseCategoriesCtrl.updateAokKnowledgeBaseCategoryByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgeBaseCategory = await aokKnowledgeBaseCategoryService.updateAokKnowledgeBaseCategoryByCreatedBy(createdBy, req.body);
            if (!objAokKnowledgeBaseCategory) {
                util.setError(404, `Cannot find aokKnowledgeBaseCategory with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgeBaseCategory updated', objAokKnowledgeBaseCategory);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgeBaseCategoriesCtrl.updateAokKnowledgeBaseCategoryByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgeBaseCategory = await aokKnowledgeBaseCategoryService.updateAokKnowledgeBaseCategoryByAssignedUserId(assignedUserId, req.body);
            if (!objAokKnowledgeBaseCategory) {
                util.setError(404, `Cannot find aokKnowledgeBaseCategory with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgeBaseCategory updated', objAokKnowledgeBaseCategory);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aokKnowledgeBaseCategoriesCtrl;
//</es-section>
