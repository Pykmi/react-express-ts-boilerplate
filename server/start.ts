import { Express } from "express";
import { isProd, serverPort } from "./config";
import appServer from "./server";

const startServer = (bootstrap: () => Express, host: string, port: number) => {
    const app = bootstrap();

    app.listen(port, host, () => {
        console.log("\nExpress server (re)started.");
        console.log(`Listening on ${host}:${port}`);
    });

};

startServer(appServer, "localhost", serverPort);
