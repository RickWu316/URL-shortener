const express = require('express')
const app = express()
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser')
const routes = require('./routes')
const PORT = process.env.PORT || 3000

require('./config/mongoose')

app.use(bodyParser.urlencoded({ extended: true }))
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(routes)


// 設定應用程式監聽的埠號
app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`)
})