/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 02:25:38 GMT-0400 (Bolivia Time)
 * Time: 2:25:38
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 02:25:38 GMT-0400 (Bolivia Time)
 * Last time updated: 2:25:38
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section> 
Ext.define('es.store.esObjectAttributeInstances', {
    extend: 'Ext.data.Store',
    model: 'es.model.esObjectAttributeInstances',
    autoLoad: true,
    autoSync: true,
    remoteFilter: true
});
//</es-section>
