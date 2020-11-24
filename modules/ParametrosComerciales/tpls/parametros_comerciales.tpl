{php}
global $sugar_config;

{/php}
<div class="moduleTitle">
    <h2 class="module-title-text">
        <a href="#">Parámetros Comerciales</a><span class="pointer"> »</span> CONFIGURACIÓN
    </h2>
    <div class="clear"></div>
</div>
<form id="form_setting" name="form_setting" method="POST" action="">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" class="dcQuickEdit">
        <tr>
            <td style="padding-bottom: 2px;" width="100%">
                <input title="GUARDAR" name="save_parametros_comerciales"  class="button" type="submit" value="GUARDAR">
                <input title="CANCELAR" onclick="document.location.href = 'index.php?module=Administration&action=index'" class="button" type="button" value="CANCELAR">
            </td>
        </tr>
    </table>
    <div class="clear"></div>
    <div class="clear"></div>
    <br>
    <div name="parametros_comerciales" id="parametros_comerciales">
	<div class="panel panel-default">           
            <div class="panel-body panel-collapse collapse in" id="detailpanel_-1">
		<div class="tab-content">
			<div class="row edit-view-row">
				<div class="col-xs-12 col-sm-4">Fecha de Cierre(Dias)</div>
                            	<div class="col-xs-12 col-sm-8 edit-view-field " type="varchar">
                                	<input type="text" name="fecha_cierre_dias" id="fecha_cierre_dias" size="50" maxlength="255" value="{$fecha_cierre_dias}">
                            	</div>
			</div>
		</div>
	    </div>
        </div>
    </div>
</form>

