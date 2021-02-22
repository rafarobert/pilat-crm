const nodemailer = require("nodemailer");
const models = require('../core/express');

class NodeMailer {

	static async sendMail(mailOptions,mailCredential, callback = null) {
		try {
			let resp = "";
			if (mailCredential) {
				const transporter = nodemailer.createTransport({
					host: mailCredential.mai_host,
					port: mailCredential.mai_port,
					secure: false, // upgrade later with STARTTLS
					auth: {
						user: mailCredential.mai_user_account,
						pass: mailCredential.mai_user_password
					}
				});

				transporter.sendMail(mailOptions, function(error, info) {
					if (error) {
						console.log("=====> ERROR_SEND_MAIL:"+error);
						resp = `ERROR,${error}`;
					} else {
						console.log(`=====> Email sent: ${info.response}`);
						resp = `enviado,${JSON.stringify(info.response)}`;
					}
					if (typeof callback == 'function') {
						callback(error,info);
					}
				});
			}
			return resp;
		} catch (e) {
			console.log(e)
		}
	}



}

module.exports = NodeMailer;
