import express from "express";

import { allowedHttpMethods } from "./app.middleware";
import healthcheckRouter from "./healthcheck.router";
import greetingsRouter from "./greetings.router";

const app = express();
const port = 80;

app.use(allowedHttpMethods);
app.use("/", healthcheckRouter);
app.use(
  "/greetings",
    greetingsRouter
);

app.listen(port, () =>
  console.info(`Model server app listening on port ${port}!`)
);
