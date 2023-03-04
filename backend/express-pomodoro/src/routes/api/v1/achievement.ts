import express from 'express'
import { authenticateJWT } from '../../../controllers/api/v1/authController'
import {
  createAchievement,
  deleteAchievement,
  getAchievement,
  getAchievements,
  updateAchievement,
  validator as achievementValidator,
} from '../../../controllers/api/v1/achivementsController'

const v1AchievementRouter = express.Router()

// achievement
v1AchievementRouter.get('/achievement', authenticateJWT, getAchievements)
v1AchievementRouter.get(
  '/achievement/:id/show',
  authenticateJWT,
  getAchievement
)
v1AchievementRouter.post(
  '/achievement/create',
  authenticateJWT,
  achievementValidator,
  createAchievement
)
v1AchievementRouter.patch(
  '/achievement/:id/update',
  authenticateJWT,
  achievementValidator,
  updateAchievement
)
v1AchievementRouter.delete(
  '/achievement/:id/delete',
  authenticateJWT,
  deleteAchievement
)

export default v1AchievementRouter
