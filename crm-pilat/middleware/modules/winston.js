var appRoot = require('app-root-path');
var winston = require('winston');
const { transports, format } = winston;


// Begin - Log Configuration Emails

var transportEmail = new (winston.transports.File)({
	name: 'email-log',
	filename: `${appRoot}/logs/app-email.log`,
	level: 'info',
	timestamp: true,
	colorize: true,
	handleExceptions: true,
	humanReadableUnhandledException: true,
	prettyPrint: true,
	json: true,
	maxsize: 5242880
});

const loggerEmail = winston.createLogger({
	level: 'info',
	format: format.combine(
		format.splat(),
		format.simple()
	),
	transports: [
		//
		// - Write all logs with level `error` and below to `error.log`
		// - Write all logs with level `info` and below to `combined.log`
		//
		// new winston.transports.File(options.file),
		transportEmail,
		new winston.transports.Console(options.console),
	],
	exitOnError: false, // do not exit on handled exceptions
});

// End Log Emails

module.exports.logger = logger;
module.exports.loggerEmail = loggerEmail;
