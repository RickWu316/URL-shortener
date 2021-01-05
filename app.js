const express = require('express')
const app = express()
const mongoose = require('mongoose') // 載入 mongoose
const generateURL = require('./URLcreater')
const exphbs = require('express-handlebars');




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



app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')


// 設定首頁路由
app.get('/', (req, res) => {
    res.render('index')
    // console.log(generatePassword(5))
})

// 設定 port 3000
app.listen(3000, () => {
    console.log('App is running on http://localhost:3000')
})