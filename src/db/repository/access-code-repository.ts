import AccessCode, {IAccessCode} from "../model/access-code";
import BaseRepository, {Constructor} from "./base-repository";

export function AddAccessCodeRepository<TBase extends Constructor<BaseRepository>>(Base: TBase) {
    return class extends Base {
        getAccessCodes() {
            return AccessCode.findAll({limit: this.defaultLimit});
        }
        getAccessCode(uuid:string){
            return AccessCode.findByPk(uuid);
        }

        createAccessCode(accessCodeAttributes:IAccessCode){
            return AccessCode.create(accessCodeAttributes)
        }
    }
}