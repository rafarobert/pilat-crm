
{if strlen($fields.numero_documento_c.value) <= 0}
{assign var="value" value=$fields.numero_documento_c.default_value }
{else}
{assign var="value" value=$fields.numero_documento_c.value }
{/if}  
<input type='text' name='{$fields.numero_documento_c.name}' 
    id='{$fields.numero_documento_c.name}' size='30' 
    maxlength='15' 
    value='{$value}' title='Nro de identificcación'   tabindex='1'      >