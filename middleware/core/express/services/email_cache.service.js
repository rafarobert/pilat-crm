/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:48 GMT-0400 (Bolivia Time)
 * Time: 14:56:48
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:48 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:48
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

class EmailCacheService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	
	static async findOneByRecent(recent, query = {}) {
    	try {
    		let objEmailCache;
    		if(sql) {
    			objEmailCache = await models.sequelize.emailCache.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { recent: recent },
    			});
    		} else {
    			objEmailCache = await models.mongoose.emailCache.findOne({recent: recent});
    		}
    		return objEmailCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFlagged(flagged, query = {}) {
    	try {
    		let objEmailCache;
    		if(sql) {
    			objEmailCache = await models.sequelize.emailCache.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { flagged: flagged },
    			});
    		} else {
    			objEmailCache = await models.mongoose.emailCache.findOne({flagged: flagged});
    		}
    		return objEmailCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAnswered(answered, query = {}) {
    	try {
    		let objEmailCache;
    		if(sql) {
    			objEmailCache = await models.sequelize.emailCache.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { answered: answered },
    			});
    		} else {
    			objEmailCache = await models.mongoose.emailCache.findOne({answered: answered});
    		}
    		return objEmailCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objEmailCache;
    		if(sql) {
    			objEmailCache = await models.sequelize.emailCache.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objEmailCache = await models.mongoose.emailCache.findOne({deleted: deleted});
    		}
    		return objEmailCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySeen(seen, query = {}) {
    	try {
    		let objEmailCache;
    		if(sql) {
    			objEmailCache = await models.sequelize.emailCache.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { seen: seen },
    			});
    		} else {
    			objEmailCache = await models.mongoose.emailCache.findOne({seen: seen});
    		}
    		return objEmailCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDraft(draft, query = {}) {
    	try {
    		let objEmailCache;
    		if(sql) {
    			objEmailCache = await models.sequelize.emailCache.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { draft: draft },
    			});
    		} else {
    			objEmailCache = await models.mongoose.emailCache.findOne({draft: draft});
    		}
    		return objEmailCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMailsize(mailsize, query = {}) {
    	try {
    		let objEmailCache;
    		if(sql) {
    			objEmailCache = await models.sequelize.emailCache.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { mailsize: mailsize },
    			});
    		} else {
    			objEmailCache = await models.mongoose.emailCache.findOne({mailsize: mailsize});
    		}
    		return objEmailCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByImapUid(imapUid, query = {}) {
    	try {
    		let objEmailCache;
    		if(sql) {
    			objEmailCache = await models.sequelize.emailCache.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { imap_uid: imapUid },
    			});
    		} else {
    			objEmailCache = await models.mongoose.emailCache.findOne({imap_uid: imapUid});
    		}
    		return objEmailCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMsgno(msgno, query = {}) {
    	try {
    		let objEmailCache;
    		if(sql) {
    			objEmailCache = await models.sequelize.emailCache.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { msgno: msgno },
    			});
    		} else {
    			objEmailCache = await models.mongoose.emailCache.findOne({msgno: msgno});
    		}
    		return objEmailCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMbox(mbox, query = {}) {
    	try {
    		let objEmailCache;
    		if(sql) {
    			objEmailCache = await models.sequelize.emailCache.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { mbox: mbox },
    			});
    		} else {
    			objEmailCache = await models.mongoose.emailCache.findOne({mbox: mbox});
    		}
    		return objEmailCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySubject(subject, query = {}) {
    	try {
    		let objEmailCache;
    		if(sql) {
    			objEmailCache = await models.sequelize.emailCache.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { subject: subject },
    			});
    		} else {
    			objEmailCache = await models.mongoose.emailCache.findOne({subject: subject});
    		}
    		return objEmailCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFromaddr(fromaddr, query = {}) {
    	try {
    		let objEmailCache;
    		if(sql) {
    			objEmailCache = await models.sequelize.emailCache.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { fromaddr: fromaddr },
    			});
    		} else {
    			objEmailCache = await models.mongoose.emailCache.findOne({fromaddr: fromaddr});
    		}
    		return objEmailCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByToaddr(toaddr, query = {}) {
    	try {
    		let objEmailCache;
    		if(sql) {
    			objEmailCache = await models.sequelize.emailCache.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { toaddr: toaddr },
    			});
    		} else {
    			objEmailCache = await models.mongoose.emailCache.findOne({toaddr: toaddr});
    		}
    		return objEmailCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMessageId(messageId, query = {}) {
    	try {
    		let objEmailCache;
    		if(sql) {
    			objEmailCache = await models.sequelize.emailCache.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { message_id: messageId },
    			});
    		} else {
    			objEmailCache = await models.mongoose.emailCache.findOne({message_id: messageId});
    		}
    		return objEmailCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySenddate(senddate, query = {}) {
    	try {
    		let objEmailCache;
    		if(sql) {
    			objEmailCache = await models.sequelize.emailCache.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { senddate: senddate },
    			});
    		} else {
    			objEmailCache = await models.mongoose.emailCache.findOne({senddate: senddate});
    		}
    		return objEmailCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByIeId(ieId, query = {}) {
    	try {
    		let objEmailCache;
    		if(sql) {
    			objEmailCache = await models.sequelize.emailCache.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { ie_id: ieId },
    			});
    		} else {
    			objEmailCache = await models.mongoose.emailCache.findOne({ie_id: ieId});
    		}
    		return objEmailCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateEmailCacheByRecent(recent, updateEmailCache) {
    	try {
    		let objEmailCache;
    		if(sql) {
    			objEmailCache = await models.sequelize.emailCache.findOne({where: { recent: recent }});
    			if (objEmailCache) {
    				objEmailCache = await models.sequelize.emailCache.update(updateEmailCache, { where: { recent: recent } });
    			}
    		} else {
    			objEmailCache = await models.mongoose.emailCache.findOneAndUpdate({recent: recent}, {$set: updateEmailCache}, {new: true});
    		}
    		return objEmailCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailCacheByFlagged(flagged, updateEmailCache) {
    	try {
    		let objEmailCache;
    		if(sql) {
    			objEmailCache = await models.sequelize.emailCache.findOne({where: { flagged: flagged }});
    			if (objEmailCache) {
    				objEmailCache = await models.sequelize.emailCache.update(updateEmailCache, { where: { flagged: flagged } });
    			}
    		} else {
    			objEmailCache = await models.mongoose.emailCache.findOneAndUpdate({flagged: flagged}, {$set: updateEmailCache}, {new: true});
    		}
    		return objEmailCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailCacheByAnswered(answered, updateEmailCache) {
    	try {
    		let objEmailCache;
    		if(sql) {
    			objEmailCache = await models.sequelize.emailCache.findOne({where: { answered: answered }});
    			if (objEmailCache) {
    				objEmailCache = await models.sequelize.emailCache.update(updateEmailCache, { where: { answered: answered } });
    			}
    		} else {
    			objEmailCache = await models.mongoose.emailCache.findOneAndUpdate({answered: answered}, {$set: updateEmailCache}, {new: true});
    		}
    		return objEmailCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailCacheByDeleted(deleted, updateEmailCache) {
    	try {
    		let objEmailCache;
    		if(sql) {
    			objEmailCache = await models.sequelize.emailCache.findOne({where: { deleted: deleted }});
    			if (objEmailCache) {
    				objEmailCache = await models.sequelize.emailCache.update(updateEmailCache, { where: { deleted: deleted } });
    			}
    		} else {
    			objEmailCache = await models.mongoose.emailCache.findOneAndUpdate({deleted: deleted}, {$set: updateEmailCache}, {new: true});
    		}
    		return objEmailCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailCacheBySeen(seen, updateEmailCache) {
    	try {
    		let objEmailCache;
    		if(sql) {
    			objEmailCache = await models.sequelize.emailCache.findOne({where: { seen: seen }});
    			if (objEmailCache) {
    				objEmailCache = await models.sequelize.emailCache.update(updateEmailCache, { where: { seen: seen } });
    			}
    		} else {
    			objEmailCache = await models.mongoose.emailCache.findOneAndUpdate({seen: seen}, {$set: updateEmailCache}, {new: true});
    		}
    		return objEmailCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailCacheByDraft(draft, updateEmailCache) {
    	try {
    		let objEmailCache;
    		if(sql) {
    			objEmailCache = await models.sequelize.emailCache.findOne({where: { draft: draft }});
    			if (objEmailCache) {
    				objEmailCache = await models.sequelize.emailCache.update(updateEmailCache, { where: { draft: draft } });
    			}
    		} else {
    			objEmailCache = await models.mongoose.emailCache.findOneAndUpdate({draft: draft}, {$set: updateEmailCache}, {new: true});
    		}
    		return objEmailCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailCacheByMailsize(mailsize, updateEmailCache) {
    	try {
    		let objEmailCache;
    		if(sql) {
    			objEmailCache = await models.sequelize.emailCache.findOne({where: { mailsize: mailsize }});
    			if (objEmailCache) {
    				objEmailCache = await models.sequelize.emailCache.update(updateEmailCache, { where: { mailsize: mailsize } });
    			}
    		} else {
    			objEmailCache = await models.mongoose.emailCache.findOneAndUpdate({mailsize: mailsize}, {$set: updateEmailCache}, {new: true});
    		}
    		return objEmailCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailCacheByImapUid(imapUid, updateEmailCache) {
    	try {
    		let objEmailCache;
    		if(sql) {
    			objEmailCache = await models.sequelize.emailCache.findOne({where: { imap_uid: imapUid }});
    			if (objEmailCache) {
    				objEmailCache = await models.sequelize.emailCache.update(updateEmailCache, { where: { imap_uid: imapUid } });
    			}
    		} else {
    			objEmailCache = await models.mongoose.emailCache.findOneAndUpdate({imap_uid: imapUid}, {$set: updateEmailCache}, {new: true});
    		}
    		return objEmailCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailCacheByMsgno(msgno, updateEmailCache) {
    	try {
    		let objEmailCache;
    		if(sql) {
    			objEmailCache = await models.sequelize.emailCache.findOne({where: { msgno: msgno }});
    			if (objEmailCache) {
    				objEmailCache = await models.sequelize.emailCache.update(updateEmailCache, { where: { msgno: msgno } });
    			}
    		} else {
    			objEmailCache = await models.mongoose.emailCache.findOneAndUpdate({msgno: msgno}, {$set: updateEmailCache}, {new: true});
    		}
    		return objEmailCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailCacheByMbox(mbox, updateEmailCache) {
    	try {
    		let objEmailCache;
    		if(sql) {
    			objEmailCache = await models.sequelize.emailCache.findOne({where: { mbox: mbox }});
    			if (objEmailCache) {
    				objEmailCache = await models.sequelize.emailCache.update(updateEmailCache, { where: { mbox: mbox } });
    			}
    		} else {
    			objEmailCache = await models.mongoose.emailCache.findOneAndUpdate({mbox: mbox}, {$set: updateEmailCache}, {new: true});
    		}
    		return objEmailCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailCacheBySubject(subject, updateEmailCache) {
    	try {
    		let objEmailCache;
    		if(sql) {
    			objEmailCache = await models.sequelize.emailCache.findOne({where: { subject: subject }});
    			if (objEmailCache) {
    				objEmailCache = await models.sequelize.emailCache.update(updateEmailCache, { where: { subject: subject } });
    			}
    		} else {
    			objEmailCache = await models.mongoose.emailCache.findOneAndUpdate({subject: subject}, {$set: updateEmailCache}, {new: true});
    		}
    		return objEmailCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailCacheByFromaddr(fromaddr, updateEmailCache) {
    	try {
    		let objEmailCache;
    		if(sql) {
    			objEmailCache = await models.sequelize.emailCache.findOne({where: { fromaddr: fromaddr }});
    			if (objEmailCache) {
    				objEmailCache = await models.sequelize.emailCache.update(updateEmailCache, { where: { fromaddr: fromaddr } });
    			}
    		} else {
    			objEmailCache = await models.mongoose.emailCache.findOneAndUpdate({fromaddr: fromaddr}, {$set: updateEmailCache}, {new: true});
    		}
    		return objEmailCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailCacheByToaddr(toaddr, updateEmailCache) {
    	try {
    		let objEmailCache;
    		if(sql) {
    			objEmailCache = await models.sequelize.emailCache.findOne({where: { toaddr: toaddr }});
    			if (objEmailCache) {
    				objEmailCache = await models.sequelize.emailCache.update(updateEmailCache, { where: { toaddr: toaddr } });
    			}
    		} else {
    			objEmailCache = await models.mongoose.emailCache.findOneAndUpdate({toaddr: toaddr}, {$set: updateEmailCache}, {new: true});
    		}
    		return objEmailCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailCacheByMessageId(messageId, updateEmailCache) {
    	try {
    		let objEmailCache;
    		if(sql) {
    			objEmailCache = await models.sequelize.emailCache.findOne({where: { message_id: messageId }});
    			if (objEmailCache) {
    				objEmailCache = await models.sequelize.emailCache.update(updateEmailCache, { where: { message_id: messageId } });
    			}
    		} else {
    			objEmailCache = await models.mongoose.emailCache.findOneAndUpdate({message_id: messageId}, {$set: updateEmailCache}, {new: true});
    		}
    		return objEmailCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailCacheBySenddate(senddate, updateEmailCache) {
    	try {
    		let objEmailCache;
    		if(sql) {
    			objEmailCache = await models.sequelize.emailCache.findOne({where: { senddate: senddate }});
    			if (objEmailCache) {
    				objEmailCache = await models.sequelize.emailCache.update(updateEmailCache, { where: { senddate: senddate } });
    			}
    		} else {
    			objEmailCache = await models.mongoose.emailCache.findOneAndUpdate({senddate: senddate}, {$set: updateEmailCache}, {new: true});
    		}
    		return objEmailCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailCacheByIeId(ieId, updateEmailCache) {
    	try {
    		let objEmailCache;
    		if(sql) {
    			objEmailCache = await models.sequelize.emailCache.findOne({where: { ie_id: ieId }});
    			if (objEmailCache) {
    				objEmailCache = await models.sequelize.emailCache.update(updateEmailCache, { where: { ie_id: ieId } });
    			}
    		} else {
    			objEmailCache = await models.mongoose.emailCache.findOneAndUpdate({ie_id: ieId}, {$set: updateEmailCache}, {new: true});
    		}
    		return objEmailCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = EmailCacheService;
//</es-section>
