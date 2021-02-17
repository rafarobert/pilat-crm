class Util {

	constructor() {
		this.statusCode = null;
		this.type = null;
		this.data = null;
		this.message = null;
	}

	setSuccess(statusCode, message, data) {
		this.statusCode = statusCode;
		this.message = message;
		this.data = data;
		this.type = 'success';
	}

	setError(statusCode, message) {
		this.statusCode = statusCode;
		this.message = message;
		this.type = 'error';
	}

	setWarning(statusCode, message) {
		this.statusCode = statusCode;
		this.message = message;
		this.type = 'warning';
	}

	send(res) {
		const result = {
			status: this.type,
			message: this.message,
			data: this.data,
		};

		if (this.type === 'success') {
			return res.status(this.statusCode).json(result);
		}
		return res.status(this.statusCode).json({
			status: this.type,
			message: this.message,
		});
	}


	 isChar(str) {
		if (typeof str == 'string') {
			return true;
		}
		return false;
	}

	 isVarchar(str) {
		if (typeof str == 'string') {
			return true;
		}
		return false;
	}

	 isText(str) {
		if (typeof str == 'string') {
			return true;
		}
		return false;
	}
	isString(str) {
		if (typeof str == 'string') {
			return true;
		}
		return false;
	}

	 isDate(str) {
		if (typeof str == 'object') {
			return true;
		}
		return false;
	}

	 isDatetime(str) {
		if (typeof str == 'object') {
			return true;
		}
		return false;
	}

	 isTinyint(str) {
		if (typeof str == 'number') {
			return true;
		}
		return false;
	}

	isBigint(str) {
		if (typeof str == 'number') {
			return true;
		}
		return false;
	}

	 isFloat(str) {
		if (typeof str == 'number') {
			return true;
		}
		return false;
	}

	 isBlob(str) {
		if (typeof str == 'string') {
			return true;
		}
		return false;
	}

	 isBoolean(str) {
		if (typeof str == 'boolean') {
			return true;
		}
		return false;
	}

	Char(str) {
		if (typeof str == 'string') {
			return str;
		}
		return null;
	}

	 Varchar(str) {
		if (typeof str == 'string') {
			return str;
		}
		return null;
	}

	 Text(str) {
		if (typeof str == 'string') {
			return str;
		}
		return null;
	}

		String(str) {
		if (typeof str == 'string') {
			return str;
		}
		return null;
	}

	 Date(str) {
		if (typeof str == 'object') {
			return str;
		}
		return null;
	}

	 Datetime(str) {
		if (typeof str == 'object') {
			return str;
		}
		return null;
	}

	 Tinyint(str) {
		if (typeof str == 'number') {
			return str;
		}
		return null;
	}
	Bigint(str) {
		if (typeof str == 'number') {
			return str;
		}
		return null;
	}

	 Float(str) {
		if (typeof str == 'number') {
			return str;
		}
		return null;
	}

	 Blob(str) {
		if (typeof str == 'string') {
			return str;
		}
		return null;
	}

	 Boolean(str) {
		if (typeof str == 'boolean') {
			return str;
		}
		return null;
	}

	PrimaryKeyTypeIsString(dataType) {
		if (dataType.hasStringAs('char' || dataType.includes('char'))) {
			return true;
		} else if (dataType.hasStringAs('varchar') || dataType.includes('varchar') || dataType.includes('VARCHAR')) {
			return true;
		} else if (dataType.hasStringAs('text' || dataType.includes('text') || dataType.includes('TEXT'))) {
			return true;
		} else if (dataType.hasStringAs('string' || dataType.includes('string') || dataType.includes('STRING'))) {
			return true;
		}
		return false;
	}

	PrimaryKeyTypeIsInteger(dataType) {
		if (dataType.hasStringAs('int' || dataType.includes('int') || dataType.includes('INT'))) {
			return true;
		} else if (dataType.hasStringAs('bigint' || dataType.includes('bigint') || dataType.includes('BIGINT'))) {
			return true;
		} else if (dataType.hasStringAs('tinyint' || dataType.includes('tinyint') || dataType.includes('TINYINT'))) {
			return true;
		} else if (dataType.hasStringAs('integer' || dataType.includes('integer') || dataType.includes('INTEGER'))) {
			return true;
		}
		return false;
	}


}

module.exports = Util;
