import { UserModel } from '../../model/UserModel';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(
    private _usersRepository: IUsersRepository
  ) { }

  perform({ user_id }: IRequest): UserModel[] {
    const userData = this._usersRepository.findById(user_id)

    if (!userData) {
      throw new Error(
        'Unathorized access!'
      )
    }

    const userAdmin = userData.admin

    if (!userAdmin) {
      throw new Error(
        'Unauthorized access!'
      )
    }

    return this._usersRepository.list()
  }
}

export { ListAllUsersUseCase }
