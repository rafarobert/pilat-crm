<?php /* Smarty version 2.6.31, created on 2020-11-13 21:11:57
         compiled from modules/AnalyticReporting/templates/report.tpl */ ?>
<script src="modules/AnalyticReporting/assets/js/jquery/jquery-1.8.3.min.js"></script>

<script type="text/javascript">
    jQuery.noConflict();
</script>
<?php echo '
<script data-pace-options=\'{ "ajax": false }\' src="modules/AnalyticReporting/assets/js/pace.js"></script>
'; ?>

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
<?php echo '
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
'; ?>

<div id="modalWindow" style="display:none;"></div>
<div id="ar-container">
    <div id="reportControls" style="margin-left:5px;"></div>
    <h2 style="margin-top:20px;margin-left:5px;color:#333;" id="reportTitleContainer">
    <span id="reportTitle"><?php echo $this->_tpl_vars['REPORTTITLE']; ?>
</span><?php if ($this->_tpl_vars['CANEDIT'] == 1): ?><a id="ar-rv-editor-title" href="#"><img src="modules/AnalyticReporting/assets/img/slickgrid/pencil.gif"></a><?php endif; ?>
    </h2>
    <span id="reportDescription"><?php echo $this->_tpl_vars['REPORTDESCRIPTION']; ?>
</span>
    <div id="ar-rv-editor" class="ar-rv-section">
        <h5><a href="#" class="toggle asc"></a><?php echo $this->_tpl_vars['MOD']['label_report_editor']; ?>
</h5>
        <div id="ar-rv-editor-tabs" class="ar-rv-tabs">
            <ul>
                <li><a href="#ar-rv-editor-filters"><?php echo $this->_tpl_vars['MOD']['label_filters']; ?>
</a></li>
                <li><a href="#ar-rv-editor-fields"><?php echo $this->_tpl_vars['MOD']['label_fields']; ?>
</a></li>
                <?php if ($this->_tpl_vars['REPORTCOMBINED'] != true): ?>                 <li><a href="#ar-rv-editor-calcfields"><?php echo $this->_tpl_vars['MOD']['label_calc_fields']; ?>
</a></li>
                <?php endif; ?>
                <li><a href="#ar-rv-editor-agregates"><?php echo $this->_tpl_vars['MOD']['label_aggregates']; ?>
</a></li>
                <li><a href="#ar-rv-editor-groupingsorting"><?php echo $this->_tpl_vars['MOD']['label_grouping_sorting']; ?>
</a></li>
                <li><a href="#ar-rv-editor-labels"><?php echo $this->_tpl_vars['MOD']['label_labels']; ?>
</a></li>
                <li><a href="#ar-rv-editor-access"><?php echo $this->_tpl_vars['MOD']['label_access']; ?>
</a></li>
            </ul>
        <div id="ar-rv-editor-filters"></div>
        <div id="ar-rv-editor-fields"></div>
        <?php if ($this->_tpl_vars['REPORTCOMBINED'] != true): ?>         <div id="ar-rv-editor-calcfields"></div>
        <?php endif; ?>
        <div id="ar-rv-editor-agregates"></div>
        <div id="ar-rv-editor-groupingsorting"></div>
        <div id="ar-rv-editor-labels"></div>
        <div id="ar-rv-editor-access">
            <strong><?php echo $this->_tpl_vars['MOD']['label_sharing']; ?>
</strong><br>
            <div id="ar-rv-editor-access-sharing"></div><br>
            <strong><?php echo $this->_tpl_vars['MOD']['label_scheduling']; ?>
</strong><br>
            <div id="ar-rv-editor-access-scheduling"></div>
        </div>
        </div>
    </div>

    <div id="ar-rv-data" class="ar-rv-section">
        <h5><a href="#" class="toggle asc"></a><?php echo $this->_tpl_vars['MOD']['label_report']; ?>
</h5>

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
                <a href="javascript:void(0);" id="printReport"><?php echo $this->_tpl_vars['MOD']['label_print_report']; ?>
</a> |
                <a href="javascript:void(0);" id="printReportChart"><?php echo $this->_tpl_vars['MOD']['label_print_reportChart']; ?>
