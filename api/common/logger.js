const { createLogger, format, transports } = require('winston');

const logger = createLogger({
    level: 'info',
    format: format.json(),
    defaultMeta: { service: 'user-cotizador' },
    transports: [
        new transports.File({
            maxFiles: 25,
            filename: `error.log`,
            level: 'error'
        }),
        new transports.File({
            maxFiles: 25,
            filename: `combined.log`
        })

    ]
});

module.exports = logger;