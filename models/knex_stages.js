keys = require('./keys.js')


module.exports = {
    development: {
        client: 'pg',
        version: '9.5',
        connection: {
            host: 'localhost',
            user: 'idlesolution',
            password: keys.development_db_password,
            database: 'twitter'
        }
    },

    production: {
        client: 'pg',
        connection: process.env.DB_KEY,
        migrations: {
            tableName: 'knex_migrations'
      }

    }
}