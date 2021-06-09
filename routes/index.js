const express = require('express')
const router = express.Router()
const News = require('../models/news')
const controller = require('../controller/controller')
const services = require('../services/render')
router.get('/',services.homeRoutes)


function side_data(){
    News.find({},(err,result)=>{
        if(err){
            console.log(err)
        }else{
            return result
        }
    })
}

async function routeHandler(req, res, next) {
    try {
      const side_data = await side_data();
      res.render('sidebar', {side_data});
    } catch (err) {
      next(err);
    }
  };



router.get('/news',controller.findnews)
router.get('/full/:title',(req,res)=>{
    const title=req.params.title
    News.findOne({title:title},function(err,result){
        if(err){
            console.log(err)
        }else{
            res.render('full',{news:result})
           // console.log(result)
        }
    })
})


module.exports = router