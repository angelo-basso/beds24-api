import {
    AllowNull,
    AutoIncrement, BelongsTo,
    Column,
    CreatedAt,
    DataType,
    ForeignKey,
    Model,
    PrimaryKey,
    Table,
    UpdatedAt
} from "sequelize-typescript";
import {CreationOptional, DataTypes, InferAttributes, InferCreationAttributes} from "sequelize";
import PropertyRoom from "./beds24-property-room";

@Table({tableName: "keypad", modelName: "Keypad", schema: 'switch_bot_entity', underscored: true})
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

    @ForeignKey(() => PropertyRoom)
    @AllowNull(false)
    @Column({type: DataTypes.UUIDV4})
    declare propertyRoomUuid: string

    @CreatedAt
    declare createdAt: CreationOptional<Date>;

    @UpdatedAt
    declare updatedAt: CreationOptional<Date>;

    @BelongsTo(()=>PropertyRoom)
    declare propertyRoom?:InferAttributes<PropertyRoom>

    toJSON() {
        return {name: this.deviceName, propertyRoom: this.propertyRoom}
    }
}