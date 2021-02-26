/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:33 GMT-0400 (Bolivia Time)
 * Time: 0:23:33
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:33 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:33
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const projectOpportunityService = require('../services/projects_opportunities.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const projectsOpportunitiesCtrl = {};
projectsOpportunitiesCtrl.service = projectOpportunityService;


projectsOpportunitiesCtrl.getAllProjectsOpportunities = async (req, res) => {
    try {
        const objProjectsOpportunities = await projectOpportunityService.getAllProjectsOpportunities(req.query);
        if (objProjectsOpportunities.length > 0) {
            util.setSuccess(200, 'ProjectsOpportunities retrieved', objProjectsOpportunities);
        } else {
            util.setSuccess(200, 'No projectOpportunity found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsOpportunitiesCtrl.getAProjectOpportunity = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objProjectOpportunity = await projectOpportunityService.getAProjectOpportunity(id, req.query);
        if (!objProjectOpportunity) {
            util.setError(404, `Cannot find projectOpportunity with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found projectOpportunity', objProjectOpportunity);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsOpportunitiesCtrl.addProjectOpportunity = async (req, res) => {
    try {
        const objProjectOpportunity = await projectOpportunityService.addProjectOpportunity(req.body);
        util.setSuccess(201, 'ProjectOpportunity Added!', objProjectOpportunity);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsOpportunitiesCtrl.updateProjectOpportunity = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objProjectOpportunity = await projectOpportunityService.updateProjectOpportunity(id, req.body);
        if (!objProjectOpportunity) {
            util.setError(404, `Cannot find projectOpportunity with the id: ${id}`);
        } else {
            util.setSuccess(200, 'ProjectOpportunity updated', objProjectOpportunity);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

projectsOpportunitiesCtrl.deleteProjectOpportunity = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objProjectOpportunity = await projectOpportunityService.deleteProjectOpportunity(id);
        if (objProjectOpportunity) {
            util.setSuccess(200, 'ProjectOpportunity deleted', objProjectOpportunity);
        } else {
            util.setError(404, `ProjectOpportunity with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



projectsOpportunitiesCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objProjectOpportunity = await projectOpportunityService.findOneById(id, req.query);
        if (!objProjectOpportunity) {
            util.setError(404, `Cannot find projectOpportunity with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectOpportunity', objProjectOpportunity);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsOpportunitiesCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objProjectOpportunity = await projectOpportunityService.findOneByDeleted(deleted, req.query);
        if (!objProjectOpportunity) {
            util.setError(404, `Cannot find projectOpportunity with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectOpportunity', objProjectOpportunity);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsOpportunitiesCtrl.findOneByOpportunityId = async (req, res) => {
    try {
        const { opportunityId } = req.params;
        const objProjectOpportunity = await projectOpportunityService.findOneByOpportunityId(opportunityId, req.query);
        if (!objProjectOpportunity) {
            util.setError(404, `Cannot find projectOpportunity with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectOpportunity', objProjectOpportunity);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsOpportunitiesCtrl.findOneByProjectId = async (req, res) => {
    try {
        const { projectId } = req.params;
        const objProjectOpportunity = await projectOpportunityService.findOneByProjectId(projectId, req.query);
        if (!objProjectOpportunity) {
            util.setError(404, `Cannot find projectOpportunity with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectOpportunity', objProjectOpportunity);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsOpportunitiesCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objProjectOpportunity = await projectOpportunityService.findOneByDateModified(dateModified, req.query);
        if (!objProjectOpportunity) {
            util.setError(404, `Cannot find projectOpportunity with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectOpportunity', objProjectOpportunity);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



projectsOpportunitiesCtrl.updateProjectOpportunityById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProjectOpportunity = await projectOpportunityService.updateProjectOpportunityById(id, req.body);
            if (!objProjectOpportunity) {
                util.setError(404, `Cannot find projectOpportunity with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectOpportunity updated', objProjectOpportunity);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectsOpportunitiesCtrl.updateProjectOpportunityByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProjectOpportunity = await projectOpportunityService.updateProjectOpportunityByDeleted(deleted, req.body);
            if (!objProjectOpportunity) {
                util.setError(404, `Cannot find projectOpportunity with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectOpportunity updated', objProjectOpportunity);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectsOpportunitiesCtrl.updateProjectOpportunityByOpportunityId = async (req, res) => {
     const { opportunityId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProjectOpportunity = await projectOpportunityService.updateProjectOpportunityByOpportunityId(opportunityId, req.body);
            if (!objProjectOpportunity) {
                util.setError(404, `Cannot find projectOpportunity with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectOpportunity updated', objProjectOpportunity);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectsOpportunitiesCtrl.updateProjectOpportunityByProjectId = async (req, res) => {
     const { projectId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProjectOpportunity = await projectOpportunityService.updateProjectOpportunityByProjectId(projectId, req.body);
            if (!objProjectOpportunity) {
                util.setError(404, `Cannot find projectOpportunity with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectOpportunity updated', objProjectOpportunity);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectsOpportunitiesCtrl.updateProjectOpportunityByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProjectOpportunity = await projectOpportunityService.updateProjectOpportunityByDateModified(dateModified, req.body);
            if (!objProjectOpportunity) {
                util.setError(404, `Cannot find projectOpportunity with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectOpportunity updated', objProjectOpportunity);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = projectsOpportunitiesCtrl;
//</es-section>
