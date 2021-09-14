import Query from '../data/userData'
import { User } from '../interfaces/user'

const UserService = {
  getUser: (id: number): Promise<User> => {
    const user: Promise<User> = Query.getUserById(id)
    return user
  },
  createUser: (userdata: User): Promise<number[]> => {
    const user: Promise<number[]> = Query.saveUser(userdata)
    return user
  }
}

export default UserService
