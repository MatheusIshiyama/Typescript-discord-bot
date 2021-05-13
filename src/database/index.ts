import consola, { Consola } from "consola";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

class Database {
    public logger: Consola = consola;

    connect(mongoUri: string): void {
        mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
            this.logger.success("[DATABASE] Connected");
        });
    }
}

export default Database;
