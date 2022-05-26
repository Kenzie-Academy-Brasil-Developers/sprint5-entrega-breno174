import { User } from "../entities/user";

const userWOPassword = (user: User): Partial<User> => {
  const { password, ...userWOPwd } = user;
  return userWOPwd;
};

export { userWOPassword };
