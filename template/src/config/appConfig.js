export const ENVIRONMENTS = {
  local: 'local',
  production: 'production',
};

export const LOG_LEVELS = {
  info: 0,
  debug: 1,
  warn: 2,
  error: 3,
};

const baseConfig = {
  sentryDSN: process.env.REACT_APP_NOT_SECRET_CODE,
  sentryEnabled: true,
  logLevel: LOG_LEVELS.info,
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
  const hostname = window.location.hostname;

  if (hostname === 'localhost' || hostname.startsWith('192.168')) {
    return appConfig[ENVIRONMENTS.local];
  }

  return appConfig[ENVIRONMENTS.production];
}

export default getAppConfig();