import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CustumConfigType } from 'src/lib/types/modelType'

/** カスタムタイマー設定に関するfeatureの型 */
export type CustumConfigsType = {
  custumConfig: CustumConfigType[]
  length: number
}

/** カスタムタイマー設定に関するfeatureの初期値 */
export const initialState: CustumConfigsType = {
  custumConfig: [
    {
      _id: '0',
      workTime: 5,
      restTime: 5,
      cycle: 1,
      longRestTime: 5,
      cycleToLongRestTime: 1,
    },
    {
      _id: '1',
      workTime: 5,
      restTime: 5,
      cycle: 1,
      longRestTime: 5,
      cycleToLongRestTime: 1,
    },
    {
      _id: '2',
      workTime: 5,
      restTime: 5,
      cycle: 1,
      longRestTime: 5,
      cycleToLongRestTime: 1,
    },
    {
      _id: '3',
      workTime: 5,
      restTime: 5,
      cycle: 1,
      longRestTime: 5,
      cycleToLongRestTime: 1,
    },
    {
      _id: '4',
      workTime: 5,
      restTime: 5,
      cycle: 1,
      longRestTime: 5,
      cycleToLongRestTime: 1,
    },
  ],
  length: 5,
}

/** カスタムタイマー設定のfeatureのSlice */
export const custumConfigSlice = createSlice({
  name: 'custumConfig',
  initialState,
  reducers: {
    setCustumConfigs: (state, action: PayloadAction<CustumConfigType[]>) => {
      state.custumConfig = action.payload
      state.length = action.payload.length
    },
    setCustumConfig: (state, action: PayloadAction<CustumConfigType>) => {
      state.custumConfig.push(action.payload)
      state.length += 1
    },
    updateCustumConfig: (state, action: PayloadAction<CustumConfigType>) => {
      const targetId = state.custumConfig.findIndex((config) => {
        return config._id === action.payload._id
      })
      state.custumConfig[targetId] = action.payload
    },
  },
})

const { actions, reducer } = custumConfigSlice
export const { setCustumConfigs, setCustumConfig, updateCustumConfig } = actions
/** カスタムタイマー設定に関するデータ */
export const custumConfigReducer = reducer
