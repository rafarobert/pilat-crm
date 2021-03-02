import path from 'path';
import dotenv from 'dotenv';
import morgan from "morgan";
import express from "express";
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import expressSession from 'express-session';
import flash from 'connect-flash';
import passport from 'passport';
import winston from './config/winston';
import initPassport from './config/passport';
import initApiRoutes from './api/routes';
import initCleanLogs from './config/cron';
import nodemailer from "nodemailer";
//import mongoose from "./config/mongoose";
//import initBpmn from "./config/bpmn";

const configJson = require('./config/config');
const cors = require('cors');
const env = process.env.NODE_ENV || 'development';
const config = configJson[env];
const app = express();

app.use(cors());
dotenv.config();

// Initialize
initPassport(app);
initCleanLogs();
// initBpmn();

//Views
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

// Settings
app.set("protocol", config.protocol || 'http');
app.set("host", config.domain || 'localhost');
app.set("port", config.gate || 8001);
app.set("sql", config.sql || 1);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", [config.access]); // update to match the domain you will make the request from
  // res.header("Access-Control-Allow-Origin", "https://corredoresecofuturo.com.bo:7000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, X-AUTHENTICATION, X-IP, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

// Midlewares
app.use(morgan("combined", {stream: winston.stream}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressSession({secret: 'anystringoftext',
  saveUninitialized: true,
  resave: true}));

//Passport
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(express.json());

// APP - VIEWS
app.set('views', path.join(__dirname, '/app/src'));

// APP - ROUTES
// app.use("/", require("./app/src/main/main.routes"));
// app.use("/", require("./app/src/auth/auth.routes"));
app.use("/", require("./app/src/crud/crud.routes"));
// app.use("/", require("./app/src/bpmn/bpmn.routes"));

// API - ROUTES
// app.use("/", require("./api/src/sequelize/sequelize.routes"));
// app.use("/", require("./api/src/auth/auth.routes"));

initApiRoutes(app);

// Starting the server
app.listen(app.get("port"), () => {
  console.log(app.get("protocol")+'://'+app.get("host")+':'+app.get("port"));
});

//---- Testing ----

// app.get('/test/logs', function(req, res, next) {
//  next(400);
// });


// Cron
// cron.schedule("* * * * *", function() {
//   console.log("running a task every minute");
// });

// sending emails at periodic intervals
// cron.schedule("* * * * Wednesday", function(){
//   console.log("---------------------");
//   console.log("Running Cron Job");
//   let mailOptions = {
//     from: "rgutierrez@gmail.com",
//     to: "rafael_2008@gmail.com",
//     subject: `Not a GDPR update ;)`,
//     text: `Hi there, this email was automatically sent by us`
//   };
//   transporter.sendMail(mailOptions, function(error, info) {
//     if (error) {
//       throw error;
//     } else {
//       console.log("Email successfully sent!");
//     }
//   });
// });

export default app;