</a> |
                <a href="javascript:void(0);" id="loadXLSX"><?php echo $this->_tpl_vars['MOD']['label_export_xlsx']; ?>
</a> |
                <a href="javascript:void(0);" id="loadPDF"><?php echo $this->_tpl_vars['MOD']['label_export_pdf']; ?>
</a>
            </span>
    </div>

    <!-- REPORT VIEWER CHART EDITOR -->
    <div id="ar-rv-chart-editor" class="ar-rv-section">
        <h5><a href="#" class="toggle asc"></a><?php echo $this->_tpl_vars['MOD']['label_chart_editor']; ?>
</h5>
        <div id="ar-rv-chart-editor-tabs" class="ar-rv-tabs">
            <ul>
                <li><a href="#ar-rv-chart-editor-type"><?php echo $this->_tpl_vars['MOD']['label_chart_type']; ?>
</a></li>
                <li><a href="#ar-rv-chart-editor-labels"><?php echo $this->_tpl_vars['MOD']['label_legend_axis']; ?>
</a></li>
            </ul>

            <div id="ar-rv-chart-editor-type"></div>
            <div id="ar-rv-chart-editor-labels"></div>
        </div>
    </div>
    <!-- // REPORT VIEWER CHART EDITOR -->

    <!-- REPORT VIEWER CHART VIEW -->
    <div id="ar-rv-chart-view" class="ar-rv-section">
        <h5><a href="#" class="toggle asc"></a><?php echo $this->_tpl_vars['MOD']['label_chart']; ?>
</h5>
        <div id="chart1" style=""></div>
    </div>
    <!-- // REPORT VIEWER CHART VIEW -->

</div>

<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "modules/AnalyticReporting/templates/templates.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>

<?php echo '
<script>
/**
 * Define defaults for ReportGrid and ReportChart
 */
