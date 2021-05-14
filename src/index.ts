import bot from "./bot";
import Database from "./database";
import app from "./server";
import consola from "consola";
import dotenv from "dotenv";
dotenv.config();

const token: string = String(process.env.DISCORD);
const port: string = String(process.env.PORT);
const mongoUri: string = String(process.env.MONGO_URI);

bot.start(token);
new Database().connect(mongoUri);

app.listen(port, () => consola.success(`[SERVER] Running on PORT: ${port}`));
