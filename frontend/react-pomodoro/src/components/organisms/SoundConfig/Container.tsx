import React, { useCallback } from 'react'
import useSound from 'use-sound'
import RestFinish from '../../../assets/sounds/RestFinish.mp3'
import { useDispatch } from 'react-redux'
import { volumeSelector } from '../../../feature/selectors/soundConfig'
import {
  updateVolume as reduxUpdateVolume,
  muteVolume as reduxMuteVolume,
  unMuteVolume as reduxUnMuteVolume,
} from '../../../feature/slices/soundConfig'
import { useSelector } from '../../../feature/store'
import Presenter from './Presenter'

const Container: React.FC = () => {
  const volume = useSelector(volumeSelector)
  const globalVolume = useSelector(volumeSelector)
  const [playRestFinish] = useSound(RestFinish, { volume: volume / 100 })
  const dispatch = useDispatch()
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

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _volume = Number(e.target.value)
    updateVolume(_volume)
  }

  const handleClickButton = () => {
    if (globalVolume === 0) {
      unMuteVolume()
    } else {
      muteVolume()
    }
  }

  return (
    <Presenter
      isMuted={globalVolume === 0}
      onClick={handleClickButton}
      onChange={handleChangeInput}
      value={globalVolume}
      onClickTry={playRestFinish}
    />
  )
}

export default Container
