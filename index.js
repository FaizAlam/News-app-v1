const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts')



//EJS
app.use(expressLayouts)
app.set("view engine","ejs")

//BodyParser
app.use(bodyParser.urlencoded({extended:false}))

//MongoDB
const db = require('./config/keys').MongoURI

mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true})
  .then(()=>console.log("database connected"))
  .catch(err=>console.log(err))


//Routes
app.use('/',require('./routes/index'))


const port = 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})