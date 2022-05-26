import { AppDataSource } from "../data-source";
import { User } from "../entities/user";

const userUpdateService = async ({ user, body }) => {
  const userRepository = AppDataSource.getRepository(User);
  await userRepository.update(user.id, { ...body });

  return user;
};

export default userUpdateService;
