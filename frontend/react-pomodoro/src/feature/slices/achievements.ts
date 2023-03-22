import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AchievementType } from '../../lib/types/modelType'

/** 実績に関するfeatureの型 */
export type AchievementsType = {
  achievements: AchievementType[]
  length: number
}

/** 実績に関するfeatureの初期値 */
export const initialState: AchievementsType = {
  achievements: [
    {
      _id: '',
      uid: '',
      time: 0,
      taskId: {
        _id: 'testId',
        uid: 'testUid',
        title: 'test title',
      },
    },
  ],
  length: 1,
}

/** 実績のfeatureの初期値 */
export const achievementSlice = createSlice({
  name: 'achievements',
  initialState,
  reducers: {
    setAchievements: (state, action: PayloadAction<AchievementType[]>) => {
      state.achievements = action.payload
      state.length = action.payload.length
    },
    addAchievement: (state, action: PayloadAction<AchievementType>) => {
      state.achievements.push(action.payload)
      state.length++
    },
    updateAchievement: (state, action: PayloadAction<AchievementType>) => {
      const targetId = state.achievements.findIndex((achievement) => {
        return achievement._id === action.payload._id
      })
      state.achievements[targetId] = action.payload
    },
    deleteAchievement: (state, action: PayloadAction<string>) => {
      state.achievements = state.achievements.filter((achievement) => {
        return achievement._id !== action.payload
      })
      state.length--
    },
  },
})

const { actions, reducer } = achievementSlice
export const {
  setAchievements,
  addAchievement,
  updateAchievement,
  deleteAchievement,
} = actions
/** 「実績」に関するデータ */
export const achievementsReducer = reducer
