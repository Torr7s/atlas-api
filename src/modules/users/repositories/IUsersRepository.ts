import { UserModel } from '../model/UserModel';

interface ICreateUserDTO {
  name: string;
  email: string;
}

interface IUsersRepository {
  create({ name, email }: ICreateUserDTO): UserModel;
  findById(id: string): UserModel | undefined;
  findByEmail(email: string): UserModel | undefined;
  turnAdmin(user: UserModel): UserModel;
  list(): UserModel[];
}

export { IUsersRepository, ICreateUserDTO }
