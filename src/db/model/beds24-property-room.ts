import {
    AllowNull,
    AutoIncrement,
    BelongsTo,
    Column,
    CreatedAt,
    DataType,
    ForeignKey, HasMany, HasOne,
    Model,
    PrimaryKey,
    Table,
    Unique,
    UpdatedAt,
    Validate
} from "sequelize-typescript";
import {CreationOptional, DataTypes, InferAttributes, InferCreationAttributes} from "sequelize";
import Beds24Property from "./beds24-property";
import SwitchBotLockAccessCode from "./switch-bot-lock-access-code";
import SwitchBotKeypad from "./switch_bot_keypad";

@Table({tableName: "property-room", modelName: "Beds24PropertyRoom", schema: "beds24_entity", underscored: true})
export default class Beds24PropertyRoom extends Model<InferAttributes<Beds24PropertyRoom>, InferCreationAttributes<Beds24PropertyRoom>> {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.UUIDV4
    })
    declare uuid: CreationOptional<string>;

    @Unique
    @AllowNull(false)
    @Column
    declare id: number;

    @AllowNull(false)
    @Validate({len: [1, 100]})
    @Column
    declare name: string;

    @ForeignKey(() => Beds24Property)
    @AllowNull(false)
    @Column({type: DataTypes.UUIDV4})
    declare propertyUuid: string

    @CreatedAt
    declare createdAt: CreationOptional<Date>;

    @UpdatedAt
    declare updatedAt: CreationOptional<Date>;

    @BelongsTo(() => Beds24Property)
    declare property?: InferAttributes<Beds24Property>;

    @HasOne(()=>SwitchBotKeypad)
    declare accessCodes?:InferAttributes<SwitchBotKeypad>;

    toJSON() {
        return {name: this.name, property: this.property}
    }
}

export interface IBeds24PropertyRoom {
    uuid:string,
    id:number,
    name:string,
    propertyUuid:string
}