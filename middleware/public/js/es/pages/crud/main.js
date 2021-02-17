// Ext.onReady(function () {
// 	let cont = new Ext.Viewport({
// 		layout: {
// 			type: "hbox",
// 			align: "stretch"
// 		},
// 		items: [
// 			{
// 				region: 'center',
// 				flex: 1,
// 				items: {
// 					xtype: 'button',
// 					text: 'Add Tab',
// 					handler: function (btn) {
// 						btn.up('viewport').down('tabpanel').add({
// 							xtype: 'panel',
// 							title: 'New Tab',
// 							html: 'My new tab',
// 							closable: true
// 						})
// 					}
// 				}
// 			}, {
// 				xtype: 'tabpanel',
// 				flex: 3,
// 				region: 'west',
// 				stateId: 'navigation-panel',
// 				id: 'west-panel', // see Ext.getCmp() below
// 				title: 'West',
// 				split: true,
// 				collapsible: true,
// 				animCollapse: true,
// 				margins: '0 0 0 5',
// 				layout: 'accordion',
// 			},
// 			{
// 				region: 'east',
// 				html: 'East',
// 				collapsible: true,
// 				width: 100
// 			}
// 		]
// 	});
// });

Ext.Loader.setConfig({enabled: true});

Ext.Loader.setPath('Ext.ux', '../ux');

Ext.require([
	'Ext.tip.QuickTipManager',
	'Ext.container.Viewport',
	'Ext.layout.*',
	'Ext.form.Panel',
	'Ext.form.Label',
	'Ext.grid.*',
	'Ext.data.*',
	'Ext.tree.*',
	'Ext.selection.*',
	'Ext.tab.Panel',
	'Ext.ux.layout.Center'
]);

//
// This is the main layout definition.
//
Ext.onReady(function(){

	Ext.tip.QuickTipManager.init();

	// This is an inner body element within the Details panel created to provide a "slide in" effect
	// on the panel body without affecting the body's box itself.  This element is created on
	// initial use and cached in this var for subsequent access.
	var detailEl;

	// Gets all layouts examples
	var layoutExamples = [];
	var tabs = getTabsLayouts();
	Ext.Object.each(tabs, function(name, tab) {
		layoutExamples.push(tab);
	});

	// This is the main content center region that will contain each example layout panel.
	// It will be implemented as a CardLayout since it will contain multiple panels with
	// only one being visible at any given time.

	var contentPanel = {
		region: 'center',
		xtype: 'tabpanel',
		id: 'content-panel',
	};

	var store = Ext.create('Ext.data.TreeStore', {
		root: {
			expanded: true
		},
		proxy: {
			type: 'ajax',
			url: 'tree-data.json'
		}
	});

	// Go ahead and create the TreePanel now so that we can use it below
	var treePanel = Ext.create('Ext.tree.Panel', {
		id: 'tree-panel',
		title: 'DB CRUD',
		region:'north',
		split: true,
		height: 360,
		minSize: 150,
		rootVisible: false,
		autoScroll: true,
		store: store
	});

	// Assign the changeLayout function to be called on tree node click.
	treePanel.getSelectionModel().on('select', function(selModel, record) {
		if (record.get('leaf')) {
			var recordId = record.getId();
			initTable(recordId);
			Ext.getCmp('content-panel').add({
							xtype: 'panel',
							title: recordId,
							html: recordId,
							id: recordId,
							closable: true,
						});
			if (!detailEl) {
				var bd = Ext.getCmp('details-panel').body;
				bd.update('').setStyle('background','#fff');
				detailEl = bd.createChild(); //create default empty div
			}
			detailEl.hide().update(Ext.getDom(record.getId() + '-details').innerHTML).slideIn('l', {stopAnimation:true,duration: 200});
		}
	});

	// This is the Details panel that contains the description for each example layout.
	var detailsPanel = {
		id: 'details-panel',
		title: 'Details',
		region: 'center',
		bodyStyle: 'padding-bottom:15px;background:#eee;',
		autoScroll: true,
		html: '<p class="details-info">When you select a layout from the tree, additional details will display here.</p>'
	};

	// Finally, build the main layout once all the pieces are ready.  This is also a good
	// example of putting together a full-screen BorderLayout within a Viewport.
	Ext.create('Ext.Viewport', {
		layout: 'border',
		title: 'Ext Layout Browser',
		items: [{
			xtype: 'box',
			id: 'header',
			region: 'north',
			html: '<h1> Ext.Layout.Browser</h1>',
			height: 30
		},{
			layout: 'border',
			id: 'layout-browser',
			region:'west',
			border: false,
			split:true,
			margins: '2 0 5 5',
			width: 275,
			minSize: 100,
			maxSize: 500,
			items: [treePanel, detailsPanel]
		},
			contentPanel,
			{
				// lazily created panel (xtype:'panel' is default)
				region: 'south',
				contentEl: 'south',
				split: true,
				height: 100,
				minSize: 100,
				maxSize: 200,
				collapsible: true,
				collapsed: true,
				title: 'South',
				margins: '0 0 0 0'
			},{

				region: 'east',
				title: 'East Side',
				dockedItems: [{
					dock: 'top',
					xtype: 'toolbar',
					items: [ '->', {
						xtype: 'button',
						text: 'test',
						tooltip: 'Test Button'
					}]
				}],
				animCollapse: true,
				collapsible: true,
				split: true,
				width: 225, // give east and west regions a width
				minSize: 175,
				maxSize: 400,
				margins: '0 5 0 0',
				activeTab: 1,
				tabPosition: 'bottom',
				items: [{
					html: '<p>A TabPanel component can be a region.</p>',
					title: 'A Tab',
					autoScroll: true
				}, Ext.create('Ext.grid.PropertyGrid', {
					title: 'Property Grid',
					closable: true,
					source: {
						"(name)": "Properties Grid",
						"grouping": false,
						"autoFitColumns": true,
						"productionQuality": false,
						"created": Ext.Date.parse('10/15/2006', 'm/d/Y'),
						"tested": false,
						"version": 0.01,
						"borderWidth": 1
					}
				})]
			}
		],
		renderTo: Ext.getBody()
	});
});
