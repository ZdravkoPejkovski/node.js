const express = require("express")
const router = express.Router()
router.use(logger)

router.get("/", (req, res) =>{
    console.log(req.query.name)
    res.send("User List")
    })
    
router.get("/new", (req, res) => {
    // res.send("User New Form")
    res.render("users/new") 
    // {firstName: "Test"})
})
router.post("/", (req, res)=>{
    const isValid = true
    if(isValid){
        users.push({firstName: req.body.firstName})
        res.redirect(`/users/${users.lenght - 1}`)
    }else {
        console.log("Error")
        res.render('users/new', {firstName: req.body.firstName})
    }
//    console.log(req.body.firstName)
   res.send("Hi")
    // res.send('Create User')
})
    router
    .route("/:id")
    .get((req, res) =>{
        console.log(req.user)
        console.log(req.user)
        res.send(`Get User With ID ${req.params.id}`)
    })
    .put((req, res) =>{
        res.send(`Update User With ID ${req.params.id}`)
    }).delete((req, res) =>{
        res.send(`Delete User With ID ${req.params.id}`)
    })
   
    //     // the ":id"depends how "id" is named
    //     // res.send("User Get")
    //     res.send
    // })
    // router.get("/:id", (req, res) =>{
    //     res.send(`Get User With ID ${req.params.id}`)
    // })
    // router.put("/:id", (req, res) =>{
    //     res.send(`Update User With ID ${req.params.id}`)
    // })
    // router.delete("/:id", (req, res) =>{
    //     res.send(`Delete User With ID ${req.params.id}`)
    // }) (This code is transfered above in order to have cleaner code)

  const users = [{name: "Kyle"}, {name: "Sally"}]
router.param("id",(req, res, next, id)=>{
    // console.log(id)
    req.user = users[id]
    next()
})
function logger(req, res, next){
    console.log(req.originalUrl)
    next()
}

module.exports = router
