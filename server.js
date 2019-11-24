const express = require("express");
const app = express();
const mongoose = require('mongoose');
const server = app.listen(8000, () => console.log("listening on port 8000"));

mongoose.connect('mongodb://localhost/hello_DB', {useNewUrlParser: true});
const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
   })
   const User = mongoose.model('User', UserSchema);

   app.post('/users', (req, res) =>{
    const user = new User();
    user.name = req.body.name;
    user.age = req.body.age;
    user.save()
      .then(newUserData => console.log('user created: ', newUserData))
      .catch(err => console.log(err));
     
    res.redirect('/');
  })
