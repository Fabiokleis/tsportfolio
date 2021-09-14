import Query from '../data/userData'
import { User } from '../interfaces/user'

const UserService = {
  getUser: ({ id }: {id: number}): Promise<User> => {
    const user: Promise<User> = Query.getUserById(id)
    return user
  },
  createUser: (userdata: User): Promise<User[]> => {
    const user: Promise<User[]> = Query.saveUser(userdata)
    return user
  },
  deleteUser: ({ id }: {id: number}): Promise<number> => {
    const deleted: Promise<number> = Query.deleteUserById(id)
    return deleted
  }
}

export default UserService
