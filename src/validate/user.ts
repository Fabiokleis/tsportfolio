import Joi from 'joi'
import { User, Login } from '../interfaces/user'

interface ParamsDictionary {
    [key: string]: string;
}

interface Id {
    id: number
}

const UserValidator = {
  userId: (params: ParamsDictionary): Promise<Id> => {
    const UserSchema = Joi.object({
      id: Joi.number()
        .min(1)
        .required()
    })
    return UserSchema.validateAsync(params)
  },
  createUser: (body: Login): Promise<User> => {
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
  },
  loginUser: (body: Login): Promise<Login> => {
    const UserSchema = Joi.object({
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
