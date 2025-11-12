import {Migration} from "../../umzug";

const accessCodeTableSchemaName = "app"

export const up: Migration = async ({context: sequelize}) => {
    await sequelize.getQueryInterface().createSchema(accessCodeTableSchemaName);
}
export const down: Migration = async ({context: sequelize}) => {
    await sequelize.getQueryInterface().dropSchema(accessCodeTableSchemaName)
}