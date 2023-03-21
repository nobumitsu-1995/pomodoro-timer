import mongoose, { Types, Schema } from 'mongoose'

const custumConfigSchema = new Schema(
  {
    uid: {
      type: String,
      required: true,
    },
    workTime: {
      type: Number,
      min: 5,
      max: 60,
      required: true,
    },
    restTime: {
      type: Number,
      min: 5,
      max: 60,
      required: true,
    },
    cycle: {
      type: Number,
      min: 1,
      max: 10,
      required: true,
    },
    longRestTime: {
      min: 5,
      max: 60,
      default: 0,
      type: Number,
    },
    cycleToLongRestTime: {
      min: 0,
      max: 10,
      default: 0,
      type: Number,
    },
  },
  { timestamps: true }
)

export type custumConfigType = {
  _id?: Types.ObjectId
  uid?: string
  workTime: number
  restTime: number
  cycle: number
  longRestTime?: number
  cycleToLongRestTime?: number
  createdAt?: Date
  updatedAt?: Date
}

export default mongoose.model('CustumConfig', custumConfigSchema)
