/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 03 2021 23:45:29 GMT-0400 (Bolivia Time)
 * Time: 23:45:29
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 03 2021 23:45:29 GMT-0400 (Bolivia Time)
 * Last time updated: 23:45:29
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section> 
Ext.define('es.store.pilat_modules', {
    extend: 'Ext.data.Store',
    model: 'es.model.pilat_modules',
    autoLoad: true,
    autoSync: true,
    remoteFilter: true
});
//</es-section>
