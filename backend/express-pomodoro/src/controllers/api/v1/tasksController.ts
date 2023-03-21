import { Request, Response, NextFunction } from 'express'
import { check, validationResult } from 'express-validator'
import Task, { taskType } from '../../../models/task'

export const getTaskParams = (body: taskType, uid: string) => {
  return {
    uid: uid,
    title: body.title,
  }
}

export const getTasks = (req: Request, res: Response, next: NextFunction) => {
  const uid = res.locals.user.sub
  Task.find({
    uid: uid,
  })
    .then((tasks) => {
      return res.status(200).json(tasks)
    })
    .catch((e) => {
      next(e)
    })
}

export const getTask = (req: Request, res: Response, next: NextFunction) => {
  const uid = res.locals.user.sub
  const taskId = req.params.id
  Task.findOne({
    uid: uid,
    _id: taskId,
  })
    .then((task) => {
      return res.status(200).json(task)
    })
    .catch((e) => {
      next(e)
    })
}

export const createTask = (req: Request, res: Response, next: NextFunction) => {
  if (res.locals.error) next()

  const uid = res.locals.user.sub

  Task.find({
    uid: uid,
  })
    .then((tasks) => {
      if (tasks.length > 9) {
        return res.status(403).json()
      }

      const taskParams = getTaskParams(req.body, uid)
      Task.create(taskParams)
        .then((task) => {
          return res.status(201).json(task)
        })
        .catch((e) => {
          next(e)
        })
    })
    .catch((e) => {
      next(e)
    })
}

export const updateTask = (req: Request, res: Response, next: NextFunction) => {
  if (res.locals.error) next()

  const uid = res.locals.user.sub
  const taskId = req.params.id
  const taskParams = getTaskParams(req.body, uid)
  Task.findByIdAndUpdate(taskId, { $set: taskParams }, { new: true })
    .then((task) => {
      if (task) {
        return res.status(200).json(task)
      }
      next({ message: "Task's data is not find!" })
    })
    .catch((e) => {
      next(e)
    })
}

export const deleteTask = (req: Request, res: Response, next: NextFunction) => {
  const taskId = req.params.id
  Task.findByIdAndDelete(taskId)
    .then(() => {
      return res.status(204).json('Success delete task')
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
  await check('title', 'titleを入力してください').notEmpty().run(req)
  await check('title')
    .isLength({ min: 1, max: 25 })
    .withMessage('Name should be between 1 and 25 characters.')
    .run(req)
  const error = validationResult(req)
  if (error.isEmpty()) {
    next()
  } else {
    const messages = error.array().map((e) => ({ msg: e.msg, params: e.param }))
    res.locals.error = messages
    res.status(400)
    next()
  }
}
