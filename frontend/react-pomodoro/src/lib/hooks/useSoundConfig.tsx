import WorkFinish from '../../assets/sounds/WorkFinish.mp3'
import RestFinish from '../../assets/sounds/RestFinish.mp3'
import useSound from 'use-sound'

/** Timerの音声に関するHooks */
const useSoundConfig = (volume: number) => {
  const [playWorkFinish] = useSound(WorkFinish, { volume: volume / 100 })
  const [playRestFinish] = useSound(RestFinish, { volume: volume / 100 })

  return {
    playWorkFinish,
    playRestFinish,
  }
}

export default useSoundConfig
