"use strict";
var environment = process.env.NODE_ENV || 'development';
var config = require('./db/knexfile')[environment];
module.exports = require('knex')(config);
