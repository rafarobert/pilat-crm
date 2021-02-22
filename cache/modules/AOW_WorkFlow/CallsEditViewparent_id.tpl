
{if strlen($fields.parent_id.value) <= 0}
{assign var="value" value=$fields.parent_id.default_value }
{else}
{assign var="value" value=$fields.parent_id.value }
{/if}  
<input type='text' name='{$fields.parent_id.name}' 
    id='{$fields.parent_id.name}' size='30' 
     
    value='{$value}' title=''   tabindex='1'      >