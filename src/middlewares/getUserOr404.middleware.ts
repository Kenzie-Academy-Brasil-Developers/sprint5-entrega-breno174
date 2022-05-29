import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User";

const getUserOr404Middleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const userRepository = AppDataSource.getRepository(User);
  const users = userRepository.find();

  const user = (await users).find((user) => user.id === id);
  if (!user) {
    return res.status(404).json({
      error: `not found user by id: (${id})`,
    });
  }
  req.user = user as User;

  return next();
};

export default getUserOr404Middleware;
