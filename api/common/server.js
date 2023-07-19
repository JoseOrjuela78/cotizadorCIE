const express = require('express');
const cors = require('cors');
const UserRouters = require('../users/userRouters');
const QuoteRouters = require('../quotes/quotesRouters');
const TablesRoutes = require('../tables/tablesRouters')
const https = require('https');
const mssql = require('mssql');
const logger = require('./logger');

class Server {

    constructor() {
        this.port = process.env.PORT;
        this.app = express();
        //Middlewares
        this.middlewares();
        //Routes
        this.routes();

        this.config = {
            user: 'sa', //'sqlserver', 
            password: '123456', //"'I[tD|e;'gP91VfM",
            server: '192.168.20.46', //'34.72.67.247', 
            port: 1433,
            database: 'CotizadorV3', //'cotizador', 
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
        this.app.use(TablesRoutes);
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
                    logger.error(`${new Date().toString()} Servidor http ${err}`);
                } else {
                    console.log('Base de datos SQL On Line');
                    this.app.listen(this.port, () => {
                        logger.info(`${new Date().toString()} Servidor http corriendo en puerto : ${this.port}`);
                    });

                }
            });

        } else {
            // https

            https.createServer(https_options, this.app).listen(this.port, () => {
                logger.info(`${new Date().toString()} Servidor https corriendo en puerto : ${this.port}`);
            });

        };

    }

}

module.exports = Server;