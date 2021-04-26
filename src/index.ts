import dotenv from "dotenv";
import { Bot } from "./client/Client";
dotenv.config();

const token: string = String(process.env.DISCORD);

new Bot().start(token);

