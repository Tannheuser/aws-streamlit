import { Request, Response } from "express";

export const greet = async (_: Request, res: Response) => {
  try {
    return res.send("Hello World!");
  } catch (err) {
    if (err instanceof Error) {
      return res.status(500).send(err.message);
    } else return res.status(500).send("Something went wrong");
  }
};
