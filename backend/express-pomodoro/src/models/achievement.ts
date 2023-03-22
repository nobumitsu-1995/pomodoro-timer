import mongoose, { Schema, Types } from 'mongoose'

const achievementSchema = new Schema(
  {
    time: {
      type: Number,
      required: true,
    },
    uid: {
      type: String,
      required: true,
    },
    taskId: {
      type: Types.ObjectId,
      ref: 'Task',
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

export type AchievementType = {
  _id?: Types.ObjectId
  uid?: string
  time: number
  taskId: Types.ObjectId
}

export default mongoose.model('Achievement', achievementSchema)
