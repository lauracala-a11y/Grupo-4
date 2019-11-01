var express = require('express');
var router = express.Router();
var firebase = require('firebase');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/teste', function(req, res, next) {
  res.render('pag', { title: 'Express' });
});
router.get('/teste2', function(req, res, next) {
  res.render('pag2', { title: 'Express' });
});
router.get('/teste3', function(req, res, next) {
  res.render('pag3', { title: 'Express' });
});
router.get('/teste4', function(req, res, next) {
  res.render('pag4', { title: 'Express' });
});
router.get('/teste5', function(req, res, next) {
  res.render('pag5', { title: 'Express' });
});
router.get('/teste6', function(req, res, next) {
  res.render('pag6', { title: 'Express' });
});
router.post('/login', function(req, res, next) {
  const userData = req.body.user;
  firebase.auth().signInWithEmailAndPassword(userData.email, userData.password).then((firebase) =>{
    console.log("____________________________________________________________________________");
    console.log(firebase.user.uid);
    res.redirect('/');
  });
});
//LOGIN.....
module.exports = router;
