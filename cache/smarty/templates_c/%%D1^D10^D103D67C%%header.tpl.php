<?php /* Smarty version 2.6.31, created on 2021-02-20 06:21:20
         compiled from themes/sp_theme/tpls/header.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('function', 'sp_project_getcustomtoolbar', 'themes/sp_theme/tpls/header.tpl', 104, false),array('function', 'sugar_link', 'themes/sp_theme/tpls/header.tpl', 136, false),array('function', 'sp_project_isadmin', 'themes/sp_theme/tpls/header.tpl', 218, false),)), $this); ?>
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "themes/sp_theme/tpls/_head.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
<?php if ($this->_tpl_vars['AUTHENTICATED']): ?>  
    <?php if ($_COOKIE['hidesidebar'] == 'hide'): ?> 
       <body class="fixed-navbar fixed-sidebar hide-sidebar"> 
    <?php else: ?> 
       <body class="fixed-navbar fixed-sidebar"> 
    <?php endif; ?> 
<?php else: ?>  
   <body class="fixed-navbar fixed-sidebar homecolor">  
<?php endif; ?>      
<?php echo $this->_tpl_vars['DCSCRIPT']; ?>


<?php echo '
    <iframe id=\'ajaxUI-history-iframe\' src=\'index.php?entryPoint=getImage&imageName=blank.png\' title=\'empty\' style=\'display:none\'></iframe>
    <input id=\'ajaxUI-history-field\' type=\'hidden\'>
    <script type=\'text/javascript\'>
        if (SUGAR.ajaxUI && !SUGAR.ajaxUI.hist_loaded) {
            YAHOO.util.History.register(\'ajaxUILoc\', "", SUGAR.ajaxUI.go);
            '; ?>
<?php if ($_REQUEST['module'] != 'ModuleBuilder'): ?>            YAHOO.util.History.initialize("ajaxUI-history-field", "ajaxUI-history-iframe");
            <?php endif; ?><?php echo '
        }
    </script>
'; ?>
 

<!-- Start of page content -->
<?php if ($this->_tpl_vars['AUTHENTICATED']): ?>  

<!--[if lt IE 7]>
<p class="alert alert-danger">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
<![endif]-->
<div id="content">
<!-- Header -->
<div id="header">
    <div id="logo" class="light-version">
        <a href="index.php"><span>
            <?php echo $this->_tpl_vars['APP']['LBL_BROWSER_TITLE']; ?>

        </span>
        </a>
    </div>
    <nav role="navigation">
      <div class="header-link hide-menu onlymobile"><i class="pe-7s-menu"></i></div>
        <div class="small-logo onlymobile">
            <a href="index.php"><?php echo $this->_tpl_vars['APP']['LBL_BROWSER_TITLE']; ?>
</a>
        </div>
        <div class="mobile-menu">
            <button type="button" class="navbar-toggle mobile-menu-toggle" data-toggle="collapse" data-target="#mobile-collapse">
                <i class="fa fa-chevron-down"></i>
            </button>
            <div class="collapse mobile-navbar" id="mobile-collapse">
                <ul class="nav navbar-nav">
                    <?php $_from = $this->_tpl_vars['GCLS']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }$this->_foreach['gcl'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['gcl']['total'] > 0):
    foreach ($_from as $this->_tpl_vars['gcl_key'] => $this->_tpl_vars['GCL']):
        $this->_foreach['gcl']['iteration']++;
?>
                            <li>
                                <a href="<?php echo $this->_tpl_vars['GCL']['URL']; ?>
"<?php if (! empty ( $this->_tpl_vars['GCL']['ONCLICK'] )): ?> onclick="<?php echo $this->_tpl_vars['GCL']['ONCLICK']; ?>
"<?php endif; ?>><?php echo $this->_tpl_vars['GCL']['LABEL']; ?>
</a>
                            </li>
                      <?php endforeach; endif; unset($_from); ?>
                      <li role="presentation"><a role="menuitem" id="logout_link" href='<?php echo $this->_tpl_vars['LOGOUT_LINK']; ?>
' class='utilsLink'><?php echo $this->_tpl_vars['LOGOUT_LABEL']; ?>
</a></li>
                </ul>
               
            </div>
        </div>
        <div class="navbar-right">
            <ul class="nav navbar-nav no-borders">
                <li class="dropdown"> 
                  <div class="header-link hide-menu"><i class="pe-7s-menu"></i></div>
                </li>  
                <?php echo smarty_function_sp_project_getcustomtoolbar(array(), $this);?>
    
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
                            <input type="text" class="form-control"  name="query_string" id="query_string" placeholder="<?php echo $this->_tpl_vars['APP']['LBL_SEARCH']; ?>
..." value="<?php echo $this->_tpl_vars['SEARCH']; ?>
" />
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
                     <?php $_from = $this->_tpl_vars['recentRecords']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }$this->_foreach['lastViewed'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['lastViewed']['total'] > 0):
    foreach ($_from as $this->_tpl_vars['item']):
        $this->_foreach['lastViewed']['iteration']++;
?>
                       <li>                                                                           
                         <a title="<?php echo $this->_tpl_vars['item']['item_summary']; ?>
"
                             accessKey="<?php echo $this->_foreach['lastViewed']['iteration']; ?>
"
                             href="<?php echo smarty_function_sugar_link(array('module' => $this->_tpl_vars['item']['module_name'],'action' => 'DetailView','record' => $this->_tpl_vars['item']['item_id'],'link_only' => 1), $this);?>
">
                             <?php echo $this->_tpl_vars['item']['image']; ?>
&nbsp;&nbsp;<?php echo $this->_tpl_vars['item']['item_summary_short']; ?>

                         </a>
                     </li>
                     <?php endforeach; else: ?>
                       <li>  
                      <?php echo $this->_tpl_vars['APP']['NTC_NO_ITEMS_DISPLAY']; ?>

                       </li>   
                     <?php endif; unset($_from); ?>
                    </ul>
                </li>
                <li class="dropdown">
                    <a class="dropdown-toggle" href="#" data-toggle="dropdown">
                        <i class="pe-7s-keypad"></i>
                    </a>

                    <div class="dropdown-menu hdropdown bigmenu" style="width:620px;">
                    <?php if ($this->_tpl_vars['USE_GROUP_TABS']): ?>
                             <?php $_from = $this->_tpl_vars['groupTabs']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }$this->_foreach['groupList'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['groupList']['total'] > 0):
    foreach ($_from as $this->_tpl_vars['group'] => $this->_tpl_vars['modules']):
        $this->_foreach['groupList']['iteration']++;
?>
                               <?php ob_start(); ?>parentTab=<?php echo $this->_tpl_vars['group']; ?>
<?php $this->_smarty_vars['capture']['extraparams'] = ob_get_contents();  $this->assign('extraparams', ob_get_contents());ob_end_clean(); ?>
                               <?php if ($this->_tpl_vars['submodulename'] != 'Home'): ?>   
                                 <?php $_from = $this->_tpl_vars['modules']['extra']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['submodule'] => $this->_tpl_vars['submodulename']):
?>
                                   <?php if ($this->_tpl_vars['submodulename'] != 'Home'): ?>   
    
                                         <div style="width:130px;height:40px;float:left;text-align:center;">
                                             <a href="<?php echo smarty_function_sugar_link(array('module' => $this->_tpl_vars['submodule'],'link_only' => 1,'extraparams' => $this->_tpl_vars['extraparams']), $this);?>
">
                                                 <?php echo $this->_tpl_vars['submodulename']; ?>

                                             </a>
                                         </div>
                                    <?php endif; ?>
                                   <?php endforeach; endif; unset($_from); ?>   
                                 <?php endif; ?>
                              <?php endforeach; endif; unset($_from); ?>      
                    <?php else: ?>
                        <?php $_from = $this->_tpl_vars['moduleTopMenu']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }$this->_foreach['moduleList'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['moduleList']['total'] > 0):
    foreach ($_from as $this->_tpl_vars['name'] => $this->_tpl_vars['module']):
        $this->_foreach['moduleList']['iteration']++;
?>
                          <div style="width:130px;height:40px;float:left;text-align:center;">
                                 <a href="<?php echo smarty_function_sugar_link(array('module' => $this->_tpl_vars['name'],'link_only' => 1), $this);?>
">
                                   <?php echo smarty_function_sugar_link(array('id' => "moduleTab_".($this->_tpl_vars['name']),'label_only' => 1,'module' => $this->_tpl_vars['name'],'data' => $this->_tpl_vars['module']), $this);?>

                                 </a>
                           </div>
                       <?php endforeach; endif; unset($_from); ?>   
                       <?php $_from = $this->_tpl_vars['moduleExtraMenu']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }$this->_foreach['moduleList'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['moduleList']['total'] > 0):
    foreach ($_from as $this->_tpl_vars['name'] => $this->_tpl_vars['module']):
        $this->_foreach['moduleList']['iteration']++;
?>
                           <div style="width:130px;height:40px;float:left;text-align:center;">
                                 <?php echo smarty_function_sugar_link(array('id' => "moduleTab_".($this->_tpl_vars['name']),'module' => $this->_tpl_vars['name'],'data' => $this->_tpl_vars['module']), $this);?>

                           </div> 
                       <?php endforeach; endif; unset($_from); ?>      
                    <?php endif; ?>      
                    </div>
                </li>
                <li class="dropdown">
                    <a class="dropdown-toggle label-menu-corner" href="#" data-toggle="dropdown">
                        <i class="pe-7s-star"></i>
                    </a>
                       <ul class="dropdown-menu hdropdown animated flipInX">
                        <div class="title">
                           <?php echo $this->_tpl_vars['APP']['LBL_FAVORITES']; ?>

                        </div>
                      <?php $_from = $this->_tpl_vars['moduleTopMenu']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }$this->_foreach['moduleList'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['moduleList']['total'] > 0):
    foreach ($_from as $this->_tpl_vars['name'] => $this->_tpl_vars['module']):
        $this->_foreach['moduleList']['iteration']++;
?>
                        <?php $_from = $this->_tpl_vars['favoriteRecords']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }$this->_foreach['lastViewed'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['lastViewed']['total'] > 0):
    foreach ($_from as $this->_tpl_vars['item']):
        $this->_foreach['lastViewed']['iteration']++;
?>
                        <?php if ($this->_tpl_vars['item']['module_name'] == $this->_tpl_vars['name']): ?>
                                <li class="recentlinks_top" role="presentation">
                                    <div style="float:left;">
                                    <a href="<?php echo smarty_function_sugar_link(array('module' => $this->_tpl_vars['item']['module_name'],'action' => 'EditView','record' => $this->_tpl_vars['item']['id'],'link_only' => 1), $this);?>
" style="margin-left:10px;"><span class=" glyphicon glyphicon-pencil" aria-hidden="true"></a>
                                    &nbsp;<a title="<?php echo $this->_tpl_vars['item']['module_name']; ?>
" accessKey="<?php echo $this->_foreach['lastViewed']['iteration']; ?>
" href="<?php echo smarty_function_sugar_link(array('module' => $this->_tpl_vars['item']['module_name'],'action' => 'DetailView','record' => $this->_tpl_vars['item']['id'],'link_only' => 1), $this);?>
"><?php echo $this->_tpl_vars['item']['item_summary_short']; ?>
</a>
                                    </div>
                                 </li>
                        <?php endif; ?>
                        <?php endforeach; else: ?>
                         <li>
                               <?php echo $this->_tpl_vars['APP']['NTC_NO_ITEMS_DISPLAY']; ?>

                         </li>
                         <?php endif; unset($_from); ?>
                      <?php endforeach; endif; unset($_from); ?>
                    </ul>
                </li>
                <li>
                    <a href="#" id="sidebar" class="right-sidebar-toggle ">
                        <i class="pe-7s-news-paper"></i>
                    </a>
                </li>

             
                <?php echo smarty_function_sp_project_isadmin(array(), $this);?>
 
  
                <li class="dropdown">
                   <a role="menuitem" id="logout_link" href='<?php echo $this->_tpl_vars['LOGOUT_LINK']; ?>
' class='utilsLink'>
                        <i class="pe-7s-upload pe-rotate-90"></i>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</div>   


<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "themes/sp_theme/tpls/Menuleft.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
<div id="wrapper" >
    <?php if ($_COOKIE['mainpanel'] == 'nomargin'): ?> 
      <div class="normalheader transition animated fadeIn small-header">
  <?php else: ?> 
       <div class="normalheader transition animated fadeIn">
  <?php endif; ?> 

<?php endif; ?>

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