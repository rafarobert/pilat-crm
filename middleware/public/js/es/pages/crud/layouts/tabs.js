//
// Note that these are all defined as panel configs, rather than instantiated
// as panel objects.  You could just as easily do this instead:
//
// var absolute = Ext.create('Ext.Panel', { ... });
//
// However, by passing configs into the main container instead of objects, we can defer
// layout AND object instantiation until absolutely needed.  Since most of these panels
// won't be shown by default until requested, this will save us some processing
// time up front when initially rendering the page.
//
// Since all of these configs are being added into a layout container, they are
// automatically assumed to be panel configs, and so the xtype of 'panel' is
// implicit.  To define a config of some other type of component to be added into
// the layout, simply provide the appropriate xtype config explicitly.
//
function getTabsLayouts() {
	return {

		/*
		 * ================  CardLayout config (TabPanel)  =======================
		 */
		// Note that the TabPanel component uses an internal CardLayout -- it is not
		// something you have to explicitly configure.  However, it is still a perfect
		// example of how this layout style can be used in a complex component.
		esDictionaries: {
			xtype: 'tabpanel',
			id: 'es-dictionaries-panel',
			plain: true,  //remove the header border
			activeTab: 0,
			style: 'background-color:#dfe8f6; ',
			defaults: {bodyStyle: 'padding:15px'},
			items: [{
				closable: true,
				title: 'ES Dictionaries',
				html: 'This is tab es dictionaries.'
			}]
		},
		esParams: {
			xtype: 'tabpanel',
			id: 'es-params-panel',
			plain: true,  //remove the header border
			activeTab: 0,
			style: 'background-color:#dfe8f6; ',
			defaults: {bodyStyle: 'padding:15px'},
			items: [{
				closable: true,
				title: 'ES Params',
				html: 'This is tab es params.'
			}]
		},
	};
}


function initTable(table) {
	switch (table.toString()) {
		case 'es-dictionaries':
			var esDictionariesCrud = Ext.application({
				name: 'es',
				views: [
					'Viewport',
					'es-dictionaries.List',
					'es-dictionaries.Add'
				],
				controllers: [
					'Main',
					'esDictionaries'
				],
				stores: [
					// TODO: add stores here
					'esDictionaries'
				],
				renderTo: table,
				autoCreateViewport: true
			});
			break;
		case 'es-params':
			var esParams = Ext.application({
				name: 'es',
				views: [
					'Viewport',
					'es-params.List',
					'es-params.Add'
				],
				controllers: [
					'Main',
					'esParams'
				],
				stores: [
					// TODO: add stores here
					'esParams'
				],
				renderTo: table,
				autoCreateViewport: true
			});
			break;
	}
}
