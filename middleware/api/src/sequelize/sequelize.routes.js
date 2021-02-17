const express = require("express");
const router = express.Router();
const authenticateToken = require("../../../config/token");
import configJson from '../../../config/config';
const sys = configJson.system;

const sequelizeCtrl = require("./sequelize.controller");


	router.get(`/api-${sys}/sequelize`, authenticateToken, (req, res) => sequelizeCtrl.getSequelizeMetas(req, res));
	router.get(`/api-${sys}/sequelize/:name`, authenticateToken, (req, res) => sequelizeCtrl.getSequelizeMeta(req, res));
	router.get(`/api-${sys}/sequelize/export/sequelize`, authenticateToken, (req, res) => sequelizeCtrl.sequelizeExport(req, res));
	router.get(`/api-${sys}/sequelize/export/sequelize/name`, authenticateToken, (req, res) => sequelizeCtrl.sequelizeExport(req, res));
	router.get(`/api-${sys}/sequelize/import/sequelize`, authenticateToken, (req, res) => sequelizeCtrl.sequelizeImport(req, res));
	router.get(`/api-${sys}/sequelize/import/sequelize/name`, authenticateToken, (req, res) => sequelizeCtrl.sequelizeImport(req, res));
	router.get(`/api-${sys}/sequelize/export/mongoose`, authenticateToken, (req, res) => sequelizeCtrl.mongooseExport(req, res));
	router.get(`/api-${sys}/sequelize/export/mongoose/name`, authenticateToken, (req, res) => sequelizeCtrl.mongooseExport(req, res));
	router.get(`/api-${sys}/sequelize/import/mongoose`, authenticateToken, (req, res) => sequelizeCtrl.mongooseImport(req, res));
	router.get(`/api-${sys}/sequelize/import/mongoose/name`, authenticateToken, (req, res) => sequelizeCtrl.mongooseImport(req, res));

module.exports = router;
