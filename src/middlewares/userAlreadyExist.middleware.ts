import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User";

const userAlreadyExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(User);
  try {
    const { email } = req.body;
    const users = await userRepository.find();
    const foundUser = users.find((user) => user.email === email);
    if (foundUser) {
      return res.status(400).json({
        error: "user already exist",
      });
    }
  } catch {
    return next();
  }

  return next();
};

export default userAlreadyExistMiddleware;
