import { Request, Response } from 'express';

import { UserModel } from 'modules/users/model/UserModel';

import { ShowUserProfileUseCase } from './ShowUserProfileUseCase';

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params

    let user: UserModel 

    try {
      user = this.showUserProfileUseCase.perform({ user_id })

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

export { ShowUserProfileController }
