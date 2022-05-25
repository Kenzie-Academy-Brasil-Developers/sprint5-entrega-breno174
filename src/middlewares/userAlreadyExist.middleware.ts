import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

const userAlreadyExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  const foundUser = await userRepository.findOne(req.body);
  if (foundUser) {
    return res.status(400).json({
      error: "user already exist",
    });
  }

  req.users = users as User[];

  return next();
};

export default userAlreadyExistMiddleware;
