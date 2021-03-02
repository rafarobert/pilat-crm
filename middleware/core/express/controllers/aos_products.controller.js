/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:20 GMT-0400 (Bolivia Time)
 * Time: 14:0:20
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:20 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:20
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aoProductService = require('../services/aos_products.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aosProductsCtrl = {};
aosProductsCtrl.service = aoProductService;


aosProductsCtrl.getAllAosProducts = async (req, res) => {
    try {
        const objAosProducts = await aoProductService.getAllAosProducts(req.query);
        if (objAosProducts.length > 0) {
            util.setSuccess(200, 'AosProducts retrieved', objAosProducts);
        } else {
            util.setSuccess(200, 'No aoProduct found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsCtrl.getAAoProduct = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAoProduct = await aoProductService.getAAoProduct(id, req.query);
        if (!objAoProduct) {
            util.setError(404, `Cannot find aoProduct with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aoProduct', objAoProduct);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsCtrl.addAoProduct = async (req, res) => {
    try {
        const objAoProduct = await aoProductService.addAoProduct(req.body);
        util.setSuccess(201, 'AoProduct Added!', objAoProduct);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsCtrl.updateAoProduct = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAoProduct = await aoProductService.updateAoProduct(id, req.body);
        if (!objAoProduct) {
            util.setError(404, `Cannot find aoProduct with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AoProduct updated', objAoProduct);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aosProductsCtrl.deleteAoProduct = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAoProduct = await aoProductService.deleteAoProduct(id);
        if (objAoProduct) {
            util.setSuccess(200, 'AoProduct deleted', objAoProduct);
        } else {
            util.setError(404, `AoProduct with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aosProductsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAoProduct = await aoProductService.findOneById(id, req.query);
        if (!objAoProduct) {
            util.setError(404, `Cannot find aoProduct with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProduct', objAoProduct);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAoProduct = await aoProductService.findOneByDeleted(deleted, req.query);
        if (!objAoProduct) {
            util.setError(404, `Cannot find aoProduct with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProduct', objAoProduct);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsCtrl.findOneByCost = async (req, res) => {
    try {
        const { cost } = req.params;
        const objAoProduct = await aoProductService.findOneByCost(cost, req.query);
        if (!objAoProduct) {
            util.setError(404, `Cannot find aoProduct with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProduct', objAoProduct);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsCtrl.findOneByCostUsdollar = async (req, res) => {
    try {
        const { costUsdollar } = req.params;
        const objAoProduct = await aoProductService.findOneByCostUsdollar(costUsdollar, req.query);
        if (!objAoProduct) {
            util.setError(404, `Cannot find aoProduct with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProduct', objAoProduct);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsCtrl.findOneByPrice = async (req, res) => {
    try {
        const { price } = req.params;
        const objAoProduct = await aoProductService.findOneByPrice(price, req.query);
        if (!objAoProduct) {
            util.setError(404, `Cannot find aoProduct with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProduct', objAoProduct);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsCtrl.findOneByPriceUsdollar = async (req, res) => {
    try {
        const { priceUsdollar } = req.params;
        const objAoProduct = await aoProductService.findOneByPriceUsdollar(priceUsdollar, req.query);
        if (!objAoProduct) {
            util.setError(404, `Cannot find aoProduct with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProduct', objAoProduct);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objAoProduct = await aoProductService.findOneByName(name, req.query);
        if (!objAoProduct) {
            util.setError(404, `Cannot find aoProduct with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProduct', objAoProduct);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsCtrl.findOneByMaincode = async (req, res) => {
    try {
        const { maincode } = req.params;
        const objAoProduct = await aoProductService.findOneByMaincode(maincode, req.query);
        if (!objAoProduct) {
            util.setError(404, `Cannot find aoProduct with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProduct', objAoProduct);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsCtrl.findOneByPartNumber = async (req, res) => {
    try {
        const { partNumber } = req.params;
        const objAoProduct = await aoProductService.findOneByPartNumber(partNumber, req.query);
        if (!objAoProduct) {
            util.setError(404, `Cannot find aoProduct with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProduct', objAoProduct);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsCtrl.findOneByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const objAoProduct = await aoProductService.findOneByCategory(category, req.query);
        if (!objAoProduct) {
            util.setError(404, `Cannot find aoProduct with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProduct', objAoProduct);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsCtrl.findOneByType = async (req, res) => {
    try {
        const { type } = req.params;
        const objAoProduct = await aoProductService.findOneByType(type, req.query);
        if (!objAoProduct) {
            util.setError(404, `Cannot find aoProduct with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProduct', objAoProduct);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsCtrl.findOneByUrl = async (req, res) => {
    try {
        const { url } = req.params;
        const objAoProduct = await aoProductService.findOneByUrl(url, req.query);
        if (!objAoProduct) {
            util.setError(404, `Cannot find aoProduct with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProduct', objAoProduct);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsCtrl.findOneByProductImage = async (req, res) => {
    try {
        const { productImage } = req.params;
        const objAoProduct = await aoProductService.findOneByProductImage(productImage, req.query);
        if (!objAoProduct) {
            util.setError(404, `Cannot find aoProduct with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProduct', objAoProduct);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objAoProduct = await aoProductService.findOneByDescription(description, req.query);
        if (!objAoProduct) {
            util.setError(404, `Cannot find aoProduct with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProduct', objAoProduct);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objAoProduct = await aoProductService.findOneByDateEntered(dateEntered, req.query);
        if (!objAoProduct) {
            util.setError(404, `Cannot find aoProduct with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProduct', objAoProduct);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAoProduct = await aoProductService.findOneByDateModified(dateModified, req.query);
        if (!objAoProduct) {
            util.setError(404, `Cannot find aoProduct with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProduct', objAoProduct);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objAoProduct = await aoProductService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objAoProduct) {
            util.setError(404, `Cannot find aoProduct with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProduct', objAoProduct);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAoProduct = await aoProductService.findOneByCreatedBy(createdBy, req.query);
        if (!objAoProduct) {
            util.setError(404, `Cannot find aoProduct with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProduct', objAoProduct);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objAoProduct = await aoProductService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objAoProduct) {
            util.setError(404, `Cannot find aoProduct with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProduct', objAoProduct);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsCtrl.findOneByCurrencyId = async (req, res) => {
    try {
        const { currencyId } = req.params;
        const objAoProduct = await aoProductService.findOneByCurrencyId(currencyId, req.query);
        if (!objAoProduct) {
            util.setError(404, `Cannot find aoProduct with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProduct', objAoProduct);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsCtrl.findOneByContactId = async (req, res) => {
    try {
        const { contactId } = req.params;
        const objAoProduct = await aoProductService.findOneByContactId(contactId, req.query);
        if (!objAoProduct) {
            util.setError(404, `Cannot find aoProduct with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProduct', objAoProduct);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsCtrl.findOneByAosProductCategoryId = async (req, res) => {
    try {
        const { aosProductCategoryId } = req.params;
        const objAoProduct = await aoProductService.findOneByAosProductCategoryId(aosProductCategoryId, req.query);
        if (!objAoProduct) {
            util.setError(404, `Cannot find aoProduct with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProduct', objAoProduct);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aosProductsCtrl.updateAoProductById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProduct = await aoProductService.updateAoProductById(id, req.body);
            if (!objAoProduct) {
                util.setError(404, `Cannot find aoProduct with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProduct updated', objAoProduct);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsCtrl.updateAoProductByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProduct = await aoProductService.updateAoProductByDeleted(deleted, req.body);
            if (!objAoProduct) {
                util.setError(404, `Cannot find aoProduct with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProduct updated', objAoProduct);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsCtrl.updateAoProductByCost = async (req, res) => {
     const { cost } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProduct = await aoProductService.updateAoProductByCost(cost, req.body);
            if (!objAoProduct) {
                util.setError(404, `Cannot find aoProduct with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProduct updated', objAoProduct);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsCtrl.updateAoProductByCostUsdollar = async (req, res) => {
     const { costUsdollar } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProduct = await aoProductService.updateAoProductByCostUsdollar(costUsdollar, req.body);
            if (!objAoProduct) {
                util.setError(404, `Cannot find aoProduct with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProduct updated', objAoProduct);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsCtrl.updateAoProductByPrice = async (req, res) => {
     const { price } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProduct = await aoProductService.updateAoProductByPrice(price, req.body);
            if (!objAoProduct) {
                util.setError(404, `Cannot find aoProduct with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProduct updated', objAoProduct);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsCtrl.updateAoProductByPriceUsdollar = async (req, res) => {
     const { priceUsdollar } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProduct = await aoProductService.updateAoProductByPriceUsdollar(priceUsdollar, req.body);
            if (!objAoProduct) {
                util.setError(404, `Cannot find aoProduct with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProduct updated', objAoProduct);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsCtrl.updateAoProductByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProduct = await aoProductService.updateAoProductByName(name, req.body);
            if (!objAoProduct) {
                util.setError(404, `Cannot find aoProduct with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProduct updated', objAoProduct);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsCtrl.updateAoProductByMaincode = async (req, res) => {
     const { maincode } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProduct = await aoProductService.updateAoProductByMaincode(maincode, req.body);
            if (!objAoProduct) {
                util.setError(404, `Cannot find aoProduct with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProduct updated', objAoProduct);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsCtrl.updateAoProductByPartNumber = async (req, res) => {
     const { partNumber } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProduct = await aoProductService.updateAoProductByPartNumber(partNumber, req.body);
            if (!objAoProduct) {
                util.setError(404, `Cannot find aoProduct with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProduct updated', objAoProduct);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsCtrl.updateAoProductByCategory = async (req, res) => {
     const { category } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProduct = await aoProductService.updateAoProductByCategory(category, req.body);
            if (!objAoProduct) {
                util.setError(404, `Cannot find aoProduct with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProduct updated', objAoProduct);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsCtrl.updateAoProductByType = async (req, res) => {
     const { type } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProduct = await aoProductService.updateAoProductByType(type, req.body);
            if (!objAoProduct) {
                util.setError(404, `Cannot find aoProduct with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProduct updated', objAoProduct);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsCtrl.updateAoProductByUrl = async (req, res) => {
     const { url } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProduct = await aoProductService.updateAoProductByUrl(url, req.body);
            if (!objAoProduct) {
                util.setError(404, `Cannot find aoProduct with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProduct updated', objAoProduct);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsCtrl.updateAoProductByProductImage = async (req, res) => {
     const { productImage } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProduct = await aoProductService.updateAoProductByProductImage(productImage, req.body);
            if (!objAoProduct) {
                util.setError(404, `Cannot find aoProduct with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProduct updated', objAoProduct);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsCtrl.updateAoProductByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProduct = await aoProductService.updateAoProductByDescription(description, req.body);
            if (!objAoProduct) {
                util.setError(404, `Cannot find aoProduct with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProduct updated', objAoProduct);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsCtrl.updateAoProductByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProduct = await aoProductService.updateAoProductByDateEntered(dateEntered, req.body);
            if (!objAoProduct) {
                util.setError(404, `Cannot find aoProduct with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProduct updated', objAoProduct);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsCtrl.updateAoProductByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProduct = await aoProductService.updateAoProductByDateModified(dateModified, req.body);
            if (!objAoProduct) {
                util.setError(404, `Cannot find aoProduct with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProduct updated', objAoProduct);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsCtrl.updateAoProductByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProduct = await aoProductService.updateAoProductByModifiedUserId(modifiedUserId, req.body);
            if (!objAoProduct) {
                util.setError(404, `Cannot find aoProduct with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProduct updated', objAoProduct);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsCtrl.updateAoProductByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProduct = await aoProductService.updateAoProductByCreatedBy(createdBy, req.body);
            if (!objAoProduct) {
                util.setError(404, `Cannot find aoProduct with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProduct updated', objAoProduct);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsCtrl.updateAoProductByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProduct = await aoProductService.updateAoProductByAssignedUserId(assignedUserId, req.body);
            if (!objAoProduct) {
                util.setError(404, `Cannot find aoProduct with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProduct updated', objAoProduct);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsCtrl.updateAoProductByCurrencyId = async (req, res) => {
     const { currencyId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProduct = await aoProductService.updateAoProductByCurrencyId(currencyId, req.body);
            if (!objAoProduct) {
                util.setError(404, `Cannot find aoProduct with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProduct updated', objAoProduct);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsCtrl.updateAoProductByContactId = async (req, res) => {
     const { contactId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProduct = await aoProductService.updateAoProductByContactId(contactId, req.body);
            if (!objAoProduct) {
                util.setError(404, `Cannot find aoProduct with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProduct updated', objAoProduct);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsCtrl.updateAoProductByAosProductCategoryId = async (req, res) => {
     const { aosProductCategoryId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProduct = await aoProductService.updateAoProductByAosProductCategoryId(aosProductCategoryId, req.body);
            if (!objAoProduct) {
                util.setError(404, `Cannot find aoProduct with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProduct updated', objAoProduct);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aosProductsCtrl;
//</es-section>
