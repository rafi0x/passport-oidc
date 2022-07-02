import {config} from "dotenv"
import express from 'express';
import mongoose from 'mongoose';
import passport from "passport";

import routers from './src/routers/index.routes.js'
import middlewares from './src/middlewares/common.middlewares.js';
import passport_config from "./src/config/auth.config.js";

config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))

passport_config(passport);

middlewares(app);
app.use(routers);

mongoose
    .connect("mongodb://localhost:27017/dictonary", { useNewUrlParser: true })
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(process.env.PORT || "5050", () =>
            console.log(`server on ${process.env.PORT}`)
        );
    })
    .catch((err) => {
        console.log(err);
    });