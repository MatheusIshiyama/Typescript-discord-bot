import Bot from "./bot";
import app from "./server";
import consola from "consola";
import dotenv from "dotenv";
dotenv.config();

const token: string = String(process.env.DISCORD);
const port: string = String(process.env.PORT);

new Bot().start(token);

app.listen(port, () => consola.success(`[SERVER] Running on PORT: ${port}`));
