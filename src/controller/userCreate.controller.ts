import { Request, Response } from "express";
import userCreateService from "../services/userCreate.service";

const userCreateController = async (req: Request, res: Response) => {
  try {
    const { name, email, age, password } = req.body;
    const user = await userCreateService({ name, email, age, password });

    return res.status(201).send(user);
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userCreateController;
