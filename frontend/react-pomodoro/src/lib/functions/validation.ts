export const validateCycle = (cycle: number) => {
  if (cycle > 10 || cycle < 1) return '1-10 are allowed.'
  return ''
}

export const validateTimerConfig = (time: number) => {
  if (time > 60 || time < 5) return '5-60 are allowed.'
  return ''
}

/**
 * taskのtitleのバリデーション
 * 1~25文字が正
 * @param title
 * @returns
 */
export const validateTaskTitle = (title: string) => {
  if (title.length > 25) return '1-25 are allowed.'
  return ''
}
