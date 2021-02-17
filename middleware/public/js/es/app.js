/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sat Oct 17 2020 10:01:34 GMT-0400 (Bolivia Time)
 * Time: 10:1:34
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sat Oct 17 2020 10:01:34 GMT-0400 (Bolivia Time)
 * Last time updated: 10:1:34
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.application({
	name: 'es',

	views: [
		'Viewport',
		//<es-section>
	
		'es-dictionaries.List',
		'es-dictionaries.Add',
	
		'es-params.List',
		'es-params.Add',
	
		'es-roles.List',
		'es-roles.Add',
	
		'es-people.List',
		'es-people.Add',
	
		'es-files.List',
		'es-files.Add',
	
		'es-modules.List',
		'es-modules.Add',
	
		'es-users.List',
		'es-users.Add',
	
		'es-user-roles.List',
		'es-user-roles.Add',
	
		'es-attributes.List',
		'es-attributes.Add',
	
		'es-person-attributes.List',
		'es-person-attributes.Add',
	
		'es-file-attributes.List',
		'es-file-attributes.Add',
	
		'es-objects.List',
		'es-objects.Add',
	
		'es-object-attributes.List',
		'es-object-attributes.Add',
	
		'es-views.List',
		'es-views.Add',
	
		'es-components.List',
		'es-components.Add',
	
		'es-profiles.List',
		'es-profiles.Add',
	
		'es-profile-components.List',
		'es-profile-components.Add',
	
		'es-profile-modules.List',
		'es-profile-modules.Add',
	
		'es-profile-views.List',
		'es-profile-views.Add',
	
		'es-role-profiles.List',
		'es-role-profiles.Add',
	
		'es-employees.List',
		'es-employees.Add',
	
		'es-logs.List',
		'es-logs.Add',
	
		'es-auths.List',
		'es-auths.Add',
	
		'es-fields.List',
		'es-fields.Add',
	
		'es-component-field-attributes.List',
		'es-component-field-attributes.Add',
	
		'es-field-attributes.List',
		'es-field-attributes.Add',
	
		'es-jobs.List',
		'es-jobs.Add',
	
		'es-job-attributes.List',
		'es-job-attributes.Add',
	
		'es-crons.List',
		'es-crons.Add',
	
		'es-cron-attributes.List',
		'es-cron-attributes.Add',
	
		'es-flows.List',
		'es-flows.Add',
	
		'es-flow-attributes.List',
		'es-flow-attributes.Add',
	
		'es-job-attribute-instances.List',
		'es-job-attribute-instances.Add',
	
		'es-cron-attribute-instances.List',
		'es-cron-attribute-instances.Add',
	
		'es-log-attributes.List',
		'es-log-attributes.Add',
	
		'es-log-attribute-instances.List',
		'es-log-attribute-instances.Add',
	
		'es-object-attribute-instances.List',
		'es-object-attribute-instances.Add',
	
		'es-flow-attribute-instances.List',
		'es-flow-attribute-instances.Add',
	
		'es-component-field-attribute-instances.List',
		'es-component-field-attribute-instances.Add',
	
		'es-component-attributes.List',
		'es-component-attributes.Add',
	
		'es-business.List',
		'es-business.Add',
	
		'es-mails.List',
		'es-mails.Add',
	
		'es-mail-attributes.List',
		'es-mail-attributes.Add',
	
		'es-mail-attribute-instances.List',
		'es-mail-attribute-instances.Add',
	
		'es-person-attribute-instances.List',
		'es-person-attribute-instances.Add',
	
		'es-pages.List',
		'es-pages.Add',
	
		'es-profile-pages.List',
		'es-profile-pages.Add',
	
		'es-page-components.List',
		'es-page-components.Add',
	
		//</es-section>
	],

	controllers: [
		'Main',
		//<es-section>
		
		'esDictionaries',
		
		'esParams',
		
		'esRoles',
		
		'esPeople',
		
		'esFiles',
		
		'esModules',
		
		'esUsers',
		
		'esUserRoles',
		
		'esAttributes',
		
		'esPersonAttributes',
		
		'esFileAttributes',
		
		'esObjects',
		
		'esObjectAttributes',
		
		'esViews',
		
		'esComponents',
		
		'esProfiles',
		
		'esProfileComponents',
		
		'esProfileModules',
		
		'esProfileViews',
		
		'esRoleProfiles',
		
		'esEmployees',
		
		'esLogs',
		
		'esAuths',
		
		'esFields',
		
		'esComponentFieldAttributes',
		
		'esFieldAttributes',
		
		'esJobs',
		
		'esJobAttributes',
		
		'esCrons',
		
		'esCronAttributes',
		
		'esFlows',
		
		'esFlowAttributes',
		
		'esJobAttributeInstances',
		
		'esCronAttributeInstances',
		
		'esLogAttributes',
		
		'esLogAttributeInstances',
		
		'esObjectAttributeInstances',
		
		'esFlowAttributeInstances',
		
		'esComponentFieldAttributeInstances',
		
		'esComponentAttributes',
		
		'esBusiness',
		
		'esMails',
		
		'esMailAttributes',
		
		'esMailAttributeInstances',
		
		'esPersonAttributeInstances',
		
		'esPages',
		
		'esProfilePages',
		
		'esPageComponents',
		
		//</es-section>
	],

	stores: [
		//<es-section>
		
		'esDictionaries',
		
		'esParams',
		
		'esRoles',
		
		'esPeople',
		
		'esFiles',
		
		'esModules',
		
		'esUsers',
		
		'esUserRoles',
		
		'esAttributes',
		
		'esPersonAttributes',
		
		'esFileAttributes',
		
		'esObjects',
		
		'esObjectAttributes',
		
		'esViews',
		
		'esComponents',
		
		'esProfiles',
		
		'esProfileComponents',
		
		'esProfileModules',
		
		'esProfileViews',
		
		'esRoleProfiles',
		
		'esEmployees',
		
		'esLogs',
		
		'esAuths',
		
		'esFields',
		
		'esComponentFieldAttributes',
		
		'esFieldAttributes',
		
		'esJobs',
		
		'esJobAttributes',
		
		'esCrons',
		
		'esCronAttributes',
		
		'esFlows',
		
		'esFlowAttributes',
		
		'esJobAttributeInstances',
		
		'esCronAttributeInstances',
		
		'esLogAttributes',
		
		'esLogAttributeInstances',
		
		'esObjectAttributeInstances',
		
		'esFlowAttributeInstances',
		
		'esComponentFieldAttributeInstances',
		
		'esComponentAttributes',
		
		'esBusiness',
		
		'esMails',
		
		'esMailAttributes',
		
		'esMailAttributeInstances',
		
		'esPersonAttributeInstances',
		
		'esPages',
		
		'esProfilePages',
		
		'esPageComponents',
		
		//</es-section>
	],

	autoCreateViewport: true
});

