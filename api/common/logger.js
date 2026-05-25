const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, colorize } = format;

// Definimos un formato personalizado
const customFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}] ${message}`;
});

const logger = createLogger({
    level: 'info',
    defaultMeta: { service: 'user-cotizador' },
    transports: [
        // Consola con colores
        new transports.Console({
            format: combine(
                colorize({ all: true }), // activa colores por nivel
                timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                customFormat
            )
        }),

        // Archivo solo para errores (rojo en consola, texto en archivo)
        new transports.File({
            filename: 'error.log',
            level: 'error',
            format: combine(
                timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                customFormat
            )
        }),

        // Archivo combinado (todos los logs)
        new transports.File({
            filename: 'combined.log',
            format: combine(
                timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                customFormat
            )
        })
    ]
});

module.exports = logger;
