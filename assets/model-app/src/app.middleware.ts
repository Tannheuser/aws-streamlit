import { NextFunction, Request, Response } from "express";

export const allowedHttpMethods = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const allowedMethods = ["GET", "OPTIONS"];

  if (!allowedMethods.includes(req.method)) {
    return res.status(405).send("Method Not Allowed");
  }

  return next();
};
