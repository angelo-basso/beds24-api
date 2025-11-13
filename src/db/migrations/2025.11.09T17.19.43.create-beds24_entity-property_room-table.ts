import {Migration} from "../../umzug";
import {DataTypes} from "sequelize";
import {Sequelize} from "sequelize-typescript";

const table = {schema: "beds24_entity", tableName: "property_room"}

export const up: Migration = async ({context: sequelize}) => {
    await sequelize.getQueryInterface().createTable(table, {
        uuid: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: Sequelize.literal('gen_random_uuid()')
        },
        id: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        property_uuid: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: "property",
                key: "uuid"
            },
            onUpdate: "CASCADE",
            onDelete: "RESTRICT"
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
        }
    })
}
export const down: Migration = async ({context: sequelize}) => {
    await sequelize.getQueryInterface().dropTable(table);
}