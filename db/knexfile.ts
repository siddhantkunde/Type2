import { Knex } from 'knex';
const {knexSnakeCaseMappers} = require('objection')
interface IknexConfig {
  [key: string]: Knex.Config;
}

module.exports = {
  // development: {
  //   client: "sqlite3",
  //   connection: {
  //     filename: "./dev.sqlite3"
  //   }
  // },

  development: {
    client: "postgresql",
    connection: {
      database: "Testdb",
      user: "postgres",
      password: "Database@22"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    },
    seeds:{
      directory: "./seeds"
    },
    ...knexSnakeCaseMappers
  },




};

// export default configs;