var ReportData = {
    // Available fields grouped in blocks






    // Main server data fetching URL
    url: \'index.php?module=AnalyticReporting&action=loadReport'; ?>
<?php if ($this->_tpl_vars['REPORTCOMBINED'] == true): ?>&combined=1<?php endif; ?><?php echo '&record=\',
    //download URL
    urlXLS: \'index.php?module=AnalyticReporting&action=makeXLS'; ?>
<?php if ($this->_tpl_vars['REPORTCOMBINED'] == true): ?>&combined=1<?php endif; ?><?php echo '&record=\',
    urlPDF: \'index.php?module=AnalyticReporting&action=makePDF'; ?>
<?php if ($this->_tpl_vars['REPORTCOMBINED'] == true): ?>&combined=1<?php endif; ?><?php echo '&record=\',
    // Main server data saving URL
    saveUrl: \'index.php?module=AnalyticReporting&action=saveReport'; ?>
<?php if ($this->_tpl_vars['REPORTCOMBINED'] == true): ?>&combined=1<?php endif; ?><?php echo '&record=\',
    urlLoadPicklists: \'index.php?module=AnalyticReporting&action=loadPicklists\', // #4540

    // #4023 - Add to dashboar URL
    addToDashboardUrl: \'index.php?module=AnalyticReporting&action=addToDashboard\',

    // Temporary data set result storage (from server)
    currentResult: null,
    // Additional options passed to server
//    options: {
//        // Summary or detail grid
//        includeDetails: false,
//        // Is cross tab or not
//        isCrosstab: false,
//    },
    '; ?>

    // Selected report ID
    id: <?php echo $this->_tpl_vars['REPORTID']; ?>
,
    isWidget:false,
    options:<?php echo $this->_tpl_vars['REPORTOPTIONS']; ?>
,
    labels:<?php echo $this->_tpl_vars['REPORTLABELS']; ?>
,
    availableFields: <?php echo $this->_tpl_vars['REPORTFIELDS']; ?>
,
    // Selected attributes for current report template
    selectedFilters: <?php echo $this->_tpl_vars['REPORTFILTERS']; ?>
,
    selectedAggregates: <?php echo $this->_tpl_vars['REPORTAGGREGATES']; ?>
,
    totalAggregates: <?php echo $this->_tpl_vars['REPORTTOTALAGGREGATES']; ?>
,
    selectedFields: <?php echo $this->_tpl_vars['REPORTCOLUMNS']; ?>
,
    calcFields: <?php echo $this->_tpl_vars['REPORTCALCCOLUMNS']; ?>
, // #5098
    fieldGroupingSorting: <?php echo $this->_tpl_vars['REPORTGROUPING']; ?>
,
    <?php if ($this->_tpl_vars['REPORTCOMBINED'] == true): ?>
        // Array of modules for selected fields for combined report
        combinedModules:<?php echo $this->_tpl_vars['REPORTCOMBINEDMODULES']; ?>
,
        combinedSelectedFields:<?php echo $this->_tpl_vars['REPORTCOMBINEDFIELDS']; ?>
,
        selectableFields:<?php echo $this->_tpl_vars['REPORTSELECTABLEFIELDS']; ?>
,
        commonModules:<?php echo $this->_tpl_vars['REPORTCOMMONMODULES']; ?>
,
    <?php else: ?>
        combinedModules:[],
        combinedSelectedFields:[],
        selectableFields:[],
        commonModules:[],
    <?php endif; ?>

    // Chart title
    chartTitle: <?php echo $this->_tpl_vars['CHARTTITLE']; ?>
,

    // Chart type
    chartType: <?php echo $this->_tpl_vars['CHARTTYPE']; ?>
,
    // #4540 - Chart cumulated
    chartCumulated: <?php echo $this->_tpl_vars['CHARTCUMULATED']; ?>
,
    // #4540 - Chart sortable values (ordered)
    chartSortableValues:<?php echo $this->_tpl_vars['CHARTSORTABLEVALUES']; ?>
,
    // Selected labels (can be array of values)
    chartLabels: <?php echo $this->_tpl_vars['CHARTLABELS']; ?>
,
    // Selected axis
    chartAxisX: <?php echo $this->_tpl_vars['CHARTAXISX']; ?>
,
    chartAxisY: <?php echo $this->_tpl_vars['CHARTAXISY']; ?>
,
    chartAxisY2: <?php echo $this->_tpl_vars['CHARTAXISY2']; ?>
,

    // Chary axis type - line, bar, etc.
    chartYAxisType: <?php echo $this->_tpl_vars['CHARTYAXISTYPE']; ?>
,
    chartYAxis2Type: <?php echo $this->_tpl_vars['CHARTYAXIS2TYPE']; ?>
,

    // Stacked or not combined chart bars
    chartBars1Stacked: <?php echo $this->_tpl_vars['CHARTBARS1STACKED']; ?>
,
    chartBars2Stacked: <?php echo $this->_tpl_vars['CHARTBARS2STACKED']; ?>
,

    // Selected items for legend (in future, can be array)
    chartLegend: <?php echo $this->_tpl_vars['CHARTLEGEND']; ?>
,
    // Chart is stacked or grouped
    chartStacked: <?php echo $this->_tpl_vars['CHARTSTACKED']; ?>
,
    // #4038 - Available and selected chart size in percents
    chartSizes: <?php echo '[{"title":50, "value":50},{"title":60, "value":60},{"title":70, "value":70},{"title":80, "value":80},{"title":90, "value":90},{"title":100, "value":100}]'; ?>
,
    chartSize: <?php echo $this->_tpl_vars['CHARTSIZE']; ?>
,
    chartHeight: <?php echo $this->_tpl_vars['CHARTHEIGHT']; ?>
, // #4351
    chartShowPercents: <?php echo $this->_tpl_vars['CHARTSHOWPERCENTS']; ?>
, // #4545
    chartShowLabels: <?php echo $this->_tpl_vars['CHARTSHOWLABELS']; ?>
, // #5169
    chartShowZoneLabels: <?php echo $this->_tpl_vars['CHARTSHOWZONELABELS']; ?>
, // #5169
    chartValueZones: <?php echo $this->_tpl_vars['CHARTVALUEZONES']; ?>
, // #4541
    chartAxisXSegment: <?php echo $this->_tpl_vars['CHARTAXISXSEGMENT']; ?>
, // #4541
    
    reportAccessUsers:<?php echo $this->_tpl_vars['REPORTACCESSUSERS']; ?>
,
    reportAccessUsersSelected:<?php echo $this->_tpl_vars['REPORTACCESSUSERSSELECTED']; ?>
,
    reportScheduleUsers:<?php echo $this->_tpl_vars['REPORTSCHEDULEUSERS']; ?>
,
    reportScheduleUsersSelected:<?php echo $this->_tpl_vars['REPORTSCHEDULEUSERSSELECTED']; ?>
,
    schedule:<?php echo $this->_tpl_vars['REPORTSCHEDULESETTINGS']; ?>
,
    users:<?php echo $this->_tpl_vars['REPORTUSERS']; ?>
,
    owner:<?php echo $this->_tpl_vars['REPORTOWNER']; ?>
,
    canEdit:<?php echo $this->_tpl_vars['CANEDIT']; ?>
,
    canDelete:<?php echo $this->_tpl_vars['CANDELETE']; ?>
,
    sharedAccess:<?php echo $this->_tpl_vars['REPORTSHARING']; ?>
,
    sharedAccessRights:<?php echo $this->_tpl_vars['REPORTSHARINGLEVEL']; ?>
,
    numberFormat:<?php echo $this->_tpl_vars['NUMBERSETTINGS']; ?>
,
    <?php echo '
    // Specified chart options
    chartOptions: {
        // Get tada as summary report (we don\'t want millions of records for chart)
        isCrosstab: false,
        includeDetails: false,

    },
    // Current result for chart
    chartData: null,
    // Instance of chartLegendManager
    chartLegendManager: false,

    chartMargin: {top: 50, right: 150, bottom: 120, left: 100},
};

