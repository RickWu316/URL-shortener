const express = require('express')
const app = express()
const mongoose = require('mongoose') // 載入 mongoose
const generateURL = require('./URLcreater')
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser')


const shortenURL = require('./models/shortenURL')



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


// 設定首頁路由
app.get('/', (req, res) => {
    res.render('index')
    // console.log(generatePassword(5))
})

app.post('/', async (req, res) => {
    const originalURL = req.body.originalURL

    let randomURL = generateURL(5)
    // let randomURL = 'kolsr'
    let randomcheck = 0
    //check if randomURL be used
    do {
        console.log(randomURL)
        await shortenURL.findOne({ shortenURL: randomURL })
            .lean()
            .then(URL => {
                console.log(URL)
                if (URL !== null) {
                    console.log("find")
                    randomURL = generateURL(5)


                } else {
                    randomcheck = 1
                    console.log("change")
                }
            })
        console.log(randomcheck)
    } while (randomcheck < 0)

    //create URL
    // await shortenURL.findOne({ originalURL: originalURL })
    //     .then(URL => {
    //         console.log(URL)
    //         if (URL === null) {
    //             return shortenURL.create({ originalURL: originalURL, shortenURL: randomURL })
    //                 .then((URL) => {
    //                     URL = URL.toObject() //等同於lean()的功能
    //                     // console.log(URL)
    //                     res.render('show', { URL })
    //                     console.log("成功")
    //                 })
    //         } else {
    //             URL = URL.toObject() //等同於lean()的功能
    //             console.log('網頁已存在')
    //             console.log(URL.shortenURL)
    //             res.render('show', { URL: URL })
    //         }
    //     })

})

app.get('/show', (req, res) => {
    res.render('show')
})


// 設定 port 3000
app.listen(3000, () => {
    console.log('App is running on http://localhost:3000')
})