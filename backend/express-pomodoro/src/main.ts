import express from 'express'
import methodOverride from 'method-override'
import layouts from 'express-ejs-layouts'
import cors from 'cors'
import mongoose from 'mongoose'
import { config } from 'dotenv'
import router from './routes'
import './assets/styles/index.scss'

// 変数の定義
const app = express()
config()
const isTest = process.env.NODE_ENV === 'test'
const isDocker = process.env.DOCKER === 'true'
const isLocal = process.env.NODE_ENV === 'development'
const isProd = process.env.NODE_ENV === 'production'
const client = process.env.CLIENT_URL || 'http://localhost:8080'
const dbPath = isTest
  ? 'mongodb://localhost:27017/pomodoro_test' // test環境
  : isDocker && isLocal
  ? 'mongodb://mongo-pomodoro:27017/pomodoro_dev' // dev環境
  : isLocal
  ? 'mongodb://localhost:27017/pomodoro_dev' // local環境
  : `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_SERVER}` // 本番環境
const port = isTest ? 3001 : 3000

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

// データベース設定
mongoose.Promise = global.Promise
mongoose.connect(dbPath)
const db = mongoose.connection
db.once('open', () => {
  console.log(`Successfully connected to ${dbPath} useing Mongoose`)
})

// routerの読み込み
app.use('/', router)

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
