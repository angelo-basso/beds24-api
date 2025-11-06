import {
    AllowNull,
    AutoIncrement,
    Column,
    CreatedAt,
    DataType,
    Model,
    PrimaryKey,
    Table,
    UpdatedAt
} from "sequelize-typescript";
import {CreationOptional, InferAttributes, InferCreationAttributes} from "sequelize";

@Table({tableName: "keypad", modelName: "Keypad", schema: 'switch_bot', underscored: true})
export default class Keypad extends Model<InferAttributes<Keypad>, InferCreationAttributes<Keypad>> {
    @PrimaryKey
    @AutoIncrement
    @Column({type: DataType.UUIDV4})
    declare uuid: CreationOptional<string>;

    @AllowNull(false)
    @Column
    declare deviceId: string;

    @AllowNull(false)
    @Column
    declare deviceName: string;

    @CreatedAt
    declare createdAt: CreationOptional<Date>;

    @UpdatedAt
    declare updatedAt: CreationOptional<Date>;
}