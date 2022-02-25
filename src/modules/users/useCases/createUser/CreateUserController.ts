import { Response, Request } from 'express';

import { UserModel } from 'modules/users/model/UserModel';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  constructor(
    private _createUserUseCase: CreateUserUseCase
  ) {}

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body

    let user: UserModel

    try {
      user = this._createUserUseCase.perform({ name, email })

    } catch (error) {
      return response
        .status(400)
        .json({
          error: error.message!
        })
    }

    return response.status(201).json(user)
  }
}

export { CreateUserController }
