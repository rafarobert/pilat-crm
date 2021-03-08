/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:23 GMT-0400 (Bolivia Time)
 * Time: 15:35:23
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:23 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:23
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aoLineItemGroupService = require('../services/aos_line_item_groups.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aosLineItemGroupsCtrl = {};
aosLineItemGroupsCtrl.service = aoLineItemGroupService;


aosLineItemGroupsCtrl.getAllAosLineItemGroups = async (req, res) => {
    try {
        const objAosLineItemGroups = await aoLineItemGroupService.getAllAosLineItemGroups(req.query);
        if (objAosLineItemGroups.length > 0) {
            util.setSuccess(200, 'AosLineItemGroups retrieved', objAosLineItemGroups);
        } else {
            util.setSuccess(200, 'No aoLineItemGroup found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosLineItemGroupsCtrl.getAAoLineItemGroup = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAoLineItemGroup = await aoLineItemGroupService.getAAoLineItemGroup(id, req.query);
        if (!objAoLineItemGroup) {
            util.setError(404, `Cannot find aoLineItemGroup with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aoLineItemGroup', objAoLineItemGroup);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosLineItemGroupsCtrl.addAoLineItemGroup = async (req, res) => {
    try {
        const objAoLineItemGroup = await aoLineItemGroupService.addAoLineItemGroup(req.body);
        util.setSuccess(201, 'AoLineItemGroup Added!', objAoLineItemGroup);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosLineItemGroupsCtrl.updateAoLineItemGroup = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAoLineItemGroup = await aoLineItemGroupService.updateAoLineItemGroup(id, req.body);
        if (!objAoLineItemGroup) {
            util.setError(404, `Cannot find aoLineItemGroup with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AoLineItemGroup updated', objAoLineItemGroup);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aosLineItemGroupsCtrl.deleteAoLineItemGroup = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAoLineItemGroup = await aoLineItemGroupService.deleteAoLineItemGroup(id);
        if (objAoLineItemGroup) {
            util.setSuccess(200, 'AoLineItemGroup deleted', objAoLineItemGroup);
        } else {
            util.setError(404, `AoLineItemGroup with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aosLineItemGroupsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAoLineItemGroup = await aoLineItemGroupService.findOneById(id, req.query);
        if (!objAoLineItemGroup) {
            util.setError(404, `Cannot find aoLineItemGroup with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoLineItemGroup', objAoLineItemGroup);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosLineItemGroupsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAoLineItemGroup = await aoLineItemGroupService.findOneByDeleted(deleted, req.query);
        if (!objAoLineItemGroup) {
            util.setError(404, `Cannot find aoLineItemGroup with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoLineItemGroup', objAoLineItemGroup);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosLineItemGroupsCtrl.findOneByNumber = async (req, res) => {
    try {
        const { number } = req.params;
        const objAoLineItemGroup = await aoLineItemGroupService.findOneByNumber(number, req.query);
        if (!objAoLineItemGroup) {
            util.setError(404, `Cannot find aoLineItemGroup with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoLineItemGroup', objAoLineItemGroup);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosLineItemGroupsCtrl.findOneByTotalAmt = async (req, res) => {
    try {
        const { totalAmt } = req.params;
        const objAoLineItemGroup = await aoLineItemGroupService.findOneByTotalAmt(totalAmt, req.query);
        if (!objAoLineItemGroup) {
            util.setError(404, `Cannot find aoLineItemGroup with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoLineItemGroup', objAoLineItemGroup);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosLineItemGroupsCtrl.findOneByTotalAmtUsdollar = async (req, res) => {
    try {
        const { totalAmtUsdollar } = req.params;
        const objAoLineItemGroup = await aoLineItemGroupService.findOneByTotalAmtUsdollar(totalAmtUsdollar, req.query);
        if (!objAoLineItemGroup) {
            util.setError(404, `Cannot find aoLineItemGroup with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoLineItemGroup', objAoLineItemGroup);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosLineItemGroupsCtrl.findOneByDiscountAmount = async (req, res) => {
    try {
        const { discountAmount } = req.params;
        const objAoLineItemGroup = await aoLineItemGroupService.findOneByDiscountAmount(discountAmount, req.query);
        if (!objAoLineItemGroup) {
            util.setError(404, `Cannot find aoLineItemGroup with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoLineItemGroup', objAoLineItemGroup);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosLineItemGroupsCtrl.findOneByDiscountAmountUsdollar = async (req, res) => {
    try {
        const { discountAmountUsdollar } = req.params;
        const objAoLineItemGroup = await aoLineItemGroupService.findOneByDiscountAmountUsdollar(discountAmountUsdollar, req.query);
        if (!objAoLineItemGroup) {
            util.setError(404, `Cannot find aoLineItemGroup with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoLineItemGroup', objAoLineItemGroup);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosLineItemGroupsCtrl.findOneBySubtotalAmount = async (req, res) => {
    try {
        const { subtotalAmount } = req.params;
        const objAoLineItemGroup = await aoLineItemGroupService.findOneBySubtotalAmount(subtotalAmount, req.query);
        if (!objAoLineItemGroup) {
            util.setError(404, `Cannot find aoLineItemGroup with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoLineItemGroup', objAoLineItemGroup);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosLineItemGroupsCtrl.findOneBySubtotalAmountUsdollar = async (req, res) => {
    try {
        const { subtotalAmountUsdollar } = req.params;
        const objAoLineItemGroup = await aoLineItemGroupService.findOneBySubtotalAmountUsdollar(subtotalAmountUsdollar, req.query);
        if (!objAoLineItemGroup) {
            util.setError(404, `Cannot find aoLineItemGroup with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoLineItemGroup', objAoLineItemGroup);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosLineItemGroupsCtrl.findOneByTaxAmount = async (req, res) => {
    try {
        const { taxAmount } = req.params;
        const objAoLineItemGroup = await aoLineItemGroupService.findOneByTaxAmount(taxAmount, req.query);
        if (!objAoLineItemGroup) {
            util.setError(404, `Cannot find aoLineItemGroup with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoLineItemGroup', objAoLineItemGroup);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosLineItemGroupsCtrl.findOneByTaxAmountUsdollar = async (req, res) => {
    try {
        const { taxAmountUsdollar } = req.params;
        const objAoLineItemGroup = await aoLineItemGroupService.findOneByTaxAmountUsdollar(taxAmountUsdollar, req.query);
        if (!objAoLineItemGroup) {
            util.setError(404, `Cannot find aoLineItemGroup with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoLineItemGroup', objAoLineItemGroup);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosLineItemGroupsCtrl.findOneBySubtotalTaxAmount = async (req, res) => {
    try {
        const { subtotalTaxAmount } = req.params;
        const objAoLineItemGroup = await aoLineItemGroupService.findOneBySubtotalTaxAmount(subtotalTaxAmount, req.query);
        if (!objAoLineItemGroup) {
            util.setError(404, `Cannot find aoLineItemGroup with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoLineItemGroup', objAoLineItemGroup);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosLineItemGroupsCtrl.findOneBySubtotalTaxAmountUsdollar = async (req, res) => {
    try {
        const { subtotalTaxAmountUsdollar } = req.params;
        const objAoLineItemGroup = await aoLineItemGroupService.findOneBySubtotalTaxAmountUsdollar(subtotalTaxAmountUsdollar, req.query);
        if (!objAoLineItemGroup) {
            util.setError(404, `Cannot find aoLineItemGroup with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoLineItemGroup', objAoLineItemGroup);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosLineItemGroupsCtrl.findOneByTotalAmount = async (req, res) => {
    try {
        const { totalAmount } = req.params;
        const objAoLineItemGroup = await aoLineItemGroupService.findOneByTotalAmount(totalAmount, req.query);
        if (!objAoLineItemGroup) {
            util.setError(404, `Cannot find aoLineItemGroup with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoLineItemGroup', objAoLineItemGroup);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosLineItemGroupsCtrl.findOneByTotalAmountUsdollar = async (req, res) => {
    try {
        const { totalAmountUsdollar } = req.params;
        const objAoLineItemGroup = await aoLineItemGroupService.findOneByTotalAmountUsdollar(totalAmountUsdollar, req.query);
        if (!objAoLineItemGroup) {
            util.setError(404, `Cannot find aoLineItemGroup with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoLineItemGroup', objAoLineItemGroup);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosLineItemGroupsCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objAoLineItemGroup = await aoLineItemGroupService.findOneByName(name, req.query);
        if (!objAoLineItemGroup) {
            util.setError(404, `Cannot find aoLineItemGroup with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoLineItemGroup', objAoLineItemGroup);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosLineItemGroupsCtrl.findOneByParentType = async (req, res) => {
    try {
        const { parentType } = req.params;
        const objAoLineItemGroup = await aoLineItemGroupService.findOneByParentType(parentType, req.query);
        if (!objAoLineItemGroup) {
            util.setError(404, `Cannot find aoLineItemGroup with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoLineItemGroup', objAoLineItemGroup);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosLineItemGroupsCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objAoLineItemGroup = await aoLineItemGroupService.findOneByDescription(description, req.query);
        if (!objAoLineItemGroup) {
            util.setError(404, `Cannot find aoLineItemGroup with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoLineItemGroup', objAoLineItemGroup);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosLineItemGroupsCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objAoLineItemGroup = await aoLineItemGroupService.findOneByDateEntered(dateEntered, req.query);
        if (!objAoLineItemGroup) {
            util.setError(404, `Cannot find aoLineItemGroup with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoLineItemGroup', objAoLineItemGroup);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosLineItemGroupsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAoLineItemGroup = await aoLineItemGroupService.findOneByDateModified(dateModified, req.query);
        if (!objAoLineItemGroup) {
            util.setError(404, `Cannot find aoLineItemGroup with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoLineItemGroup', objAoLineItemGroup);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosLineItemGroupsCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objAoLineItemGroup = await aoLineItemGroupService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objAoLineItemGroup) {
            util.setError(404, `Cannot find aoLineItemGroup with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoLineItemGroup', objAoLineItemGroup);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosLineItemGroupsCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAoLineItemGroup = await aoLineItemGroupService.findOneByCreatedBy(createdBy, req.query);
        if (!objAoLineItemGroup) {
            util.setError(404, `Cannot find aoLineItemGroup with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoLineItemGroup', objAoLineItemGroup);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosLineItemGroupsCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objAoLineItemGroup = await aoLineItemGroupService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objAoLineItemGroup) {
            util.setError(404, `Cannot find aoLineItemGroup with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoLineItemGroup', objAoLineItemGroup);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosLineItemGroupsCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objAoLineItemGroup = await aoLineItemGroupService.findOneByParentId(parentId, req.query);
        if (!objAoLineItemGroup) {
            util.setError(404, `Cannot find aoLineItemGroup with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoLineItemGroup', objAoLineItemGroup);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosLineItemGroupsCtrl.findOneByCurrencyId = async (req, res) => {
    try {
        const { currencyId } = req.params;
        const objAoLineItemGroup = await aoLineItemGroupService.findOneByCurrencyId(currencyId, req.query);
        if (!objAoLineItemGroup) {
            util.setError(404, `Cannot find aoLineItemGroup with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoLineItemGroup', objAoLineItemGroup);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aosLineItemGroupsCtrl.updateAoLineItemGroupById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoLineItemGroup = await aoLineItemGroupService.updateAoLineItemGroupById(id, req.body);
            if (!objAoLineItemGroup) {
                util.setError(404, `Cannot find aoLineItemGroup with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoLineItemGroup updated', objAoLineItemGroup);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosLineItemGroupsCtrl.updateAoLineItemGroupByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoLineItemGroup = await aoLineItemGroupService.updateAoLineItemGroupByDeleted(deleted, req.body);
            if (!objAoLineItemGroup) {
                util.setError(404, `Cannot find aoLineItemGroup with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoLineItemGroup updated', objAoLineItemGroup);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosLineItemGroupsCtrl.updateAoLineItemGroupByNumber = async (req, res) => {
     const { number } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoLineItemGroup = await aoLineItemGroupService.updateAoLineItemGroupByNumber(number, req.body);
            if (!objAoLineItemGroup) {
                util.setError(404, `Cannot find aoLineItemGroup with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoLineItemGroup updated', objAoLineItemGroup);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosLineItemGroupsCtrl.updateAoLineItemGroupByTotalAmt = async (req, res) => {
     const { totalAmt } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoLineItemGroup = await aoLineItemGroupService.updateAoLineItemGroupByTotalAmt(totalAmt, req.body);
            if (!objAoLineItemGroup) {
                util.setError(404, `Cannot find aoLineItemGroup with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoLineItemGroup updated', objAoLineItemGroup);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosLineItemGroupsCtrl.updateAoLineItemGroupByTotalAmtUsdollar = async (req, res) => {
     const { totalAmtUsdollar } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoLineItemGroup = await aoLineItemGroupService.updateAoLineItemGroupByTotalAmtUsdollar(totalAmtUsdollar, req.body);
            if (!objAoLineItemGroup) {
                util.setError(404, `Cannot find aoLineItemGroup with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoLineItemGroup updated', objAoLineItemGroup);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosLineItemGroupsCtrl.updateAoLineItemGroupByDiscountAmount = async (req, res) => {
     const { discountAmount } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoLineItemGroup = await aoLineItemGroupService.updateAoLineItemGroupByDiscountAmount(discountAmount, req.body);
            if (!objAoLineItemGroup) {
                util.setError(404, `Cannot find aoLineItemGroup with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoLineItemGroup updated', objAoLineItemGroup);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosLineItemGroupsCtrl.updateAoLineItemGroupByDiscountAmountUsdollar = async (req, res) => {
     const { discountAmountUsdollar } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoLineItemGroup = await aoLineItemGroupService.updateAoLineItemGroupByDiscountAmountUsdollar(discountAmountUsdollar, req.body);
            if (!objAoLineItemGroup) {
                util.setError(404, `Cannot find aoLineItemGroup with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoLineItemGroup updated', objAoLineItemGroup);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosLineItemGroupsCtrl.updateAoLineItemGroupBySubtotalAmount = async (req, res) => {
     const { subtotalAmount } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoLineItemGroup = await aoLineItemGroupService.updateAoLineItemGroupBySubtotalAmount(subtotalAmount, req.body);
            if (!objAoLineItemGroup) {
                util.setError(404, `Cannot find aoLineItemGroup with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoLineItemGroup updated', objAoLineItemGroup);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosLineItemGroupsCtrl.updateAoLineItemGroupBySubtotalAmountUsdollar = async (req, res) => {
     const { subtotalAmountUsdollar } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoLineItemGroup = await aoLineItemGroupService.updateAoLineItemGroupBySubtotalAmountUsdollar(subtotalAmountUsdollar, req.body);
            if (!objAoLineItemGroup) {
                util.setError(404, `Cannot find aoLineItemGroup with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoLineItemGroup updated', objAoLineItemGroup);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosLineItemGroupsCtrl.updateAoLineItemGroupByTaxAmount = async (req, res) => {
     const { taxAmount } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoLineItemGroup = await aoLineItemGroupService.updateAoLineItemGroupByTaxAmount(taxAmount, req.body);
            if (!objAoLineItemGroup) {
                util.setError(404, `Cannot find aoLineItemGroup with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoLineItemGroup updated', objAoLineItemGroup);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosLineItemGroupsCtrl.updateAoLineItemGroupByTaxAmountUsdollar = async (req, res) => {
     const { taxAmountUsdollar } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoLineItemGroup = await aoLineItemGroupService.updateAoLineItemGroupByTaxAmountUsdollar(taxAmountUsdollar, req.body);
            if (!objAoLineItemGroup) {
                util.setError(404, `Cannot find aoLineItemGroup with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoLineItemGroup updated', objAoLineItemGroup);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosLineItemGroupsCtrl.updateAoLineItemGroupBySubtotalTaxAmount = async (req, res) => {
     const { subtotalTaxAmount } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoLineItemGroup = await aoLineItemGroupService.updateAoLineItemGroupBySubtotalTaxAmount(subtotalTaxAmount, req.body);
            if (!objAoLineItemGroup) {
                util.setError(404, `Cannot find aoLineItemGroup with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoLineItemGroup updated', objAoLineItemGroup);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosLineItemGroupsCtrl.updateAoLineItemGroupBySubtotalTaxAmountUsdollar = async (req, res) => {
     const { subtotalTaxAmountUsdollar } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoLineItemGroup = await aoLineItemGroupService.updateAoLineItemGroupBySubtotalTaxAmountUsdollar(subtotalTaxAmountUsdollar, req.body);
            if (!objAoLineItemGroup) {
                util.setError(404, `Cannot find aoLineItemGroup with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoLineItemGroup updated', objAoLineItemGroup);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosLineItemGroupsCtrl.updateAoLineItemGroupByTotalAmount = async (req, res) => {
     const { totalAmount } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoLineItemGroup = await aoLineItemGroupService.updateAoLineItemGroupByTotalAmount(totalAmount, req.body);
            if (!objAoLineItemGroup) {
                util.setError(404, `Cannot find aoLineItemGroup with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoLineItemGroup updated', objAoLineItemGroup);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosLineItemGroupsCtrl.updateAoLineItemGroupByTotalAmountUsdollar = async (req, res) => {
     const { totalAmountUsdollar } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoLineItemGroup = await aoLineItemGroupService.updateAoLineItemGroupByTotalAmountUsdollar(totalAmountUsdollar, req.body);
            if (!objAoLineItemGroup) {
                util.setError(404, `Cannot find aoLineItemGroup with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoLineItemGroup updated', objAoLineItemGroup);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosLineItemGroupsCtrl.updateAoLineItemGroupByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoLineItemGroup = await aoLineItemGroupService.updateAoLineItemGroupByName(name, req.body);
            if (!objAoLineItemGroup) {
                util.setError(404, `Cannot find aoLineItemGroup with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoLineItemGroup updated', objAoLineItemGroup);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosLineItemGroupsCtrl.updateAoLineItemGroupByParentType = async (req, res) => {
     const { parentType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoLineItemGroup = await aoLineItemGroupService.updateAoLineItemGroupByParentType(parentType, req.body);
            if (!objAoLineItemGroup) {
                util.setError(404, `Cannot find aoLineItemGroup with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoLineItemGroup updated', objAoLineItemGroup);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosLineItemGroupsCtrl.updateAoLineItemGroupByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoLineItemGroup = await aoLineItemGroupService.updateAoLineItemGroupByDescription(description, req.body);
            if (!objAoLineItemGroup) {
                util.setError(404, `Cannot find aoLineItemGroup with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoLineItemGroup updated', objAoLineItemGroup);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosLineItemGroupsCtrl.updateAoLineItemGroupByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoLineItemGroup = await aoLineItemGroupService.updateAoLineItemGroupByDateEntered(dateEntered, req.body);
            if (!objAoLineItemGroup) {
                util.setError(404, `Cannot find aoLineItemGroup with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoLineItemGroup updated', objAoLineItemGroup);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosLineItemGroupsCtrl.updateAoLineItemGroupByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoLineItemGroup = await aoLineItemGroupService.updateAoLineItemGroupByDateModified(dateModified, req.body);
            if (!objAoLineItemGroup) {
                util.setError(404, `Cannot find aoLineItemGroup with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoLineItemGroup updated', objAoLineItemGroup);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosLineItemGroupsCtrl.updateAoLineItemGroupByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoLineItemGroup = await aoLineItemGroupService.updateAoLineItemGroupByModifiedUserId(modifiedUserId, req.body);
            if (!objAoLineItemGroup) {
                util.setError(404, `Cannot find aoLineItemGroup with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoLineItemGroup updated', objAoLineItemGroup);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosLineItemGroupsCtrl.updateAoLineItemGroupByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoLineItemGroup = await aoLineItemGroupService.updateAoLineItemGroupByCreatedBy(createdBy, req.body);
            if (!objAoLineItemGroup) {
                util.setError(404, `Cannot find aoLineItemGroup with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoLineItemGroup updated', objAoLineItemGroup);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosLineItemGroupsCtrl.updateAoLineItemGroupByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoLineItemGroup = await aoLineItemGroupService.updateAoLineItemGroupByAssignedUserId(assignedUserId, req.body);
            if (!objAoLineItemGroup) {
                util.setError(404, `Cannot find aoLineItemGroup with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoLineItemGroup updated', objAoLineItemGroup);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosLineItemGroupsCtrl.updateAoLineItemGroupByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoLineItemGroup = await aoLineItemGroupService.updateAoLineItemGroupByParentId(parentId, req.body);
            if (!objAoLineItemGroup) {
                util.setError(404, `Cannot find aoLineItemGroup with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoLineItemGroup updated', objAoLineItemGroup);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosLineItemGroupsCtrl.updateAoLineItemGroupByCurrencyId = async (req, res) => {
     const { currencyId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoLineItemGroup = await aoLineItemGroupService.updateAoLineItemGroupByCurrencyId(currencyId, req.body);
            if (!objAoLineItemGroup) {
                util.setError(404, `Cannot find aoLineItemGroup with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoLineItemGroup updated', objAoLineItemGroup);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aosLineItemGroupsCtrl;
//</es-section>
