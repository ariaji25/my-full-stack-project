import { MikroOrmModuleSyncOptions } from "@mikro-orm/nestjs";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";

const databaseOption = <MikroOrmModuleSyncOptions>{
    dbName: process.env.DB_NAME,
    driver: PostgreSqlDriver,
    host: process.env.DB_HOST,
    port: 5432,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    autoLoadEntities: true,
}
export default databaseOption;