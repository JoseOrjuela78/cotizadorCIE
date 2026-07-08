const express = require('express');
const cors = require('cors');
const UserRouters = require('../users/userRouters');
const QuoteRouters = require('../quotes/quotesRouters');
const TablesRoutes = require('../tables/tablesRouters')
const ReportRouters = require('../reports/reportsRouters');
const https = require('https');
const http = require('http');
const logger = require('./logger');
const path = require('path');

class Server {

    constructor() {
        this.port = process.env.PORT || 3005;
        this.app = express();
        //Middlewares
        this.middlewares();
        //Routes
        this.routes();

    }

    middlewares() {
        this.app.use(cors()); //control de acceso paginas
        this.app.use(express.json({ limit: '1024mb' })); // parse y lectura de body
        this.app.use(express.static(path.join(__dirname, '../../public'))); // configuracion contenido html carpeta publica
        this.app.use((req, res, next) => {
            if (req.originalUrl.startsWith('/api')) {
                return next(); // deja pasar a los controladores de API
            }
            res.sendFile(path.join(__dirname, '../../public', 'index.html'));
        });
        this.app.use(express.urlencoded({ extended: true }));
    }

    routes() {
            this.app.use(UserRouters);
            this.app.use(QuoteRouters);
            this.app.use(TablesRoutes);
            this.app.use(ReportRouters);
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

            http.createServer({}, this.app).listen(this.port,'0.0.0.0', () => {
                console.log('Servidor http corriendo en puerto : ', this.port);
                logger.info(`${new Date().toString()} Servidor http corriendo en puerto : ${this.port}`);
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