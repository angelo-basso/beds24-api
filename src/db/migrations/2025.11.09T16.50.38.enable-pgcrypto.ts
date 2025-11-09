import {Migration} from "../../umzug";


export const up: Migration = async ({context: sequelize}) => {
    await sequelize.getQueryInterface().sequelize.query('CREATE EXTENSION IF NOT EXISTS "pgcrypto";')
}
export const down: Migration = async ({context: sequelize}) => {
    await sequelize.getQueryInterface().sequelize.query('DROP EXTENSION IF EXISTS "pgcrypto";')
}