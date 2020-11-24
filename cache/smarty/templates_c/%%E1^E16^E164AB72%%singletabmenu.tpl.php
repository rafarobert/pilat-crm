<?php /* Smarty version 2.6.31, created on 2019-08-01 10:13:42
         compiled from themes/sp_theme/include/SubPanel/tpls/singletabmenu.tpl */ ?>
  
 
<script type="text/javascript">
    SUGAR.util.doWhen("typeof get_module_name != 'undefined'", function () {
        SUGAR.subpanelUtils.currentSubpanelGroup = '<?php echo $this->_tpl_vars['startSubPanel']; ?>
';

        SUGAR.subpanelUtils.subpanelMoreTab = '<?php echo $this->_tpl_vars['moreTab']; ?>
';

        SUGAR.subpanelUtils.subpanelMaxSubtabs = '<?php echo $this->_tpl_vars['maxSubtabs']; ?>
';

        SUGAR.subpanelUtils.subpanelHtml = new Array();

        SUGAR.subpanelUtils.loadedGroups = Array();
        SUGAR.subpanelUtils.loadedGroups.push('<?php echo $this->_tpl_vars['startSubPanel']; ?>
');

        SUGAR.subpanelUtils.subpanelSubTabs = new Array();
        SUGAR.subpanelUtils.subpanelGroups = new Array();
        <?php $_from = $this->_tpl_vars['othertabs']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['tab']):
?>
        <?php $this->assign('notFirst', '0'); ?>
        SUGAR.subpanelUtils.subpanelGroups['<?php echo $this->_tpl_vars['tab']['key']; ?>
'] = [<?php $_from = $this->_tpl_vars['tab']['tabs']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['subtab']):
?><?php if ($this->_tpl_vars['notFirst'] != 0): ?>, <?php else: ?><?php $this->assign('notFirst', '1'); ?><?php endif; ?>'<?php echo $this->_tpl_vars['subtab']['key']; ?>
'<?php endforeach; endif; unset($_from); ?><?php $_from = $this->_tpl_vars['otherMoreSubMenu'][$this->_tpl_vars['tab']['key']]['tabs']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['subtab']):
?>, '<?php echo $this->_tpl_vars['subtab']['key']; ?>
'<?php endforeach; endif; unset($_from); ?>];
        <?php endforeach; endif; unset($_from); ?>

        <?php $this->assign('notFirst', '0'); ?>
        SUGAR.subpanelUtils.subpanelTitles = <?php echo $this->_tpl_vars['subpanelTitlesJSON']; ?>
;

        SUGAR.subpanelUtils.tabCookieName = get_module_name() + '_sp_tab';

        SUGAR.subpanelUtils.showLinks = <?php echo $this->_tpl_vars['showLinks']; ?>
;

        SUGAR.subpanelUtils.requestUrl = 'index.php?to_pdf=1&module=MySettings&action=LoadTabSubpanels&loadModule=<?php echo $_REQUEST['module']; ?>
&record=<?php echo $_REQUEST['record']; ?>
&subpanels=';
        });
</script>
 
<?php if (! empty ( $this->_tpl_vars['sugartabs'] )): ?>
    
    <script type="text/javascript"> 
       var sp_currentSubpanelGroup = '<?php echo $this->_tpl_vars['startSubPanel']; ?>
';
       var sp_subpanelGroups = new Array();
       <?php $_from = $this->_tpl_vars['othertabs']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['tab']):
?>
         <?php $this->assign('notFirst', '0'); ?>
         sp_subpanelGroups['<?php echo $this->_tpl_vars['tab']['key']; ?>
'] = [<?php $_from = $this->_tpl_vars['tab']['tabs']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['subtab']):
?><?php if ($this->_tpl_vars['notFirst'] != 0): ?>, <?php else: ?><?php $this->assign('notFirst', '1'); ?><?php endif; ?>'<?php echo $this->_tpl_vars['subtab']['key']; ?>
'<?php endforeach; endif; unset($_from); ?><?php $_from = $this->_tpl_vars['otherMoreSubMenu'][$this->_tpl_vars['tab']['key']]['tabs']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['subtab']):
?>, '<?php echo $this->_tpl_vars['subtab']['key']; ?>
'<?php endforeach; endif; unset($_from); ?>];
       <?php endforeach; endif; unset($_from); ?>

       function sp_showsubpanel(what)  
       {
         i=0;
         $('.subpanclasswithtab').removeClass("active"); 
         while(item = sp_subpanelGroups[what][i++]) 
           {
             $('#subpanel_'+item).toggleClass("active"); 
          }    
       }
       $(function()  {
           sp_showsubpanel(sp_currentSubpanelGroup);  
       });    
    </script>

    <ul class="nav nav-tabs">
          <?php $_from = $this->_tpl_vars['sugartabs']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['tab']):
?>
            <li id="<?php echo $this->_tpl_vars['tab']['label']; ?>
_sp_tab">
                <a href="#" onclick="sp_showsubpanel('<?php echo $this->_tpl_vars['tab']['label']; ?>
');" data-toggle="tab"><?php echo $this->_tpl_vars['tab']['label']; ?>
</a>
            </li>
        <?php endforeach; endif; unset($_from); ?> 
        <?php if (! empty ( $this->_tpl_vars['moreMenu'] )): ?>
            <li id="<?php echo $this->_tpl_vars['tab']['label']; ?>
_sp_tab">
                <a href="#" onclick="sp_showsubpanel('<?php echo $this->_tpl_vars['tab']['label']; ?>
');"  data-toggle="tab"><?php echo $this->_tpl_vars['tab']['label']; ?>
</a>
            </li>
        <?php endif; ?>
    </ul>
<?php endif; ?>