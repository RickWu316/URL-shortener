const express = require('express')
const app = express()
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser')
const routes = require('./routes')

require('./config/mongoose')

app.use(bodyParser.urlencoded({ extended: true }))
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(routes)


// 設定 port 3000
app.listen(3000, () => {
    console.log('App is running on http://localhost:3000')
})