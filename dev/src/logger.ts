// const winston = require('winston');
import * as winston from 'winston';

const logger = winston.createLogger({
    level: '5',
    transports: [
        new winston.transports.File({ filename: 'app.log' }),
        new winston.transports.Console()
    ]
});

export { logger }