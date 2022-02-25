import { UserModel } from '../../model/UserModel';

import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(
    private _usersRepository: IUsersRepository
  ) {}

  perform({ user_id }: IRequest): UserModel {
    const userData = this._usersRepository.findById(user_id)

    if (!userData) {
      throw new Error(
        'User does not exists!'
      )
    }

    const user = this._usersRepository.turnAdmin(userData)

    return user
  }
}

export { TurnUserAdminUseCase }
