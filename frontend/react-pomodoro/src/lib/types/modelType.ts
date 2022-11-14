export type NoticeType = {
  /** お知らせID */
  id: string
  /** お知らせ題名 */
  title: string
  /** お知らせ内容 */
  content: string
  /** お知らせ更新日 */
  updatedAt: string
  /** お知らせ作成日 */
  createdAt: string
  /** お知らせ発行日 */
  publishedAt: string
}

export type CustumConfigType = {
  /** id */
  id: string
  /** 作業時間 */
  workTime: number
  /** 休憩時間 */
  restTime: number
  /** 繰り返す回数 */
  cycle: number
  /** 長い休憩時間 */
  longRestTime: number
  /** 長い休憩時間までのサイクル */
  cycleToLongRestTime: number
}
