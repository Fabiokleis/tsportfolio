import Joi from 'joi'
import { User } from '../interfaces/user'

interface ParamsDictionary {
    [key: string]: string;
}

interface id {
    id: number
}

const UserValidator = {
  userId: (params: ParamsDictionary): Promise<id> => {
    const UserSchema = Joi.object({
      id: Joi.number()
        .min(1)
        .required()
    })
    return UserSchema.validateAsync(params)
  },
  createUser: (body: User): Promise<User> => {
    const UserSchema = Joi.object({
      name: Joi.string()
        .pattern(/^[a-zA-Z][A-Za-z_0-9]{2,30}$/)
        .required(),
      email: Joi.string()
        .email()
        .min(5)
        .max(80)
        .required(),
      password: Joi.string()
        .min(8)
        .max(80)
        .required()
    })
    return UserSchema.validateAsync(body)
  }
}

export default UserValidator
