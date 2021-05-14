import bot from "../../bot";
import { User } from "discord.js";
import { Response } from "express";
import { ILocale, SlashRunFunction } from "../../interfaces";

const language = "ptbr";

export const run: SlashRunFunction = async (
    guildId: string,
    userId: string,
    response: Response
) => {
    const { join }: ILocale = require(`../../locales/${language}.json`);

    const guild = await bot.guilds.fetch(guildId);
    const user = await guild.members.fetch(userId);

    const channel = user.voice.channel;
    const permission = channel?.permissionsFor(bot.user as User);
    const hasPermission = permission?.has("CONNECT");

    if (!channel) {
        return response.status(200).json({
            type: 4,
            data: {
                content: join["no voice channel"],
            },
        });
    }

    if (!hasPermission) {
        return response.status(200).json({
            type: 4,
            data: {
                content: join["no permission"],
            },
        });
    }

    channel.join();

    return response.status(200).json({
        type: 4,
        data: {
            content: `${join["joined"]}: \`${channel.name}\``,
        },
    });
};

export const name: string = "join";
