export const validateCycle = (cycle: number) => {
  if (cycle > 10 || cycle < 1) return '1-10 are allowed.'
  return ''
}

export const validateTimerConfig = (time: number) => {
  if (time > 60 || time < 5) return '5-60 are allowed.'
  return ''
}
