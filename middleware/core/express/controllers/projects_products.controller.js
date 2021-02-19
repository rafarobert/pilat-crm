/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:20 GMT-0400 (Bolivia Time)
 * Time: 18:38:20
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:20 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:20
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const projectProductService = require('../services/projects_products.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const projectsProductsCtrl = {};
projectsProductsCtrl.service = projectProductService;


projectsProductsCtrl.getAllProjectsProducts = async (req, res) => {
    try {
        const objProjectsProducts = await projectProductService.getAllProjectsProducts(req.query);
        if (objProjectsProducts.length > 0) {
            util.setSuccess(200, 'ProjectsProducts retrieved', objProjectsProducts);
        } else {
            util.setSuccess(200, 'No projectProduct found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsProductsCtrl.getAProjectProduct = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objProjectProduct = await projectProductService.getAProjectProduct(id, req.query);
        if (!objProjectProduct) {
            util.setError(404, `Cannot find projectProduct with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found projectProduct', objProjectProduct);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsProductsCtrl.addProjectProduct = async (req, res) => {
    try {
        const objProjectProduct = await projectProductService.addProjectProduct(req.body);
        util.setSuccess(201, 'ProjectProduct Added!', objProjectProduct);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsProductsCtrl.updateProjectProduct = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objProjectProduct = await projectProductService.updateProjectProduct(id, req.body);
        if (!objProjectProduct) {
            util.setError(404, `Cannot find projectProduct with the id: ${id}`);
        } else {
            util.setSuccess(200, 'ProjectProduct updated', objProjectProduct);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

projectsProductsCtrl.deleteProjectProduct = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objProjectProduct = await projectProductService.deleteProjectProduct(id);
        if (objProjectProduct) {
            util.setSuccess(200, 'ProjectProduct deleted', objProjectProduct);
        } else {
            util.setError(404, `ProjectProduct with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



projectsProductsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objProjectProduct = await projectProductService.findOneById(id, req.query);
        if (!objProjectProduct) {
            util.setError(404, `Cannot find projectProduct with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectProduct', objProjectProduct);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsProductsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objProjectProduct = await projectProductService.findOneByDeleted(deleted, req.query);
        if (!objProjectProduct) {
            util.setError(404, `Cannot find projectProduct with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectProduct', objProjectProduct);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsProductsCtrl.findOneByProductId = async (req, res) => {
    try {
        const { productId } = req.params;
        const objProjectProduct = await projectProductService.findOneByProductId(productId, req.query);
        if (!objProjectProduct) {
            util.setError(404, `Cannot find projectProduct with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectProduct', objProjectProduct);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsProductsCtrl.findOneByProjectId = async (req, res) => {
    try {
        const { projectId } = req.params;
        const objProjectProduct = await projectProductService.findOneByProjectId(projectId, req.query);
        if (!objProjectProduct) {
            util.setError(404, `Cannot find projectProduct with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectProduct', objProjectProduct);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsProductsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objProjectProduct = await projectProductService.findOneByDateModified(dateModified, req.query);
        if (!objProjectProduct) {
            util.setError(404, `Cannot find projectProduct with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectProduct', objProjectProduct);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



projectsProductsCtrl.updateProjectProductById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProjectProduct = await projectProductService.updateProjectProductById(id, req.body);
            if (!objProjectProduct) {
                util.setError(404, `Cannot find projectProduct with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectProduct updated', objProjectProduct);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectsProductsCtrl.updateProjectProductByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProjectProduct = await projectProductService.updateProjectProductByDeleted(deleted, req.body);
            if (!objProjectProduct) {
                util.setError(404, `Cannot find projectProduct with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectProduct updated', objProjectProduct);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectsProductsCtrl.updateProjectProductByProductId = async (req, res) => {
     const { productId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProjectProduct = await projectProductService.updateProjectProductByProductId(productId, req.body);
            if (!objProjectProduct) {
                util.setError(404, `Cannot find projectProduct with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectProduct updated', objProjectProduct);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectsProductsCtrl.updateProjectProductByProjectId = async (req, res) => {
     const { projectId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProjectProduct = await projectProductService.updateProjectProductByProjectId(projectId, req.body);
            if (!objProjectProduct) {
                util.setError(404, `Cannot find projectProduct with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectProduct updated', objProjectProduct);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectsProductsCtrl.updateProjectProductByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProjectProduct = await projectProductService.updateProjectProductByDateModified(dateModified, req.body);
            if (!objProjectProduct) {
                util.setError(404, `Cannot find projectProduct with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectProduct updated', objProjectProduct);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = projectsProductsCtrl;
//</es-section>
