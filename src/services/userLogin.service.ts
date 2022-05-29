import { User } from "../entities/User";
import { AppDataSource } from "../data-source";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { IUserLogin } from "../interfaces/user";
import * as dotenv from "dotenv";

dotenv.config();

const userLoginService = async ({ email, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const acount = users.find((user) => user.email === email);

  if (!acount) {
    throw new Error("Wrong email/password");
  }
  if (!bcrypt.compareSync(password, acount.password)) {
    throw new Error("Wrong email/password");
  }

  const token = jwt.sign({ email: email }, String(process.env.JWT_SECRET), {
    expiresIn: "4h",
  });

  return token;
};

export default userLoginService;
