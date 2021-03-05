/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:02 GMT-0400 (Bolivia Time)
 * Time: 0:23:2
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:02 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:2
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section> 
Ext.define('es.store.g3l_gel_email_audit', {
    extend: 'Ext.data.Store',
    model: 'es.model.g3l_gel_email_audit',
    autoLoad: true,
    autoSync: true,
    remoteFilter: true
});
//</es-section>
