import {Migration} from "../../umzug";
import {DataTypes} from "sequelize";
import {Sequelize} from "sequelize-typescript";

const table = {schema: "app", tableName: "switch_bot_lock_access_code"}

export const up: Migration = async ({context: sequelize}) => {
    await sequelize.getQueryInterface().createTable(table, {
        uuid: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: Sequelize.literal('gen_random_uuid()')
        },
        booking_id: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        guest_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        keypad_uuid: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: {schema: "switch_bot_entity", tableName: "keypad"},
                key: "uuid",
            }
        },
        encrypted_code: {
            type: DataTypes.STRING,
            allowNull: false
        },
        valid_from: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
        },
        valid_until: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false
        }

    });
}
export const down: Migration = async ({context: sequelize}) => {
    await sequelize.getQueryInterface().dropTable(table);

}