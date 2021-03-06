// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const shortenURL = require('../../models/shortenURL')
const generateURL = require('../../URLcreater')
const website = process.env.web_URL || 'http://localhost:3000'


router.get('/', (req, res) => {
    res.render('index')
})

router.get('/:shortURL', async (req, res) => {
    const reqURL = req.params.shortURL
    await shortenURL.findOne({ shortenURL: reqURL })
        .then(URL => {
            res.redirect(URL.originalURL)
        })
})

router.post('/', async (req, res) => {
    const originalURL = req.body.originalURL
    const error = "未輸入內容"

    if (originalURL === "") {
        res.render('index', { error })

    } else {
        let randomURL = generateURL(5)
        let randomcheck = 0
        //check if randomURL be used
        do {
            await shortenURL.findOne({ shortenURL: randomURL })
                .lean()
                .then(URL => {
                    console.log(URL)
                    if (URL !== null) {
                        console.log("短網址重複")
                        randomURL = generateURL(5)

                    } else {
                        randomcheck = 1
                        console.log("change")
                    }
                })
        } while (randomcheck < 1)

        //create URL
        await shortenURL.findOne({ originalURL: originalURL })
            .then(URL => {
                console.log(URL)
                if (URL === null) {
                    return shortenURL.create({ originalURL: originalURL, shortenURL: randomURL })
                        .then((URL) => {
                            URL = URL.toObject() //等同於lean()的功能
                            res.render('show', { URL, website })
                        })
                } else {
                    URL = URL.toObject() //等同於lean()的功能
                    console.log('網頁已存在')
                    res.render('show', { URL, website })
                }
            })
    }
})




// 匯出路由模組
module.exports = router