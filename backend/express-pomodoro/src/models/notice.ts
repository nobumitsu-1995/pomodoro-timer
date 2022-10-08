import mongoose, { Types } from 'mongoose'
const { Schema } = mongoose

const noticeSchema = new Schema(
  {
    content: {
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
  publishedAt: Date
  createdAt: Date
  updatedAt: Date
}

export const Notice = mongoose.model('Notice', noticeSchema)
