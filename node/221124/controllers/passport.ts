import passport from "passport";
import passportJWT from "passport-jwt";
import { db } from "./db";
import * as dotenv from "dotenv";
import { User } from "../types/user";
dotenv.config();

passport.use(
  new passportJWT.Strategy(
    {
      secretOrKey: process.env.SECRET_KEY as string,
      jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async (payload, done) => {
      try {
        const { id } = payload;
        const user: User = await db.oneOrNone(`SELECT * FROM users WHERE id=$1`, id);

        if (user) {
          done(null, user);
        } else {
          done(new Error("User not found"), undefined);
        }
      } catch (error) {
        done(error, undefined);
      }
    }
  )
);
