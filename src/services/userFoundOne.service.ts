import { AppDataSource } from "../data-source";
import { Request } from "express";
import { User } from "../entities/user";
import { userWOPassword } from "../utils";

const userFoundOndeService = async (req: Request) => {
  //const foundOne = req.user;
  const { id } = req.params;
  const userRepository = AppDataSource.getRepository(User);
  const users = userRepository.find();

  const user = (await users).find((user) => user.id === id);

  return userWOPassword(user);
};

export default userFoundOndeService;
