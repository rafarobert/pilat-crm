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
{literal}
<link type="text/css" rel="stylesheet" href="themes/sp_theme/vendor/jsgrid/jsgrid.css" />
<link type="text/css" rel="stylesheet" href="themes/sp_theme/vendor/jsgrid/jsgrid-theme.css" />
<style>
   .hide{display:none;}
   .paginationTable td:first-child div{display:none;}
   .sqsEnabled{ width:170px!important;}
   .jsgrid-grid-body .jsgrid-cell:first-child {
   	min-width: 55px;
   }
</style> 
<script type="text/javascript" src="themes/sp_theme/vendor/jsgrid/jsgrid.js"></script>           
{/literal}



{assign var="currentModule" value = $pageData.bean.moduleDir}
{assign var="singularModule" value = $moduleListSingular.$currentModule}
{assign var="moduleName" value = $moduleList.$currentModule}
{assign var="hideTable" value=false}
{assign var=gridwidth value=220}

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
      <div class="panel-body" style="overflow:auto;">
       <table cellpadding='0' cellspacing='0' width='100%' border='0'>    
        <thead>
            {include file='include/ListView/ListViewPagination.tpl'}
         </thead>
       </table>
     
       <div id="jsGrid"></div> 
   {literal}
     <script>
          
    var data_bean = [
    {/literal}  
     {foreach name=rowIteration from=$data key=id item=rowData} 
         {literal}{ {/literal}   "Id":"{$rowData.ID}"
           {foreach from=$displayColumns key=col item=params}
            {if ($params.default)}
               {if  ($params.type=='relate') or ($params.type=='currency') or ($params.type=='date') or ($params.type=='name') or ($params.type=='enum') or ($params.type=='text') or ($params.type=='varchar')  or ($params.type=='int')}          
                   ,"{$col}":"{$rowData.$col}"
               {/if}
            {/if}    
           {/foreach} 
         {literal}},{/literal}     
     {/foreach}      
    ];
     
     {foreach from=$displayColumns key=col item=params}
       {if ($params.type=='enum')}  
          {sp_project_getoptions name=$params.name opts=$params.options}
       {/if}
     {/foreach}   
  
     {literal}
var view = action_sugar_grp1;
var currentModule = module_sugar_grp1;

function getRelateFieldJS(field, module, id){
    $.ajaxSetup({"async": false});
    var result = $.getJSON('index.php',
        {
            'module': 'Home',
            'action': 'getRelateFieldJS',
            'field': field,
            'current_module': module,
            'id': id,
            'to_pdf': true
        }
    );
    $.ajaxSetup({"async": true});

    SUGAR.util.evalScript(result.responseText);

    return result.responseText;
}

