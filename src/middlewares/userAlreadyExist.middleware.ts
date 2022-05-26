import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user";

const userAlreadyExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(User);
  const foundUser = await userRepository.findOne(req.body.email);
  if (foundUser) {
    return res.status(400).json({
      error: "user already exist",
    });
  }

  return next();
};

export default userAlreadyExistMiddleware;
