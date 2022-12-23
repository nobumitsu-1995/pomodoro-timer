import mongoose, { Types, Schema } from 'mongoose'

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    uid: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

export type taskType = {
  _id?: Types.ObjectId
  uid?: string
  title: string
}

export default mongoose.model('Task', taskSchema)
