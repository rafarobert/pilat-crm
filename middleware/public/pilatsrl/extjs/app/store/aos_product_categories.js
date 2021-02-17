/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:45 GMT-0400 (Bolivia Time)
 * Time: 2:41:45
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:45 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:45
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section> 
Ext.define('es.store.aos_product_categories', {
    extend: 'Ext.data.Store',
    model: 'es.model.aos_product_categories',
    autoLoad: true,
    autoSync: true,
    remoteFilter: true
});
//</es-section>