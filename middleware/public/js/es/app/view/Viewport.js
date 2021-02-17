
Ext.tip.QuickTipManager.init();

// This is an inner body element within the Details panel created to provide a "slide in" effect
// on the panel body without affecting the body's box itself.  This element is created on
// initial use and cached in this var for subsequent access.
var detailEl;

var store = Ext.create('Ext.data.TreeStore', {
	root: {
		expanded: true
	},
	proxy: {
		type: 'ajax',
		url: 'treeData.json'
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
		initTable(record.getId());
		if (!detailEl) {
			var bd = Ext.getCmp('details-panel').body;
			bd.update('').setStyle('background','#fff');
			detailEl = bd.createChild(); //create default empty div
		}
		detailEl.hide().update(Ext.getDom(record.getId() + '-details').innerHTML).slideIn('l', {stopAnimation:true,duration: 200});
	}
});

// This is the Details panel that contains the description for each example layout.
var cellEditing = Ext.create('Ext.grid.plugin.CellEditing', {
	clicksToEdit: 1
});

Ext.define('es.view.Viewport', {
	renderTo: Ext.getBody(),
	extend: 'Ext.container.Viewport',
	requires: [
		'Ext.tab.Panel',
		'Ext.layout.container.Border'
	],

	layout: {
		type: 'border'
	},

	items: [
		{
			xtype: 'box',
			id: 'header',
			region: 'north',
			html: '<h1>Arminda Crud</h1>',
			height: 30
		}, {
			layout: 'border',
			title: "Database",
			id: 'layout-browser',
			region:'west',
			border: false,
			split:true,
			margins: '2 0 5 5',
			minSize: 100,
			activeTab: 1,
			maxSize: 500,
			width: 180,
			collapsible: true,
			animCollapse: true,
			items: [treePanel,
				{
				id: 'details-panel',
				title: 'Details',
				region: 'center',
				bodyStyle: 'padding-bottom:15px;background:#eee;',
				autoScroll: true,
				html: '<p class="details-info">When you select a layout from the tree, additional details will display here.</p>'
			}]
		}, {
			title: 'Tables',
			region: 'center',
			layout: 'fit',
			id: 'content-panel',
			xtype:'tabpanel',
			items: []
		}, {
			region: 'east',
			title: 'Table details',
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
			width: 180, // give east and west regions a width
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
		}, {
			title: 'Arminda all rights reserved 2020',
			region: 'south',
			margins: '0 5 5 5',
			flex: .1,
			split: true
		}
	]
});
