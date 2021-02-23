<?php /* Smarty version 2.6.31, created on 2021-02-23 15:15:17
         compiled from C:%5Cxampp7.2%5Chtdocs%5Ccrm%5Cpilat%5Cinclude%5Cutils/recaptcha_disabled.tpl */ ?>
<?php echo '
<script>

  /**
   * Login Screen Validation
   */
  function validateAndSubmit() {
      generatepwd();
    }

  /**
   * Password reset screen validation
   */
  function validateCaptchaAndSubmit() {
      document.getElementById(\'username_password\').value = document.getElementById(\'new_password\').value;
      document.getElementById(\'ChangePasswordForm\').submit();
    }
</script>
'; ?>