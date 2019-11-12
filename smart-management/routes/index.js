var express = require('express');
var router = express.Router();
var firebase = require('firebase');
const User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pítons Pizazzaria' });
});
router.get('/cardapio', function(req, res, next) {
  res.render('cardapio', { title: 'Cardápio' });
});
router.get('/monte-sua-pizza', function(req, res, next) {
  res.render('montesuapizza', { title: 'Monte sua pizza' });
});
router.get('/galeria', function(req, res, next) {
  res.render('galeria', { title: 'Galeria' });
});
router.get('/historia', function(req, res, next) {
  res.render('historia', { title: 'História' });
});
router.get('/promocoes', function(req, res, next) {
  res.render('promocoes', { title: 'Promoções' });
});
router.get('/beneficios-da-pizza', function(req, res, next) {
  res.render('beneficiosdapizza', { title: 'Benefícios da pizza' });
});
router.get('/cadastro', function(req, res, next) {
  res.render('cadastro', { title: 'Express' });
});
router.post('/cadastro', function(req, res, next) {
  const user = req.body.user;
  User.create(user).then((id)=>{
    res.redirect('/galeria');
    console.log(id);
  }).catch((error) => {
    console.log(error);
    res.redirect('/error');
  });
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
