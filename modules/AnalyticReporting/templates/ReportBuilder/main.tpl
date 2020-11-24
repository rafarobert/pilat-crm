<script src="modules/AnalyticReporting/assets/js/jquery/jquery-1.8.3.min.js"></script>
<script type="text/javascript">
	jQuery.noConflict();
</script>

<script src="modules/AnalyticReporting/assets/js/ractive/Ractive.min.js"></script>
<link href="modules/AnalyticReporting/assets/css/AnalyticReporting.css" rel="stylesheet" tye="text/css" media="all" />
<link href="modules/AnalyticReporting/assets/css/ReportBuilder.css" rel="stylesheet" tye="text/css" media="all" />

{include file="modules/AnalyticReporting/templates/ReportBuilder/templates.tpl"}

<div id="ar-report-builder"></div>

{literal}
<script>
//passed to reportBuilder
var reportBuilderOptions = {
	//lists of predefined elements
	types:{
		{/literal}
		reportTypes:{$reportTypes},
		relationTypes:{$relationTypes},
		moduleTypes:{$modules},
		modulesFieldTypes:{$modulesFields},
		categoryTypes:{$categories},
		manyToManyTypes:{$manyToManyConfig},
		{literal}
	},
	//internal attributes, server urls, server response
	{/literal}
	internal:{$internal},
	{literal}
};
</script>
<script src="modules/AnalyticReporting/assets/js/builder.min.js"></script>
{/literal}