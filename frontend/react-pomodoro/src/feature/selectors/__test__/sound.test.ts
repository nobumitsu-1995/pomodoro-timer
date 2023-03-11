import { storeData } from 'src/mock/storeData'
import { casheVolumeSelector, volumeSelector } from '../soundConfig'

describe('soundConfigSelector', () => {
  test('volumeSelector', () => {
    const volume = volumeSelector(storeData)
    expect(volume).toEqual(storeData.soundConfig.volume)
  })

  test('casheVolumeSelector', () => {
    const casheVolume = casheVolumeSelector(storeData)
    expect(casheVolume).toEqual(storeData.soundConfig.casheVolume)
  })
})
