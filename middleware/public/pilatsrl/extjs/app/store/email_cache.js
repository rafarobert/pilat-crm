/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:35 GMT-0400 (Bolivia Time)
 * Time: 2:42:35
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:35 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:35
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section> 
Ext.define('es.store.email_cache', {
    extend: 'Ext.data.Store',
    model: 'es.model.email_cache',
    autoLoad: true,
    autoSync: true,
    remoteFilter: true
});
//</es-section>