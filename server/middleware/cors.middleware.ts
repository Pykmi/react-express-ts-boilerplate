import { NextFunction, Request, Response } from "express";

// CORS middleware
const cors = (req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );

    if(req.method === "OPTIONS") {
        res.header(
            "Access-Control-Allow-Methods",
            "GET, DELETE, PATCH, POST, PUT"
        );
        return res.status(200).json({});
    }

    next();
};

export default cors;
