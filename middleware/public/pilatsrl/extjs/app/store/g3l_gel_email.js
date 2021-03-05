/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:55 GMT-0400 (Bolivia Time)
 * Time: 14:0:55
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:55 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:55
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section> 
Ext.define('es.store.g3l_gel_email', {
    extend: 'Ext.data.Store',
    model: 'es.model.g3l_gel_email',
    autoLoad: true,
    autoSync: true,
    remoteFilter: true
});
//</es-section>
