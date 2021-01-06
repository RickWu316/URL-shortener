// const mongoose = require('mongoose')
const shortenURL = require('../shortenURL') // 載入 todo model
// mongoose.connect('mongodb://localhost/URLShortener', { useNewUrlParser: true, useUnifiedTopology: true })
// const db = mongoose.connection

const db = require('../../config/mongoose')

db.once('open', async () => {
    await shortenURL.create(
        {
            originalURL: 'https://www.google.com.tw/',
            shortenURL: '12345'
        },
        {
            originalURL: 'https://lighthouse.alphacamp.co/',
            shortenURL: '67890'
        },

    )
    db.close()
    console.log('done')
})

