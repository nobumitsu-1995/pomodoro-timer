import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setNotices as reduxSetNotices } from '../../../feature/notices'
import { noticesSelector } from '../../../feature/selectors'
import { useSelector } from '../../../feature/store'
import { NoticeType } from '../../../lib/types/modelType'
import Presenter from './Presenter'

const _notices = Array(20)
  .fill(0)
  .map((_, index) => {
    return {
      id: `id${index + 1}`,
      title: `タイトル${index + 1} `.repeat(10),
      content: `内容${index + 1} `.repeat(1000),
      updated_at: '',
      created_at: `2022/01/${('0' + (index + 1).toString()).slice(-2)}`,
    }
  })

const index: React.FC = () => {
  const dispatch = useDispatch()
  const notices = useSelector(noticesSelector)

  useEffect(() => {
    dispatch(reduxSetNotices(_notices))
  }, [])

  const [currentNotice, setCurrentNotice] = useState<NoticeType | undefined>()

  return (
    <Presenter
      notices={notices}
      notice={currentNotice}
      setCurrentNotice={setCurrentNotice}
    />
  )
}

export default index
