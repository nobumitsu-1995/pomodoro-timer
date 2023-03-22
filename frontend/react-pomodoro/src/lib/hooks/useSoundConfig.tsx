import WorkFinish from '../../assets/sounds/WorkFinish.mp3'
import RestFinish from '../../assets/sounds/RestFinish.mp3'
import useSound from 'use-sound'
import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import {
  updateVolume as reduxUpdateVolume,
  muteVolume as reduxMuteVolume,
  unMuteVolume as reduxUnMuteVolume,
} from '../../feature/slices/soundConfig'

/** Timerの音声に関するHooks */
const useSoundConfig = (volume: number) => {
  const dispatch = useDispatch()

  const [playWorkFinish] = useSound(WorkFinish, { volume: volume / 100 })
  const [playRestFinish] = useSound(RestFinish, { volume: volume / 100 })

  const updateVolume = useCallback(
    (_volume: number) => {
      dispatch(reduxUpdateVolume(_volume))
    },
    [dispatch]
  )

  const muteVolume = useCallback(() => {
    dispatch(reduxMuteVolume())
  }, [dispatch])

  const unMuteVolume = useCallback(() => {
    dispatch(reduxUnMuteVolume())
  }, [dispatch])

  return {
    playWorkFinish,
    playRestFinish,
    updateVolume,
    muteVolume,
    unMuteVolume,
  }
}

export default useSoundConfig
