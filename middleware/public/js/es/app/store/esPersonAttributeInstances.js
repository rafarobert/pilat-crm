/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 02:25:40 GMT-0400 (Bolivia Time)
 * Time: 2:25:40
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 02:25:40 GMT-0400 (Bolivia Time)
 * Last time updated: 2:25:40
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section> 
Ext.define('es.store.esPersonAttributeInstances', {
    extend: 'Ext.data.Store',
    model: 'es.model.esPersonAttributeInstances',
    autoLoad: true,
    autoSync: true,
    remoteFilter: true
});
//</es-section>
