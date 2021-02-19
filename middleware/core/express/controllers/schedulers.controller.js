/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:39 GMT-0400 (Bolivia Time)
 * Time: 18:38:39
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:39 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:39
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const schedulerService = require('../services/schedulers.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const schedulersCtrl = {};
schedulersCtrl.service = schedulerService;


schedulersCtrl.getAllSchedulers = async (req, res) => {
    try {
        const objSchedulers = await schedulerService.getAllSchedulers(req.query);
        if (objSchedulers.length > 0) {
            util.setSuccess(200, 'Schedulers retrieved', objSchedulers);
        } else {
            util.setSuccess(200, 'No scheduler found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

schedulersCtrl.getAScheduler = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objScheduler = await schedulerService.getAScheduler(id, req.query);
        if (!objScheduler) {
            util.setError(404, `Cannot find scheduler with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found scheduler', objScheduler);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

schedulersCtrl.addScheduler = async (req, res) => {
    try {
        const objScheduler = await schedulerService.addScheduler(req.body);
        util.setSuccess(201, 'Scheduler Added!', objScheduler);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

schedulersCtrl.updateScheduler = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objScheduler = await schedulerService.updateScheduler(id, req.body);
        if (!objScheduler) {
            util.setError(404, `Cannot find scheduler with the id: ${id}`);
        } else {
            util.setSuccess(200, 'Scheduler updated', objScheduler);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

schedulersCtrl.deleteScheduler = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objScheduler = await schedulerService.deleteScheduler(id);
        if (objScheduler) {
            util.setSuccess(200, 'Scheduler deleted', objScheduler);
        } else {
            util.setError(404, `Scheduler with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



schedulersCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objScheduler = await schedulerService.findOneById(id, req.query);
        if (!objScheduler) {
            util.setError(404, `Cannot find scheduler with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found scheduler', objScheduler);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

schedulersCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objScheduler = await schedulerService.findOneByDeleted(deleted, req.query);
        if (!objScheduler) {
            util.setError(404, `Cannot find scheduler with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found scheduler', objScheduler);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

schedulersCtrl.findOneByCatchUp = async (req, res) => {
    try {
        const { catchUp } = req.params;
        const objScheduler = await schedulerService.findOneByCatchUp(catchUp, req.query);
        if (!objScheduler) {
            util.setError(404, `Cannot find scheduler with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found scheduler', objScheduler);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

schedulersCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objScheduler = await schedulerService.findOneByName(name, req.query);
        if (!objScheduler) {
            util.setError(404, `Cannot find scheduler with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found scheduler', objScheduler);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

schedulersCtrl.findOneByJob = async (req, res) => {
    try {
        const { job } = req.params;
        const objScheduler = await schedulerService.findOneByJob(job, req.query);
        if (!objScheduler) {
            util.setError(404, `Cannot find scheduler with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found scheduler', objScheduler);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

schedulersCtrl.findOneByJobInterval = async (req, res) => {
    try {
        const { jobInterval } = req.params;
        const objScheduler = await schedulerService.findOneByJobInterval(jobInterval, req.query);
        if (!objScheduler) {
            util.setError(404, `Cannot find scheduler with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found scheduler', objScheduler);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

schedulersCtrl.findOneByStatus = async (req, res) => {
    try {
        const { status } = req.params;
        const objScheduler = await schedulerService.findOneByStatus(status, req.query);
        if (!objScheduler) {
            util.setError(404, `Cannot find scheduler with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found scheduler', objScheduler);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

schedulersCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objScheduler = await schedulerService.findOneByDateEntered(dateEntered, req.query);
        if (!objScheduler) {
            util.setError(404, `Cannot find scheduler with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found scheduler', objScheduler);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

schedulersCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objScheduler = await schedulerService.findOneByDateModified(dateModified, req.query);
        if (!objScheduler) {
            util.setError(404, `Cannot find scheduler with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found scheduler', objScheduler);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

schedulersCtrl.findOneByDateTimeStart = async (req, res) => {
    try {
        const { dateTimeStart } = req.params;
        const objScheduler = await schedulerService.findOneByDateTimeStart(dateTimeStart, req.query);
        if (!objScheduler) {
            util.setError(404, `Cannot find scheduler with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found scheduler', objScheduler);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

schedulersCtrl.findOneByDateTimeEnd = async (req, res) => {
    try {
        const { dateTimeEnd } = req.params;
        const objScheduler = await schedulerService.findOneByDateTimeEnd(dateTimeEnd, req.query);
        if (!objScheduler) {
            util.setError(404, `Cannot find scheduler with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found scheduler', objScheduler);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

schedulersCtrl.findOneByLastRun = async (req, res) => {
    try {
        const { lastRun } = req.params;
        const objScheduler = await schedulerService.findOneByLastRun(lastRun, req.query);
        if (!objScheduler) {
            util.setError(404, `Cannot find scheduler with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found scheduler', objScheduler);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

schedulersCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objScheduler = await schedulerService.findOneByCreatedBy(createdBy, req.query);
        if (!objScheduler) {
            util.setError(404, `Cannot find scheduler with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found scheduler', objScheduler);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

schedulersCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objScheduler = await schedulerService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objScheduler) {
            util.setError(404, `Cannot find scheduler with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found scheduler', objScheduler);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



schedulersCtrl.updateSchedulerById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objScheduler = await schedulerService.updateSchedulerById(id, req.body);
            if (!objScheduler) {
                util.setError(404, `Cannot find scheduler with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Scheduler updated', objScheduler);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

schedulersCtrl.updateSchedulerByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objScheduler = await schedulerService.updateSchedulerByDeleted(deleted, req.body);
            if (!objScheduler) {
                util.setError(404, `Cannot find scheduler with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Scheduler updated', objScheduler);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

schedulersCtrl.updateSchedulerByCatchUp = async (req, res) => {
     const { catchUp } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objScheduler = await schedulerService.updateSchedulerByCatchUp(catchUp, req.body);
            if (!objScheduler) {
                util.setError(404, `Cannot find scheduler with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Scheduler updated', objScheduler);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

schedulersCtrl.updateSchedulerByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objScheduler = await schedulerService.updateSchedulerByName(name, req.body);
            if (!objScheduler) {
                util.setError(404, `Cannot find scheduler with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Scheduler updated', objScheduler);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

schedulersCtrl.updateSchedulerByJob = async (req, res) => {
     const { job } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objScheduler = await schedulerService.updateSchedulerByJob(job, req.body);
            if (!objScheduler) {
                util.setError(404, `Cannot find scheduler with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Scheduler updated', objScheduler);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

schedulersCtrl.updateSchedulerByJobInterval = async (req, res) => {
     const { jobInterval } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objScheduler = await schedulerService.updateSchedulerByJobInterval(jobInterval, req.body);
            if (!objScheduler) {
                util.setError(404, `Cannot find scheduler with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Scheduler updated', objScheduler);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

schedulersCtrl.updateSchedulerByStatus = async (req, res) => {
     const { status } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objScheduler = await schedulerService.updateSchedulerByStatus(status, req.body);
            if (!objScheduler) {
                util.setError(404, `Cannot find scheduler with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Scheduler updated', objScheduler);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

schedulersCtrl.updateSchedulerByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objScheduler = await schedulerService.updateSchedulerByDateEntered(dateEntered, req.body);
            if (!objScheduler) {
                util.setError(404, `Cannot find scheduler with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Scheduler updated', objScheduler);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

schedulersCtrl.updateSchedulerByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objScheduler = await schedulerService.updateSchedulerByDateModified(dateModified, req.body);
            if (!objScheduler) {
                util.setError(404, `Cannot find scheduler with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Scheduler updated', objScheduler);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

schedulersCtrl.updateSchedulerByDateTimeStart = async (req, res) => {
     const { dateTimeStart } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objScheduler = await schedulerService.updateSchedulerByDateTimeStart(dateTimeStart, req.body);
            if (!objScheduler) {
                util.setError(404, `Cannot find scheduler with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Scheduler updated', objScheduler);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

schedulersCtrl.updateSchedulerByDateTimeEnd = async (req, res) => {
     const { dateTimeEnd } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objScheduler = await schedulerService.updateSchedulerByDateTimeEnd(dateTimeEnd, req.body);
            if (!objScheduler) {
                util.setError(404, `Cannot find scheduler with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Scheduler updated', objScheduler);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

schedulersCtrl.updateSchedulerByLastRun = async (req, res) => {
     const { lastRun } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objScheduler = await schedulerService.updateSchedulerByLastRun(lastRun, req.body);
            if (!objScheduler) {
                util.setError(404, `Cannot find scheduler with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Scheduler updated', objScheduler);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

schedulersCtrl.updateSchedulerByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objScheduler = await schedulerService.updateSchedulerByCreatedBy(createdBy, req.body);
            if (!objScheduler) {
                util.setError(404, `Cannot find scheduler with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Scheduler updated', objScheduler);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

schedulersCtrl.updateSchedulerByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objScheduler = await schedulerService.updateSchedulerByModifiedUserId(modifiedUserId, req.body);
            if (!objScheduler) {
                util.setError(404, `Cannot find scheduler with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Scheduler updated', objScheduler);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = schedulersCtrl;
//</es-section>
