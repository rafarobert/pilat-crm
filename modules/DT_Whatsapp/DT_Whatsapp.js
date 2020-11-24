
var app = '<div id="Whatsapp_div" class="modal fade modal-search in" tabindex="-1" role="dialog" style="display: none; padding-left: 12px;">' +
        '<div class="modal-dialog modal-lg">' +
        '<div class="modal-content" id="WA_modal_content" style="border-color: #f08377;border-width: medium;">' +        
        '</div></div>' +
        '</div>';

var bulkwhatsapp = '<div id="Whatsapp_bulk" class="modal fade modal-search in" tabindex="-1" role="dialog" style="display: none; padding-left: 12px;">' +
        '<div class="modal-dialog modal-lg">' +
        '<div class="modal-content" style="border-color: #f08377;border-width: medium;">' +
        '<div class="modal-header" style="background:#66727d">' +
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>' +
        '<h4 class="modal-title" style="color:#fff"><b>Enviando Bulk WhatsApp</b></h4>' +
        '</div>' +
        '<div class="modal-body" id="bulkwhatsapp_dashboardDialog">' +
        '</div>' +
        '<div class="modal-footer" style="background-color:#F5F5F5">' +
        '<button type="button" class="button" id="mod_can" data-dismiss="modal">Close</button> &nbsp;' +
        '<button type="submit" id="bulkwhatsappsubmit" class="button">Send</button>' +
        '</div></div></div>' +
        '</div>';

var testing_whatsapp = '<div id="Testing_WhatsAPP" class="modal fade modal-search in" tabindex="-1" role="dialog" style="display: none; padding-left: 12px;">' +
        '<div class="modal-dialog modal-lg">' +
        '<div class="modal-content" style="border-color: #f08377;border-width: medium;">' +
        '<div class="modal-header" style="background:#66727d">' +
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>' +
        '<h4 class="modal-title" style="color:#fff"><b>Testing WhatsApp</b></h4>' +
        '</div>' +
        '<div class="modal-body" id="whatsapptesting_dashboardDialog">' +
        '</div>' +
        '<div class="modal-footer" style="background-color:#F5F5F5">' +
        '<button type="button" class="button" id="mod_can" data-dismiss="modal">Close</button> &nbsp;' +
        '</div></div></div>' +
        '</div>';

$('body').append(app);
$('body').append(testing_whatsapp);
$('body').append(bulkwhatsapp);

function sendbulkwhatsapp(module)
{
    sugarListView.get_checks();
    var whatsapp_ids = document.MassUpdate.uid.value;

    $('#Whatsapp_bulk').modal('toggle');
    $.ajax({
        url: 'index.php?entryPoint=DT_Whatsapp_Options',
        type: 'POST',
        data: {action: 'get_whatsappbulk_body', modulefrom: module, recid: whatsapp_ids},
        success: function (get_body) {
            //document.getElementById("des").value = errorResponse;
            $("#bulkwhatsapp_dashboardDialog").empty();
            $("#bulkwhatsapp_dashboardDialog").append(get_body);
        }
    });

}

function whatsapptonumber(mobile, module, recid)
{
    $('#Whatsapp_div').modal('toggle');
    $.ajax({
        url: 'index.php?entryPoint=DT_Whatsapp_Options',
        type: 'POST',
        data: {action: 'get_whatsapp_body', mobile: mobile, modulefrom: module, recid: recid},
        success: function (get_body) {
            //document.getElementById("des").value = errorResponse;
            //alert(get_body); 
            $("#WA_modal_content").empty();
            $("#WA_modal_content").append(get_body);
            $("#rec_history").click();

            // $("#back_history").attr("id", "rec_history");
            // $("#rec_history").text("History");
            // $('#whatsapp_history').css('display','none');
            // $('#whatsapp_dashboardDialog').css('display','block');
            // $("#submitwhatsapp").removeAttr('disabled');
        }
    });

}


