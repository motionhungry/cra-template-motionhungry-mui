import ENVIRONMENTS from '#constants/environments';
import LOG_LEVELS from '#constants/log-levels';

const baseConfig = {
  sentryDSN: process.env.REACT_APP_SENTRY_DSN,
  sentryEnabled: true,
  logLevel: LOG_LEVELS.info,
  appVersion: process.env.REACT_APP_VERSION,
};

const appConfig = {
  [ENVIRONMENTS.local]: {
    ...baseConfig,
    environment: ENVIRONMENTS.local,
    sentryEnabled: false,
    logLevel: LOG_LEVELS.debug,
  },
  [ENVIRONMENTS.production]: {
    ...baseConfig,
    environment: ENVIRONMENTS.production,
  },
};

const getAppConfig = () => {
  const { hostname } = window.location;

  if (hostname === 'localhost' || hostname.startsWith('192.168')) {
    return appConfig[ENVIRONMENTS.local];
  }

  return appConfig[ENVIRONMENTS.production];
};

export default getAppConfig();
