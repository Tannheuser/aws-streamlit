import { Router } from "express";

import { greet } from "./greetings.controller";

const router = Router();

router.route("/").get(greet);

export default router;
