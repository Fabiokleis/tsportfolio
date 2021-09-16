import Query from '../data/userData'
import { User, NewUser, Login } from '../interfaces/user'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

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
  loginUser: async (userdata: Login): Promise<string> => {
    const user = await Query.verifyUserEmail(userdata.email)
    const flag = !!user.some(e => e.email === userdata.email)

    if (flag) {
      const hashValidation = bcrypt.compareSync(userdata.password, user[0].password)
      if (hashValidation) {
        const SECRET = process.env.TOKEN_SECRET as jwt.Secret
        const { id, email, name } = user[0]
        const token = jwt.sign({ id, email, name }, SECRET, { expiresIn: '1h' })
        return token
      }
    }

    throw new Error('email or password wrong')
  },
  deleteUser: ({ id }: {id: number}): Promise<number> => {
    const deleted: Promise<number> = Query.deleteUserById(id)
    return deleted
  }
}

export default UserService
