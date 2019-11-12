import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

import cors from "./middleware/cors.middleware";
import Controller from "./controllers/greet.controller";

const appServer = () => {
    const app = express();

    app.use(cors);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(morgan("combined"));

    // db.connect();

    const router = express.Router();
    router.route("/").get(new Controller().greeting);

    app.use("/api", router);

    return app;
};

export default appServer;
