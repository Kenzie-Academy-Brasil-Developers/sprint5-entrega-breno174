import { AppDataSource } from "../data-source";
import { User } from "../entities/user";

const userUpdateService = async ({ user, body }) => {
  const userRepository = AppDataSource.getRepository(User);
  await userRepository.update(user.id, { ...body });
  /* const newUser = await userRepository.findOne((newuser) => newuser.id === user.id) */
  return "";
};

export default userUpdateService;
