import { AppDataSource } from "../data-source";
import { Request } from "express";
import { User } from "../entities/User";
import { userWOPassword } from "../utils";

const userFoundOndeService = async (req: Request): Promise<Partial<User>> => {
  //const foundOne = req.user;
  const { id } = req.params;
  const userRepository = AppDataSource.getRepository(User);
  const users = userRepository.find();

  const user = (await users).find((user) => user.id === id);

  return userWOPassword(user as User);
};

export default userFoundOndeService;
