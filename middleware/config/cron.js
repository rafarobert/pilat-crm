const cron = require("node-cron");
const fs = require("fs");

module.exports = function(app) {
    let today = new Date();
    let dia = today.getDate();
    let mes = today.getMonth();
    let ano = today.getFullYear();
    let hora = today.getHours();
    let minutos = today.getMinutes();
    let segundos = today.getSeconds();

    let fechaDeHoy = dia+'-'+mes+'-'+ano;
    let horaActual = hora+':'+minutos+':'+segundos;
    // console.log('Current date: '+fechaDeHoy+' '+horaActual);

    // schedule tasks to be run on the server
    // cron.schedule("* * * * *", function() {
    //     console.log("running a task every minute");
    // });

    //To verify date and time
    // cron.schedule("00 16 * * *", function() {
    //     console.log("---------------------");
    //     console.log("Running Cron Job");
    //     console.log("Hello, today is:" +today.getTime());
    // });

    // To verify date and time
    // cron.schedule("23 16 * * *", function() {
    //     console.log("---------------------");
    //     console.log("Running Cron Job");
    //     console.log("Hello, today is:" +today.getTime());
    // });

    // schedule tasks to be run on the server, deletes log files every 18th at 00:00
    cron.schedule("00 00 21 * *", function() {
        console.log("---------------------");
        console.log("Running Cron Job");
        let directory = './logs/';
        fs.readdir(directory, (err, files) => {
            if (err) throw err;
            for (const file of files) {
                if(file.indexOf('.log') >= 0) {
                    fs.unlink(directory+file, err => {
                        if (err) throw err;
                        console.log("Log file succesfully deleted at: " + fechaDeHoy + ' ' + horaActual);
                    });
                }
            }
        });
    });
};
