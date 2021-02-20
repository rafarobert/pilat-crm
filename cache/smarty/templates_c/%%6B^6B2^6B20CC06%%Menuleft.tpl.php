<?php /* Smarty version 2.6.31, created on 2021-02-20 00:59:37
         compiled from themes/sp_theme/tpls/Menuleft.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('function', 'sp_project_logo', 'themes/sp_theme/tpls/Menuleft.tpl', 6, false),array('function', 'sp_project_charts', 'themes/sp_theme/tpls/Menuleft.tpl', 24, false),array('function', 'sugar_link', 'themes/sp_theme/tpls/Menuleft.tpl', 44, false),)), $this); ?>

<!-- Navigation -->
<aside id="menu">
    <div id="navigation">
    
        <?php echo smarty_function_sp_project_logo(array(), $this);?>

        
        <div class="profile-picture">
            <div class="stats-label text-color">
		<img src='index.php?entryPoint=download&id=<?php echo $this->_tpl_vars['CURRENT_USER_ID']; ?>
_photo&type=Users' width="140"></img>
                <a href='index.php?module=Users&action=EditView&record=<?php echo $this->_tpl_vars['CURRENT_USER_ID']; ?>
'>
                <span class="font-extra-bold font-uppercase"><?php echo $this->_tpl_vars['CURRENT_USER']; ?>
</span>
                </a> 
                <div class="dropdown">
                    <a data-toggle="dropdown" href="#" class="dropdown-toggle" aria-expanded="false">
                        <small class="text-muted">Settings<b class="caret"></b></small>
                    </a>
                    <ul class="dropdown-menu animated flipInX m-t-xs">
                        <?php $_from = $this->_tpl_vars['GCLS']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }$this->_foreach['gcl'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['gcl']['total'] > 0):
    foreach ($_from as $this->_tpl_vars['gcl_key'] => $this->_tpl_vars['GCL']):
        $this->_foreach['gcl']['iteration']++;
?>
                            <li>
                                <a id="<?php echo $this->_tpl_vars['gcl_key']; ?>
_link" href="<?php echo $this->_tpl_vars['GCL']['URL']; ?>
"<?php if (! empty ( $this->_tpl_vars['GCL']['ONCLICK'] )): ?> onclick="<?php echo $this->_tpl_vars['GCL']['ONCLICK']; ?>
"<?php endif; ?>><?php echo $this->_tpl_vars['GCL']['LABEL']; ?>
</a>
                            </li>
                        <?php endforeach; endif; unset($_from); ?>
                        <?php echo smarty_function_sp_project_charts(array('what' => 'showlink_setting'), $this);?>

                        <li role="presentation"><a role="menuitem" id="logout_link" href='<?php echo $this->_tpl_vars['LOGOUT_LINK']; ?>
' class='utilsLink'><?php echo $this->_tpl_vars['LOGOUT_LABEL']; ?>
</a></li>
                    </ul>
                </div>
               <?php echo smarty_function_sp_project_charts(array('what' => 'showiframe'), $this);?>

         
            </div>
        </div>
        <?php if ($this->_tpl_vars['USE_GROUP_TABS']): ?>
                  <ul class="nav" id="side-menu">
                    <?php $this->assign('groupSelected', false); ?>
                    <?php $_from = $this->_tpl_vars['groupTabs']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }$this->_foreach['groupList'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['groupList']['total'] > 0):
    foreach ($_from as $this->_tpl_vars['group'] => $this->_tpl_vars['modules']):
        $this->_foreach['groupList']['iteration']++;
?>
                        <?php ob_start(); ?>parentTab=<?php echo $this->_tpl_vars['group']; ?>
<?php $this->_smarty_vars['capture']['extraparams'] = ob_get_contents();  $this->assign('extraparams', ob_get_contents());ob_end_clean(); ?>
                        <li>
                            <a href="#"><span class="nav-label"><?php echo $this->_tpl_vars['group']; ?>
</span><span class="fa arrow"></span> </a>
                            <ul class="nav nav-second-level">
                                <?php $_from = $this->_tpl_vars['modules']['modules']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['modulekey'] => $this->_tpl_vars['module']):
?>
                                   <?php if ($this->_tpl_vars['module'] != 'Home'): ?>  
                                    <li>
                                        <?php ob_start(); ?>moduleTab_<?php echo ($this->_foreach['moduleList']['iteration']-1); ?>
_<?php echo $this->_tpl_vars['module']; ?>
<?php $this->_smarty_vars['capture']['moduleTabId'] = ob_get_contents();  $this->assign('moduleTabId', ob_get_contents());ob_end_clean(); ?>
                                        <?php echo smarty_function_sugar_link(array('id' => $this->_tpl_vars['moduleTabId'],'module' => $this->_tpl_vars['modulekey'],'data' => $this->_tpl_vars['module'],'extraparams' => $this->_tpl_vars['extraparams']), $this);?>

                                    </li>
                                   <?php endif; ?>
                                <?php endforeach; endif; unset($_from); ?>
                                <?php $_from = $this->_tpl_vars['modules']['extra']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['submodule'] => $this->_tpl_vars['submodulename']):
?>
                                   <?php if ($this->_tpl_vars['submodulename'] != 'Home'): ?>   
                                    <li><a href="<?php echo smarty_function_sugar_link(array('module' => $this->_tpl_vars['submodule'],'link_only' => 1,'extraparams' => $this->_tpl_vars['extraparams']), $this);?>
"><?php echo $this->_tpl_vars['submodulename']; ?>
</a></li>
                                    <?php endif; ?>
                                <?php endforeach; endif; unset($_from); ?>
                            </ul>
                        </li>
                    <?php endforeach; endif; unset($_from); ?>
                </ul>
            <?php else: ?>
                <ul class="nav" id="side-menu">
                    <?php $_from = $this->_tpl_vars['moduleTopMenu']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }$this->_foreach['moduleList'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['moduleList']['total'] > 0):
    foreach ($_from as $this->_tpl_vars['name'] => $this->_tpl_vars['module']):
        $this->_foreach['moduleList']['iteration']++;
?>
                     <?php if ($this->_tpl_vars['name'] != 'Home'): ?>
                        <?php if ($this->_tpl_vars['name'] == $this->_tpl_vars['MODULE_TAB']): ?>
                            <li>
                                <?php if ($this->_tpl_vars['name'] != 'Home'): ?>
                                     <a href="#"><span class="nav-label"><?php echo smarty_function_sugar_link(array('id' => "moduleTab_".($this->_tpl_vars['name']),'label_only' => 1,'module' => $this->_tpl_vars['name'],'data' => $this->_tpl_vars['module']), $this);?>
</span><span class="fa arrow"></span> </a>
 
                                <?php endif; ?>
                                <ul class="nav nav-second-level">
                                    <?php if (count ( $this->_tpl_vars['shortcutTopMenu'][$this->_tpl_vars['name']] ) > 0): ?>
                                        <?php $_from = $this->_tpl_vars['shortcutTopMenu'][$this->_tpl_vars['name']]; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['item']):
?>
                                            <?php if ($this->_tpl_vars['item']['URL'] == "-"): ?>
                                                <li><a></a><span>&nbsp;</span></li>
                                            <?php else: ?>
                                                <li><a href="<?php echo $this->_tpl_vars['item']['URL']; ?>
" class=""><span><?php echo $this->_tpl_vars['item']['LABEL']; ?>
</span></a></li>
                                            <?php endif; ?>
                                        <?php endforeach; endif; unset($_from); ?>
                                    <?php endif; ?>
                                 
                                </ul>
                            </li>
                        <?php else: ?>
                            <li>
                                <?php if ($this->_tpl_vars['name'] != 'Home'): ?>
                                    <a href="#"><span class="nav-label"><?php echo smarty_function_sugar_link(array('id' => "moduleTab_".($this->_tpl_vars['name']),'label_only' => 1,'module' => $this->_tpl_vars['name'],'data' => $this->_tpl_vars['module']), $this);?>
</span><span class="fa arrow"></span> </a>
                                <?php endif; ?>
                                  <ul class="nav nav-second-level">
                                    <?php if (count ( $this->_tpl_vars['shortcutTopMenu'][$this->_tpl_vars['name']] ) > 0): ?>
                                        <?php $_from = $this->_tpl_vars['shortcutTopMenu'][$this->_tpl_vars['name']]; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['item']):
?>
                                            <?php if ($this->_tpl_vars['item']['URL'] == "-"): ?>
                                                <li><a></a><span>&nbsp;</span></li>
                                            <?php else: ?>
                                                <li><a href="<?php echo $this->_tpl_vars['item']['URL']; ?>
"><?php echo $this->_tpl_vars['item']['LABEL']; ?>
</a></li>
                                            <?php endif; ?>
                                        <?php endforeach; endif; unset($_from); ?>
                                    <?php endif; ?>

                                  
                                </ul>
                            </li>
                           <?php endif; ?>
                      <?php endif; ?>
                    <?php endforeach; endif; unset($_from); ?>
                    <?php if (count ( $this->_tpl_vars['moduleExtraMenu'] ) > 0): ?>
                        <li>
                            <a class="dropdown-toggle" data-toggle="dropdown"><?php echo $this->_tpl_vars['APP']['LBL_MORE']; ?>
 &raquo;</a>
                             <ul class="nav nav-second-level">

                                    <?php $_from = $this->_tpl_vars['moduleExtraMenu']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }$this->_foreach['moduleList'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['moduleList']['total'] > 0):
    foreach ($_from as $this->_tpl_vars['name'] => $this->_tpl_vars['module']):
        $this->_foreach['moduleList']['iteration']++;
?>
                                        <li><?php echo smarty_function_sugar_link(array('id' => "moduleTab_".($this->_tpl_vars['name']),'module' => $this->_tpl_vars['name'],'data' => $this->_tpl_vars['module']), $this);?>
</li>
                                    <?php endforeach; endif; unset($_from); ?>

                            </ul>
                        </li>
                    <?php endif; ?>
                </ul>
            <?php endif; ?>
        </ul>
    </div>
</aside>     