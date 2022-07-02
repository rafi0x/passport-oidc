// external imports
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import session from "express-session";
import connectMongo from "connect-mongodb-session";
import passport from "passport";

const MongoStore = connectMongo(session);

// storage to sessions
const store = new MongoStore({
    uri: process.env.SESSION_DB,
    collection: "mySessions",
    clearInterval: 3600,
    autoRemove: "interval",
    autoRemoveInterval: 3600
});

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


// middlewares array
const middlewares = [
    express.json(),
    express.urlencoded({
        extended: true,
    }),
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: true,
        store,
    }),
    cookieParser(),
    passport.initialize(),
    // passport.session(),
];

// function for use middlewares
export default (app) => {
    middlewares.map((m) => {
        app.use(m);
    });
};