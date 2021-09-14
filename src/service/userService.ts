import Query from '../data/userData'
import { User, NewUser } from '../interfaces/user'
import bcrypt from 'bcrypt'

const UserService = {
  getUser: ({ id }: {id: number}): Promise<User> => {
    const user: Promise<User> = Query.getUserById(id)
    return user
  },
  createUser: (userdata: User): Promise<NewUser[]> => {
    const SALT = bcrypt.genSaltSync(Number(process.env.SALT))
    userdata.password = bcrypt.hashSync(userdata.password, SALT)
    const user: Promise<NewUser[]> = Query.saveUser(userdata)
    return user
  },
  deleteUser: ({ id }: {id: number}): Promise<number> => {
    const deleted: Promise<number> = Query.deleteUserById(id)
    return deleted
  }
}

export default UserService
