/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:54 GMT-0400 (Bolivia Time)
 * Time: 2:41:54
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:54 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:54
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section> 
Ext.define('es.store.aow_processed', {
    extend: 'Ext.data.Store',
    model: 'es.model.aow_processed',
    autoLoad: true,
    autoSync: true,
    remoteFilter: true
});
//</es-section>
