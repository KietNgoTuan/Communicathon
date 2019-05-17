const express=require('express');
const router=express.Router();
const jwt = require('express-jwt');
const auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});
//Creer des routers pour le profil et le login, registre comme app.get('/...')
var ctrlProfile=require('../control/profile');
var ctrlAuth=require('../control/authe');
const CardId=require('../control/cardID');
const Liens = require('../control/lien');
const Fiches = require('../control/fiche');

//get profile
router.get('/profile', auth, ctrlProfile.profileRead);
//authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);
router.get('/cardID',auth, CardId.view);
router.put('/cardID',auth, CardId.edit);
router.post('/liens',auth, Liens.create);
router.get('/liens',auth, Liens.view);
router.delete('/liens/:id', auth, Liens.remove);
router.post('/fiches',auth,Fiches.create);
router.get('/fiches', auth, Fiches.view);
router.put('/fiches',auth, Fiches.edit);
router.delete('/fiches/:id',auth, Fiches.remove);

module.exports=router;