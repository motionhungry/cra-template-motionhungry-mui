import * as Sentry from '@sentry/react';

import settings from '#config/settings';
import LogLevel from '#types/loglevel';

const createLogMessage = (logLevel: LogLevel, sentrySeverity: Sentry.Severity, msg: string): void => {
  if (logLevel >= settings.logLevel) {
    if (settings.sentryEnabled) {
      Sentry.captureMessage(msg, { level: sentrySeverity });
      return;
    }
    console.log(msg); // eslint-disable-line no-console
  }
};

const logger = {
  debug: (msg: string): void => createLogMessage(LogLevel.Debug, Sentry.Severity.Debug, msg),
  info: (msg: string): void => createLogMessage(LogLevel.Info, Sentry.Severity.Info, msg),
  warn: (msg: string): void => createLogMessage(LogLevel.Warn, Sentry.Severity.Warning, msg),
  error: (err: string | Error): void => {
    if (settings.sentryEnabled) {
      if (typeof err === 'string') {
        Sentry.captureMessage(err, { level: Sentry.Severity.Error });
        return;
      }
      Sentry.captureException(err);
      return;
    }
    console.error(err); // eslint-disable-line no-console
  },
};

export default logger;
