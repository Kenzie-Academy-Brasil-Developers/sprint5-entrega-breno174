import { AppDataSource } from "../data-source";
import { User } from "../entities/user";
import { userWOPassword } from "../utils";

const userUpdateService = async ({ user, body }) => {
  const userRepository = AppDataSource.getRepository(User);
  await userRepository.update(user.id, { ...body });
  const updatedUser = await userRepository.findOne({
    where: { id: user.id },
  });

  return userWOPassword(updatedUser);
};

export default userUpdateService;
