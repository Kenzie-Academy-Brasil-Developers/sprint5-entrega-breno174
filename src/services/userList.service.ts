import { AppDataSource } from "../data-source";
import { User } from "../entities/user";
import { userWOPassword } from "../utils";

const userListService = async () => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  const returnWOP = [];
  for (let user of users) {
    returnWOP.push(userWOPassword(user));
  }
  return returnWOP;
};

export default userListService;
