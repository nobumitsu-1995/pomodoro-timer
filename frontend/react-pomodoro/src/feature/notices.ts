import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { NoticeType } from '../lib/types/modelType'

/** お知らせに関するfeatureの型 */
export type NoticesType = {
  notices: NoticeType[]
  length: number
}

/** お知らせに関するfeatureの初期値 */
const initialState: NoticesType = {
  notices: [
    {
      id: '',
      title: '',
      content: '',
      updated_at: '',
      created_at: '',
    },
  ],
  length: 1,
}

/** お知らせのfeatureの初期値 */
export const noticeSlice = createSlice({
  name: 'notices',
  initialState,
  reducers: {
    setNotices: (state, action: PayloadAction<NoticeType[]>) => {
      state.notices = action.payload
      state.length = action.payload.length
    },
  },
})

const { actions, reducer } = noticeSlice
export const { setNotices } = actions
/** 「お知らせ」に関するデータ */
export const noticesReducer = reducer