import { Bot } from "../bot";

let presence: boolean = false;
class PresenceService {
    updatePresence(client: Bot) {
        presence = !presence;
        if (!presence) {
            client.user?.setPresence({
                activity: {
                    name: `Precisa de ajuda? mande "help" no privado.`,
                    type: 1,
                    url: "https://twitch.tv/bravanzin",
                },
            });
        } else {
            client.user?.setPresence({
                activity: {
                    name: `Lofi para ${client.guilds.cache.size} servidores.`,
                    type: 1,
                    url: "https://twitch.tv/bravanzin",
                },
            });
        }
    }
}

export { PresenceService };
