/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:54 GMT-0400 (Bolivia Time)
 * Time: 15:36:54
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:54 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:54
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const relationshipService = require('../services/relationships.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const relationshipsCtrl = {};
relationshipsCtrl.service = relationshipService;


relationshipsCtrl.getAllRelationships = async (req, res) => {
    try {
        const objRelationships = await relationshipService.getAllRelationships(req.query);
        if (objRelationships.length > 0) {
            util.setSuccess(200, 'Relationships retrieved', objRelationships);
        } else {
            util.setSuccess(200, 'No relationship found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

relationshipsCtrl.getARelationship = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objRelationship = await relationshipService.getARelationship(id, req.query);
        if (!objRelationship) {
            util.setError(404, `Cannot find relationship with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found relationship', objRelationship);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

relationshipsCtrl.addRelationship = async (req, res) => {
    try {
        const objRelationship = await relationshipService.addRelationship(req.body);
        util.setSuccess(201, 'Relationship Added!', objRelationship);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

relationshipsCtrl.updateRelationship = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objRelationship = await relationshipService.updateRelationship(id, req.body);
        if (!objRelationship) {
            util.setError(404, `Cannot find relationship with the id: ${id}`);
        } else {
            util.setSuccess(200, 'Relationship updated', objRelationship);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

relationshipsCtrl.deleteRelationship = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objRelationship = await relationshipService.deleteRelationship(id);
        if (objRelationship) {
            util.setSuccess(200, 'Relationship deleted', objRelationship);
        } else {
            util.setError(404, `Relationship with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



relationshipsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objRelationship = await relationshipService.findOneById(id, req.query);
        if (!objRelationship) {
            util.setError(404, `Cannot find relationship with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found relationship', objRelationship);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

relationshipsCtrl.findOneByReverse = async (req, res) => {
    try {
        const { reverse } = req.params;
        const objRelationship = await relationshipService.findOneByReverse(reverse, req.query);
        if (!objRelationship) {
            util.setError(404, `Cannot find relationship with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found relationship', objRelationship);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

relationshipsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objRelationship = await relationshipService.findOneByDeleted(deleted, req.query);
        if (!objRelationship) {
            util.setError(404, `Cannot find relationship with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found relationship', objRelationship);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

relationshipsCtrl.findOneByRelationshipName = async (req, res) => {
    try {
        const { relationshipName } = req.params;
        const objRelationship = await relationshipService.findOneByRelationshipName(relationshipName, req.query);
        if (!objRelationship) {
            util.setError(404, `Cannot find relationship with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found relationship', objRelationship);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

relationshipsCtrl.findOneByLhsModule = async (req, res) => {
    try {
        const { lhsModule } = req.params;
        const objRelationship = await relationshipService.findOneByLhsModule(lhsModule, req.query);
        if (!objRelationship) {
            util.setError(404, `Cannot find relationship with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found relationship', objRelationship);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

relationshipsCtrl.findOneByLhsTable = async (req, res) => {
    try {
        const { lhsTable } = req.params;
        const objRelationship = await relationshipService.findOneByLhsTable(lhsTable, req.query);
        if (!objRelationship) {
            util.setError(404, `Cannot find relationship with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found relationship', objRelationship);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

relationshipsCtrl.findOneByLhsKey = async (req, res) => {
    try {
        const { lhsKey } = req.params;
        const objRelationship = await relationshipService.findOneByLhsKey(lhsKey, req.query);
        if (!objRelationship) {
            util.setError(404, `Cannot find relationship with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found relationship', objRelationship);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

relationshipsCtrl.findOneByRhsModule = async (req, res) => {
    try {
        const { rhsModule } = req.params;
        const objRelationship = await relationshipService.findOneByRhsModule(rhsModule, req.query);
        if (!objRelationship) {
            util.setError(404, `Cannot find relationship with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found relationship', objRelationship);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

relationshipsCtrl.findOneByRhsTable = async (req, res) => {
    try {
        const { rhsTable } = req.params;
        const objRelationship = await relationshipService.findOneByRhsTable(rhsTable, req.query);
        if (!objRelationship) {
            util.setError(404, `Cannot find relationship with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found relationship', objRelationship);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

relationshipsCtrl.findOneByRhsKey = async (req, res) => {
    try {
        const { rhsKey } = req.params;
        const objRelationship = await relationshipService.findOneByRhsKey(rhsKey, req.query);
        if (!objRelationship) {
            util.setError(404, `Cannot find relationship with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found relationship', objRelationship);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

relationshipsCtrl.findOneByJoinTable = async (req, res) => {
    try {
        const { joinTable } = req.params;
        const objRelationship = await relationshipService.findOneByJoinTable(joinTable, req.query);
        if (!objRelationship) {
            util.setError(404, `Cannot find relationship with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found relationship', objRelationship);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

relationshipsCtrl.findOneByJoinKeyLhs = async (req, res) => {
    try {
        const { joinKeyLhs } = req.params;
        const objRelationship = await relationshipService.findOneByJoinKeyLhs(joinKeyLhs, req.query);
        if (!objRelationship) {
            util.setError(404, `Cannot find relationship with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found relationship', objRelationship);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

relationshipsCtrl.findOneByJoinKeyRhs = async (req, res) => {
    try {
        const { joinKeyRhs } = req.params;
        const objRelationship = await relationshipService.findOneByJoinKeyRhs(joinKeyRhs, req.query);
        if (!objRelationship) {
            util.setError(404, `Cannot find relationship with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found relationship', objRelationship);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

relationshipsCtrl.findOneByRelationshipType = async (req, res) => {
    try {
        const { relationshipType } = req.params;
        const objRelationship = await relationshipService.findOneByRelationshipType(relationshipType, req.query);
        if (!objRelationship) {
            util.setError(404, `Cannot find relationship with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found relationship', objRelationship);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

relationshipsCtrl.findOneByRelationshipRoleColumn = async (req, res) => {
    try {
        const { relationshipRoleColumn } = req.params;
        const objRelationship = await relationshipService.findOneByRelationshipRoleColumn(relationshipRoleColumn, req.query);
        if (!objRelationship) {
            util.setError(404, `Cannot find relationship with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found relationship', objRelationship);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

relationshipsCtrl.findOneByRelationshipRoleColumnValue = async (req, res) => {
    try {
        const { relationshipRoleColumnValue } = req.params;
        const objRelationship = await relationshipService.findOneByRelationshipRoleColumnValue(relationshipRoleColumnValue, req.query);
        if (!objRelationship) {
            util.setError(404, `Cannot find relationship with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found relationship', objRelationship);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



relationshipsCtrl.updateRelationshipById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objRelationship = await relationshipService.updateRelationshipById(id, req.body);
            if (!objRelationship) {
                util.setError(404, `Cannot find relationship with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Relationship updated', objRelationship);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

relationshipsCtrl.updateRelationshipByReverse = async (req, res) => {
     const { reverse } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objRelationship = await relationshipService.updateRelationshipByReverse(reverse, req.body);
            if (!objRelationship) {
                util.setError(404, `Cannot find relationship with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Relationship updated', objRelationship);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

relationshipsCtrl.updateRelationshipByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objRelationship = await relationshipService.updateRelationshipByDeleted(deleted, req.body);
            if (!objRelationship) {
                util.setError(404, `Cannot find relationship with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Relationship updated', objRelationship);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

relationshipsCtrl.updateRelationshipByRelationshipName = async (req, res) => {
     const { relationshipName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objRelationship = await relationshipService.updateRelationshipByRelationshipName(relationshipName, req.body);
            if (!objRelationship) {
                util.setError(404, `Cannot find relationship with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Relationship updated', objRelationship);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

relationshipsCtrl.updateRelationshipByLhsModule = async (req, res) => {
     const { lhsModule } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objRelationship = await relationshipService.updateRelationshipByLhsModule(lhsModule, req.body);
            if (!objRelationship) {
                util.setError(404, `Cannot find relationship with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Relationship updated', objRelationship);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

relationshipsCtrl.updateRelationshipByLhsTable = async (req, res) => {
     const { lhsTable } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objRelationship = await relationshipService.updateRelationshipByLhsTable(lhsTable, req.body);
            if (!objRelationship) {
                util.setError(404, `Cannot find relationship with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Relationship updated', objRelationship);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

relationshipsCtrl.updateRelationshipByLhsKey = async (req, res) => {
     const { lhsKey } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objRelationship = await relationshipService.updateRelationshipByLhsKey(lhsKey, req.body);
            if (!objRelationship) {
                util.setError(404, `Cannot find relationship with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Relationship updated', objRelationship);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

relationshipsCtrl.updateRelationshipByRhsModule = async (req, res) => {
     const { rhsModule } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objRelationship = await relationshipService.updateRelationshipByRhsModule(rhsModule, req.body);
            if (!objRelationship) {
                util.setError(404, `Cannot find relationship with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Relationship updated', objRelationship);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

relationshipsCtrl.updateRelationshipByRhsTable = async (req, res) => {
     const { rhsTable } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objRelationship = await relationshipService.updateRelationshipByRhsTable(rhsTable, req.body);
            if (!objRelationship) {
                util.setError(404, `Cannot find relationship with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Relationship updated', objRelationship);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

relationshipsCtrl.updateRelationshipByRhsKey = async (req, res) => {
     const { rhsKey } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objRelationship = await relationshipService.updateRelationshipByRhsKey(rhsKey, req.body);
            if (!objRelationship) {
                util.setError(404, `Cannot find relationship with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Relationship updated', objRelationship);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

relationshipsCtrl.updateRelationshipByJoinTable = async (req, res) => {
     const { joinTable } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objRelationship = await relationshipService.updateRelationshipByJoinTable(joinTable, req.body);
            if (!objRelationship) {
                util.setError(404, `Cannot find relationship with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Relationship updated', objRelationship);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

relationshipsCtrl.updateRelationshipByJoinKeyLhs = async (req, res) => {
     const { joinKeyLhs } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objRelationship = await relationshipService.updateRelationshipByJoinKeyLhs(joinKeyLhs, req.body);
            if (!objRelationship) {
                util.setError(404, `Cannot find relationship with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Relationship updated', objRelationship);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

relationshipsCtrl.updateRelationshipByJoinKeyRhs = async (req, res) => {
     const { joinKeyRhs } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objRelationship = await relationshipService.updateRelationshipByJoinKeyRhs(joinKeyRhs, req.body);
            if (!objRelationship) {
                util.setError(404, `Cannot find relationship with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Relationship updated', objRelationship);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

relationshipsCtrl.updateRelationshipByRelationshipType = async (req, res) => {
     const { relationshipType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objRelationship = await relationshipService.updateRelationshipByRelationshipType(relationshipType, req.body);
            if (!objRelationship) {
                util.setError(404, `Cannot find relationship with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Relationship updated', objRelationship);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

relationshipsCtrl.updateRelationshipByRelationshipRoleColumn = async (req, res) => {
     const { relationshipRoleColumn } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objRelationship = await relationshipService.updateRelationshipByRelationshipRoleColumn(relationshipRoleColumn, req.body);
            if (!objRelationship) {
                util.setError(404, `Cannot find relationship with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Relationship updated', objRelationship);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

relationshipsCtrl.updateRelationshipByRelationshipRoleColumnValue = async (req, res) => {
     const { relationshipRoleColumnValue } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objRelationship = await relationshipService.updateRelationshipByRelationshipRoleColumnValue(relationshipRoleColumnValue, req.body);
            if (!objRelationship) {
                util.setError(404, `Cannot find relationship with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Relationship updated', objRelationship);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = relationshipsCtrl;
//</es-section>
