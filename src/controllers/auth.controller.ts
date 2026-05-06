import type { Request, Response, NextFunction } from 'express'
import { loginUser } from '../services/auth.service.js'

const login = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body
  const token = await loginUser(email, password)
  if (!token) next()
  return res.json({ token })
}

export { login }
