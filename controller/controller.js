var News = require('../models/news')


exports.findnews=(req,res)=>{
    News.find({},(err,data)=>{
        if(err){
            res.status(500)
            console.log(err)
        }else{
            res.send(data)
        }
    })
}
