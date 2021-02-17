var appRoot = require('app-root-path');
var winston = require('winston');
require('winston-daily-rotate-file');

var transportDaily = new winston.transports.DailyRotateFile({
	level: 'info',
	filename: `${appRoot}/logs/app-%DATE%.log`,
	datePattern: 'YYYY-MM-DD-HH',
	zippedArchive: false,
	maxSize: '20m',
	maxFiles: '14d'
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
	format: winston.format.json(),
	defaultMeta: { service: 'user-service' },
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

module.exports = logger;