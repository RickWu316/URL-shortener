const mongoose = require('mongoose')
const shortenURL = require('../shortenURL') // 載入 todo model
mongoose.connect('mongodb://localhost/URLShortener', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', () => {
    console.log('mongodb error!')
})
// db.once('open', () => {
//     console.log('mongodb connected!')
// })

db.once('open', async () => {
    console.log('mongodb connected!')

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

