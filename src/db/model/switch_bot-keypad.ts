import {
    AllowNull,
    AutoIncrement, BelongsTo,
    Column,
    CreatedAt,
    DataType,
    ForeignKey, HasMany,
    Model,
    PrimaryKey,
    Table,
    UpdatedAt
} from "sequelize-typescript";
import {CreationOptional, DataTypes, InferAttributes, InferCreationAttributes} from "sequelize";
import Beds24PropertyRoom from "./beds24-property-room";
import SwitchBotLockAccessCode from "./switch-bot-lock-access-code";

@Table({tableName: "keypad", modelName: "SwitchBotKeypad", schema: 'switch_bot_entity', underscored: true})
export default class SwitchBotKeypad extends Model<InferAttributes<SwitchBotKeypad>, InferCreationAttributes<SwitchBotKeypad>> {
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

    @ForeignKey(() => Beds24PropertyRoom)
    @AllowNull(false)
    @Column({type: DataTypes.UUIDV4})
    declare propertyRoomUuid: string

    @CreatedAt
    declare createdAt: CreationOptional<Date>;

    @UpdatedAt
    declare updatedAt: CreationOptional<Date>;

    @BelongsTo(()=>Beds24PropertyRoom)
    declare propertyRoom?:InferAttributes<Beds24PropertyRoom>;

    @HasMany(()=>SwitchBotLockAccessCode)
    declare accessCodes?:InferAttributes<SwitchBotLockAccessCode>[];

    toJSON() {
        return {name: this.deviceName, propertyRoom: this.propertyRoom}
    }
}