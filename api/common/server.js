const express = require('express');
const cors = require('cors');
const UserRouters = require('../users/userRouters');
const QuoteRouters = require('../quotes/quotesRouters');
const https = require('https');
const mssql = require('mssql');

class Server {

    constructor() {
        this.port = process.env.PORT;
        this.app = express();
        //Middlewares
        this.middlewares();
        //Routes
        this.routes();
        this.config = {
            user: 'sa',
            password: '123456',
            server: '192.168.20.46',
            port: 1433,
            database: 'CotizadorV3',
            options: {
                enableArithAbort: true,
                encrypt: false
            }
        };
    }

    middlewares() {
        this.app.use(cors()); //control de acceso paginas
        this.app.use(express.json()); // parse y lectura de body
        this.app.use(express.static('public')); // configuracion contenido html carpeta publica
        this.app.use(express.urlencoded({ extended: true }));
    }

    routes() {
        this.app.use(UserRouters);
        this.app.use(QuoteRouters);
    }

    listen() {

        const privateKey = ''; //process.env.SSLKEY;
        const certificate = ''; //process.env.SSLCERT;

        const https_options = {
            key: privateKey,
            cert: certificate,
            passphrase: ''
        };

        if (!privateKey) {

            // http
            const connetion = mssql.connect(this.config, (err, res) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Base de datos SQL On Line');
                    this.app.listen(this.port, () => {
                        console.log('Servidor http corriendo en puerto : ', this.port);
                    });

                }
            });

        } else {
            // https

            https.createServer(https_options, this.app).listen(this.port, () => {
                console.log('Servidor https corriendo en puerto : ', this.port);
            });

        };

    }

}

module.exports = Server;