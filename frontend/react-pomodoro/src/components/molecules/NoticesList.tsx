import React from 'react'
import { NoticeType } from '../../lib/types/modelType'
import { Text } from '../atoms'
import NoticesListItem from './NoticesListItem'

type Props = {
  notices: NoticeType[]
  setCurrentNotice: React.Dispatch<React.SetStateAction<NoticeType | undefined>>
  className?: string
}

const NoticesList: React.FC<Props> = ({
  notices,
  setCurrentNotice,
  className,
}) => {
  return (
    <ul className={className}>
      {notices.length > 0 ? (
        notices.map((notice) => {
          return (
            <NoticesListItem
              key={notice.id}
              notice={notice}
              setCurrentNotice={setCurrentNotice}
            />
          )
        })
      ) : (
        <li>
          <Text>お知らせはありません</Text>
        </li>
      )}
    </ul>
  )
}

export default NoticesList
