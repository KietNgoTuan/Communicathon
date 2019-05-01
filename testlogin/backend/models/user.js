const mongoose=require('mongoose');
const crypto=require('crypto');//Utiliser pour encoder le password
const Schema = mongoose.Schema;
const jwt =require('jsonwebtoken');//Utiliser pour creer un token 
//Un token qide à continuer et à verifier l'user facilement sans tous reverifier son profil
let User = new Schema({
   
   nom:{ type: String, required: [true, "can't be blank"]},
   prenom:{ type: String, required: [true, "can't be blank"]},
   email:{type:String,unique:true,required: [true, "can't be blank"]},
   hash:String,
   salt:String
});
//Encoder password
User.methods.setPassword=function(password){
 this.salt=crypto.randomBytes(16).toString('hex');
 this.hash=crypto.pbkdf2Sync(password,this.salt,1000,64,'sha512').toString('hex');

};
//Verifier le password
User.methods.validPassword=function(password){
 var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
 return this.hash===hash;
};
//Creer un token 
User.methods.generateJwt=function(){
	var expiry=new Date();
	expiry.setDate(expiry.getDate()+10);//Creer un expire temps pour le token,verifier la presence d'user
	return jwt.sign({
	  _id:this.id,
	  email:this.email,
	  nom:this.nom,
	  prenom:this.prenom,
	  exp:parseInt(expiry.getTime()/1000),
	},"MY_SECRET");
};
module.exports=mongoose.model('User',User);