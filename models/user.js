const mongoose=require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/testapp1");//testapp1 is the  name of the schema app


//Basic structure of schema what we want create in front end
const userSchema=mongoose.Schema({
    image:String,
    name: String,
    email:String
   
})
module.exports=mongoose.model('user',userSchema);