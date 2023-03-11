import React from 'react'
import NoticeDetail from 'src/components/molecules/NoticeDetail/NoticeDetail'
import NoticesList from 'src/components/molecules/NoticesList/NoticesList'
import styled from 'styled-components/macro'
import { NoticeType } from '../../../lib/types/modelType'

export type Props = {
  notices: NoticeType[]
  setCurrentNotice: React.Dispatch<React.SetStateAction<NoticeType | undefined>>
  notice?: NoticeType
}

const Presenter: React.FC<Props> = ({ notices, setCurrentNotice, notice }) => {
  return (
    <div>
      <StyledH2>Notices</StyledH2>
      {notice ? (
        <NoticeDetail {...notice} onClick={() => setCurrentNotice(undefined)} />
      ) : (
        <NoticesList
          css='padding: 0 20px;'
          notices={notices}
          setCurrentNotice={setCurrentNotice}
        />
      )}
    </div>
  )
}

export default Presenter

const StyledH2 = styled.h2`
  position: sticky;
  top: 0;
  padding: 20px;
  background: #ebebeb;
  box-shadow: 15px 15px 30px #cfcfcf, -15px -15px 30px #ffffff;

  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3),
    -2px -2px 4px rgba(255, 255, 255, 1);
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.color.black};
`
