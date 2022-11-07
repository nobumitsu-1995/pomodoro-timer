import { Request, Response, NextFunction } from 'express'
import { check, validationResult } from 'express-validator'
import CustumConfig, { custumConfigType } from '../../../models/custumConfig'

export const getConfigParams = (body: custumConfigType, uid: string) => {
  return {
    uid: uid,
    workTime: body.workTime,
    restTime: body.restTime,
    cycle: body.cycle,
    longRestTime: body.longRestTime,
    cycleToLongRestTime: body.cycleToLongRestTime,
  }
}

export const getCustumConfigs = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const uid = res.locals.user.sub
  CustumConfig.find({
    uid: uid,
  })
    .then((configs) => {
      res.status(200).json(configs)
    })
    .catch((e) => {
      next(e)
    })
}

export const getCustumConfig = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const uid = res.locals.user.sub
  const configId = req.params.id
  CustumConfig.find({
    uid: uid,
    _id: configId,
  })
    .then((config) => {
      res.status(200).json(config)
    })
    .catch((e) => {
      next(e)
    })
}

export const createCustumConfig = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.locals.error) next()

  const uid = res.locals.user.sub
  const configParams = getConfigParams(req.body, uid)
  CustumConfig.create(configParams)
    .then((config) => {
      res.status(201).json(config)
    })
    .catch((e) => {
      next(e)
    })
}

export const updateCustumConfig = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.locals.error) next()

  const uid = res.locals.user.sub
  const configId = req.params.id
  const configParams = getConfigParams(req.body, uid)
  CustumConfig.findByIdAndUpdate(
    configId,
    { $set: configParams },
    { new: true }
  )
    .then((config) => {
      if (config) {
        res.status(200).json(config)
      }
      next({ message: "CustumConfig's data is not find!" })
    })
    .catch((e) => {
      next(e)
    })
}

export const deleteCustumConfig = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const configId = req.params.id
  CustumConfig.findByIdAndDelete(configId)
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
  await check('workTime', 'workTimeを入力してください').notEmpty().run(req)
  await check('restTime', 'restTimeを入力してください').notEmpty().run(req)
  await check('cycle', 'cycleを入力してください').notEmpty().run(req)
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
