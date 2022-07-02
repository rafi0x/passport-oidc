import { Router } from "express";
import { getToken } from "../controller/index.controller.js";

import passport from "../config/auth.config.js";

const router = Router();


router.get("/", passport.authenticate("openidconnect"));

router.get(
    "/auth/callback",
    passport.authenticate("openidconnect", {
        successReturnToOrRedirect: "/",
        failureRedirect: "/auth/login",
    })
);

router.get("/logout", function (req, res, next) {
    req.logout(
       function (err) {
           if (err) {
               return next(err);
           }
           res.redirect("/");
       }
    )
});

router.get("/", getToken)

export default router;