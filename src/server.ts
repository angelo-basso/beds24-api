import express, {Request, Response} from "express";
import morgan from "morgan";
import cors from "cors"
import {createRoutes} from "./route";
import errorHandler from "./middleware/error-handler";

export const createServer = () => {
    const app = express()
    app
        .disable("x-powered-by")
        .use(morgan("dev"))
        .use(express.urlencoded())
        .use(express.json())
        .use(cors());

    app.get("/health", (req: Request, res: Response) => {
        res.json({ok: true});
    });

    createRoutes(app);

    app.use(errorHandler)

    return app;
}