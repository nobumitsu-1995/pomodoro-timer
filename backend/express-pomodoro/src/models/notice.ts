import mongoose, { Types } from 'mongoose'
const { Schema } = mongoose

const noticeSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    publishedAt: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
)

export type NoticeType = {
  _id: Types.ObjectId
  content: string
  title: string
  publishedAt: Date
  createdAt: Date
  updatedAt: Date
}

noticeSchema.virtual('formatPublishedAt').get(function () {
  const _publishedAt = new Date(this.publishedAt) as Date
  const year = _publishedAt.getFullYear()
  const month = _publishedAt.getMonth() + 1
  const date = _publishedAt.getDate()
  return `${year}/${month}/${date}`
})

export default mongoose.model('Notice', noticeSchema)
