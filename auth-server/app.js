import { config } from "dotenv";
import express from "express";
import mongoose from "mongoose";

import routers from "./src/routers/index.routes.js";
import middlewares from "./src/middlewares/app.middlewares.js";

config();

const app = express();

middlewares(app);

app.use(routers);

mongoose
    .connect(process.env.DB_URI, { useNewUrlParser: true })
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(process.env.PORT || 5050, () =>
            console.log(`server on ${process.env.PORT}`)
        );
    })
    .catch((err) => {
        console.log(err);
    });
