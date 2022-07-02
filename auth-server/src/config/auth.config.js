import passport from 'passport';
import OpenIDConnectStrategy from "passport-openidconnect";
import {UserModel} from "../schema/user.schema.js";

passport.use(
    new OpenIDConnectStrategy(
        {
            issuer: "https://accounts.google.com",
            authorizationURL: "https://accounts.google.com/o/oauth2/v2/auth",
            tokenURL: "https://oauth2.googleapis.com/token",
            userInfoURL: "https://openidconnect.googleapis.com/v1/userinfo",
            clientID:
                "216744134663-85721bnoi1ghvrri515ogomp1jnqnt67.apps.googleusercontent.com",
            clientSecret: "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",
            callbackURL: "/auth/callback",
            scope: ["openid profile email"],
        },
        async function verify(issuer, profile, done) {
            const user =  await UserModel.findOne({ id: profile.id });

            if (user) {
                return done(null, user);
            }
            
            const newUser = await UserModel.create({
                name: profile.displayName,
                email: profile.emails[0].value,
                avatar: profile.picture,
                id: profile.id,
            });
            return done(null, newUser);
        }
    )
);

passport.serializeUser(function (user, done) {
    process.nextTick(function () {
        done(null, user);
    }); 
});

passport.deserializeUser(function (user, done) {
    process.nextTick(function () {
        return done(null, user);
    });
});

export default passport;