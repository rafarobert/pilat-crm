<?php /* Smarty version 2.6.31, created on 2019-08-01 10:13:37
         compiled from themes/sp_theme/include/SearchForm/tpls/footerPopup.tpl */ ?>

<?php echo '
<script>

    var listViewSearchIcon = {

        searchInfo: '; ?>
<?php echo $this->_tpl_vars['searchInfoJson']; ?>
<?php echo ',

        selectedSavedSearch: '; ?>
'<?php echo $this->_tpl_vars['savedSearchData']['selected']; ?>
'<?php echo ',

        infoInit: function () {

        },

        onOpen: function () {
        },

        // private
        latestSearchDialogType: \''; ?>
<?php echo $this->_tpl_vars['viewTab']; ?>
<?php echo '\',

        // private
        setLatestSearchDialogType: function (dialogType) {
            $(\'input[name="selectedSearchTab"]\').val(dialogType);
            this.latestSearchDialogType = dialogType;
        },

        // public
        getLatestSearchDialogType: function () {
            return this.latestSearchDialogType;
        },

        toggleSearchDialog: function (dialogType) {
            if (dialogType == \'latest\') {
                if (this.selectedSavedSearch != \'\') {
                    dialogType = \'advanced\';
                }
                else {
                    dialogType = this.getLatestSearchDialogType();
                }
            }
            this.setLatestSearchDialogType(dialogType);
            SUGAR.searchForm.searchFormSelect(\''; ?>
<?php echo $this->_tpl_vars['module']; ?>
<?php echo '|\' + dialogType + \'_search\', \''; ?>
<?php echo $this->_tpl_vars['module']; ?>
<?php echo '|\' + (dialogType == \'advanced\' ? \'basic\' : \'advanced\') + \'_search\');
        },

        switchSearchTabLatestActive: function () {
            $(\'.searchTabHandler\').removeClass(\'active\');
            $(\'.searchTabHandler.\' + this.getLatestSearchDialogType()).addClass(\'active\');

            $(\'.searchTabHeader\').removeClass(\'active\');
            $(\'.searchTabHeader.\' + this.getLatestSearchDialogType()).addClass(\'active\');
        }

    };

    listViewSearchIcon.infoInit();


</script>
'; ?>
