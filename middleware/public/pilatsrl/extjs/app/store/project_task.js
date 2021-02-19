/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:45 GMT-0400 (Bolivia Time)
 * Time: 2:43:45
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:45 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:45
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section> 
Ext.define('es.store.project_task', {
    extend: 'Ext.data.Store',
    model: 'es.model.project_task',
    autoLoad: true,
    autoSync: true,
    remoteFilter: true
});
//</es-section>
