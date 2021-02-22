const dJSON = require('dirty-json');

String.prototype.escapeRegExp = function() {
	return this.replace(/[.*+?^$${}()|[\]\\]/g, "\\$&");
};
String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
};
String.prototype.lowerlize = function() {
	return this.charAt(0).toLowerCase() + this.slice(1);
};
String.prototype.replaceAll = function(term, replacement) {
	// return this.replace(new RegExp(term.escapeRegExp(), 'g'), replacement);
	return this.split(term).join(replacement)
};
String.prototype.hasString = function(term) {
	return this.indexOf(term) >= 0;
};
String.prototype.hasStringAs = function(term) {
	return this.indexOf(term) >= 0 || this.indexOf(term.capitalize()) >= 0 || this.indexOf(term.lowerlize()) >= 0 || this.indexOf(term.toLowerCase()) >= 0;
};
String.prototype.isLikeAnyWay = function(term) {
	return this.toUpperCase() == term.toUpperCase() || this.toLowerCase() == term.toLowerCase() || this.toLowerCase().includes(term.toLowerCase()) || this.toLowerCase().includes(term.toLowerCase());
};
String.prototype.formatNumber = (decimals = 0, multiplier = 1) => {
	formatNumber(this,decimals, multiplier)
}

Number.prototype.lpad = function(width, char = '0') {
	return (this.length >= width) ? this : (new Array(width).join(char) + this).slice(-width);
}
Number.prototype.formatNumber = (decimals = 0, multiplier = 1) => {
	let floatMultiplied = this * multiplier;
	let stringFloat = floatMultiplied + "";
	let arraySplitFloat = stringFloat.split(".");
	let decimalsValue = "0";
	if (arraySplitFloat.length > 1) {
		decimalsValue = arraySplitFloat[1].slice(0, decimals);
	}
	let integerValue = arraySplitFloat[0];
	let arrayFullStringValue = [integerValue, decimalsValue];
	let FullStringValue = arrayFullStringValue.join(".");
	let floatFullValue = parseFloat(FullStringValue);
	let formatFloatFullValue = new Intl.NumberFormat('es-ES', { minimumFractionDigits: decimals }).format(floatFullValue);
	return formatFloatFullValue;
}

Float.prototype.formatNumber = (decimals = 0, multiplier = 1) => {
	let floatMultiplied = this * multiplier;
	let stringFloat = floatMultiplied + "";
	let arraySplitFloat = stringFloat.split(".");
	let decimalsValue = "0";
	if (arraySplitFloat.length > 1) {
		decimalsValue = arraySplitFloat[1].slice(0, decimals);
	}
	let integerValue = arraySplitFloat[0];
	let arrayFullStringValue = [integerValue, decimalsValue];
	let FullStringValue = arrayFullStringValue.join(".");
	let floatFullValue = parseFloat(FullStringValue);
	let formatFloatFullValue = new Intl.NumberFormat('es-ES', { minimumFractionDigits: decimals }).format(floatFullValue);
	return formatFloatFullValue;
}

Array.prototype.filterByModel = function(model) {
	let aModel, array = [];
	if(typeof model == 'array') {
		aModel = model;
	} else if(typeof model == 'object'){
		aModel = Object.keys(model);
	}
	this.forEach( item => {
		if(aModel.find(param => param == item)) {
			array.push(item);
		}
	});
	if(array.length) {
		return array;
	} else {
		return null;
	}
};
let filterByModel = function(project, model) {
	let aModel, modelValues, modelKeys, projectValues, projectKeys, object = [];

	if(typeof model == 'object'){
		projectValues = Object.values(project);
		projectKeys = Object.keys(project);
		projectKeys.forEach( (projectKey, i) => {
			if(modelKeys.find(param => param == projectKey)) {
				object[projectKey] = projectValues[i];
			}
		});
	}
	if(Object.keys(object).length) {
		return object;
	} else {
		return null;
	}
}

