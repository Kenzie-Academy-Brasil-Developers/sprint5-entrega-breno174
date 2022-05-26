import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user";

const getUserOr404Middleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const userRepository = AppDataSource.getRepository(User);
  const users = userRepository.find();

  const foundOne = (await users).find((user) => user.id === id);
  if (!foundOne) {
    return res.status(404).json({
      error: `not found user by id: (${id})`,
    });
  }
  req.user = foundOne as User;

  return next();
};

export default getUserOr404Middleware;
