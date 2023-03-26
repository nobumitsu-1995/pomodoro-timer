import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setAchievements as setReduxAchievements } from 'src/feature/slices/achievements'
import { api } from '../functions/axios'
import { totalingAchievement } from '../functions/totalingAchievement'
import { AchievementType } from '../types/modelType'

type Props = {
  token: string
}

const useUserAchievement = ({ token }: Props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [achievements, setAchievements] = useState<AchievementType[]>([])
  const [totalAchievements, setTotalAchievements] = useState<AchievementType[]>(
    []
  )
  const { isAuthenticated } = useAuth0()
  const dispatch = useDispatch()

  // apiからデータ取得
  useEffect(() => {
    if (!isAuthenticated || !token) return

    api(token)
      .get('/v1/achievement')
      .then((res) => {
        setAchievements(res.data)
        dispatch(setReduxAchievements(res.data))
      })
      .catch((e) => {
        console.error(e)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  // データ集計
  useEffect(() => {
    const datas = totalingAchievement(achievements)
    setTotalAchievements(datas)
  }, [achievements])

  return { isLoading, achievements, totalAchievements }
}

export default useUserAchievement
