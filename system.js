// system.js:

const _config = undefined;
const _log = undefined;
const tenants = undefined;

module.exports = {
  // define getter for config global variable
  get config() {
    if (!_config) {
      throw new Error(`The "system.setConfig" property must be assigned.`);
    }
    return _config;
  },

  // define setter for global config variable
  set config(value) {
    if (!value || typeof value !== "object") {
      throw new Error(`The "system.config" property must be an object`);
    }
    _config = value;
  },

  // define getter for global log
  get log() {
    if (!_log) {
      throw new Error(`The "system.log" property must be assigned`);
    }
    return _log;
  },

  // define setter for global log
  set log(value) {
    if (!value || typeof value !== "object") {
      throw new Error(`The "system.log" property must be an object`);
    }
    _log = value;
  },

  // define getter for tenants
  get tenants() {
    if (!_tenants) {
      throw new Error(`The "system.tenants" property must be assigned`);
    }
    return _tenants;
  },

  // define the tenants setter
  set tenants(value) {
    if (!value || typeof value !== "object") {
      throw new Error(`The "system.tenants" property must be an object`);
    }
    _tenants = value;
  },
};
