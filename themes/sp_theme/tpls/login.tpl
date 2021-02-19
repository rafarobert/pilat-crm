<!--
/*********************************************************************************
 * SugarCRM Community Edition is a customer relationship management program developed by
 * SugarCRM, Inc. Copyright (C) 2004-2013 SugarCRM Inc.

 * SuiteCRM is an extension to SugarCRM Community Edition developed by Salesagility Ltd.
 * Copyright (C) 2011 - 2014 Salesagility Ltd.
 *
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License version 3 as published by the
 * Free Software Foundation with the addition of the following permission added
 * to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK
 * IN WHICH THE COPYRIGHT IS OWNED BY SUGARCRM, SUGARCRM DISCLAIMS THE WARRANTY
 * OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along with
 * this program; if not, see http://www.gnu.org/licenses or write to the Free
 * Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
 * 02110-1301 USA.
 *
 * You can contact SugarCRM, Inc. headquarters at 10050 North Wolfe Road,
 * SW2-130, Cupertino, CA 95014, USA. or at email address contact@sugarcrm.com.
 *
 * The interactive user interfaces in modified source and object code versions
 * of this program must display Appropriate Legal Notices, as required under
 * Section 5 of the GNU Affero General Public License version 3.
 *
 * In accordance with Section 7(b) of the GNU Affero General Public License version 3,
 * these Appropriate Legal Notices must retain the display of the "Powered by
 * SugarCRM" logo and "Supercharged by SuiteCRM" logo. If the display of the logos is not
 * reasonably feasible for  technical reasons, the Appropriate Legal Notices must
 * display the words  "Powered by SugarCRM" and "Supercharged by SuiteCRM".
 ********************************************************************************/

/*********************************************************************************

 ********************************************************************************/
-->

<script type='text/javascript'>
var LBL_LOGIN_SUBMIT = '{sugar_translate module="Users" label="LBL_LOGIN_SUBMIT"}';
var LBL_REQUEST_SUBMIT = '{sugar_translate module="Users" label="LBL_REQUEST_SUBMIT"}';
var LBL_SHOWOPTIONS = '{sugar_translate module="Users" label="LBL_SHOWOPTIONS"}';
var LBL_HIDEOPTIONS = '{sugar_translate module="Users" label="LBL_HIDEOPTIONS"}';
</script>
   {literal}
     <style>

.progress-bar {
    color: #333;
} 

* {
    -webkit-box-sizing: border-box;
	   -moz-box-sizing: border-box;
	        box-sizing: border-box;
	outline: none;
}

    .form-control {
	  position: relative;
	  font-size: 16px;
	  padding: 10px;
		&:focus {
		  z-index: 2;
		}
	}

body {
  background-color:#999!important;
  -webkit-background-size: cover;
  -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}


form[role=login] {
	color: #5d5d5d;
	background: #f2f2f2;
	padding: 26px;
	border-radius: 10px;
	-moz-border-radius: 10px;
	-webkit-border-radius: 10px;
}
	form[role=login] img {
		display: block;
		margin: 0 auto;
		width:100%;
		margin-bottom: 35px;
	}
	form[role=login] input,
	form[role=login] button {
		font-size: 18px;
		margin: 16px 0;
	}
	form[role=login] > div {
		text-align: center;
	}
	
.form-links {
	text-align: center;
	margin-top: 1em;
	margin-bottom: 50px;
}
	.form-links a {
		color: #fff;
	}
        .login-form{
            width:290px;
            margin:6% auto;
        }
  </style>
