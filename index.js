// index.js: multitenants-express

"use strict";

// load all necessary modules
const findFiles = require("./lib/findFiles");
const { serverLog, setServerLog } = require("./lib/serverlog");
const Tenants = require("./lib/tenants");

module.exports = { serverLog, setServerLog, Tenants };
