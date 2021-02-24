
let menuHtml, newItem;

menuHtml = $('#side-menu').html();

newItem = `
	<li>
		<a href="frontend/dist/frontend"><span class="nav-label">PIPELINE</span></a>
	</li>
	`;

if (!menuHtml.includes('PIPELINE')) {
	$('#side-menu').html(newItem+menuHtml);
}

