import React, { FC } from 'react'
import DoughnutGraph from 'src/components/molecules/DoughnutGraph/DoughnutGraph'
import { AchievementType } from 'src/lib/types/modelType'
import styled from 'styled-components'
import AchievementList from '../../molecules/AchievementList/AchievementList'

export type Props = {
  labels: string[]
  datas: number[]
  achievements: AchievementType[]
}

const Presenter: FC<Props> = ({ labels, datas, achievements }) => {
  return (
    <StyledSection>
      <StyledH2>User Achievements</StyledH2>
      <StyledDiv>
        <DoughnutGraph labels={labels} datas={datas} />
        <AchievementList achievements={achievements} />
      </StyledDiv>
    </StyledSection>
  )
}

export default Presenter

const StyledSection = styled.section`
  text-align: center;
`

const StyledDiv = styled.div`
  margin-top: 40px;
  display: inline-flex;
  align-items: start;
  gap: 52px;
`

const StyledH2 = styled.h2`
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