'; ?>

//#3831 [start] - get report folders
var current_folder=<?php echo $this->_tpl_vars['current_report_folder']; ?>
;
var report_folders=[];
<?php $_from = $this->_tpl_vars['report_folders']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['folder_key'] => $this->_tpl_vars['report_folder']):
?>
    report_folders[<?php echo $this->_tpl_vars['folder_key']; ?>
] = "<?php echo $this->_tpl_vars['report_folder']; ?>
";
<?php endforeach; endif; unset($_from); ?>
//#3831 [end]
var translated_labels = <?php echo $this->_tpl_vars['DICTIONARY']; ?>
; // #5286 - Refactored to JSON object

var significantDigits = <?php echo $this->_tpl_vars['significantDigits']; ?>
;

<?php echo '
// #5141 - When SlickGrid is finally rendered add top scroll
jQuery(document).on("slickRenderCompleted", function(){

   // Set correct width to scrollbar and container
   function setWidth() {
       var viewPortWidth = jQuery("div.slick-viewport").width();
       var canvasWidth = jQuery("div.grid-canvas").width();
       jQuery("div.slick-top-scroll").css("width", viewPortWidth);
       jQuery("div.slick-top-scroll div").css("width", canvasWidth);
       if(viewPortWidth >= canvasWidth) {
           jQuery(\'div.slick-top-scroll\').hide();
       } else {
           jQuery(\'div.slick-top-scroll\').show();
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
'; ?>


<?php echo '
function resizeContainer() {
    var newWidth = jQuery("#content").width() - 40;
    jQuery("#ar-container").width(newWidth);    
}

jQuery(window).resize(function(){
    resizeContainer();
});
resizeContainer();
'; ?>

</script>

<script src="modules/AnalyticReporting/assets/js/multiselect/jquery.multiselect.js"></script>
<link href="modules/AnalyticReporting/assets/css/multiselect/jquery.multiselect.css" rel="stylesheet" type="text/css">
<?php if ($this->_tpl_vars['REPORTCOMBINED'] == true): ?>
    <script type="text/javascript">
    <?php echo '
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
    '; ?>

    </script>
<?php endif; ?>

<link href="modules/AnalyticReporting/assets/css/AnalyticReporting.css" rel="stylesheet" type="text/css" media="all" />
<script src="modules/AnalyticReporting/assets/js/AnalyticReporting.min.js"></script>
<style media="print"><?php echo '
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
    '; ?>

</style>