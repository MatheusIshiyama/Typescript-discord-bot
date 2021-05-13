import express from "express";
const app = express();

import { UptimeRoute } from "./routes";

app.use("/uptime", UptimeRoute);

export default app;
