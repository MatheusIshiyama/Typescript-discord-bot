import express from "express";

const app = express();

app.use(express.raw());

import { UptimeRoute, InteractionsRoute } from "./routes";

app.use("/uptime", UptimeRoute);
app.use('/interactions', InteractionsRoute);

export default app;
