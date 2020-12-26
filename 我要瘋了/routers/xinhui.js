let express = require('express');
let router = express.Router();
router.use(express.static('./public')); // 把 public 中的檔案全部丟上來
// middleware that is specific to this router

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route

router.get('/', function(req, res) {
  res.send(
    'xinhui\'s home page'+'<br>'+
    '<a href="/user/xinhui/about"> about </a>'+'<br>'+
    '<a href="/user/xinhui/classA.html"> classA </a>'
    );
});

// define the about route
router.get('/about', function(req, res) {
  res.send(
    '<h1> About xinhui </h1>'+
    '\n <img src="https://www.omgtw.com/upload/article/original/be134fac90625546754962aeef34925c.jpg" height="60%">'
    );
});

module.exports = router;
