/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 02:25:36 GMT-0400 (Bolivia Time)
 * Time: 2:25:36
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 02:25:36 GMT-0400 (Bolivia Time)
 * Last time updated: 2:25:36
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section> 
Ext.define('es.store.esRoleProfiles', {
    extend: 'Ext.data.Store',
    model: 'es.model.esRoleProfiles',
    autoLoad: true,
    autoSync: true,
    remoteFilter: true
});
//</es-section>