$(document).ready(function ()
{

    $(document).on('click', '#bulkwhatsappsubmit', function () {

        var selected_id = $('#whatsapp_bulk_description').val();
        var sl_mod = $('#whatsapp_bulk_sl_mod').val();
        var sl_mod_id = $('#whatsapp_bulk_sl_mod_id').val();

        $("#errr_msg").css("display", "none");
        if (selected_id === "")
        {
            $("#errr_msg").css("display", "block");

        } else
        {
            //Sending SMS
            $("#loading_whatsapp").css("display", "block");

            $.ajax({
                url: 'index.php?entryPoint=DT_Whatsapp_Options',
                type: 'POST',
                async: true,
                data: {action: 'bulksend_whatsapp',template_id:$('#whatsapp_bulktemplate_id').val() ,template_name: $('#whatsapp_bulktemplate_id option:selected').text(), mobile_numbers: $("#whatsapp_bulkmobile_numbers").val(), body: selected_id, sl_mod: sl_mod, sl_mod_id: sl_mod_id},
                success: function (get_body) {

                    if (get_body.trim() !== "")
                    {
                        $("#loading_whatsapp").css("display", "none");
                        $("#errr_msg").text("Message Sent Successfully..");
                        $("#errr_msg").css("color", "blue");
                        $("#errr_msg").css("display", "block");
                    } else
                    {
                        $("#loading_whatsapp").css("display", "none");
                        $("#errr_msg").text("Message Sending Failed..");
                        $("#errr_msg").css("color", "red");
                        $("#errr_msg").css("display", "block");

                    }
                    //$("#mod_can").click();
                    // setTimeout(function () {
                    //     $("#mod_can").click();
                    // }, 3000);
                    // window.location.reload();
                }
            });
        }

    });

    $(document).on('click', '#rec_history', function () {

        var sl_mod = $('#whatsapp_sl_mod').val();
        var sl_mod_id = $('#whatsapp_sl_mod_id').val();

        //$('#whatsapp_dashboardDialog').css('display','none');
        $("#whatsapp_history").empty();

         $.ajax({
            url: 'index.php?entryPoint=DT_Whatsapp_Options',
            type: 'POST',
            data: {action: 'whatsapp_history', sl_mod: sl_mod, sl_mod_id: sl_mod_id},
            success: function (get_body) {
                //document.getElementById("des").value = errorResponse;
                //alert(get_body);
                $("#whatsapp_history").append(get_body);
                // $("#rec_history").text("Back");
                // $('#whatsapp_history').css('display','block');
                // $("#rec_history").attr("id", "back_history");
                // $("#submitwhatsapp").attr('disabled','disabled');
                
            }
        });


        // $("#whatsapp_history").append('<div id="history-list" class="panel-body panel-collapse collapse in" style="overflow: auto; height: 230px;width: 100%; display: block;"><div class="shoutbox-list" id="list-24" style="float: left;"><span class="shoutbox-list-time">9:26:06 PM</span><br><span class="shoutbox-list-nick"><span class="users-list tome extra-class-left" style="margin:-4px;" usr_id="admin"></span></span><span class="shoutbox-list-message" style="margin-left: 2px;">sdfs</span></div><div class="shoutbox-list" id="list-24" style="float: right;"><span class="shoutbox-list-time">9:27:07 PM</span><br><span class="shoutbox-list-nick"><span class="isay extra-class-right" style="margin:-4px;" usr_id="admin"></span></span><span class="shoutbox-list-message" style="margin-left: 2px;">sd</span></div></div>');

    });

    $(document).on('click', '#back_history', function () {
        $("#back_history").attr("id", "rec_history");
        $("#rec_history").text("History");

        $('#whatsapp_history').css('display','none');
        $('#whatsapp_dashboardDialog').css('display','block');
        $("#submitwhatsapp").removeAttr('disabled');

    });


    setInterval(function(){

    if($("#Whatsapp_div").css('display') == "block")
    {
        $("#refresh_history").click();
    } 
    
    }, 7000);


    $(document).on('click', '#refresh_history', function () {

        var sl_mod = $('#whatsapp_sl_mod').val();
        var sl_mod_id = $('#whatsapp_sl_mod_id').val();

         $.ajax({
            url: 'index.php?entryPoint=DT_Whatsapp_Options',
            type: 'POST',
            data: {action: 'whatsapp_history_refresh', sl_mod: sl_mod, sl_mod_id: sl_mod_id},
            success: function (get_body) {
                $("#history-list").empty();
                $("#history-list").append(get_body);
                
            }
        });
    });

    $(document).on('click', '#submitwhatsapp', function () {

        var selected_id = $('#whatsapp_description').val();
        var sl_mod = $('#whatsapp_sl_mod').val();
        var sl_mod_id = $('#whatsapp_sl_mod_id').val();

        $("#errr_msg").css("display", "none");
        if (selected_id === "")
        {
            $("#errr_msg").css("display", "block");
            //setTimeout(function(){ $("#mod_can").click(); }, 3000);
        } else
        {
            //Sending SMS
            $("#loading_whatsapp").css("display", "block");

            $.ajax({
                url: 'index.php?entryPoint=DT_Whatsapp_Options',
                type: 'POST',
                async: true,
                data: {action: 'send_whatsapp', template_name: $('#whatsapp_template_id option:selected').text(), mobile_numbers: $("#whatsapp_mobile_numbers").val(), body: selected_id, sl_mod: sl_mod, sl_mod_id: sl_mod_id},
                success: function (get_body) {
                    //document.getElementById("des").value = errorResponse;
                    //  $("#sms_description").empty();
                    //  $("#sms_description").append(get_body);

                    if (get_body !== "")
                    {
                        $("#loading_whatsapp").css("display", "none");
                        $("#errr_msg").text("Message Sent Successfully..");
                        $("#errr_msg").css("color", "blue");
                        $("#errr_msg").css("display", "block");
                        $("#whatsapp_description").val("");
                    } else
                    {
                        $("#loading_whatsapp").css("display", "none");
                        $("#errr_msg").text("Message Sending Failed..");
                        $("#errr_msg").css("color", "red");
                        $("#errr_msg").css("display", "block");

                    }
                    //$("#mod_can").click();
                    // setTimeout(function () {
                    //     $("#mod_can").click();
                    // }, 3000);
                    // window.location.reload();
                }
            });


        }

    });

    $(document).on('change', '#whatsapp_template_id', function () {
        var selected_id = $('#whatsapp_template_id').val();
        var sl_mod = $('#whatsapp_sl_mod').val();
        var sl_mod_id = $('#whatsapp_sl_mod_id').val();
        //alert(selected_id);
        $("#errr_msg").css("display", "none");
        $.ajax({
            url: 'index.php?entryPoint=DT_Whatsapp_Options',
            type: 'POST',
            data: {action: 'whatsapp_fetch', et_id: selected_id, sl_mod: sl_mod, sl_mod_id: sl_mod_id},
            success: function (get_body) {
                //document.getElementById("des").value = errorResponse;
                //alert(get_body);
                $("#whatsapp_description").val('');
                $("#whatsapp_description").val(get_body);
            }
        });
    });

    $(document).on('change', '#whatsapp_bulktemplate_id', function () {

        var selected_id = $('#whatsapp_bulktemplate_id').val();

        if(selected_id != "NS")
        {
          $('#whatsapp_bulk_description').prop('readonly','readonly');
        }
        else
        {
          $('#whatsapp_bulk_description').prop('readonly','');
        }
        
        $("#errr_msg").css("display", "none");
        $.ajax({
            url: 'index.php?entryPoint=DT_Whatsapp_Options',
            type: 'POST',
            data: {action: 'bulkwhatsapp_fetch', et_id: selected_id},
            success: function (get_body) {
                //document.getElementById("des").value = errorResponse;
                //alert(get_body);
                $("#whatsapp_bulk_description").empty();
                $("#whatsapp_bulk_description").append(get_body);
            }
        });
    });

});