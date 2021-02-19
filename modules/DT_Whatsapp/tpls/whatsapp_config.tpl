{php}
global $sugar_config;

{/php}
<div class="moduleTitle">
    <h2 class="module-title-text">
        <a href="#">WhatsApp</a><span class="pointer">»</span> CONFIGURACIÓN
    </h2>
    <div class="clear"></div>
</div>

<form id="Gateway_opt" name="Gateway_opt" method="POST" action="">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" class="dcQuickEdit">
        <tr>
            <td style="padding-bottom: 2px;" width="100%">
                <input title="GUARDAR" name="save_whatsapp"  class="button" type="submit" value="GUARDAR">
                <input title="CANCELAR" onclick="document.location.href = 'index.php?module=Administration&action=index'" class="button" type="button" value="CANCELAR">
            </td>
        </tr>
    </table>

   

    <div class="clear"></div>
    <div class="clear"></div>
    <br>
    <div name="waboxapp" id="waboxapp">
        <div class="panel panel-default">
            <div class="panel-heading">
                Configuración API KEY waboxapp
            </div>

            <div class="panel-body panel-collapse collapse in" id="detailpanel_-1">
                <div class="tab-content">
                    <!-- tab_panel_content.tpl -->
                    <div class="row edit-view-row">
                        <div>
                            <div class="col-xs-12 col-sm-4">
                                API Token
                            </div>
                            <div class="col-xs-12 col-sm-8 edit-view-field " type="varchar">
                                <input type="text" name="waboxapp_token" id="waboxapp_token" size="50" maxlength="255" value="{$waboxapp_token}">
                            </div>
                            <!-- [/hide] -->
                        </div> 
                        <div class="clearfix" style="padding:10px"></div>                       
                        <div>
                            <div class="col-xs-12 col-sm-8">
                                Sitio:
                            </div>
                            <div class="col-xs-12 col-sm-4">
                                Número Whatsapp:
                            </div>                          
                        </div> 
                        {foreach from=$waboxapp_mobile_number item=value_item}
                        <div>                           
                            <div class="col-xs-12 col-sm-8 edit-view-field">
                                <input type="text" name="waboxapp_site[]" id="waboxapp_site" size="50" maxlength="255" value="{$value_item.sitio}">
                            </div>                            
                            <div class="col-xs-12 col-sm-4 edit-view-field " type="varchar">
                                <input type="text" name="waboxapp_mobile_number[]" id="waboxapp_mobile_number" size="50" maxlength="255" value="{$value_item.numero}">
                            </div>                           
                        </div>
                        {/foreach} 
                        <div>                           
                            <div class="col-xs-12 col-sm-8 edit-view-field">
                                <input type="text" name="waboxapp_site[]" id="waboxapp_site" size="50" maxlength="255">
                            </div>                            
                            <div class="col-xs-12 col-sm-4 edit-view-field" type="varchar">
                                <input type="text" name="waboxapp_mobile_number[]" id="waboxapp_mobile_number" size="50" maxlength="255" >
                            </div>                           
                        </div>
                    </div>
                 <!-- <div class="row edit-view-row">
                        <div>
                            <div class="col-xs-12 col-sm-4 label">
                                From Number:
                            </div>
                            <div class="col-xs-12 col-sm-8 edit-view-field " type="varchar">
                                <input type="text" name="whatsapp_from_number" id="whatsapp_from_number" size="50" maxlength="255" value="{$WHATSAPP_FROM_NUMMBER}">
                            </div>
                        </div> 
                        <div>
                            <div class="col-xs-12 col-sm-4 label">
                                To Number(For Testing):
                            </div>
                            <div class="col-xs-12 col-sm-8 edit-view-field " type="varchar">
                                <input type="text" placeholder="Mobile Number" name="whatsapp_to" id="whatsapp_to" size="50" maxlength="255" value="{$WHATSAPP_TO}">
                            </div>
                        </div>
                    </div> -->
                    <br>
                     <div class="clear"></div>
                     <div class="clear"></div>
                </div>
            </div>
        </div>

    </div>

</form>
<script type="text/javascript">
    {literal}

        $(document).ready(function () {

            $("#test_whatsapp").click(function () {
                var sel_gateway = $('#gateway').val();
                //alert("Handler for .click() called." + sel_gateway);
                $('#Testing_WhatsAPP').modal('toggle');
                
                $.ajax({
                    url: 'index.php?entryPoint=DT_Whatsapp_Options',
                    type: 'POST',
                    data: {action: 'get_testwhatsapp_body'},
                    success: function (get_body) {
                        //document.getElementById("des").value = errorResponse;
                        //alert(get_body);
                        $("#whatsapptesting_dashboardDialog").empty();
                        $("#whatsapptesting_dashboardDialog").append(get_body);
                    }
                });



            });

        });
    {/literal}
</script>

