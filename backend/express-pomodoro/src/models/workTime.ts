import mongoose, { Types, Schema } from 'mongoose'

const workTimeSchema = new Schema(
  {
    uid: {
      type: String,
      required: true,
    },
    taskId: {
      type: Types.ObjectId,
      ref: 'Task',
      required: true,
    },
    workTime: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
)

export type workTimeType = {
  _id?: Types.ObjectId
  uid?: string
  taskId: Types.ObjectId
  workTime: number
}

export default mongoose.model('WorkTime', workTimeSchema)
