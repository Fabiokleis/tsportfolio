import { Router, urlencoded } from 'express'
import UserService from '../service/userService'

const router = Router()

router.get('/:id', urlencoded({ extended: true }), async (req, res, next) => {
  try {
    const user = UserService.getUser(Number(req.params))
    res.status(200).json({ user })
  } catch (err) {
    next(err)
  }
})

router.post('/', urlencoded({ extended: true }), async (req, res, next) => {
  try {
    const user = UserService.createUser(req.body)
    res.status(200).json({ user })
  } catch (err) {
    next(err)
  }
})

export default router
