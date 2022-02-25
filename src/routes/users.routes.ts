import { Request, Response, Router } from 'express';

const userRouter = Router()

import { createUserController } from '../modules/users/useCases/createUser';
import { listAllUsersController } from '../modules/users/useCases/listAllUsers';
import { showUserProfileController } from '../modules/users/useCases/showUserProfile';
import { turnUserAdminController } from '../modules/users/useCases/turnUserAdmin';

userRouter.post('/', (request: Request, response: Response) =>
  createUserController.handle(request, response)
)

userRouter.patch('/:user_id/admin', (request: Request, response: Response) =>
  turnUserAdminController.handle(request, response)
)

userRouter.get('/:user_id', (request: Request, response: Response) =>
  showUserProfileController.handle(request, response)
)

userRouter.get('/', (request: Request, response: Response) =>
  listAllUsersController.handle(request, response)
)

export { userRouter }
