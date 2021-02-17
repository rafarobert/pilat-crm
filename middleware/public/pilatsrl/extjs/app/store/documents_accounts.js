/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:23 GMT-0400 (Bolivia Time)
 * Time: 2:42:23
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:23 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:23
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section> 
Ext.define('es.store.documents_accounts', {
    extend: 'Ext.data.Store',
    model: 'es.model.documents_accounts',
    autoLoad: true,
    autoSync: true,
    remoteFilter: true
});
//</es-section>
