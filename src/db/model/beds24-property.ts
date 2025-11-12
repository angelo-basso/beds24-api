import {
    AllowNull,
    AutoIncrement,
    Column, CreatedAt,
    DataType, HasMany,
    Model,
    PrimaryKey,
    Table,
    Unique, UpdatedAt,
    Validate
} from "sequelize-typescript";
import {CreationOptional, InferAttributes, InferCreationAttributes} from "sequelize";
import PropertyRoom from "./beds24-property-room";

@Table({tableName: "property", modelName: "Property", schema: "beds24_entity", underscored: true})
export default class Property extends Model<InferAttributes<Property>, InferCreationAttributes<Property>> {

    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.UUIDV4
    })
    declare uuid:CreationOptional<string>;

    @Unique
    @AllowNull(false)
    @Column
    declare id: string;

    @AllowNull(false)
    @Validate({len: [1, 100]})
    @Column
    declare name: string;

    @CreatedAt
    declare createdAt: CreationOptional<Date>;

    @UpdatedAt
    declare updatedAt: CreationOptional<Date>;

    @HasMany(()=> PropertyRoom)
    declare rooms?:InferAttributes<PropertyRoom>[];

    toJSON(){
        return{name:this.name}
    }

}