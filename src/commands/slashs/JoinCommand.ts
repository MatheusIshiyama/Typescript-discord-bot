import bot from "../../bot";
import { User } from "discord.js";
import { Response } from "express";
import { ILocale, SlashRunFunction } from "../../interfaces";
import { EmbedMessageService } from "../../services";

const { embedMessage } = new EmbedMessageService();
const language = "ptbr";

export const run: SlashRunFunction = async (
    guildId: string,
    userId: string,
    response: Response
) => {
    const { join }: ILocale = require(`../../locales/${language}.json`);

    embedMessage.setTitle(join["title"]);
    const guild = await bot.guilds.fetch(guildId);
    const user = await guild.members.fetch(userId);

    const channel = user.voice.channel;
    const permission = channel?.permissionsFor(bot.user as User);
    const hasPermission = permission?.has("CONNECT");

    if (!channel) {
        embedMessage.setDescription(join["no voice channel"]);
        return response.status(200).json({
            type: 4,
            data: {
                embeds: [embedMessage],
            },
        });
    }

    if (!hasPermission) {
        embedMessage.setDescription(join["no permission"]);
        return response.status(200).json({
            type: 4,
            data: {
                embeds: [embedMessage],
            },
        });
    }

    user.voice.channel?.join();

    embedMessage.setDescription(`${join['joined']}: \`${channel.name}\``);
    return response.status(200);
};

export const name: string = "join";
