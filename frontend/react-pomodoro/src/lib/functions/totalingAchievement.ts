import { AchievementType } from '../types/modelType'

export const totalingAchievement = (
  achievements: AchievementType[]
): AchievementType[] => {
  const achievementsMap = new Map<string, AchievementType>()

  for (const achievement of achievements) {
    const { taskId: task, time: achievementTime } = achievement
    const { _id: taskId } = task

    const existingAchievement = achievementsMap.get(taskId)

    if (existingAchievement) {
      achievementsMap.set(taskId, {
        ...existingAchievement,
        time: existingAchievement.time + achievementTime,
      })
    } else {
      achievementsMap.set(taskId, {
        ...achievement,
      })
    }
  }

  return Array.from(achievementsMap.values())
}
