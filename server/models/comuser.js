const mongoose = require('mongoose');

const comuserSchema = mongoose.Schema({
    cid:{type:String,required:true},
    uid:{type:String,required:true},
},
{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})
module.exports = mongoose.model('comuser',comuserSchema);