Array.prototype.isInto = function(term) {
	let into = false;
	for (let i = 0 ; i < this.length ; i++) {
		if(this[i] == term) {
			into = true;
		}
	}
	return into;
};

String.prototype.notIn = function(array) {
	let isIn = true;
	for (let i = 0 ; i < array.length ; i++) {
		if(array[i] == this) {
			isIn = false;
		}
	}
	return isIn;
};

String.prototype.isIn = function(array) {
	let notIn = false;
	for (let i = 0 ; i < array.length ; i++) {
		if(array[i] == this) {
			notIn = true;
		}
	}
	return notIn;
};

String.prototype.jsonParse = function () {
	try {
		let txt = this;
		txt = txt.replace(/\\n/g, "\\n")
			.replace(/\\'/g, "\\'")
			.replace(/\\"/g, '\\"')
			.replace(/\\&/g, "\\&")
			.replace(/\\r/g, "\\r")
			.replace(/\\t/g, "\\t")
			.replace(/\\b/g, "\\b")
			.replace(/\\f/g, "\\f")
			.replace(/\\f/g, "\\f")
			.replace(/(\r\n|\n|\r|\s)/gm, "").trim();
// remove non-printable and other non-valid JSON chars
		txt = txt.replace(/[\u0000-\u0019]+/g,"");
		if(!txt) {
			console.log('error')
		}
		return dJSON.parse(txt);
	} catch (e) {
		console.log(e);
	}
}

String.prototype.setDash = function () {
	if(this.indexOf('_') >= 0) {
		return this.replaceAll('_','-');
	} else {
		return this;
	}
}

String.prototype.setUnderDash = function () {
	if(this.indexOf('-') >= 0) {
		return this.replaceAll('-','_');
	} else {
		return this;
	}
}

function Char(str) {
	if (typeof str == 'string') {
		return true;
	}
	return false;
}

function Varchar(str) {
	if (typeof str == 'string') {
		return true;
	}
	return false;
}

function Text(str) {
	if (typeof str == 'string') {
		return true;
	}
	return false;
}

function Date(str) {
	if (typeof str == 'object') {
		return true;
	}
	return false;
}

function Datetime(str) {
	if (typeof str == 'object') {
		return true;
	}
	return false;
}

function Tinyint(str) {
	if (typeof str == 'number') {
		return true;
	}
	return false;
}

function Float(str) {
	if (typeof str == 'number') {
		return true;
	}
	return false;
}

function Blob(str) {
	if (typeof str == 'string') {
		return true;
	}
	return false;
}

function Boolean(str) {
	if (typeof str == 'boolean') {
		return true;
	}
	return false;
}

function PrimaryKeyTypeIsString(dataType) {
	if (dataType.hasStringAs('char')) {
		return true;
	} else if (dataType.hasStringAs('varchar')) {
		return true;
	} else if (dataType.hasStringAs('text')) {
		return true;
	}
	return false;
}

function PrimaryKeyTypeIsInteger(dataType) {
	if (dataType.hasStringAs('int')) {
		return true;
	} else if (dataType.hasStringAs('bigint')) {
		return true;
	} else if (dataType.hasStringAs('tinyint')) {
		return true;
	}
	return false;
}

function formatNumber (num, decimals = 0){
	let stringFloat = num + "";
	let arraySplitFloat = stringFloat.split(".");
	let decimalsValue = "0";
	if (arraySplitFloat.length > 1) {
		decimalsValue = arraySplitFloat[1].slice(0, decimals);
	}
	let integerValue = arraySplitFloat[0];
	let arrayFullStringValue = [integerValue, decimalsValue];
	let FullStringValue = arrayFullStringValue.join(".");
	let floatFullValue = parseFloat(FullStringValue);
	let formatFloatFullValue = new Intl.NumberFormat('es-ES', { minimumFractionDigits: decimals }).format(floatFullValue);
	return formatFloatFullValue;
}
