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
import Beds24PropertyRoom from "./beds24-property-room";

@Table({tableName: "property", modelName: "Beds24Property", schema: "beds24_entity", underscored: true})
export default class Beds24Property extends Model<InferAttributes<Beds24Property>, InferCreationAttributes<Beds24Property>> {

    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.UUIDV4
    })
    declare uuid:CreationOptional<string>;

    @Unique
    @AllowNull(false)
    @Column
    declare id: number;

    @AllowNull(false)
    @Validate({len: [1, 100]})
    @Column
    declare name: string;

    @CreatedAt
    declare createdAt: CreationOptional<Date>;

    @UpdatedAt
    declare updatedAt: CreationOptional<Date>;

    @HasMany(()=> Beds24PropertyRoom)
    declare rooms?:InferAttributes<Beds24PropertyRoom>[];

    toJSON(){
        return{name:this.name}
    }

}

export interface IBeds24Property {
    uuid:string,
    id:number,
    name:string
}