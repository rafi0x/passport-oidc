import { Router } from "express";
import passport from "passport";

import controller from "../controller/index.controller.js";

const router = Router();

router.get("/p", controller.index);
router.get(
    "/d",
    passport.authenticate("jwt", { session: false }),
    controller.getData
);

export default router;

