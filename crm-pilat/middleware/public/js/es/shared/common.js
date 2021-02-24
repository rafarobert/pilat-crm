function formatDate(value){
	return value ? Ext.Date.dateFormat(value, 'yy/m/d H:i:s') : Ext.Date.dateFormat(new Date(), 'yy/m/d H:i:s');
}
