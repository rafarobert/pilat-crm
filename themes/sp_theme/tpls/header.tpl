{*
/*********************************************************************************
 * SugarCRM Community Edition is a customer relationship management program developed by
 * SugarCRM, Inc. Copyright (C) 2004-2013 SugarCRM Inc.
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
 * SugarCRM" logo. If the display of the logo is not reasonably feasible for
 * technical reasons, the Appropriate Legal Notices must display the words
 * "Powered by SugarCRM".
 ********************************************************************************/

*}
{include file="_head.tpl" theme_template=true}
{if $AUTHENTICATED}  
    {if $smarty.cookies.hidesidebar=="hide"} 
       <body class="fixed-navbar fixed-sidebar hide-sidebar"> 
    {else} 
       <body class="fixed-navbar fixed-sidebar"> 
    {/if} 
{else}  
   <body class="fixed-navbar fixed-sidebar homecolor">  
{/if}      
{$DCSCRIPT}

{literal}
    <iframe id='ajaxUI-history-iframe' src='index.php?entryPoint=getImage&imageName=blank.png' title='empty' style='display:none'></iframe>
    <input id='ajaxUI-history-field' type='hidden'>
    <script type='text/javascript'>
        if (SUGAR.ajaxUI && !SUGAR.ajaxUI.hist_loaded) {
            YAHOO.util.History.register('ajaxUILoc', "", SUGAR.ajaxUI.go);
            {/literal}{if $smarty.request.module != "ModuleBuilder"}{* Module builder will init YUI history on its own *}
            YAHOO.util.History.initialize("ajaxUI-history-field", "ajaxUI-history-iframe");
            {/if}{literal}
        }
    </script>
{/literal} 

<!-- Start of page content -->
{if $AUTHENTICATED}  

