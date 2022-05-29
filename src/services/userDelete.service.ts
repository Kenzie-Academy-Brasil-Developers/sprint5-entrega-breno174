import { Request } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User";

const userDeleteService = async ({ user }: Request): Promise<Boolean> => {
  const userRepository = AppDataSource.getRepository(User);
  await userRepository.delete(user!.id);
  return true;
};

export default userDeleteService;
