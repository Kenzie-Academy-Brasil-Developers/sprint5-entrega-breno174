import { AppDataSource } from "../data-source";
import { User } from "../entities/user";

const userDeleteService = async ({ user }) => {
  const userRepository = AppDataSource.getRepository(User);
  await userRepository.delete(user!.id);
  return true;
};

export default userDeleteService;
