import React, { FC } from 'react'
import { convertToDisplayAchievement } from 'src/lib/functions/convertToDisplayAchievement'
import { AchievementType } from 'src/lib/types/modelType'
import {
  StyledTable,
  StyledTbody,
  StyledTd1,
  StyledTd2,
  StyledTh,
  StyledThead,
  StyledTr,
  Wrapper,
} from './styles'

export type Props = {
  achievements: AchievementType[]
}

const AchievementList: FC<Props> = ({ achievements }) => {
  return (
    <Wrapper>
      <StyledTable>
        <StyledThead>
          <StyledTr>
            <StyledTh></StyledTh>
            <StyledTd1>Title</StyledTd1>
            <StyledTd2>Time</StyledTd2>
          </StyledTr>
        </StyledThead>
        <StyledTbody>
          {achievements.map((achievement, index) => {
            const rank = `${index + 1}`.padStart(2, '0')
            const time = convertToDisplayAchievement(achievement.time)
            return (
              <StyledTr key={achievement._id}>
                <StyledTh>{rank}</StyledTh>
                <StyledTd1>{achievement.taskId.title}</StyledTd1>
                <StyledTd2>{time}</StyledTd2>
              </StyledTr>
            )
          })}
        </StyledTbody>
      </StyledTable>
    </Wrapper>
  )
}

export default AchievementList
