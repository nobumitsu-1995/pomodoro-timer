import express from 'express'
import methodOverride from 'method-override'
import layouts from 'express-ejs-layouts'
import cors from 'cors'
import passport from 'passport'
import passportHttp from 'passport-http'
import mongoose from 'mongoose'
import { config } from 'dotenv'
import noticeRouter from './routes/notice'
import v1CustumConfigRouter from './routes/api/v1/custumConfig'
import v1NoticeRouter from './routes/api/v1/notice'
import v1TaskRouter from './routes/api/v1/task'
import v1WorkTimeRouter from './routes/api/v1/workTime'
import v1AchievementRouter from './routes/api/v1/achievement'

// 変数の定義
const app = express()
config()
const isTest = process.env.NODE_ENV === 'test'
const isDocker = process.env.DOCKER === 'true'
const isLocal = process.env.NODE_ENV === 'development'
const isProd = process.env.NODE_ENV === 'production'
const client = isProd
  ? process.env.CLIENT_URL || 'http://localhost:8080' // 本番環境
  : 'http://localhost:8080' // dev環境, test環境
const dbPath = isTest
  ? 'mongodb://localhost:27017/pomodoro_test' // test環境
  : isDocker && isLocal
  ? 'mongodb://mongo-pomodoro:27017/pomodoro_dev' // dev環境
  : isLocal
  ? 'mongodb://localhost:27017/pomodoro_dev' // local環境
  : `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_SERVER}` // 本番環境
export const port = isTest ? 81 : 80
export const jwksUri = process.env.JWKS_URI || ''
export const issuer = process.env.AUTH0_DOMAIN || ''
export const audience = isProd
  ? 'https://pomodoro-timer-admin-page.click'
  : `http://localhost:${port}`

// applicationの基本設定
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(layouts)
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
)
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(
  cors({
    origin: client,
    credentials: true,
  })
)

// basic認証
passport.use(
  new passportHttp.BasicStrategy((username, password, done) => {
    if (username !== process.env.ADMIN_USER) return done(null, false)
    if (password !== process.env.ADMIN_PASSWORD) return done(null, false)
    console.log('authenticate success')
    return done(null, true)
  })
)

// データベース設定
mongoose.Promise = global.Promise
mongoose.connect(dbPath)
const db = mongoose.connection
db.once('open', () => {
  console.log(`Successfully connected to ${dbPath} useing Mongoose`)
})

// routerの読み込み
app.use('/api/v1', v1AchievementRouter)
app.use('/api/v1', v1CustumConfigRouter)
app.use('/api/v1', v1NoticeRouter)
app.use('/api/v1', v1TaskRouter)
app.use('/api/v1', v1WorkTimeRouter)
app.use(
  '/notices',
  passport.authenticate('basic', { session: false }),
  noticeRouter
)
app.use('/', (req, res) => {
  res.render('index')
})

// サーバーの起動
app.listen(port, () => {
  console.log(
    `the server is runnning at 
    PORT: ${port},
    ENV: ${process.env.NODE_ENV},
    DOCKER: ${process.env.DOCKER},
    CLIENT: ${client},
    DB: ${dbPath}`
  )
})

export default app
