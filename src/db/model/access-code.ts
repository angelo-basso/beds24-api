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
    @IsEmail
    @Column
    declare guestEmail: string;

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

}