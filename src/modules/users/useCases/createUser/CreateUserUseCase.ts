import { UserModel } from '../../model/UserModel';

import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(
    private _usersRepository: IUsersRepository
  ) {}

  perform({ name, email }: IRequest): UserModel {
    const userData: UserModel = this._usersRepository.findByEmail(email)

    if (userData) {
      throw new Error(
        'User already exists!'
      )
    }

    const user = this._usersRepository.create({ name, email })

    return user
  }
}

export { CreateUserUseCase }
