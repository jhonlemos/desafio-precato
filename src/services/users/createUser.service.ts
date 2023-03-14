import { IUserRequest } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const createUserService = async (user: IUserRequest): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const newUser = userRepository.create({
    name: user.name,
    email: user.email,
    cpf: user.cpf,
    phone: user.phone,
  });

  await userRepository.save(newUser);

  return newUser;
};
export default createUserService;
