import { Request, Response } from "express";

export const healthCheck = (_: Request, res: Response) => res.send("OK");
