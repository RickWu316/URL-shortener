const shortenURL = require('../shortenURL') // 載入 todo model

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

