const pdf = require('html-pdf');

module.exports.createPdf = async (content, file, callback = null) => {
	try {
		let htmlPdfResp = await pdf.create(content, { orientation: 'landscape', type: 'pdf', timeout: '100000' }).toFile(file, async function(err, res) {
			if (err){
				console.log(err);
			} else {
				htmlPdfResp = res;
			}
			if (typeof callback == 'function') {
				callback(err, res, file);
			}
		});
		return htmlPdfResp;
	}catch (e) {
		console.log(e)
	}
}

