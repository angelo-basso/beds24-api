import SwitchBotLockAccessCode, {ISwitchBotLockAccessCode} from "../model/switch-bot-lock-access-code";
import BaseRepository, {Constructor} from "./base-repository";

export function AddAccessCodeRepository<TBase extends Constructor<BaseRepository>>(Base: TBase) {
    return class extends Base {
        getAccessCodes() {
            return SwitchBotLockAccessCode.findAll({limit: this.defaultLimit});
        }
        getAccessCode(uuid:string){
            return SwitchBotLockAccessCode.findByPk(uuid);
        }

        createAccessCode(accessCodeAttributes:ISwitchBotLockAccessCode){
            return SwitchBotLockAccessCode.create(accessCodeAttributes)
        }
    }
}