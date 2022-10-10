import { Request, Response, NextFunction } from 'express'
import Notice from '../../../models/notice'

export const getNotices = (req: Request, res: Response, next: NextFunction) => {
  Notice.find({})
    .then((notices) => {
      res.status(200).json(notices)
    })
    .catch((e) => {
      next(e)
    })
}
