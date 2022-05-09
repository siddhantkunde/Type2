const knex = require('knex');
const knexConfig = require('./knexfile');
//const { Model } = require('objection');
//initialize knex

function dbsetup(){
    const db = knex(knexConfig.development);
    
}

module.exports = dbsetup;