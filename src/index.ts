import consola from "consola";
import dotenv from "dotenv";
dotenv.config();

import { Bot } from "./client/Client";
import app from "./server";

const token: string = String(process.env.DISCORD);
const port: string = String(process.env.PORT);

new Bot().start(token);

app.listen(port, () => consola.success(`[SERVER] Running on PORT: ${port}`));
