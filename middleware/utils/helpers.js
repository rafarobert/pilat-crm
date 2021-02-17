module.exports.setByModel = setByModel = (project, model, fields = []) => {
	let object = {};
	let projectKeys = Object.keys(project);
	let modelKeys = Object.keys(model);
	for (let i = 0 ; i < projectKeys.length ; i++) {
		let projectKey = projectKeys[i];
		if(modelKeys.find(param => param == projectKey)){
			if(!Object.keys(object).find(param => param == projectKey)){
				object[projectKey] = 1;
			}
		}
	}
	for (let i = 0 ; i < fields.length ; i++) {
		let field = fields[i];
		if(modelKeys.find(param => param == field)){
			if(!Object.keys(object).find(param => param == field)){
				object[field] = 1;
			}
		}
	}
	if(!Object.keys(project).length) {
		for (let k = 0 ; k < modelKeys.length ; k++) {
			let modelKey = modelKeys[k];
			if(modelKey != '__v') {
				if(!Object.keys(object).find(param => param == modelKey)){
					object[modelKey] = 1;
				}
			}
		}
	}
	console.log(object);
	return object;
};
