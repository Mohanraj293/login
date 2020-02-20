var express = require('express');
var router = express.Router();

var users =[
  {
    userid: 'Itdept@aith.in', password: 'Itdept'
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Backend server");
});

  router.post('/login', function(req,res){
    let result = users.find(users => users.userid == req.body.userid);
    if(result){
      if(result.password == req.body.password){
        res.status(200).send({
          message : "Login Success"
        })
      }
      else{
        res.status(200).send({
          message : "Incorect Password"
        })
        }
    }
    else{
      res.status(200).send({
        message : "User Not Found"
      })
    }
  })

  


module.exports = router;
