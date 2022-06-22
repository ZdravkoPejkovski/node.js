// const { text } = require("express")
const { application } = require("express")
const express = require("express")
const app = express()
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.set('view engine', 'ejs')
// app.use(logger) is middleware, and always have to be defined on the top of the page.
// app.use(logger) must stand before .get req in order to print out user, for everyting works from top to bottom.
//  This middleware works on app.get ONLY!

// app.get('/', logger, (req, res)=>{
//     // console.log("Here")
//     res.render("index", {text: "World"})
//     })
     
   
    // res.download("server.js")
    // res.json({message:"Error"})
    // res.sendStatus(500).json ({message: "Error"})
    // res.send('Hi')

const userRouter = require('./routes/users')

app.use('/users', userRouter)
function logger(req, res, next){
    console.log(req.originalUrl)
    next()
}
app.listen(3000)