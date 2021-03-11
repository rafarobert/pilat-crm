/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:16 GMT-0400 (Bolivia Time)
 * Time: 14:56:16
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:16 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:16
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const aoProductQuoteService = require('../services/aos_products_quotes.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aosProductsQuotesCtrl = {};
aosProductsQuotesCtrl.service = aoProductQuoteService;


aosProductsQuotesCtrl.getAllAosProductsQuotes = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.aosProductsQuotes.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objAosProductsQuotes = await aoProductQuoteService.getAllAosProductsQuotes(req.query);
        if (objAosProductsQuotes && objAosProductsQuotes.rows && objAosProductsQuotes.count) {
            util.setSuccess(200, 'AosProductsQuotes retrieved', objAosProductsQuotes.rows, objAosProductsQuotes.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No aoProductQuote found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesCtrl.getAAoProductQuote = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAoProductQuote = await aoProductQuoteService.getAAoProductQuote(id, req.query);
        if (!objAoProductQuote) {
            util.setError(404, `Cannot find aoProductQuote with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuote', objAoProductQuote);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesCtrl.addAoProductQuote = async (req, res) => {
    try {
        const objAoProductQuote = await aoProductQuoteService.addAoProductQuote(req.body);
        util.setSuccess(201, 'AoProductQuote Added!', objAoProductQuote);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesCtrl.updateAoProductQuote = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAoProductQuote = await aoProductQuoteService.updateAoProductQuote(id, req.body);
        if (!objAoProductQuote) {
            util.setError(404, `Cannot find aoProductQuote with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AoProductQuote updated', objAoProductQuote);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aosProductsQuotesCtrl.deleteAoProductQuote = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAoProductQuote = await aoProductQuoteService.deleteAoProductQuote(id);
        if (objAoProductQuote) {
            util.setSuccess(200, 'AoProductQuote deleted', objAoProductQuote);
        } else {
            util.setError(404, `AoProductQuote with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aosProductsQuotesCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAoProductQuote = await aoProductQuoteService.findOneById(id, req.query);
        if (!objAoProductQuote) {
            util.setError(404, `Cannot find aoProductQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuote', objAoProductQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAoProductQuote = await aoProductQuoteService.findOneByDeleted(deleted, req.query);
        if (!objAoProductQuote) {
            util.setError(404, `Cannot find aoProductQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuote', objAoProductQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesCtrl.findOneByNumber = async (req, res) => {
    try {
        const { number } = req.params;
        const objAoProductQuote = await aoProductQuoteService.findOneByNumber(number, req.query);
        if (!objAoProductQuote) {
            util.setError(404, `Cannot find aoProductQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuote', objAoProductQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesCtrl.findOneByProductQty = async (req, res) => {
    try {
        const { productQty } = req.params;
        const objAoProductQuote = await aoProductQuoteService.findOneByProductQty(productQty, req.query);
        if (!objAoProductQuote) {
            util.setError(404, `Cannot find aoProductQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuote', objAoProductQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesCtrl.findOneByProductCostPrice = async (req, res) => {
    try {
        const { productCostPrice } = req.params;
        const objAoProductQuote = await aoProductQuoteService.findOneByProductCostPrice(productCostPrice, req.query);
        if (!objAoProductQuote) {
            util.setError(404, `Cannot find aoProductQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuote', objAoProductQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesCtrl.findOneByProductCostPriceUsdollar = async (req, res) => {
    try {
        const { productCostPriceUsdollar } = req.params;
        const objAoProductQuote = await aoProductQuoteService.findOneByProductCostPriceUsdollar(productCostPriceUsdollar, req.query);
        if (!objAoProductQuote) {
            util.setError(404, `Cannot find aoProductQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuote', objAoProductQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesCtrl.findOneByProductListPrice = async (req, res) => {
    try {
        const { productListPrice } = req.params;
        const objAoProductQuote = await aoProductQuoteService.findOneByProductListPrice(productListPrice, req.query);
        if (!objAoProductQuote) {
            util.setError(404, `Cannot find aoProductQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuote', objAoProductQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesCtrl.findOneByProductListPriceUsdollar = async (req, res) => {
    try {
        const { productListPriceUsdollar } = req.params;
        const objAoProductQuote = await aoProductQuoteService.findOneByProductListPriceUsdollar(productListPriceUsdollar, req.query);
        if (!objAoProductQuote) {
            util.setError(404, `Cannot find aoProductQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuote', objAoProductQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesCtrl.findOneByProductDiscount = async (req, res) => {
    try {
        const { productDiscount } = req.params;
        const objAoProductQuote = await aoProductQuoteService.findOneByProductDiscount(productDiscount, req.query);
        if (!objAoProductQuote) {
            util.setError(404, `Cannot find aoProductQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuote', objAoProductQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesCtrl.findOneByProductDiscountUsdollar = async (req, res) => {
    try {
        const { productDiscountUsdollar } = req.params;
        const objAoProductQuote = await aoProductQuoteService.findOneByProductDiscountUsdollar(productDiscountUsdollar, req.query);
        if (!objAoProductQuote) {
            util.setError(404, `Cannot find aoProductQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuote', objAoProductQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesCtrl.findOneByProductDiscountAmount = async (req, res) => {
    try {
        const { productDiscountAmount } = req.params;
        const objAoProductQuote = await aoProductQuoteService.findOneByProductDiscountAmount(productDiscountAmount, req.query);
        if (!objAoProductQuote) {
            util.setError(404, `Cannot find aoProductQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuote', objAoProductQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesCtrl.findOneByProductDiscountAmountUsdollar = async (req, res) => {
    try {
        const { productDiscountAmountUsdollar } = req.params;
        const objAoProductQuote = await aoProductQuoteService.findOneByProductDiscountAmountUsdollar(productDiscountAmountUsdollar, req.query);
        if (!objAoProductQuote) {
            util.setError(404, `Cannot find aoProductQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuote', objAoProductQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesCtrl.findOneByProductUnitPrice = async (req, res) => {
    try {
        const { productUnitPrice } = req.params;
        const objAoProductQuote = await aoProductQuoteService.findOneByProductUnitPrice(productUnitPrice, req.query);
        if (!objAoProductQuote) {
            util.setError(404, `Cannot find aoProductQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuote', objAoProductQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesCtrl.findOneByProductUnitPriceUsdollar = async (req, res) => {
    try {
        const { productUnitPriceUsdollar } = req.params;
        const objAoProductQuote = await aoProductQuoteService.findOneByProductUnitPriceUsdollar(productUnitPriceUsdollar, req.query);
        if (!objAoProductQuote) {
            util.setError(404, `Cannot find aoProductQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuote', objAoProductQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesCtrl.findOneByVatAmt = async (req, res) => {
    try {
        const { vatAmt } = req.params;
        const objAoProductQuote = await aoProductQuoteService.findOneByVatAmt(vatAmt, req.query);
        if (!objAoProductQuote) {
            util.setError(404, `Cannot find aoProductQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuote', objAoProductQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesCtrl.findOneByVatAmtUsdollar = async (req, res) => {
    try {
        const { vatAmtUsdollar } = req.params;
        const objAoProductQuote = await aoProductQuoteService.findOneByVatAmtUsdollar(vatAmtUsdollar, req.query);
        if (!objAoProductQuote) {
            util.setError(404, `Cannot find aoProductQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuote', objAoProductQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesCtrl.findOneByProductTotalPrice = async (req, res) => {
    try {
        const { productTotalPrice } = req.params;
        const objAoProductQuote = await aoProductQuoteService.findOneByProductTotalPrice(productTotalPrice, req.query);
        if (!objAoProductQuote) {
            util.setError(404, `Cannot find aoProductQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuote', objAoProductQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesCtrl.findOneByProductTotalPriceUsdollar = async (req, res) => {
    try {
        const { productTotalPriceUsdollar } = req.params;
        const objAoProductQuote = await aoProductQuoteService.findOneByProductTotalPriceUsdollar(productTotalPriceUsdollar, req.query);
        if (!objAoProductQuote) {
            util.setError(404, `Cannot find aoProductQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuote', objAoProductQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesCtrl.findOneByPartNumber = async (req, res) => {
    try {
        const { partNumber } = req.params;
        const objAoProductQuote = await aoProductQuoteService.findOneByPartNumber(partNumber, req.query);
        if (!objAoProductQuote) {
            util.setError(404, `Cannot find aoProductQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuote', objAoProductQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesCtrl.findOneByDiscount = async (req, res) => {
    try {
        const { discount } = req.params;
        const objAoProductQuote = await aoProductQuoteService.findOneByDiscount(discount, req.query);
        if (!objAoProductQuote) {
            util.setError(404, `Cannot find aoProductQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuote', objAoProductQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesCtrl.findOneByVat = async (req, res) => {
    try {
        const { vat } = req.params;
        const objAoProductQuote = await aoProductQuoteService.findOneByVat(vat, req.query);
        if (!objAoProductQuote) {
            util.setError(404, `Cannot find aoProductQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuote', objAoProductQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesCtrl.findOneByParentType = async (req, res) => {
    try {
        const { parentType } = req.params;
        const objAoProductQuote = await aoProductQuoteService.findOneByParentType(parentType, req.query);
        if (!objAoProductQuote) {
            util.setError(404, `Cannot find aoProductQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuote', objAoProductQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objAoProductQuote = await aoProductQuoteService.findOneByName(name, req.query);
        if (!objAoProductQuote) {
            util.setError(404, `Cannot find aoProductQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuote', objAoProductQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objAoProductQuote = await aoProductQuoteService.findOneByDescription(description, req.query);
        if (!objAoProductQuote) {
            util.setError(404, `Cannot find aoProductQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuote', objAoProductQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesCtrl.findOneByItemDescription = async (req, res) => {
    try {
        const { itemDescription } = req.params;
        const objAoProductQuote = await aoProductQuoteService.findOneByItemDescription(itemDescription, req.query);
        if (!objAoProductQuote) {
            util.setError(404, `Cannot find aoProductQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuote', objAoProductQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objAoProductQuote = await aoProductQuoteService.findOneByDateEntered(dateEntered, req.query);
        if (!objAoProductQuote) {
            util.setError(404, `Cannot find aoProductQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuote', objAoProductQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAoProductQuote = await aoProductQuoteService.findOneByDateModified(dateModified, req.query);
        if (!objAoProductQuote) {
            util.setError(404, `Cannot find aoProductQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuote', objAoProductQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objAoProductQuote = await aoProductQuoteService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objAoProductQuote) {
            util.setError(404, `Cannot find aoProductQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuote', objAoProductQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAoProductQuote = await aoProductQuoteService.findOneByCreatedBy(createdBy, req.query);
        if (!objAoProductQuote) {
            util.setError(404, `Cannot find aoProductQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuote', objAoProductQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objAoProductQuote = await aoProductQuoteService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objAoProductQuote) {
            util.setError(404, `Cannot find aoProductQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuote', objAoProductQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesCtrl.findOneByCurrencyId = async (req, res) => {
    try {
        const { currencyId } = req.params;
        const objAoProductQuote = await aoProductQuoteService.findOneByCurrencyId(currencyId, req.query);
        if (!objAoProductQuote) {
            util.setError(404, `Cannot find aoProductQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuote', objAoProductQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objAoProductQuote = await aoProductQuoteService.findOneByParentId(parentId, req.query);
        if (!objAoProductQuote) {
            util.setError(404, `Cannot find aoProductQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuote', objAoProductQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesCtrl.findOneByProductId = async (req, res) => {
    try {
        const { productId } = req.params;
        const objAoProductQuote = await aoProductQuoteService.findOneByProductId(productId, req.query);
        if (!objAoProductQuote) {
            util.setError(404, `Cannot find aoProductQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuote', objAoProductQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesCtrl.findOneByGroupId = async (req, res) => {
    try {
        const { groupId } = req.params;
        const objAoProductQuote = await aoProductQuoteService.findOneByGroupId(groupId, req.query);
        if (!objAoProductQuote) {
            util.setError(404, `Cannot find aoProductQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuote', objAoProductQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aosProductsQuotesCtrl.updateAoProductQuoteById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuote = await aoProductQuoteService.updateAoProductQuoteById(id, req.body);
            if (!objAoProductQuote) {
                util.setError(404, `Cannot find aoProductQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuote updated', objAoProductQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesCtrl.updateAoProductQuoteByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuote = await aoProductQuoteService.updateAoProductQuoteByDeleted(deleted, req.body);
            if (!objAoProductQuote) {
                util.setError(404, `Cannot find aoProductQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuote updated', objAoProductQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesCtrl.updateAoProductQuoteByNumber = async (req, res) => {
     const { number } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuote = await aoProductQuoteService.updateAoProductQuoteByNumber(number, req.body);
            if (!objAoProductQuote) {
                util.setError(404, `Cannot find aoProductQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuote updated', objAoProductQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesCtrl.updateAoProductQuoteByProductQty = async (req, res) => {
     const { productQty } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuote = await aoProductQuoteService.updateAoProductQuoteByProductQty(productQty, req.body);
            if (!objAoProductQuote) {
                util.setError(404, `Cannot find aoProductQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuote updated', objAoProductQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesCtrl.updateAoProductQuoteByProductCostPrice = async (req, res) => {
     const { productCostPrice } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuote = await aoProductQuoteService.updateAoProductQuoteByProductCostPrice(productCostPrice, req.body);
            if (!objAoProductQuote) {
                util.setError(404, `Cannot find aoProductQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuote updated', objAoProductQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesCtrl.updateAoProductQuoteByProductCostPriceUsdollar = async (req, res) => {
     const { productCostPriceUsdollar } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuote = await aoProductQuoteService.updateAoProductQuoteByProductCostPriceUsdollar(productCostPriceUsdollar, req.body);
            if (!objAoProductQuote) {
                util.setError(404, `Cannot find aoProductQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuote updated', objAoProductQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesCtrl.updateAoProductQuoteByProductListPrice = async (req, res) => {
     const { productListPrice } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuote = await aoProductQuoteService.updateAoProductQuoteByProductListPrice(productListPrice, req.body);
            if (!objAoProductQuote) {
                util.setError(404, `Cannot find aoProductQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuote updated', objAoProductQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesCtrl.updateAoProductQuoteByProductListPriceUsdollar = async (req, res) => {
     const { productListPriceUsdollar } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuote = await aoProductQuoteService.updateAoProductQuoteByProductListPriceUsdollar(productListPriceUsdollar, req.body);
            if (!objAoProductQuote) {
                util.setError(404, `Cannot find aoProductQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuote updated', objAoProductQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesCtrl.updateAoProductQuoteByProductDiscount = async (req, res) => {
     const { productDiscount } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuote = await aoProductQuoteService.updateAoProductQuoteByProductDiscount(productDiscount, req.body);
            if (!objAoProductQuote) {
                util.setError(404, `Cannot find aoProductQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuote updated', objAoProductQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesCtrl.updateAoProductQuoteByProductDiscountUsdollar = async (req, res) => {
     const { productDiscountUsdollar } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuote = await aoProductQuoteService.updateAoProductQuoteByProductDiscountUsdollar(productDiscountUsdollar, req.body);
            if (!objAoProductQuote) {
                util.setError(404, `Cannot find aoProductQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuote updated', objAoProductQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesCtrl.updateAoProductQuoteByProductDiscountAmount = async (req, res) => {
     const { productDiscountAmount } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuote = await aoProductQuoteService.updateAoProductQuoteByProductDiscountAmount(productDiscountAmount, req.body);
            if (!objAoProductQuote) {
                util.setError(404, `Cannot find aoProductQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuote updated', objAoProductQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesCtrl.updateAoProductQuoteByProductDiscountAmountUsdollar = async (req, res) => {
     const { productDiscountAmountUsdollar } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuote = await aoProductQuoteService.updateAoProductQuoteByProductDiscountAmountUsdollar(productDiscountAmountUsdollar, req.body);
            if (!objAoProductQuote) {
                util.setError(404, `Cannot find aoProductQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuote updated', objAoProductQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesCtrl.updateAoProductQuoteByProductUnitPrice = async (req, res) => {
     const { productUnitPrice } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuote = await aoProductQuoteService.updateAoProductQuoteByProductUnitPrice(productUnitPrice, req.body);
            if (!objAoProductQuote) {
                util.setError(404, `Cannot find aoProductQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuote updated', objAoProductQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesCtrl.updateAoProductQuoteByProductUnitPriceUsdollar = async (req, res) => {
     const { productUnitPriceUsdollar } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuote = await aoProductQuoteService.updateAoProductQuoteByProductUnitPriceUsdollar(productUnitPriceUsdollar, req.body);
            if (!objAoProductQuote) {
                util.setError(404, `Cannot find aoProductQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuote updated', objAoProductQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesCtrl.updateAoProductQuoteByVatAmt = async (req, res) => {
     const { vatAmt } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuote = await aoProductQuoteService.updateAoProductQuoteByVatAmt(vatAmt, req.body);
            if (!objAoProductQuote) {
                util.setError(404, `Cannot find aoProductQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuote updated', objAoProductQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesCtrl.updateAoProductQuoteByVatAmtUsdollar = async (req, res) => {
     const { vatAmtUsdollar } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuote = await aoProductQuoteService.updateAoProductQuoteByVatAmtUsdollar(vatAmtUsdollar, req.body);
            if (!objAoProductQuote) {
                util.setError(404, `Cannot find aoProductQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuote updated', objAoProductQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesCtrl.updateAoProductQuoteByProductTotalPrice = async (req, res) => {
     const { productTotalPrice } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuote = await aoProductQuoteService.updateAoProductQuoteByProductTotalPrice(productTotalPrice, req.body);
            if (!objAoProductQuote) {
                util.setError(404, `Cannot find aoProductQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuote updated', objAoProductQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesCtrl.updateAoProductQuoteByProductTotalPriceUsdollar = async (req, res) => {
     const { productTotalPriceUsdollar } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuote = await aoProductQuoteService.updateAoProductQuoteByProductTotalPriceUsdollar(productTotalPriceUsdollar, req.body);
            if (!objAoProductQuote) {
                util.setError(404, `Cannot find aoProductQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuote updated', objAoProductQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesCtrl.updateAoProductQuoteByPartNumber = async (req, res) => {
     const { partNumber } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuote = await aoProductQuoteService.updateAoProductQuoteByPartNumber(partNumber, req.body);
            if (!objAoProductQuote) {
                util.setError(404, `Cannot find aoProductQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuote updated', objAoProductQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesCtrl.updateAoProductQuoteByDiscount = async (req, res) => {
     const { discount } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuote = await aoProductQuoteService.updateAoProductQuoteByDiscount(discount, req.body);
            if (!objAoProductQuote) {
                util.setError(404, `Cannot find aoProductQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuote updated', objAoProductQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesCtrl.updateAoProductQuoteByVat = async (req, res) => {
     const { vat } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuote = await aoProductQuoteService.updateAoProductQuoteByVat(vat, req.body);
            if (!objAoProductQuote) {
                util.setError(404, `Cannot find aoProductQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuote updated', objAoProductQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesCtrl.updateAoProductQuoteByParentType = async (req, res) => {
     const { parentType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuote = await aoProductQuoteService.updateAoProductQuoteByParentType(parentType, req.body);
            if (!objAoProductQuote) {
                util.setError(404, `Cannot find aoProductQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuote updated', objAoProductQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesCtrl.updateAoProductQuoteByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuote = await aoProductQuoteService.updateAoProductQuoteByName(name, req.body);
            if (!objAoProductQuote) {
                util.setError(404, `Cannot find aoProductQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuote updated', objAoProductQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesCtrl.updateAoProductQuoteByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuote = await aoProductQuoteService.updateAoProductQuoteByDescription(description, req.body);
            if (!objAoProductQuote) {
                util.setError(404, `Cannot find aoProductQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuote updated', objAoProductQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesCtrl.updateAoProductQuoteByItemDescription = async (req, res) => {
     const { itemDescription } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuote = await aoProductQuoteService.updateAoProductQuoteByItemDescription(itemDescription, req.body);
            if (!objAoProductQuote) {
                util.setError(404, `Cannot find aoProductQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuote updated', objAoProductQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesCtrl.updateAoProductQuoteByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuote = await aoProductQuoteService.updateAoProductQuoteByDateEntered(dateEntered, req.body);
            if (!objAoProductQuote) {
                util.setError(404, `Cannot find aoProductQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuote updated', objAoProductQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesCtrl.updateAoProductQuoteByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuote = await aoProductQuoteService.updateAoProductQuoteByDateModified(dateModified, req.body);
            if (!objAoProductQuote) {
                util.setError(404, `Cannot find aoProductQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuote updated', objAoProductQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesCtrl.updateAoProductQuoteByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuote = await aoProductQuoteService.updateAoProductQuoteByModifiedUserId(modifiedUserId, req.body);
            if (!objAoProductQuote) {
                util.setError(404, `Cannot find aoProductQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuote updated', objAoProductQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesCtrl.updateAoProductQuoteByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuote = await aoProductQuoteService.updateAoProductQuoteByCreatedBy(createdBy, req.body);
            if (!objAoProductQuote) {
                util.setError(404, `Cannot find aoProductQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuote updated', objAoProductQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesCtrl.updateAoProductQuoteByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuote = await aoProductQuoteService.updateAoProductQuoteByAssignedUserId(assignedUserId, req.body);
            if (!objAoProductQuote) {
                util.setError(404, `Cannot find aoProductQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuote updated', objAoProductQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesCtrl.updateAoProductQuoteByCurrencyId = async (req, res) => {
     const { currencyId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuote = await aoProductQuoteService.updateAoProductQuoteByCurrencyId(currencyId, req.body);
            if (!objAoProductQuote) {
                util.setError(404, `Cannot find aoProductQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuote updated', objAoProductQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesCtrl.updateAoProductQuoteByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuote = await aoProductQuoteService.updateAoProductQuoteByParentId(parentId, req.body);
            if (!objAoProductQuote) {
                util.setError(404, `Cannot find aoProductQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuote updated', objAoProductQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesCtrl.updateAoProductQuoteByProductId = async (req, res) => {
     const { productId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuote = await aoProductQuoteService.updateAoProductQuoteByProductId(productId, req.body);
            if (!objAoProductQuote) {
                util.setError(404, `Cannot find aoProductQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuote updated', objAoProductQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesCtrl.updateAoProductQuoteByGroupId = async (req, res) => {
     const { groupId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuote = await aoProductQuoteService.updateAoProductQuoteByGroupId(groupId, req.body);
            if (!objAoProductQuote) {
                util.setError(404, `Cannot find aoProductQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuote updated', objAoProductQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aosProductsQuotesCtrl;
//</es-section>
