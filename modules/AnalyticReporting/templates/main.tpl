<script src="modules/AnalyticReporting/assets/js/jquery/jquery-1.8.3.min.js"></script>
<script type="text/javascript">
	jQuery.noConflict();
</script>

<script src="modules/AnalyticReporting/assets/js/jstree/jstree.min.js"></script>
<script src="modules/AnalyticReporting/assets/js/jstree/jstreegrid.js"></script>

<script src="modules/AnalyticReporting/assets/js/jquery-ui/jquery-ui.min.js"></script>
<link href="modules/AnalyticReporting/assets/css/jquery-ui/redmond/jquery-ui.css" rel="stylesheet" type="text/css" media="all" />

<script src="modules/AnalyticReporting/assets/js/ractive/Ractive.min.js"></script>

<link href="modules/AnalyticReporting/assets/css/jstree/style.min.css" rel="stylesheet" tye="text/css" media="all"  />
<link href="modules/AnalyticReporting/assets/css/AnalyticReporting.css" rel="stylesheet" tye="text/css" media="all" />
<style>
{literal}
.jstree-grid-table {
	border:1px solid #ddd;
}
.jstree-grid-table *{
	vertical-align: top !important;
}
.jstree-grid-table th {
	text-align:left;
	font-size:11px;
	border:1px solid #ddd;
	padding:5px;

	white-space:nowrap;
	color:#333;
	background: #fff;
	background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#ededed));
	background: -moz-linear-gradient(top,  #fff,  #ededed);
	filter:  progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#ededed');
}

.jstree-grid-separator {
	display:none;
}

.jstree-anchor,.jstree-grid-cell {
	text-overflow:ellipsis !important;
	white-space:nowrap !important;
	overflow:hidden !important;
}
{/literal}
</style>
<script>
var del_rep = {$DELETABLE_REPORTS|@json_encode};//#3879 - array of reports that the current user is able to move between folders
var translated_labels = {$DICTIONARY}; // #5286 - Refactored to JSON object

</script>
{* Include underscore.js and Ractive.js templates *}
{include file="modules/AnalyticReporting/templates/templates.tpl"}
<script>
{literal}
var ReportData = {
	options: {
		includeDetails: false
	},
	{/literal}
    reportAccessUsers:{$REPORTACCESSUSERS},
    reportScheduleUsers:{$REPORTSCHEDULEUSERS},
    users:{$REPORTUSERS},
    {literal}
}
{/literal}
</script>
<script src="modules/AnalyticReporting/assets/js/underscore.js"></script>
<script src="modules/AnalyticReporting/assets/js/ractive/ractive-decorators-select2.min.js"></script>
<script src="modules/AnalyticReporting/assets/js/main.min.js"></script>
<script>
function pop_include_details() {ldelim}
	newwindow2=window.open('','name','height=140,width=580');
	var tmp = newwindow2.document;
	tmp.write('<html><head><title>Include Details Help</title>');
	tmp.write('</head><body>');
	tmp.write('<p>'+translated_labels.label_to_create_new+'</p>');
	tmp.write('</ body></html>'); // #4470 - Added whitespace in closing body tag, so csrf-magic will not add tokens and kill JS
	tmp.close();
{rdelim}
//#4391 [end]
{literal}

function toggleVisible(show) {
	var location = window.location.href;
	location = location.replace("&showHidden=true","");
	location = location.replace("#toggleVisible","");
	if(show) {
		location = location + "&showHidden=true";
	}
	
	window.location.href = location;
}

jQuery(function() {
	// URL for saving category
	var saveCategoryUrl = "index.php?module=AnalyticReporting&action=saveCategory&to_pdf=1";
	var massScheduleUrl = "index.php?module=AnalyticReporting&action=massSchedule&to_pdf=1"; 

	// Report tree JSON data
	var treeData = {/literal}{$REPORTTREE}{literal};

	// Bind jsTree on selected node
	var treeNodeId = "jstree";
	var jsTree = jQuery('#'+treeNodeId).jstree({
		plugins : ["grid", "state", "dnd", "types", "checkbox"],
		core : {
			data: treeData,
			// #3844 [start] - Every time node has been moving, run validator
			check_callback: function(operation, node, parent, position) {
				if (node.id.substring(0, 2) != "c_"){//#4033 - fixed folder moving
				if(operation == "move_node") {
					//#3879 [start] - prevent moving reports that the current user is unable to edit
					if (node.id.substring(0, 2) != "c_"){//#4033 - fixed folder moving
						if(del_rep.indexOf(node.id)==-1){
							return false;
						}
					}
					//#3879 [end]
					// Reports can not be moved directly to the root
					if(node.type == "report" && parent.id == "#") {
						return false;
					}
				}
				}
				return true;
			}
			// #3844 [end]
		},
		state: {
			"key":treeNodeId,
			// Forget selected checkboxes after reload
            filter : function (state) {
                delete state.checkbox;
                return state;
            }
		},
		grid: {
			columns: [
				// This is mystification for cross-browser support. It should be something like 30%/50%/20%
				{width: 60, header: translated_labels.label_report_folders},
				{width: 100, header: translated_labels.label_description, value: "description"},//#4391 added new tooltip
				{width: 20, header: translated_labels.label_tools{/literal}{if $isAdmin eq 1}+'&nbsp; <a href="index.php?module=AnalyticReporting&action=index#toggleVisible" onclick="toggleVisible({$TOGGLEHIDDEN});" style="color:blue">{if $TOGGLEHIDDEN eq "true"}'+translated_labels.label_show_hidden+'{else}'+translated_labels.label_hide_hidden+'{/if}</a>'{/if}{literal}, value: "tools"}
			],
		},
		checkbox: {
			tie_selection: false,
			whole_node: false,
		},
		types: {
			category: {
				icon: "jstree-folder",
				valid_children : ["category", "report"],
			},
			report: {
				icon: "jstree-file",
				valid_children: [],
			},
		},

	});

	// #5696 [start] - allow checking of deletable reports only
 	jsTree.on('check_node.jstree', function (e, data){
		referenceJSTree = jQuery("#jstree");
		var children = data.node.children;
		var folderHasSelectedElements = false;
		if(data.node.id.indexOf("c_") == 0){
			for (var i = 0; i < children.length; i++) {
				if(data.selected.indexOf(children[i])!=-1){
					folderHasSelectedElements = true;
					break;
				}
			}
		}
		
		if(!folderHasSelectedElements){
			checkIfDeletableRecursive(data.node.id, referenceJSTree);
		}else{
			//if folder has selected elements, that means it was already selected, deselect it instead
			referenceJSTree.jstree(true).uncheck_node(data.node.id);
		}

    });

	function checkIfDeletableRecursive(nodeId, referenceJSTree){
		var children = referenceJSTree.jstree(true).get_node(nodeId).children;
		//single node
		if(children.length == 0 && //no children
		nodeId.indexOf("c_") != 0 && //not a folder
		del_rep.indexOf(nodeId) == -1)referenceJSTree.jstree(true).uncheck_node(nodeId);
		//folder
		else{
			for (var i = 0; i < children.length; i++) {
				if((children[i].indexOf("c_") == 0)){
					allDeletable = checkIfDeletableRecursive(children[i], referenceJSTree);
					if(allDeletable == false)break;
				}else if (del_rep.indexOf(children[i]) == -1) {
			        referenceJSTree.jstree(true).uncheck_node(children[i]);
			    }
			}
		}

	}
	// #5696 [end]
	
	// Filter report onclick
 	jsTree.on('select_node.jstree', function (e, data) {
 		// Don't trigger select_node event if triggered from saved state
 		if(!data.event) {
 			return false;
 		}

		// Reports open as links
		if(data.node.type == "report") {
			window.location.href = data.node.a_attr.href;
		} else {
			// Other types just toggle
			return data.instance.toggle_node(data.node);
		}
    });

	// After node has been moved
	jsTree.on("move_node.jstree", function (e, data) { 
		var newData = {};

		// Move category
		if(data.node.type == "category") {
			var action	= "moveCategory";
		} else {
			// Move report	
			var action	= "moveItem";
		}

		// Remove c_ from category ids 
		var oldParentId = data.old_parent.replace("c_", "");
		var parentId 	= data.parent.replace("c_", "");
		var id 			= data.node.id.replace("c_", "");

		// Replace category root elements to zero
		if(parentId == "#") {
			parentId = 0;
		}

		// Set POST data items
		newData._action		= action;
		newData.id 			= id;
		newData.parentId 	= parentId;
		newData.oldParentId	= oldParentId;
		newData.position 	= data.position;
		newData.oldPosition = data.old_position;

		// Send to server
		jQuery.post(saveCategoryUrl, newData, function(response){
			window.location.reload();
		});
	});


	// Ractive.js modal component for saving new reports or edit existing
	var ReportFolder = Ractive.extend({
		el: jQuery('#modalWindow'),
		append: false,
		template: '{{>modalContent}}',

		data: {
		},
		init: function() {
			// Get passed data
			data = this.data;

			// Open dialog and save
			jQuery("#modalWindow").dialog({
				modal: true,
				draggable:false,
				resizable: false,
				title: (data._action == "edit" ? translated_labels.label_edit_report_folder : translated_labels.label_new_report_folder),//#3931
				open: function (type, _data) {
					// If edit, then get existing title and description
					if(data._action == "edit") {
						jQuery(this).find("[name=categoryName]").val(data.title);
						jQuery(this).find("[name=categoryDescription]").val(data.description)
					}
				},
				buttons: [
					{
						text: translated_labels.label_save,
						click: function() {
							var that = this;

							data.title 			= jQuery(this).find("[name=categoryName]").val();
							data.description 	= jQuery(this).find("[name=categoryDescription]").val();

							// Send to server
							jQuery.post(saveCategoryUrl, data, function(response){
								response = JSON.parse(response);
								jQuery(that).dialog("close");
								window.location.reload();
							});
						}
					},
					{
						text: translated_labels.label_cancel,
						click: function() {
							jQuery(this).dialog("close");
						}
					}
				]
			});
		}
	});

	// Unified Ractive dialog component (should be merged with ReportFolder component)
	var RactiveDialog = Ractive.extend({
		el: jQuery('#modalWindow'),
		append: false,
		template: '{{>modalContent}}', // Using partials
		data: {
			dialogOptions: {}
		},
		init: function() {
			// Get passed data
			data = this.data;

			// Init callback
			if(data.init) {
				data.init();
			}

			// Open dialog and save
			jQuery(this.el).dialog(data.dialogOptions);
		},
		// On shutdown, destroy dialog
		onteardown: function(){
			if(this.dialog){
				this.dialog.dialog('destroy');
			}
		}
	});

	var modalContentTemplate = '<div style="padding-top:10px;"><label>'+translated_labels.label_title+': <input style="width: 280px;" type="text" name="categoryName" /></label><label>'+translated_labels.label_description+': <textarea style="width: 280px;" name="categoryDescription"></textarea></label></div>';

	jQuery("[data-action='addCategory']").live("click", function(e) {
		e.preventDefault();
		// Get data for modal
		var data = {}
		data.id 		= jQuery(this).data("id");
		data._action 	= "add";
	
		// Initialize Ractive.js modal component with data
		var modal = new ReportFolder({
			data: data,
			partials: {
				modalContent: modalContentTemplate
			}
		});
	});

	jQuery("[data-action='editCategory']").live("click", function(e) {
		e.preventDefault();
		// Get data for modal
		var data = {}
		data.id 		 = jQuery(this).data("id");
		data.title 		 = jQuery(this).data("title");
		data.description = jQuery(this).data("description");
		data._action 	 = "edit";
	
		// Initialize Ractive.js modal component with data
		var modal = new ReportFolder({
			data: data,
			partials: {
				modalContent: modalContentTemplate
			}
		});
	});

	jQuery("[data-action='deleteCategory']").live("click", function(e) {
		//#3839 [start] - delete reports from before deleting report folder
		var children = jQuery("#jstree").jstree(true).get_node("#c_"+jQuery(this).data("id")).children;
		if(children.length>0){
			alert(translated_labels.label_delete_children);
			return false;
		}
		//#3839 [end]
		e.preventDefault();
		var data = {};
		data.id 		= jQuery(this).data("id");
		data._action 	= "delete";
		jQuery.post(saveCategoryUrl, data, function(response){
			window.location.reload();
		});
	});

	jQuery("[data-action='massSchedule']").click(function(e) {
		e.preventDefault();
		var reportIds = [];

		// Get all checked node ids
		jQuery("#jstree").jstree("get_checked").forEach(function(id){
			// Filter reports
			if(id.substring(0, 2) != "c_") {
				reportIds.push(id);
			}
		});

		// Show dialog only if there is at least one report selected
		if(reportIds.length > 0) {
			// Set dialog modal options
			var dialogOptions = {
				modal: true,
				draggable:true,
				resizable: false,
				width:755,
				title: translated_labels.label_mass_schedule_title,
				buttons: [
					{
						text: translated_labels.label_save,
						click: function() {
							var that = this;

							var params = {};
							params.globalSharing = accessManager.get("globalSharing");
							params.globalSharingRights = accessManager.get("globalSharingRights");
							params.userSharing = accessManager.getSelectedAccess();
							params.owner = accessManager.get("owner");
							params.isScheduled = (scheduleManager.get("isScheduled")==true)?(1):(0);
							params.updatePermissions = (accessManager.get("updatePermissions")==true)?(1):(0);//#5286
							params.interval = scheduleManager.get("interval");
							params.intervalH = scheduleManager.get("timeH");
							params.intervalM = scheduleManager.get("timeM");
							params.intervalOptions = scheduleManager.get("intervalOptions");
							params.scheduledRecipients = scheduleManager.getSelectedRecipients();
							params.scheduledFormats = scheduleManager.get("scheduledFormats");
							params.reportIds = reportIds;

							// Params keys which should not be converted to JSON (@TODO: Should make DRY)
							var nonJSONSaveKeys = ["reportIds","globalSharing", "globalSharingRights", "owner","isScheduled", "updatePermissions", "interval", "intervalH", "intervalM", "intervalOptions", "scheduledRecipients"];
							// Send to server
							jQuery.post(massScheduleUrl, reportUtils.convertToJSONPost(params, nonJSONSaveKeys), function(response){
								response = JSON.parse(response);
								jQuery(that).dialog("close");
							});
						}
					},
					{
						text: translated_labels.label_cancel,
						click: function() {
							jQuery(this).dialog("close");
						}
					}
				]
			}

			// Initialize Ractive.js modal component with data
			var modal = new RactiveDialog({
				data: {
					dialogOptions:dialogOptions,
					init:function(){
						var accessManagerOpt = {
							users:ReportData.reportAccessUsers,
							accessRights:[],
							globalSharing:'PRIV',
							availableOwners:ReportData.users,
							owner:'1',
							globalSharingRights:'VIEW',
							updatePermissions:false,//#5286
						};
						var scheduleManagerOpt = {
							users:ReportData.reportScheduleUsers,
							isScheduled:false,
							selectedUsers:[],
							timeH:'12',
							timeM:'00',
							interval:0,
							intervalOptions:['01','01'],
							scheduledFormats:{},
						};

						accessManager = new reportAccessManager({data:accessManagerOpt});
						accessManager.render("#ar-rv-editor-access-sharing");
						scheduleManager = new reportScheduleManager({data: scheduleManagerOpt});
						scheduleManager.render("#ar-rv-editor-access-scheduling");
					}
				},
				partials: {
					modalContent: '<div class="ar-container"><div id="ar-rv-editor-access"><strong>{/literal}{$MOD.label_sharing}</strong><br><div id="ar-rv-editor-access-sharing"></div><br><strong>{$MOD.label_scheduling}{literal}</strong><br><div id="ar-rv-editor-access-scheduling"></div></div></div>'
				}
			});
		}else{
			alert("Please select at least one report!");
		}
	});


    // #6076 - Added font checking and downloading frontend
    function checkFonts() {
        var settingsAjaxUrl = 'index.php?module=AnalyticReporting&to_pdf=1';

        // Check for additional font existence
        function downloadFontsCheck(modalObj) {
            var downloadFontCheckUrl = settingsAjaxUrl + '&action=downloadFontCheck';
            jQuery("#status").show();
            jQuery.getJSON(downloadFontCheckUrl, function(response) {
                jQuery("#status").hide();
                if(response.status) {
                    // Close dialog
                    jQuery(modalObj).dialog("close");
                } else {
                    // Set dialog modal options
                    var dialogOptions = {
                        modal: true,
                        draggable:true,
                        resizable: false,
                        width:400,
                        title: translated_labels.additionalFontsInfo,
                        buttons: {
                            "downloadButton": {
                                text: translated_labels.download,
                                class: 'downloadFontsButton',
                                click: function() {
                                    jQuery(".downloadFontsButton > .ui-button-text").text("Downloading...");
                                    downloadFonts(jQuery(this));
                                }
                            },
                            "cancelButton": {
                                text: translated_labels.label_cancel,
                                click: function() {
                                    jQuery(this).dialog("close");
                                }
                            }
                        }
                    }

                    var modal = new RactiveDialog({
                        data: {
                            dialogOptions:dialogOptions,
                            init:function(){
                            }
                        },
                        partials: {
                            modalContent: '<div>'+response.error+'</div>'
                        }
                    });
                }
            });
        }

        // Download fonts in background
        function downloadFonts(modal) {
            var downloadFontUrl = settingsAjaxUrl + '&action=downloadFont';
            jQuery("#downloadFontsStatus").html("{/literal}{$MOD.downloading}{literal}");
            jQuery("#status").show();
            jQuery.getJSON(downloadFontUrl, function(response) {
                jQuery("#status").hide();
                downloadFontsCheck(modal);
            });
        }

        downloadFontsCheck();
    }

    checkFonts();

	// After jsTree has been loaded, set valid widths in percents
	setTimeout(function(){
		jQuery(".jstree-grid-header th:nth-child(1)").css({width:"30%"});
		jQuery(".jstree-grid-header th:nth-child(2)").css({width:"55%"});
		jQuery(".jstree-grid-header th:nth-child(3)").css({width:"15%"});
	}, 600);
});
{/literal}
</script>

<!-- ADVANCED REPORTS CONTAINER -->
<div id="ar-container">
	<div id="ar-toolbar">
		<a href="javascript:void(0);" data-action="addCategory" data-id="0">{$MOD.label_add_folder}</a>
		<a href="javascript:void(0);" data-action="massSchedule">{$MOD.label_mass_schedule}</a>
		<a href="javascript:void(0);" onclick="pop_include_details();" class="tooltipX">{$MOD.label_to_create_report}<span>{$MOD.label_to_create_new}</span></a>
		{* #5793 Remove the link to settings as it is only used for license upload which is redundant in SugarOutfitters version *}
		{* <a style="float:right" href="index.php?module=AnalyticReporting&action=settings" >Reporting Tool Settings{$MOD.label_settings}</a> *}
		{if $isAdmin eq 1} {* #5885 Hide settings link from non-admin users *}
			<a style="float:right" href="index.php?module=AnalyticReporting&action=settings" >Reporting Tool Settings{$MOD.label_settings}</a>
		{/if}
	</div>

	<div id="modalWindow" style="display:none;"></div>
	<div id="jstree"></div>
</div>
<!-- // ADVANCED REPORTS CONTAINER -->