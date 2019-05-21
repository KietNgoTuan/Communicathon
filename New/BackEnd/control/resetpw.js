const mongoose = require('mongoose');
const User = mongoose.model('User');
const sgMail = require('@sendgrid/mail');
const fs=require('fs');
var SENDGRID_API_KEY = fs.readFileSync('api_key.txt', 'utf8');
sgMail.setApiKey(SENDGRID_API_KEY);
module.exports.resetpassword=function(req,res){
  if(!req.body.email||!req.body.password){
  	return res.status(400).json({"message":"Rempli tous case"});
  }
  console.log(req.body.password);
  User.findOne({email:req.body.email},function(err,obj){
		if(err){return res.status(404).json(err); }
		if(!obj){
			return res.status(400).json({"message":"Email doesn't exist"});	
		}
		obj.setPassword(req.body.password);
		let name =obj.nom +'-'+obj.prenom;
		let url ='http://localhost:4200/login';
		obj.save(function(err){
		         if(err){
		         	res.status(404).json({"message":"Can't change your password"});	
		         }
	            });
		const msg = {
         to: obj.email,
         from: 'commnunicathon@gmail.com',
         subject: 'Reset your password',
         text: 'your new password is updated',
         html:'<h2>Communicathon email </h2><br>'+ 
              '<p>Your password is reset </p><br>'+
              '<p>' +'<a href="'+url+'">Click this link to login to Communicathon</a>' + ' </p>',
       };
       sgMail.send(msg,(err,result)=>{
  	      if(err){console.log(err);
         }else{
         	res.status(200).json({"message":"Your password is change"});	
         }

       });
	 })


}
