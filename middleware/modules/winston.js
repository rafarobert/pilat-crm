var appRoot = require('app-root-path');
var winston = require('winston');
const { transports, format } = winston;

require('winston-daily-rotate-file');

const print = format.printf((info) => {
	const log = `${info.level}: ${info.message}`;

	return info.stack
		? `${log}\n${info.stack}`
		: log;
});

var transportDaily = new winston.transports.DailyRotateFile({
	level: 'info',
	filename: `${appRoot}/logs/app-%DATE%-info.log`,
	datePattern: 'YYYY-MM-DD-HH',
	zippedArchive: false,
	maxSize: '20m',
	maxFiles: '14d'
});

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

var transportPdf = new (winston.transports.File)({
	name: 'pdf-log',
	filename: `${appRoot}/logs/app-pdf.log`,
	level: 'info',
	timestamp: true,
	colorize: true,
	handleExceptions: true,
	humanReadableUnhandledException: true,
	prettyPrint: true,
	json: true,
	maxsize: 5242880
});


var options = {
	console: {
		level: 'info',
		handleExceptions: true,
		json: false,
		colorize: true,
	},
};

const logger = winston.createLogger({
	level: 'info',
	format: format.combine(
		format.errors({ stack: true }),
		print,
	),
	transports: [
		//
		// - Write all logs with level `error` and below to `error.log`
		// - Write all logs with level `info` and below to `combined.log`
		//
		// new winston.transports.File(options.file),
		transportDaily,
		new winston.transports.Console(options.console),
	],
	exitOnError: false, // do not exit on handled exceptions
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

const loggerPdf = winston.createLogger({
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
		transportPdf,
		new winston.transports.Console(options.console),
	],
	exitOnError: false, // do not exit on handled exceptions
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
	logger.add(new winston.transports.Console({
		format: winston.format.simple(),
	}));
}

logger.stream = {
	write: function(message, encoding) {
		logger.info(message);
	},
};

module.exports.logger = logger;
module.exports.loggerEmail = loggerEmail;
module.exports.loggerPdf = loggerPdf;
