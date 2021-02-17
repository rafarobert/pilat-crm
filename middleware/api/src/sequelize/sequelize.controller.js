const sequelizeService = require('./sequelize.service');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

const sequelizeCtrl = {};

sequelizeCtrl.service = sequelizeService;

sequelizeCtrl.getSequelizeMetas = async (req, res) => {
    try {
        const sequelizeMetas = await sequelizeService.getAllSequelizeMetas(req.query);
        if (sequelizeMetas.length > 0) {
            util.setSuccess(200, 'SequelizeMetas retrieved', sequelizeMetas);
        } else {
            util.setSuccess(200, 'No sequelizeMeta found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

sequelizeCtrl.getSequelizeMeta = async (req, res) => {
    const { name } = req.params;
    try {
        const sequelizeMeta = await sequelizeService.getASequelizeMeta(name);
        if (!sequelizeMeta) {
            util.setError(404, `Cannot find sequelizeMeta with the name ${name}`);
        } else {
            util.setSuccess(200, 'Found SequelizeMeta', sequelizeMeta);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

sequelizeCtrl.sequelizeExport = async (req, res) => {
    const { name } = req.params;
    try {
        const sequelizeMeta = await sequelizeService.sequelizeExport(name);
        if (!sequelizeMeta) {
            util.setError(404, `Cannot find table with the name ${name}`);
        } else {
            util.setSuccess(200, 'Sequelize database exported', sequelizeMeta);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

sequelizeCtrl.sequelizeImport = async (req, res) => {
    const { name } = req.params;
    try {
        const sequelizeMeta = await sequelizeService.sequelizeImport(req.query, name);
        if (!sequelizeMeta) {
            util.setError(404, `Cannot find table with the name ${name}`);
        } else {
            util.setSuccess(200, 'Sequelize database imported', sequelizeMeta);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

sequelizeCtrl.mongooseExport = async (req, res) => {
    const { name } = req.params;
    try {
        const sequelizeMeta = await sequelizeService.mongooseExport(name);
        if (!sequelizeMeta) {
            util.setError(404, `Cannot find table with the name ${name}`);
        } else {
            util.setSuccess(200, 'Mongo database exported', sequelizeMeta);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

sequelizeCtrl.mongooseImport = async (req, res) => {
    const { name } = req.params;
    try {
        const sequelizeMeta = await sequelizeService.mongooseImport(req.query, name);
        if (!sequelizeMeta) {
            util.setError(404, `Cannot find sequelizeMeta with the name ${name}`);
        } else {
            util.setSuccess(200, 'Sequelize database imported', sequelizeMeta);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

module.exports = sequelizeCtrl;