<!--[if lt IE 7]>
<p class="alert alert-danger">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
<![endif]-->
<div id="content">
<!-- Header -->
<div id="header">
    <div id="logo" class="light-version">
        <a href="index.php"><span>
            {$APP.LBL_BROWSER_TITLE}
        </span>
        </a>
    </div>
    <nav role="navigation">
      <div class="header-link hide-menu onlymobile"><i class="pe-7s-menu"></i></div>
        <div class="small-logo onlymobile">
            <a href="index.php">{$APP.LBL_BROWSER_TITLE}</a>
        </div>
        <div class="mobile-menu">
            <button type="button" class="navbar-toggle mobile-menu-toggle" data-toggle="collapse" data-target="#mobile-collapse">
                <i class="fa fa-chevron-down"></i>
            </button>
            <div class="collapse mobile-navbar" id="mobile-collapse">
                <ul class="nav navbar-nav">
                    {foreach from=$GCLS item=GCL name=gcl key=gcl_key}
                            <li>
                                <a href="{$GCL.URL}"{if !empty($GCL.ONCLICK)} onclick="{$GCL.ONCLICK}"{/if}>{$GCL.LABEL}</a>
                            </li>
                      {/foreach}
                      <li role="presentation"><a role="menuitem" id="logout_link" href='{$LOGOUT_LINK}' class='utilsLink'>{$LOGOUT_LABEL}</a></li>
                </ul>
               
            </div>
        </div>
        <div class="navbar-right">
            <ul class="nav navbar-nav no-borders">
                <li class="dropdown"> 
                  <div class="header-link hide-menu"><i class="pe-7s-menu"></i></div>
                </li>  
                {sp_project_getcustomtoolbar}    
                <li class="dropdown"> 
                  <div class="header-link"><i class="pe-7s-print" data-toggle="modal" data-target="#SugarPrint_modal"></i></div>
                </li>        
                <li class="dropdown"> 
                  <a class="dropdown-toggle" href="#" data-toggle="dropdown">
                        <i class="pe-7s-search"></i>
                    </a>  
                   <div  class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                    <form id="searchformdropdown" name='UnifiedSearch' action='index.php' onsubmit='return SUGAR.unifiedSearchAdvanced.checkUsaAdvanced()'>
                        <input type="hidden" class="form-control" name="action" value="UnifiedSearch">
                        <input type="hidden" class="form-control" name="module" value="Home">
                        <input type="hidden" class="form-control" name="search_form" value="false">
                        <input type="hidden" class="form-control" name="advanced" value="false">
                        <div class="input-group" style="padding:5px;">
                            <input type="text" class="form-control"  name="query_string" id="query_string" placeholder="{$APP.LBL_SEARCH}..." value="{$SEARCH}" />
                            <span class="input-group-btn">
                                <button  type="submit" class="btn btn-default" ><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button>
                            </span>
                        </div>
                    </form>
                </div> 
                </li>  
                <li class="dropdown">
                    <a class="dropdown-toggle" href="#" data-toggle="dropdown">
                        <i class="pe-7s-pin"></i>
                    </a>             
                    <ul class="dropdown-menu hdropdown notification animated flipInX">
                     {foreach from=$recentRecords item=item name=lastViewed}
                       <li>                                                                           
                         <a title="{$item.item_summary}"
                             accessKey="{$smarty.foreach.lastViewed.iteration}"
                             href="{sugar_link module=$item.module_name action='DetailView' record=$item.item_id link_only=1}">
                             {$item.image}&nbsp;&nbsp;{$item.item_summary_short}
                         </a>
                     </li>
                     {foreachelse}
                       <li>  
                      {$APP.NTC_NO_ITEMS_DISPLAY}
                       </li>   
                     {/foreach}
                    </ul>
                </li>
                <li class="dropdown">
                    <a class="dropdown-toggle" href="#" data-toggle="dropdown">
                        <i class="pe-7s-keypad"></i>
                    </a>

                    <div class="dropdown-menu hdropdown bigmenu" style="width:620px;">
                    {if $USE_GROUP_TABS}
                             {foreach from=$groupTabs item=modules key=group name=groupList}
                               {capture name=extraparams assign=extraparams}parentTab={$group}{/capture}
                               {if $submodulename != 'Home'}   
                                 {foreach from=$modules.extra item=submodulename key=submodule}
                                   {if $submodulename != 'Home'}   
    
                                         <div style="width:130px;height:40px;float:left;text-align:center;">
                                             <a href="{sugar_link module=$submodule link_only=1 extraparams=$extraparams}">
                                                 {$submodulename}
                                             </a>
                                         </div>
                                    {/if}
                                   {/foreach}   
                                 {/if}
                              {/foreach}      
                    {else}
                        {foreach from=$moduleTopMenu item=module key=name name=moduleList}
                          <div style="width:130px;height:40px;float:left;text-align:center;">
                                 <a href="{sugar_link module=$name link_only=1}">
                                   {sugar_link id="moduleTab_$name" label_only=1  module=$name data=$module}
                                 </a>
                           </div>
                       {/foreach}   
                       {foreach from=$moduleExtraMenu item=module key=name name=moduleList}
                           <div style="width:130px;height:40px;float:left;text-align:center;">
                                 {sugar_link id="moduleTab_$name" module=$name data=$module}
                           </div> 
                       {/foreach}      
                    {/if}      
                    </div>
                </li>
                <li class="dropdown">
                    <a class="dropdown-toggle label-menu-corner" href="#" data-toggle="dropdown">
                        <i class="pe-7s-star"></i>
                    </a>
                       <ul class="dropdown-menu hdropdown animated flipInX">
                        <div class="title">
                           {$APP.LBL_FAVORITES}
                        </div>
                      {foreach from=$moduleTopMenu item=module key=name name=moduleList}
                        {foreach from=$favoriteRecords item=item name=lastViewed}
                        {if $item.module_name == $name}
                                <li class="recentlinks_top" role="presentation">
                                    <div style="float:left;">
                                    <a href="{sugar_link module=$item.module_name action='EditView' record=$item.id link_only=1}" style="margin-left:10px;"><span class=" glyphicon glyphicon-pencil" aria-hidden="true"></a>
                                    &nbsp;<a title="{$item.module_name}" accessKey="{$smarty.foreach.lastViewed.iteration}" href="{sugar_link module=$item.module_name action='DetailView' record=$item.id link_only=1}">{$item.item_summary_short}</a>
                                    </div>
                                 </li>
                        {/if}
                        {foreachelse}
                         <li>
                               {$APP.NTC_NO_ITEMS_DISPLAY}
                         </li>
                         {/foreach}
                      {/foreach}
                    </ul>
                </li>
                <li>
                    <a href="#" id="sidebar" class="right-sidebar-toggle ">
                        <i class="pe-7s-news-paper"></i>
                    </a>
                </li>

             
                {sp_project_isadmin} 
  
                <li class="dropdown">
                   <a role="menuitem" id="logout_link" href='{$LOGOUT_LINK}' class='utilsLink'>
                        <i class="pe-7s-upload pe-rotate-90"></i>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</div>   


{include file="Menuleft.tpl" theme_template=true}
<div id="wrapper" >
    {if $smarty.cookies.mainpanel=="nomargin"} 
      <div class="normalheader transition animated fadeIn small-header">
  {else} 
       <div class="normalheader transition animated fadeIn">
  {/if} 

{/if}

<div class="modal fade hmodal-danger" id="SugarPrint_modal" tabindex="-1" role="dialog"  aria-hidden="true">
     <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">SugarPrint</h4>
            </div>
            <div class="modal-body">
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" id="printpdf" class="btn btn-primary">Print PDF</button>
                <button type="button" id="printxls" class="btn btn-primary">Export XLS</button>
            </div> 
         </div>       
    </div>         
</div>
