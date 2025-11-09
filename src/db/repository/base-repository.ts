import {Sequelize} from "sequelize-typescript";

export default class BaseRepository {
    sequelizeClient: Sequelize;
    defaultLimit = 100;

    constructor() {
        this.sequelizeClient = new Sequelize(process.env.DATABASE_URL!, {
            dialect: "postgres",
            models: [__dirname + '/../model']
        });
    }
}

export type Constructor<T = {}> = new(...args: any[]) => T