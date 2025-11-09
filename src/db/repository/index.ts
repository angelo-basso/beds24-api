import BaseRepository from "./base-repository";
import {AddAccessCodeRepository} from "./access-code-repository";

const CombinedRepository = AddAccessCodeRepository(BaseRepository)
const repository = new CombinedRepository();
export default repository;