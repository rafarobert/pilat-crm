<?php /* Smarty version 2.6.31, created on 2020-11-13 21:10:33
         compiled from modules/AnalyticReporting/Dashlets/WidgetDashlet/WidgetDashlet.tpl */ ?>
<html>
<head>
	<title><?php echo $this->_tpl_vars['CHARTTITLE']; ?>
</title>
</head>
<body>	
	<script src="modules/AnalyticReporting/assets/js/jquery/jquery-1.8.3.min.js"></script>
	<script type="text/javascript">
		jQuery.noConflict();
	</script>
	<script src="modules/AnalyticReporting/assets/js/nvd3/d3.js" charset="utf-8"></script>
	<script src="modules/AnalyticReporting/assets/js/nvd3/nv.d3.js"></script>
	<script src="modules/AnalyticReporting/assets/js/ractive/Ractive.min.js"></script>
	<script src="modules/AnalyticReporting/assets/js/ractive/ractive-decorators-select2.min.js"></script>
	<script src="modules/AnalyticReporting/assets/js/underscore.js"></script>
	<script src="modules/AnalyticReporting/assets/js/d3-funnel.js"></script>
	<script src="modules/AnalyticReporting/assets/js/d3-gauge.js"></script>
	<link href="modules/AnalyticReporting/assets/css/nvd3/nv.d3.css" rel="stylesheet" type="text/css">
	<link href="modules/AnalyticReporting/assets/css/d3-gauge.css" rel="stylesheet" type="text/css">

		<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "modules/AnalyticReporting/templates/templates.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>

	<script>
	$fullScreen = <?php echo $this->_tpl_vars['fullScreen']; ?>
; // #4449
	<?php echo '
	jQuery(document).ready(function() {
		// If used in vTiger dashboard frame
		// if(jQuery(frameElement).length > 0) {
		// 	// Fixing iFrame size in vTiger
		// 	jQuery(frameElement).css({
		// 		"overflow":"hidden",
		// 		"overflow-x":"hidden",
		// 		"overflow-y":"hidden",
		// 		//"height":"100%",
		// 		height:"300px",
		// 		"width":"100%",
		// 		"position":"absolute",
		// 		//"top":"0px",
		// 		top: "25px",
		// 		"left":"0px",
		// 		"right":"0px",
		// 		"bottom":"0px",
		// 	});
		// 	// Remove scroll link from dashboard element
		// 	jQuery(frameElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement).find("table.scrollLink").remove();
		// }

		// #4449 [start] - If opened widget in fullscreen mode, expand chart
		if($fullScreen) {
			jQuery("svg").height(jQuery(document).height() - 50);
			jQuery("svg").width(jQuery(document).width() - 50);
			jQuery(window).trigger(\'resize\');
		}

		// Open chart in larg window
		jQuery("#enlargeChart").click(function() {
			var height = jQuery(window.parent).height() - (jQuery(window.parent).height() / 3);
			var width = jQuery(window.parent).width() - (jQuery(window.parent).width() / 3);
			var url = "index.php?module=AnalyticReporting&action=widget&record='; ?>
<?php echo $this->_tpl_vars['REPORTID']; ?>
<?php echo '&fullScreen=true&is_pdf=1";
			var popup = window.open(url,"Enlrage",\'height=\'+height+\',width=\'+width);
		});
		// #4449 [end]
	});
	'; ?>

	</script>

	<script type="text/javascript">
	var ReportData = <?php echo '{'; ?>

		// Selected report ID
		id: <?php echo $this->_tpl_vars['REPORTID']; ?>
,
		isWidget:true,
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
		fieldGroupingSorting: <?php echo $this->_tpl_vars['REPORTGROUPING']; ?>
,

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

		numberFormat:<?php echo $this->_tpl_vars['NUMBERSETTINGS']; ?>
,
		// Current result for chart
		chartData: <?php echo $this->_tpl_vars['CHARTDATA']; ?>
,
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
    
		chartMargin: <?php echo '{top: 0, right: 40, bottom: 50, left: 50},'; ?>

		
	<?php echo '};'; ?>


	<?php echo '
	var translated_labels = {
		label_preview:"'; ?>
<?php echo $this->_tpl_vars['MOD']['label_preview']; ?>
<?php echo '",
		label_stacked:"'; ?>
<?php echo $this->_tpl_vars['MOD']['label_stacked']; ?>
<?php echo '",
	};
	var significantDigits = '; ?>
<?php echo $this->_tpl_vars['significantDigits']; ?>
<?php echo ';
	var reportBtn = {
	};
	'; ?>

	</script>

	<link href="modules/AnalyticReporting/assets/css/AnalyticReporting.css" rel="stylesheet" type="text/css" media="all" />
	<script src="modules/AnalyticReporting/assets/js/widget.min.js"></script>

	<?php echo '
	<style>
		/* #5497 [start] - center gauge chart */
		'; ?>

		<?php if ($this->_tpl_vars['CHARTTYPE'] == '"gauge"'): ?>
			body, html {margin:auto auto;width:280px;padding:0;}
		<?php else: ?>
			body, html {margin:0;padding:0;}
		<?php endif; ?>
		/* #5497 [end] */
		<?php echo '
		#chart1 {height:280px;width:100%;}
/*		#chart1.pie {height:320px !important;}
		#chart1.combined {height:350px !important;}
		#chart1.bar {height:350px !important;}
		#chart1.line {height:350px !important;}*/
		#chart1 svg {width:100%;}
		.linkToReport {position:absolute;bottom:5px;left:5px;}
	</style>
	'; ?>


	<div style="position:relative">
	<div id="chart1" class=<?php echo $this->_tpl_vars['CHARTTYPE']; ?>
></div>
	
		<?php if ($this->_tpl_vars['fullScreen'] == 'false'): ?> 	<div class="linkToReport copy">
		<a href="index.php?module=AnalyticReporting&action=report&record=<?php echo $this->_tpl_vars['REPORTID']; ?>
" style="font-size:11px;" target="_parent">Open Report</a>
		<a href="javascript:void(0)" id="enlargeChart" style="font-size:11px;">Enlarge</a>
	</div>
	<?php endif; ?> 		</div>

	<script type="text/javascript">
	initChartView(ReportData.chartType);
	</script>
</body>
</html>