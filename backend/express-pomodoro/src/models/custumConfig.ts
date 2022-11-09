import mongoose, { Types, Schema } from 'mongoose'

const custumConfigSchema = new Schema(
  {
    uid: {
      type: String,
      required: true,
    },
    workTime: {
      type: Number,
      required: true,
    },
    restTime: {
      type: Number,
      required: true,
    },
    cycle: {
      type: Number,
      required: true,
    },
    longRestTime: {
      type: Number,
    },
    cycleToLongRestTime: {
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
