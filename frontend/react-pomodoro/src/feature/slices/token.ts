import { createSlice, PayloadAction } from '@reduxjs/toolkit'

/** ログイン後取得されるtokenの型 */
export type TokenType = {
  token: string
}

/** tokenの初期値 */
export const initialState: TokenType = {
  token: '',
}

/** tokenのfeatureのSlice */
export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    },
  },
})

const { actions, reducer } = tokenSlice
export const { setToken } = actions
/** Tokenに関するデータ */
export const tokenReducer = reducer