function loadFieldHTML(field,module,id) {
    $.ajaxSetup({"async": false});
    var result = $.getJSON('index.php',
        {
            'module': 'Home',
            'action': 'getEditFieldHTML',
            'field': field,
            'current_module': module,
            'id': id,
            'view' : view,
            'to_pdf': true
        }
    );
    $.ajaxSetup({"async": true});
     if(result.responseText){
         try {
             return (JSON.parse(result.responseText));
         } catch(e) {
             return false;
         }

     }else{
         return false;
     }

}
              
        var relateSugar = function(config) {
           jsGrid.Field.call(this, config);
        };
        relateSugar.prototype = new jsGrid.Field({ 
            itemTemplate: function(value) {
                return value;
            },

            editValue: function() {
                return $('#'+$(this)[0].name.toLowerCase()).val();
            }

        });

        jsGrid.fields.relateSugarField = relateSugar;
        
        
        var DateSugar = function(config) {
           jsGrid.Field.call(this, config);
        };
        DateSugar.prototype = new jsGrid.Field({ 
            itemTemplate: function(value) {
                return  value;
            },

            editValue: function() {
                return $('#dp').val();
            },
            editTemplate: function(value,item) {
                    var iddp=Math.floor((Math.random() * 10000) + 1);
                    var s='<form name="form_D" id="form_D"><span class="dateTime">';
                    s+='<table border=0><tr><td><input class="date_input" autocomplete="off" name="'+this.name+'" id="dp" value="'+value+'" title="" tabindex="0" size="11" maxlength="10" type="text">';
                    s+='<td><img src="themes/sp_theme/images/jscalendar.gif" alt="Enter Date" style="position:relative; top:6px" id="dp_trigger" border="0"></td>';
                    s+='</td></tr></table></form><script type="text/javascript">';
                    s+='Calendar.setup ({';
                    s+='inputFieldObj :  document.getElementById("dp"),';
                    s+='form : "form_D",';
                    s+='ifFormat : "%Y-%m-%d %H:%M",';
                    s+='daFormat : "%Y-%m-%d %H:%M",';
                    s+='button : "dp_trigger",';
                    s+='singleClick : true,';
                    s+='dateStr : "'+value+'",';
                    s+='startWeekday: 0,';
                    s+='step : 1,';
                    s+='weekNumbers:false';
                    s+='});';
                    return s;
            },

        });

        jsGrid.fields.dateSugarField = DateSugar;

        $("#jsGrid").jsGrid({
        height: "450",
 
        inserting: false,
        editing: true,
        sorting: false,
        paging: false,
 
        data: data_bean,
        onItemUpdating: function(args) {
            previousItem = args.previousItem;
        },
        controller: {
            updateItem: function(item) {
             var d = $.Deferred();   
             $.ajax({
                type: "POST",
                url: "index.php?entryPoint=jsgrid",
                  data: {item,
                 {/literal}
                  module:"{$pageData.bean.moduleDir}"
                 {literal}
                 }
             }).done(function(response) {
                 d.resolve(response);
             }).fail(function(xhr, ajaxOptions, thrownError) {
                    d.resolve(previousItem);
                });
                return d.promise();
            },
            deleteItem: function(item) {
             var d = $.Deferred();   
             $.ajax({
                type: "POST",
                url: "index.php?entryPoint=jsgrid",
                  data: {
                  deleted:1,
                  item,
                 {/literal}
                  module:"{$pageData.bean.moduleDir}"
                 {literal}
                 }
             }).done(function(response) {
                 d.resolve(response);
             }).fail(function(xhr, ajaxOptions, thrownError) {
                    d.resolve(previousItem);
                });
                return d.promise();
            }
          },
        fields: [
                {
                    type: "control",
                    modeSwitchButton: false,
                    headerTemplate: function() {
                        return $("<a style='font-size:22px;'><i class='pe-7s-plus'></i></a>").attr("type", "button")
                                .on("click", function () {
                                   get_editpopup('','{/literal}{$pageData.bean.moduleDir}{literal}','EditView');
                                });
                    }
                 },      
                { name: "Id",  
                  title: "",                   
                  width:20, 
                  itemTemplate: function(value, item) {  
                            return  {/literal} '<a  href="index.php?module={$pageData.bean.moduleDir}{literal}&action=EditView&record='+item.Id+'"><i class="pe-7s-note2"></i></a>';
                             }                    
                },                           
                {/literal}  
               {foreach from=$displayColumns key=col item=params}   
               {if ($params.default)}    
                 {if ($params.type=='relate') or ($params.type=='currency') or ($params.type=='date') or  ($params.type=='name') or ($params.type=='enum') or ($params.type=='text') or ($params.type=='varchar')  or ($params.type=='int')} 
                        {literal}{ {/literal}   
                         name: "{$params.name|@strtoupper}", label: "{sugar_translate label=$params.label module=$pageData.bean.moduleDir}", 
                        {if ($params.type=='varchar') }   
                           {assign var=gridwidth value=$gridwidth+200}
                           type: "text",     
                           width: 200, 
                           validate: {if $params.required==1} "required" {else} "" {/if}   
                       {elseif ($params.type=='name')}  
                           {assign var=gridwidth value=$gridwidth+200} 
                           type: "text",     
                           width: 200, 
                           itemTemplate: function(value, item){literal}  {  
                            return  {/literal} '<a onclick="$(\'#jsGrid\').jsGrid(\'cancelEdit\');return true;" href="index.php?module={$pageData.bean.moduleDir}{literal}&action=DetailView&record='+item.Id+'">'+value+'</a>';
                            },   {/literal}   
                           validate: {if $params.required==1} "required" {else} "" {/if}
                       {elseif  ($params.type=='int')}
                           {assign var=gridwidth value=$gridwidth+120}
                           type: "number",  
                           width: 120,              
                           validate: {if $params.required==1} "required" {else} "" {/if}  
                        {elseif  ($params.type=='enum')}
                           {assign var=gridwidth value=$gridwidth+200}
                           type: "select",   
                           width: 200,               
                           items: opt{$params.name}, valueField: "Id", textField: "Name"   
                        {elseif  ($params.type=='text')}
                           type: "textarea",    
                           {assign var=gridwidth value=$gridwidth+200}   
                           width: 200,     
                           validate: {if $params.required==1} "required" {else} "" {/if}  
                        {elseif  ($params.type=='date')}
                           type: "dateSugarField",      
                           width: 150                                
                        {elseif  ($params.type=='relate')}
                           type: "relateSugarField",
                           {assign var=gridwidth value=$gridwidth+250}
                           width: 250,
                           editTemplate: function(value, item){literal}  {  
                           var edit_T=loadFieldHTML( {/literal}'{$params.name|@strtolower}','{$pageData.bean.moduleDir}'{literal}, item.Id);
                           var relate_js = getRelateFieldJS( {/literal}'{$params.name|@strtolower}','{$pageData.bean.moduleDir}'{literal}, item.Id);
                           return   edit_T.replace(/EditView/g, "MassUpdate")+relate_js.replace(/EditView/g, "MassUpdate");
                            }   {/literal}       
                        {else}
                           type: "text",  
                           width: 100,      
                           {assign var=gridwidth value=$gridwidth+100}   
                           validate: {if $params.required==1} "required" {else} "" {/if}
                       {/if}
                         ,headerTemplate: function() {literal} {  return this.label; }
                         },{/literal}   
                   {/if}        
                  {/if}                     
                {/foreach} 
                   
            ]

          {literal}
        });
        $("#jsGrid").jsGrid({
          {/literal}
         width: "{$gridwidth}"
          {literal} });
    </script> 
    {/literal}

    </div>
  </div>
{/if} 
         


