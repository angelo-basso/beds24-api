import {Migration} from "../../umzug";
import {DataTypes} from "sequelize";
import {Sequelize} from "sequelize-typescript";

const table = {schema: "switch_bot_entity", tableName: "keypad"}

export const up: Migration = async ({context: sequelize}) => {
    await sequelize.getQueryInterface().createTable(table, {
        uuid: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: Sequelize.literal('gen_random_uuid()')
        },
        device_id: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        device_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        property_room_uuid:{
            type: DataTypes.UUID,
            allowNull: false,
            references:{
                model:{
                    schema:"beds24_entity",
                    tableName:"property_room"
                },
                key:"uuid"
            }
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