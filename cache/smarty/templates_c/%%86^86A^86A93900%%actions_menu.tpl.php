<?php /* Smarty version 2.6.31, created on 2021-02-22 15:57:15
         compiled from themes/sp_theme/include/MySugar/tpls/actions_menu.tpl */ ?>
<ul class="dropdown-menu tab-actions">
    <?php if (! $this->_tpl_vars['lock_homepage']): ?>
        <li>
            <a class="addDashlets"  data-toggle="modal" data-target=".modal-add-dashlet"><?php echo $this->_tpl_vars['lblAddDashlets']; ?>
</a>
        </li>
        <li>
            <a class="addDashboard"  data-toggle="modal" data-target=".modal-add-dashboard">
                <span><?php echo $this->_tpl_vars['lblAddTab']; ?>
</span>
            </a>
        </li>
        <li>
            <a class="addDashboard"  data-toggle="modal" data-target=".modal-edit-dashboard">
                <span><?php echo $this->_tpl_vars['app']['LBL_EDIT_TAB']; ?>
</span>
            </a>
        </li>
    <?php endif; ?>
</ul>