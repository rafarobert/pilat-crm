<script src="modules/AnalyticReporting/assets/js/jquery/jquery-1.8.3.min.js"></script>
<script type="text/javascript">
	jQuery.noConflict();
</script>

<script src="modules/AnalyticReporting/assets/js/ractive/Ractive.min.js"></script>
<script src="modules/AnalyticReporting/assets/js/ractive/ractive-decorators-select2.min.js"></script>
<link href="modules/AnalyticReporting/assets/css/AnalyticReporting.css" rel="stylesheet" tye="text/css" media="all" />
<link href="modules/AnalyticReporting/assets/css/ReportBuilder.css" rel="stylesheet" tye="text/css" media="all" />

{include file="modules/AnalyticReporting/templates/ReportBuilder/templates.tpl"}

<div id="ar-container">
	<div id="ar-settings"></div>
</div>

{literal}
<script>

var loadedSettings = {
	types:{
		{/literal}
		moduleTypes:{$modules},
		manyToManyTypes:{$manyToManyConfig},
		{literal}
	},
};
</script>
<script src="modules/AnalyticReporting/assets/js/builder.min.js"></script>
{/literal}