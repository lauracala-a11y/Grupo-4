var express = require('express');
var router = express.Router();
var firebase = require('firebase');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/cardapio', function(req, res, next) {
  res.render('cardapio', { title: 'Express' });
});
router.get('/monte-sua-pizza', function(req, res, next) {
  res.render('montesuapizza', { title: 'Express' });
});
router.get('/galeria', function(req, res, next) {
  res.render('galeria', { title: 'Express' });
});
router.get('/historia', function(req, res, next) {
  res.render('historia', { title: 'Express' });
});
router.get('/promocoes', function(req, res, next) {
  res.render('promocoes', { title: 'Express' });
});
router.get('/beneficios-da-pizza', function(req, res, next) {
  res.render('beneficiosdapizza', { title: 'Express' });
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
