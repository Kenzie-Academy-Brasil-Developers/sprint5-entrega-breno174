import { Request, Response } from "express";
import userFoundOndeService from "../services/userFoundOne.service";

const userFoundOneController = async (req: Request, res: Response) => {
  try {
    const user = await userFoundOndeService(req);
    return res.status(200).send(user);
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userFoundOneController;
