import {Sequelize} from "sequelize-typescript";

export default class BaseRepository {
    sequelizeClient: Sequelize;

    constructor() {
        this.sequelizeClient = new Sequelize(process.env.DATABASE_URL!, {
            dialect: "postgres",
            logging: (process.env.DB_LOGGING_ENABLED === "true") ? console.info : false,
            models: [__dirname + '/../models/**']
        })
    }
}