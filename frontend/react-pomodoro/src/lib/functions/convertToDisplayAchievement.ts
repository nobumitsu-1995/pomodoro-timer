export const convertToDisplayAchievement = (achievementTime: number) => {
  const hours = Math.floor(achievementTime / 3600)
  const minutes = Math.floor((achievementTime % 3600) / 60)
  const remainingSeconds = achievementTime % 60

  return `${hours}:${minutes.toString().padStart(2, '0')}:${remainingSeconds
    .toString()
    .padStart(2, '0')}`
}
