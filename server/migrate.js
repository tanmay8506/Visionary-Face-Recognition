require('dotenv').config();
const knex = require('knex');
const knexConfig = require('./knexfile');

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const db = knex(knexConfig[env]);

db.migrate.latest()
    .then(() => {
        console.log('✅ Migrations ran successfully');
        process.exit(0);
    })
    .catch((err) => {
        console.error('❌ Migration failed:', err);
        process.exit(1);
    });
