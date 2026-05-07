import type { Request, Response, NextFunction } from 'express'
import AppError from '../errors/AppError.js'

const authorize =
  (role: string[]) =>
  (req: Request, res: Response, next: NextFunction): any => {
    console.log(req)
    next()
  }
export default authorize
