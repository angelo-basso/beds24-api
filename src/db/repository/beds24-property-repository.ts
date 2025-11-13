import BaseRepository, {Constructor} from "./base-repository";
import Beds24Property, {IBeds24Property} from "../model/beds24-property";

export function AddBeds24PropertyRepository<TBase extends Constructor<BaseRepository>>(Base: TBase){
    return class extends Base{
        getBeds24Properties(){
            return Beds24Property.findAll({limit:this.defaultLimit});
        }
        getBeds24Property(uuid:string){
            return Beds24Property.findByPk(uuid);
        }
        createBeds24Property(property:IBeds24Property){
            return Beds24Property.create(property)
        }
    }
}