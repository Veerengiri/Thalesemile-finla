const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type: String,required:true,unique: true},
    age:{type:Number,required:true},
    bg:{type:String,required:true},
    ttype:{type:String,required:true},
    password:{type:String,required:true},
    pincode:{type:String,required:true},
    address:{type:String,required:true},
    coms:{type:Number,required:true},
    des:{type:String},
},
{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

module.exports = mongoose.model('user',userSchema);