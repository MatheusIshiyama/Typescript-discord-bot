import { Client, Collection, User } from "discord.js";
import consola, { Consola } from "consola";
import { promisify } from "util";
import glob from "glob";

import { Command, Event } from "../interfaces";

const globPromise = promisify(glob);

class Bot extends Client {
    public logger: Consola = consola;
    public commands: Collection<string, Command> = new Collection();
    public events: Collection<string, Event> = new Collection();
    public queue: Map<string, string[]> = new Map();

    public async start(token: string): Promise<void> {
        this.login(token);

        //* get all commands
        const commandFiles: string[] = await globPromise(`${__dirname}/../commands/*{.ts,.js}`);
        commandFiles.map(async (value: string) => {
            const file = await import(value);
            this.commands.set(file.name, file);
        });

        //* get all events
        const eventFiles: string[] = await globPromise(`${__dirname}/../events/*{.ts,.js}`);
        eventFiles.map(async (value: string) => {
            const file = await import(value);
            this.commands.set(file.name, file);
            this.on(file.name, file.run.bind(null, this));
        });
    }
}

export { Bot };
