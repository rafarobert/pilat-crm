/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:18 GMT-0400 (Bolivia Time)
 * Time: 14:56:18
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:18 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:18
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const aoProductCategoryService = require('../services/aos_product_categories.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aosProductCategoriesCtrl = {};
aosProductCategoriesCtrl.service = aoProductCategoryService;


aosProductCategoriesCtrl.getAllAosProductCategories = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.aosProductCategories.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objAosProductCategories = await aoProductCategoryService.getAllAosProductCategories(req.query);
        if (objAosProductCategories && objAosProductCategories.rows && objAosProductCategories.count) {
            util.setSuccess(200, 'AosProductCategories retrieved', objAosProductCategories.rows, objAosProductCategories.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No aoProductCategory found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductCategoriesCtrl.getAAoProductCategory = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAoProductCategory = await aoProductCategoryService.getAAoProductCategory(id, req.query);
        if (!objAoProductCategory) {
            util.setError(404, `Cannot find aoProductCategory with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aoProductCategory', objAoProductCategory);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductCategoriesCtrl.addAoProductCategory = async (req, res) => {
    try {
        const objAoProductCategory = await aoProductCategoryService.addAoProductCategory(req.body);
        util.setSuccess(201, 'AoProductCategory Added!', objAoProductCategory);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductCategoriesCtrl.updateAoProductCategory = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAoProductCategory = await aoProductCategoryService.updateAoProductCategory(id, req.body);
        if (!objAoProductCategory) {
            util.setError(404, `Cannot find aoProductCategory with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AoProductCategory updated', objAoProductCategory);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aosProductCategoriesCtrl.deleteAoProductCategory = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAoProductCategory = await aoProductCategoryService.deleteAoProductCategory(id);
        if (objAoProductCategory) {
            util.setSuccess(200, 'AoProductCategory deleted', objAoProductCategory);
        } else {
            util.setError(404, `AoProductCategory with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aosProductCategoriesCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAoProductCategory = await aoProductCategoryService.findOneById(id, req.query);
        if (!objAoProductCategory) {
            util.setError(404, `Cannot find aoProductCategory with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductCategory', objAoProductCategory);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductCategoriesCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAoProductCategory = await aoProductCategoryService.findOneByDeleted(deleted, req.query);
        if (!objAoProductCategory) {
            util.setError(404, `Cannot find aoProductCategory with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductCategory', objAoProductCategory);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductCategoriesCtrl.findOneByIsParent = async (req, res) => {
    try {
        const { isParent } = req.params;
        const objAoProductCategory = await aoProductCategoryService.findOneByIsParent(isParent, req.query);
        if (!objAoProductCategory) {
            util.setError(404, `Cannot find aoProductCategory with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductCategory', objAoProductCategory);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductCategoriesCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objAoProductCategory = await aoProductCategoryService.findOneByName(name, req.query);
        if (!objAoProductCategory) {
            util.setError(404, `Cannot find aoProductCategory with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductCategory', objAoProductCategory);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductCategoriesCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objAoProductCategory = await aoProductCategoryService.findOneByDescription(description, req.query);
        if (!objAoProductCategory) {
            util.setError(404, `Cannot find aoProductCategory with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductCategory', objAoProductCategory);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductCategoriesCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objAoProductCategory = await aoProductCategoryService.findOneByDateEntered(dateEntered, req.query);
        if (!objAoProductCategory) {
            util.setError(404, `Cannot find aoProductCategory with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductCategory', objAoProductCategory);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductCategoriesCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAoProductCategory = await aoProductCategoryService.findOneByDateModified(dateModified, req.query);
        if (!objAoProductCategory) {
            util.setError(404, `Cannot find aoProductCategory with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductCategory', objAoProductCategory);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductCategoriesCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objAoProductCategory = await aoProductCategoryService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objAoProductCategory) {
            util.setError(404, `Cannot find aoProductCategory with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductCategory', objAoProductCategory);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductCategoriesCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAoProductCategory = await aoProductCategoryService.findOneByCreatedBy(createdBy, req.query);
        if (!objAoProductCategory) {
            util.setError(404, `Cannot find aoProductCategory with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductCategory', objAoProductCategory);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductCategoriesCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objAoProductCategory = await aoProductCategoryService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objAoProductCategory) {
            util.setError(404, `Cannot find aoProductCategory with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductCategory', objAoProductCategory);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductCategoriesCtrl.findOneByParentCategoryId = async (req, res) => {
    try {
        const { parentCategoryId } = req.params;
        const objAoProductCategory = await aoProductCategoryService.findOneByParentCategoryId(parentCategoryId, req.query);
        if (!objAoProductCategory) {
            util.setError(404, `Cannot find aoProductCategory with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductCategory', objAoProductCategory);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aosProductCategoriesCtrl.updateAoProductCategoryById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductCategory = await aoProductCategoryService.updateAoProductCategoryById(id, req.body);
            if (!objAoProductCategory) {
                util.setError(404, `Cannot find aoProductCategory with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductCategory updated', objAoProductCategory);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductCategoriesCtrl.updateAoProductCategoryByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductCategory = await aoProductCategoryService.updateAoProductCategoryByDeleted(deleted, req.body);
            if (!objAoProductCategory) {
                util.setError(404, `Cannot find aoProductCategory with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductCategory updated', objAoProductCategory);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductCategoriesCtrl.updateAoProductCategoryByIsParent = async (req, res) => {
     const { isParent } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductCategory = await aoProductCategoryService.updateAoProductCategoryByIsParent(isParent, req.body);
            if (!objAoProductCategory) {
                util.setError(404, `Cannot find aoProductCategory with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductCategory updated', objAoProductCategory);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductCategoriesCtrl.updateAoProductCategoryByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductCategory = await aoProductCategoryService.updateAoProductCategoryByName(name, req.body);
            if (!objAoProductCategory) {
                util.setError(404, `Cannot find aoProductCategory with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductCategory updated', objAoProductCategory);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductCategoriesCtrl.updateAoProductCategoryByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductCategory = await aoProductCategoryService.updateAoProductCategoryByDescription(description, req.body);
            if (!objAoProductCategory) {
                util.setError(404, `Cannot find aoProductCategory with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductCategory updated', objAoProductCategory);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductCategoriesCtrl.updateAoProductCategoryByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductCategory = await aoProductCategoryService.updateAoProductCategoryByDateEntered(dateEntered, req.body);
            if (!objAoProductCategory) {
                util.setError(404, `Cannot find aoProductCategory with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductCategory updated', objAoProductCategory);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductCategoriesCtrl.updateAoProductCategoryByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductCategory = await aoProductCategoryService.updateAoProductCategoryByDateModified(dateModified, req.body);
            if (!objAoProductCategory) {
                util.setError(404, `Cannot find aoProductCategory with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductCategory updated', objAoProductCategory);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductCategoriesCtrl.updateAoProductCategoryByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductCategory = await aoProductCategoryService.updateAoProductCategoryByModifiedUserId(modifiedUserId, req.body);
            if (!objAoProductCategory) {
                util.setError(404, `Cannot find aoProductCategory with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductCategory updated', objAoProductCategory);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductCategoriesCtrl.updateAoProductCategoryByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductCategory = await aoProductCategoryService.updateAoProductCategoryByCreatedBy(createdBy, req.body);
            if (!objAoProductCategory) {
                util.setError(404, `Cannot find aoProductCategory with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductCategory updated', objAoProductCategory);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductCategoriesCtrl.updateAoProductCategoryByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductCategory = await aoProductCategoryService.updateAoProductCategoryByAssignedUserId(assignedUserId, req.body);
            if (!objAoProductCategory) {
                util.setError(404, `Cannot find aoProductCategory with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductCategory updated', objAoProductCategory);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductCategoriesCtrl.updateAoProductCategoryByParentCategoryId = async (req, res) => {
     const { parentCategoryId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductCategory = await aoProductCategoryService.updateAoProductCategoryByParentCategoryId(parentCategoryId, req.body);
            if (!objAoProductCategory) {
                util.setError(404, `Cannot find aoProductCategory with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductCategory updated', objAoProductCategory);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aosProductCategoriesCtrl;
//</es-section>
