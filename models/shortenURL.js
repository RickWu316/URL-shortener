const mongoose = require('mongoose')
const Schema = mongoose.Schema


const shortenURL = new Schema({
    originalURL: {
        type: String, // 資料型別是字串
        required: true // 這是個必填欄位
    },
    shortenURL: {
        type: String, // 資料型別是字串
        required: true // 這是個必填欄位
    }
})
module.exports = mongoose.model('shortenURL', shortenURL)