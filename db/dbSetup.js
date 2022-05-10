"use strict";
const knex = require('knex');
const knexConfig = require('./knexfile');
const { Model } = require('objection');
//initialize knex
function dbsetup() {
    const db = knex(knexConfig.development);
    Model.knex(db);
}
module.exports = knex;
module.exports = dbsetup;
