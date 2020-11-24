
{if strval($fields.token_is_revoked.value) == "1" || strval($fields.token_is_revoked.value) == "yes" || strval($fields.token_is_revoked.value) == "on"} 
{assign var="checked" value='checked="checked"'}
{else}
{assign var="checked" value=""}
{/if}
<input type="hidden" name="{$fields.token_is_revoked.name}" value="0"> 
<input type="checkbox" id="{$fields.token_is_revoked.name}" 
name="{$fields.token_is_revoked.name}" 
value="1" title='' tabindex="1" {$checked} >