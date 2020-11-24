<script src="modules/AnalyticReporting/assets/js/jquery/jquery-1.8.3.min.js"></script>

<script type="text/javascript">
    jQuery.noConflict();
</script>
{literal}
<script data-pace-options='{ "ajax": false }' src="modules/AnalyticReporting/assets/js/pace.js"></script>
{/literal}
<link href="modules/AnalyticReporting/assets/css/pace.css" rel="stylesheet" type="text/css" media="all" />

<script src="modules/AnalyticReporting/assets/js/jquery-ui/jquery-ui.min.js"></script>

<script src="modules/AnalyticReporting/assets/js/jquery/jquery.select2.min.js"></script>
<script src="modules/AnalyticReporting/assets/js/jquery/jquery.event.drag-2.2.js"></script>
<script src="modules/AnalyticReporting/assets/js/nvd3/d3.js" charset="utf-8"></script>
<script src="modules/AnalyticReporting/assets/js/nvd3/nv.d3.js"></script>
<script src="modules/AnalyticReporting/assets/js/d3-funnel.js"></script>
<script src="modules/AnalyticReporting/assets/js/d3-gauge.js"></script>

<script src="modules/AnalyticReporting/assets/js/slickgrid/slick.core.js"></script>
<script src="modules/AnalyticReporting/assets/js/slickgrid/slick.formatters.js"></script>
<script src="modules/AnalyticReporting/assets/js/slickgrid/slick.editors.js"></script>
<script src="modules/AnalyticReporting/assets/js/slickgrid/plugins/slick.cellrangedecorator.js"></script>
<script src="modules/AnalyticReporting/assets/js/slickgrid/plugins/slick.cellrangeselector.js"></script>
<script src="modules/AnalyticReporting/assets/js/slickgrid/plugins/slick.cellselectionmodel.js"></script>
<script src="modules/AnalyticReporting/assets/js/slickgrid/slick.grid.js"></script>
<script src="modules/AnalyticReporting/assets/js/slickgrid/slick.groupitemmetadataprovider.js"></script>
<script src="modules/AnalyticReporting/assets/js/slickgrid/slick.dataview.js"></script>
<script src="modules/AnalyticReporting/assets/js/slickgrid/controls/slick.pager.js"></script>
<script src="modules/AnalyticReporting/assets/js/slickgrid/controls/slick.columnpicker.js"></script>
<script src="modules/AnalyticReporting/assets/js/ractive/Ractive.min.js"></script>
<script src="modules/AnalyticReporting/assets/js/ractive/ractive-decorators-select2.min.js"></script>
<script src="modules/AnalyticReporting/assets/js/ractive/Ractive-decorators-sortable.js"></script>
<script src="modules/AnalyticReporting/assets/js/underscore.js"></script>

<link href="modules/AnalyticReporting/assets/css/nvd3/nv.d3.css" rel="stylesheet" type="text/css">
<link href="modules/AnalyticReporting/assets/css/d3-gauge.css" rel="stylesheet" type="text/css">
<link href="modules/AnalyticReporting/assets/css/slickgrid/slick.grid.css" rel="stylesheet" type="text/css">
<link href="modules/AnalyticReporting/assets/css/slickgrid/controls/slick.pager.css" rel="stylesheet" type="text/css">
<link href="modules/AnalyticReporting/assets/css/slickgrid/controls/slick.columnpicker.css" rel="stylesheet" type="text/css">
<link href="modules/AnalyticReporting/assets/css/slickgrid/default-theme.css" rel="stylesheet" type="text/css">
<link href="modules/AnalyticReporting/assets/css/jquery.select2.css" rel="stylesheet" type="text/css" media="all" />

<link href="modules/AnalyticReporting/assets/css/jquery-ui/redmond/jquery-ui.css" rel="stylesheet" type="text/css" media="all" />

<script type="text/javascript" src="modules/AnalyticReporting/assets/js/saveSvgAsPng.js"></script>
{literal}
<style>
    #ar-rv-data-grid {
        /*max-height:500px;*/
        border:1px solid #ddd;
    }
    #reportDescription{
        margin-left:18px;
        display: none;
    }
   .slick-top-scroll {
       display:none;
       overflow-x: scroll;
       overflow-y: hidden;
   }
   .slick-top-scroll-container {
       height: 1px;
   }
