import express, { Request, Response } from "express";

export const UptimeRoute = express.Router();

UptimeRoute.get("/", (request: Request, response: Response) => {
    const ping = new Date();
    ping.setHours(ping.getHours() - 3);
    response.status(200).json({
        message: `Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`,
    });
});
