import knex from '../infra/database'
import { User, UserEntity } from '../interfaces/user'

const Query = {
  getUserById: async (id: number): Promise<User> => {
    const user = await knex<User, UserEntity>('users').select('*').where({ id })
    return user
  },
  saveUser: async (userdata: User): Promise<number[]> => {
    const user = await knex<User, UserEntity>('users').insert(userdata)
    return user
  }
}

export default Query