<script>
function copypassword(){
  $('#username_password').val($('#user_password').val());
}
</script>
{/literal}  

       <span class="et_pb_section_video_bg">  
        <video loop="loop" autoplay playsinline muted>
            <source type="video/mp4" src="themes/default/videos/video.mp4" />
        </video>
      </span>  
      <section class="login-form">
       
        <form class="form-signin" role="login" action="index.php" method="post" name="DetailView" id="form" onsubmit="return document.getElementById('cant_login').value == ''" style="background: rgba( 40,90,245, 0.8);">
         {$LOGIN_IMAGE}
        <span class="error" id="browser_warning" style="display:none">
            {sugar_translate label="WARN_BROWSER_VERSION_WARNING"}
        </span>
		<span class="error" id="ie_compatibility_mode_warning" style="display:none">
		{sugar_translate label="WARN_BROWSER_IE_COMPATIBILITY_MODE_WARNING"}
		</span>
        {if $LOGIN_ERROR !=''}
            <span class="error">{$LOGIN_ERROR}</span>
            {if $WAITING_ERROR !=''}
                <span class="error">{$WAITING_ERROR}</span>
            {/if}
        {else}
            <span id='post_error' class="error"></span>
        {/if}
        <input type="hidden" name="module" value="Users">
        <input type="hidden" name="action" value="Authenticate">
        <input type="hidden" name="return_module" value="Users">
        <input type="hidden" name="return_action" value="Login">
        <input type="hidden" id="cant_login" name="cant_login" value="">
        {foreach from=$LOGIN_VARS key=key item=var}
            <input type="hidden" name="{$key}" value="{$var}">
        {/foreach}
        <br>
        {if !empty($SELECT_LANGUAGE)}
                {sugar_translate module="Users" label="LBL_LANGUAGE"}:
                <select name='login_language' onchange="switchLanguage(this.value)">{$SELECT_LANGUAGE}</select>
        {/if}
     
        <input type="text" class="form-control" placeholder="{sugar_translate module="Users" label="LBL_USER_NAME"}" required autofocus tabindex="1" id="user_name" name="user_name"  value='{$LOGIN_USER_NAME}' />

        <input type="password" class="form-control" placeholder="{sugar_translate module="Users" label="LBL_PASSWORD"}" tabindex="2" id="user_password" name="user_password" value='{$LOGIN_PASSWORD}' />
        <input type="hidden" name="username_password"  id="username_password"  value="">
        <div class="pwstrength_viewport_progress"></div>
          
          <button class="btn btn-lg btn-primary btn-block" id="bigbutton" onclick="copypassword();" type="submit" title="{sugar_translate module="Users" label="LBL_LOGIN_BUTTON_TITLE"}" tabindex="3" name="Login" style="background-color: #CA3213;">{sugar_translate module="Users" label="LBL_LOGIN_BUTTON_LABEL"}</button>
        <div id="forgotpasslink" style="cursor: pointer; display:{$DISPLAY_FORGOT_PASSWORD_FEATURE};" onclick='toggleDisplay("forgot_password_dialog");'>
            <a class="btn btn-default btn-block" href='javascript:void(0)'>{sugar_translate module="Users" label="LBL_LOGIN_FORGOT_PASSWORD"}</a>
        </div>
        
     
        </form>
       <form class="form-signin passform" role="form" action="index.php" method="post" name="DetailView" id="form_pass" name="fp_form" id="fp_form" >
            <div id="forgot_password_dialog" style="display:none" >
                <input type="hidden" name="entryPoint" value="GeneratePassword">
                <div id="generate_success" class='error' style="display:inline;"></div>
                <br>
                <div class="input-group">
                    <span class="input-group-addon logininput glyphicon glyphicon-user"></span>
                    <input type="text" class="form-control" size='26' id="fp_user_name" name="fp_user_name"  value='{$LOGIN_USER_NAME}' placeholder="{sugar_translate module="Users" label="LBL_USER_NAME"}"/>
                </div>
                <br>
                <div class="input-group">
                    <span class="input-group-addon logininput glyphicon glyphicon-envelope"></span>
                    <input type="text" class="form-control" size='26' id="fp_user_mail" name="fp_user_mail" value ='' placeholder="{sugar_translate module="Users" label="LBL_EMAIL"}">
                </div>
                <br>
                {$CAPTCHA}
                <div id='wait_pwd_generation'></div>
                <input title="Email Temp Password" class="button  btn-block" type="button" style="display:inline" onclick="validateAndSubmit(); return document.getElementById('cant_login').value == ''" id="generate_pwd_button" name="fp_login" value="{sugar_translate module="Users" label="LBL_LOGIN_SUBMIT"}">
            </div>
        </form>
        <div class="form-links">
             {$LOGIN_WELCOME}
        </div>
      </section>  
  
