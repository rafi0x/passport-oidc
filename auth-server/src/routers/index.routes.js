import { Router } from "express";
import { getToken } from "../controller/index.controller.js";

import passport from "../config/auth.config.js";

const router = Router();


router.get("/login", passport.authenticate("openidconnect"));

router.get(
    "/auth/callback",
    getToken
);

router.get("/", (req, res) => {
    res.send(`goto /login`);
})

export default router;