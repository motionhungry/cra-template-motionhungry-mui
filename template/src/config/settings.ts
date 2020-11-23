import Environment from '#types/environment';
import LogLevel from '#types/loglevel';

interface IConfig {
  environment?: string;
  sentryDSN?: string;
  sentryEnabled: boolean;
  logLevel: LogLevel;
  appVersion?: string;
}

const baseConfig: IConfig = {
  sentryDSN: process.env.REACT_APP_SENTRY_DSN,
  sentryEnabled: true,
  logLevel: LogLevel.Info,
  appVersion: process.env.REACT_APP_VERSION,
};

const settings: Record<Environment, IConfig> = {
  [Environment.Local]: {
    ...baseConfig,
    environment: Environment.Local,
    sentryEnabled: false,
    logLevel: LogLevel.Debug,
  },
  [Environment.Production]: {
    ...baseConfig,
    environment: Environment.Production,
  },
};

const getAppConfig = (): IConfig => {
  const { hostname } = window.location;

  if (hostname === 'localhost' || hostname.startsWith('192.168')) {
    return settings[Environment.Local];
  }

  return settings[Environment.Production];
};

export default getAppConfig();
