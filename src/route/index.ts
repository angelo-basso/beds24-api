import {Express} from "express";
import {accessCodeRoutes} from "./access-code.route";

export const createRoutes = (app:Express)=>{
    accessCodeRoutes(app);
}