router.get('/', function(req, res, next) {
    res.render('index' , {expArr: expArr} );
  });
  
   router.post('/addtodo', function (req, res, next) {
  
  
  
   var exp = new Object();
  
   exp.name = req.body.name;
   exp.value = req.body.val;
   exp.date = req.body.date;
   exp.description = req.body.descr;
  
  
  
  
   expArr.push(exp);
   res.redirect('/');
  
    });
   router.post('/removetodo', function (req, res, next) {
  
  
   expArr.pop();
  
   res.redirect("/");
  
   });
  
  
    module.exports = router;  