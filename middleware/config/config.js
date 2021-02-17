require('dotenv').config();
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;

module.exports = {

  // If using onine database
  // development: {
  //   use_env_variable: 'DATABASE_URL'
  // },

  system: process.env.SYSTEM,
  sql: process.env.SQL,

  development: {
    database: process.env.DEV_DB_NAME,
    username: process.env.DEV_DB_USER,
    password: process.env.DEV_DB_PASS,
    host: process.env.DEV_DB_HOST,
    dialect: process.env.DEV_DB_DIALECT,
    secret_token: process.env.DEV_SECRET_TOKEN,
    gate: process.env.DEV_PORT,
    sql: process.env.DEV_SQL,
    access: process.env.DEV_ACCESS,
    domain: process.env.DEV_HOST,
    protocol: process.env.DEV_PROTOCOL
  },

  test: {
    database: process.env.TEST_DB_NAME,
    username: process.env.TEST_DB_USER,
    password: process.env.TEST_DB_PASS,
    host: process.env.TEST_DB_HOST,
    dialect: process.env.TEST_DB_DIALECT,
    secret_token: process.env.TEST_SECRET_TOKEN,
    gate: process.env.TEST_PORT,
    sql: process.env.TEST_SQL,
    access: process.env.TEST_ACCESS,
    domain: process.env.TEST_HOST,
    protocol: process.env.TEST_PROTOCOL
  },

  production: {
    database: process.env.PROD_DB_NAME,
    username: process.env.PROD_DB_USER,
    password: process.env.PROD_DB_PASS,
    host: process.env.PROD_DB_HOST,
    dialect: process.env.PROD_DB_DIALECT,
    secret_token: process.env.PROD_SECRET_TOKEN,
    gate: process.env.PROD_PORT,
    sql: process.env.PROD_SQL,
    access: process.env.PROD_ACCESS,
    domain: process.env.PROD_HOST,
    protocol: process.env.PROD_PROTOCOL
  },
};
