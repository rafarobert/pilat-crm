/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:22 GMT-0400 (Bolivia Time)
 * Time: 2:43:22
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:22 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:22
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section> 
Ext.define('es.store.oauth_tokens', {
    extend: 'Ext.data.Store',
    model: 'es.model.oauth_tokens',
    autoLoad: true,
    autoSync: true,
    remoteFilter: true
});
//</es-section>
