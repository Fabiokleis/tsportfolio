import express, { Router, urlencoded } from 'express'
import UserService from '../service/userService'

const router = Router()

router.get('/:id', urlencoded({ extended: true }), async (req, res, next) => {
  try {
    const user = await UserService.getUser(Number(req.params.id))
    res.status(200).json({ user })
  } catch (err) {
    next(err)
  }
})

router.post('/', express.json(), async (req, res, next) => {
  try {
    const user = await UserService.createUser(req.body)
    res.status(200).json({ user })
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', urlencoded({ extended: true }), async (req, res, next) => {
  try {
    const deleted = await UserService.deleteUser(Number(req.params.id))
    res.status(200).json({ deleted })
  } catch (err) {
    next(err)
  }
})

export default router
