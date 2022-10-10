/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express'
import { check, validationResult } from 'express-validator'
import Notice from '../models/notice'

export const getNoticeParams = (body: {
  content: string
  publishedAt: Date
}) => {
  return {
    content: body.content,
    publishedAt: body.publishedAt,
  }
}

export const getNotices = (req: Request, res: Response, next: NextFunction) => {
  Notice.find({})
    .then((notices) => {
      res.status(200).render('notices/index', { notices })
    })
    .catch((e) => {
      next(e)
    })
}

export const getNotice = (req: Request, res: Response, next: NextFunction) => {
  const noticeId = req.params.id
  Notice.findById(noticeId)
    .then((notice) => {
      if (notice) {
        res.status(200).render('notices/show', { notice })
      }
      next({ message: "Notice's data is not find!" })
    })
    .catch((e) => {
      next(e)
    })
}

export const renderNewPage = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).render('notices/new')
}

export const createNotice = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.locals.error) next()
  const noticeParams = getNoticeParams(req.body)
  Notice.create(noticeParams)
    .then((notice) => {
      res.status(201).render('notices/show', { notice })
    })
    .catch((e) => {
      next(e)
    })
}

export const renderEditPage = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const noticeId = req.params.id
  Notice.findById(noticeId)
    .then((notice) => {
      if (notice) {
        res.status(200).render('notices/edit', { notice })
      }
      next({ message: "Notice's data is not find!" })
    })
    .catch((e) => {
      next(e)
    })
}

export const updateNotice = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.locals.error) next()
  const noticeId = req.params.id
  const noticeParams = getNoticeParams(req.body)
  Notice.findByIdAndUpdate(noticeId, { $set: noticeParams }, { new: true })
    .then((notice) => {
      if (notice) {
        res.status(200).render('notices/show', { notice })
      }
      next({ message: "Notice's data is not find!" })
    })
    .catch((e) => {
      next(e)
    })
}

export const deleteNotice = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const noticeId = req.params.id
  Notice.findByIdAndDelete(noticeId)
    .then(() => {
      res.status(200).redirect('/notices')
    })
    .catch((e) => {
      next(e)
    })
}

export const validator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await check('content', '内容を入力してください').notEmpty().run(req)
  await check('publishedAt', 'お知らせの発行日を入力してください')
    .notEmpty()
    .run(req)
  const error = validationResult(req)
  if (error.isEmpty()) {
    next()
  } else {
    const messages = error.array().map((e) => ({ msg: e.msg, params: e.param }))
    res.locals.error = messages
    res.status(404)
    next()
  }
}
