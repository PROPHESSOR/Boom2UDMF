'use strict';

class Configuration {}

Configuration.Constants = require('./constants');
Configuration.lineActionMap = require('./lineActionMap');
Configuration.lineFlags = require('./lineFlagMap');
Configuration.sectorSpecialMap = require('./sectorSpecialMap');
Configuration.actionIDs = require('./lineActionsNameToNumberMap');

module.exports = Configuration;