import {Sequelize} from "sequelize-typescript";
import {SequelizeStorage, Umzug} from "umzug";

const sequelize = new Sequelize(process.env.DATABASE_URL!, {
    dialect: "postgres"
})

export const migrator = new Umzug({
    migrations: {
        glob: ["db/migrations/*.ts", {cwd: __dirname}]
    },
    context: sequelize,
    storage: new SequelizeStorage({sequelize, tableName: "migrations",schema:"system"}),
    logger: console
});

export type Migration = typeof migrator._types.migration;