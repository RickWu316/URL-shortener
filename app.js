const express = require('express')
const app = express()
const mongoose = require('mongoose') // 載入 mongoose

const exphbs = require('express-handlebars');
const bodyParser = require('body-parser')

// 引用路由器
const routes = require('./routes')
// 將 request 導入路由器




mongoose.connect('mongodb://localhost/URLShortener', { useNewUrlParser: true, useUnifiedTopology: true }) // 設定連線到 mongoDB

const db = mongoose.connection
// 連線異常
db.on('error', () => {
    console.log('mongodb error!')
})
// 連線成功
db.once('open', () => {
    console.log('mongodb connected!')
})


app.use(bodyParser.urlencoded({ extended: true }))
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(routes)

// 設定首頁路由



// 設定 port 3000
app.listen(3000, () => {
    console.log('App is running on http://localhost:3000')
})