function initTable(table){
	let tab;
	let newTab;
	let tabs = Ext.getCmp('content-panel');
	if(tab = tabs.items.items.find(element => element.id == table)){
		Ext.getCmp('content-panel').setActiveTab(tab);
	} else {
		switch (table) {
			//<es-section>
			
			case 'es-dictionaries':
				newTab = {
					xtype: 'esDictionariesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-params':
				newTab = {
					xtype: 'esParamsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-roles':
				newTab = {
					xtype: 'esRolesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-people':
				newTab = {
					xtype: 'esPeopleList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-files':
				newTab = {
					xtype: 'esFilesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-modules':
				newTab = {
					xtype: 'esModulesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-users':
				newTab = {
					xtype: 'esUsersList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-user-roles':
				newTab = {
					xtype: 'esUserRolesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-attributes':
				newTab = {
					xtype: 'esAttributesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-person-attributes':
				newTab = {
					xtype: 'esPersonAttributesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-file-attributes':
				newTab = {
					xtype: 'esFileAttributesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-objects':
				newTab = {
					xtype: 'esObjectsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-object-attributes':
				newTab = {
					xtype: 'esObjectAttributesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-views':
				newTab = {
					xtype: 'esViewsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-components':
				newTab = {
					xtype: 'esComponentsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-profiles':
				newTab = {
					xtype: 'esProfilesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-profile-components':
				newTab = {
					xtype: 'esProfileComponentsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-profile-modules':
				newTab = {
					xtype: 'esProfileModulesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-profile-views':
				newTab = {
					xtype: 'esProfileViewsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-role-profiles':
				newTab = {
					xtype: 'esRoleProfilesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-employees':
				newTab = {
					xtype: 'esEmployeesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-logs':
				newTab = {
					xtype: 'esLogsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-auths':
				newTab = {
					xtype: 'esAuthsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-fields':
				newTab = {
					xtype: 'esFieldsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-component-field-attributes':
				newTab = {
					xtype: 'esComponentFieldAttributesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-field-attributes':
				newTab = {
					xtype: 'esFieldAttributesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-jobs':
				newTab = {
					xtype: 'esJobsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-job-attributes':
				newTab = {
					xtype: 'esJobAttributesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-crons':
				newTab = {
					xtype: 'esCronsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-cron-attributes':
				newTab = {
					xtype: 'esCronAttributesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-flows':
				newTab = {
					xtype: 'esFlowsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-flow-attributes':
				newTab = {
					xtype: 'esFlowAttributesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-job-attribute-instances':
				newTab = {
					xtype: 'esJobAttributeInstancesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-cron-attribute-instances':
				newTab = {
					xtype: 'esCronAttributeInstancesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-log-attributes':
				newTab = {
					xtype: 'esLogAttributesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-log-attribute-instances':
				newTab = {
					xtype: 'esLogAttributeInstancesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-object-attribute-instances':
				newTab = {
					xtype: 'esObjectAttributeInstancesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-flow-attribute-instances':
				newTab = {
					xtype: 'esFlowAttributeInstancesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-component-field-attribute-instances':
				newTab = {
					xtype: 'esComponentFieldAttributeInstancesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-component-attributes':
				newTab = {
					xtype: 'esComponentAttributesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-business':
				newTab = {
					xtype: 'esBusinessList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-mails':
				newTab = {
					xtype: 'esMailsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-mail-attributes':
				newTab = {
					xtype: 'esMailAttributesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-mail-attribute-instances':
				newTab = {
					xtype: 'esMailAttributeInstancesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-person-attribute-instances':
				newTab = {
					xtype: 'esPersonAttributeInstancesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-pages':
				newTab = {
					xtype: 'esPagesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-profile-pages':
				newTab = {
					xtype: 'esProfilePagesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'es-page-components':
				newTab = {
					xtype: 'esPageComponentsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			//</es-section>
		}
	}
}
