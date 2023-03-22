import React from 'react'
import useSoundConfig from 'src/lib/hooks/useSoundConfig'
import { volumeSelector } from '../../../feature/selectors/soundConfig'
import { useSelector } from '../../../feature/store'
import Presenter from './Presenter'

const Container: React.FC = () => {
  const volume = useSelector(volumeSelector)
  const globalVolume = useSelector(volumeSelector)
  const { playRestFinish, updateVolume, unMuteVolume, muteVolume } =
    useSoundConfig(volume)

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
