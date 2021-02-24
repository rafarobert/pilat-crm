/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:10 GMT-0400 (Bolivia Time)
 * Time: 2:42:10
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:10 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:10
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section> 
Ext.define('es.store.campaign_trkrs', {
    extend: 'Ext.data.Store',
    model: 'es.model.campaign_trkrs',
    autoLoad: true,
    autoSync: true,
    remoteFilter: true
});
//</es-section>
