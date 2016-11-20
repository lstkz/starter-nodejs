/**
 * Global logger
 */

import bunyan from 'bunyan';

const logger = bunyan.createLogger({ name: 'app', serializers: bunyan.stdSerializers });

export default logger;
