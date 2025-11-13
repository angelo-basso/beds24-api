import BaseRepository, {Constructor} from "./base-repository";
import Beds24PropertyRoom, {IBeds24PropertyRoom} from "../model/beds24-property-room";

export function AddBeds24PropertyRoomRepository<TBase extends Constructor<BaseRepository>>(Base: TBase) {
    return class extends Base {
        getBeds24PropertiesRooms() {
            return Beds24PropertyRoom.findAll({limit: this.defaultLimit});
        }

        getBeds24PropertyRoom(uuid: string) {
            return Beds24PropertyRoom.findByPk(uuid)
        }

        createBeds24PropertyRoom(propertyRoom: IBeds24PropertyRoom) {
            return Beds24PropertyRoom.create(propertyRoom)
        }
    }
}