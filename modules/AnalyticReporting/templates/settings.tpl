<!DOCTYPE html>
<html>
<meta charset="utf-8">
	<script src="modules/AnalyticReporting/assets/js/jquery/jquery-1.8.3.min.js"></script>
	<script type="text/javascript">
		jQuery.noConflict();
	</script>
	<link href="modules/AnalyticReporting/assets/css/AnalyticReporting.css" rel="stylesheet" tye="text/css" media="all" />
</meta>
<body>

<div style="padding:10px;">

	<form action="index.php" method="post" enctype="multipart/form-data">
		<input style="height:25px; margin-top:-2px;" class="ar-button green" type="submit" name="submit" value="Save" />
		<a class="ar-button" style="margin-bottom:10px;" href="index.php?module=AnalyticReporting&action=index">Back to reports</a>
		<span>{$response}</span>
		<h2 style="color:#333;font-size:1.5em;margin-top:10px;margin-bottom:5px;">Report Builder</h2>
		<a class="ar-button" href="{$commonConfig.url.reportBuilder}">Open</a>

		<h2 style="color:#333;font-size:1.5em;margin-top:10px;margin-bottom:5px;">Reporting Tool Settings</h2>


		<input type="hidden" name="module" value="AnalyticReporting" />
		<input type="hidden" name="action" value="settings" />



		<h3>License Management</h3>
		<div style="float:left;width:200px;font-size:1.4em; padding:5px;margin-right:20px;">
			<label for="license">License upload</label>
		</div>

		<textarea id="license" name="key"></textarea>
<!--
		<h3>Date Format</h3>
		<div style="float:left;width:200px;font-size:1.4em; padding:5px;margin-right:20px;">
			<label for="license" >Date Format Settings</label>
		</div>
		<input type="text" name="dateformat" title="Date Format Settings" />
-->
	</form>
</div>

</body>
</html>