</style>
{/literal}
<div id="modalWindow" style="display:none;"></div>
<div id="ar-container">
    <div id="reportControls" style="margin-left:5px;"></div>
    <h2 style="margin-top:20px;margin-left:5px;color:#333;" id="reportTitleContainer">
    <span id="reportTitle">{$REPORTTITLE}</span>{if $CANEDIT eq 1}<a id="ar-rv-editor-title" href="#"><img src="modules/AnalyticReporting/assets/img/slickgrid/pencil.gif"></a>{/if}
    </h2>
    <span id="reportDescription">{$REPORTDESCRIPTION}</span>
    <div id="ar-rv-editor" class="ar-rv-section">
        <h5><a href="#" class="toggle asc"></a>{$MOD.label_report_editor}</h5>
        <div id="ar-rv-editor-tabs" class="ar-rv-tabs">
            <ul>
                <li><a href="#ar-rv-editor-filters">{$MOD.label_filters}</a></li>
                <li><a href="#ar-rv-editor-fields">{$MOD.label_fields}</a></li>
                {if $REPORTCOMBINED neq true} {* #5098 *}
                <li><a href="#ar-rv-editor-calcfields">{$MOD.label_calc_fields}</a></li>
                {/if}
                <li><a href="#ar-rv-editor-agregates">{$MOD.label_aggregates}</a></li>
                <li><a href="#ar-rv-editor-groupingsorting">{$MOD.label_grouping_sorting}</a></li>
                <li><a href="#ar-rv-editor-labels">{$MOD.label_labels}</a></li>
                <li><a href="#ar-rv-editor-access">{$MOD.label_access}</a></li>
            </ul>
        <div id="ar-rv-editor-filters"></div>
        <div id="ar-rv-editor-fields"></div>
        {if $REPORTCOMBINED neq true} {* #5098 *}
        <div id="ar-rv-editor-calcfields"></div>
        {/if}
        <div id="ar-rv-editor-agregates"></div>
        <div id="ar-rv-editor-groupingsorting"></div>
        <div id="ar-rv-editor-labels"></div>
        <div id="ar-rv-editor-access">
            <strong>{$MOD.label_sharing}</strong><br>
            <div id="ar-rv-editor-access-sharing"></div><br>
            <strong>{$MOD.label_scheduling}</strong><br>
            <div id="ar-rv-editor-access-scheduling"></div>
        </div>
        </div>
    </div>

    <div id="ar-rv-data" class="ar-rv-section">
        <h5><a href="#" class="toggle asc"></a>{$MOD.label_report}</h5>

            <div class="pagination" id="pagination-top"></div>

            <div id="displayData">
                <div class="slick-top-scroll">
                   <div class="slick-top-scroll-container"></div>
                </div>
                <div id="ar-rv-data-grid"></div>
            </div>

            <div class="pagination" id="pagination-bottom"></div>

            <br>
            <span>
                <a href="javascript:void(0);" id="printReport">{$MOD.label_print_report}</a> |
                <a href="javascript:void(0);" id="printReportChart">{$MOD.label_print_reportChart}</a> |
                <a href="javascript:void(0);" id="loadXLSX">{$MOD.label_export_xlsx}</a> |
                <a href="javascript:void(0);" id="loadPDF">{$MOD.label_export_pdf}</a>
            </span>
    </div>

    <!-- REPORT VIEWER CHART EDITOR -->
    <div id="ar-rv-chart-editor" class="ar-rv-section">
        <h5><a href="#" class="toggle asc"></a>{$MOD.label_chart_editor}</h5>
        <div id="ar-rv-chart-editor-tabs" class="ar-rv-tabs">
            <ul>
                <li><a href="#ar-rv-chart-editor-type">{$MOD.label_chart_type}</a></li>
                <li><a href="#ar-rv-chart-editor-labels">{$MOD.label_legend_axis}</a></li>
            </ul>

            <div id="ar-rv-chart-editor-type"></div>
            <div id="ar-rv-chart-editor-labels"></div>
        </div>
    </div>
    <!-- // REPORT VIEWER CHART EDITOR -->

    <!-- REPORT VIEWER CHART VIEW -->
    <div id="ar-rv-chart-view" class="ar-rv-section">
        <h5><a href="#" class="toggle asc"></a>{$MOD.label_chart}</h5>
        <div id="chart1" style=""></div>
    </div>
    <!-- // REPORT VIEWER CHART VIEW -->

</div>

{* Include underscore.js and Ractive.js templates *}
{include file="modules/AnalyticReporting/templates/templates.tpl"}

{literal}
<script>
/**
 * Define defaults for ReportGrid and ReportChart
 */
var ReportData = {
    // Available fields grouped in blocks






    // Main server data fetching URL
    url: 'index.php?module=AnalyticReporting&action=loadReport{/literal}{if $REPORTCOMBINED eq true}&combined=1{/if}{literal}&record=',
    //download URL
    urlXLS: 'index.php?module=AnalyticReporting&action=makeXLS{/literal}{if $REPORTCOMBINED eq true}&combined=1{/if}{literal}&record=',
    urlPDF: 'index.php?module=AnalyticReporting&action=makePDF{/literal}{if $REPORTCOMBINED eq true}&combined=1{/if}{literal}&record=',
    // Main server data saving URL
    saveUrl: 'index.php?module=AnalyticReporting&action=saveReport{/literal}{if $REPORTCOMBINED eq true}&combined=1{/if}{literal}&record=',
    urlLoadPicklists: 'index.php?module=AnalyticReporting&action=loadPicklists', // #4540

    // #4023 - Add to dashboar URL
    addToDashboardUrl: 'index.php?module=AnalyticReporting&action=addToDashboard',

    // Temporary data set result storage (from server)
    currentResult: null,
    // Additional options passed to server
//    options: {
//        // Summary or detail grid
//        includeDetails: false,
//        // Is cross tab or not
//        isCrosstab: false,
//    },
    {/literal}
    // Selected report ID
    id: {$REPORTID},
    isWidget:false,
    options:{$REPORTOPTIONS},
    labels:{$REPORTLABELS},
    availableFields: {$REPORTFIELDS},
    // Selected attributes for current report template
    selectedFilters: {$REPORTFILTERS},
    selectedAggregates: {$REPORTAGGREGATES},
    totalAggregates: {$REPORTTOTALAGGREGATES},
    selectedFields: {$REPORTCOLUMNS},
    calcFields: {$REPORTCALCCOLUMNS}, // #5098
    fieldGroupingSorting: {$REPORTGROUPING},
    {if $REPORTCOMBINED eq true}
        // Array of modules for selected fields for combined report
        combinedModules:{$REPORTCOMBINEDMODULES},
        combinedSelectedFields:{$REPORTCOMBINEDFIELDS},
        selectableFields:{$REPORTSELECTABLEFIELDS},
        commonModules:{$REPORTCOMMONMODULES},
    {else}
        combinedModules:[],
        combinedSelectedFields:[],
        selectableFields:[],
        commonModules:[],
    {/if}

    // Chart title
    chartTitle: {$CHARTTITLE},

    // Chart type
    chartType: {$CHARTTYPE},
    // #4540 - Chart cumulated
    chartCumulated: {$CHARTCUMULATED},
    // #4540 - Chart sortable values (ordered)
    chartSortableValues:{$CHARTSORTABLEVALUES},
    // Selected labels (can be array of values)
    chartLabels: {$CHARTLABELS},
    // Selected axis
    chartAxisX: {$CHARTAXISX},
    chartAxisY: {$CHARTAXISY},
    chartAxisY2: {$CHARTAXISY2},

    // Chary axis type - line, bar, etc.
    chartYAxisType: {$CHARTYAXISTYPE},
    chartYAxis2Type: {$CHARTYAXIS2TYPE},

    // Stacked or not combined chart bars
    chartBars1Stacked: {$CHARTBARS1STACKED},
    chartBars2Stacked: {$CHARTBARS2STACKED},

    // Selected items for legend (in future, can be array)
    chartLegend: {$CHARTLEGEND},
    // Chart is stacked or grouped
    chartStacked: {$CHARTSTACKED},
    // #4038 - Available and selected chart size in percents
    chartSizes: {literal}[{"title":50, "value":50},{"title":60, "value":60},{"title":70, "value":70},{"title":80, "value":80},{"title":90, "value":90},{"title":100, "value":100}]{/literal},
    chartSize: {$CHARTSIZE},
    chartHeight: {$CHARTHEIGHT}, // #4351
    chartShowPercents: {$CHARTSHOWPERCENTS}, // #4545
    chartShowLabels: {$CHARTSHOWLABELS}, // #5169
    chartShowZoneLabels: {$CHARTSHOWZONELABELS}, // #5169
    chartValueZones: {$CHARTVALUEZONES}, // #4541
    chartAxisXSegment: {$CHARTAXISXSEGMENT}, // #4541
    
    reportAccessUsers:{$REPORTACCESSUSERS},
    reportAccessUsersSelected:{$REPORTACCESSUSERSSELECTED},
    reportScheduleUsers:{$REPORTSCHEDULEUSERS},
    reportScheduleUsersSelected:{$REPORTSCHEDULEUSERSSELECTED},
    schedule:{$REPORTSCHEDULESETTINGS},
    users:{$REPORTUSERS},
    owner:{$REPORTOWNER},
    canEdit:{$CANEDIT},
    canDelete:{$CANDELETE},
    sharedAccess:{$REPORTSHARING},
    sharedAccessRights:{$REPORTSHARINGLEVEL},
    numberFormat:{$NUMBERSETTINGS},
    {literal}
    // Specified chart options
    chartOptions: {
        // Get tada as summary report (we don't want millions of records for chart)
        isCrosstab: false,
        includeDetails: false,

    },
    // Current result for chart
    chartData: null,
    // Instance of chartLegendManager
    chartLegendManager: false,

    chartMargin: {top: 50, right: 150, bottom: 120, left: 100},
};

{/literal}
//#3831 [start] - get report folders
var current_folder={$current_report_folder};
var report_folders=[];
{foreach from=$report_folders key=folder_key item=report_folder}
    report_folders[{$folder_key}] = "{$report_folder}";
{/foreach}
//#3831 [end]
var translated_labels = {$DICTIONARY}; // #5286 - Refactored to JSON object

var significantDigits = {$significantDigits};

{literal}
// #5141 - When SlickGrid is finally rendered add top scroll
jQuery(document).on("slickRenderCompleted", function(){

   // Set correct width to scrollbar and container
   function setWidth() {
       var viewPortWidth = jQuery("div.slick-viewport").width();
       var canvasWidth = jQuery("div.grid-canvas").width();
       jQuery("div.slick-top-scroll").css("width", viewPortWidth);
       jQuery("div.slick-top-scroll div").css("width", canvasWidth);
       if(viewPortWidth >= canvasWidth) {
           jQuery('div.slick-top-scroll').hide();
       } else {
           jQuery('div.slick-top-scroll').show();
       }
   }

   // On change window set correct width;
   jQuery(window).resize(function(){
       setWidth();
   });
   setWidth();

   // On scroll "bottom" scrollbar, change top scrollbar position
   jQuery("div.slick-viewport").scroll(function(){
       jQuery("div.slick-top-scroll").scrollLeft(jQuery("div.slick-viewport").scrollLeft());
   });

   // On scroll "top" scrollbar, change "bottom" scrollbar position
   jQuery("div.slick-top-scroll").scroll(function(){
       jQuery("div.slick-viewport").scrollLeft(jQuery("div.slick-top-scroll").scrollLeft());
   });
});
{/literal}

{* #4538 [start] - Resize container by content width, else it will be as width as .slick-header-columns *}
{literal}
function resizeContainer() {
    var newWidth = jQuery("#content").width() - 40;
    jQuery("#ar-container").width(newWidth);    
}

jQuery(window).resize(function(){
    resizeContainer();
});
resizeContainer();
{/literal}
{* #4538 [end] *}
</script>

<script src="modules/AnalyticReporting/assets/js/multiselect/jquery.multiselect.js"></script>
<link href="modules/AnalyticReporting/assets/css/multiselect/jquery.multiselect.css" rel="stylesheet" type="text/css">
{if $REPORTCOMBINED eq true}
    <script type="text/javascript">
    {literal}
    for(var i = 0; i < ReportData.availableFields.length; i++) {
        for(var j = 0; j < ReportData.availableFields[i].fields.length; j++) {
            ReportData.availableFields[i].fields[j].moduleId = ReportData.availableFields[i].fields[j].name.split("_")[0];
        }
    }
    for(var i = 0; i < ReportData.selectableFields.length; i++) {
        for(var j = 0; j < ReportData.selectableFields[i].fields.length; j++) {
            ReportData.selectableFields[i].fields[j].moduleId = ReportData.selectableFields[i].fields[j].name.split("_")[0];
        }
    }
    
    // #5382 - After saving combined report, remove first level grouping elements from common grouping
    ReportData.fieldGroupingSorting = ReportData.fieldGroupingSorting.filter(function (el) {
        return el.showAggregates !== undefined;
    });
    {/literal}
    </script>
{/if}

<link href="modules/AnalyticReporting/assets/css/AnalyticReporting.css" rel="stylesheet" type="text/css" media="all" />
<script src="modules/AnalyticReporting/assets/js/AnalyticReporting.min.js"></script>
<style media="print">{literal}
    #header, #footer, #bottomLinks, td>p.error {
        display: none;
    }
    #ar-container{
        display: block; !important;
    }
    #ar-container > * {
        display: none;
    }
    #reportTitleContainer > *{
        display: none;
    }
    #reportTitleContainer{
        display: block; !important;
    }
    #reportTitle{
        display: block; !important;
    }

    #ar-rv-data{
        display: block; !important;
    }
    #ar-rv-data > * {
        display: none;
    }
    #ar-rv-data-grid {
        border: none;
    }
    #displayData{
        display: block; !important;
    }
    #ar-rv-chart-view{
        display: block; !important;
        max-width: 250mm;
    }
    #ar-rv-chart-view > *{
        display: none;
    }
    #chart1{
        display: block; !important;
        max-width: 230mm;
    }
    #chart1 > div{
        display: none;
    }
    {/literal}
</style>