import fs from "fs";
import { ExtractJwt, Strategy } from "passport-jwt";
import path from "path";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const pathToKey = path.join(__dirname, "./key", "rsa.public");
const PUB_KEY = fs.readFileSync(pathToKey, "utf8");

export default (passport) => {
    passport.use(
        new Strategy(
            {
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                secretOrKey: PUB_KEY,
                algorithms: ["RS256"],
            },
            function (jwt_payload, done) {
                console.log(jwt_payload);
                return done(null, jwt_payload);
            }
        )
    );



};