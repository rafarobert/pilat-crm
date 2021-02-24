const pdf = require('html-pdf');

module.exports.createPdf = async (content, file) => {
	try {
		let htmlPdfResp = await pdf.create(content).toFile(file, async function(err, res) {
			if (err){
				console.log(err);
			} else {
				htmlPdfResp = res;
			}
		});
		return htmlPdfResp;
	}catch (e) {
		console.log(e)
	}
}

