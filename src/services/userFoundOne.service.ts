import { AppDataSource } from "../data-source";
import { Request } from "express";
import { User } from "../entities/user";

const userFoundOndeService = async (req: Request) => {
  //const foundOne = req.user;
  const { id } = req.params;
  const userRepository = AppDataSource.getRepository(User);
  const users = userRepository.find();

  const user = (await users).find((user) => user.id === id);

  return user;
};

export default userFoundOndeService;
