import express, { Request, Response } from "express";
import nacl from "tweetnacl";
import dotenv from "dotenv";
dotenv.config();

export const InteractionsRoute = express.Router();

import { RawBodyMiddleware } from "../middlewares";

InteractionsRoute.post("/", RawBodyMiddleware, (request: Request, response: Response) => {
    const publicKey: string = String(process.env.PUBLIC_KEY);
    const signature: string = String(request.get("X-Signature-Ed25519"));
    const timestamp: string = String(request.get("X-Signature-Timestamp"));
    const rawBody: string = String(request.rawBody);

    const isVerified = nacl.sign.detached.verify(
        Buffer.from(timestamp + rawBody),
        Buffer.from(signature, "hex"),
        Buffer.from(publicKey, "hex")
    );

    if (!isVerified) return response.status(401).json({ message: "Invalid request signature" });

    response.status(200).json({ type: 1 });
});
