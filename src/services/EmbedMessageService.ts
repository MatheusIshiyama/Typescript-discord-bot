import { MessageEmbed } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

const avatarUrl: string = String(process.env.AVATAR);

class EmbedMessageService {
    public embedMessage = new MessageEmbed()
        .setColor("3498DB")
        .setThumbnail(avatarUrl)
        .setTimestamp(Date.now())
        .setFooter("Bravanzin", avatarUrl);
}

export { EmbedMessageService };
