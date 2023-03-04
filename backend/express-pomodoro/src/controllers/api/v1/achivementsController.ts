import { Request, Response, NextFunction } from 'express'
import { check, validationResult } from 'express-validator'
import Achievement, { AchievementType } from '../../../models/achievement'

export const getAchievementParams = (body: AchievementType, uid: string) => {
  return {
    uid: uid,
    time: body.time,
    taskId: body.taskId,
  }
}

export const getAchievement = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const uid = res.locals.user.sub
  const achivementId = req.params.id
  Achievement.findOne({
    uid: uid,
    _id: achivementId,
  })
    .then((achivement) => {
      return res.status(200).json(achivement)
    })
    .catch((e) => {
      next(e)
    })
}

export const getAchievements = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const uid = res.locals.user.sub
  Achievement.find({
    uid: uid,
  })
    .then((achievements) => {
      return res.status(200).json(achievements)
    })
    .catch((e) => {
      next(e)
    })
}

export const createAchievement = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.locals.error) next()

  const uid = res.locals.user.sub
  const AchievementParams = getAchievementParams(req.body, uid)
  Achievement.create(AchievementParams)
    .then((achievement) => {
      return res.status(201).json(achievement)
    })
    .catch((e) => {
      next(e)
    })
}

export const updateAchievement = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.locals.error) next()

  const uid = res.locals.user.sub
  const achievementId = req.params.id
  const achievementParams = getAchievementParams(req.body, uid)
  Achievement.findByIdAndUpdate(
    achievementId,
    { $set: achievementParams },
    { new: true }
  )
    .then((achievement) => {
      if (achievement) {
        return res.status(200).json(achievement)
      }
      next({ message: "Achievement's data is not find!" })
    })
    .catch((e) => {
      next(e)
    })
}

export const deleteAchievement = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const achievementId = req.params.id
  Achievement.findByIdAndDelete(achievementId)
    .then(() => {
      return res.status(204).json('Success delete achievement')
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
  await check('time', 'timeを入力してください').notEmpty().run(req)
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
