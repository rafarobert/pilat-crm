<?php /* Smarty version 2.6.31, created on 2021-02-20 06:51:15
         compiled from /Applications/XAMPP/xamppfiles/htdocs/lafuente/crm_pilat_dev/include/utils/recaptcha_disabled.tpl */ ?>
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