import {Express, Request, Response} from "express";
import repository from "../db/repository";
import {ISwitchBotLockAccessCode} from "../db/model/switch-bot-lock-access-code";

export const accessCodeRoutes = (app: Express) => {
    app.get("/accessCodes", async (_, res: Response) => {
        const accessCodes = await repository.getAccessCodes();
        res.json({accessCodes})
    });

    app.get("/accessCodes/:uuid", async (req: Request, res: Response) => {
        const uuid = req.params.uuid
        const accessCode = await repository.getAccessCode(uuid);
        return res.json({accessCode});
    });

    app.post("/accessCodes", async (req: Request, res: Response) => {
        const accessCodePayload: ISwitchBotLockAccessCode = {
            bookingId: req.body.bookingId,
            guestName: req.body.guestName,
            encryptedCode: "545454",
            keypadUuid: "4444",
            status: "CREATING",
            validFrom: new Date(),
            validUntil: new Date()
        }
        const accessCode = await repository.createAccessCode(accessCodePayload);
        res.json(accessCode)
    });
}