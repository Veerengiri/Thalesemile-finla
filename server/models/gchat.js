const mongoose = require('mongoose');

const gchatSchema = mongoose.Schema({
    cid:{type:String,required:true},
    sid:{type:String,required:true},
    msg:{type:String,required:true},
    name:{type:String,required:true}
},
{
    timestamps: {
        createdAt: 'created_at',
    }
})
module.exports = mongoose.model('gchat',gchatSchema);