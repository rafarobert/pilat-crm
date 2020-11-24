<div class="moduleTitle">
    <h2 class="module-title-text">
        <a href="#">Duplicate Checking</a><span class="pointer">»</span> CONFIGURATION
    </h2>
    <div class="clear"></div>
</div>

<form id="DC_Config" name="DC_Config" method="POST" action="">
    <div name="dc_configuration" id="dc_configuration">
        <!-- Duplicate Checking Configuration -->
        <div class="panel panel-default">
            
            <div class="panel-body panel-collapse collapse in" id="detailpanel_-1">
                <div class="tab-content">

                    <table width="50%" cellspacing="2" cellpadding="0" border="0">
                    <tbody>
                        <tr style="height: 50px;">
                            <th colspan="6"><span style="font-weight: bold; float: left; font-size:20px;">Accounts</span></th>
                        </tr>
                        <tr style="height: 50px;border-bottom:1pt solid black;">
                            <td style="width: 10%;font-size:15px;">&nbsp;Name</td>     
                            {if ($account_name == "1") }       
                            <td style="width: 5%;text-align: left;"><input name="account_name" type="checkbox" value="1"  CHECKED/></td>
                            {else}
                            <td style="width: 5%;text-align: left;"><input name="account_name" type="checkbox" value="1"/></td>                            
                            {/if }
                            <td style="width: 10%;font-size:15px;">Phone No.:</td>
                            {if ($account_phone_no == "1") }       
                            <td style="width: 5%;"><input name="account_phone_no" type="checkbox" value="1" CHECKED/></td>
                            {else}
                            <td style="width: 5%;"><input name="account_phone_no" type="checkbox" value="1" /></td>
                            {/if}
                            <td style="width: 10%;font-size:15px;">Document Number:</td>
                            {if ($account_document_number == "1") }
                            <td style="width: 5%;"><input name="account_document_number" type="checkbox" value="1" CHECKED/></td>
                            {else}
                            <td style="width: 5%;"><input name="account_document_number" type="checkbox" value="1"/></td>
                            {/if}
                        </tr>
                        <tr style="height: 50px;">
                            <th colspan="6"><span style="font-weight: bold; float: left; font-size:20px;">Contacts</span></th>
                        </tr>
                        <tr style="height: 50px;border-bottom:1pt solid black;">
                            <td style="width: 10%;font-size:15px;">&nbsp;Name</td>
                            {if ($contact_name == "1") }
                            <td style="width: 5%;text-align: left;"><input name="contact_name" type="checkbox" value="1"  CHECKED/></td>
                            {else}
                            <td style="width: 5%;text-align: left;"><input name="contact_name" type="checkbox" value="1"/></td>                            
                            {/if }
                            <!-- <span style="font-weight: bold; float: left; font-size:15px;">Exact</span></br> -->
                            <!-- <label style="padding-top: 10px;">Exact&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label> -->
                            <!-- <input type="radio" name="contact_name_type" value="exact"><br> -->
                            <!-- <span style="font-weight: bold; float: left; font-size:15px;">Similar</span></br> -->
                            <!-- <label>Similar&nbsp;&nbsp;</label> -->
                            <!-- <input type="radio" name="contact_name_type" value="similar"></br> -->
                            <td style="width: 10%;font-size:15px;">Phone No.:</td>
                            {if ($contact_phone_no == "1") }
                            <td style="width: 5%;text-align: left;"><input name="contact_phone_no" type="checkbox" value="1"  CHECKED/></td>
                            {else}
                            <td style="width: 5%;text-align: left;"><input name="contact_phone_no" type="checkbox" value="1"/></td>                            
                            {/if }
                            <td style="width: 10%;font-size:15px;">Document Number:</td>
                            {if ($contact_document_number == "1") }
                            <td style="width: 5%;text-align: left;"><input name="contact_document_number" type="checkbox" value="1"  CHECKED/></td>
                            {else}
                            <td style="width: 5%;text-align: left;"><input name="contact_document_number" type="checkbox" value="1"/></td>                            
                            {/if }
                        </tr>
                        <tr style="height: 50px;">
                            <th colspan="6"><span style="font-weight: bold; float: left; font-size:20px;">Leads</span></th>
                        </tr>
                        <tr style="height: 50px;border-bottom:1pt solid black;">
                            <td style="width: 10%;font-size:15px;">&nbsp;Name:</td>
                            {if ($lead_name == "1") }
                            <td style="width: 5%;"><input name="lead_name" type="checkbox" value="1" CHECKED/></td>
                            {else}
                            <td style="width: 5%;"><input name="lead_name" type="checkbox" value="1"/></td>
                            {/if}
                            <td style="width: 10%;font-size:15px;">Phone No.:</td>
                            {if ($lead_phone_no == "1") }
                            <td style="width: 5%;"><input name="lead_phone_no" type="checkbox" value="1" CHECKED/></td>
                            {else}
                            <td style="width: 5%;"><input name="lead_phone_no" type="checkbox" value="1"/></td>
                            {/if}
                            <td style="width: 10%;font-size:15px;">Document Number:</td>
                            {if ($lead_document_number == "1") }
                            <td style="width: 5%;"><input name="lead_document_number" type="checkbox" value="1" CHECKED/></td>
                            {else}
                            <td style="width: 5%;"><input name="lead_document_number" type="checkbox" value="1"/></td>
                            {/if}
                        </tr>
                        <tr style="height: 50px;border-bottom:1pt solid black;">
                            <td style="width: 10%;font-size:15px;">&nbsp;Prevent Duplicate:</td>
                            {if ($duplicate_prevent == "1") }
                            <td colspan="5" style="width: 5%;"><input name="duplicate_prevent" type="checkbox" value="1" CHECKED/></td>
                            {else}
                            <td colspan="5" style="width: 5%;"><input name="duplicate_prevent" type="checkbox" value="1"/></td>
                            {/if}
                        </tr>
                    </tbody>
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" class="dcQuickEdit" style="margin-top: 10px;">
                    <tr>
                        <td style="padding-bottom: 2px;" width="100%">
                            <input title="SAVE" name="save_dc" id="save_dc"  class="button" type="submit" value="SAVE">
                            <input style="margin-left: 10px;"title="CANCEL" id="cancle_dc" onclick="location.reload();" class="button" type="button" value="CANCEL">
                        </td>
                    </tr>
                </table>
                    </table>
    </div>
</form>