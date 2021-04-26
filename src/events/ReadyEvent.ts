import { RunFunction } from "./../interfaces";
import { PresenceService } from "../services";

const { updatePresence } = new PresenceService();

export const run: RunFunction = async (client) => {
    client.logger.success(`${client.user?.tag} is now logged.`);

    setInterval(() => updatePresence(client), 7000);
};

export const name: string = "ready";
