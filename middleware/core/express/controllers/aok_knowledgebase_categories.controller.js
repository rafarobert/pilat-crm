/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:10 GMT-0400 (Bolivia Time)
 * Time: 15:35:10
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:10 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:10
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aokKnowledgebaseCategoryService = require('../services/aok_knowledgebase_categories.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aokKnowledgebaseCategoriesCtrl = {};
aokKnowledgebaseCategoriesCtrl.service = aokKnowledgebaseCategoryService;


aokKnowledgebaseCategoriesCtrl.getAllAokKnowledgebaseCategories = async (req, res) => {
    try {
        const objAokKnowledgebaseCategories = await aokKnowledgebaseCategoryService.getAllAokKnowledgebaseCategories(req.query);
        if (objAokKnowledgebaseCategories.length > 0) {
            util.setSuccess(200, 'AokKnowledgebaseCategories retrieved', objAokKnowledgebaseCategories);
        } else {
            util.setSuccess(200, 'No aokKnowledgebaseCategory found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgebaseCategoriesCtrl.getAAokKnowledgebaseCategory = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objAokKnowledgebaseCategory = await aokKnowledgebaseCategoryService.getAAokKnowledgebaseCategory(id, req.query);
        if (!objAokKnowledgebaseCategory) {
            util.setError(404, `Cannot find aokKnowledgebaseCategory with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgebaseCategory', objAokKnowledgebaseCategory);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgebaseCategoriesCtrl.addAokKnowledgebaseCategory = async (req, res) => {
    try {
        const objAokKnowledgebaseCategory = await aokKnowledgebaseCategoryService.addAokKnowledgebaseCategory(req.body);
        util.setSuccess(201, 'AokKnowledgebaseCategory Added!', objAokKnowledgebaseCategory);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgebaseCategoriesCtrl.updateAokKnowledgebaseCategory = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objAokKnowledgebaseCategory = await aokKnowledgebaseCategoryService.updateAokKnowledgebaseCategory(id, req.body);
        if (!objAokKnowledgebaseCategory) {
            util.setError(404, `Cannot find aokKnowledgebaseCategory with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AokKnowledgebaseCategory updated', objAokKnowledgebaseCategory);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aokKnowledgebaseCategoriesCtrl.deleteAokKnowledgebaseCategory = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objAokKnowledgebaseCategory = await aokKnowledgebaseCategoryService.deleteAokKnowledgebaseCategory(id);
        if (objAokKnowledgebaseCategory) {
            util.setSuccess(200, 'AokKnowledgebaseCategory deleted', objAokKnowledgebaseCategory);
        } else {
            util.setError(404, `AokKnowledgebaseCategory with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aokKnowledgebaseCategoriesCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAokKnowledgebaseCategory = await aokKnowledgebaseCategoryService.findOneById(id, req.query);
        if (!objAokKnowledgebaseCategory) {
            util.setError(404, `Cannot find aokKnowledgebaseCategory with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgebaseCategory', objAokKnowledgebaseCategory);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgebaseCategoriesCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAokKnowledgebaseCategory = await aokKnowledgebaseCategoryService.findOneByDeleted(deleted, req.query);
        if (!objAokKnowledgebaseCategory) {
            util.setError(404, `Cannot find aokKnowledgebaseCategory with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgebaseCategory', objAokKnowledgebaseCategory);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgebaseCategoriesCtrl.findOneByAokKnowledgebaseId = async (req, res) => {
    try {
        const { aokKnowledgebaseId } = req.params;
        const objAokKnowledgebaseCategory = await aokKnowledgebaseCategoryService.findOneByAokKnowledgebaseId(aokKnowledgebaseId, req.query);
        if (!objAokKnowledgebaseCategory) {
            util.setError(404, `Cannot find aokKnowledgebaseCategory with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgebaseCategory', objAokKnowledgebaseCategory);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgebaseCategoriesCtrl.findOneByAokKnowledgeBaseCategoriesId = async (req, res) => {
    try {
        const { aokKnowledgeBaseCategoriesId } = req.params;
        const objAokKnowledgebaseCategory = await aokKnowledgebaseCategoryService.findOneByAokKnowledgeBaseCategoriesId(aokKnowledgeBaseCategoriesId, req.query);
        if (!objAokKnowledgebaseCategory) {
            util.setError(404, `Cannot find aokKnowledgebaseCategory with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgebaseCategory', objAokKnowledgebaseCategory);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgebaseCategoriesCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAokKnowledgebaseCategory = await aokKnowledgebaseCategoryService.findOneByDateModified(dateModified, req.query);
        if (!objAokKnowledgebaseCategory) {
            util.setError(404, `Cannot find aokKnowledgebaseCategory with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgebaseCategory', objAokKnowledgebaseCategory);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aokKnowledgebaseCategoriesCtrl.updateAokKnowledgebaseCategoryById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAokKnowledgebaseCategory = await aokKnowledgebaseCategoryService.updateAokKnowledgebaseCategoryById(id, req.body);
            if (!objAokKnowledgebaseCategory) {
                util.setError(404, `Cannot find aokKnowledgebaseCategory with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgebaseCategory updated', objAokKnowledgebaseCategory);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgebaseCategoriesCtrl.updateAokKnowledgebaseCategoryByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAokKnowledgebaseCategory = await aokKnowledgebaseCategoryService.updateAokKnowledgebaseCategoryByDeleted(deleted, req.body);
            if (!objAokKnowledgebaseCategory) {
                util.setError(404, `Cannot find aokKnowledgebaseCategory with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgebaseCategory updated', objAokKnowledgebaseCategory);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgebaseCategoriesCtrl.updateAokKnowledgebaseCategoryByAokKnowledgebaseId = async (req, res) => {
     const { aokKnowledgebaseId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAokKnowledgebaseCategory = await aokKnowledgebaseCategoryService.updateAokKnowledgebaseCategoryByAokKnowledgebaseId(aokKnowledgebaseId, req.body);
            if (!objAokKnowledgebaseCategory) {
                util.setError(404, `Cannot find aokKnowledgebaseCategory with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgebaseCategory updated', objAokKnowledgebaseCategory);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgebaseCategoriesCtrl.updateAokKnowledgebaseCategoryByAokKnowledgeBaseCategoriesId = async (req, res) => {
     const { aokKnowledgeBaseCategoriesId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAokKnowledgebaseCategory = await aokKnowledgebaseCategoryService.updateAokKnowledgebaseCategoryByAokKnowledgeBaseCategoriesId(aokKnowledgeBaseCategoriesId, req.body);
            if (!objAokKnowledgebaseCategory) {
                util.setError(404, `Cannot find aokKnowledgebaseCategory with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgebaseCategory updated', objAokKnowledgebaseCategory);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgebaseCategoriesCtrl.updateAokKnowledgebaseCategoryByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAokKnowledgebaseCategory = await aokKnowledgebaseCategoryService.updateAokKnowledgebaseCategoryByDateModified(dateModified, req.body);
            if (!objAokKnowledgebaseCategory) {
                util.setError(404, `Cannot find aokKnowledgebaseCategory with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgebaseCategory updated', objAokKnowledgebaseCategory);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aokKnowledgebaseCategoriesCtrl;
//</es-section>
