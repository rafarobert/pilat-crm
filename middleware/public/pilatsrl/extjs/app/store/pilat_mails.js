/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 12 2021 12:54:05 GMT-0400 (Bolivia Time)
 * Time: 12:54:5
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 12 2021 12:54:05 GMT-0400 (Bolivia Time)
 * Last time updated: 12:54:5
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section> 
Ext.define('es.store.pilat_mails', {
    extend: 'Ext.data.Store',
    model: 'es.model.pilat_mails',
    autoLoad: true,
    autoSync: true,
    remoteFilter: true
});
//</es-section>
