import express, { Router, urlencoded } from 'express'
import UserService from '../service/userService'
import UserValidation from '../validate/user'

const router = Router()

router.get('/:id', urlencoded({ extended: true }), async (req, res, next) => {
  try {
    const id = await UserValidation.userId(req.params)
    const user = await UserService.getUser(id)
    res.status(200).json({ user })
  } catch (err) {
    next(err)
  }
})

router.post('/', express.json(), async (req, res, next) => {
  try {
    const data = await UserValidation.createUser(req.body)
    const user = await UserService.createUser(data)
    res.status(200).json({ user })
  } catch (err) {
    next(err)
  }
})

router.post('/login', express.json(), async (req, res, next) => {
  try {
    const data = await UserValidation.loginUser(req.body)
    const Authorization = await UserService.loginUser(data)
    req.header(Authorization)
    res.status(200).json({ message: 'sucessfully loggin!' })
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', urlencoded({ extended: true }), async (req, res, next) => {
  try {
    const id = await UserValidation.userId(req.params)
    const deleted = await UserService.deleteUser(id)
    res.status(200).json({ deleted })
  } catch (err) {
    next(err)
  }
})

export default router
