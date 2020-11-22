const Environment = {
  Local: 'local',
  Production: 'production',
};

type Environment = typeof Environment[keyof typeof Environment];

export default Environment;
