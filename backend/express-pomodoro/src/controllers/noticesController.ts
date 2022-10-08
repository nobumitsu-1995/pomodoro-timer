/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express'
import Notice, { NoticeType } from '../models/notice'

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

export const getNotice = (req: Request, res: Response, next: NextFunction) => {
  const noticeId = req.params.id
  Notice.findById(noticeId)
    .then((notice) => {
      if (notice) {
        res.render('notices/show', notice)
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
  res.render('notices/new')
}

export const createNotice = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const noticeParams = getNoticeParams(req.body)
  Notice.create(noticeParams)
    .then((notice) => {
      res.render('notices/show', notice)
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
        res.render('notices/edit', notice)
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
  const noticeId = req.params.id
  const noticeParams = getNoticeParams(req.body)
  Notice.findByIdAndUpdate(noticeId, { $set: noticeParams }, { new: true })
    .then((notice) => {
      if (notice) {
        res.render('notices/show', notice)
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
      res.redirect('/notices')
    })
    .catch((e) => {
      next(e)
    })
}
