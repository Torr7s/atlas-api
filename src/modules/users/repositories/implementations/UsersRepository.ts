import { v4 as uuid } from 'uuid';

import { UserModel } from '../../model/UserModel';

import { IUsersRepository, ICreateUserDTO } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  private _users: UserModel[]
  private static _instance: UsersRepository

  private constructor() {
    this._users = []
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository._instance) {
      UsersRepository._instance = new UsersRepository()
    }

    return UsersRepository._instance
  }

  create({ name, email }: ICreateUserDTO): UserModel {
    const user = new UserModel()

    Object.assign(user, { 
      id: uuid(),
      name, 
      email,
      admin: false,
      created_at: new Date(),
      updated_at: new Date()
    })

    this._users.push(user)

    return user
  }

  findById(id: string): UserModel | undefined {
    const user = this._users.find((user) => user.id === id)

    return user
  }

  findByEmail(email: string): UserModel | undefined {
    const user = this._users.find((user) => user.email === email)
    
    return user
  }

  turnAdmin(receivedUser: UserModel): UserModel {  
    receivedUser.admin = true
    receivedUser.updated_at = new Date()

    return receivedUser
  }

  list(): UserModel[] {
    return this._users
  }
}

export { UsersRepository }
