const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    title: {
        
    }
},
    { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema)

