/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:49 GMT-0400 (Bolivia Time)
 * Time: 2:41:49
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:49 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:49
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section> 
Ext.define('es.store.aos_quotes_aos_invoices_c', {
    extend: 'Ext.data.Store',
    model: 'es.model.aos_quotes_aos_invoices_c',
    autoLoad: true,
    autoSync: true,
    remoteFilter: true
});
//</es-section>
