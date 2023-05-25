const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    author:{type:String,required:true},
    title:{type:String,required:true},
    desc:{type:String,required:true},
    dp:{type:String,required:true}
},
{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})
module.exports = mongoose.model('blog',blogSchema);