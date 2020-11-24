$(document).ready(function (){

    $('#name').after('<div id="record_name" style="color:red;"></div>');
    $('#phone_office').after('<div id="record_phone_office" style="color:red;"></div>');    
    $('#phone_fax').after('<div id="record_phone_fax" style="color:red;"></div>');
    $('#numero_documento_c').after('<div id="record_doc_no" style="color:red;"></div>');
    //$('#Accounts0emailAddressRow0').parent().parent().parent().after('<div id="record_email" style="color:red;display:none;float: left;margin-right: -5%;margin-top:-14px; margin-left: 15px;"><br></div>');

    var record_id = $('input[name="record"]', document.forms['EditView']).attr('value');
          
    $('#name').blur(function () {
          valid_name(record_id);
    });
    

    $('#phone_office').blur(function () {
          valid_phone(record_id,'phone_office');
    });

    $('#phone_fax').blur(function () {
            valid_phone(record_id,'phone_fax');
    });

    $('#numero_documento_c').blur(function () {
            valid_doc_no(record_id);
    });

    //if($('#Accounts0emailAddress0').length){
        
    /*$('#Accounts0emailAddress0').blur(function () {
        valid_email(record_id);
    });*/
    //}
});


function valid_name(record_id)
{   
    var account_name = $('#name').val();
    $.ajax(
    {
        url: 'index.php?entryPoint=Prevent_Duplicate',
        type: 'POST',
        data:
        {
            action:     'Check_Duplicate_Account_Name',
            module:     'Accounts',
            div_name:   'div_name',
            name:       account_name,
            record_id:  record_id
        },
        success: function(get_body)
        {
            if(get_body!= "")
            {
                if(get_body != "No Duplicate Found")
                {
                    $("#record_name").html(get_body + '&nbsp;<span id="record_name" onclick="openpopup(\'div_name\')" style="position:relative;"><img vertical-align="middle" class="info" border="0" src="modules/Duplicate_Preventive/info_inline.png"></span>');
                }
                else
                {
                    $("#record_name").html("");
                    $("[id=SAVE_HEADER]").attr('disabled',false);
                }
            }
            else
            {
                $("#record_name").html("");
            }               
        }
    }); 
}

function valid_doc_no(record_id)
{   
    var doc_no = $('#numero_documento_c').val();
    $.ajax(
    {
        url: 'index.php?entryPoint=Prevent_Duplicate',
        type: 'POST',
        data:
        {
            action:     'Check_Duplicate_Account_Document_Number',
            module:     'Accounts',
            div_name:   'div_doc_no',
            doc_no:     doc_no,
            record_id:  record_id
        },
        success: function(get_body)
        {
            if(get_body!= "")
            {
                if(get_body != "No Duplicate Found")
                {
                    $("#record_doc_no").html(get_body + '&nbsp;<span id="record_doc_no" onclick="openpopup(\'div_doc_no\')" style="position:relative;"><img vertical-align="middle" class="info" border="0" src="modules/Duplicate_Preventive/info_inline.png"></span>');
                }
                else
                {
                    $("#record_doc_no").html("");
                    $("[id=SAVE_HEADER]").attr('disabled',false);
                }
            }
            else
            {
                $("#record_doc_no").html("");
            }               
        }
    }); 
}

function valid_phone(record_id,field_id)
{           
    var phone_no = $('#'+field_id).val();

    if(field_id == "phone_office")
    {
        var div_id      = "record_phone_office";
        var div_popup   = "div_office_phone";
    }
    if(field_id == "phone_fax")
    {
        var div_id = "record_phone_fax";
        var div_popup   = "div_fax_phone";
    }
    $.ajax(
    {
        url: 'index.php?entryPoint=Prevent_Duplicate',
        type: 'POST',
        data:
        {
            action:     'Check_Duplicate_Account_phone',
            module:     'Accounts',
            div_name:   div_popup,
            phone_no:   phone_no,
            field_id:   field_id,
            record_id:  record_id
        },
        success: function(get_body)
        {
            if(get_body!= "")
            {
                if(field_id == "phone_office")
                {
                    if(get_body != "No Duplicate Found")
                    {
                        $("#"+div_id).html(get_body + '&nbsp;<span id="'+div_id+'" onclick="openpopup(\'div_office_phone\')"><img vertical-align="middle" class="info" border="0" src="modules/Duplicate_Preventive/info_inline.png"></span>');
                    }
                    else
                    {
                        $("#"+div_id).html("");
                        $("[id=SAVE_HEADER]").attr('disabled',false);
                    }
                }
                if(field_id == "phone_fax")
                {
                    if(get_body != "No Duplicate Found")
                    {
                        $("#"+div_id).html(get_body + '&nbsp;<span id="'+div_id+'" onclick="openpopup(\'div_fax_phone\')" style="position:relative;"><img vertical-align="middle" class="info" border="0" src="modules/Duplicate_Preventive/info_inline.png"></span>');
                    }
                    else
                    {
                        $("#"+div_id).html("");
                        $("[id=SAVE_HEADER]").attr('disabled',false);
                    }
                }
            }
            else
            {
                $("#"+div_id).html("");
            }               
        }
    });   
}

/*function valid_email(record_id)
{   
    var account_email = $('#Accounts0emailAddress0').val();
    $.ajax(
    {
        url: 'index.php?entryPoint=Prevent_Duplicate',
        type: 'POST',
        data:
        {
            action:     'Check_Duplicate_Account_Email',
            module:     'Accounts',
            div_name:   'div_email',
            email:      account_email,
            record_id:  record_id
        },
        success: function(get_body)
        {
            if(get_body!= "")
            {
                if(get_body != "No Duplicate Found")
                {
                    $("#record_email").html(get_body + '&nbsp;<span id="record_email" onclick="openpopup(\'div_email\')" style="position:absolute;"><img vertical-align="middle" class="info" border="0" src="modules/Duplicate_Preventive/info_inline.png"></span>');

                    $('#record_email').css('display','inline');
                    $('#record_email').next('tr td').css('margin-top','-16px !important');
                }
                else
                {
                    $("#record_email").html("");
                    $("[id=SAVE_HEADER]").attr('disabled',false);
                }
            }
            else
            {
                $("#record_email").html("");
            }               
        }
    }); 
}*/

function openpopup(div_detail){
    $('#'+div_detail).show();
}
function closepopup(div_detail){
    $('#'+div_detail).hide();
}
