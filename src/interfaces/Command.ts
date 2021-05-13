import Bot from "../bot";
import { Message } from "discord.js";

interface RunFunction {
    (client: Bot, message: Message, args: string[]): Promise<void>;
}

export interface Command {
    name: string;
    aliases: string[];
    run: RunFunction;
}
