import express, { Request, Response } from "express";
const app = express();

app.get("/", (request: Request, response: Response) => {
    console.log(request.body);
    const ping = new Date();
    ping.setHours(ping.getHours() - 3);
    response
        .status(200)
        .json({
            message: `Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`,
        });
});

export default app;
