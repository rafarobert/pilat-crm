/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:53 GMT-0400 (Bolivia Time)
 * Time: 18:36:53
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:53 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:53
 *
 * Caution: es-sections will be replaced by script execution
 */

require('../../../utils/Prototipes');
const helpers = require('../../../utils/helpers');
const bcrypt = require("bcrypt");
const models = require('../index');
const Util = require('../../../utils/Utils');
const util = new Util();

import configJson from '../../../config/config';
const sql = configJson.sql;

const { Op } = require("sequelize");

//<es-section>

//</es-section>

class CustomFieldService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objCustomField;
    		if(sql) {
    			objCustomField = await models.sequelize.customFields.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objCustomField = await models.mongoose.customFields.findOne({deleted: deleted});
    		}
    		return objCustomField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySetNum(setNum, query = {}) {
    	try {
    		let objCustomField;
    		if(sql) {
    			objCustomField = await models.sequelize.customFields.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { set_num: setNum },
    			});
    		} else {
    			objCustomField = await models.mongoose.customFields.findOne({set_num: setNum});
    		}
    		return objCustomField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeanId(beanId, query = {}) {
    	try {
    		let objCustomField;
    		if(sql) {
    			objCustomField = await models.sequelize.customFields.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { bean_id: beanId },
    			});
    		} else {
    			objCustomField = await models.mongoose.customFields.findOne({bean_id: beanId});
    		}
    		return objCustomField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByField0(field0, query = {}) {
    	try {
    		let objCustomField;
    		if(sql) {
    			objCustomField = await models.sequelize.customFields.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field0: field0 },
    			});
    		} else {
    			objCustomField = await models.mongoose.customFields.findOne({field0: field0});
    		}
    		return objCustomField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByField1(field1, query = {}) {
    	try {
    		let objCustomField;
    		if(sql) {
    			objCustomField = await models.sequelize.customFields.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field1: field1 },
    			});
    		} else {
    			objCustomField = await models.mongoose.customFields.findOne({field1: field1});
    		}
    		return objCustomField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByField2(field2, query = {}) {
    	try {
    		let objCustomField;
    		if(sql) {
    			objCustomField = await models.sequelize.customFields.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field2: field2 },
    			});
    		} else {
    			objCustomField = await models.mongoose.customFields.findOne({field2: field2});
    		}
    		return objCustomField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByField3(field3, query = {}) {
    	try {
    		let objCustomField;
    		if(sql) {
    			objCustomField = await models.sequelize.customFields.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field3: field3 },
    			});
    		} else {
    			objCustomField = await models.mongoose.customFields.findOne({field3: field3});
    		}
    		return objCustomField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByField4(field4, query = {}) {
    	try {
    		let objCustomField;
    		if(sql) {
    			objCustomField = await models.sequelize.customFields.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field4: field4 },
    			});
    		} else {
    			objCustomField = await models.mongoose.customFields.findOne({field4: field4});
    		}
    		return objCustomField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByField5(field5, query = {}) {
    	try {
    		let objCustomField;
    		if(sql) {
    			objCustomField = await models.sequelize.customFields.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field5: field5 },
    			});
    		} else {
    			objCustomField = await models.mongoose.customFields.findOne({field5: field5});
    		}
    		return objCustomField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByField6(field6, query = {}) {
    	try {
    		let objCustomField;
    		if(sql) {
    			objCustomField = await models.sequelize.customFields.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field6: field6 },
    			});
    		} else {
    			objCustomField = await models.mongoose.customFields.findOne({field6: field6});
    		}
    		return objCustomField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByField7(field7, query = {}) {
    	try {
    		let objCustomField;
    		if(sql) {
    			objCustomField = await models.sequelize.customFields.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field7: field7 },
    			});
    		} else {
    			objCustomField = await models.mongoose.customFields.findOne({field7: field7});
    		}
    		return objCustomField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByField8(field8, query = {}) {
    	try {
    		let objCustomField;
    		if(sql) {
    			objCustomField = await models.sequelize.customFields.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field8: field8 },
    			});
    		} else {
    			objCustomField = await models.mongoose.customFields.findOne({field8: field8});
    		}
    		return objCustomField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByField9(field9, query = {}) {
    	try {
    		let objCustomField;
    		if(sql) {
    			objCustomField = await models.sequelize.customFields.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field9: field9 },
    			});
    		} else {
    			objCustomField = await models.mongoose.customFields.findOne({field9: field9});
    		}
    		return objCustomField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateCustomFieldByDeleted(deleted, updateCustomField) {
    	try {
    		let objCustomField;
    		if(sql) {
    			objCustomField = await models.sequelize.customFields.findOne({where: { deleted: deleted }});
    			if (objCustomField) {
    				objCustomField = await models.sequelize.customFields.update(updateCustomField, { where: { deleted: deleted } });
    			}
    		} else {
    			objCustomField = await models.mongoose.customFields.findOneAndUpdate({deleted: deleted}, {$set: updateCustomField}, {new: true});
    		}
    		return objCustomField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCustomFieldBySetNum(setNum, updateCustomField) {
    	try {
    		let objCustomField;
    		if(sql) {
    			objCustomField = await models.sequelize.customFields.findOne({where: { set_num: setNum }});
    			if (objCustomField) {
    				objCustomField = await models.sequelize.customFields.update(updateCustomField, { where: { set_num: setNum } });
    			}
    		} else {
    			objCustomField = await models.mongoose.customFields.findOneAndUpdate({set_num: setNum}, {$set: updateCustomField}, {new: true});
    		}
    		return objCustomField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCustomFieldByBeanId(beanId, updateCustomField) {
    	try {
    		let objCustomField;
    		if(sql) {
    			objCustomField = await models.sequelize.customFields.findOne({where: { bean_id: beanId }});
    			if (objCustomField) {
    				objCustomField = await models.sequelize.customFields.update(updateCustomField, { where: { bean_id: beanId } });
    			}
    		} else {
    			objCustomField = await models.mongoose.customFields.findOneAndUpdate({bean_id: beanId}, {$set: updateCustomField}, {new: true});
    		}
    		return objCustomField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCustomFieldByField0(field0, updateCustomField) {
    	try {
    		let objCustomField;
    		if(sql) {
    			objCustomField = await models.sequelize.customFields.findOne({where: { field0: field0 }});
    			if (objCustomField) {
    				objCustomField = await models.sequelize.customFields.update(updateCustomField, { where: { field0: field0 } });
    			}
    		} else {
    			objCustomField = await models.mongoose.customFields.findOneAndUpdate({field0: field0}, {$set: updateCustomField}, {new: true});
    		}
    		return objCustomField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCustomFieldByField1(field1, updateCustomField) {
    	try {
    		let objCustomField;
    		if(sql) {
    			objCustomField = await models.sequelize.customFields.findOne({where: { field1: field1 }});
    			if (objCustomField) {
    				objCustomField = await models.sequelize.customFields.update(updateCustomField, { where: { field1: field1 } });
    			}
    		} else {
    			objCustomField = await models.mongoose.customFields.findOneAndUpdate({field1: field1}, {$set: updateCustomField}, {new: true});
    		}
    		return objCustomField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCustomFieldByField2(field2, updateCustomField) {
    	try {
    		let objCustomField;
    		if(sql) {
    			objCustomField = await models.sequelize.customFields.findOne({where: { field2: field2 }});
    			if (objCustomField) {
    				objCustomField = await models.sequelize.customFields.update(updateCustomField, { where: { field2: field2 } });
    			}
    		} else {
    			objCustomField = await models.mongoose.customFields.findOneAndUpdate({field2: field2}, {$set: updateCustomField}, {new: true});
    		}
    		return objCustomField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCustomFieldByField3(field3, updateCustomField) {
    	try {
    		let objCustomField;
    		if(sql) {
    			objCustomField = await models.sequelize.customFields.findOne({where: { field3: field3 }});
    			if (objCustomField) {
    				objCustomField = await models.sequelize.customFields.update(updateCustomField, { where: { field3: field3 } });
    			}
    		} else {
    			objCustomField = await models.mongoose.customFields.findOneAndUpdate({field3: field3}, {$set: updateCustomField}, {new: true});
    		}
    		return objCustomField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCustomFieldByField4(field4, updateCustomField) {
    	try {
    		let objCustomField;
    		if(sql) {
    			objCustomField = await models.sequelize.customFields.findOne({where: { field4: field4 }});
    			if (objCustomField) {
    				objCustomField = await models.sequelize.customFields.update(updateCustomField, { where: { field4: field4 } });
    			}
    		} else {
    			objCustomField = await models.mongoose.customFields.findOneAndUpdate({field4: field4}, {$set: updateCustomField}, {new: true});
    		}
    		return objCustomField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCustomFieldByField5(field5, updateCustomField) {
    	try {
    		let objCustomField;
    		if(sql) {
    			objCustomField = await models.sequelize.customFields.findOne({where: { field5: field5 }});
    			if (objCustomField) {
    				objCustomField = await models.sequelize.customFields.update(updateCustomField, { where: { field5: field5 } });
    			}
    		} else {
    			objCustomField = await models.mongoose.customFields.findOneAndUpdate({field5: field5}, {$set: updateCustomField}, {new: true});
    		}
    		return objCustomField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCustomFieldByField6(field6, updateCustomField) {
    	try {
    		let objCustomField;
    		if(sql) {
    			objCustomField = await models.sequelize.customFields.findOne({where: { field6: field6 }});
    			if (objCustomField) {
    				objCustomField = await models.sequelize.customFields.update(updateCustomField, { where: { field6: field6 } });
    			}
    		} else {
    			objCustomField = await models.mongoose.customFields.findOneAndUpdate({field6: field6}, {$set: updateCustomField}, {new: true});
    		}
    		return objCustomField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCustomFieldByField7(field7, updateCustomField) {
    	try {
    		let objCustomField;
    		if(sql) {
    			objCustomField = await models.sequelize.customFields.findOne({where: { field7: field7 }});
    			if (objCustomField) {
    				objCustomField = await models.sequelize.customFields.update(updateCustomField, { where: { field7: field7 } });
    			}
    		} else {
    			objCustomField = await models.mongoose.customFields.findOneAndUpdate({field7: field7}, {$set: updateCustomField}, {new: true});
    		}
    		return objCustomField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCustomFieldByField8(field8, updateCustomField) {
    	try {
    		let objCustomField;
    		if(sql) {
    			objCustomField = await models.sequelize.customFields.findOne({where: { field8: field8 }});
    			if (objCustomField) {
    				objCustomField = await models.sequelize.customFields.update(updateCustomField, { where: { field8: field8 } });
    			}
    		} else {
    			objCustomField = await models.mongoose.customFields.findOneAndUpdate({field8: field8}, {$set: updateCustomField}, {new: true});
    		}
    		return objCustomField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCustomFieldByField9(field9, updateCustomField) {
    	try {
    		let objCustomField;
    		if(sql) {
    			objCustomField = await models.sequelize.customFields.findOne({where: { field9: field9 }});
    			if (objCustomField) {
    				objCustomField = await models.sequelize.customFields.update(updateCustomField, { where: { field9: field9 } });
    			}
    		} else {
    			objCustomField = await models.mongoose.customFields.findOneAndUpdate({field9: field9}, {$set: updateCustomField}, {new: true});
    		}
    		return objCustomField;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = CustomFieldService;
//</es-section>
