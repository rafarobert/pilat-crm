/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:40:51 GMT-0400 (Bolivia Time)
 * Time: 2:40:51
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:40:51 GMT-0400 (Bolivia Time)
 * Last time updated: 2:40:51
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section> 
Ext.define('es.store.accounts_opportunities', {
    extend: 'Ext.data.Store',
    model: 'es.model.accounts_opportunities',
    autoLoad: true,
    autoSync: true,
    remoteFilter: true
});
//</es-section>
