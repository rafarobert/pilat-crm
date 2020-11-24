{*

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

*}

{assign var="currentModule" value = $pageData.bean.moduleDir}
{assign var="singularModule" value = $moduleListSingular.$currentModule}
{assign var="moduleName" value = $moduleList.$currentModule}
{assign var="hideTable" value=false}

{if count($data) == 0}
	{assign var="hideTable" value=true}
	<div class="list view listViewEmpty">
		{if $displayEmptyDataMesssages}
        {if strlen($query) == 0}
                {capture assign="createLink"}<a href="?module={$pageData.bean.moduleDir}&action=EditView&return_module={$pageData.bean.moduleDir}&return_action=DetailView">{$APP.LBL_CREATE_BUTTON_LABEL}</a>{/capture}
                {capture assign="importLink"}<a href="?module=Import&action=Step1&import_module={$pageData.bean.moduleDir}&return_module={$pageData.bean.moduleDir}&return_action=index">{$APP.LBL_IMPORT}</a>{/capture}
                {capture assign="helpLink"}<a target="_blank" href='?module=Administration&action=SupportPortal&view=documentation&version={$sugar_info.sugar_version}&edition={$sugar_info.sugar_flavor}&lang=&help_module={$currentModule}&help_action=&key='>{$APP.LBL_CLICK_HERE}</a>{/capture}
                <p class="msg">
                    {$APP.MSG_EMPTY_LIST_VIEW_NO_RESULTS|replace:"<item2>":$createLink|replace:"<item3>":$importLink}
                </p>
        {elseif $query == "-advanced_search"}
            <p class="msg">
                {$APP.MSG_LIST_VIEW_NO_RESULTS_BASIC}
            </p>
        {else}
            <p class="msg">
                {capture assign="quotedQuery"}"{$query}"{/capture}
                {$APP.MSG_LIST_VIEW_NO_RESULTS|replace:"<item1>":$quotedQuery}
            </p>
            <p class = "submsg">
                <a href="?module={$pageData.bean.moduleDir}&action=EditView&return_module={$pageData.bean.moduleDir}&return_action=DetailView">
                    {$APP.MSG_LIST_VIEW_NO_RESULTS_SUBMSG|replace:"<item1>":$quotedQuery|replace:"<item2>":$singularModule}
                </a>

            </p>
        {/if}
    {else}
        <p class="msg">
            {$APP.LBL_NO_DATA}
        </p>
	{/if}
	</div>
{/if}
{$multiSelectData}
{if $hideTable == false}


     <div class="hpanel">
      <div class="panel-body">   
        
        <script type="text/javascript" src="themes/sp_theme/vendor/underscore/underscore-min.js"></script>
        <script type="text/javascript" src="themes/sp_theme/vendor/jstimezonedetect/jstz.min.js"></script>
        <script type="text/javascript" src="themes/sp_theme/jscalendar/calendar.js"></script>

        <link rel="stylesheet" href="themes/sp_theme/style/calendar.css">  
       {literal}
       <style>                

          #shortcuts {
            margin-bottom: 0px;
          }

          .main {
            padding-top:0px;
            background-color:#FFF;
          }
           #calendar {
            background-color:#f7f5f2;
          }
        .modal {
          background-clip: padding-box;
          background-color: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.3);
          border-radius: 6px;
          box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
          left: 50%;
          margin-left: -380px;
          outline: medium none;
          position: fixed;
          top: 10%;
          width: 760px;
          z-index: 1050;
        }
        .page-header{
            margin-bottom:0px;
        }
      
        </style>
       {/literal}
       <div style="clear:both" class="page-header">

                        <div class="pull-right form-inline">
                                <div class="btn-group">  
                                        <button type="button" class="btn btn-primary" data-calendar-nav="prev"><< {$APP.LNK_LIST_PREVIOUS}</button>
                                        <button type="button" class="btn" data-calendar-nav="today">{$APP.LBL_TODAY}</button>
                                        <button type="button" class="btn btn-primary" data-calendar-nav="next">{$APP.LNK_LIST_NEXT} >></button>
                                </div>
                                <div class="btn-group">
                                        <button type="button" class="btn btn-warning" data-calendar-view="year">Year</button>
                                        <button type="button" class="btn btn-warning active" data-calendar-view="month">Month</button>
                                        <button type="button" class="btn btn-warning" data-calendar-view="week">Week</button>
                                        <button type="button" class="btn btn-warning" data-calendar-view="day">{$APP.LBL_TODAY}</button>
                                </div>
                        </div>
                        
                    <h3></h3>
                </div>

                <div class="row">
                        <div class="span12">
                                <div id="calendar"></div>
                        </div>
                </div>

                <div class="modal fade" id="events-modal">
                        <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>                          
                        </div>
                        <div class="modal-body" id="modal-body" style="height: 90%;max-height:90%;">
                        </div>
                        
                </div>
       

                        {sp_project_getcalendar_data cmod=$currentModule id=$link_select_id params=$data}
                        ,
                        view: 'month',
                        day: '{$smarty.now|date_format:"%Y-%m-%d"}',
                        {literal}
                        tmpl_path: 'themes/sp_theme/jscalendar/tmpls/',
                        tmpl_cache: false,
                        onAfterEventsLoad: function(events) {
                                if(!events) {
                                        return;
                                }

                        },
                        onAfterViewLoad: function(view) {
                                $('.page-header h3').text(this.getTitle());
                                $('.btn-group button').removeClass('active');
                                $('button[data-calendar-view="' + view + '"]').addClass('active');
                        },
                        classes: {
                                months: {
                                        general: 'label'
                                }
                        }
                };

                var calendar = $('#calendar').calendar(options);
                //calendar.setOptions({modal: '#events-modal'});
                calendar.setOptions({first_day: 1});

                calendar.setOptions({display_week_numbers: true});
                calendar.setOptions({weekbox: true});
                $('.btn-group button[data-calendar-nav]').each(function() {
                        var $this = $(this);
                        $this.click(function() {
                                calendar.navigate($this.data('calendar-nav'));
                        });
                });

                $('.btn-group button[data-calendar-view]').each(function() {
                        var $this = $(this);
                        $this.click(function() {
                         
                                calendar.view($this.data('calendar-view'));
                        });
                });

                $('#first_day').change(function(){
                        var value = $(this).val();
                        value = value.length ? parseInt(value) : null;
                        calendar.setOptions({first_day: 1});
                        calendar.view();
                });

                $('#language').change(function(){
                        calendar.setLanguage($(this).val());
                        calendar.view();
                });

                $('#events-in-modal').change(function(){
                        var val = $(this).is(':checked') ? $(this).val() : null;
                        calendar.setOptions({modal: '#events-modal'});
                });
                $('#format-12-hours').change(function(){
                        var val = $(this).is(':checked') ? true : false;
                        calendar.setOptions({format12: val});
                        calendar.view();
                });
                $('#show_wbn').change(function(){
                        var val = $(this).is(':checked') ? true : false;
                        calendar.setOptions({display_week_numbers: val});
                        calendar.view();
                });
                $('#show_wb').change(function(){
                        var val = $(this).is(':checked') ? true : false;
                        calendar.setOptions({weekbox: val});
                        calendar.view();
                });
                $('#events-modal .modal-header, #events-modal .modal-footer').click(function(e){
                        //e.preventDefault();
                        //e.stopPropagation();
                });
        }(jQuery));
        </script>    
        {/literal}
        
        
  
   

{/if}

