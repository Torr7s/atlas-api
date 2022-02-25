import { Request, Response } from 'express';

import { UserModel } from 'modules/users/model/UserModel';

import { ListAllUsersUseCase } from './ListAllUsersUseCase';

class ListAllUsersController {
  constructor(
    private _listAllUsersUseCase: ListAllUsersUseCase
  ) { }

  handle(request: Request, response: Response) {
    const { user_id } = request.headers

    let users: UserModel[]

    try {
      users = this._listAllUsersUseCase.perform({ 
        user_id: 
          user_id as string 
      })

    } catch (error) {
      return response
        .status(400)
        .json({
          error: error.message!
        })
    }

    return response.json(users)
  }
}

export { ListAllUsersController }
