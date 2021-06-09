const axios = require('axios')

exports.homeRoutes = (req,res)=>{
    axios.get('http://localhost:3000/news')
         .then(function(response){
             res.render('main',{news: response.data})
         })
         .catch(err=>{
             res.send(err)
         })
}

