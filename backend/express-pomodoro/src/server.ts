import app, { client, dbPath, port } from './main'

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
