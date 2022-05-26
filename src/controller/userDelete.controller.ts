import { Request, Response } from "express";
import userDeleteService from "../services/userDelete.service";

const userDeleteController = async (req: Request, res: Response) => {
  try {
    const user = await userDeleteService(req);

    return res.status(200).json({ message: "User deleted" });
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userDeleteController;
