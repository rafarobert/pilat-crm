
let menuHtml, newItem;

menuHtml = $('#side-menu').html();

newItem = `
	<li>
		<a href="frontend/crm"><span class="nav-label">NUEVA VERSION</span></a>
	</li>
	`;

if (!menuHtml.includes('PIPELINE')) {
	$('#side-menu').html(newItem+menuHtml);
}

