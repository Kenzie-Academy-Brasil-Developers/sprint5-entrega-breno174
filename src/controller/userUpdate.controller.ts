import { Request, Response } from "express";
import userUpdateService from "../services/userUpdate.service";

const userupdateController = async (req: Request, res: Response) => {
  try {
    const user = await userUpdateService(req);
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

export default userupdateController;
