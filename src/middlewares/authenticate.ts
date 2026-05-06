import jwt from 'jsonwebtoken'
import type { Request, Response, NextFunction } from 'express'
import AppError from '../errors/AppError.js'

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  // 1. Récupérer le header "Authorization"
  const authHeader = req.headers.authorization

  // 2. Vérifier si le header existe et commence par "Bearer "
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return next(new AppError('Accès refusé : Token manquant', 401))
  }

  // 3. Extraire le token
  const token = authHeader.split(' ')[1]

  if (!token) {
    return next(new AppError('Accès refusé : Format de token invalide', 401))
  }

  // 4. Vérifier le token avec la clé secrète
  jwt.verify(
    token,
    process.env.JWT_SECRET?.trim() as string,
    (err: any, decoded: any) => {
      if (err) {
        return next(new AppError('Token invalide ou expiré', 403))
      }
      // 5. Stocker les infos de l'utilisateur dans la requête pour plus tard
      ;(req as any).user = decoded

      // 6. Passer à l'étape suivante (le contrôleur)
      next()
    }
  )
}

export default authenticate
