export const convertToDisplayTime = (leftTime: number) => {
  const minutes = ('00' + Math.floor(leftTime / 60)).slice(-2)
  const seconds = ('00' + (leftTime % 60)).slice(-2)
  return {
    minutes: minutes,
    seconds: seconds,
  }
}
