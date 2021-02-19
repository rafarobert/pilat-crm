<html>
<head>
	<title>{$CHARTTITLE}</title>
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

	{* Include underscore.js and Ractive.js templates *}
	{include file="modules/AnalyticReporting/templates/templates.tpl"}

	<script>
	$fullScreen = {$fullScreen}; // #4449
	{literal}
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
			jQuery(window).trigger('resize');
		}

		// Open chart in larg window
		jQuery("#enlargeChart").click(function() {
			var height = jQuery(window.parent).height() - (jQuery(window.parent).height() / 3);
			var width = jQuery(window.parent).width() - (jQuery(window.parent).width() / 3);
			var url = "index.php?module=AnalyticReporting&action=widget&record={/literal}{$REPORTID}{literal}&fullScreen=true&is_pdf=1";
			var popup = window.open(url,"Enlrage",'height='+height+',width='+width);
		});
		// #4449 [end]
	});
	{/literal}
	</script>

	<script type="text/javascript">
	var ReportData = {literal}{{/literal}
		// Selected report ID
		id: {$REPORTID},
		isWidget:true,
		options:{$REPORTOPTIONS},
		labels:{$REPORTLABELS},

		availableFields: {$REPORTFIELDS},
		// Selected attributes for current report template
		selectedFilters: {$REPORTFILTERS},
		selectedAggregates: {$REPORTAGGREGATES},
		totalAggregates: {$REPORTTOTALAGGREGATES},
		selectedFields: {$REPORTCOLUMNS},
		fieldGroupingSorting: {$REPORTGROUPING},

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

		numberFormat:{$NUMBERSETTINGS},
		// Current result for chart
		chartData: {$CHARTDATA},
		chartShowPercents: {$CHARTSHOWPERCENTS}, // #4545
		chartShowLabels: {$CHARTSHOWLABELS}, // #5169
		chartShowZoneLabels: {$CHARTSHOWZONELABELS}, // #5169
		chartValueZones: {$CHARTVALUEZONES}, // #4541
		chartAxisXSegment: {$CHARTAXISXSEGMENT}, // #4541
    
		chartMargin: {literal}{top: 0, right: 40, bottom: 50, left: 50},{/literal}
		
	{literal}};{/literal}

	{literal}
	var translated_labels = {
		label_preview:"{/literal}{$MOD.label_preview}{literal}",
		label_stacked:"{/literal}{$MOD.label_stacked}{literal}",
	};
	var significantDigits = {/literal}{$significantDigits}{literal};
	var reportBtn = {
	};
	{/literal}
	</script>

	<link href="modules/AnalyticReporting/assets/css/AnalyticReporting.css" rel="stylesheet" type="text/css" media="all" />
	<script src="modules/AnalyticReporting/assets/js/widget.min.js"></script>

	{literal}
	<style>
		/* #5497 [start] - center gauge chart */
		{/literal}
		{if $CHARTTYPE eq '"gauge"'}
			body, html {ldelim}margin:auto auto;width:280px;padding:0;{rdelim}
		{else}
			body, html {ldelim}margin:0;padding:0;{rdelim}
		{/if}
		/* #5497 [end] */
		{literal}
		#chart1 {height:280px;width:100%;}
/*		#chart1.pie {height:320px !important;}
		#chart1.combined {height:350px !important;}
		#chart1.bar {height:350px !important;}
		#chart1.line {height:350px !important;}*/
		#chart1 svg {width:100%;}
		.linkToReport {position:absolute;bottom:5px;left:5px;}
	</style>
	{/literal}

	<div style="position:relative">
	<div id="chart1" class={$CHARTTYPE}></div>
	
	{* #4023 [start] - Added link to report *}
	{if $fullScreen eq 'false'} {* #4449 [start] *}
	<div class="linkToReport copy">
		<a href="index.php?module=AnalyticReporting&action=report&record={$REPORTID}" style="font-size:11px;" target="_parent">Open Report</a>
		<a href="javascript:void(0)" id="enlargeChart" style="font-size:11px;">Enlarge</a>
	</div>
	{/if} {* #4449 [end] *}
	{* #4023 [end] *}
	</div>

	<script type="text/javascript">
	initChartView(ReportData.chartType);
	</script>
</body>
</html>