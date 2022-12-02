import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CustumConfigType } from 'src/lib/types/modelType'

/** カスタムタイマー設定に関するfeatureの型 */
export type CustumConfigsType = {
  custumConfig: CustumConfigType[]
  length: number
}

/** カスタムタイマー設定に関するfeatureの初期値 */
const initialState: CustumConfigsType = {
  custumConfig: [
    {
      id: '',
      workTime: 0,
      restTime: 0,
      cycle: 0,
      longRestTime: 0,
      cycleToLongRestTime: 0,
    },
  ],
  length: 0,
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
        return config.id === action.payload.id
      })
      state.custumConfig[targetId] = action.payload
    },
  },
})

const { actions, reducer } = custumConfigSlice
export const { setCustumConfigs, setCustumConfig, updateCustumConfig } = actions
/** カスタムタイマー設定に関するデータ */
export const custumConfigReducer = reducer
