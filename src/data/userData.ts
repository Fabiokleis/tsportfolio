import knex from '../infra/database'
import { User, UserEntity, NewUser } from '../interfaces/user'

const Query = {
  getUserById: async (id: number): Promise<User> => {
    const user = await knex<User, UserEntity>('users').select('*').where({ id })
    return user
  },
  saveUser: async (userdata: User): Promise<NewUser[]> => {
    const user = await knex<NewUser>('users')
      .insert(userdata).returning(['id', 'name', 'email'])
    return user
  },
  verifyUserEmail: async (email: string): Promise<User[]> => {
    const user = await knex<User>('users').select('id', 'name', 'email', 'password').where({ email })
    return user
  },
  deleteUserById: async (id: number): Promise<number> => {
    const deletedUser = await knex<User, UserEntity>('users')
      .where({ id }).delete()
    return deletedUser
  }
}

export default Query
