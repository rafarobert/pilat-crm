/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:40:58 GMT-0400 (Bolivia Time)
 * Time: 2:40:58
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:40:58 GMT-0400 (Bolivia Time)
 * Last time updated: 2:40:58
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section> 
Ext.define('es.store.am_projecttemplates', {
    extend: 'Ext.data.Store',
    model: 'es.model.am_projecttemplates',
    autoLoad: true,
    autoSync: true,
    remoteFilter: true
});
//</es-section>
