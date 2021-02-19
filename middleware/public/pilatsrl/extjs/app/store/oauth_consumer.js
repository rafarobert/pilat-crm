/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:20 GMT-0400 (Bolivia Time)
 * Time: 2:43:20
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:20 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:20
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section> 
Ext.define('es.store.oauth_consumer', {
    extend: 'Ext.data.Store',
    model: 'es.model.oauth_consumer',
    autoLoad: true,
    autoSync: true,
    remoteFilter: true
});
//</es-section>
