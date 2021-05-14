import { Bot } from "../bot";
import { Response } from "express";
import { Message } from "discord.js";

interface RunFunction {
    (client: Bot, message: Message, args: string[]): Promise<void>;
}

export interface SlashRunFunction {
    (
        guildId: string,
        userId: string,
        response: Response,
        args?: string[] | undefined
    ): Promise<Response>;
}

export interface Command {
    name: string;
    aliases: string[];
    run: RunFunction;
}

export interface SlashCommand {
    name: string;
    run: SlashRunFunction;
}
