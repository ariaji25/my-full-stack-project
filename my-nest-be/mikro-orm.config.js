const { PostgreSqlDriver } = require('@mikro-orm/postgresql');

module.exports = {
    dbName: 'my_test_db',
    user: 'postgres',
    password: 'mysecretpassword',
    host: 'localhost',
    port: 5432, // adjust port if needed
    driver: PostgreSqlDriver, // Specify the driver
    entities: ['./dist/**/*.entity.js'], // Path to your entities (compiled TypeScript)
    entitiesTs: ['./src/**/*.entity.ts'], // Path to your entities (TypeScript)

};