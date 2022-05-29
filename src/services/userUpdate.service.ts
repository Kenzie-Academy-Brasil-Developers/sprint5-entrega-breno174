import { Request } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
import { userWOPassword } from "../utils";

const userUpdateService = async ({
  user,
  body,
}: Request): Promise<Partial<User>> => {
  const userRepository = AppDataSource.getRepository(User);
  await userRepository.update(user.id, { ...body });
  const updatedUser = await userRepository.findOne({
    where: { id: user.id },
  });

  return userWOPassword(updatedUser as User);
};

export default userUpdateService;
