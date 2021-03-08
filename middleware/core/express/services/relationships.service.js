/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:54 GMT-0400 (Bolivia Time)
 * Time: 15:36:54
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:54 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:54
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

class RelationshipService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllRelationships(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.relationships.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.relationships.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllRelationships(select = []) {
		try {
			if(sql) {
				return await models.sequelize.relationships.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.relationships.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addRelationship(newRelationship) {
		try {
			let objRelationship;
			if(util.PrimaryKeyTypeIsString(models.sequelize.relationships.primaryKeys.id.type.toString())) {
			    newRelationship.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objRelationship = await models.sequelize.relationships.create(newRelationship);
			} else {
				objRelationship = new models.mongoose.relationships(newRelationship);
				await objRelationship.save();
			}
			return objRelationship;
		} catch (error) {
			throw error;
		}
	}

	static async updateRelationship(id, updateRelationship) {
		try {
			let objRelationship;
			if(sql) {
				objRelationship = await models.sequelize.relationships.findOne({where: { id: util.Char(id) }});
				if (objRelationship) {
					await models.sequelize.relationships.update(updateRelationship, { where: { id: util.Char(id) } });
					objRelationship = await models.sequelize.relationships.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateRelationship._id;
				objRelationship = await models.mongoose.relationships.findOneAndUpdate({id:id}, {$set: updateRelationship}, {new: true});
			}
			return objRelationship;
		} catch (error) {
			throw error;
		}
	}

	static async getARelationship(id, query) {
		try {
			let objRelationship;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objRelationship = await models.sequelize.relationships.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objRelationship = await models.mongoose.relationships.find({id:util.Char(id)}).select(query.select);
			}
			return objRelationship;
		} catch (error) {
			throw error;
		}
	}

	static async deleteRelationship(id) {
		try {
			let objRelationship;
			if(sql) {
				objRelationship = await models.sequelize.relationships.findOne({ where: { id: util.Char(id) } });
				if (objRelationship) {
					await models.sequelize.relationships.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objRelationship = await models.mongoose.relationships.deleteOne({id:util.Char(id)});
			}
			return objRelationship;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objRelationship;
    		if(sql) {
    			objRelationship = await models.sequelize.relationships.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objRelationship = await models.mongoose.relationships.findOne({id: id});
    		}
    		return objRelationship;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByReverse(reverse, query = {}) {
    	try {
    		let objRelationship;
    		if(sql) {
    			objRelationship = await models.sequelize.relationships.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { reverse: reverse },
    			});
    		} else {
    			objRelationship = await models.mongoose.relationships.findOne({reverse: reverse});
    		}
    		return objRelationship;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objRelationship;
    		if(sql) {
    			objRelationship = await models.sequelize.relationships.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objRelationship = await models.mongoose.relationships.findOne({deleted: deleted});
    		}
    		return objRelationship;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRelationshipName(relationshipName, query = {}) {
    	try {
    		let objRelationship;
    		if(sql) {
    			objRelationship = await models.sequelize.relationships.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { relationship_name: relationshipName },
    			});
    		} else {
    			objRelationship = await models.mongoose.relationships.findOne({relationship_name: relationshipName});
    		}
    		return objRelationship;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLhsModule(lhsModule, query = {}) {
    	try {
    		let objRelationship;
    		if(sql) {
    			objRelationship = await models.sequelize.relationships.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { lhs_module: lhsModule },
    			});
    		} else {
    			objRelationship = await models.mongoose.relationships.findOne({lhs_module: lhsModule});
    		}
    		return objRelationship;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLhsTable(lhsTable, query = {}) {
    	try {
    		let objRelationship;
    		if(sql) {
    			objRelationship = await models.sequelize.relationships.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { lhs_table: lhsTable },
    			});
    		} else {
    			objRelationship = await models.mongoose.relationships.findOne({lhs_table: lhsTable});
    		}
    		return objRelationship;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLhsKey(lhsKey, query = {}) {
    	try {
    		let objRelationship;
    		if(sql) {
    			objRelationship = await models.sequelize.relationships.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { lhs_key: lhsKey },
    			});
    		} else {
    			objRelationship = await models.mongoose.relationships.findOne({lhs_key: lhsKey});
    		}
    		return objRelationship;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRhsModule(rhsModule, query = {}) {
    	try {
    		let objRelationship;
    		if(sql) {
    			objRelationship = await models.sequelize.relationships.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { rhs_module: rhsModule },
    			});
    		} else {
    			objRelationship = await models.mongoose.relationships.findOne({rhs_module: rhsModule});
    		}
    		return objRelationship;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRhsTable(rhsTable, query = {}) {
    	try {
    		let objRelationship;
    		if(sql) {
    			objRelationship = await models.sequelize.relationships.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { rhs_table: rhsTable },
    			});
    		} else {
    			objRelationship = await models.mongoose.relationships.findOne({rhs_table: rhsTable});
    		}
    		return objRelationship;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRhsKey(rhsKey, query = {}) {
    	try {
    		let objRelationship;
    		if(sql) {
    			objRelationship = await models.sequelize.relationships.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { rhs_key: rhsKey },
    			});
    		} else {
    			objRelationship = await models.mongoose.relationships.findOne({rhs_key: rhsKey});
    		}
    		return objRelationship;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJoinTable(joinTable, query = {}) {
    	try {
    		let objRelationship;
    		if(sql) {
    			objRelationship = await models.sequelize.relationships.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { join_table: joinTable },
    			});
    		} else {
    			objRelationship = await models.mongoose.relationships.findOne({join_table: joinTable});
    		}
    		return objRelationship;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJoinKeyLhs(joinKeyLhs, query = {}) {
    	try {
    		let objRelationship;
    		if(sql) {
    			objRelationship = await models.sequelize.relationships.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { join_key_lhs: joinKeyLhs },
    			});
    		} else {
    			objRelationship = await models.mongoose.relationships.findOne({join_key_lhs: joinKeyLhs});
    		}
    		return objRelationship;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJoinKeyRhs(joinKeyRhs, query = {}) {
    	try {
    		let objRelationship;
    		if(sql) {
    			objRelationship = await models.sequelize.relationships.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { join_key_rhs: joinKeyRhs },
    			});
    		} else {
    			objRelationship = await models.mongoose.relationships.findOne({join_key_rhs: joinKeyRhs});
    		}
    		return objRelationship;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRelationshipType(relationshipType, query = {}) {
    	try {
    		let objRelationship;
    		if(sql) {
    			objRelationship = await models.sequelize.relationships.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { relationship_type: relationshipType },
    			});
    		} else {
    			objRelationship = await models.mongoose.relationships.findOne({relationship_type: relationshipType});
    		}
    		return objRelationship;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRelationshipRoleColumn(relationshipRoleColumn, query = {}) {
    	try {
    		let objRelationship;
    		if(sql) {
    			objRelationship = await models.sequelize.relationships.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { relationship_role_column: relationshipRoleColumn },
    			});
    		} else {
    			objRelationship = await models.mongoose.relationships.findOne({relationship_role_column: relationshipRoleColumn});
    		}
    		return objRelationship;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRelationshipRoleColumnValue(relationshipRoleColumnValue, query = {}) {
    	try {
    		let objRelationship;
    		if(sql) {
    			objRelationship = await models.sequelize.relationships.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { relationship_role_column_value: relationshipRoleColumnValue },
    			});
    		} else {
    			objRelationship = await models.mongoose.relationships.findOne({relationship_role_column_value: relationshipRoleColumnValue});
    		}
    		return objRelationship;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateRelationshipById(id, updateRelationship) {
    	try {
    		let objRelationship;
    		if(sql) {
    			objRelationship = await models.sequelize.relationships.findOne({where: { id: id }});
    			if (objRelationship) {
    				objRelationship = await models.sequelize.relationships.update(updateRelationship, { where: { id: id } });
    			}
    		} else {
    			objRelationship = await models.mongoose.relationships.findOneAndUpdate({id: id}, {$set: updateRelationship}, {new: true});
    		}
    		return objRelationship;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateRelationshipByReverse(reverse, updateRelationship) {
    	try {
    		let objRelationship;
    		if(sql) {
    			objRelationship = await models.sequelize.relationships.findOne({where: { reverse: reverse }});
    			if (objRelationship) {
    				objRelationship = await models.sequelize.relationships.update(updateRelationship, { where: { reverse: reverse } });
    			}
    		} else {
    			objRelationship = await models.mongoose.relationships.findOneAndUpdate({reverse: reverse}, {$set: updateRelationship}, {new: true});
    		}
    		return objRelationship;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateRelationshipByDeleted(deleted, updateRelationship) {
    	try {
    		let objRelationship;
    		if(sql) {
    			objRelationship = await models.sequelize.relationships.findOne({where: { deleted: deleted }});
    			if (objRelationship) {
    				objRelationship = await models.sequelize.relationships.update(updateRelationship, { where: { deleted: deleted } });
    			}
    		} else {
    			objRelationship = await models.mongoose.relationships.findOneAndUpdate({deleted: deleted}, {$set: updateRelationship}, {new: true});
    		}
    		return objRelationship;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateRelationshipByRelationshipName(relationshipName, updateRelationship) {
    	try {
    		let objRelationship;
    		if(sql) {
    			objRelationship = await models.sequelize.relationships.findOne({where: { relationship_name: relationshipName }});
    			if (objRelationship) {
    				objRelationship = await models.sequelize.relationships.update(updateRelationship, { where: { relationship_name: relationshipName } });
    			}
    		} else {
    			objRelationship = await models.mongoose.relationships.findOneAndUpdate({relationship_name: relationshipName}, {$set: updateRelationship}, {new: true});
    		}
    		return objRelationship;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateRelationshipByLhsModule(lhsModule, updateRelationship) {
    	try {
    		let objRelationship;
    		if(sql) {
    			objRelationship = await models.sequelize.relationships.findOne({where: { lhs_module: lhsModule }});
    			if (objRelationship) {
    				objRelationship = await models.sequelize.relationships.update(updateRelationship, { where: { lhs_module: lhsModule } });
    			}
    		} else {
    			objRelationship = await models.mongoose.relationships.findOneAndUpdate({lhs_module: lhsModule}, {$set: updateRelationship}, {new: true});
    		}
    		return objRelationship;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateRelationshipByLhsTable(lhsTable, updateRelationship) {
    	try {
    		let objRelationship;
    		if(sql) {
    			objRelationship = await models.sequelize.relationships.findOne({where: { lhs_table: lhsTable }});
    			if (objRelationship) {
    				objRelationship = await models.sequelize.relationships.update(updateRelationship, { where: { lhs_table: lhsTable } });
    			}
    		} else {
    			objRelationship = await models.mongoose.relationships.findOneAndUpdate({lhs_table: lhsTable}, {$set: updateRelationship}, {new: true});
    		}
    		return objRelationship;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateRelationshipByLhsKey(lhsKey, updateRelationship) {
    	try {
    		let objRelationship;
    		if(sql) {
    			objRelationship = await models.sequelize.relationships.findOne({where: { lhs_key: lhsKey }});
    			if (objRelationship) {
    				objRelationship = await models.sequelize.relationships.update(updateRelationship, { where: { lhs_key: lhsKey } });
    			}
    		} else {
    			objRelationship = await models.mongoose.relationships.findOneAndUpdate({lhs_key: lhsKey}, {$set: updateRelationship}, {new: true});
    		}
    		return objRelationship;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateRelationshipByRhsModule(rhsModule, updateRelationship) {
    	try {
    		let objRelationship;
    		if(sql) {
    			objRelationship = await models.sequelize.relationships.findOne({where: { rhs_module: rhsModule }});
    			if (objRelationship) {
    				objRelationship = await models.sequelize.relationships.update(updateRelationship, { where: { rhs_module: rhsModule } });
    			}
    		} else {
    			objRelationship = await models.mongoose.relationships.findOneAndUpdate({rhs_module: rhsModule}, {$set: updateRelationship}, {new: true});
    		}
    		return objRelationship;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateRelationshipByRhsTable(rhsTable, updateRelationship) {
    	try {
    		let objRelationship;
    		if(sql) {
    			objRelationship = await models.sequelize.relationships.findOne({where: { rhs_table: rhsTable }});
    			if (objRelationship) {
    				objRelationship = await models.sequelize.relationships.update(updateRelationship, { where: { rhs_table: rhsTable } });
    			}
    		} else {
    			objRelationship = await models.mongoose.relationships.findOneAndUpdate({rhs_table: rhsTable}, {$set: updateRelationship}, {new: true});
    		}
    		return objRelationship;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateRelationshipByRhsKey(rhsKey, updateRelationship) {
    	try {
    		let objRelationship;
    		if(sql) {
    			objRelationship = await models.sequelize.relationships.findOne({where: { rhs_key: rhsKey }});
    			if (objRelationship) {
    				objRelationship = await models.sequelize.relationships.update(updateRelationship, { where: { rhs_key: rhsKey } });
    			}
    		} else {
    			objRelationship = await models.mongoose.relationships.findOneAndUpdate({rhs_key: rhsKey}, {$set: updateRelationship}, {new: true});
    		}
    		return objRelationship;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateRelationshipByJoinTable(joinTable, updateRelationship) {
    	try {
    		let objRelationship;
    		if(sql) {
    			objRelationship = await models.sequelize.relationships.findOne({where: { join_table: joinTable }});
    			if (objRelationship) {
    				objRelationship = await models.sequelize.relationships.update(updateRelationship, { where: { join_table: joinTable } });
    			}
    		} else {
    			objRelationship = await models.mongoose.relationships.findOneAndUpdate({join_table: joinTable}, {$set: updateRelationship}, {new: true});
    		}
    		return objRelationship;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateRelationshipByJoinKeyLhs(joinKeyLhs, updateRelationship) {
    	try {
    		let objRelationship;
    		if(sql) {
    			objRelationship = await models.sequelize.relationships.findOne({where: { join_key_lhs: joinKeyLhs }});
    			if (objRelationship) {
    				objRelationship = await models.sequelize.relationships.update(updateRelationship, { where: { join_key_lhs: joinKeyLhs } });
    			}
    		} else {
    			objRelationship = await models.mongoose.relationships.findOneAndUpdate({join_key_lhs: joinKeyLhs}, {$set: updateRelationship}, {new: true});
    		}
    		return objRelationship;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateRelationshipByJoinKeyRhs(joinKeyRhs, updateRelationship) {
    	try {
    		let objRelationship;
    		if(sql) {
    			objRelationship = await models.sequelize.relationships.findOne({where: { join_key_rhs: joinKeyRhs }});
    			if (objRelationship) {
    				objRelationship = await models.sequelize.relationships.update(updateRelationship, { where: { join_key_rhs: joinKeyRhs } });
    			}
    		} else {
    			objRelationship = await models.mongoose.relationships.findOneAndUpdate({join_key_rhs: joinKeyRhs}, {$set: updateRelationship}, {new: true});
    		}
    		return objRelationship;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateRelationshipByRelationshipType(relationshipType, updateRelationship) {
    	try {
    		let objRelationship;
    		if(sql) {
    			objRelationship = await models.sequelize.relationships.findOne({where: { relationship_type: relationshipType }});
    			if (objRelationship) {
    				objRelationship = await models.sequelize.relationships.update(updateRelationship, { where: { relationship_type: relationshipType } });
    			}
    		} else {
    			objRelationship = await models.mongoose.relationships.findOneAndUpdate({relationship_type: relationshipType}, {$set: updateRelationship}, {new: true});
    		}
    		return objRelationship;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateRelationshipByRelationshipRoleColumn(relationshipRoleColumn, updateRelationship) {
    	try {
    		let objRelationship;
    		if(sql) {
    			objRelationship = await models.sequelize.relationships.findOne({where: { relationship_role_column: relationshipRoleColumn }});
    			if (objRelationship) {
    				objRelationship = await models.sequelize.relationships.update(updateRelationship, { where: { relationship_role_column: relationshipRoleColumn } });
    			}
    		} else {
    			objRelationship = await models.mongoose.relationships.findOneAndUpdate({relationship_role_column: relationshipRoleColumn}, {$set: updateRelationship}, {new: true});
    		}
    		return objRelationship;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateRelationshipByRelationshipRoleColumnValue(relationshipRoleColumnValue, updateRelationship) {
    	try {
    		let objRelationship;
    		if(sql) {
    			objRelationship = await models.sequelize.relationships.findOne({where: { relationship_role_column_value: relationshipRoleColumnValue }});
    			if (objRelationship) {
    				objRelationship = await models.sequelize.relationships.update(updateRelationship, { where: { relationship_role_column_value: relationshipRoleColumnValue } });
    			}
    		} else {
    			objRelationship = await models.mongoose.relationships.findOneAndUpdate({relationship_role_column_value: relationshipRoleColumnValue}, {$set: updateRelationship}, {new: true});
    		}
    		return objRelationship;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = RelationshipService;
//</es-section>
