import React, { useState } from 'react'
import { noticesSelector } from '../../../feature/selectors/notice'
import { useSelector } from '../../../feature/store'
import { NoticeType } from '../../../lib/types/modelType'
import Presenter from './Presenter'

const Container: React.FC = () => {
  const notices = useSelector(noticesSelector)
  const [currentNotice, setCurrentNotice] = useState<NoticeType | undefined>()

  return (
    <Presenter
      notices={notices}
      notice={currentNotice}
      setCurrentNotice={setCurrentNotice}
    />
  )
}

export default Container
