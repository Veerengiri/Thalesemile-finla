const mongoose = require('mongoose');

const comSchema = mongoose.Schema({
    name:{type:String,required:true},
    des:{type:String,required:true},
    ttype:{type:String,required:true},
    agegroup:{type:String,required:true},
    memebers:{type:Number,required:true},
},
{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})
module.exports = mongoose.model('com',comSchema);