const express = require('express');
const cors = require('cors');
const UserRouters = require('../users/userRouters');
const QuoteRouters = require('../quotes/quotesRouters');
const TablesRoutes = require('../tables/tablesRouters')
const https = require('https');
const http = require('http');
const logger = require('./logger');
const path = require('path');

class Server {

    constructor() {
        this.port = 3005; //process.env.PORT;
        this.app = express();
        //Middlewares
        this.middlewares();
        //Routes
        this.routes();

    }

    middlewares() {
        this.app.use(cors()); //control de acceso paginas
        this.app.use(express.json()); // parse y lectura de body
        this.app.use(express.static(path.join(__dirname, '../../public'))); // configuracion contenido html carpeta publica
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
            // const connetion = mssql.connect(this.config, (err, res) => {
            //   if (err) {
            //     console.log(err);
            //   logger.error(`${new Date().toString()} Servidor http ${err}`);
            // } else {
            //   console.log('Base de datos SQL On Line');

            http.createServer({}, this.app).listen(this.port, () => {
                console.log('Servidor http corriendo en puerto : ', this.port);
                logger.info(`${new Date().toString()} Servidor http corriendo en puerto : ${this.port}`);
            });


            /*
            this.app.listen(this.port, () => {
                logger.info(`${new Date().toString()} Servidor http corriendo en puerto : ${this.port}`);
            });
            */

            // }
            //});

        } else {
            // https

            https.createServer(https_options, this.app).listen(this.port, () => {
                logger.info(`${new Date().toString()} Servidor https corriendo en puerto : ${this.port}`);
            });

        };

    }

}

module.exports = Server;