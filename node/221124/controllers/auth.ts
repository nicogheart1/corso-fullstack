import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { db } from "./db";

const login = async (request: Request, response: Response) => {
  try {
    const { username, password } = request.body;

    const user = await db.oneOrNone(
      `SELECT * FROM users WHERE username=$1`,
      username
    );

    if (user && user.password === password) {
      const payload = {
        id: user.id,
        username: user.username,
      };
      const token = jwt.sign(
        payload,
        "43rt5yj6y5htr4c3vt567v5htre6bby65y65htg"
      );

      console.log("Token", token);
      await db.none(`UPDATE users SET token=$2 WHERE id=$1`, [user.id, token]);

      response.status(200).json({
        id: user.id,
        token,
      });
    } else {
      response.status(400).send("Utente non trovato");
    }
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal server error");
  }
};

export { login };
