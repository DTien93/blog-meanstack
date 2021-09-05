const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,   
    },
    desc: {
        
    }
},
    { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema)

