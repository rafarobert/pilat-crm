
<!-- Navigation -->
<aside id="menu">
    <div id="navigation">
    
        {sp_project_logo}
        
        <div class="profile-picture">
            <div class="stats-label text-color">
		<img src='index.php?entryPoint=download&id={$CURRENT_USER_ID}_photo&type=Users' width="140"></img>
                <a href='index.php?module=Users&action=EditView&record={$CURRENT_USER_ID}'>
                <span class="font-extra-bold font-uppercase">{$CURRENT_USER}</span>
                </a> 
                <div class="dropdown">
                    <a data-toggle="dropdown" href="#" class="dropdown-toggle" aria-expanded="false">
                        <small class="text-muted">Settings<b class="caret"></b></small>
                    </a>
                    <ul class="dropdown-menu animated flipInX m-t-xs">
                        {foreach from=$GCLS item=GCL name=gcl key=gcl_key}
                            <li>
                                <a id="{$gcl_key}_link" href="{$GCL.URL}"{if !empty($GCL.ONCLICK)} onclick="{$GCL.ONCLICK}"{/if}>{$GCL.LABEL}</a>
                            </li>
                        {/foreach}
                        {sp_project_charts what='showlink_setting'}
                        <li role="presentation"><a role="menuitem" id="logout_link" href='{$LOGOUT_LINK}' class='utilsLink'>{$LOGOUT_LABEL}</a></li>
                    </ul>
                </div>
               {sp_project_charts what='showiframe'}
         
            </div>
        </div>
        {if $USE_GROUP_TABS}
                  <ul class="nav" id="side-menu">
                    {assign var="groupSelected" value=false}
                    {foreach from=$groupTabs item=modules key=group name=groupList}
                        {capture name=extraparams assign=extraparams}parentTab={$group}{/capture}
                        <li>
                            <a href="#"><span class="nav-label">{$group}</span><span class="fa arrow"></span> </a>
                            <ul class="nav nav-second-level">
                                {foreach from=$modules.modules item=module key=modulekey}
                                   {if $module != 'Home'}  
                                    <li>
                                        {capture name=moduleTabId assign=moduleTabId}moduleTab_{$smarty.foreach.moduleList.index}_{$module}{/capture}
                                        {sugar_link id=$moduleTabId module=$modulekey data=$module extraparams=$extraparams}
                                    </li>
                                   {/if}
                                {/foreach}
                                {foreach from=$modules.extra item=submodulename key=submodule}
                                   {if $submodulename != 'Home'}   
                                    <li><a href="{sugar_link module=$submodule link_only=1 extraparams=$extraparams}">{$submodulename}</a></li>
                                    {/if}
                                {/foreach}
                            </ul>
                        </li>
                    {/foreach}
                </ul>
            {else}
                <ul class="nav" id="side-menu">
                    {foreach from=$moduleTopMenu item=module key=name name=moduleList}
                     {if $name != 'Home'}
                        {if $name == $MODULE_TAB}
                            <li>
                                {if $name !='Home'}
                                     <a href="#"><span class="nav-label">{sugar_link id="moduleTab_$name" label_only=1  module=$name data=$module}</span><span class="fa arrow"></span> </a>
 
                                {/if}
                                <ul class="nav nav-second-level">
                                    {if count($shortcutTopMenu.$name) > 0}
                                        {foreach from=$shortcutTopMenu.$name item=item}
                                            {if $item.URL == "-"}
                                                <li><a></a><span>&nbsp;</span></li>
                                            {else}
                                                <li><a href="{$item.URL}" class=""><span>{$item.LABEL}</span></a></li>
                                            {/if}
                                        {/foreach}
                                    {/if}
                                 
                                </ul>
                            </li>
                        {else}
                            <li>
                                {if $name != 'Home'}
                                    <a href="#"><span class="nav-label">{sugar_link id="moduleTab_$name" label_only=1 module=$name data=$module}</span><span class="fa arrow"></span> </a>
                                {/if}
                                  <ul class="nav nav-second-level">
                                    {if count($shortcutTopMenu.$name) > 0}
                                        {foreach from=$shortcutTopMenu.$name item=item}
                                            {if $item.URL == "-"}
                                                <li><a></a><span>&nbsp;</span></li>
                                            {else}
                                                <li><a href="{$item.URL}">{$item.LABEL}</a></li>
                                            {/if}
                                        {/foreach}
                                    {/if}

                                  
                                </ul>
                            </li>
                           {/if}
                      {/if}
                    {/foreach}
                    {if count($moduleExtraMenu) > 0}
                        <li>
                            <a class="dropdown-toggle" data-toggle="dropdown">{$APP.LBL_MORE} &raquo;</a>
                             <ul class="nav nav-second-level">

                                    {foreach from=$moduleExtraMenu item=module key=name name=moduleList}
                                        <li>{sugar_link id="moduleTab_$name" module=$name data=$module}</li>
                                    {/foreach}

                            </ul>
                        </li>
                    {/if}
                </ul>
            {/if}
        </ul>
    </div>
</aside>     
