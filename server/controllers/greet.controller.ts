import { Request, Response } from "express";

class Controller {
    greeting = (req: Request, res: Response) => {
        res.status(200).send("Hello There");
    }
}

export default Controller;
