import {Sequelize} from "sequelize-typescript";
import {SequelizeStorage, Umzug} from "umzug";

const sequelize = new Sequelize(process.env.DATABASE_URL!, {
    dialect: "postgres",
    logging: (process.env.DB_LOGGING_ENABLED === "true") ? console.info : false
})

export const migrator = new Umzug({
    migrations: {
        glob: ["db/migrations/*.ts", {cwd: __dirname}]
    },
    context: sequelize,
    storage: new SequelizeStorage({sequelize, tableName: "migrations"}),
    logger: console
});

export type Migration = typeof migrator._types.migration;