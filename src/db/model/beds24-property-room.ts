import {
    AllowNull,
    AutoIncrement, BelongsTo,
    Column, CreatedAt,
    DataType,
    ForeignKey, Model,
    PrimaryKey,
    Table,
    Unique, UpdatedAt,
    Validate
} from "sequelize-typescript";
import {CreationOptional, DataTypes, InferAttributes, InferCreationAttributes} from "sequelize";
import Property from "./beds24-property";

@Table({tableName: "property-room", modelName: "PropertyRoom", schema: "beds24_entity", underscored: true})
export default class PropertyRoom extends Model<InferAttributes<PropertyRoom>, InferCreationAttributes<PropertyRoom>>{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.UUIDV4
    })
    declare uuid: CreationOptional<string>;

    @Unique
    @AllowNull(false)
    @Column
    declare id: string;

    @AllowNull(false)
    @Validate({len: [1, 100]})
    @Column
    declare name: string;

    @ForeignKey(() => Property)
    @AllowNull(false)
    @Column({type: DataTypes.UUIDV4})
    declare propertyId: number

    @CreatedAt
    declare createdAt: CreationOptional<Date>;

    @UpdatedAt
    declare updatedAt: CreationOptional<Date>;

    @BelongsTo(() => Property)
    declare property?: InferAttributes<Property>

    toJSON() {
        return {name: this.name, property: this.property}
    }
}