/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express'
import { Notice, NoticeType } from '../models/notice'

export const getNoticeParams = (body: NoticeType) => {
  return {
    content: body.content,
    publishedAt: body.publishedAt,
  }
}

export const getNotices = (req: Request, res: Response, next: NextFunction) => {
  Notice.find({})
    .then((notices) => {
      res.render('notices/index', notices)
    })
    .catch((e) => {
      next(e)
    })
}
