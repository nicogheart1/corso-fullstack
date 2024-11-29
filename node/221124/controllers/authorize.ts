import { NextFunction, Request, Response } from "express";
import passport from "passport";
import { User } from "../types/user";

const authorize = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  passport.authenticate("jwt", { session: false }, (error: any, user: User) => {
    if (!user || error) {
      response.status(401).send("Unauthorized");
    } else {
      request.user = user;
      next();
    }
  })(request, response, next);
};

export default authorize;
