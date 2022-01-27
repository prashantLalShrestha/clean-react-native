const settings = {
  development: {
    apiUrl: '',
  },
  production: {
    apiUrl: '',
  },
};

const getCurrentSettings = () => {
  if (__DEV__) {
    return settings.development;
  }
  return settings.production;
};

export default getCurrentSettings();
