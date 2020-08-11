var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'FrontPractice' });
});


router.get('/pages/step1', (req, res, next) => {
  // res.render('/pages/step1', {title: 'Step1'})
  res.send('asdasdasdasdasdasdsad')
});
module.exports = router;
