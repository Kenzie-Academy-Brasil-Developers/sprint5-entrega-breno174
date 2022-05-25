import bcrypt from "bcrypt";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import { IUserCreate } from "../interfaces/User";

const userCreateService = async ({
  name,
  email,
  age,
  password,
}: IUserCreate) => {
  const userrepository = AppDataSource.getRepository(User);

  const user = new User();
  user.name = name;
  user.email = email;
  user.age = age;
  user.password = bcrypt.hashSync(password, 10);

  userrepository.create(user);
  await userrepository.save(user);

  return user;
};

export default userCreateService;