/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:54 GMT-0400 (Bolivia Time)
 * Time: 2:43:54
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:54 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:54
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section> 
Ext.define('es.store.prospect_list_campaigns', {
    extend: 'Ext.data.Store',
    model: 'es.model.prospect_list_campaigns',
    autoLoad: true,
    autoSync: true,
    remoteFilter: true
});
//</es-section>
