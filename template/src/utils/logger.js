import * as Sentry from '@sentry/react';

import appConfig, { LOG_LEVELS } from './config/appConfig';

const createLogMessage = (logLevel, sentryLogLevel, msg) => {
  if (logLevel >= appConfig.logLevel) {
    if (appConfig.sentryEnabled) {
      Sentry.captureMessage(msg, { level: sentryLogLevel });
      return;
    }
    console.log(msg);
  }
}

const logger = {
  debug: (msg) => createLogMessage(LOG_LEVELS.debug, 'debug', msg),
  info: (msg) => createLogMessage(LOG_LEVELS.info, 'info', msg),
  warn: (msg) => createLogMessage(LOG_LEVELS.warn, 'warn', msg),
  error: (err) => {
    if (appConfig.sentryEnabled) {
      if (typeof err === 'string') {
        Sentry.captureMessage(err, { level: 'error' });
        return;
      }
      Sentry.captureException(err);
      return;
    }
    console.error(err);
  },
};

export default logger;
