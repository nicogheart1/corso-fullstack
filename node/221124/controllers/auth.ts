import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { db } from "./db";
import * as dotenv from "dotenv";
dotenv.config();

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
      const token = jwt.sign(payload, process.env.SECRET_KEY);

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

const signup = async (request: Request, response: Response) => {
  try {
    const { username, password } = request.body;

    const checkUser = await db.oneOrNone(
      `SELECT * FROM users WHERE username=$1`,
      username
    );

    if (checkUser) {
      response.status(400).send("Utente già registrato, procedi con la login");
    } else {
      const newUser = await db.one(
        `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id`,
        [username, password]
      );

      response.status(201).json({ id: newUser.id, message: "utente creato" });
    }
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal server error");
  }
};

export { login, signup };
