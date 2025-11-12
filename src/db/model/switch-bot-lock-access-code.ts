import {
    Column,
    Model,
    Table,
    DataType,
    Unique,
    CreatedAt,
    UpdatedAt,
    AllowNull,
    Validate,
    PrimaryKey, AutoIncrement, IsEmail
} from "sequelize-typescript";
import {CreationOptional, InferAttributes, InferCreationAttributes} from "sequelize";

@Table({tableName: "switch_bot_lock_access_code", modelName: "SwitchBotLockAccessCode", schema: "app", underscored: true})
export default class SwitchBotLockAccessCode extends Model<InferAttributes<SwitchBotLockAccessCode>, InferCreationAttributes<SwitchBotLockAccessCode>> {

    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.UUIDV4
    })
    declare uuid: CreationOptional<string>;

    @Unique
    @AllowNull(false)
    @Column
    declare bookingId: number;

    @AllowNull(false)
    @Validate({len: [1, 100]})
    @Column
    declare guestName: string;

    @AllowNull(false)
    @Column
    declare keypadUuid: string;

    @AllowNull(false)
    @Column
    declare encryptedCode: string;

    @AllowNull(false)
    @Column
    declare validFrom: Date;

    @AllowNull(false)
    @Column
    declare validUntil: Date;

    @AllowNull(false)
    @Column
    declare status: string;

    @CreatedAt
    declare createdAt: CreationOptional<Date>;

    @UpdatedAt
    declare updatedAt: CreationOptional<Date>;

    toJSON(){
        return{bookingId:this.bookingId,guestName:this.guestName,validFrom:this.validFrom,validUntil:this.validUntil,status:this.status};
    }

}

export interface ISwitchBotLockAccessCode {
    bookingId: number,
    guestName: string,
    keypadUuid: string,
    encryptedCode: string,
    validFrom: Date,
    validUntil: Date,
    status: string
}