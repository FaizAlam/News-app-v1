const mongoose = require('mongoose')

const NewsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    },
    pubTime:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    }
})

const News = mongoose.model('News',NewsSchema,'userdbs')

module.exports = News