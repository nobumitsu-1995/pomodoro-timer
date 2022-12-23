import { Request, Response, NextFunction } from 'express'
import { check, validationResult } from 'express-validator'
import WorkTime, { workTimeType } from '../../../models/workTime'

export const getWorkTimeParams = (body: workTimeType, uid: string) => {
  return {
    uid: uid,
    taskId: body.taskId,
    workTime: body.workTime,
  }
}

export const getWorkTimes = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const uid = res.locals.user.sub
  WorkTime.find({
    uid: uid,
  })
    .then((workTimes) => {
      res.status(200).json(workTimes)
    })
    .catch((e) => {
      next(e)
    })
}

export const getWorkTime = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const uid = res.locals.user.sub
  const workTimeId = req.params.id
  WorkTime.findOne({
    uid: uid,
    _id: workTimeId,
  })
    .then((workTime) => {
      res.status(200).json(workTime)
    })
    .catch((e) => {
      next(e)
    })
}

export const createWorkTime = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.locals.error) next()

  const uid = res.locals.user.sub
  const workTimeParams = getWorkTimeParams(req.body, uid)
  WorkTime.create(workTimeParams)
    .then((workTime) => {
      res.status(201).json(workTime)
    })
    .catch((e) => {
      next(e)
    })
}

export const updateWorkTime = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.locals.error) next()

  const uid = res.locals.user.sub
  const workTimeId = req.params.id
  const taskParams = getWorkTimeParams(req.body, uid)
  WorkTime.findByIdAndUpdate(workTimeId, { $set: taskParams }, { new: true })
    .then((workTime) => {
      if (workTime) {
        res.status(200).json(workTime)
      }
      next({ message: "WorkTime's data is not find!" })
    })
    .catch((e) => {
      next(e)
    })
}

export const deleteWorkTime = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const workTimeId = req.params.id
  WorkTime.findByIdAndDelete(workTimeId)
    .then(() => {
      res.status(204).json('Success delete workTime')
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
  await check('workTime', 'workTimeを入力してください').notEmpty().run(req)
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
