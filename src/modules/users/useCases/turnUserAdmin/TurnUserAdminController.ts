import { Request, Response } from 'express';

import { UserModel } from 'modules/users/model/UserModel';

import { TurnUserAdminUseCase } from './TurnUserAdminUseCase';

class TurnUserAdminController {
  constructor(
    private _turnUserAdminUseCase: TurnUserAdminUseCase
  ) { }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params

    let user: UserModel

    try {
      user = this._turnUserAdminUseCase.perform({ user_id })

    } catch (error) {
      return response
        .status(404)
        .json({
          error: error.message!
        })
    }

    return response.json(user)
  }
}

export { TurnUserAdminController }
