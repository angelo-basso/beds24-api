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

@Table({tableName: "access_code", modelName: "AccessCode", schema: "switch_bot", underscored: true})
export default class AccessCode extends Model<InferAttributes<AccessCode>, InferCreationAttributes<AccessCode>> {

    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.UUIDV4
    })
    declare id: CreationOptional<string>;

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
    declare keypadId: string;

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

export interface IAccessCode {
    bookingId: number,
    guestName: string,
    keypadId: string,
    encryptedCode: string,
    validFrom: Date,
    validUntil: Date,
    status: string
}