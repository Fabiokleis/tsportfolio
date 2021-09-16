import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'

const auth = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const TOKEN = req.header('Authorization') as string
    const SECRET = process.env.TOKEN_SECRET as jwt.Secret
    const user = jwt.verify(TOKEN, SECRET)
    req.body = user
    next()
  } catch (err) {
    next(err)
  }
}

export default auth
