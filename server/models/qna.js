const mongoose = require('mongoose');

const qnaSchema = mongoose.Schema({
    sid:{type:String,required:true},
    aid:{type:String,required:true},
    msg:{type:String,required:true},
},
{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})
module.exports = mongoose.model('qna',qnaSchema);