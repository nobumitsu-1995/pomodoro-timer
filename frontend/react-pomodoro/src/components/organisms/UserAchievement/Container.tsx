import React, { Fragment } from 'react'
import { tokenGetSelector } from 'src/feature/selectors/token'
import { useSelector } from 'src/feature/store'
import useUserAchievement from 'src/lib/hooks/useUserAchievement'
import Presenter from './Presenter'

const UserAchievement = () => {
  const token = useSelector(tokenGetSelector)
  const { totalAchievements, isLoading } = useUserAchievement({ token })

  const labels = totalAchievements.map(
    (achievement) => achievement.taskId.title
  )

  const datas = totalAchievements.map((achievement) => achievement.time)

  return (
    <Fragment>
      {isLoading ? (
        <>loading</>
      ) : (
        <Presenter
          labels={labels}
          datas={datas}
          achievements={totalAchievements}
        />
      )}
    </Fragment>
  )
}

export default UserAchievement
