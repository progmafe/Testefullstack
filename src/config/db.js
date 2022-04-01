const { Pool } = require('pg');
// import { Pool } from "pg/lib";
const pool = new Pool({
    user:'postgres', // default postgres
    host:'localhost',
    database:'testefullstack', // `my_todos_db`
    password:'123', //added during PostgreSQL and pgAdmin installation
    port:'5432' //default port
});

module.exports = pool;