
{if strlen($fields.duration_hours.value) <= 0}
{assign var="value" value=$fields.duration_hours.default_value }
{else}
{assign var="value" value=$fields.duration_hours.value }
{/if}  
<input type='text' name='{$fields.duration_hours.name}' 
id='{$fields.duration_hours.name}' style="max-width:170px;" size='30' maxlength='2' value='{sugar_number_format precision=0 var=$value}' title='' tabindex='1'    >