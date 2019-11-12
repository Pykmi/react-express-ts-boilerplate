import { NextFunction, Request, Response } from "express";

const headers = {
    allowOrigin: { field: "Access-Control-Allow-Origin", value: "*" },
    allowHeaders: { field: "Access-Control-Allow-Headers", value: "Origin, X-Requested-With, Content-Type, Accept" },
    options: { field: "Access-Control-Allow-Methods", value: "GET, DELETE, PATCH, POST, PUT" }
};

const cors = (req: Request, res: Response, next: NextFunction) => {
    res.header(headers.allowOrigin.field, headers.allowOrigin.value);
    res.header(headers.allowHeaders.field, headers.allowHeaders.value);

    if(req.method === "OPTIONS") {
        res.header(headers.options.field, headers.options.value);
        return res.status(200).json({});
    }

    next();
};

export default cors;
